import { Player } from './Player.js';
import { BulletMan } from "./BulletMan.js";
import { EntityMan } from "./EntityMan.js";
import { Enemies } from "./Enemies.js";
import { ItemMan } from "./Items.js";
import { Debug } from "./Debug.js";
import { UserInterface, TitleScreen, ImageButton } from "./TitleScreen.js";


const SCALE = 1.6;
const WIDTH = 1280*SCALE;
const HEIGHT = 720*SCALE;

let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;



class Game extends Phaser.Scene {

    static cameras;
    music;


    constructor(config) {
        super({ key: 'game'});
    }

    init(data) {}

    loading_screen() {
        //   https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(width/2-160, height/2-25, 320, 50);
        
       
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);
        
        var percentText = this.make.text({
            x: width / 2,
            y: height / 2,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);
        
        var assetText = this.make.text({
            x: width / 2,
            y: height / 2 + 50,
            text: '',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        assetText.setOrigin(0.5, 0.5);
        
        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            let w = 300 * value;
            progressBar.fillRect(width/2-150, height/2-15, w, 30);
        });
        
        this.load.on('fileprogress', function (file) {
            assetText.setText('Loading asset: ' + file.key);
        });
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        }, this);
    }

    preload() {
        this.input.setDefaultCursor('crosshair');
        this.loading_screen();
        
        this.load.image({
            key: 'playerfrag',
            url: 'data/gfx/playerFrag.svg'
        });
        
        this.load.image({
            key: 'chain',
            url: 'data/gfx/chaingun.png'
        });
        this.load.image({
            key: 'chainicon',
            url: 'data/gfx/chaingunIcon.svg'
        });
        this.load.image({
            key: 'chainAmmo',
            url: 'data/gfx/chainAmmo.png'
        });

        this.load.image({
            key: 'shotgun',
            url: 'data/gfx/shotgun.svg'
        });
        this.load.image({
            key: 'shotgunicon',
            url: 'data/gfx/shotgunIcon.svg'
        });
        this.load.image({
            key: 'shotgunAmmo',
            url: 'data/gfx/shotgunAmmo.svg'
        });
        
        this.load.image({
            key: 'slingshot',
            url: 'data/gfx/slingshot.svg'
        });
        this.load.image({
            key: 'slingshoticon',
            url: 'data/gfx/slingshotIcon.svg'
        });
        this.load.image({
            key: 'slingAmmo',
            url: 'data/gfx/slingshotAmmo.svg'
        });
        
        
        this.load.image({
            key: 'background',
            url: 'data/gfx/Background.svg',
            normalMap: 'data/gfx/BackgroundNormal.svg'
            // url: 'data/gfx/backgroundLab.jpg',
        });
        //-----------------------------------
        this.load.audio('game_music', 'data/sfx/music.wav');
        this.load.audio('shoot_pop', 'data/sfx/cork_edit.mp3');
        this.load.audio('shoot_twang', 'data/sfx/shoot.ogg');
        this.load.audio('shoot_bang', 'data/sfx/hit_3.wav');
        this.load.audio('death1', 'data/sfx/blub_hurt1.wav');
        this.load.audio('death2', 'data/sfx/blub_hurt2.wav');
        //-----------------------------------
        this.load.text('CovidRed', 'data/fx/CovidRed.frag');
        this.load.text('CovidGreen', 'data/fx/CovidGreen.frag');
        this.load.text('CovidBlue', 'data/fx/CovidBlue.frag');
        this.load.text('CovidVert', 'data/fx/Covid.vert');
        //--------------------------------------
        
    }


    create(data) {
        // change shader to spritesheet. 
        this.add.shader(
            new Phaser.Display.BaseShader('---', this.cache.text.get('CovidGreen'), this.cache.text.get('CovidVert')), 
            0, 0, 300, 300, []
        ).setRenderToTexture('virus_green');
        this.add.shader(
            new Phaser.Display.BaseShader('----', this.cache.text.get('CovidRed'), this.cache.text.get('CovidVert')),
            0, 0, 500, 500, []
        ).setRenderToTexture('virus_red');
        this.add.shader(
            new Phaser.Display.BaseShader('------', this.cache.text.get('CovidBlue'), this.cache.text.get('CovidVert')),
            0, 0, 200, 200, []
        ).setRenderToTexture('virus_blue');
        
        this.physics.world.setBounds(0, 0, WIDTH*2, HEIGHT*2);
        this.cameras.main.setBounds(0, 0, WIDTH*2, HEIGHT*2);

        this.add.image(0, 0, 'background')
            .setPipeline('Light2D')
            .setOrigin(0, 0)
            .setDisplaySize(WIDTH*2, HEIGHT*2);
            
        this.lights.enable().setAmbientColor(0x555555);
        var heart_light = this.lights.addLight(1689, 1015, 100, 0xFF3333);
        this.hlt = this.tweens.add({
            targets: heart_light,
            radius: 500,
            duration: 1000,
            ease: 'Sine.InOut',
            repeat: -1, 
            yoyo: true
        });
        // update light speed update music
        this.events.on('nextEvent', function (value) {  // make nextEvent happen with time instead.
                this.hlt.timeScale *= 1.5;
                this.music.rate += 0.01;
                // use another tween to raise the music slowly
                // console.log("set")
                // ('duration', curAngle, true);
        }, this);
        
        EntityMan.Init(this);
        ItemMan.Init(this);
        BulletMan.Init(this);
        Debug.Init(this);
        
        this.music = this.sound.add('game_music', {loop: true, volume: 0.2, rate: 0.5});
        this.music.play();

        this.input.setDefaultCursor('crosshair');
        this.timer = 0;
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.time.delayedCall(1000, () => {
    			this.scene.start('gameover', { fadeIn: true, score: EntityMan.player.score, win: false })
    		});
        });
        this.events.once('gamewin', ()=>{
             // kill all enemies.
            EntityMan.enemies.children.each(child => {
                switch(child.type) {
                    case Enemies.BLUE:
                    case Enemies.GREEN:
                        EntityMan.scene.sound.play('death1');
                        break;
                    case Enemies.RED:
                        EntityMan.scene.sound.play('death2');
                        break;
                }
                child.destroy();
            });
            // explode them w/confetti.
            // hide ui
            this.events.emit('livesChange', 0);
            // launch gameover
            
            const time_ms = 2000;
            // let gm = EntityMan.scene.sound.get('game_music');
            this.tweens.add({
                targets:  this.music,
                volume:   0,
                duration: time_ms,
                onComplete: ()=>{
                    this.scene.launch('gameover', { fadeIn: true, score: EntityMan.player.score, win: true });
                    this.scene.bringToTop('gameover');
                }
            });
        }, this);
        
        
        this.scene.launch('ui'); 
        this.scene.bringToTop('ui');
    }


  

    update(time, delta) {
        this.cameras.main.startFollow(EntityMan.player);
        let pointer = this.input.mousePointer;
        const wp = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
        pointer.worldX = wp.x;
        pointer.worldY = wp.y;
        EntityMan.Update(time, delta);
        BulletMan.Update(time, delta);
        Debug.update(time, delta);
        
    }
}




