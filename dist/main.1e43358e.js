// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/Math.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetRandomVec2 = GetRandomVec2;
exports.TossCoin = TossCoin;
exports.getRandom = getRandom;

function TossCoin(prob) {
  return Math.random() < prob;
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function GetRandomVec2(xMin, xMax, yMin, yMax) {
  return {
    x: getRandom(xMin, xMax),
    y: getRandom(yMin, yMax)
  };
}
},{}],"src/Items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Items = exports.ItemSound = exports.ItemMan = exports.ItemIcons = exports.Item = void 0;

var _EntityMan = require("./EntityMan.js");

var _Math = require("./Math.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Items = {
  CHAIN: 'chain',
  SHOTGUN: 'shotgun',
  SLINGSHOT: 'slingshot'
};
exports.Items = Items;
var ItemIcons = {
  CHAIN: 'chainicon',
  SHOTGUN: 'shotgunicon',
  SLINGSHOT: 'slingshoticon'
};
exports.ItemIcons = ItemIcons;
var ItemSound = {
  CHAIN: 'shoot_pop',
  SHOTGUN: 'shoot_bang',
  SLINGSHOT: 'shoot_twang'
};
exports.ItemSound = ItemSound;

var ItemMan = /*#__PURE__*/function () {
  function ItemMan() {
    _classCallCheck(this, ItemMan);
  }

  _createClass(ItemMan, null, [{
    key: "Init",
    value: // ground Items
    function Init(scene) {
      ItemMan.scene = scene;
      ItemMan.items = scene.add.group({
        classType: Item,
        maxSize: 4,
        runChildUpdate: true,
        removeCallback: function removeCallback(item) {
          ItemMan.scene.lights.removeLight(item.glow);
        }
      });
      scene.physics.add.overlap(ItemMan.items, _EntityMan.EntityMan.player, getItem);
    }
  }, {
    key: "Update",
    value: function Update() {}
  }, {
    key: "addItem",
    value: function addItem(type, loc) {
      var i = ItemMan.items.get(loc.x, loc.y, type);

      if (i) {
        i.setPipeline('Light2D');
        i.glow = ItemMan.scene.lights.addLight(i.x, i.y, 200, 0xFF3333);
      }
    }
  }]);

  return ItemMan;
}();

exports.ItemMan = ItemMan;

_defineProperty(ItemMan, "items", void 0);

_defineProperty(ItemMan, "scene", void 0);

function getItem(Item, Player) {
  switch (Item.type) {
    case ItemIcons.CHAIN:
      Player.SetWeapon(Items.CHAIN, 200);
      break;

    case ItemIcons.SLINGSHOT:
      Player.SetWeapon(Items.SLINGSHOT, -1);
      break;

    case ItemIcons.SHOTGUN:
      Player.SetWeapon(Items.SHOTGUN, 15);
      break;
    // Change player texture
  }

  Item.destroy();
}

var Item = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(Item, _Phaser$GameObjects$S);

  var _super = _createSuper(Item);

  function Item(scene, x, y, texture) {
    var _this;

    _classCallCheck(this, Item);

    _this = _super.call(this, scene, x, y, texture);

    _defineProperty(_assertThisInitialized(_this), "glow", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    switch (texture) {
      case ItemIcons.CHAIN:
        _this.setDepth(0.1);

        _this.setScale(0.6);

        _this.type = ItemIcons.CHAIN;
        scene.physics.world.enable(_assertThisInitialized(_this));
        break;

      case Items.CHAIN:
        _this.type = Items.CHAIN;

        _this.setScale(0.6);

        break;

      case Items.SLINGSHOT:
        _this.setScale(0.6);

        _this.type = Items.SLINGSHOT;
        break;

      case ItemIcons.SLINGSHOT:
        _this.setDepth(0.1);

        _this.setScale(0.6);

        _this.type = ItemIcons.SLINGSHOT;
        scene.physics.world.enable(_assertThisInitialized(_this));
        break;

      case Items.SHOTGUN:
        _this.setScale(1.5);

        _this.type = Items.SHOTGUN;
        break;

      case ItemIcons.SHOTGUN:
        _this.setDepth(0.1);

        _this.setScale(0.6);

        _this.type = ItemIcons.SHOTGUN;
        scene.physics.world.enable(_assertThisInitialized(_this));
        break;
    }

    scene.add.existing(_assertThisInitialized(_this));

    _this.setDepth(0.2);

    return _this;
  }

  _createClass(Item, [{
    key: "update",
    value: function update() {}
  }], [{
    key: "RandomItem",
    value: function RandomItem() {
      return (0, _Math.TossCoin)(0.3) ? ItemIcons.CHAIN : ItemIcons.SHOTGUN;
    }
  }]);

  return Item;
}(Phaser.GameObjects.Sprite);

exports.Item = Item;
Phaser.GameObjects.GameObjectFactory.register('item', function (x, y, texture) {
  var cc = new Item(this.scene, x, y, texture);
  this.displayList.add(cc);
  this.updateList.add(cc);
  return cc;
});
},{"./EntityMan.js":"src/EntityMan.js","./Math.js":"src/Math.js"}],"src/Player.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

var _BulletMan = require("./BulletMan.js");

