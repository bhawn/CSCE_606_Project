// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"bW9eL":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"gLLPy":[function(require,module,exports) {
var _bulletManJs = require("./BulletMan.js");
var _entityManJs = require("./EntityMan.js");
var _enemiesJs = require("./Enemies.js");
var _itemsJs = require("./Items.js");
var _titleScreenJs = require("./TitleScreen.js");
const SCALE = 1.6;
const WIDTH = 1280 * SCALE;
const HEIGHT = 720 * SCALE;
let clientWidth = document.documentElement.clientWidth;
let clientHeight = document.documentElement.clientHeight;
class Game extends Phaser.Scene {
    static cameras;
    music;
    constructor(){
        super({
            key: 'game'
        });
    }
    init() {
    }
    loading_screen() {
        // Source:  https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/
        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        progressBox.fillStyle(2236962, 0.8);
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
        this.load.on('progress', function(value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(16777215, 1);
            let w = 300 * value;
            progressBar.fillRect(width / 2 - 150, height / 2 - 15, w, 30);
        });
        this.load.on('fileprogress', function(file) {
            assetText.setText('Loading asset: ' + file.key);
        });
        this.load.on('complete', function() {
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
            normalMap: 'data/gfx/NormalThread4.svg'
        });
        //-----------------------------------
        this.load.audio('game_music', 'data/sfx/music.wav');
        this.load.audio('shoot_pop', 'data/sfx/cork_edit.mp3');
        this.load.audio('shoot_twang', 'data/sfx/shoot.mp3');
        this.load.audio('shoot_bang', 'data/sfx/thwack-01.wav');
        this.load.audio('pickup_item', 'data/sfx/pickup.wav');
        this.load.audio('death1', 'data/sfx/blub_hurt1.wav');
        this.load.audio('death2', 'data/sfx/blub_hurt2.wav');
        //-----------------------------------
        this.load.text('CovidRed', 'data/fx/CovidRed.frag');
        this.load.text('CovidGreen', 'data/fx/CovidGreen.frag');
        this.load.text('CovidBlue', 'data/fx/CovidBlue.frag');
        this.load.text('CovidVert', 'data/fx/Covid.vert');
        //--------------------------------------
        if (!this.sys.game.device.os.desktop) this.load.plugin('rexvirtualjoystickplugin', 'site/rexvirtualjoystickplugin.min.js', true);
    }
    create(data) {
        // change shader to spritesheet. 
        this.add.shader(new Phaser.Display.BaseShader('---', this.cache.text.get('CovidGreen'), this.cache.text.get('CovidVert')), 0, 0, 300, 300, []).setRenderToTexture('virus_green');
        this.add.shader(new Phaser.Display.BaseShader('----', this.cache.text.get('CovidRed'), this.cache.text.get('CovidVert')), 0, 0, 500, 500, []).setRenderToTexture('virus_red');
        this.add.shader(new Phaser.Display.BaseShader('------', this.cache.text.get('CovidBlue'), this.cache.text.get('CovidVert')), 0, 0, 200, 200, []).setRenderToTexture('virus_blue');
        this.physics.world.setBounds(0, 0, WIDTH * 2, HEIGHT * 2);
        this.cameras.main.setBounds(0, 0, WIDTH * 2, HEIGHT * 2);
        this.add.image(0, 0, 'background').setPipeline('Light2D').setOrigin(0, 0).setDisplaySize(WIDTH * 2, HEIGHT * 2);
        this.lights.enable().setAmbientColor(5592405);
        var heart_light = this.lights.addLight(1689, 1015, 100, 16724787);
        this.hlt = this.tweens.add({
            targets: heart_light,
            radius: 500,
            duration: 1000,
            ease: 'Sine.InOut',
            repeat: -1,
            yoyo: true
        });
        // update light speed update music
        this.events.on('nextEvent', function(value) {
            this.hlt.timeScale *= 1.5;
            this.music.rate += 0.07;
        }, this);
        _entityManJs.EntityMan.Init(this);
        _itemsJs.ItemMan.Init(this);
        _bulletManJs.BulletMan.Init(this);
        this.music = this.sound.add('game_music', {
            loop: true,
            volume: 0.2,
            rate: 0.5
        });
        this.music.play();
        this.input.setDefaultCursor('crosshair');
        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect)=>{
            this.time.delayedCall(1000, ()=>{
                this.scene.start('gameover', {
                    fadeIn: true,
                    score: _entityManJs.EntityMan.player.score,
                    win: false
                });
            }, this);
        }, this);
        this.events.once('gamewin', ()=>{
            // kill all enemies.
            _entityManJs.EntityMan.enemies.children.each((child)=>{
                switch(child.type){
                    case _enemiesJs.Enemies.BLUE:
                    case _enemiesJs.Enemies.GREEN:
                        _entityManJs.EntityMan.scene.sound.play('death1');
                        break;
                    case _enemiesJs.Enemies.RED:
                        _entityManJs.EntityMan.scene.sound.play('death2');
                        break;
                }
                child.destroy();
            });
            // explode them w/confetti.
            // not implemented
            // hide ui
            this.events.emit('livesChange', 0);
            // launch gameover
            const time_ms = 2000;
            this.tweens.add({
                targets: this.music,
                volume: 0,
                duration: time_ms,
                onComplete: ()=>{
                    this.scene.launch('gameover', {
                        fadeIn: true,
                        score: _entityManJs.EntityMan.player.score,
                        lives: _entityManJs.EntityMan.player.lives,
                        win: true
                    });
                    this.scene.bringToTop('gameover');
                }
            });
        }, this);
        this.scene.launch('ui');
    }
    update(time, delta) {
        this.cameras.main.startFollow(_entityManJs.EntityMan.player);
        let pointer = this.input.mousePointer;
        const wp = this.cameras.main.getWorldPoint(pointer.x, pointer.y);
        pointer.worldX = wp.x;
        pointer.worldY = wp.y;
        _entityManJs.EntityMan.Update(time, delta);
        _bulletManJs.BulletMan.Update(time, delta);
    }
}
class GameOver extends Phaser.Scene {
    constructor(){
        super({
            key: 'gameover'
        });
    }
    preload() {
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
    create(data) {
        let w = this.sys.canvas.width;
        let h = this.sys.canvas.height;
        let logo_id = data.win ? 'victory' : 'gameoverTxt';
        this.logo = this.add.image(w / 2, h / 6, logo_id).setOrigin(0.5, 0.5).setScale(0.8);
        this.mm = this.add.ImgButton(w / 2, h / 1.8, 'mainmenubtn', ()=>this.mainMenu(data.win)
        ).setOrigin(0.5, 0.5);
        this.rs = this.add.ImgButton(w / 2, h / 1.5, 'playagainbtn', ()=>this.playAgain(data.win)
        ).setOrigin(0.5, 0.5);
        if (data.win) {
            this.scoreTxt = this.add.text(w / 2, h / 3, 'Final Score: ' + data.score + " x " + data.lives + " lives" + " = " + data.score * data.lives, {
                fill: '#0f0'
            }).setFontSize(60).setOrigin(0.5, 0.5);
            this.music = this.sound.add('fanfare', {
                loop: true
            });
            this.music.play();
        } else this.scoreTxt = this.add.text(w / 2, h / 3, 'Final Score: ' + data.score, {
            fill: '#0f0'
        }).setFontSize(60).setOrigin(0.5, 0.5);
    }
    playAgain(win) {
        if (win) this.music.stop();
        // gotta do this. else states are left-over from different systems. if you managed different systems music, lights globally maybe it would fix.
        // bad way to do this, but easiest for now.
        this.scene.remove('game');
        this.scene.add('game', Game, false);
        this.scene.remove('ui');
        this.scene.add('ui', _titleScreenJs.UserInterface, false);
        this.scene.start('game', {
            fadeIn: true
        });
    }
    mainMenu(win) {
        if (win) this.music.stop();
        this.scene.remove('game');
        this.scene.add('game', Game, false);
        this.scene.remove('ui');
        this.scene.add('ui', _titleScreenJs.UserInterface, false);
        this.scene.start('default', {
            fadeIn: true
        });
    }
}
const myCustomCanvas = document.createElement('canvas');
document.body.appendChild(myCustomCanvas);
const myCustomContext = myCustomCanvas.getContext('webgl');
myCustomContext.getExtension('OES_standard_derivatives');
const gameConfig = {
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
            debugShowBody: false,
            debugShowVelocity: true // and keep this ON.
        }
    },
    scene: [
        _titleScreenJs.TitleScreen,
        _titleScreenJs.Credits,
        Game,
        _titleScreenJs.UserInterface,
        GameOver
    ]
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
window.addEventListener("orientationchange", function() {
    alert("Refresh Page!");
}, false);

},{"./BulletMan.js":"i6X5Y","./EntityMan.js":"3Rd41","./Enemies.js":"9tfZw","./Items.js":"9L8qK","./TitleScreen.js":"5D3wB"}],"i6X5Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bullets", ()=>Bullets
);
parcelHelpers.export(exports, "BulletMan", ()=>BulletMan
);
parcelHelpers.export(exports, "score_fade", ()=>score_fade
);
var _entityManJs = require("./EntityMan.js");
var _enemiesJs = require("./Enemies.js");
const Bullets = {
    CHAIN: 'chainAmmo',
    SLINGSHOT: 'slingAmmo',
    SHOTGUN: 'shotgunAmmo'
};
class BulletMan {
    static bullets;
    static scene;
    static Init(scene) {
        BulletMan.bullets = scene.add.group({
            classType: Bullet,
            runChildUpdate: true
        });
        scene.physics.add.overlap(BulletMan.bullets, _entityManJs.EntityMan.enemies, doDamage);
        BulletMan.scene = scene;
    }
    static Update(t, dt) {
    }
    static addBullet(type, loc, angle) {
        let b = BulletMan.bullets.get(loc.x, loc.y, type);
        const dir = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        };
        b.dir = dir; // trajectory
        b.rotation = angle; // sprite direction
        // b.setPipeline('Light2D'); // makes bullets too dark
        switch(type){
            case Bullets.SHOTGUN:
            case Bullets.SLINGSHOT:
            case Bullets.CHAIN:
                b.setScale(0.2);
                break;
        }
    }
}
function score_fade(x, y, score) {
    let scoreText = _entityManJs.EntityMan.scene.add.text(x, y, score).setFontSize(30).setFontFamily("Courier New").setOrigin(0.5);
    BulletMan.scene.tweens.add({
        targets: scoreText,
        alpha: 0,
        duration: 300,
        ease: 'Power2',
        onComplete: function() {
            scoreText.destroy();
        }
    });
}
function doDamage(Bullet1, Enemy) {
    switch(Enemy.type){
        case _enemiesJs.Enemies.GREEN:
            Enemy.scene.sound.play('death1');
            Bullet1.destroy(); // might be better to just disable and hide
            Enemy.destroy(); // kill&hide
            _entityManJs.EntityMan.SpawnEnemy(Enemy.type);
            _entityManJs.EntityMan.player.score += 100;
            _entityManJs.EntityMan.scene.events.emit('scoreChange', _entityManJs.EntityMan.player.score);
            score_fade(Enemy.x, Enemy.y, '100');
            break;
        case _enemiesJs.Enemies.RED:
            --Enemy.hp;
            Bullet1.destroy();
            if (Enemy.hp <= 0) {
                Enemy.scene.sound.play('death2');
                Enemy.destroy();
                _entityManJs.EntityMan.SpawnEnemy(Enemy.type);
                _entityManJs.EntityMan.player.score += 500;
                _entityManJs.EntityMan.scene.events.emit('scoreChange', _entityManJs.EntityMan.player.score);
                score_fade(Enemy.x, Enemy.y, '500');
            } else {
                Enemy.v = 1000;
                Enemy.body.velocity.x = 0;
            }
            break;
        case _enemiesJs.Enemies.BLUE:
            --Enemy.hp;
            Bullet1.destroy();
            if (Enemy.hp <= 0) {
                Enemy.scene.sound.play('death1');
                Enemy.destroy();
                _entityManJs.EntityMan.SpawnEnemy(Enemy.type);
                _entityManJs.EntityMan.player.score += 300;
                _entityManJs.EntityMan.scene.events.emit('scoreChange', _entityManJs.EntityMan.player.score);
                score_fade(Enemy.x, Enemy.y, '300');
            } else BulletMan.scene.tweens.add({
                targets: Enemy,
                scale: Enemy.scaleX * 1.5,
                ease: 'Linear',
                duration: 500
            });
            break;
    }
}
class Bullet extends Phaser.GameObjects.Sprite {
    #size1;
    #type;
    dir;
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.physics.world.enable(this);
        this.body.setCollideWorldBounds(false);
        scene.add.existing(this);
        this.setDepth(0.2);
    }
    update(t, dt) {
        const speed = 700;
        this.body.velocity.x = this.dir.x * speed;
        this.body.velocity.y = this.dir.y * speed;
        if (this.body.checkWorldBounds()) this.destroy();
    }
}

},{"./EntityMan.js":"3Rd41","./Enemies.js":"9tfZw","@parcel/transformer-js/src/esmodule-helpers.js":"c1kAu"}],"3Rd41":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EntityMan", ()=>EntityMan
);
var _playerJs = require("./Player.js");
var _enemiesJs = require("./Enemies.js");
var _mathJs = require("./Math.js");
var _itemsJs = require("./Items.js");
class EntityMan {
    static player;
    static enemies;
    static scene;
    static nextScoreEvent;
    static prevEnemyCount;
    static timer;
    static score2win = 95000;
    static Init(scene) {
        EntityMan.scene = scene;
        EntityMan.player = scene.add.player(scene.physics.world.bounds.centerX, scene.physics.world.bounds.centerY, 40).setOrigin(0.5, 0.5);
        EntityMan.enemies = scene.add.group({
            classType: _enemiesJs.Enemy,
            runChildUpdate: true,
            removeCallback: function(enemy) {
                if (_mathJs.TossCoin(0.5)) _itemsJs.ItemMan.addItem(_itemsJs.Item.RandomItem(), enemy.getCenter());
            }
        });
        EntityMan.items = scene.add.group({
            classType: _itemsJs.Item,
            runChildUpdate: true
        });
        for(let i = 0; i < 5; ++i)EntityMan.SpawnEnemy(_enemiesJs.Enemies.GREEN);
        EntityMan.SpawnEnemy(_enemiesJs.Enemies.RED);
        EntityMan.SpawnEnemy(_enemiesJs.Enemies.BLUE);
        EntityMan.SpawnEnemy(_enemiesJs.Enemies.BLUE);
        // dont need to refresh
        //-------------------------------------------------------------
        scene.physics.add.overlap(EntityMan.enemies, EntityMan.player, _playerJs.Player.DoDamage);
        //-----------------------------------------------------
        EntityMan.nextScoreEvent = 1000;
        EntityMan.prevEnemyCount = EntityMan.enemies.countActive();
        EntityMan.timer = 0;
    }
    static Update(time, dt) {
        EntityMan.player.update(time, dt);
        EntityMan.timer += dt;
        while(EntityMan.timer > 10000){
            EntityMan.SpawnEnemy(_enemiesJs.Enemies.GREEN);
            this.timer -= 10000;
        }
        // if score or enemies equals the required enemy count move to next event
        if (EntityMan.player.score > EntityMan.nextScoreEvent || EntityMan.enemies.countActive() >= 3 * EntityMan.prevEnemyCount) {
            EntityMan.scene.events.emit('nextEvent');
            switch(EntityMan.nextEvent){
                case 1000:
                    for(let i = 0; i < 5; ++i)EntityMan.SpawnEnemy(_enemiesJs.Enemies.GREEN);
                    break;
                case 2000:
                case 4000:
                    for(let i1 = 0; i1 < 3; ++i1)EntityMan.SpawnEnemy(_enemiesJs.Enemies.GREEN);
                    EntityMan.SpawnEnemy(_enemiesJs.Enemies.BLUE);
                    break;
                case 8000:
                    EntityMan.SpawnEnemy(_enemiesJs.Enemies.BLUE);
                    EntityMan.SpawnEnemy(_enemiesJs.Enemies.BLUE);
                    EntityMan.SpawnEnemy(_enemiesJs.Enemies.RED);
                    break;
                case 16000:
                    for(let i2 = 0; i2 < 5; ++i2){
                        EntityMan.SpawnEnemy(_enemiesJs.Enemies.GREEN);
                        EntityMan.SpawnEnemy(_enemiesJs.Enemies.BLUE);
                        EntityMan.SpawnEnemy(_enemiesJs.Enemies.RED);
                    }
                    break;
                default:
                    for(let i3 = 0; i3 < 5; ++i3){
                        EntityMan.SpawnEnemy(_enemiesJs.Enemies.GREEN);
                        EntityMan.SpawnEnemy(_enemiesJs.Enemies.BLUE);
                    }
                    EntityMan.SpawnEnemy(_enemiesJs.Enemies.RED);
                    EntityMan.SpawnEnemy(_enemiesJs.Enemies.RED);
                    break;
            }
            EntityMan.nextScoreEvent *= 2;
            EntityMan.prevEnemyCount = EntityMan.enemies.countActive();
        }
        if (EntityMan.player.score >= EntityMan.score2win) {
            // start game win event
            EntityMan.scene.events.emit('gamewin');
            // no more spawns allows
            EntityMan.timer = 0;
        // "you win" swoops in.
        // not implemented
        }
    }
    static SpawnEnemy(type) {
        let spawnloc = _enemiesJs.Enemy.SpawnLoc(EntityMan.scene); // maybe just pass scene in
        let e;
        switch(type){
            case _enemiesJs.Enemies.GREEN:
                e = EntityMan.enemies.get(spawnloc.x, spawnloc.y, type); // in here as there could be enemy specific spawning later.
                break;
            case _enemiesJs.Enemies.RED:
                e = EntityMan.enemies.get(spawnloc.x, spawnloc.y, type);
                e.hp = 2;
                break;
            case _enemiesJs.Enemies.BLUE:
                e = EntityMan.enemies.get(spawnloc.x, spawnloc.y, type);
                e.hp = 3;
                break;
        }
        e.type = type;
        e.setTarget(this.player); // maybe move to create callback
        e.setPipeline('Light2D');
    }
}

},{"./Player.js":"lmXUp","./Enemies.js":"9tfZw","./Math.js":"6wRtE","./Items.js":"9L8qK","@parcel/transformer-js/src/esmodule-helpers.js":"c1kAu"}],"lmXUp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Player", ()=>Player
);
var _bulletManJs = require("./BulletMan.js");
var _itemsJs = require("./Items.js");
class Player extends Phaser.GameObjects.Sprite {
    a1;
    a2;
    weapon;
    ammo;
    shoot;
    keys;
    radius;
    lives;
    light;
    particles;
    score;
    cooldown;
    constructor(scene, x, y, r){
        let circBody = scene.make.graphics().fillStyle(6711039).fillCircle(r, r, r).generateTexture('PlayerBody', r * 2, r * 2);
        circBody.destroy();
        super(scene, x, y, 'PlayerBody');
        let circArm = scene.make.graphics().fillStyle(8421504).fillCircle(r, r, r / 4).strokeCircle(r, r, r / 4).generateTexture('arm', r * 2, r * 2);
        circArm.destroy();
        this.setDepth(0.05);
        this.a1 = scene.add.sprite(x + r, y, 'arm').setDepth(0.1);
        this.a2 = scene.add.sprite(x, y + r, 'arm').setDepth(0.1);
        //--------------------------
        scene.physics.world.enable(this);
        this.body.setCollideWorldBounds(true);
        scene.add.existing(this);
        this.body.setCircle(r);
        //--------------------------------------------------
        if (!scene.sys.game.device.os.desktop) {
            scene.input.addPointer(2);
            this.j1 = scene.plugins.get('rexvirtualjoystickplugin').add(scene, {
                x: 150,
                y: scene.cameras.main.displayHeight - 150,
                radius: 100
            });
            this.cursorKeys = this.j1.createCursorKeys();
            this.pressedKeys = [];
        }
        //--------------------------------------------------
        scene.input.keyboard.on("keyup", this.keyup, this);
        scene.input.on("pointerdown", this.mousedown, this);
        scene.input.on("pointerup", this.mouseup, this);
        this.keys = scene.input.keyboard.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D,
            UP: Phaser.Input.Keyboard.KeyCodes.UP,
            DOWN: Phaser.Input.Keyboard.KeyCodes.DOWN,
            LEFT: Phaser.Input.Keyboard.KeyCodes.LEFT,
            RIGHT: Phaser.Input.Keyboard.KeyCodes.RIGHT
        });
        //--------------------------------------------------
        this.particles = scene.add.particles('playerfrag');
        this.particles.createEmitter({
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
        });
        //--------------------------------------------------
        this.weapon = scene.add.item(x, y, _itemsJs.Items.SLINGSHOT);
        this.light = this.scene.lights.addLight(0, 0, 150);
        this.angle = 0;
        this.radius = r;
        this.body.setMaxVelocity(200, 200);
        this.shoot = false;
        this.ammo = 0;
        this.score = 0;
        this.cooldown = 0;
        this.lives = 4;
    }
    preUpdate(time, deltaTime) {
        super.preUpdate(time, deltaTime);
        this.keydown();
    }
    update(time, dt) {
        const pc = this.body.center;
        if (this.scene.sys.game.device.os.desktop) this.angle = Phaser.Math.Angle.Between(pc.x, pc.y, this.scene.input.mousePointer.worldX, this.scene.input.mousePointer.worldY);
        else {
            let pointer = this.j1.pointerX == this.scene.input.pointer1.worldX ? this.scene.input.pointer2 : this.scene.input.pointer1;
            this.angle = Phaser.Math.Angle.Between(pc.x, pc.y, pointer.worldX, pointer.worldY);
        }
        const is_dir = Math.abs(this.angle) < 1.5708; // Am i facing left or right?
        if (this.shoot) {
            // messy fix this.
            let outPos = this.weapon.getRightCenter();
            const dir = is_dir ? -1 : 1;
            let offset = new Phaser.Geom.Point(20, 7 * dir);
            Phaser.Math.Rotate(offset, this.weapon.rotation);
            outPos.y += offset.y;
            outPos.x += offset.x;
            switch(this.weapon.type){
                case _itemsJs.Items.CHAIN:
                    this.scene.cameras.main.shake(500); //shake(0.05, 500);
                    this.body.x -= Math.cos(this.angle) * 2; // Push Player back
                    this.body.y -= Math.sin(this.angle) * 2;
                    this.scene.sound.play(_itemsJs.ItemSound.CHAIN);
                    _bulletManJs.BulletMan.addBullet(_bulletManJs.Bullets.CHAIN, outPos, this.angle);
                    // To do: spawn muzzle flash
                    --this.ammo;
                    this.scene.events.emit('ammoChange', this.ammo);
                    if (this.ammo <= 0) this.SetWeapon(_itemsJs.Items.SLINGSHOT, this.ammo);
                    break;
                case _itemsJs.Items.SLINGSHOT:
                    this.scene.sound.play(_itemsJs.ItemSound.SLINGSHOT);
                    _bulletManJs.BulletMan.addBullet(_bulletManJs.Bullets.SLINGSHOT, outPos, this.angle);
                    this.shoot = false;
                    break;
                case _itemsJs.Items.SHOTGUN:
                    if (this.cooldown > 0) {
                        this.cooldown -= dt;
                        break;
                    } else this.cooldown = 83;
                    this.scene.sound.play(_itemsJs.ItemSound.SHOTGUN);
                    let dir1 = Math.sign(this.angle);
                    _bulletManJs.BulletMan.addBullet(_bulletManJs.Bullets.SHOTGUN, outPos, this.angle + dir1 * 0.1);
                    _bulletManJs.BulletMan.addBullet(_bulletManJs.Bullets.SHOTGUN, outPos, this.angle + dir1 * 0.05);
                    _bulletManJs.BulletMan.addBullet(_bulletManJs.Bullets.SHOTGUN, outPos, this.angle);
                    _bulletManJs.BulletMan.addBullet(_bulletManJs.Bullets.SHOTGUN, outPos, this.angle + dir1 * -0.05);
                    this.shoot = false;
                    --this.ammo;
                    this.scene.events.emit('ammoChange', this.ammo);
                    if (this.ammo <= 0) this.SetWeapon(_itemsJs.Items.SLINGSHOT, this.ammo);
                    break;
                default:
            }
        }
        // positioning
        this.light.setPosition(pc.x, pc.y);
        Phaser.Math.RotateTo(this.a1, pc.x, pc.y, this.angle - 0.7854, this.radius); // rotate arms
        Phaser.Math.RotateTo(this.a2, pc.x, pc.y, this.angle + 0.7854, this.radius);
        Phaser.Math.RotateTo(this.weapon, pc.x, pc.y, this.angle, this.radius); // rotate weapon
        this.weapon.rotation = this.angle; // weapon angle
        this.weapon.setFlipY(!is_dir); // not upside down.
    }
    keydown() {
        let A = this.keys.A.isDown || this.keys.LEFT.isDown;
        let D = this.keys.D.isDown || this.keys.RIGHT.isDown;
        let W = this.keys.W.isDown || this.keys.UP.isDown;
        let S = this.keys.S.isDown || this.keys.DOWN.isDown;
        if (!this.scene.sys.game.device.os.desktop) {
            A |= this.cursorKeys.left.isDown;
            D |= this.cursorKeys.right.isDown;
            W |= this.cursorKeys.up.isDown;
            S |= this.cursorKeys.down.isDown;
            if (this.pressedKeys[1] != A) this.keyup({
                keyCode: 65
            });
            if (this.pressedKeys[2] != D) this.keyup({
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
        if (A && !D) this.body.velocity.x -= this.body.maxVelocity.x;
        else if (D && !A) this.body.velocity.x += this.body.maxVelocity.x;
        else if (A && D) this.body.velocity.x = 0;
        if (W && !S) this.body.velocity.y -= this.body.maxVelocity.y;
        else if (S && !W) this.body.velocity.y += this.body.maxVelocity.y;
        else if (W && S) this.body.velocity.y = 0;
    }
    keyup(e) {
        switch(e.keyCode){
            case 65:
            case 37:
                this.body.velocity.x = 0;
                break;
            case 87:
            case 38:
                this.body.velocity.y = 0;
                break;
            case 68:
            case 39:
                this.body.velocity.x = 0;
                break;
            case 83:
            case 40:
                this.body.velocity.y = 0;
                break;
        }
    }
    mousedown(e) {
        this.shoot = true;
    }
    mouseup(e) {
        this.shoot = false;
    }
    SetWeapon(weaponType, ammo) {
        this.scene.sound.play('pickup_item');
        if (weaponType == this.weapon.type) {
            this.ammo += ammo;
            _bulletManJs.score_fade(this.x + 50, this.y - 50, '+' + ammo);
        } else {
            this.weapon.destroy();
            this.weapon = this.scene.add.item(this.x, this.y, weaponType);
            this.ammo = ammo;
            // if not alive, and picked up weapon somehow, match the alpha of respawn.
            if (!this.alive()) this.weapon.alpha = this.alpha;
        }
        this.scene.events.emit('ammoChange', this.ammo);
    }
    static DoDamage(enemy, player) {
        if (!player.alive()) return;
        // burst player
        player.particles.emitParticleAt(player.x, player.y);
        // Player disapear & set status to dead. alpha != 1 == dead
        player.alpha = 0;
        player.a1.alpha = 0;
        player.a2.alpha = 0;
        player.a2.alpha = 0;
        player.weapon.alpha = 0;
        // Turn off machine gun if shooting
        player.shoot = false;
        // disable movement.
        player.body.moves = false;
        // disable input. keyboard & mouse event
        player.scene.input.off('pointerdown', player.pointerdown, player);
        // subtract lives
        --player.lives;
        // turn off light
        player.light.setIntensity(0.01); // dont turn off completely. bug in phaser makes screen go black.
        // update UI
        _bulletManJs.BulletMan.scene.events.emit('livesChange', player.lives);
        // check if gameover
        if (player.lives <= 0) {
            // fade out game music
            const time_ms = 6000;
            let gm = player.scene.sound.get('game_music');
            player.scene.tweens.add({
                targets: gm,
                volume: 0,
                duration: time_ms,
                onComplete: function() {
                    gm.destroy();
                }
            });
            // fade out camera
            player.scene.cameras.main.fadeOut(time_ms);
        } else // make player respawn, Blink in
        player.scene.tweens.add({
            targets: [
                player,
                player.a1,
                player.a2,
                player.weapon
            ],
            alpha: {
                start: 0,
                to: 1
            },
            ease: 'Bounce.In',
            delay: 3000,
            onComplete: function() {
                // enable movement.   some of this is redundant same with above
                player.body.moves = true;
                player.light.setIntensity(1);
                player.scene.input.on('pointerdown', player.mousedown, player);
            // player.body.stop(); // clear any leftover velocity
            }
        });
    }
    alive() {
        return this.alpha == 1;
    }
}
Phaser.GameObjects.GameObjectFactory.register('player', function(x, y, r) {
    const pl1 = new Player(this.scene, x, y, r);
    this.displayList.add(pl1);
    this.updateList.add(pl1);
    return pl1;
});

},{"./BulletMan.js":"i6X5Y","./Items.js":"9L8qK","@parcel/transformer-js/src/esmodule-helpers.js":"c1kAu"}],"9L8qK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Items", ()=>Items
);
parcelHelpers.export(exports, "ItemIcons", ()=>ItemIcons
);
parcelHelpers.export(exports, "ItemSound", ()=>ItemSound
);
parcelHelpers.export(exports, "ItemMan", ()=>ItemMan
);
parcelHelpers.export(exports, "Item", ()=>Item
);
var _entityManJs = require("./EntityMan.js");
var _mathJs = require("./Math.js");
const Items = {
    CHAIN: 'chain',
    SHOTGUN: 'shotgun',
    SLINGSHOT: 'slingshot'
};
const ItemIcons = {
    CHAIN: 'chainicon',
    SHOTGUN: 'shotgunicon',
    SLINGSHOT: 'slingshoticon'
};
const ItemSound = {
    CHAIN: 'shoot_pop',
    SHOTGUN: 'shoot_bang',
    SLINGSHOT: 'shoot_twang'
};
class ItemMan {
    static items;
    static scene;
    static Init(scene) {
        ItemMan.scene = scene;
        ItemMan.items = scene.add.group({
            classType: Item,
            maxSize: 4,
            runChildUpdate: true,
            removeCallback: function(item) {
                ItemMan.scene.lights.removeLight(item.glow);
            }
        });
        scene.physics.add.overlap(ItemMan.items, _entityManJs.EntityMan.player, getItem);
    }
    static Update() {
    }
    static addItem(type, loc) {
        let i = ItemMan.items.get(loc.x, loc.y, type);
        if (i) {
            i.setPipeline('Light2D');
            i.glow = ItemMan.scene.lights.addLight(i.x, i.y, 200, 16724787);
        }
    }
}
function getItem(Item1, Player) {
    switch(Item1.type){
        case ItemIcons.CHAIN:
            Player.SetWeapon(Items.CHAIN, 200);
            break;
        case ItemIcons.SLINGSHOT:
            Player.SetWeapon(Items.SLINGSHOT, -1);
            break;
        case ItemIcons.SHOTGUN:
            Player.SetWeapon(Items.SHOTGUN, 15);
            break;
    }
    Item1.destroy();
}
class Item extends Phaser.GameObjects.Sprite {
    glow;
    type;
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        switch(texture){
            case ItemIcons.CHAIN:
                this.setDepth(0.1);
                this.setScale(0.6);
                this.type = ItemIcons.CHAIN;
                scene.physics.world.enable(this);
                break;
            case Items.CHAIN:
                this.type = Items.CHAIN;
                this.setScale(0.6);
                break;
            case Items.SLINGSHOT:
                this.setScale(0.6);
                this.type = Items.SLINGSHOT;
                break;
            case ItemIcons.SLINGSHOT:
                this.setDepth(0.1);
                this.setScale(0.6);
                this.type = ItemIcons.SLINGSHOT;
                scene.physics.world.enable(this);
                break;
            case Items.SHOTGUN:
                this.setScale(1.5);
                this.type = Items.SHOTGUN;
                break;
            case ItemIcons.SHOTGUN:
                this.setDepth(0.1);
                this.setScale(0.6);
                this.type = ItemIcons.SHOTGUN;
                scene.physics.world.enable(this);
                break;
        }
        scene.add.existing(this);
        this.setDepth(0.2);
    }
    update() {
    }
    static RandomItem() {
        return _mathJs.TossCoin(0.3) ? ItemIcons.CHAIN : ItemIcons.SHOTGUN;
    }
}
Phaser.GameObjects.GameObjectFactory.register('item', function(x, y, texture) {
    const cc = new Item(this.scene, x, y, texture);
    this.displayList.add(cc);
    this.updateList.add(cc);
    return cc;
});

},{"./EntityMan.js":"3Rd41","./Math.js":"6wRtE","@parcel/transformer-js/src/esmodule-helpers.js":"c1kAu"}],"6wRtE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TossCoin", ()=>TossCoin
);
parcelHelpers.export(exports, "getRandom", ()=>getRandom
);
parcelHelpers.export(exports, "GetRandomVec2", ()=>GetRandomVec2
);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"c1kAu"}],"c1kAu":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9tfZw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Enemies", ()=>Enemies
);
parcelHelpers.export(exports, "Enemy", ()=>Enemy
);
var _mathJs = require("./Math.js");
const Enemies = Object.freeze({
    GREEN: "virus_green",
    RED: "virus_red",
    BLUE: "virus_blue"
});
class Enemy extends Phaser.GameObjects.Sprite {
    hp;
    type;
    v = 70;
    timer = 0;
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.physics.world.enable(this);
        this.body.setCircle(this.displayWidth / 2); // this includes frills.
        scene.add.existing(this);
        this.setScale(0.25);
        this.angle = 0;
        this.setDepth(0.2);
    }
    setTarget(target) {
        this.target = target;
    }
    updateRotation() {
        const c = this.getCenter();
        const tc = this.target.getCenter();
        const rotation = Phaser.Math.Angle.Between(c.x, c.y, tc.x, tc.y);
        if (this.target.alive()) this.setRotation(rotation);
        else // make them go the opposite way
        this.setRotation(Phaser.Math.Angle.Reverse(rotation));
    }
    update(t, dt) {
        switch(this.type){
            case Enemies.BLUE:
            case Enemies.GREEN:
                this.updateRotation();
                this.scene.physics.velocityFromRotation(this.rotation, this.v, this.body.velocity);
                break;
            case Enemies.RED:
                if (this.hp == 2) {
                    this.updateRotation();
                    this.scene.physics.velocityFromRotation(this.rotation, this.v, this.body.velocity);
                } else // near to stopping
                if (Math.floor(Math.abs(this.body.velocity.x)) - 5 < 0) {
                    // "turn off" damage
                    this.hp = 1000000000000;
                    // // wait some time
                    if (this.timer < 834) {
                        // wait on camera bound. if playe dead, wait for respawn.
                        if (this.target.alive()) this.timer += dt;
                        this.body.acceleration.x = 0;
                        this.body.acceleration.y = 0;
                        this.body.velocity.x = 0;
                        this.body.velocity.y = 0;
                        // always face towards player location even if player dead.
                        const c = this.getCenter();
                        const ct = this.target.getCenter();
                        const rotation = Phaser.Math.Angle.Between(c.x, c.y, ct.x, ct.y);
                        this.setRotation(rotation);
                    } else {
                        // reset timer.
                        this.timer = 0;
                        // turn on damage
                        this.hp = 1;
                        // charge
                        this.scene.physics.velocityFromRotation(this.rotation, this.v, this.body.velocity);
                    }
                } else {
                    // or if collides world
                    // if(Phaser.Geom.Intersects.RectangleToRectangle(this.body.getBounds(), this.scene.cameras.main.getBounds()))
                    const x = Math.sign(Math.cos(this.rotation)) > 0 ? this.body.width : 0;
                    const y = Math.sign(Math.sin(this.rotation)) > 0 ? this.body.height : 0;
                    const x1 = Math.sign(Math.cos(this.rotation)) < 0 ? this.body.width : 0;
                    const y1 = Math.sign(Math.sin(this.rotation)) < 0 ? this.body.height : 0;
                    if (this.scene.cameras.main.worldView.contains(this.body.x + x1, this.body.y + y1)) {
                        if (!this.scene.cameras.main.worldView.contains(this.body.x + x, this.body.y + y)) this.body.setVelocity(0);
                    }
                }
                break;
        }
    }
    static SpawnLoc(scene) {
        let num = 400;
        let bound_x = scene.physics.world.bounds.width;
        let bound_y = scene.physics.world.bounds.height;
        let r = {
        };
        if (!_mathJs.TossCoin(0.5)) {
            if (!_mathJs.TossCoin(0.5)) {
                r = _mathJs.GetRandomVec2(bound_x, bound_x, 0, bound_y);
                r.x += num;
            } else {
                r = _mathJs.GetRandomVec2(0, 0, 0, bound_y);
                r.x += -num;
            }
        } else if (!_mathJs.TossCoin(0.5)) {
            r = _mathJs.GetRandomVec2(0, bound_x, bound_y, bound_y);
            r.y += num;
        } else {
            r = _mathJs.GetRandomVec2(0, bound_x, 0, 0);
            r.y += -num;
        }
        return r;
    }
}
Phaser.GameObjects.GameObjectFactory.register('enemy', function(x, y, texture) {
    const cc = new Enemy(this.scene, x, y, texture);
    this.displayList.add(cc);
    this.updateList.add(cc);
    return cc;
});

},{"./Math.js":"6wRtE","@parcel/transformer-js/src/esmodule-helpers.js":"c1kAu"}],"5D3wB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImageButton", ()=>ImageButton
);
parcelHelpers.export(exports, "UserInterface", ()=>UserInterface
);
parcelHelpers.export(exports, "TitleScreen", ()=>TitleScreen
);
parcelHelpers.export(exports, "Credits", ()=>Credits
);
class ImageButton extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture, callback){
        super(scene, x, y, texture);
        this.setInteractive({
            useHandCursor: true
        }).on('pointerover', ()=>this.enterButtonHoverState()
        ).on('pointerout', ()=>this.enterButtonRestState()
        ).on('pointerdown', ()=>this.enterButtonActiveState()
        ).on('pointerup', ()=>{
            this.setInteractive({
                useHandCursor: false
            });
            this.enterButtonHoverState();
            callback();
        });
        scene.add.existing(this);
    }
    preUpdate(time, delta) {
    }
    update(t, dt) {
    }
    enterButtonHoverState() {
        // add a border or make lighter. 2nd image that appears on hover.
        this.setTint(1214413);
    }
    enterButtonRestState() {
        this.clearTint();
    }
    enterButtonActiveState() {
        this.setTint(8421504);
    }
}
Phaser.GameObjects.GameObjectFactory.register('ImgButton', function(x, y, texture, cb) {
    const cc = new ImageButton(this.scene, x, y, texture, cb);
    this.displayList.add(cc);
    this.updateList.add(cc);
    return cc;
});
class UserInterface extends Phaser.Scene {
    ammoText;
    scoreText;
    livesText;
    constructor(config){
        super({
            key: 'ui'
        });
    }
    preload() {
    }
    create(data) {
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
        });
        // on destruction this
        var ourGame = this.scene.get('game');
        ourGame.events.on('scoreChange', function(value) {
            this.scoreText.setText('Score: ' + value);
            this.gameText.setText('Game Progress: ' + (value / 95000 * 100).toFixed(2) + '%');
        }, this);
        ourGame.events.on('ammoChange', function(value) {
            if (value <= 0) value = 'Unlimited';
            this.ammoText.setText('Ammo: ' + value);
        }, this);
        ourGame.events.on('livesChange', function(value) {
            this.livesText.setText('Lives: ' + value);
            if (value <= 0) {
                this.scene.sendToBack('ui');
                this.scene.restart();
                this.scene.sleep('ui');
            }
        }, this);
    }
}
class TitleScreen extends Phaser.Scene {
    constructor(config){
        super(config);
    }
    preload() {
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
    create(data) {
        let w = this.sys.canvas.width;
        let h = this.sys.canvas.height;
        this.ts = this.add.image(0, 0, 'TitleScreen').setOrigin(0, 0).setDisplaySize(w, h);
        this.logo = this.add.image(w / 2, h / 6, 'Logo').setOrigin(0.5, 0.5);
        this.logo.setScale(Math.min(w / this.logo.displayWidth, h / this.logo.displayHeight) / 1.5);
        if (this.sys.game.device.os.desktop) this.help = this.add.image(w, 0, 'MoveKeys').setOrigin(1, 0);
        this.pb = this.add.ImgButton(w / 2, h / 2, 'PlayButton', ()=>this.play()
        ).setOrigin(0.5, 0.5);
        this.cb = this.add.ImgButton(w / 2, h / 2 + this.pb.displayHeight * 1.5, 'CreditsButton', ()=>this.scene.switch('credits')
        ).setOrigin(0.5, 0.5);
    }
    play() {
        this.scene.switch('game');
    }
}
class Credits extends Phaser.Scene {
    constructor(config){
        super('credits');
    }
    preload() {
        this.load.image({
            key: 'CreditsBG',
            url: 'data/gfx/CreditsScreen.png'
        });
        this.load.image({
            key: 'mainmenubtn',
            url: 'data/gfx/MainMenuButton.svg'
        });
    }
    create() {
        let w = this.sys.canvas.width;
        let h = this.sys.canvas.height;
        this.cs = this.add.image(0, 0, 'CreditsBG').setOrigin(0, 0).setDisplaySize(w, h);
        this.mb = this.add.ImgButton(w / 2, h / 2.5, 'mainmenubtn', ()=>this.scene.switch('default')
        ).setOrigin(0.55, 0.55);
        this.mb.setScale(Math.min(w / this.mb.displayWidth, h / this.mb.displayHeight) / 4);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"c1kAu"}]},["bW9eL","gLLPy"], "gLLPy", "parcelRequire0c6d")

//# sourceMappingURL=index.4d6bcbeb.js.map