class GameOver extends Phaser.Scene {

    
    constructor(config) {
        super({key: 'gameover'});
    }

    preload() {
        this.load.image({ key: 'gameoverTxt', url: 'data/gfx/gameover.png' });
        this.load.image({ key: 'playagainbtn', url: 'data/gfx/PlayAgainButton.svg' });
        this.load.image({ key: 'mainmenubtn', url: 'data/gfx/MainMenuButton.svg' });
        this.load.image({ key: 'victory', url: 'data/gfx/victory4.png' });
        this.load.audio('fanfare', 'data/sfx/tempWinSong.mp3');
    }


    create(data) {
        let w = this.sys.canvas.width;
        let h = this.sys.canvas.height;
        let logo_id = (data.win) ?  'victory' : 'gameoverTxt'; 
        this.logo = this.add.image(w/2, h/6, logo_id).setOrigin(0.5, 0.5).setScale(0.8);
        this.scoreTxt = this.add.text(w/2, h/3, 'Final Score: ' + data.score, { fill: '#0f0' }).setFontSize(60).setOrigin(0.5, 0.5);
        this.mm = this.add.ImgButton(w/2, h/1.8, 'mainmenubtn', () => this.mainMenu()).setOrigin(0.5, 0.5);
        this.rs = this.add.ImgButton(w/2, h/1.5, 'playagainbtn', () => this.playAgain()).setOrigin(0.5, 0.5);
        // the music and logo are pretty lame
        if(data.win) {
            this.music = this.sound.add('fanfare', {loop: true });
            this.music.play();
            
        }
            // this.music = this.sound.play('fanfare',  { loop: true });
    }
    
    playAgain() {
        // gotta do this. else states are left-over from different systems
        this.music.stop();
        this.scene.remove('game');
        this.scene.add('game', Game, false);
    	this.scene.start('game', { fadeIn: true });
    }
    
    mainMenu() {
        this.music.stop();
        this.scene.remove('game');
        this.scene.add('game', Game, false);
        this.scene.start('default', { fadeIn: true })
    }
    
    
    
    
    
     
}








// create a webgl1 & then a webgl1 and webgl experimental fallback
const myCustomCanvas = document.createElement('canvas');
document.body.appendChild(myCustomCanvas);
const contextCreationConfig = {
    alpha: true,
    depth: false,
    // antialias: true,
    // premultipliedAlpha: true,
    // stencil: true,
    preserveDrawingBuffer: false,
    failIfMajorPerformanceCaveat: false,
    powerPreference: 'default'
};

// const myCustomContext = myCustomCanvas.getContext('webgl2', contextCreationConfig);
const myCustomContext = myCustomCanvas.getContext('webgl', contextCreationConfig);
myCustomContext.getExtension('OES_standard_derivatives');

// type: Phaser.AUTO,
const gameConfig = {
    type: Phaser.WEBGL,
    canvas: myCustomCanvas,
    context: myCustomContext,
    maxLights: 11,
    width: clientWidth,
    height: clientHeight,
    // antialias: false,
    // premultipliedAlpha: false,
    mipmapFilter: 'LINEAR_MIPMAP_LINEAR',
    roundPixels: true,
    mode: Phaser.Scale.FIT,
    "callbacks.postBoot": function() {
        document.getElementsByTagName("canvas")[0].style.width = clientWidth + "px";
        document.getElementsByTagName("canvas")[0].style.height = clientHeight + "px";
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true,            // lights only work in debug mode?
            debugShowBody: false,   // yo Keep this off. I moved velocity to body also. Velocity now draws 1 pixel that somehow fixes broken lights
            debugShowVelocity: true // and keep this ON.
        }
    },
    // renderer: { mipmapFilter: 'LINEAR_MIPMAP_LINEAR' },
    // renderer: { mipmapFilter: 'NEAREST_MIPMAP_LINEAR' },
    // render: {
    //     roundPixels: true,
    // },
    scene: [TitleScreen, Game, UserInterface, GameOver]
 };
var game = new Phaser.Game(gameConfig);