var _Items = require("./Items.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Player = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(Player, _Phaser$GameObjects$S);

  var _super = _createSuper(Player);

  function Player(scene, x, y, r) {
    var _this;

    _classCallCheck(this, Player);

    var circBody = scene.make.graphics().fillStyle(0x6666ff).fillCircle(r, r, r).generateTexture('PlayerBody', r * 2, r * 2);
    circBody.destroy();
    _this = _super.call(this, scene, x, y, 'PlayerBody');

    _defineProperty(_assertThisInitialized(_this), "a1", void 0);

    _defineProperty(_assertThisInitialized(_this), "a2", void 0);

    _defineProperty(_assertThisInitialized(_this), "weapon", void 0);

    _defineProperty(_assertThisInitialized(_this), "ammo", void 0);

    _defineProperty(_assertThisInitialized(_this), "shoot", void 0);

    _defineProperty(_assertThisInitialized(_this), "keys", void 0);

    _defineProperty(_assertThisInitialized(_this), "radius", void 0);

    _defineProperty(_assertThisInitialized(_this), "lives", void 0);

    _defineProperty(_assertThisInitialized(_this), "light", void 0);

    _defineProperty(_assertThisInitialized(_this), "particles", void 0);

    _defineProperty(_assertThisInitialized(_this), "score", void 0);

    _defineProperty(_assertThisInitialized(_this), "cooldown", void 0);

    var circArm = scene.make.graphics().fillStyle(0x808080).fillCircle(r, r, r / 4).strokeCircle(r, r, r / 4).generateTexture('arm', r * 2, r * 2);
    circArm.destroy();

    _this.setDepth(0.05);

    _this.a1 = scene.add.sprite(x + r, y, 'arm').setDepth(0.1);
    _this.a2 = scene.add.sprite(x, y + r, 'arm').setDepth(0.1); //--------------------------

    scene.physics.world.enable(_assertThisInitialized(_this));

    _this.body.setCollideWorldBounds(true);

    scene.add.existing(_assertThisInitialized(_this));

    _this.body.setCircle(r); //--------------------------------------------------


    if (!scene.sys.game.device.os.desktop) {
      scene.input.addPointer(2);
      _this.j1 = scene.plugins.get('rexvirtualjoystickplugin').add(scene, {
        x: 150,
        y: scene.cameras.main.displayHeight - 150,
        radius: 100
      });
      _this.cursorKeys = _this.j1.createCursorKeys();
      _this.pressedKeys = [];
    } //--------------------------------------------------


    scene.input.keyboard.on("keyup", _this.keyup, _assertThisInitialized(_this));
    scene.input.on("pointerdown", _this.mousedown, _assertThisInitialized(_this));
    scene.input.on("pointerup", _this.mouseup, _assertThisInitialized(_this));
    _this.keys = scene.input.keyboard.addKeys({
      W: Phaser.Input.Keyboard.KeyCodes.W,
      A: Phaser.Input.Keyboard.KeyCodes.A,
      S: Phaser.Input.Keyboard.KeyCodes.S,
      D: Phaser.Input.Keyboard.KeyCodes.D,
      UP: Phaser.Input.Keyboard.KeyCodes.UP,
      DOWN: Phaser.Input.Keyboard.KeyCodes.DOWN,
      LEFT: Phaser.Input.Keyboard.KeyCodes.LEFT,
      RIGHT: Phaser.Input.Keyboard.KeyCodes.RIGHT
    }); //--------------------------------------------------

    _this.particles = scene.add.particles('playerfrag');

    _this.particles.createEmitter({
      angle: {
        min: 240,
        max: 300
      },
      speed: {
        min: 400,
        max: 600
      },
      quantity: {
        min: 2,
        max: 10
      },
      lifespan: 4000,
      alpha: {
        start: 1,
        end: 0
      },
      scale: {
        min: 0.05,
        max: 0.4
      },
      rotate: {
        start: 0,
        end: 360,
        ease: 'Back.easeOut'
      },
      gravityY: 800,
      on: false
    }); //--------------------------------------------------


    _this.weapon = scene.add.item(x, y, _Items.Items.SLINGSHOT);
    _this.light = _this.scene.lights.addLight(0, 0, 150);
    _this.angle = 0;
    _this.radius = r;

    _this.body.setMaxVelocity(200, 200);

    _this.shoot = false;
    _this.ammo = 0;
    _this.score = 0;
    _this.cooldown = 0;
    _this.lives = 4;
    return _this;
  }

  _createClass(Player, [{
    key: "preUpdate",
    value: function preUpdate(time, deltaTime) {
      _get(_getPrototypeOf(Player.prototype), "preUpdate", this).call(this, time, deltaTime);

      this.keydown();
    }
  }, {
    key: "update",
    value: function update(time, dt) {
      var pc = this.body.center;

      if (this.scene.sys.game.device.os.desktop) {
        this.angle = Phaser.Math.Angle.Between(pc.x, pc.y, this.scene.input.mousePointer.worldX, this.scene.input.mousePointer.worldY);
      } else {
        var pointer = this.j1.pointerX == this.scene.input.pointer1.worldX ? this.scene.input.pointer2 : this.scene.input.pointer1;
        this.angle = Phaser.Math.Angle.Between(pc.x, pc.y, pointer.worldX, pointer.worldY);
      }

      var is_dir = Math.abs(this.angle) < 1.5708; // Am i facing left or right?

      if (this.shoot) {
        // messy fix this.
        var outPos = this.weapon.getRightCenter();
        var dir = is_dir ? -1 : 1;
        var offset = new Phaser.Geom.Point(20, 7 * dir);
        Phaser.Math.Rotate(offset, this.weapon.rotation);
        outPos.y += offset.y;
        outPos.x += offset.x;

        switch (this.weapon.type) {
          case _Items.Items.CHAIN:
            this.scene.cameras.main.shake(500); //shake(0.05, 500);

            this.body.x -= Math.cos(this.angle) * 2; // Push Player back

            this.body.y -= Math.sin(this.angle) * 2;
            this.scene.sound.play(_Items.ItemSound.CHAIN);

            _BulletMan.BulletMan.addBullet(_BulletMan.Bullets.CHAIN, outPos, this.angle); // To do: spawn muzzle flash


            --this.ammo;
            this.scene.events.emit('ammoChange', this.ammo);
            if (this.ammo <= 0) this.SetWeapon(_Items.Items.SLINGSHOT, this.ammo);
            break;

          case _Items.Items.SLINGSHOT:
            this.scene.sound.play(_Items.ItemSound.SLINGSHOT);

            _BulletMan.BulletMan.addBullet(_BulletMan.Bullets.SLINGSHOT, outPos, this.angle);

            this.shoot = false;
            break;

          case _Items.Items.SHOTGUN:
            // lol get it
            if (this.cooldown > 0) {
              this.cooldown -= dt;
              break;
            } else this.cooldown = 83;

            this.scene.sound.play(_Items.ItemSound.SHOTGUN);
            var dir1 = Math.sign(this.angle);

            _BulletMan.BulletMan.addBullet(_BulletMan.Bullets.SHOTGUN, outPos, this.angle + dir1 * 0.10);

            _BulletMan.BulletMan.addBullet(_BulletMan.Bullets.SHOTGUN, outPos, this.angle + dir1 * 0.05);

            _BulletMan.BulletMan.addBullet(_BulletMan.Bullets.SHOTGUN, outPos, this.angle);

            _BulletMan.BulletMan.addBullet(_BulletMan.Bullets.SHOTGUN, outPos, this.angle + dir1 * -0.05);

            this.shoot = false;
            --this.ammo;
            this.scene.events.emit('ammoChange', this.ammo);
            if (this.ammo <= 0) this.SetWeapon(_Items.Items.SLINGSHOT, this.ammo);
            break;

          default:
        }
      } // positioning


      this.light.setPosition(pc.x, pc.y);
      Phaser.Math.RotateTo(this.a1, pc.x, pc.y, this.angle - 0.7854, this.radius); // rotate arms

      Phaser.Math.RotateTo(this.a2, pc.x, pc.y, this.angle + 0.7854, this.radius);
      Phaser.Math.RotateTo(this.weapon, pc.x, pc.y, this.angle, this.radius); // rotate weapon

      this.weapon.rotation = this.angle; // weapon angle

      this.weapon.setFlipY(!is_dir); // not upside down.
    }
  }, {
    key: "keydown",
    value: function keydown() {
      var A = this.keys.A.isDown || this.keys.LEFT.isDown;
      var D = this.keys.D.isDown || this.keys.RIGHT.isDown;
      var W = this.keys.W.isDown || this.keys.UP.isDown;
      var S = this.keys.S.isDown || this.keys.DOWN.isDown;

      if (!this.scene.sys.game.device.os.desktop) {
        A |= this.cursorKeys.left.isDown;
        D |= this.cursorKeys.right.isDown;
        W |= this.cursorKeys.up.isDown;
        S |= this.cursorKeys.down.isDown;
        if (this.pressedKeys[1] != A) this.keyup({
          keyCode: 65
        });
        if (this.pressedKeys[2] != D) // 
          this.keyup({
            keyCode: 68
          });
        if (this.pressedKeys[3] != W) this.keyup({
          keyCode: 87
        });
        if (this.pressedKeys[4] != S) this.keyup({
          keyCode: 83
        });
        this.pressedKeys[1] = A;
        this.pressedKeys[2] = D;
        this.pressedKeys[3] = W;
        this.pressedKeys[4] = S;
      }

      if (A && !D) this.body.velocity.x -= this.body.maxVelocity.x;else if (D && !A) this.body.velocity.x += this.body.maxVelocity.x;else if (A && D) this.body.velocity.x = 0;
      if (W && !S) this.body.velocity.y -= this.body.maxVelocity.y;else if (S && !W) this.body.velocity.y += this.body.maxVelocity.y;else if (W && S) this.body.velocity.y = 0;
    }
  }, {
    key: "keyup",
    value: function keyup(e) {
      switch (e.keyCode) {
        case 65:
        case 37:
          // left
          this.body.velocity.x = 0;
          break;

        case 87:
        case 38:
          // up 
          this.body.velocity.y = 0;
          break;

        case 68:
        case 39:
          // right
          this.body.velocity.x = 0;
          break;

        case 83:
        case 40:
          // down    
          this.body.velocity.y = 0;
          break;
      }
    }
  }, {
    key: "mousedown",
    value: function mousedown(e) {
      this.shoot = true;
    }
  }, {
    key: "mouseup",
    value: function mouseup(e) {
      this.shoot = false;
    }
  }, {
    key: "SetWeapon",
    value: function SetWeapon(weaponType, ammo) {
      this.scene.sound.play('pickup_item');

      if (weaponType == this.weapon.type) {
        this.ammo += ammo;
        (0, _BulletMan.score_fade)(this.x + 50, this.y - 50, '+' + ammo);
      } else {
        this.weapon.destroy();
        this.weapon = this.scene.add.item(this.x, this.y, weaponType);
        this.ammo = ammo; // if not alive, and picked up weapon somehow, match the alpha of respawn.

        if (!this.alive()) this.weapon.alpha = this.alpha;
      }

      this.scene.events.emit('ammoChange', this.ammo);
    }
  }, {
    key: "alive",
    value: function alive() {
      return this.alpha == 1;
    }
  }], [{
    key: "DoDamage",
    value: function DoDamage(enemy, player) {
      if (!player.alive()) return; // burst player

      player.particles.emitParticleAt(player.x, player.y); // Player disapear & set status to dead. alpha != 1 == dead

      player.alpha = 0;
      player.a1.alpha = 0;
      player.a2.alpha = 0;
      player.a2.alpha = 0;
      player.weapon.alpha = 0; // Turn off machine gun if shooting

      player.shoot = false; // disable movement.

      player.body.moves = false; // disable input. keyboard & mouse event

      player.scene.input.off('pointerdown', player.pointerdown, player); // subtract lives

      --player.lives; // turn off light

      player.light.setIntensity(0.01); // dont turn off completely. bug in phaser makes screen go black.
      // update UI

      _BulletMan.BulletMan.scene.events.emit('livesChange', player.lives); // check if gameover


      if (player.lives <= 0) {
        // fade out game music
        var time_ms = 6000;
        var gm = player.scene.sound.get('game_music');
        player.scene.tweens.add({
          targets: gm,
          volume: 0,
          duration: time_ms,
          onComplete: function onComplete() {
            gm.destroy();
          }
        }); // fade out camera

        player.scene.cameras.main.fadeOut(time_ms);
      } else {
        // make player respawn, Blink in
        player.scene.tweens.add({
          targets: [player, player.a1, player.a2, player.weapon],
          alpha: {
            start: 0,
            to: 1
          },
          ease: 'Bounce.In',
          delay: 3000,
          onComplete: function onComplete() {
            // enable movement.   some of this is redundant same with above
            player.body.moves = true;
            player.light.setIntensity(1);
            player.scene.input.on('pointerdown', player.mousedown, player); // player.body.stop(); // clear any leftover velocity
          }
        });
      }
    }
  }]);

  return Player;
}(Phaser.GameObjects.Sprite);

