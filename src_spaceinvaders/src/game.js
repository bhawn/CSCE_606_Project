import kaboom from "../../node_modules/kaboom";
import { playableMap } from "./PlayableMap";
const MOVE_SPEED = 200;
const k = kaboom({
  global: true,
  // enable full screen
  fullscreen: true,

  scale: 1,
  background: [0.1, 0, 0, 0],
  // for debug mode

  debug: true,
});

loadRoot("https://i.imgur.com/");
loadSprite("space-invader", "m2A06Eg.png"); // https://imgur.com/m2A06Eg
loadSprite("wall", "gqVoI2b.png");
loadSprite("space-ship", "Wb1qfhK.png");

scene("game", ({ level, score }) => {
  //create layers
  //An array
  // background layer, object layer as default, UI layer
  // initialise with obj as default
  layers(["bg", "obj", "ui"], "obj");

  //level configuration
  const levelCfg = {
    //every sprite has a width and height
    width: 20,
    height: 20,
    // parameters 1: name of the sprite, 2: solid , 3: tag

    // load in some sprites
    "^": () => [sprite("space-invader"), scale(0.7)],
    "!": () => [sprite("wall", "left-wall")],
    "&": () => [sprite("wall", "right-wall")],
  };

  const gameLevel = addLevel(playableMap[level], levelCfg);
  // add some text to display score and position on UI layer
  // default layer is 'obj '
  // so change layer to 'ui' for adding score
  //define this as a method so that it can be passed to other levels
  add([text("Score:"), scale(0.3), pos(20, 6), fixed()]);
  const scoreLabel = add([
    //text(score),
    text(parseInt(score)),
    pos(115, 6),
    scale(0.3),
    ,
    fixed(),
    layer("ui"),
    {
      value: score,
    },
  ]);

  // add a text to define which level we currently are in
  // parameters for add are text, position
  add([
    text("Level: " + parseInt(level + 1)),
    pos(20, 22),
    scale(0.3),
    fixed(),
  ]);

  const player = add([
    sprite("space-ship"),
    pos(width() / 2, height() / 2),
    origin("center"),
  ]);

  keyDown("left", () => {
    player.move(-MOVE_SPEED, 0);
  });

  keyDown("right", () => {
    player.move(MOVE_SPEED, 0);
  });
});

go("game", { level: 0, score: 0 });