exports.Player = Player;
Phaser.GameObjects.GameObjectFactory.register('player', function (x, y, r) {
  var pl1 = new Player(this.scene, x, y, r);
  this.displayList.add(pl1);
  this.updateList.add(pl1);
  return pl1;
});
},{"./BulletMan.js":"src/BulletMan.js","./Items.js":"src/Items.js"}],"src/Enemies.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Enemy = exports.Enemies = void 0;

var _Math = require("./Math.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Enemies = Object.freeze({
  GREEN: "virus_green",
  RED: "virus_red",
  BLUE: "virus_blue"
});
exports.Enemies = Enemies;

var Enemy = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(Enemy, _Phaser$GameObjects$S);

  var _super = _createSuper(Enemy);

  function Enemy(scene, x, y, texture) {
    var _this;

    _classCallCheck(this, Enemy);

    _this = _super.call(this, scene, x, y, texture);

    _defineProperty(_assertThisInitialized(_this), "hp", void 0);

    _defineProperty(_assertThisInitialized(_this), "type", void 0);

    _defineProperty(_assertThisInitialized(_this), "v", 70);

    _defineProperty(_assertThisInitialized(_this), "timer", 0);

    scene.physics.world.enable(_assertThisInitialized(_this));

    _this.body.setCircle(_this.displayWidth / 2); // this includes frills.


    scene.add.existing(_assertThisInitialized(_this));

    _this.setScale(0.25);

    _this.angle = 0;

    _this.setDepth(0.2);

    return _this;
  }

  _createClass(Enemy, [{
    key: "setTarget",
    value: function setTarget(target) {
      this.target = target;
    }
  }, {
    key: "updateRotation",
    value: function updateRotation() {
      var c = this.getCenter();
      var tc = this.target.getCenter();
      var rotation = Phaser.Math.Angle.Between(c.x, c.y, tc.x, tc.y);

      if (this.target.alive()) {
        this.setRotation(rotation); //  game.physics.arcade.velocityFromRotation(rotation, 150, this.body.velocity);
      } else {
        // make them go the opposite way
        this.setRotation(Phaser.Math.Angle.Reverse(rotation));
      }
    }
  }, {
    key: "update",
    value: function update(t, dt) {
      switch (this.type) {
        case Enemies.BLUE:
        case Enemies.GREEN:
          this.updateRotation();
          this.scene.physics.velocityFromRotation(this.rotation, this.v, this.body.velocity);
          break;

        case Enemies.RED:
          if (this.hp == 2) {
            this.updateRotation();
            this.scene.physics.velocityFromRotation(this.rotation, this.v, this.body.velocity);
          } else {
            // frenzy mode
            // near to stopping
            if (Math.floor(Math.abs(this.body.velocity.x)) - 5 < 0) {
              // "turn off" damage
              this.hp = 1e12; // // wait some time

              if (this.timer < 834) {
                // wait on camera bound. if playe dead, wait for respawn.
                if (this.target.alive()) {
                  this.timer += dt;
                }

                this.body.acceleration.x = 0;
                this.body.acceleration.y = 0;
                this.body.velocity.x = 0;
                this.body.velocity.y = 0; // always face towards player location even if player dead.

                var c = this.getCenter();
                var ct = this.target.getCenter();
                var rotation = Phaser.Math.Angle.Between(c.x, c.y, ct.x, ct.y);
                this.setRotation(rotation);
              } else {
                // reset timer.
                this.timer = 0; // turn on damage

                this.hp = 1; // charge

                this.scene.physics.velocityFromRotation(this.rotation, this.v, this.body.velocity);
              }
            } else {
              // or if collides world
              // if(Phaser.Geom.Intersects.RectangleToRectangle(this.body.getBounds(), this.scene.cameras.main.getBounds()))
              var x = Math.sign(Math.cos(this.rotation)) > 0 ? this.body.width : 0;
              var y = Math.sign(Math.sin(this.rotation)) > 0 ? this.body.height : 0;
              var x1 = Math.sign(Math.cos(this.rotation)) < 0 ? this.body.width : 0;
              var y1 = Math.sign(Math.sin(this.rotation)) < 0 ? this.body.height : 0;

              if (this.scene.cameras.main.worldView.contains(this.body.x + x1, this.body.y + y1)) {
                // contain to camera.
                if (!this.scene.cameras.main.worldView.contains(this.body.x + x, this.body.y + y)) {
                  this.body.setVelocity(0);
                }
              }
            }
          }

          break;
      }
    }
  }], [{
    key: "SpawnLoc",
    value: function SpawnLoc(scene) {
      var num = 400;
      var bound_x = scene.physics.world.bounds.width;
      var bound_y = scene.physics.world.bounds.height;
      var r = {};

      if (!(0, _Math.TossCoin)(0.5)) {
        if (!(0, _Math.TossCoin)(0.5)) {
          r = (0, _Math.GetRandomVec2)(bound_x, bound_x, 0.0, bound_y);
          r.x += num;
        } else {
          r = (0, _Math.GetRandomVec2)(0.0, 0.0, 0.0, bound_y);
          r.x += -num;
        }
      } else {
        if (!(0, _Math.TossCoin)(0.5)) {
          r = (0, _Math.GetRandomVec2)(0.0, bound_x, bound_y, bound_y);
          r.y += num;
        } else {
          r = (0, _Math.GetRandomVec2)(0.0, bound_x, 0.0, 0.0);
          r.y += -num;
        }
      }

      return r;
    }
  }]);

  return Enemy;
}(Phaser.GameObjects.Sprite);

exports.Enemy = Enemy;
Phaser.GameObjects.GameObjectFactory.register('enemy', function (x, y, texture) {
  var cc = new Enemy(this.scene, x, y, texture);
  this.displayList.add(cc);
  this.updateList.add(cc);
  return cc;
});
},{"./Math.js":"src/Math.js"}],"src/EntityMan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityMan = void 0;

var _Player = require("./Player.js");

var _Enemies = require("./Enemies.js");

var _Math = require("./Math.js");

var _Items = require("./Items.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EntityMan = /*#__PURE__*/function () {
  function EntityMan() {
    _classCallCheck(this, EntityMan);
  }

  _createClass(EntityMan, null, [{
    key: "Init",
    value: function Init(scene) {
      EntityMan.scene = scene;
      EntityMan.player = scene.add.player(scene.physics.world.bounds.centerX, scene.physics.world.bounds.centerY, 40).setOrigin(0.5, 0.5);
      EntityMan.enemies = scene.add.group({
        classType: _Enemies.Enemy,
        runChildUpdate: true,
        removeCallback: function removeCallback(enemy) {
          if ((0, _Math.TossCoin)(0.5)) _Items.ItemMan.addItem(_Items.Item.RandomItem(), enemy.getCenter());
        }
      });
      EntityMan.items = scene.add.group({
        classType: _Items.Item,
        runChildUpdate: true
      });

      for (var i = 0; i < 5; ++i) {
        EntityMan.SpawnEnemy(_Enemies.Enemies.GREEN);
      }

      EntityMan.SpawnEnemy(_Enemies.Enemies.RED);
      EntityMan.SpawnEnemy(_Enemies.Enemies.BLUE);
      EntityMan.SpawnEnemy(_Enemies.Enemies.BLUE); // dont need to refresh
      //-------------------------------------------------------------

      scene.physics.add.overlap(EntityMan.enemies, EntityMan.player, _Player.Player.DoDamage); //-----------------------------------------------------

      EntityMan.nextScoreEvent = 1000;
      EntityMan.prevEnemyCount = EntityMan.enemies.countActive();
      EntityMan.timer = 0;
    }
  }, {
    key: "Update",
    value: function Update(time, dt) {
      EntityMan.player.update(time, dt);
      EntityMan.timer += dt;

      while (EntityMan.timer > 10000) {
        // spawn enemy every 10 seconds.
        EntityMan.SpawnEnemy(_Enemies.Enemies.GREEN);
        this.timer -= 10000;
      } // if score or enemies equals the required enemy count move to next event


      if (EntityMan.player.score > EntityMan.nextScoreEvent || EntityMan.enemies.countActive() >= 3 * EntityMan.prevEnemyCount) {
        EntityMan.scene.events.emit('nextEvent');

        switch (EntityMan.nextEvent) {
          case 1000:
            for (var i = 0; i < 5; ++i) {
              EntityMan.SpawnEnemy(_Enemies.Enemies.GREEN);
            }

            break;

          case 2000:
          case 4000:
            for (var _i = 0; _i < 3; ++_i) {
              EntityMan.SpawnEnemy(_Enemies.Enemies.GREEN);
            }

            EntityMan.SpawnEnemy(_Enemies.Enemies.BLUE);
            break;

          case 8000:
            EntityMan.SpawnEnemy(_Enemies.Enemies.BLUE);
            EntityMan.SpawnEnemy(_Enemies.Enemies.BLUE);
            EntityMan.SpawnEnemy(_Enemies.Enemies.RED);
            break;

          case 16000:
            for (var _i2 = 0; _i2 < 5; ++_i2) {
              EntityMan.SpawnEnemy(_Enemies.Enemies.GREEN);
              EntityMan.SpawnEnemy(_Enemies.Enemies.BLUE);
              EntityMan.SpawnEnemy(_Enemies.Enemies.RED);
            }

            break;

          default:
            for (var _i3 = 0; _i3 < 5; ++_i3) {
              EntityMan.SpawnEnemy(_Enemies.Enemies.GREEN);
              EntityMan.SpawnEnemy(_Enemies.Enemies.BLUE);
            }

            EntityMan.SpawnEnemy(_Enemies.Enemies.RED);
            EntityMan.SpawnEnemy(_Enemies.Enemies.RED);
            break;
        }

        EntityMan.nextScoreEvent *= 2;
        EntityMan.prevEnemyCount = EntityMan.enemies.countActive();
      }

      if (EntityMan.player.score >= EntityMan.score2win) {
        // start game win event
        EntityMan.scene.events.emit('gamewin'); // no more spawns allows

        EntityMan.timer = 0; // "you win" swoops in.
        // not implemented
      }
    }
  }, {
    key: "SpawnEnemy",
    value: function SpawnEnemy(type) {
      var spawnloc = _Enemies.Enemy.SpawnLoc(EntityMan.scene); // maybe just pass scene in


      var e;

      switch (type) {
        case _Enemies.Enemies.GREEN:
          e = EntityMan.enemies.get(spawnloc.x, spawnloc.y, type); // in here as there could be enemy specific spawning later.

          break;

        case _Enemies.Enemies.RED:
          e = EntityMan.enemies.get(spawnloc.x, spawnloc.y, type);
          e.hp = 2;
          break;

        case _Enemies.Enemies.BLUE:
          e = EntityMan.enemies.get(spawnloc.x, spawnloc.y, type);
          e.hp = 3;
          break;
      }

      e.type = type;
      e.setTarget(this.player); // maybe move to create callback

      e.setPipeline('Light2D');
    }
  }]);

  return EntityMan;
}();

exports.EntityMan = EntityMan;

_defineProperty(EntityMan, "player", void 0);

_defineProperty(EntityMan, "enemies", void 0);

_defineProperty(EntityMan, "scene", void 0);

_defineProperty(EntityMan, "nextScoreEvent", void 0);

_defineProperty(EntityMan, "prevEnemyCount", void 0);

_defineProperty(EntityMan, "timer", void 0);

_defineProperty(EntityMan, "score2win", 95000);
},{"./Player.js":"src/Player.js","./Enemies.js":"src/Enemies.js","./Math.js":"src/Math.js","./Items.js":"src/Items.js"}],"src/BulletMan.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bullets = exports.BulletMan = void 0;
exports.score_fade = score_fade;

var _EntityMan = require("./EntityMan.js");

var _Enemies = require("./Enemies.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Bullets = {
  CHAIN: 'chainAmmo',
  SLINGSHOT: 'slingAmmo',
  SHOTGUN: 'shotgunAmmo'
};
exports.Bullets = Bullets;

var BulletMan = /*#__PURE__*/function () {
  function BulletMan() {
    _classCallCheck(this, BulletMan);
  }

  _createClass(BulletMan, null, [{
    key: "Init",
    value: function Init(scene) {
      BulletMan.bullets = scene.add.group({
        classType: Bullet,
        runChildUpdate: true
      });
      scene.physics.add.overlap(BulletMan.bullets, _EntityMan.EntityMan.enemies, doDamage);
      BulletMan.scene = scene;
    }
  }, {
    key: "Update",
    value: function Update(t, dt) {}
  }, {
    key: "addBullet",
    value: function addBullet(type, loc, angle) {
      var b = BulletMan.bullets.get(loc.x, loc.y, type);
      var dir = {
        x: Math.cos(angle),
        y: Math.sin(angle)
      };
      b.dir = dir; // trajectory

      b.rotation = angle; // sprite direction
      // b.setPipeline('Light2D'); // makes bullets too dark

      switch (type) {
        // might be different for a diff bullet.
        case Bullets.SHOTGUN:
        case Bullets.SLINGSHOT:
        case Bullets.CHAIN:
          b.setScale(0.2);
          break;
      }
    }
  }]);

  return BulletMan;
}();

exports.BulletMan = BulletMan;

_defineProperty(BulletMan, "bullets", void 0);

_defineProperty(BulletMan, "scene", void 0);

function score_fade(x, y, score) {
  var scoreText = _EntityMan.EntityMan.scene.add.text(x, y, score).setFontSize(30).setFontFamily("Courier New").setOrigin(0.5);

  BulletMan.scene.tweens.add({
    targets: scoreText,
    alpha: 0,
    duration: 300,
    ease: 'Power2',
    onComplete: function onComplete() {
      scoreText.destroy();
    }
  });
}

function doDamage(Bullet, Enemy) {
  switch (Enemy.type) {
    case _Enemies.Enemies.GREEN:
      Enemy.scene.sound.play('death1');
      Bullet.destroy(); // might be better to just disable and hide

      Enemy.destroy(); // kill&hide

      _EntityMan.EntityMan.SpawnEnemy(Enemy.type);

      _EntityMan.EntityMan.player.score += 100;

      _EntityMan.EntityMan.scene.events.emit('scoreChange', _EntityMan.EntityMan.player.score);

      score_fade(Enemy.x, Enemy.y, '100');
      break;

    case _Enemies.Enemies.RED:
      --Enemy.hp;
      Bullet.destroy();

      if (Enemy.hp <= 0) {
        Enemy.scene.sound.play('death2');
        Enemy.destroy();

        _EntityMan.EntityMan.SpawnEnemy(Enemy.type);

        _EntityMan.EntityMan.player.score += 500;

        _EntityMan.EntityMan.scene.events.emit('scoreChange', _EntityMan.EntityMan.player.score);

        score_fade(Enemy.x, Enemy.y, '500');
      } else {
        Enemy.v = 1000;
        Enemy.body.velocity.x = 0;
      }

      break;

    case _Enemies.Enemies.BLUE:
      --Enemy.hp;
      Bullet.destroy();

      if (Enemy.hp <= 0) {
        Enemy.scene.sound.play('death1');
        Enemy.destroy();

        _EntityMan.EntityMan.SpawnEnemy(Enemy.type);

        _EntityMan.EntityMan.player.score += 300;

        _EntityMan.EntityMan.scene.events.emit('scoreChange', _EntityMan.EntityMan.player.score);

        score_fade(Enemy.x, Enemy.y, '300');
      } else {
        BulletMan.scene.tweens.add({
          targets: Enemy,
          scale: Enemy.scaleX * 1.5,
          ease: 'Linear',
          duration: 500
        });
      }

      break;
  }
}

var _size = /*#__PURE__*/new WeakMap();

var _type = /*#__PURE__*/new WeakMap();

var Bullet = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(Bullet, _Phaser$GameObjects$S);

  var _super = _createSuper(Bullet);

  function Bullet(scene, x, y, texture) {
    var _this;

    _classCallCheck(this, Bullet);

    _this = _super.call(this, scene, x, y, texture);

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _size, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _type, {
      writable: true,
      value: void 0
    });

    _defineProperty(_assertThisInitialized(_this), "dir", void 0);

    scene.physics.world.enable(_assertThisInitialized(_this));

    _this.body.setCollideWorldBounds(false);

    scene.add.existing(_assertThisInitialized(_this));

    _this.setDepth(0.2);

    return _this;
  }

  _createClass(Bullet, [{
    key: "update",
    value: function update(t, dt) {
      var speed = 700;
      this.body.velocity.x = this.dir.x * speed;
      this.body.velocity.y = this.dir.y * speed;

      if (this.body.checkWorldBounds()) {
        this.destroy();
      }
    }
  }]);

  return Bullet;
}(Phaser.GameObjects.Sprite);
},{"./EntityMan.js":"src/EntityMan.js","./Enemies.js":"src/Enemies.js"}],"src/TitleScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserInterface = exports.TitleScreen = exports.ImageButton = exports.Credits = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ImageButton = /*#__PURE__*/function (_Phaser$GameObjects$I) {
  _inherits(ImageButton, _Phaser$GameObjects$I);

  var _super = _createSuper(ImageButton);

  function ImageButton(scene, x, y, texture, callback) {
    var _this;

    _classCallCheck(this, ImageButton);

    _this = _super.call(this, scene, x, y, texture);

    _this.setInteractive({
      useHandCursor: true
    }).on('pointerover', function () {
      return _this.enterButtonHoverState();
    }).on('pointerout', function () {
      return _this.enterButtonRestState();
    }).on('pointerdown', function () {
      return _this.enterButtonActiveState();
    }).on('pointerup', function () {
      _this.setInteractive({
        useHandCursor: false
      });

      _this.enterButtonHoverState();

      callback();
    });

    scene.add.existing(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ImageButton, [{
    key: "preUpdate",
    value: function preUpdate(time, delta) {}
  }, {
    key: "update",
    value: function update(t, dt) {}
  }, {
    key: "enterButtonHoverState",
    value: function enterButtonHoverState() {
      // add a border or make lighter. 2nd image that appears on hover.
      this.setTint(0x1287CD);
    }
  }, {
    key: "enterButtonRestState",
    value: function enterButtonRestState() {
      this.clearTint();
    }
  }, {
    key: "enterButtonActiveState",
    value: function enterButtonActiveState() {
      this.setTint(0x808080);
    }
  }]);

  return ImageButton;
}(Phaser.GameObjects.Image);

exports.ImageButton = ImageButton;
Phaser.GameObjects.GameObjectFactory.register('ImgButton', function (x, y, texture, cb) {
  var cc = new ImageButton(this.scene, x, y, texture, cb);
  this.displayList.add(cc);
  this.updateList.add(cc);
  return cc;
});

var UserInterface = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(UserInterface, _Phaser$Scene);

  var _super2 = _createSuper(UserInterface);

  function UserInterface(config) {
    var _this2;

    _classCallCheck(this, UserInterface);

    _this2 = _super2.call(this, {
      key: 'ui'
    });

    _defineProperty(_assertThisInitialized(_this2), "ammoText", void 0);

    _defineProperty(_assertThisInitialized(_this2), "scoreText", void 0);

    _defineProperty(_assertThisInitialized(_this2), "livesText", void 0);

    return _this2;
  }

  _createClass(UserInterface, [{
    key: "preload",
    value: function preload() {}
  }, {
    key: "create",
    value: function create(data) {
      this.scoreText = this.add.text(10, 50, 'Score: 0', {
        fontFamily: 'Courier New',
        fontSize: 20,
        fill: '#0f0'
      });
      this.gameText = this.add.text(10, 20, 'Game Progress: 0%', {
        fontFamily: 'Courier New',
        fontSize: 20,
        fill: '#0f0'
      });
      this.ammoText = this.add.text(10, 80, 'Ammo: Unlimited', {
        fontFamily: 'Courier New',
        fontSize: 20,
        fill: '#0f0'
      });
      this.livesText = this.add.text(10, 110, 'Lives: 4', {
        fontFamily: 'Courier New',
        fontSize: 20,
        fill: '#0f0'
      }); // on destruction this

      var ourGame = this.scene.get('game');
      ourGame.events.on('scoreChange', function (value) {
        this.scoreText.setText('Score: ' + value);
        this.gameText.setText('Game Progress: ' + (value / 95000 * 100).toFixed(2) + '%');
      }, this);
      ourGame.events.on('ammoChange', function (value) {
        if (value <= 0) value = 'Unlimited';
        this.ammoText.setText('Ammo: ' + value);
      }, this);
      ourGame.events.on('livesChange', function (value) {
        this.livesText.setText('Lives: ' + value);

        if (value <= 0) {
          this.scene.sendToBack('ui');
          this.scene.restart();
          this.scene.sleep('ui');
        }
      }, this);
    }
  }]);

  return UserInterface;
}(Phaser.Scene);

exports.UserInterface = UserInterface;

var TitleScreen = /*#__PURE__*/function (_Phaser$Scene2) {
  _inherits(TitleScreen, _Phaser$Scene2);

  var _super3 = _createSuper(TitleScreen);

  function TitleScreen(config) {
    _classCallCheck(this, TitleScreen);

    return _super3.call(this, config);
  }

  _createClass(TitleScreen, [{
    key: "preload",
    value: function preload() {
      this.load.image({
        key: 'TitleScreen',
        url: 'data/gfx/backgroundLab.jpg'
      });
      this.load.image({
        key: 'Logo',
        url: 'data/gfx/logo23.png'
      });
      this.load.image({
        key: 'PlayButton',
        url: 'data/gfx/PlayButton.svg'
      });
      this.load.image({
        key: 'CreditsButton',
        url: 'data/gfx/CreditsButton.svg'
      });
      this.load.image({
        key: 'MoveKeys',
        url: 'data/gfx/WASDkeysHelp.svg'
      });
    }
  }, {
    key: "create",
    value: function create(data) {
      var _this3 = this;

      var w = this.sys.canvas.width;
      var h = this.sys.canvas.height;
      this.ts = this.add.image(0, 0, 'TitleScreen').setOrigin(0, 0).setDisplaySize(w, h);
      this.logo = this.add.image(w / 2, h / 6, 'Logo').setOrigin(0.5, 0.5);
      this.logo.setScale(Math.min(w / this.logo.displayWidth, h / this.logo.displayHeight) / 1.5);
      if (this.sys.game.device.os.desktop) this.help = this.add.image(w, 0, 'MoveKeys').setOrigin(1, 0);
      this.pb = this.add.ImgButton(w / 2, h / 2, 'PlayButton', function () {
        return _this3.play();
      }).setOrigin(0.5, 0.5);
      this.cb = this.add.ImgButton(w / 2, h / 2 + this.pb.displayHeight * 1.5, 'CreditsButton', function () {
        return _this3.scene.switch('credits');
      }).setOrigin(0.5, 0.5);
    }
  }, {
    key: "play",
    value: function play() {
      this.scene.switch('game');
    }
  }]);

  return TitleScreen;
}(Phaser.Scene);

exports.TitleScreen = TitleScreen;

var Credits = /*#__PURE__*/function (_Phaser$Scene3) {
  _inherits(Credits, _Phaser$Scene3);

  var _super4 = _createSuper(Credits);

  function Credits(config) {
    _classCallCheck(this, Credits);

    return _super4.call(this, 'credits');
  }

  _createClass(Credits, [{
    key: "preload",
    value: function preload() {
      this.load.image({
        key: 'CreditsBG',
        url: 'data/gfx/CreditsScreen.png'
      });
      this.load.image({
        key: 'mainmenubtn',
        url: 'data/gfx/MainMenuButton.svg'
      });
    }
  }, {
    key: "create",
    value: function create() {
      var _this4 = this;

      var w = this.sys.canvas.width;
      var h = this.sys.canvas.height;
      this.cs = this.add.image(0, 0, 'CreditsBG').setOrigin(0, 0).setDisplaySize(w, h);
      this.mb = this.add.ImgButton(w / 2, h / 2.5, 'mainmenubtn', function () {
        return _this4.scene.switch('default');
      }).setOrigin(0.55, 0.55);
      this.mb.setScale(Math.min(w / this.mb.displayWidth, h / this.mb.displayHeight) / 4);
    }
  }]);

  return Credits;
}(Phaser.Scene);

exports.Credits = Credits;
},{}],"src/main.js":[function(require,module,exports) {
"use strict";

var _BulletMan = require("./BulletMan.js");

var _EntityMan = require("./EntityMan.js");

var _Enemies = require("./Enemies.js");

var _Items = require("./Items.js");

var _TitleScreen = require("./TitleScreen.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SCALE = 1.6;
var WIDTH = 1280 * SCALE;
var HEIGHT = 720 * SCALE;
var clientWidth = document.documentElement.clientWidth;
var clientHeight = document.documentElement.clientHeight;

var Game = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(Game, _Phaser$Scene);

  var _super = _createSuper(Game);

  function Game() {
    var _this;

    _classCallCheck(this, Game);

    _this = _super.call(this, {
      key: 'game'
    });

    _defineProperty(_assertThisInitialized(_this), "music", void 0);

    return _this;
  }

  _createClass(Game, [{
    key: "init",
    value: function init() {}
  }, {
    key: "loading_screen",
    value: function loading_screen() {
      // Source:  https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/
      var progressBar = this.add.graphics();
      var progressBox = this.add.graphics();
      var width = this.cameras.main.width;
      var height = this.cameras.main.height;
      progressBox.fillStyle(0x222222, 0.8);
      progressBox.fillRect(width / 2 - 160, height / 2 - 25, 320, 50);
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
        var w = 300 * value;
        progressBar.fillRect(width / 2 - 150, height / 2 - 15, w, 30);
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
  }, {
    key: "preload",
    value: function preload() {
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
        normalMap: 'data/gfx/NormalThread4.svg'
      }); //-----------------------------------

      this.load.audio('game_music', 'data/sfx/music.wav');
      this.load.audio('shoot_pop', 'data/sfx/cork_edit.mp3');
      this.load.audio('shoot_twang', 'data/sfx/shoot.mp3');
      this.load.audio('shoot_bang', 'data/sfx/thwack-01.wav');
      this.load.audio('pickup_item', 'data/sfx/pickup.wav');
      this.load.audio('death1', 'data/sfx/blub_hurt1.wav');
      this.load.audio('death2', 'data/sfx/blub_hurt2.wav'); //-----------------------------------

      this.load.text('CovidRed', 'data/fx/CovidRed.frag');
      this.load.text('CovidGreen', 'data/fx/CovidGreen.frag');
      this.load.text('CovidBlue', 'data/fx/CovidBlue.frag');
      this.load.text('CovidVert', 'data/fx/Covid.vert'); //--------------------------------------

      if (!this.sys.game.device.os.desktop) this.load.plugin('rexvirtualjoystickplugin', 'site/rexvirtualjoystickplugin.min.js', true);
    }
  }, {
    key: "create",
    value: function create(data) {
      var _this2 = this;

      // change shader to spritesheet. 
      this.add.shader(new Phaser.Display.BaseShader('---', this.cache.text.get('CovidGreen'), this.cache.text.get('CovidVert')), 0, 0, 300, 300, []).setRenderToTexture('virus_green');
      this.add.shader(new Phaser.Display.BaseShader('----', this.cache.text.get('CovidRed'), this.cache.text.get('CovidVert')), 0, 0, 500, 500, []).setRenderToTexture('virus_red');
      this.add.shader(new Phaser.Display.BaseShader('------', this.cache.text.get('CovidBlue'), this.cache.text.get('CovidVert')), 0, 0, 200, 200, []).setRenderToTexture('virus_blue');
      this.physics.world.setBounds(0, 0, WIDTH * 2, HEIGHT * 2);
      this.cameras.main.setBounds(0, 0, WIDTH * 2, HEIGHT * 2);
      this.add.image(0, 0, 'background').setPipeline('Light2D').setOrigin(0, 0).setDisplaySize(WIDTH * 2, HEIGHT * 2);
      this.lights.enable().setAmbientColor(0x555555);
      var heart_light = this.lights.addLight(1689, 1015, 100, 0xFF3333);
      this.hlt = this.tweens.add({
        targets: heart_light,
        radius: 500,
        duration: 1000,
        ease: 'Sine.InOut',
        repeat: -1,
        yoyo: true
      }); // update light speed update music

      this.events.on('nextEvent', function (value) {
        // make nextEvent happen with time instead.
        this.hlt.timeScale *= 1.5;
        this.music.rate += 0.07;
      }, this);

      _EntityMan.EntityMan.Init(this);

      _Items.ItemMan.Init(this);

      _BulletMan.BulletMan.Init(this);

      this.music = this.sound.add('game_music', {
        loop: true,
        volume: 0.2,
        rate: 0.5
      });
      this.music.play();
      this.input.setDefaultCursor('crosshair');
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, function (cam, effect) {
        _this2.time.delayedCall(1000, function () {
          _this2.scene.start('gameover', {
            fadeIn: true,
            score: _EntityMan.EntityMan.player.score,
            win: false
          });
        }, _this2);
      }, this);
      this.events.once('gamewin', function () {
        // kill all enemies.
        _EntityMan.EntityMan.enemies.children.each(function (child) {
          switch (child.type) {
            case _Enemies.Enemies.BLUE:
            case _Enemies.Enemies.GREEN:
              _EntityMan.EntityMan.scene.sound.play('death1');

              break;

            case _Enemies.Enemies.RED:
              _EntityMan.EntityMan.scene.sound.play('death2');

              break;
          }

          child.destroy();
        }); // explode them w/confetti.
        // not implemented
        // hide ui


        _this2.events.emit('livesChange', 0); // launch gameover


        var time_ms = 2000;

        _this2.tweens.add({
          targets: _this2.music,
          volume: 0,
          duration: time_ms,
          onComplete: function onComplete() {
            _this2.scene.launch('gameover', {
              fadeIn: true,
              score: _EntityMan.EntityMan.player.score,
              lives: _EntityMan.EntityMan.player.lives,
              win: true
            });

            _this2.scene.bringToTop('gameover');
          }
        });
      }, this);
      this.scene.launch('ui');
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      this.cameras.main.startFollow(_EntityMan.EntityMan.player);
      var pointer = this.input.mousePointer;
      var wp = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
      pointer.worldX = wp.x;
      pointer.worldY = wp.y;

      _EntityMan.EntityMan.Update(time, delta);

      _BulletMan.BulletMan.Update(time, delta);
    }
  }]);

  return Game;
}(Phaser.Scene);

_defineProperty(Game, "cameras", void 0);

var GameOver = /*#__PURE__*/function (_Phaser$Scene2) {
  _inherits(GameOver, _Phaser$Scene2);

  var _super2 = _createSuper(GameOver);

  function GameOver() {
    _classCallCheck(this, GameOver);

    return _super2.call(this, {
      key: 'gameover'
    });
  }

  _createClass(GameOver, [{
    key: "preload",
    value: function preload() {
      this.load.image({
        key: 'gameoverTxt',
        url: 'data/gfx/gameover.png'
      });
      this.load.image({
        key: 'playagainbtn',
        url: 'data/gfx/PlayAgainButton.svg'
      });
      this.load.image({
        key: 'mainmenubtn',
        url: 'data/gfx/MainMenuButton.svg'
      });
      this.load.image({
        key: 'victory',
        url: 'data/gfx/victory4.png'
      });
      this.load.audio('fanfare', 'data/sfx/tempWinSong.mp3');
    }
  }, {
    key: "create",
    value: function create(data) {
      var _this3 = this;

      var w = this.sys.canvas.width;
      var h = this.sys.canvas.height;
      var logo_id = data.win ? 'victory' : 'gameoverTxt';
      this.logo = this.add.image(w / 2, h / 6, logo_id).setOrigin(0.5, 0.5).setScale(0.8);
      this.mm = this.add.ImgButton(w / 2, h / 1.8, 'mainmenubtn', function () {
        return _this3.mainMenu(data.win);
      }).setOrigin(0.5, 0.5);
      this.rs = this.add.ImgButton(w / 2, h / 1.5, 'playagainbtn', function () {
        return _this3.playAgain(data.win);
      }).setOrigin(0.5, 0.5);

      if (data.win) {
        this.scoreTxt = this.add.text(w / 2, h / 3, 'Final Score: ' + data.score + " x " + data.lives + " lives" + " = " + data.score * data.lives, {
          fill: '#0f0'
        }).setFontSize(60).setOrigin(0.5, 0.5);
        this.music = this.sound.add('fanfare', {
          loop: true
        });
        this.music.play();
      } else {
        this.scoreTxt = this.add.text(w / 2, h / 3, 'Final Score: ' + data.score, {
          fill: '#0f0'
        }).setFontSize(60).setOrigin(0.5, 0.5); // No music when you lose.
      }
    }
  }, {
    key: "playAgain",
    value: function playAgain(win) {
      if (win) this.music.stop(); // gotta do this. else states are left-over from different systems. if you managed different systems music, lights globally maybe it would fix.
      // bad way to do this, but easiest for now.

      this.scene.remove('game');
      this.scene.add('game', Game, false);
      this.scene.remove('ui');
      this.scene.add('ui', _TitleScreen.UserInterface, false);
      this.scene.start('game', {
        fadeIn: true
      });
    }
  }, {
    key: "mainMenu",
    value: function mainMenu(win) {
      if (win) this.music.stop();
      this.scene.remove('game');
      this.scene.add('game', Game, false);
      this.scene.remove('ui');
      this.scene.add('ui', _TitleScreen.UserInterface, false);
      this.scene.start('default', {
        fadeIn: true
      });
    }
  }]);

  return GameOver;
}(Phaser.Scene);

var myCustomCanvas = document.createElement('canvas');
document.body.appendChild(myCustomCanvas);
var myCustomContext = myCustomCanvas.getContext('webgl');
myCustomContext.getExtension('OES_standard_derivatives');
var gameConfig = {
  type: Phaser.WEBGL,
  canvas: myCustomCanvas,
  context: myCustomContext,
  maxLights: 11,
  width: clientWidth,
  height: clientHeight,
  roundPixels: true,
  mode: Phaser.Scale.FIT,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {
        y: 0
      },
      debug: true,
      // lights only work in debug mode?
      debugShowBody: false,
      // Keep this off. I moved velocity debug to body also. Velocity now draws 1 pixel that somehow fixes broken lights
      debugShowVelocity: true // and keep this ON.

    }
  },
  scene: [_TitleScreen.TitleScreen, _TitleScreen.Credits, Game, _TitleScreen.UserInterface, GameOver]
};
var game = new Phaser.Game(gameConfig);

function isMobile() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}

window.addEventListener("resize", resize, false);

function resize() {
  // https://stackoverflow.com/questions/49716741/how-do-i-scale-the-scene-to-fullscreen
  var canvas = document.querySelector("canvas");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var windowRatio = windowWidth / windowHeight;
  var gameRatio = game.config.width / game.config.height;

  if (windowRatio < gameRatio) {
    canvas.style.width = windowWidth + "px";
    canvas.style.height = windowWidth / gameRatio + "px";
  } else {
    canvas.style.width = windowHeight * gameRatio + "px";
    canvas.style.height = windowHeight + "px";
  }
}

window.addEventListener("orientationchange", function () {
  alert("Refresh Page!");
}, false);
},{"./BulletMan.js":"src/BulletMan.js","./EntityMan.js":"src/EntityMan.js","./Enemies.js":"src/Enemies.js","./Items.js":"src/Items.js","./TitleScreen.js":"src/TitleScreen.js"}],"C:/Users/maryj/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62496" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/maryj/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map