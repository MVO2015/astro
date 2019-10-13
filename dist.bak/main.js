/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/astro.css":
/*!***********************!*\
  !*** ./css/astro.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./astro.css */ "./node_modules/css-loader/dist/cjs.js!./css/astro.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./img/1.svg":
/*!*******************!*\
  !*** ./img/1.svg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/1.svg";

/***/ }),

/***/ "./img/10.svg":
/*!********************!*\
  !*** ./img/10.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/10.svg";

/***/ }),

/***/ "./img/11.svg":
/*!********************!*\
  !*** ./img/11.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/11.svg";

/***/ }),

/***/ "./img/12.svg":
/*!********************!*\
  !*** ./img/12.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/12.svg";

/***/ }),

/***/ "./img/13.svg":
/*!********************!*\
  !*** ./img/13.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/13.svg";

/***/ }),

/***/ "./img/14.svg":
/*!********************!*\
  !*** ./img/14.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/14.svg";

/***/ }),

/***/ "./img/15.svg":
/*!********************!*\
  !*** ./img/15.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/15.svg";

/***/ }),

/***/ "./img/16.svg":
/*!********************!*\
  !*** ./img/16.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/16.svg";

/***/ }),

/***/ "./img/17.svg":
/*!********************!*\
  !*** ./img/17.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/17.svg";

/***/ }),

/***/ "./img/18.svg":
/*!********************!*\
  !*** ./img/18.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/18.svg";

/***/ }),

/***/ "./img/19.svg":
/*!********************!*\
  !*** ./img/19.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/19.svg";

/***/ }),

/***/ "./img/2.svg":
/*!*******************!*\
  !*** ./img/2.svg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/2.svg";

/***/ }),

/***/ "./img/20.svg":
/*!********************!*\
  !*** ./img/20.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/20.svg";

/***/ }),

/***/ "./img/21.svg":
/*!********************!*\
  !*** ./img/21.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/21.svg";

/***/ }),

/***/ "./img/23.svg":
/*!********************!*\
  !*** ./img/23.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/23.svg";

/***/ }),

/***/ "./img/24.svg":
/*!********************!*\
  !*** ./img/24.svg ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/24.svg";

/***/ }),

/***/ "./img/3.svg":
/*!*******************!*\
  !*** ./img/3.svg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/3.svg";

/***/ }),

/***/ "./img/4.svg":
/*!*******************!*\
  !*** ./img/4.svg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/4.svg";

/***/ }),

/***/ "./img/5.svg":
/*!*******************!*\
  !*** ./img/5.svg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/5.svg";

/***/ }),

/***/ "./img/6.svg":
/*!*******************!*\
  !*** ./img/6.svg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/6.svg";

/***/ }),

/***/ "./img/7.svg":
/*!*******************!*\
  !*** ./img/7.svg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/7.svg";

/***/ }),

/***/ "./img/8.svg":
/*!*******************!*\
  !*** ./img/8.svg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/8.svg";

/***/ }),

/***/ "./img/9.svg":
/*!*******************!*\
  !*** ./img/9.svg ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/9.svg";

/***/ }),

/***/ "./img/aquarius.svg":
/*!**************************!*\
  !*** ./img/aquarius.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/aquarius.svg";

/***/ }),

/***/ "./img/aries.svg":
/*!***********************!*\
  !*** ./img/aries.svg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/aries.svg";

/***/ }),

/***/ "./img/background-zodiac.png":
/*!***********************************!*\
  !*** ./img/background-zodiac.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/background-zodiac.png";

/***/ }),

/***/ "./img/cancer.svg":
/*!************************!*\
  !*** ./img/cancer.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/cancer.svg";

/***/ }),

/***/ "./img/capricorn.svg":
/*!***************************!*\
  !*** ./img/capricorn.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/capricorn.svg";

/***/ }),

/***/ "./img/gemini.svg":
/*!************************!*\
  !*** ./img/gemini.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/gemini.svg";

/***/ }),

/***/ "./img/leo.svg":
/*!*********************!*\
  !*** ./img/leo.svg ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/leo.svg";

/***/ }),

/***/ "./img/libra.svg":
/*!***********************!*\
  !*** ./img/libra.svg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/libra.svg";

/***/ }),

/***/ "./img/pisces.svg":
/*!************************!*\
  !*** ./img/pisces.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/pisces.svg";

/***/ }),

/***/ "./img/sagittarius.svg":
/*!*****************************!*\
  !*** ./img/sagittarius.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/sagittarius.svg";

/***/ }),

/***/ "./img/scorpio.svg":
/*!*************************!*\
  !*** ./img/scorpio.svg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/scorpio.svg";

/***/ }),

/***/ "./img/taurus.svg":
/*!************************!*\
  !*** ./img/taurus.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/taurus.svg";

/***/ }),

/***/ "./img/virgo.svg":
/*!***********************!*\
  !*** ./img/virgo.svg ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/virgo.svg";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./css/astro.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/astro.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#clickMeFlash {\r\n    fill: none;\r\n    stroke: red;\r\n    stroke-width: 4;\r\n    animation-name: flash1;\r\n    animation-iteration-count: 4;\r\n    animation-duration: 0.5s;\r\n}\r\n\r\n@keyframes flash1 {\r\n    0% {stroke-width: 0;}\r\n    50% {stroke-width: 4;}\r\n    100% {stroke-width: 0;}\r\n}\r\n\r\n@keyframes flash2 {\r\n    0% {stroke-width: 0;}\r\n    50% {stroke-width: 4;}\r\n    100% {stroke-width: 0;}\r\n}\r\n\r\nbody {\r\n    color: white;\r\n    background-color: #004;\r\n    font-family: sans-serif;\r\n}\r\n\r\n#text h1 {\r\n    text-align: left;\r\n    text-shadow:\r\n        -1px -1px 0 #000,\r\n         1px -1px 0 #000,\r\n        -1px  1px 0 #000,\r\n         1px  1px 0 #000,\r\n        0 0 20px #3FF;\r\n    font-size: 20px;\r\n}\r\n\r\n#text p {\r\n    text-align: left;\r\n}\r\n\r\n.clickable {\r\n    color: white;\r\n}\r\n\r\n.unclickable {\r\n    color: #777;\r\n}\r\n\r\n.author {\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    padding-bottom: 20px;\r\n    padding-left: 20px;\r\n    text-shadow: 0 0 10px #FFF;\r\n}\r\n\r\n.container {\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    }\r\n\r\n#wall {\r\n    /*top: 0; left: 0; height:90%; width:100%;*/\r\n    max-width: 100vw;\r\n    max-height: 80vh;\r\n    /* for MS IE 11: */\r\n    min-height: 80vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.zodiac-signs {\r\n    text-anchor:middle;\r\n    alignment-baseline:middle;\r\n    dominant-baseline:central;\r\n    font-style:normal;\r\n    font-weight:bold;\r\n    font-size: 14px;\r\n    line-height:14px;\r\n}\r\n\r\n.slidecontainer {\r\n    position: fixed;\r\n    width: 100%; /* Width of the outside container */\r\n    bottom: 0;\r\n}\r\n\r\n/* The slider itself */\r\n.slider {\r\n    -webkit-appearance: none;  /* Override default CSS styles */\r\n    appearance: none;\r\n    width: 100%; /* Full-width */\r\n    height: 25px; /* Specified height */\r\n    background: darkslateblue; /* Grey background */\r\n    outline: none; /* Remove outline */\r\n    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */\r\n    -webkit-transition: .2s; /* 0.2 seconds transition on hover */\r\n    transition: opacity .2s;\r\n}\r\n\r\n/* Mouse-over effects */\r\n.slider:hover {\r\n    opacity: 1; /* Fully shown on mouse-over */\r\n}\r\n\r\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none; /* Override default look */\r\n    appearance: none;\r\n    width: 25px; /* Set a specific slider handle width */\r\n    height: 25px; /* Slider handle height */\r\n    background: orange; /* Green background */\r\n    cursor: pointer; /* Cursor on hover */\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 25px; /* Set a specific slider handle width */\r\n    height: 25px; /* Slider handle height */\r\n    background: orange; /* Green background */\r\n    cursor: pointer; /* Cursor on hover */\r\n}\r\n\r\n#text {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    margin-left: 20px;\r\n}\r\n\r\n#date {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    margin-right: 20px;\r\n}\r\n\r\n#dst-container {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n#background-zodiac {\r\n    position: fixed;\r\n    bottom: 0;\r\n    height: 100vh;\r\n    z-index: -1;\r\n}\r\n\r\n#zodiac-paintings {\r\n    position: absolute;\r\n    transition: opacity 5s;\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/*! exports provided: startAstronomicalClock, stopAstronomicalClock, animateDaylightSavingTimeOn, animateDaylightSavingTimeOff, startAnimateDaylightSavingTimeOff, startAnimateDaylightSavingTimeOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAstronomicalClock", function() { return startAstronomicalClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopAstronomicalClock", function() { return stopAstronomicalClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateDaylightSavingTimeOn", function() { return animateDaylightSavingTimeOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateDaylightSavingTimeOff", function() { return animateDaylightSavingTimeOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAnimateDaylightSavingTimeOff", function() { return startAnimateDaylightSavingTimeOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAnimateDaylightSavingTimeOn", function() { return startAnimateDaylightSavingTimeOn; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time */ "./src/time.js");
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphics */ "./src/graphics.js");




var daylightSavingTimeOnTimer;
var daylightSavingTimeOffTimer;
let astronomicalClockUpdateTimer;

function startAstronomicalClock() {
    astronomicalClockUpdateTimer = setInterval(_main__WEBPACK_IMPORTED_MODULE_0__["showAstronomicalTodayTime"], 1000);
}

function stopAstronomicalClock() {
    clearInterval(astronomicalClockUpdateTimer);
}

function animateDaylightSavingTimeOn() {
    const numbers = document.getElementById("numbers");
    let numbersRotation = numbers.getAttribute("transform").match(/-?\d+/)[0];       // get number from string
    if (numbersRotation > -15) {    // animate numbers
        numbersRotation--;
        Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["rotateSvgById"])("numbers", numbersRotation);
    }
    else {
        const clockFace = document.getElementById("clockFace");
        let clockFaceRotation = clockFace.getAttribute("transform").match(/\d+/)[0];       // get number from string
        if (clockFaceRotation < 285) {  // animate whole clock
            clockFaceRotation++;
            clockFace.setAttribute("transform", "rotate(" + clockFaceRotation + ") scale(-1, 1)");
        } else {
            clearInterval(daylightSavingTimeOnTimer);     // stop this animation
            _time__WEBPACK_IMPORTED_MODULE_1__["daylightSavingTimeSwitch"].makeClickable();
        }
    }
}

function animateDaylightSavingTimeOff() {
    const numbers = document.getElementById("numbers");
    let numbersRotation = numbers.getAttribute("transform").match(/-?\d+/)[0];       // get number from string
    if (numbersRotation < 0) {  // animate numbers
        numbersRotation++;
        Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["rotateSvgById"])("numbers", numbersRotation);
    }
    else {
        const clockFace = document.getElementById("clockFace");
        let clockFaceRotation = clockFace.getAttribute("transform").match(/\d+/)[0];       // get number from string
        if (clockFaceRotation > 270) {  // animate whole clock
            clockFaceRotation--;
            clockFace.setAttribute("transform", "rotate(" + clockFaceRotation + ") scale(-1, 1)");
        } else {
            clearInterval(daylightSavingTimeOffTimer);     // stop this animation
            _time__WEBPACK_IMPORTED_MODULE_1__["daylightSavingTimeSwitch"].makeClickable();
        }
    }
}

function startAnimateDaylightSavingTimeOff() {
    daylightSavingTimeOffTimer = setInterval(animateDaylightSavingTimeOff, 33);
}

function startAnimateDaylightSavingTimeOn() {
    daylightSavingTimeOnTimer = setInterval(animateDaylightSavingTimeOn, 33);
}

function animateYearAround() {
    stopAstronomicalClock();
    let days = 0;
    const yearAroundTimer = setInterval(yearAroundAnimation, 50);
    function yearAroundAnimation() {
        if (days <= 365) {
            Object(_main__WEBPACK_IMPORTED_MODULE_0__["showAstronomicalTime"])();
            _time__WEBPACK_IMPORTED_MODULE_1__["astronomicalClockTime"].addDays(1);
            days++;
        } else {
            clearInterval(yearAroundTimer);
            startAstronomicalClock();
        }
    }
}

function animateDayAround() {
    stopAstronomicalClock();
    const dayAroundTimer = setInterval(dayAroundAnimation, 50);
    let minutes = 0;
    const minuteStep = 4;
    function dayAroundAnimation() {
        if (minutes < 1440) {
            Object(_main__WEBPACK_IMPORTED_MODULE_0__["showAstronomicalTime"])();
            _time__WEBPACK_IMPORTED_MODULE_1__["astronomicalClockTime"].addMinutes(minuteStep);
            minutes += minuteStep;
        } else {
            clearInterval(dayAroundTimer);
            startAstronomicalClock();
        }
    }
}


/***/ }),

/***/ "./src/clockobj.js":
/*!*************************!*\
  !*** ./src/clockobj.js ***!
  \*************************/
/*! exports provided: equator, cancriTropicus, clipCircleCancriTropicus, capricorniTropicus, latitudoHorizontis, opacusHorizontis, sunHandle, sunSymbol, starSymbol, moonHandle, moonSymbol, zodiacum, zodiacumOuterCircle, zodiacumInnerCircle, holeCircleZodiacumInner, maskCircleZodiacumOuter, zodiacumPieces, zodiacumOuterPoints, zodiacumInnerPoints, zodiacumCenterPoints, zodiacumEquinox, zodiacumSolstice, moonShape, oldTimeOuterCircle, oldTimeInnerCircle, holeCircleOldTimeInner, maskCircleOldTimeOuter, scale, constructAstronomicalClock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equator", function() { return equator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancriTropicus", function() { return cancriTropicus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipCircleCancriTropicus", function() { return clipCircleCancriTropicus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capricorniTropicus", function() { return capricorniTropicus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "latitudoHorizontis", function() { return latitudoHorizontis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacusHorizontis", function() { return opacusHorizontis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunHandle", function() { return sunHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunSymbol", function() { return sunSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "starSymbol", function() { return starSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moonHandle", function() { return moonHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moonSymbol", function() { return moonSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zodiacum", function() { return zodiacum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zodiacumOuterCircle", function() { return zodiacumOuterCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zodiacumInnerCircle", function() { return zodiacumInnerCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "holeCircleZodiacumInner", function() { return holeCircleZodiacumInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskCircleZodiacumOuter", function() { return maskCircleZodiacumOuter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zodiacumPieces", function() { return zodiacumPieces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zodiacumOuterPoints", function() { return zodiacumOuterPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zodiacumInnerPoints", function() { return zodiacumInnerPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zodiacumCenterPoints", function() { return zodiacumCenterPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zodiacumEquinox", function() { return zodiacumEquinox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zodiacumSolstice", function() { return zodiacumSolstice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moonShape", function() { return moonShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oldTimeOuterCircle", function() { return oldTimeOuterCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oldTimeInnerCircle", function() { return oldTimeInnerCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "holeCircleOldTimeInner", function() { return holeCircleOldTimeInner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskCircleOldTimeOuter", function() { return maskCircleOldTimeOuter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructAstronomicalClock", function() { return constructAstronomicalClock; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/math.js");
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphics */ "./src/graphics.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./time */ "./src/time.js");





__webpack_require__(/*! ../img/1.svg */ "./img/1.svg");
__webpack_require__(/*! ../img/2.svg */ "./img/2.svg");
__webpack_require__(/*! ../img/3.svg */ "./img/3.svg");
__webpack_require__(/*! ../img/4.svg */ "./img/4.svg");
__webpack_require__(/*! ../img/5.svg */ "./img/5.svg");
__webpack_require__(/*! ../img/6.svg */ "./img/6.svg");
__webpack_require__(/*! ../img/7.svg */ "./img/7.svg");
__webpack_require__(/*! ../img/8.svg */ "./img/8.svg");
__webpack_require__(/*! ../img/9.svg */ "./img/9.svg");
__webpack_require__(/*! ../img/10.svg */ "./img/10.svg");
__webpack_require__(/*! ../img/11.svg */ "./img/11.svg");
__webpack_require__(/*! ../img/12.svg */ "./img/12.svg");
__webpack_require__(/*! ../img/13.svg */ "./img/13.svg");
__webpack_require__(/*! ../img/14.svg */ "./img/14.svg");
__webpack_require__(/*! ../img/15.svg */ "./img/15.svg");
__webpack_require__(/*! ../img/16.svg */ "./img/16.svg");
__webpack_require__(/*! ../img/17.svg */ "./img/17.svg");
__webpack_require__(/*! ../img/18.svg */ "./img/18.svg");
__webpack_require__(/*! ../img/19.svg */ "./img/19.svg");
__webpack_require__(/*! ../img/20.svg */ "./img/20.svg");
__webpack_require__(/*! ../img/21.svg */ "./img/21.svg");
__webpack_require__(/*! ../img/23.svg */ "./img/23.svg");
__webpack_require__(/*! ../img/24.svg */ "./img/24.svg");

__webpack_require__(/*! ../img/aquarius.svg */ "./img/aquarius.svg");
__webpack_require__(/*! ../img/aries.svg */ "./img/aries.svg");
__webpack_require__(/*! ../img/cancer.svg */ "./img/cancer.svg");
__webpack_require__(/*! ../img/capricorn.svg */ "./img/capricorn.svg");
__webpack_require__(/*! ../img/gemini.svg */ "./img/gemini.svg");
__webpack_require__(/*! ../img/leo.svg */ "./img/leo.svg");
__webpack_require__(/*! ../img/libra.svg */ "./img/libra.svg");
__webpack_require__(/*! ../img/pisces.svg */ "./img/pisces.svg");
__webpack_require__(/*! ../img/sagittarius.svg */ "./img/sagittarius.svg");
__webpack_require__(/*! ../img/scorpio.svg */ "./img/scorpio.svg");
__webpack_require__(/*! ../img/taurus.svg */ "./img/taurus.svg");
__webpack_require__(/*! ../img/virgo.svg */ "./img/virgo.svg");

var OrbisDeclinationDeg = 23.5;
var orbisDeclination = Object(_math__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(OrbisDeclinationDeg);
var Latitudo = Object(_math__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(50);
var horizontis = Math.PI / 2 - Latitudo;
var Opacus = Object(_math__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(18);
var OrbisDiameter = 1;

var orbisCenter = {
    id: "orbisCenter",
    x: 0,
    y: null,
    compute: function (orbisDiameter) {
        this.y = orbisDiameter / 2;
    }
};

var orbis = {
    id: "orbis",
    r: null,
    cx: 0,
    cy: null,
    compute: function(orbisDiameter) {
        this.r = orbisDiameter / 2;
        this.cy = this.r;
    }
};


var equator = {
    id: "equator",
    r: null,
    cx: 0,
    cy: 0,
    compute: function () {
        this.r = projection(0);
    }
};

var cancriTropicus = {
    id: "cancriTropicus",
    r: null,
    cx: 0,
    cy: 0,
    compute: function (orbisDeclination) {
        this.r = projection(orbisDeclination);
    }
};

var clipCircleCancriTropicus = {
    id: "clipCircleCancriTropicus",
    r: null,
    cx: 0,
    cy: 0,
    compute: function (orbisDeclination) {
        this.r = projection(orbisDeclination);
    }
};


var capricorniTropicus = {
    id: "capricorniTropicus",
    r: null,
    cx: 0,
    cy: 0,
    compute: function (orbisDeclination) {
        this.r = projection(-orbisDeclination);
    }
};

var latitudoHorizontis = {
    id: "latitudoHorizontis",
    r: null,
    cx: null,
    cy: 0,
    init: function () {
        var x1 = projection(horizontis);
        var x2 = projection(Object(_math__WEBPACK_IMPORTED_MODULE_0__["oppositeAngle"])(horizontis));
        this.cx = (x1 + x2) / 2 ;
        this.r = Math.abs(x2 - x1) / 2;
    }
};

var opacusHorizontis = {
    id: "opacusHorizontis",
    r: null,
    cx: null,
    cy: 0,
    compute: function (horizontis, opacus) {
        var x1 = projection(horizontis - opacus);
        var x2 = projection(Object(_math__WEBPACK_IMPORTED_MODULE_0__["oppositeAngle"])(horizontis + opacus));
        this.cx = (x1 + x2) / 2 ;
        this.r = Math.abs(x2 - x1) / 2;
    }
};

var sunHandle = {
    id: "sunHandle",
    x1: 0,
    y1: 0,
    x2: null,
    y2: null,
    r: null,
    angle: 0,
    init: function(cancriTropicusRadius) {
        this.r = scale(cancriTropicusRadius);
        this.x2 = 0;
        this.y2 = scale(cancriTropicusRadius * 0.95);
        var handle = document.getElementById(this.id);
        handle.setAttribute("y2", this.y2.toString());
    },
    show: function(angleDeg) {
        var handle = document.getElementById(this.id);
        handle.setAttribute("transform", "rotate(" + angleDeg + ")");
        Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["displayInlineByElement"])(handle)
    },
    showByTime: function(d) {
        this.show(Object(_time__WEBPACK_IMPORTED_MODULE_3__["dateToSunTimeAngle"])(d));
    }
};

var sunSymbol = {
    id: "sunSymbol",
    angle: 0,
    r: null,
    x: null,
    y: null,

    showAt: function(xPx, yPx) {
        var sun = document.getElementById("sunPosition");
        sun.setAttribute("transform", "translate(" + xPx + " " + yPx + ")");
        Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["displayInlineByElement"])(sun);
    }
};

var starSymbol = {
    id: "starSymbol",
    x: null,
    y: null,
    init: function (zodiacumEquinox) {
        this.x = scale(zodiacumEquinox.x1);
        this.y = scale(zodiacumEquinox.y1);
    },
    show: function() {
        var star = document.getElementById("starPosition");
        star.setAttribute("transform", "translate(" + this.x + " " + this.y + ")");
        Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["displayInlineByElement"])(star);
    }
};

var moonHandle = {
    id: "moonHandle",
    x1: 0,
    y1: 0,
    x2: null,
    y2: null,
    r: null,
    angle: 0,
    init: function(cancriTropicusRadius) {
        this.r = scale(cancriTropicusRadius);
        this.y2 = 0;
        this.x2 = scale(cancriTropicusRadius * 0.95);
        var handle = document.getElementById(this.id);
        handle.setAttribute("x2", this.x2.toString());
    },
    show: function(angleDeg) {
        var handle = document.getElementById(this.id);
        handle.setAttribute("transform", "rotate(" + angleDeg + ")");
        Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["displayInlineByElement"])(handle)
    }
};

var moonSymbol = {
    id: "moonSymbol",
    angle: 0,
    r: null,
    x: null,
    y: null,

    showAt: function(xPx, yPx, rotationDeg) {
        var moon = document.getElementById("moonPosition");
        moon.setAttribute("transform", "translate(" + xPx + " " + yPx + ") rotate(" + rotationDeg  + ")");
        Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["displayInlineByElement"])(moon);
    }
};

var zodiacum = {
    r: null,
    cx: 0,
    cy: 0,
    c0: {x: null, y: null}, // center X, Y coordinates while angle = 0
    e0: {x: null, y: null}, // eclipse pole X, Y coordinates while angle = 0

    init: function() {
        this.compute(0);
        this.c0 = {x: this.cx, y: this.cy};
        this.e0 = this.eclipsePoleConstruction();
    },
    compute: function(angleDeg) {
        angleDeg = (typeof angleDeg !== 'undefined') ?  angleDeg : 0;
        var angleRad = Object(_math__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(angleDeg);
        this.r = (cancriTropicus.r + capricorniTropicus.r) / 2;
        var centerRotationRadius = capricorniTropicus.r - this.r;
        this.cy = centerRotationRadius * Math.sin(angleRad);
        this.cx = centerRotationRadius * Math.cos(angleRad);
    },
    eclipsePoleConstruction: function () {
        var pointOnEquator1 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["polar2Cartesian"])(0, 0, equator.r, 90 + OrbisDeclinationDeg);
        var pointOnEquator2 = {x:0, y: -equator.r};
        var lineGeneralEquationConstants = Object(_geometry__WEBPACK_IMPORTED_MODULE_1__["generalEquationConstantsOfLine"])(pointOnEquator1, pointOnEquator2);
        var x = Object(_geometry__WEBPACK_IMPORTED_MODULE_1__["intersectionOfLineAndXaxis"])(lineGeneralEquationConstants);
        return {x: x, y: 0};
    }
};

var zodiacumOuterCircle = {
    id: "zodiacumOuterCircle",
    r: null,
    cx: null,
    cy: null,
    init: function() {
        zodiacum.compute(0);
        this.r = zodiacum.r;
        this.cx = zodiacum.cx;
        this.cy = zodiacum.cy;
    }
};

var zodiacumInnerCircle = {
    id: "zodiacumInnerCircle",
    r: null,
    cx: null,
    cy: null,
    init: function(zodiacumOuterCircle) {
        this.r = zodiacumOuterCircle.r * 0.8;
        this.cx = zodiacumOuterCircle.cx;
        this.cy = zodiacumOuterCircle.cy;
    }
};

var zodiacumCentralCircle = {
    id: "zodiacumInnerCircle",
    r: null,
    cx: null,
    cy: null,
    init: function(zodiacumInnerCircle, zodiacumOuterCircle) {
        this.r = (zodiacumOuterCircle.r + zodiacumInnerCircle.r) / 2;
        this.cx = zodiacumOuterCircle.cx;
        this.cy = zodiacumOuterCircle.cy;
    }
};

var holeCircleZodiacumInner = {
    id: "holeCircleZodiacumInner",
    r: null,
    cx: null,
    cy: null,
    init: function(zodiacumInnerCircle) {
        this.r = zodiacumInnerCircle.r;
        this.cx = zodiacumInnerCircle.cx;
        this.cy = zodiacumInnerCircle.cy;
    }
};

var maskCircleZodiacumOuter = {
    id: "maskCircleZodiacumOuter",
    r: null,
    cx: null,
    cy: null,
    init: function(zodiacumOuterCircle) {
        this.r = zodiacumOuterCircle.r;
        this.cx = zodiacumOuterCircle.cx;
        this.cy = zodiacumOuterCircle.cy;
    }
};

var zodiacumPieces = {
    top: null,
    bottom: null,
    init: function (zodiacumOuterCircle, zodiacumInnerCircle) {
        var cx = scale(zodiacumOuterCircle.cx);
        var cy = scale(zodiacumOuterCircle.cy);
        var r1 = scale(zodiacumOuterCircle.r);
        var r2 = scale(zodiacumInnerCircle.r);
        this.top = [];
        this.bottom = [];

        for (var i = 0; i < 12; i++) {
            var angleDeg = - i * 30;
            this.top[i] = Object(_math__WEBPACK_IMPORTED_MODULE_0__["polar2Cartesian"])(cx, cy, r1, angleDeg - 90);
            this.bottom[i] = Object(_math__WEBPACK_IMPORTED_MODULE_0__["polar2Cartesian"])(cx, cy, r2, angleDeg - 90);
        }
    }
};

// Points on equator for construction of Zodiac
var equatorPoints = {
    point: null,
    init: function (equator) {
        this.point = [];
        for (var i = 0; i < 12; i++) {
            var angleDeg = - i * 30;
            this.point[i] = Object(_math__WEBPACK_IMPORTED_MODULE_0__["polar2Cartesian"])(equator.cx, equator.cy, equator.r, angleDeg - 90);
        }
    }
};

// Points on equator for construction of Zodiac - rotation 15 deg
var equatorPointsRotated = {
    point: null,
    init: function (equator) {
        this.point = [];
        for (var i = 0; i < 12; i++) {
            var angleDeg = - i * 30 - 15;
            this.point[i] = Object(_math__WEBPACK_IMPORTED_MODULE_0__["polar2Cartesian"])(equator.cx, equator.cy, equator.r, angleDeg - 90);
        }
    }
};

var zodiacumOuterPoints = {
    point: null,
    eclipsePole: {x: null, y: 0},
    cx: null,
    cy: null,
    r: null,
    init: function(zodiacum, equatorPoints) {
        // which root of quadratic equation we select for solution for given index (angle)
        var root = [1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1];
        this.eclipsePole = zodiacum.e0;
        this.cx = zodiacum.cx;
        this.cy = zodiacum.cy;
        this.r = zodiacum.r;
        this.point = [];
        for (var i = 0; i < 12; i++) {
            var twoPoints = this.computeProjection(equatorPoints.point[i]);
            this.point[i] = (root[i] == 1) ? twoPoints.p1 : twoPoints.p2;
        }
    },
    computeProjection: function (point) {
        return Object(_geometry__WEBPACK_IMPORTED_MODULE_1__["intersectionOfCircleAndLine"])(zodiacum, this.eclipsePole, point)
    }
};

var zodiacumInnerPoints = {
    point: null,
    centralPoint: {x: 0, y: 0},
    cx: null,
    cy: null,
    r: null,
    init: function(zodiacumInnerCircle, outerPoints) {
        // which root of quadratic equation we select for solution for given index (angle)
        var root = [1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1];
        this.cx = zodiacumInnerCircle.cx;
        this.cy = zodiacumInnerCircle.cy;
        this.r = zodiacumInnerCircle.r;
        this.point = [];
        for (var i = 0; i < 12; i++) {
            // var twoPoints = this.computeProjection(equatorPoints.point[i]);
            var twoPoints = Object(_geometry__WEBPACK_IMPORTED_MODULE_1__["intersectionOfCircleAndLine"])(zodiacumInnerCircle, outerPoints.point[i], this.centralPoint);
            this.point[i] = (root[i] == 1) ? twoPoints.p1 : twoPoints.p2;
        }
    },
    computeProjection: function (point) {
        return Object(_geometry__WEBPACK_IMPORTED_MODULE_1__["intersectionOfCircleAndLine"])(zodiacumInnerCircle, this.centralPoint, point)
    }
};

var zodiacumCenterPoints = {
    point: null,
    centralPoint: {x: 0, y: 0},
    cx: null,
    cy: null,
    r: null,
    init: function(zodiacumCentralCircle, equatorPointsRotated) {
        // which root of quadratic equation we select for solution for given index (angle)
        var root = [2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1];
        this.eclipsePole = zodiacum.e0;
        this.cx = zodiacumCentralCircle.cx;
        this.cy = zodiacumCentralCircle.cy;
        this.r = zodiacumCentralCircle.r;
        this.point = [];
        for (var i = 0; i < 12; i++) {
            var twoPoints = this.computeProjection(equatorPointsRotated.point[i]);
            this.point[i] = (root[i] == 1) ? twoPoints.p1 : twoPoints.p2;
        }
    },
    computeProjection: function (point) {
        return Object(_geometry__WEBPACK_IMPORTED_MODULE_1__["intersectionOfCircleAndLine"])(zodiacumCentralCircle, this.centralPoint, point)
    }
};

var zodiacumEquinox = {
    id:"zodiacumEquinox",
    x1: 0,
    y1: null,
    x2: 0,
    y2: null,
    compute: function(equatorRadius) {
        this.y1 = -equatorRadius * 1.2;
        this.y2 = equatorRadius;
    }
};

var zodiacumSolstice = {
    id:"zodiacumSolstice",
    x1: null,
    y1: 0,
    x2: null,
    y2: 0,
    compute: function(cancriTropicusRadius, capricorniTropicusRadius) {
        this.x1 = capricorniTropicusRadius;
        this.x2 = - cancriTropicusRadius;
    }
};

var moonShape = {
    r: 6,
    init: function() {
        var dw = Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["describeArc"])(0, 0, this.r, -90, 90);
        var moonWhite = document.getElementById("moonWhite");
        moonWhite.setAttribute("d", dw);
        moonWhite.setAttribute("r", this.r.toString());

        var db = Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["describeArc"])(0, 0, this.r, 90, -90);
        var moonBlack = document.getElementById("moonBlack");
        moonBlack.setAttribute("d", db);
        moonBlack.setAttribute("r", this.r.toString());
    },
    compute: function(sunAngleDeg, moonAngleDeg) {
        var sunAngleDeg = Object(_math__WEBPACK_IMPORTED_MODULE_0__["normalizeAngleDeg"])(sunAngleDeg);
        var moonAngleDeg = Object(_math__WEBPACK_IMPORTED_MODULE_0__["normalizeAngleDeg"])(moonAngleDeg);
        var moonAge = Object(_math__WEBPACK_IMPORTED_MODULE_0__["normalizeAngleDeg"])(sunAngleDeg - moonAngleDeg);
        var moonPhase = document.getElementById("moonPhase");
        if (moonAge < 0) {  // swap B&W background of moon symbol
            moonPhase.setAttribute("style", "transform: rotate(180deg)");
        } else {
            moonPhase.setAttribute("style", "transform: rotate(0deg)");
        }
        // make light and dark part of the moon
        if (Math.abs(moonAge) < 90) {
            var darkness = moonAge;
            var moonDark = document.getElementById("moonDark");
            moonDark.setAttribute("style", "transform: rotateY(" + darkness + "deg)");
            Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["displayInlineByElement"])(moonDark);
            Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["displayNoneById"])("moonLight");
        } else {
            var moonLight = document.getElementById("moonLight");
            var lightness = 180 - Math.abs(moonAge);
            moonLight.setAttribute("style", "transform: rotateY(" + lightness + "deg)");
            Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["displayInlineByElement"])(moonLight);
            Object(_graphics__WEBPACK_IMPORTED_MODULE_2__["displayNoneById"])("moonDark");
        }
    }
};

var oldTimeOuterCircle = {
    id: "oldTimeOuterCircle",
    r: null,
    cx: null,
    cy: null,
    init: function() {
        this.r = cancriTropicus.r * 1.14;
        this.cx = cancriTropicus.cx;
        this.cy = cancriTropicus.cy;
    }
};

var oldTimeInnerCircle = {
    id: "oldTimeInnerCircle",
    r: null,
    cx: null,
    cy: null,
    init: function(oldTimeOuterCircle) {
        this.r = oldTimeOuterCircle.r * 0.89;
        this.cx = oldTimeOuterCircle.cx;
        this.cy = oldTimeOuterCircle.cy;
    }
};

var holeCircleOldTimeInner = {
    id: "holeCircleOldTimeInner",
    r: null,
    cx: null,
    cy: null,
    init: function(oldTimeInnerCircle) {
        this.r = oldTimeInnerCircle.r;
        this.cx = oldTimeInnerCircle.cx;
        this.cy = oldTimeInnerCircle.cy;
    }
};

var maskCircleOldTimeOuter = {
    id: "maskCircleOldTimeOuter",
    r: null,
    cx: null,
    cy: null,
    init: function(oldTimeOuterCircle) {
        this.r = oldTimeOuterCircle.r;
        this.cx = oldTimeOuterCircle.cx;
        this.cy = oldTimeOuterCircle.cy;
    }
};


function scale(num)
{
    return (100 * num);
}

function projection(alpha) {
    return (2 * orbis.r * Math.tan(Math.PI / 4 + alpha/2));
}

function constructAstronomicalClock() {
    orbisCenter.compute(OrbisDiameter);
    orbis.compute(OrbisDiameter);
    // orbisAxonX.init();
    // orbisAxonY.init();
    //planum.init();
    //orbisEquator.compute(OrbisDiameter);
    //equatorProjection.init();
    // orbisCancriTropicus.compute(orbisCenter, orbis.r, orbisDeclination);
    // orbisCapricorniTropicus.compute(orbisCenter, orbis.r, orbisDeclination);
    // orbisLatitudo.compute(orbisCenter, orbis.r, horizontis);
    // orbisOpacus.init();
    // cancriTropicusProjection.init();
    // capricorniTropicusProjection.init();
    equator.compute();
    cancriTropicus.compute(orbisDeclination);
    clipCircleCancriTropicus.compute(orbisDeclination);
    capricorniTropicus.compute(orbisDeclination);
    // latitudoProjectionA.init();
    // latitudoProjectionB.init();
    latitudoHorizontis.init();
    // opacusProjectionA.init();
    // opacusProjectionB.init();
    opacusHorizontis.compute(horizontis, Opacus);
    //clickMePoint.init();

    oldTimeOuterCircle.init();
    oldTimeInnerCircle.init(oldTimeOuterCircle);
    holeCircleOldTimeInner.init(oldTimeInnerCircle);
    maskCircleOldTimeOuter.init(oldTimeOuterCircle);

    zodiacum.init();
    zodiacumOuterCircle.init();
    zodiacumInnerCircle.init(zodiacumOuterCircle);
    zodiacumCentralCircle.init(zodiacumInnerCircle, zodiacumOuterCircle);
    holeCircleZodiacumInner.init(zodiacumInnerCircle);
    maskCircleZodiacumOuter.init(zodiacumOuterCircle);
    zodiacumEquinox.compute(equator.r);
    zodiacumSolstice.compute(cancriTropicus.r, capricorniTropicus.r);
    zodiacumPieces.init(zodiacumOuterCircle, zodiacumInnerCircle);
    starSymbol.init(zodiacumEquinox);
    sunHandle.init(cancriTropicus.r);
    moonHandle.init(cancriTropicus.r);
    moonShape.init();
    equatorPoints.init(equator);
    equatorPointsRotated.init(equator);
    zodiacumOuterPoints.init(zodiacum, equatorPoints);
    zodiacumCenterPoints.init(zodiacumCentralCircle, equatorPointsRotated);
    zodiacumInnerPoints.init(zodiacumInnerCircle, zodiacumOuterPoints);
}


/***/ }),

/***/ "./src/construction.js":
/*!*****************************!*\
  !*** ./src/construction.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var orbisAxonX = {
    id: "orbisAxonX",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    overlap: 0.1,
    init: function() {
        this.x1 = -orbis.r - this.overlap;
        this.y1 = orbis.r;
        this.x2 = orbis.r + this.overlap;
        this.y2 = orbis.r;
    }
};

var orbisAxonY = {
    id: "orbisAxonY",
    x1: 0,
    y1: null,
    x2: 0,
    y2: null,
    overlap: 0.1,
    init: function() {
        this.y1 = - this.overlap;
        this.y2 = 2 * orbis.r + this.overlap;
    }
};

var orbisEquator = {
    id: "orbisEquator",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    compute: function (orbisDiameter) {
        var radius = orbisDiameter / 2;
        this.x1 = -radius;
        this.y1 = radius;
        this.x2 = radius;
        this.y2 = radius;
    }
};

var clickMePoint = {
    id: "clickMePoint",
    x: 0,
    y: 0,
    init: function () {
    }
};

var orbisCancriTropicus = {
    id: "orbisCancriTropicus",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    compute: function (orbisCenter, orbisRadius, orbisDeclination) {
        var orbisX = Math.cos(orbisDeclination) * orbisRadius;
        var orbisY = Math.sin(orbisDeclination) * orbisRadius;
        this.x1 = orbisCenter.x - orbisX;
        this.y1 = orbisCenter.y + orbisY;
        this.x2 = orbisCenter.x + orbisX;
        this.y2 = this.y1;
    }
};

var orbisCapricorniTropicus = {
    id: "orbisCapricorniTropicus",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    compute: function (orbisCenter, orbisRadius, orbisDeclination) {
        var orbisX = Math.cos(orbisDeclination) * orbisRadius;
        var orbisY = - Math.sin(orbisDeclination) * orbisRadius;
        this.x1 = orbisCenter.x - orbisX;
        this.y1 = orbisCenter.y + orbisY;
        this.x2 = orbisCenter.x + orbisX;
        this.y2 = this.y1;
    }
};

var orbisLatitudo = {
    id: "orbisLatitudo",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    compute: function (orbisCenter, orbisRadius, horizontis) {
        var orbisX = Math.cos(-horizontis) * orbisRadius;
        var orbisY = Math.sin(-horizontis) * orbisRadius;
        this.x1 = orbisCenter.x - orbisX;
        this.y1 = orbisCenter.y + orbisY;
        this.x2 = orbisCenter.x + orbisX;
        this.y2 = orbisCenter.y - orbisY;
    }
};

var orbisOpacus = {
    id: "orbisOpacus",
    x1: null,
    y1: null,
    x2: null,
    y2: null,
    init: function () {
        var orbisX1 = Math.cos(oppositeAngle(horizontis + Opacus)) * orbis.r;
        var orbisY1 = Math.sin(oppositeAngle(horizontis + Opacus)) * orbis.r;
        var orbisX2 = Math.cos(horizontis - Opacus) * orbis.r;
        var orbisY2 = Math.sin(horizontis - Opacus) * orbis.r;
        this.x1 = orbisCenter.x + orbisX1;
        this.y1 = orbisCenter.y + orbisY1;
        this.x2 = orbisCenter.x + orbisX2;
        this.y2 = orbisCenter.y + orbisY2;
    }
};

var planum = {
    id: "planum",
    x1: null,
    y1: 0,
    x2: null,
    y2: 0,
    overlap: 0.1,
    init: function () {
        var planumX = projection(orbisDeclination) + this.overlap;
        this.x1 = planumX;
        this.x2 = -planumX;
    }
};

var equatorProjection = {
    id: "equatorProjection",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    overlap: 0.1,
    x: null,
    y: null,
    init: function () {
        this.x = - projection(0);
        this.y = 0;
        this.x1 = this.overlap;
        this.y1 = 2 * orbis.r + this.overlap;
        this.x2 = this.x - this.overlap;
        this.y2 = this.y - this.overlap;
    }
};

var cancriTropicusProjection = {
    id: "cancriTropicusProjection",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    x: null,
    y: 0,
    init: function () {
        this.x = this.x2;
        this.y = 0;
        this.y1 = 2 * orbis.r;
        this.x2 = - projection(orbisDeclination);
        this.x = this.x2;
    }
};

var capricorniTropicusProjection = {
    id: "capricorniTropicusProjection",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    x: null,
    y: 0,
    init: function () {
        this.y1 =  2 * orbis.r;
        this.x = - projection(-orbisDeclination);
        this.x2 = this.x;
    }
};


var latitudoProjectionA = {
    id: "latitudoProjectionA",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    init: function () {
        this.y1 = 2 * orbis.r;
        this.x2 = projection(horizontis);
    }
};

var latitudoProjectionB = {
    id: "latitudoProjectionB",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    x: null,
    y: 0,
    init: function () {
        this.y1 = 2 * orbis.r;
        this.x = projection(oppositeAngle(horizontis));
        this.x2 = this.x;
    }
};


var opacusProjectionA = {
    id: "opacusProjectionA",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    init: function () {
        this.y1 = 2 * orbis.r;
        this.x2 = projection(horizontis - Opacus);
    }
};

var opacusProjectionB = {
    id: "opacusProjectionB",
    x1: 0,
    y1: null,
    x2: null,
    y2: 0,
    x: null,
    y: 0,
    init: function () {
        this.y1 = 2 * orbis.r;
        this.x = projection(oppositeAngle(horizontis + Opacus));
        this.x2 = this.x;
    }
};

/***/ }),

/***/ "./src/geometry.js":
/*!*************************!*\
  !*** ./src/geometry.js ***!
  \*************************/
/*! exports provided: intersectionOfCircleAndLine, generalEquationConstantsOfLine, intersectionOfLineAndXaxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectionOfCircleAndLine", function() { return intersectionOfCircleAndLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalEquationConstantsOfLine", function() { return generalEquationConstantsOfLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectionOfLineAndXaxis", function() { return intersectionOfLineAndXaxis; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/math.js");


function intersectionOfCircleAndLine(circle, pointA, pointB) {
    var equationConstant = generalEquationConstantsOfLine(pointA, pointB);
    var a = equationConstant.a;
    var b = equationConstant.b;
    var c = equationConstant.c;

    // circle equation (x - m)2 + (y - n)2 = r2
    var m = circle.cx;
    var n = circle.cy;
    var r = circle.r;

    // prepare powers of 2
    var a2 = Math.pow(a, 2);
    var b2 = Math.pow(b, 2);
    var c2 = Math.pow(c, 2);
    var m2 = Math.pow(m, 2);
    var n2 = Math.pow(n, 2);
    var r2 = Math.pow(r, 2);

    // intersection of circle and line
    // set of two equations leads to a quadratic equation
    // Ax2 + Bx + C = 0
    // results: x1, x2
    var A = a2 + b2;
    var B = 2 * (c * a + a * b * n - b2 * m);
    var C = b2 * m2 + c2 + 2 * b * c * n + b2 * n2 - b2 * r2;
    var result = Object(_math__WEBPACK_IMPORTED_MODULE_0__["quadraticEquation"])(A, B, C);

    // compute Y coordination
    function computeYCoordination(x) {
        return (-c - a * x) / b;
    }

    var y1 = computeYCoordination(result.x1);
    var y2 = computeYCoordination(result.x2);
    return {
        p1: {x: result.x1, y: y1},
        p2: {x: result.x2, y: y2}
    }
}

function generalEquationConstantsOfLine(pointA, pointB) {
    // directional vector
    var sx = pointB.x - pointA.x;
    var sy = pointB.y - pointA.y;

    // normal vector
    var nx = -sy;
    var ny = sx;

    // line equation ax + by +c = 0
    var a = nx;
    var b = ny;
    var c = -a * pointA.x - b * pointA.y;   // any point on this line - here pointA

    return {a: a, b: b, c: c};
}

function intersectionOfLineAndXaxis(generalEquationConstants) {
    return - generalEquationConstants.c / generalEquationConstants.a;
}

/***/ }),

/***/ "./src/graphics.js":
/*!*************************!*\
  !*** ./src/graphics.js ***!
  \*************************/
/*! exports provided: displayInlineById, displayInlineByElement, displayNoneById, rotateSvgById, rotateZodiacum, drawAstronomicalClock, describeArc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayInlineById", function() { return displayInlineById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayInlineByElement", function() { return displayInlineByElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayNoneById", function() { return displayNoneById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateSvgById", function() { return rotateSvgById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZodiacum", function() { return rotateZodiacum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawAstronomicalClock", function() { return drawAstronomicalClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "describeArc", function() { return describeArc; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./src/math.js");
/* harmony import */ var _clockobj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clockobj */ "./src/clockobj.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./time */ "./src/time.js");




String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function scalePoint(point) {
    return {x: Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(point.x), y: Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(point.y)}
}
function setXYById(id, x, y) {
    const element = document.getElementById(id);
    element.setAttribute("x" , x);
    element.setAttribute("y" , y);
}
function setTranslateById(id, translate) {
    const element = document.getElementById(id);
    element.setAttribute(
        "transform", 'translate(' + translate.x + ', ' + translate.y + ')'
    );
}

function setRotateById(id, rotation, center) {
    let rotationCenter = "0,0";
    if (typeof center !== 'undefined') {
        rotationCenter = center.x + "," + center.y;
    }
    const element = document.getElementById(id);
    element.setAttribute("transform", ["rotate(", rotation, " ", rotationCenter, ")"].join("")    );
}

function drawCircle(obj) {
    const element = document.getElementById(obj.id);
    setCircleAttributes(element, obj.cx, obj.cy, obj.r);
    displayInlineByElement(element);
}

function drawLine(line) {
    const element = document.getElementById(line.id);
    element.setAttribute("x1", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(line.x1));
    element.setAttribute("y1", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(line.y1));
    element.setAttribute("x2", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(line.x2));
    element.setAttribute("y2", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(line.y2));
    displayInlineByElement(element);
}

function setCircleAttributesById(circleId, cx, cy, r) {
    const circleElement = document.getElementById(circleId);
    setCircleAttributes(circleElement, cx, cy, r);
}

function setCircleAttributes(circleElement, cx, cy, r) {
    circleElement.setAttribute("r", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(r));
    circleElement.setAttribute("cx", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(cx));
    circleElement.setAttribute("cy", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(cy));
}

function setGradientAttributes(gradientId, cx, cy, r) {
    const gradientElement = document.getElementById(gradientId);
    setCircleAttributes(gradientElement, cx, cy, r);
}

function drawCircleWithGradient(obj) {
    const gradientId = "gradient" + obj.id.capitalizeFirstLetter();
    setGradientAttributes(gradientId, obj.cx, obj.cy, obj.r);
    drawCircle(obj);
}

function displayInlineById(id) {
    const element = document.getElementById(id);
    displayInlineByElement(element);
}

function displayInlineByElement(element) {
    element.setAttribute("display", "inline");
}

function displayNoneById(id) {
    const element = document.getElementById(id);
    displayNoneByElement(element);
}

function displayNoneByElement(element) {
    element.setAttribute("display", "none");
}

function rotateSvgById(id, angleDeg) {
    document.getElementById(id).setAttribute("transform", "rotate(" + angleDeg + ")");
}

function drawClockAxisSystem() {
    const e = document.getElementById("clockAxisSystem");
    e.setAttribute("display", "inline");
}

function drawClockNumbers() {
    const r = Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(_clockobj__WEBPACK_IMPORTED_MODULE_1__["cancriTropicus"].r) * 0.9;
    for (let i = 0; i < 24; i++) {
        const textElement = document.getElementById("number" + i.toString());
        const positionElement =  document.getElementById("position" + + i.toString());
        const angle = i * 15;
        const angleRad = Object(_math__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(Object(_time__WEBPACK_IMPORTED_MODULE_2__["deg2sun"])(angle));
        const x = Math.cos(angleRad) * r;
        const y = Math.sin(angleRad) * r;
        positionElement.setAttribute("transform", "translate(" + x + " " + y + ")");
        textElement.setAttribute("transform", "rotate(" + angle + " 0,0)");
    }
    displayInlineById("clock");
}

function rotateZodiacum(angleDeg) {   // angleDeg from autumn equinox   (0 ... equinox, 90 ... winter solstice)
    const zodiacumGroup = document.getElementById("zodiacum");
    zodiacumGroup.setAttribute("transform", "rotate(" + angleDeg + ")");
}

function drawZodiacum() {
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["maskCircleZodiacumOuter"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["holeCircleZodiacumInner"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumOuterCircle"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumInnerCircle"]);
    drawLine(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumEquinox"]);
    drawLine(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumSolstice"]);

    for (let i = 0; i < 12; i++) {
        const leftOuter = scalePoint(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumOuterPoints"].point[i]);
        const leftInner = scalePoint(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumInnerPoints"].point[i]);
        const centerPoint = scalePoint(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumCenterPoints"].point[i]);
        setTranslateById("positionSign" + i, centerPoint);
        const id = "sign" + i;
        const sign = document.getElementById(id);
        sign.setAttribute("x", "0");
        sign.setAttribute("y", "0");
        sign.setAttribute("width", "110");
        sign.setAttribute("height", "110");
        setRotateById(id, -i * 30 - 15, {x: 0, y: 0});

        const arcZ = document.getElementById("arcZ" + i.toString());
        const leftBar = ["M", leftOuter.x, leftOuter.y, "L", leftInner.x, leftInner.y].join(' ');
        const dz = [leftBar].join(' ');
        arcZ.setAttribute("d", dz);
        arcZ.setAttribute("stroke", "orange");
        arcZ.setAttribute("stroke-width", "2");
        arcZ.setAttribute("fill", "none");
    }
}

function drawAstronomicalClock() {
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["clipCircleCancriTropicus"]);
    drawCircleWithGradient(_clockobj__WEBPACK_IMPORTED_MODULE_1__["equator"]);
    drawCircleWithGradient(_clockobj__WEBPACK_IMPORTED_MODULE_1__["cancriTropicus"]);
    drawCircleWithGradient(_clockobj__WEBPACK_IMPORTED_MODULE_1__["capricorniTropicus"]);
    drawCircleWithGradient(_clockobj__WEBPACK_IMPORTED_MODULE_1__["latitudoHorizontis"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["opacusHorizontis"]);
    drawClockNumbers();
    drawInfoText();
    drawZodiacum();
    drawOldTime();
}


function describeArc(x, y, radius, startAngle, endAngle) {
    const start = Object(_math__WEBPACK_IMPORTED_MODULE_0__["polar2Cartesian"])(x, y, radius, endAngle);
    const end = Object(_math__WEBPACK_IMPORTED_MODULE_0__["polar2Cartesian"])(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return describeArcByCartesian(start, radius, largeArcFlag, end);
}

function describeArcByCartesian(start, radius, largeArcFlag, end) {
    return [
        "M", parseFloat(start.x.toFixed(8)), parseFloat(start.y.toFixed(8)),
        "A", radius, radius, 0, largeArcFlag, 0, parseFloat(end.x.toFixed(8)), parseFloat(end.y.toFixed(8))
    ].join(" ");
}

function drawInfoText() {
    const r = Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(_clockobj__WEBPACK_IMPORTED_MODULE_1__["equator"].r) * 1.1;
    for (let i = 0; i < 16; i++) {
        const textElement = document.getElementById("info" + i.toString());
        const angle = i * 8 - 60;
        const angleRad = Object(_math__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(Object(_time__WEBPACK_IMPORTED_MODULE_2__["deg2sun"])(angle));
        const x = Math.cos(angleRad) * r;
        const y = Math.sin(angleRad) * r;
        textElement.setAttribute("transform", "translate(" + x + " " + y + ") rotate(" + angle + " 0,0)");
        displayInlineById("info" + i.toString());
    }
}

function drawOldTime() {
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["maskCircleOldTimeOuter"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["holeCircleOldTimeInner"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["oldTimeOuterCircle"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["oldTimeInnerCircle"]);
    const r = Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(_clockobj__WEBPACK_IMPORTED_MODULE_1__["cancriTropicus"].r) * 1.02;
    for (let i = 1; i < 25; i++) {
        const imageElement = document.getElementById("oldtime" + i.toString());
        const angle = (i - 1) * 15;
        const angleRad = Object(_math__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(Object(_time__WEBPACK_IMPORTED_MODULE_2__["deg2sun"])(angle));
        const x = Math.cos(angleRad) * r;
        const y = Math.sin(angleRad) * r;
        imageElement.setAttribute("x", "-25");
        imageElement.setAttribute("y", "-15");
        imageElement.setAttribute("width", "110");
        imageElement.setAttribute("height", "110");
        imageElement.setAttribute("transform", "translate(" + x + " " + y + ") rotate(" + angle + " 0,0)");
        displayInlineById("oldtime" + i.toString());
    }
}


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: showAstronomicalTodayTime, showAstronomicalTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAstronomicalTodayTime", function() { return showAstronomicalTodayTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAstronomicalTime", function() { return showAstronomicalTime; });
/* harmony import */ var _css_astro_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/astro.css */ "./css/astro.css");
/* harmony import */ var _css_astro_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_astro_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./src/math.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./src/animations.js");
/* harmony import */ var _clockobj__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clockobj */ "./src/clockobj.js");
/* harmony import */ var _construction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./construction */ "./src/construction.js");
/* harmony import */ var _construction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_construction__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _geometry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geometry */ "./src/geometry.js");
/* harmony import */ var _graphics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphics */ "./src/graphics.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time */ "./src/time.js");
/* harmony import */ var _zoodiac_paintings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zoodiac-paintings */ "./src/zoodiac-paintings.js");









__webpack_require__(/*! file-loader?name=[name].[ext]!./index.html */ "./node_modules/file-loader/dist/cjs.js?name=[name].[ext]!./src/index.html");








var lastTouchMoveX;
var lastTouchMoveY;

function computePositionOnEclipse(angleDeg, zodiacum) {
    var normalizedAngle = Object(_math__WEBPACK_IMPORTED_MODULE_1__["normalizeAngleDeg"])(angleDeg);
    var m = zodiacum.cx;
    var n = zodiacum.cy;
    var r = zodiacum.r;
    var xySystem = true;
    if (!_math__WEBPACK_IMPORTED_MODULE_1__["isEasyForTangents"](normalizedAngle)) {
        normalizedAngle = Object(_math__WEBPACK_IMPORTED_MODULE_1__["normalizeAngleDeg"])(normalizedAngle - 90);
        m = [n, n=-m][0];    // m = n, n = -m
        xySystem = false;
    }
    var phi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["deg2rad"])(normalizedAngle);
    var tgPhi = Math.tan(phi);
    var a = 1 + Math.pow(tgPhi, 2);
    var b = -2 * (m + n * tgPhi);
    var c = m * m + n * n - r * r;
    var x = 0;
    if (normalizedAngle <= 45 && normalizedAngle > -45) {
        x = Object(_math__WEBPACK_IMPORTED_MODULE_1__["quadraticEquation"])(a, b, c).x1;
    }
    if (normalizedAngle > 135 || normalizedAngle <= -135) {
        x = Object(_math__WEBPACK_IMPORTED_MODULE_1__["quadraticEquation"])(a, b, c).x2;
    }
    let y = tgPhi * x;
    if (!xySystem) {
        //noinspection JSSuspiciousNameCombination
        x = [-y, y = x][0];    // x = - y, y = x
    }
    return {x: Object(_clockobj__WEBPACK_IMPORTED_MODULE_3__["scale"])(x), y: Object(_clockobj__WEBPACK_IMPORTED_MODULE_3__["scale"])(y)}
}

function computeZodiacumAngleDeg(date) {
    var equinoxDate = new Date(2016,8,22,10,22);    // autumn equinox
    // var equinoxDate = new Date(2016,2,20,5,31);    // spring equinox
    var eh = equinoxDate.getHours();
    var em = equinoxDate.getMinutes();
    var equinoxTimeAngle = eh * 15 + em / 4;
    var timezoneAngle = _time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].timezone * 15;
    var timeDiffDays = (date.getTime() - equinoxDate.getTime()) / 60000 / 60 /24;
    var angleCorrection = - 1.5 * Math.cos(timeDiffDays / 365.25 * 2 * Math.PI) + 1.5;
    return (timeDiffDays * 360 * 366.25 / 365.25 + equinoxTimeAngle - timezoneAngle + angleCorrection) % 360;
}

function computeMoonAngleDeg(date) {
    var synodicMoon = 29.530588853;     // days
    var daySpeed = (synodicMoon - 1) / synodicMoon;
    var aNewMoonDate = new Date(2016, 8, 1, 11, 3, 0);
    var timeDifference = date.getTime() - aNewMoonDate.getTime();
    var timeDiffMins = timeDifference / 60000;
    var timeDiffHours = timeDiffMins / 60;
    var timeDiffDays = timeDiffHours / 24;
    return (timeDiffDays * daySpeed * 360 + Object(_time__WEBPACK_IMPORTED_MODULE_7__["dateToSunTimeAngle"])(aNewMoonDate)) % 360;
}

function showDigitalTime() {
    var d = _time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].toDate();
    if (_time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].dst() && !_time__WEBPACK_IMPORTED_MODULE_7__["daylightSavingTimeSwitch"].status) {
        d = new Date(_time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].number - 3600000);
    }
    var timeElement = document.getElementById("time");
    var timezone = _time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].timezone;
    timeElement.innerText = d.toLocaleString() + " Timezone: " + ((timezone > 0) ? "+" : "-") + timezone +
    " DST: " + (_time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].dst() ? "ON" : "OFF");
    _time__WEBPACK_IMPORTED_MODULE_7__["daylightSavingTimeSwitch"].draw();
}

function showAstronomicalTodayTime() {
    _time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].update();
    showAstronomicalTime();
}

function showAstronomicalTime() {
    var d = _time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].toDate();
    var zodiacumAngleDeg = computeZodiacumAngleDeg(d);
    var sunAngleDeg = Object(_time__WEBPACK_IMPORTED_MODULE_7__["sun2deg"])(Object(_time__WEBPACK_IMPORTED_MODULE_7__["dateToSunTimeAngle"])(d));
    var moonAngleDeg = Object(_time__WEBPACK_IMPORTED_MODULE_7__["sun2deg"])(computeMoonAngleDeg(d));
    Object(_graphics__WEBPACK_IMPORTED_MODULE_6__["rotateZodiacum"])(zodiacumAngleDeg);
    _clockobj__WEBPACK_IMPORTED_MODULE_3__["zodiacum"].compute(zodiacumAngleDeg);
    var sun = computePositionOnEclipse(sunAngleDeg, _clockobj__WEBPACK_IMPORTED_MODULE_3__["zodiacum"]);
    _clockobj__WEBPACK_IMPORTED_MODULE_3__["sunHandle"].showByTime(d);
    _clockobj__WEBPACK_IMPORTED_MODULE_3__["sunSymbol"].showAt(sun.x, sun.y);
    _clockobj__WEBPACK_IMPORTED_MODULE_3__["starSymbol"].show();
    var moon = computePositionOnEclipse(moonAngleDeg, _clockobj__WEBPACK_IMPORTED_MODULE_3__["zodiacum"]);
    _clockobj__WEBPACK_IMPORTED_MODULE_3__["moonHandle"].show(moonAngleDeg);
    _clockobj__WEBPACK_IMPORTED_MODULE_3__["moonShape"].compute(sunAngleDeg, moonAngleDeg);
    _clockobj__WEBPACK_IMPORTED_MODULE_3__["moonSymbol"].showAt(moon.x, moon.y, moonAngleDeg + 90);
    showDigitalTime();
    Object(_zoodiac_paintings__WEBPACK_IMPORTED_MODULE_8__["setBackgroundPositionX"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["normalizeAngleDeg"])(Object(_time__WEBPACK_IMPORTED_MODULE_7__["dateToSunTimeAngle"])(d)-zodiacumAngleDeg) + 180);
}

function daylightSavingTimeOn() {
    _time__WEBPACK_IMPORTED_MODULE_7__["daylightSavingTimeSwitch"].makeUnclickable();
    Object(_animations__WEBPACK_IMPORTED_MODULE_2__["startAnimateDaylightSavingTimeOn"])();
    _time__WEBPACK_IMPORTED_MODULE_7__["daylightSavingTimeSwitch"].on();
}

function daylightSavingTimeOff() {
    _time__WEBPACK_IMPORTED_MODULE_7__["daylightSavingTimeSwitch"].makeUnclickable();
    Object(_animations__WEBPACK_IMPORTED_MODULE_2__["startAnimateDaylightSavingTimeOff"])();
    _time__WEBPACK_IMPORTED_MODULE_7__["daylightSavingTimeSwitch"].off();
}

Object(_clockobj__WEBPACK_IMPORTED_MODULE_3__["constructAstronomicalClock"])();
Object(_graphics__WEBPACK_IMPORTED_MODULE_6__["drawAstronomicalClock"])();

_time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].init();
_time__WEBPACK_IMPORTED_MODULE_7__["daylightSavingTimeSwitch"].init();
if (_time__WEBPACK_IMPORTED_MODULE_7__["daylightSavingTimeSwitch"].status) {
    daylightSavingTimeOff();
}

showAstronomicalTodayTime();
Object(_graphics__WEBPACK_IMPORTED_MODULE_6__["displayInlineById"])("zodiacum");
Object(_graphics__WEBPACK_IMPORTED_MODULE_6__["displayInlineById"])("moonPhase");
Object(_graphics__WEBPACK_IMPORTED_MODULE_6__["displayInlineById"])("sunSymbol");

// Listeners
addWheelListener("zodiacum", zodiacWheel);
addWheelListener("time", sunWheel);
addTouchMove("container", touchMove);
addTouchMove("background-zodiac", touchMove);
window.addEventListener('resize', function () {
    showAstronomicalTime();
    Object(_zoodiac_paintings__WEBPACK_IMPORTED_MODULE_8__["backgroundResize"])();
});
window.addEventListener('keydown', function (event)  {
    if (event.key === 'Escape') {
        pressedEsc();
    }
});


// učesat
var zodiacumSlider = document.getElementById("zodiacumSlider");
zodiacumSlider.oninput = function() {
    Object(_animations__WEBPACK_IMPORTED_MODULE_2__["stopAstronomicalClock"])();
    _time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].update();
    _time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].addDays(this.value);
    showAstronomicalTime();
}

function addWheelListener(id, wheelFunction) {
    // Zodiacum (year cycle)
    const element = document.getElementById(id);
    if (element.addEventListener)
    {
        // IE9, Chrome, Safari, Opera
        element.addEventListener("mousewheel", wheelFunction, false);
        // Firefox
        element.addEventListener("DOMMouseScroll", wheelFunction, false);
    }
// IE 6/7/8
    else
    {
        element.attachEvent("onmousewheel", wheelFunction);
    }
}

function addTouchMove(id, touchMoveFunction) {
    // Zodiacum (year cycle)
    const element = document.getElementById(id);
    if (element.addEventListener) {
        element.addEventListener("touchmove", touchMoveFunction, false);
    }
}

function zodiacWheel(e)
{
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    apiAddDays(-delta);
}

function sunWheel(e)
{
    // cross-browser wheel delta
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    apiAddMinutes(- delta * 20)
}

function touchMove(e)
{
    e.preventDefault();
    let x = e.touches[0].clientX;
    let y = e.touches[0].clientY;
    let deltaDays = 0;
    let deltaMinutes = 0;
    let deltaX = x - lastTouchMoveX;
    let deltaY = y - lastTouchMoveY;
    const minimalStep = 1;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (x < lastTouchMoveX - minimalStep) {
            deltaDays = -1;
        }
        if (x > lastTouchMoveX + minimalStep) {
            deltaDays = 1;
        }
    } else {

        if (y < lastTouchMoveY - minimalStep) {
            deltaMinutes = -1;
        }
        if (y > lastTouchMoveY + minimalStep) {
            deltaMinutes = 1;
        }
    }

    lastTouchMoveX = x;
    lastTouchMoveY = y;

    apiAddDays(deltaDays);
    apiAddMinutes(- deltaMinutes * 10)
}

function pressedEsc() {
    Object(_animations__WEBPACK_IMPORTED_MODULE_2__["startAstronomicalClock"])();
}

function apiAddDays(days) {
    Object(_animations__WEBPACK_IMPORTED_MODULE_2__["stopAstronomicalClock"])();
    _time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].addDays(days);
    showAstronomicalTime();
}

function apiAddMinutes(minutes) {
    Object(_animations__WEBPACK_IMPORTED_MODULE_2__["stopAstronomicalClock"])();
    _time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].addMinutes(minutes);
    showAstronomicalTime();
}

window.daylightSavingTimeOff = daylightSavingTimeOff;
window.daylightSavingTimeOn = daylightSavingTimeOn;

Object(_animations__WEBPACK_IMPORTED_MODULE_2__["startAstronomicalClock"])();
Object(_zoodiac_paintings__WEBPACK_IMPORTED_MODULE_8__["backgroundResize"])();


/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! exports provided: deg2rad, oppositeAngle, polar2Cartesian, quadraticEquation, normalizeAngleDeg, isEasyForTangents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oppositeAngle", function() { return oppositeAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polar2Cartesian", function() { return polar2Cartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quadraticEquation", function() { return quadraticEquation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeAngleDeg", function() { return normalizeAngleDeg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEasyForTangents", function() { return isEasyForTangents; });
function deg2rad(deg) {
    return deg * Math.PI / 180;
}

function oppositeAngle(rad) {
    return Math.PI + rad;
}

function polar2Cartesian(centerX, centerY, radius, angleDeg) {
    const angleRad = deg2rad(angleDeg);

    return {
        x: centerX + (radius * Math.cos(angleRad)),
        y: centerY + (radius * Math.sin(angleRad))
    };
}

function quadraticEquation(a, b, c) {
    const d = quadraticDiscriminant(a, b, c);
    if (d >= 0) {
        const a2 = 2 * a;
        const sqrtD = Math.sqrt(d);
        const x1 = (-b + sqrtD) / a2;
        const x2 = (-b - sqrtD) / a2;
        return {x1: x1, x2: x2};
    }
}

function quadraticDiscriminant(a, b, c) {
    return b * b - 4 * a * c;
}

// conversion of angle above 180 deg and below -180 deg
function normalizeAngleDeg(angleDeg) {
    const angle = angleDeg % 360;
    if (angle > 180) {
        return angle - 360; // converted to negative angle (0...-180)
    }
    if (angle < -180) {
        return angle + 360; // converted to positive angle (0...180)
    }
    return angle;   // can be between -180 and 180
}

// return true if angle is between -45 and 45 deg or between 135 and 225 deg.
function isEasyForTangents(angleDeg) {
    const normalizedAngle = normalizeAngleDeg(angleDeg);
    if (normalizedAngle > -45 && normalizedAngle <= 45) {
        return true;
    }
    return (normalizedAngle > 135 || normalizedAngle <= -135);
}


/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/*! exports provided: astronomicalClockTime, sun2deg, deg2sun, dateToSunTimeAngle, daylightSavingTimeSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "astronomicalClockTime", function() { return astronomicalClockTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sun2deg", function() { return sun2deg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2sun", function() { return deg2sun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateToSunTimeAngle", function() { return dateToSunTimeAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daylightSavingTimeSwitch", function() { return daylightSavingTimeSwitch; });
var astronomicalClockTime = {
    number: null,
    timezone: null,
    addDays: function (days) {
        this.number += days * 24 * 3600000;
    },
    addHours: function (hours) {
        this.number += hours * 3600000;
    },
    addMinutes: function (minutes) {
        this.number += minutes * 60000;
    },
    update: function () {
        this.number = new Date().getTime();
    },
    toDate: function () {
        return new Date(this.number);
    },
    dst: function () {
        var stdOffset = this.stdTimeOffset();
        return this.toDate().getTimezoneOffset() < stdOffset;
    },
    init: function () {
        this.update();
        this.timezone = - this.stdTimeOffset() / 60;
    },
    stdTimeOffset: function () {
        var jan = new Date(this.toDate().getFullYear(), 0, 1);
        var jul = new Date(this.toDate().getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    },
    getDays: function() {
        return this.number / 24 / 3600000;
    }
};

    // return new Date(Date.UTC(2017,8,22,17,24));
    // return new Date(Date.UTC(2017,2,20,11,30));
    // return new Date(2017,2,20,11,30);
    // return new Date(2017,5,21,17,24);
    //  return new Date(2017,8,22,17,24);

// Convert angle of sun time to normal angle.
// 0 ... Midnight (90 deg), 180 ... Noon (270 deg)
function sun2deg(sunAngle) {
    return (sunAngle + 90) % 360;
}

// Convert normal angle to sun time angle.
// 90 deg (Midnight) ... 0, 270 deg (Noon) ... 180
function deg2sun(angleDeg) {
    return (angleDeg + 270) % 360;
}

function dateToSunTimeAngle(date) {
    return (date.getUTCMinutes() + (date.getUTCHours()  + astronomicalClockTime.timezone) * 60) / 4
}

// http://stackoverflow.com/questions/11887934/check-if-daylight-saving-time-is-in-effect-and-if-it-is-for-how-many-hours

Date.prototype.stdTimezoneOffset = function() {
    var jan = new Date(this.getFullYear(), 0, 1);
    var jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
};

Date.prototype.dst = function() {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
};

Date.prototype.addHours = function(h) {
   this.setTime(this.getTime() + (h*60*60*1000));
   return this;
};

var daylightSavingTimeSwitch = {
    id: "dstSwitch",
    status: false,
    clickable: false,
    init: function() {
        this.status = astronomicalClockTime.dst();
        if (this.status) {
            this.activate()
        } else {
            this.suspend()
        }
    },
    on: function() {
        this.status = true;
    },
    off: function() {
        this.status = false;
    },
    activate: function() {
        this.clickable = true;
        var dstSwitchOn = document.getElementById("dstOn");
        dstSwitchOn.setAttribute("onclick", "daylightSavingTimeOff()");
        this.draw();
    },
    suspend: function() {
        this.clickable = false;
        var dstSwitchOff = document.getElementById("dstOff");
        dstSwitchOff.setAttribute("onclick", "");
        this.draw();
    },
    draw: function() {
        var dstSwitchOff = document.getElementById("dstOff");
        var dstSwitchOn = document.getElementById("dstOn");
        dstSwitchOff.setAttribute("class", this.clickable ? "clickable" : "unclickable");
        dstSwitchOn.setAttribute("class", this.clickable ? "clickable" : "unclickable");
        var off = "display: none";
        var on = "display: inline";
        var dstOff = document.getElementById("dstOff");
        dstOff.setAttribute("style", this.status ? off : on);
        var dstOn = document.getElementById("dstOn");
        dstOn.setAttribute("style", this.status ? on : off);
    },
    makeUnclickable: function () {
        this.clickable = false;
        var dstSwitchOff = document.getElementById("dstOff");
        var dstSwitchOn = document.getElementById("dstOn");
        dstSwitchOff.setAttribute("onclick", "");
        dstSwitchOn.setAttribute("onclick", "");
        this.draw();
    },
    makeClickable: function () {
        this.clickable = true;
        var dstSwitchOff = document.getElementById("dstOff");
        var dstSwitchOn = document.getElementById("dstOn");
        dstSwitchOff.setAttribute("onclick", "daylightSavingTimeOn()");
        dstSwitchOn.setAttribute("onclick", "daylightSavingTimeOff()");
        this.draw();
    }
};


/***/ }),

/***/ "./src/zoodiac-paintings.js":
/*!**********************************!*\
  !*** ./src/zoodiac-paintings.js ***!
  \**********************************/
/*! exports provided: setBackgroundPositionX, backgroundResize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundPositionX", function() { return setBackgroundPositionX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundResize", function() { return backgroundResize; });
__webpack_require__(/*! ../img/background-zodiac.png */ "./img/background-zodiac.png");

function setBackgroundPositionX(x)
{
    const image = document.getElementById('zodiac-paintings');
    if (scaleBackground !== undefined) {
        image.style.opacity = '1';
        const bgImageWidth = image.width;
        const backgroundOffset = 500; // set appropriate background image offset in pixels
        const yearPart = (x + 180) / 360; // 0 .. 1
        const offsetX = -yearPart * bgImageWidth / 2 - backgroundOffset * scaleBackground + displayWidth() / 2;

        const translate = 'translateX(' + offsetX + 'px)';
        image.style.transform = translate;
        image.style.webkitTransform = translate;
    }
    // displayWidth() / 2 is correction for various display width
}

function displayWidth() {
    return window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
}

function displayHeight() {
    return window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
}

var scaleBackground;

function backgroundResize() {
    const h = displayHeight();
    const w = displayWidth();
    const zodiacPaintings = document.getElementById('zodiac-paintings');
    if (w >= h) {
        scaleBackground = 1;
        zodiacPaintings.style.top = '0';
        if (h < zodiacPaintings.naturalHeight) {
            scaleBackground = h / zodiacPaintings.naturalHeight;
            zodiacPaintings.height = scaleBackground * zodiacPaintings.naturalHeight;
        }
    } else {
        scaleBackground = 0.7;
        zodiacPaintings.style.top = (h - zodiacPaintings.height) + 'px';
        zodiacPaintings.height = scaleBackground * zodiacPaintings.naturalHeight;

    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL2FzdHJvLmNzcz9jNjYyIiwid2VicGFjazovLy8uL2ltZy8xLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvMTAuc3ZnIiwid2VicGFjazovLy8uL2ltZy8xMS5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nLzEyLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvMTMuc3ZnIiwid2VicGFjazovLy8uL2ltZy8xNC5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nLzE1LnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvMTYuc3ZnIiwid2VicGFjazovLy8uL2ltZy8xNy5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nLzE4LnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvMTkuc3ZnIiwid2VicGFjazovLy8uL2ltZy8yLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvMjAuc3ZnIiwid2VicGFjazovLy8uL2ltZy8yMS5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nLzIzLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvMjQuc3ZnIiwid2VicGFjazovLy8uL2ltZy8zLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvNC5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nLzUuc3ZnIiwid2VicGFjazovLy8uL2ltZy82LnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvNy5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nLzguc3ZnIiwid2VicGFjazovLy8uL2ltZy85LnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvYXF1YXJpdXMuc3ZnIiwid2VicGFjazovLy8uL2ltZy9hcmllcy5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL2JhY2tncm91bmQtem9kaWFjLnBuZyIsIndlYnBhY2s6Ly8vLi9pbWcvY2FuY2VyLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvY2Fwcmljb3JuLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvZ2VtaW5pLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbGVvLnN2ZyIsIndlYnBhY2s6Ly8vLi9pbWcvbGlicmEuc3ZnIiwid2VicGFjazovLy8uL2ltZy9waXNjZXMuc3ZnIiwid2VicGFjazovLy8uL2ltZy9zYWdpdHRhcml1cy5zdmciLCJ3ZWJwYWNrOi8vLy4vaW1nL3Njb3JwaW8uc3ZnIiwid2VicGFjazovLy8uL2ltZy90YXVydXMuc3ZnIiwid2VicGFjazovLy8uL2ltZy92aXJnby5zdmciLCJ3ZWJwYWNrOi8vLy4vY3NzL2FzdHJvLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jbG9ja29iai5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RydWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pvb2RpYWMtcGFpbnRpbmdzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7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QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NB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MkJBQTJCLCtEQUFpQjtBQUM1QyxzQkFBc0IsK0RBQWlCO0FBQ3ZDO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3RUFBc0I7QUFDbEMsWUFBWSxpRUFBZTtBQUMzQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3RUFBc0I7QUFDbEMsWUFBWSxpRUFBZTtBQUMzQjtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcklBO0FBQUE7QUFBQTtBQUFBLG1CQUFPLENBQUMsaUVBQThCOztBQUUvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FzdHJvLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc3Ryby5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FzdHJvLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nLzEuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvMTAuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvMTEuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvMTIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvMTMuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvMTQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvMTUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvMTYuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvMTcuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvMTguc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvMTkuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvMi5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy8yMC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy8yMS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy8yMy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy8yNC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy8zLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nLzQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvNS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy82LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nLzcuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvOC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy85LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nL2FxdWFyaXVzLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nL2FyaWVzLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nL2JhY2tncm91bmQtem9kaWFjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nL2NhbmNlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy9jYXByaWNvcm4uc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvZ2VtaW5pLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1nL2xlby5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy9saWJyYS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy9waXNjZXMuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvc2FnaXR0YXJpdXMuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvc2NvcnBpby5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltZy90YXVydXMuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWcvdmlyZ28uc3ZnXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjY2xpY2tNZUZsYXNoIHtcXHJcXG4gICAgZmlsbDogbm9uZTtcXHJcXG4gICAgc3Ryb2tlOiByZWQ7XFxyXFxuICAgIHN0cm9rZS13aWR0aDogNDtcXHJcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZsYXNoMTtcXHJcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogNDtcXHJcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZsYXNoMSB7XFxyXFxuICAgIDAlIHtzdHJva2Utd2lkdGg6IDA7fVxcclxcbiAgICA1MCUge3N0cm9rZS13aWR0aDogNDt9XFxyXFxuICAgIDEwMCUge3N0cm9rZS13aWR0aDogMDt9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmxhc2gyIHtcXHJcXG4gICAgMCUge3N0cm9rZS13aWR0aDogMDt9XFxyXFxuICAgIDUwJSB7c3Ryb2tlLXdpZHRoOiA0O31cXHJcXG4gICAgMTAwJSB7c3Ryb2tlLXdpZHRoOiAwO31cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbiN0ZXh0IGgxIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6XFxyXFxuICAgICAgICAtMXB4IC0xcHggMCAjMDAwLFxcclxcbiAgICAgICAgIDFweCAtMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgIC0xcHggIDFweCAwICMwMDAsXFxyXFxuICAgICAgICAgMXB4ICAxcHggMCAjMDAwLFxcclxcbiAgICAgICAgMCAwIDIwcHggIzNGRjtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dCBwIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrYWJsZSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuY2xpY2thYmxlIHtcXHJcXG4gICAgY29sb3I6ICM3Nzc7XFxyXFxufVxcclxcblxcclxcbi5hdXRob3Ige1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNGRkY7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4jd2FsbCB7XFxyXFxuICAgIC8qdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6OTAlOyB3aWR0aDoxMDAlOyovXFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDgwdmg7XFxyXFxuICAgIC8qIGZvciBNUyBJRSAxMTogKi9cXHJcXG4gICAgbWluLWhlaWdodDogODB2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnpvZGlhYy1zaWducyB7XFxyXFxuICAgIHRleHQtYW5jaG9yOm1pZGRsZTtcXHJcXG4gICAgYWxpZ25tZW50LWJhc2VsaW5lOm1pZGRsZTtcXHJcXG4gICAgZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbDtcXHJcXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6MTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogV2lkdGggb2YgdGhlIG91dHNpZGUgY29udGFpbmVyICovXFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGhlIHNsaWRlciBpdHNlbGYgKi9cXHJcXG4uc2xpZGVyIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAgLyogT3ZlcnJpZGUgZGVmYXVsdCBDU1Mgc3R5bGVzICovXFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsLXdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMjVweDsgLyogU3BlY2lmaWVkIGhlaWdodCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBkYXJrc2xhdGVibHVlOyAvKiBHcmV5IGJhY2tncm91bmQgKi9cXHJcXG4gICAgb3V0bGluZTogbm9uZTsgLyogUmVtb3ZlIG91dGxpbmUgKi9cXHJcXG4gICAgb3BhY2l0eTogMC43OyAvKiBTZXQgdHJhbnNwYXJlbmN5IChmb3IgbW91c2Utb3ZlciBlZmZlY3RzIG9uIGhvdmVyKSAqL1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4yczsgLyogMC4yIHNlY29uZHMgdHJhbnNpdGlvbiBvbiBob3ZlciAqL1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLyogTW91c2Utb3ZlciBlZmZlY3RzICovXFxyXFxuLnNsaWRlcjpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDE7IC8qIEZ1bGx5IHNob3duIG9uIG1vdXNlLW92ZXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogVGhlIHNsaWRlciBoYW5kbGUgKHVzZSAtd2Via2l0LSAoQ2hyb21lLCBPcGVyYSwgU2FmYXJpLCBFZGdlKSBhbmQgLW1vei0gKEZpcmVmb3gpIHRvIG92ZXJyaWRlIGRlZmF1bHQgbG9vaykgKi9cXHJcXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLyogT3ZlcnJpZGUgZGVmYXVsdCBsb29rICovXFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAyNXB4OyAvKiBTZXQgYSBzcGVjaWZpYyBzbGlkZXIgaGFuZGxlIHdpZHRoICovXFxyXFxuICAgIGhlaWdodDogMjVweDsgLyogU2xpZGVyIGhhbmRsZSBoZWlnaHQgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlOyAvKiBHcmVlbiBiYWNrZ3JvdW5kICovXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjsgLyogQ3Vyc29yIG9uIGhvdmVyICovXFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xcclxcbiAgICB3aWR0aDogMjVweDsgLyogU2V0IGEgc3BlY2lmaWMgc2xpZGVyIGhhbmRsZSB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7IC8qIFNsaWRlciBoYW5kbGUgaGVpZ2h0ICovXFxyXFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTsgLyogR3JlZW4gYmFja2dyb3VuZCAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xcclxcbn1cXHJcXG5cXHJcXG4jdGV4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RhdGUge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2RzdC1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jYmFja2dyb3VuZC16b2RpYWMge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbiN6b2RpYWMtcGFpbnRpbmdzIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDVzO1xcclxcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW5kZXguaHRtbFwiOyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCB7c2hvd0FzdHJvbm9taWNhbFRpbWUsIHNob3dBc3Ryb25vbWljYWxUb2RheVRpbWV9IGZyb20gXCIuL21haW5cIjtcclxuaW1wb3J0IHthc3Ryb25vbWljYWxDbG9ja1RpbWUsIGRheWxpZ2h0U2F2aW5nVGltZVN3aXRjaH0gZnJvbSBcIi4vdGltZVwiO1xyXG5pbXBvcnQge3JvdGF0ZVN2Z0J5SWR9IGZyb20gXCIuL2dyYXBoaWNzXCI7XHJcblxyXG52YXIgZGF5bGlnaHRTYXZpbmdUaW1lT25UaW1lcjtcclxudmFyIGRheWxpZ2h0U2F2aW5nVGltZU9mZlRpbWVyO1xyXG5sZXQgYXN0cm9ub21pY2FsQ2xvY2tVcGRhdGVUaW1lcjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEFzdHJvbm9taWNhbENsb2NrKCkge1xyXG4gICAgYXN0cm9ub21pY2FsQ2xvY2tVcGRhdGVUaW1lciA9IHNldEludGVydmFsKHNob3dBc3Ryb25vbWljYWxUb2RheVRpbWUsIDEwMDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcEFzdHJvbm9taWNhbENsb2NrKCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbChhc3Ryb25vbWljYWxDbG9ja1VwZGF0ZVRpbWVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVEYXlsaWdodFNhdmluZ1RpbWVPbigpIHtcclxuICAgIGNvbnN0IG51bWJlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlcnNcIik7XHJcbiAgICBsZXQgbnVtYmVyc1JvdGF0aW9uID0gbnVtYmVycy5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIikubWF0Y2goLy0/XFxkKy8pWzBdOyAgICAgICAvLyBnZXQgbnVtYmVyIGZyb20gc3RyaW5nXHJcbiAgICBpZiAobnVtYmVyc1JvdGF0aW9uID4gLTE1KSB7ICAgIC8vIGFuaW1hdGUgbnVtYmVyc1xyXG4gICAgICAgIG51bWJlcnNSb3RhdGlvbi0tO1xyXG4gICAgICAgIHJvdGF0ZVN2Z0J5SWQoXCJudW1iZXJzXCIsIG51bWJlcnNSb3RhdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBjbG9ja0ZhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb2NrRmFjZVwiKTtcclxuICAgICAgICBsZXQgY2xvY2tGYWNlUm90YXRpb24gPSBjbG9ja0ZhY2UuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpLm1hdGNoKC9cXGQrLylbMF07ICAgICAgIC8vIGdldCBudW1iZXIgZnJvbSBzdHJpbmdcclxuICAgICAgICBpZiAoY2xvY2tGYWNlUm90YXRpb24gPCAyODUpIHsgIC8vIGFuaW1hdGUgd2hvbGUgY2xvY2tcclxuICAgICAgICAgICAgY2xvY2tGYWNlUm90YXRpb24rKztcclxuICAgICAgICAgICAgY2xvY2tGYWNlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIGNsb2NrRmFjZVJvdGF0aW9uICsgXCIpIHNjYWxlKC0xLCAxKVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGRheWxpZ2h0U2F2aW5nVGltZU9uVGltZXIpOyAgICAgLy8gc3RvcCB0aGlzIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBkYXlsaWdodFNhdmluZ1RpbWVTd2l0Y2gubWFrZUNsaWNrYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVEYXlsaWdodFNhdmluZ1RpbWVPZmYoKSB7XHJcbiAgICBjb25zdCBudW1iZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXJzXCIpO1xyXG4gICAgbGV0IG51bWJlcnNSb3RhdGlvbiA9IG51bWJlcnMuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpLm1hdGNoKC8tP1xcZCsvKVswXTsgICAgICAgLy8gZ2V0IG51bWJlciBmcm9tIHN0cmluZ1xyXG4gICAgaWYgKG51bWJlcnNSb3RhdGlvbiA8IDApIHsgIC8vIGFuaW1hdGUgbnVtYmVyc1xyXG4gICAgICAgIG51bWJlcnNSb3RhdGlvbisrO1xyXG4gICAgICAgIHJvdGF0ZVN2Z0J5SWQoXCJudW1iZXJzXCIsIG51bWJlcnNSb3RhdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBjbG9ja0ZhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb2NrRmFjZVwiKTtcclxuICAgICAgICBsZXQgY2xvY2tGYWNlUm90YXRpb24gPSBjbG9ja0ZhY2UuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpLm1hdGNoKC9cXGQrLylbMF07ICAgICAgIC8vIGdldCBudW1iZXIgZnJvbSBzdHJpbmdcclxuICAgICAgICBpZiAoY2xvY2tGYWNlUm90YXRpb24gPiAyNzApIHsgIC8vIGFuaW1hdGUgd2hvbGUgY2xvY2tcclxuICAgICAgICAgICAgY2xvY2tGYWNlUm90YXRpb24tLTtcclxuICAgICAgICAgICAgY2xvY2tGYWNlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIGNsb2NrRmFjZVJvdGF0aW9uICsgXCIpIHNjYWxlKC0xLCAxKVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGRheWxpZ2h0U2F2aW5nVGltZU9mZlRpbWVyKTsgICAgIC8vIHN0b3AgdGhpcyBhbmltYXRpb25cclxuICAgICAgICAgICAgZGF5bGlnaHRTYXZpbmdUaW1lU3dpdGNoLm1ha2VDbGlja2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEFuaW1hdGVEYXlsaWdodFNhdmluZ1RpbWVPZmYoKSB7XHJcbiAgICBkYXlsaWdodFNhdmluZ1RpbWVPZmZUaW1lciA9IHNldEludGVydmFsKGFuaW1hdGVEYXlsaWdodFNhdmluZ1RpbWVPZmYsIDMzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0ZURheWxpZ2h0U2F2aW5nVGltZU9uKCkge1xyXG4gICAgZGF5bGlnaHRTYXZpbmdUaW1lT25UaW1lciA9IHNldEludGVydmFsKGFuaW1hdGVEYXlsaWdodFNhdmluZ1RpbWVPbiwgMzMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlWWVhckFyb3VuZCgpIHtcclxuICAgIHN0b3BBc3Ryb25vbWljYWxDbG9jaygpO1xyXG4gICAgbGV0IGRheXMgPSAwO1xyXG4gICAgY29uc3QgeWVhckFyb3VuZFRpbWVyID0gc2V0SW50ZXJ2YWwoeWVhckFyb3VuZEFuaW1hdGlvbiwgNTApO1xyXG4gICAgZnVuY3Rpb24geWVhckFyb3VuZEFuaW1hdGlvbigpIHtcclxuICAgICAgICBpZiAoZGF5cyA8PSAzNjUpIHtcclxuICAgICAgICAgICAgc2hvd0FzdHJvbm9taWNhbFRpbWUoKTtcclxuICAgICAgICAgICAgYXN0cm9ub21pY2FsQ2xvY2tUaW1lLmFkZERheXMoMSk7XHJcbiAgICAgICAgICAgIGRheXMrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHllYXJBcm91bmRUaW1lcik7XHJcbiAgICAgICAgICAgIHN0YXJ0QXN0cm9ub21pY2FsQ2xvY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVEYXlBcm91bmQoKSB7XHJcbiAgICBzdG9wQXN0cm9ub21pY2FsQ2xvY2soKTtcclxuICAgIGNvbnN0IGRheUFyb3VuZFRpbWVyID0gc2V0SW50ZXJ2YWwoZGF5QXJvdW5kQW5pbWF0aW9uLCA1MCk7XHJcbiAgICBsZXQgbWludXRlcyA9IDA7XHJcbiAgICBjb25zdCBtaW51dGVTdGVwID0gNDtcclxuICAgIGZ1bmN0aW9uIGRheUFyb3VuZEFuaW1hdGlvbigpIHtcclxuICAgICAgICBpZiAobWludXRlcyA8IDE0NDApIHtcclxuICAgICAgICAgICAgc2hvd0FzdHJvbm9taWNhbFRpbWUoKTtcclxuICAgICAgICAgICAgYXN0cm9ub21pY2FsQ2xvY2tUaW1lLmFkZE1pbnV0ZXMobWludXRlU3RlcCk7XHJcbiAgICAgICAgICAgIG1pbnV0ZXMgKz0gbWludXRlU3RlcDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGRheUFyb3VuZFRpbWVyKTtcclxuICAgICAgICAgICAgc3RhcnRBc3Ryb25vbWljYWxDbG9jaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2RlZzJyYWQsIG5vcm1hbGl6ZUFuZ2xlRGVnLCBvcHBvc2l0ZUFuZ2xlLCBwb2xhcjJDYXJ0ZXNpYW59IGZyb20gXCIuL21hdGhcIjtcclxuaW1wb3J0IHtnZW5lcmFsRXF1YXRpb25Db25zdGFudHNPZkxpbmUsIGludGVyc2VjdGlvbk9mQ2lyY2xlQW5kTGluZSwgaW50ZXJzZWN0aW9uT2ZMaW5lQW5kWGF4aXN9IGZyb20gXCIuL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB7ZGVzY3JpYmVBcmMsIGRpc3BsYXlJbmxpbmVCeUVsZW1lbnQsIGRpc3BsYXlOb25lQnlJZH0gZnJvbSBcIi4vZ3JhcGhpY3NcIjtcclxuaW1wb3J0IHtkYXRlVG9TdW5UaW1lQW5nbGV9IGZyb20gXCIuL3RpbWVcIjtcclxuXHJcbnJlcXVpcmUoJy4uL2ltZy8xLnN2ZycpO1xyXG5yZXF1aXJlKCcuLi9pbWcvMi5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nLzMuc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy80LnN2ZycpO1xyXG5yZXF1aXJlKCcuLi9pbWcvNS5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nLzYuc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy83LnN2ZycpO1xyXG5yZXF1aXJlKCcuLi9pbWcvOC5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nLzkuc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy8xMC5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nLzExLnN2ZycpO1xyXG5yZXF1aXJlKCcuLi9pbWcvMTIuc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy8xMy5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nLzE0LnN2ZycpO1xyXG5yZXF1aXJlKCcuLi9pbWcvMTUuc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy8xNi5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nLzE3LnN2ZycpO1xyXG5yZXF1aXJlKCcuLi9pbWcvMTguc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy8xOS5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nLzIwLnN2ZycpO1xyXG5yZXF1aXJlKCcuLi9pbWcvMjEuc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy8yMy5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nLzI0LnN2ZycpO1xyXG5cclxucmVxdWlyZSgnLi4vaW1nL2FxdWFyaXVzLnN2ZycpO1xyXG5yZXF1aXJlKCcuLi9pbWcvYXJpZXMuc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy9jYW5jZXIuc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy9jYXByaWNvcm4uc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy9nZW1pbmkuc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy9sZW8uc3ZnJyk7XHJcbnJlcXVpcmUoJy4uL2ltZy9saWJyYS5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nL3Bpc2Nlcy5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nL3NhZ2l0dGFyaXVzLnN2ZycpO1xyXG5yZXF1aXJlKCcuLi9pbWcvc2NvcnBpby5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nL3RhdXJ1cy5zdmcnKTtcclxucmVxdWlyZSgnLi4vaW1nL3ZpcmdvLnN2ZycpO1xyXG5cclxudmFyIE9yYmlzRGVjbGluYXRpb25EZWcgPSAyMy41O1xyXG52YXIgb3JiaXNEZWNsaW5hdGlvbiA9IGRlZzJyYWQoT3JiaXNEZWNsaW5hdGlvbkRlZyk7XHJcbnZhciBMYXRpdHVkbyA9IGRlZzJyYWQoNTApO1xyXG52YXIgaG9yaXpvbnRpcyA9IE1hdGguUEkgLyAyIC0gTGF0aXR1ZG87XHJcbnZhciBPcGFjdXMgPSBkZWcycmFkKDE4KTtcclxudmFyIE9yYmlzRGlhbWV0ZXIgPSAxO1xyXG5cclxudmFyIG9yYmlzQ2VudGVyID0ge1xyXG4gICAgaWQ6IFwib3JiaXNDZW50ZXJcIixcclxuICAgIHg6IDAsXHJcbiAgICB5OiBudWxsLFxyXG4gICAgY29tcHV0ZTogZnVuY3Rpb24gKG9yYmlzRGlhbWV0ZXIpIHtcclxuICAgICAgICB0aGlzLnkgPSBvcmJpc0RpYW1ldGVyIC8gMjtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvcmJpcyA9IHtcclxuICAgIGlkOiBcIm9yYmlzXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IDAsXHJcbiAgICBjeTogbnVsbCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uKG9yYmlzRGlhbWV0ZXIpIHtcclxuICAgICAgICB0aGlzLnIgPSBvcmJpc0RpYW1ldGVyIC8gMjtcclxuICAgICAgICB0aGlzLmN5ID0gdGhpcy5yO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB2YXIgZXF1YXRvciA9IHtcclxuICAgIGlkOiBcImVxdWF0b3JcIixcclxuICAgIHI6IG51bGwsXHJcbiAgICBjeDogMCxcclxuICAgIGN5OiAwLFxyXG4gICAgY29tcHV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuciA9IHByb2plY3Rpb24oMCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGNhbmNyaVRyb3BpY3VzID0ge1xyXG4gICAgaWQ6IFwiY2FuY3JpVHJvcGljdXNcIixcclxuICAgIHI6IG51bGwsXHJcbiAgICBjeDogMCxcclxuICAgIGN5OiAwLFxyXG4gICAgY29tcHV0ZTogZnVuY3Rpb24gKG9yYmlzRGVjbGluYXRpb24pIHtcclxuICAgICAgICB0aGlzLnIgPSBwcm9qZWN0aW9uKG9yYmlzRGVjbGluYXRpb24pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBjbGlwQ2lyY2xlQ2FuY3JpVHJvcGljdXMgPSB7XHJcbiAgICBpZDogXCJjbGlwQ2lyY2xlQ2FuY3JpVHJvcGljdXNcIixcclxuICAgIHI6IG51bGwsXHJcbiAgICBjeDogMCxcclxuICAgIGN5OiAwLFxyXG4gICAgY29tcHV0ZTogZnVuY3Rpb24gKG9yYmlzRGVjbGluYXRpb24pIHtcclxuICAgICAgICB0aGlzLnIgPSBwcm9qZWN0aW9uKG9yYmlzRGVjbGluYXRpb24pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCB2YXIgY2Fwcmljb3JuaVRyb3BpY3VzID0ge1xyXG4gICAgaWQ6IFwiY2Fwcmljb3JuaVRyb3BpY3VzXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IDAsXHJcbiAgICBjeTogMCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChvcmJpc0RlY2xpbmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5yID0gcHJvamVjdGlvbigtb3JiaXNEZWNsaW5hdGlvbik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGxhdGl0dWRvSG9yaXpvbnRpcyA9IHtcclxuICAgIGlkOiBcImxhdGl0dWRvSG9yaXpvbnRpc1wiLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IDAsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHgxID0gcHJvamVjdGlvbihob3Jpem9udGlzKTtcclxuICAgICAgICB2YXIgeDIgPSBwcm9qZWN0aW9uKG9wcG9zaXRlQW5nbGUoaG9yaXpvbnRpcykpO1xyXG4gICAgICAgIHRoaXMuY3ggPSAoeDEgKyB4MikgLyAyIDtcclxuICAgICAgICB0aGlzLnIgPSBNYXRoLmFicyh4MiAtIHgxKSAvIDI7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIG9wYWN1c0hvcml6b250aXMgPSB7XHJcbiAgICBpZDogXCJvcGFjdXNIb3Jpem9udGlzXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IG51bGwsXHJcbiAgICBjeTogMCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChob3Jpem9udGlzLCBvcGFjdXMpIHtcclxuICAgICAgICB2YXIgeDEgPSBwcm9qZWN0aW9uKGhvcml6b250aXMgLSBvcGFjdXMpO1xyXG4gICAgICAgIHZhciB4MiA9IHByb2plY3Rpb24ob3Bwb3NpdGVBbmdsZShob3Jpem9udGlzICsgb3BhY3VzKSk7XHJcbiAgICAgICAgdGhpcy5jeCA9ICh4MSArIHgyKSAvIDIgO1xyXG4gICAgICAgIHRoaXMuciA9IE1hdGguYWJzKHgyIC0geDEpIC8gMjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgc3VuSGFuZGxlID0ge1xyXG4gICAgaWQ6IFwic3VuSGFuZGxlXCIsXHJcbiAgICB4MTogMCxcclxuICAgIHkxOiAwLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogbnVsbCxcclxuICAgIHI6IG51bGwsXHJcbiAgICBhbmdsZTogMCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKGNhbmNyaVRyb3BpY3VzUmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy5yID0gc2NhbGUoY2FuY3JpVHJvcGljdXNSYWRpdXMpO1xyXG4gICAgICAgIHRoaXMueDIgPSAwO1xyXG4gICAgICAgIHRoaXMueTIgPSBzY2FsZShjYW5jcmlUcm9waWN1c1JhZGl1cyAqIDAuOTUpO1xyXG4gICAgICAgIHZhciBoYW5kbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwieTJcIiwgdGhpcy55Mi50b1N0cmluZygpKTtcclxuICAgIH0sXHJcbiAgICBzaG93OiBmdW5jdGlvbihhbmdsZURlZykge1xyXG4gICAgICAgIHZhciBoYW5kbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcclxuICAgICAgICBoYW5kbGUuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKFwiICsgYW5nbGVEZWcgKyBcIilcIik7XHJcbiAgICAgICAgZGlzcGxheUlubGluZUJ5RWxlbWVudChoYW5kbGUpXHJcbiAgICB9LFxyXG4gICAgc2hvd0J5VGltZTogZnVuY3Rpb24oZCkge1xyXG4gICAgICAgIHRoaXMuc2hvdyhkYXRlVG9TdW5UaW1lQW5nbGUoZCkpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBzdW5TeW1ib2wgPSB7XHJcbiAgICBpZDogXCJzdW5TeW1ib2xcIixcclxuICAgIGFuZ2xlOiAwLFxyXG4gICAgcjogbnVsbCxcclxuICAgIHg6IG51bGwsXHJcbiAgICB5OiBudWxsLFxyXG5cclxuICAgIHNob3dBdDogZnVuY3Rpb24oeFB4LCB5UHgpIHtcclxuICAgICAgICB2YXIgc3VuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW5Qb3NpdGlvblwiKTtcclxuICAgICAgICBzdW4uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeFB4ICsgXCIgXCIgKyB5UHggKyBcIilcIik7XHJcbiAgICAgICAgZGlzcGxheUlubGluZUJ5RWxlbWVudChzdW4pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBzdGFyU3ltYm9sID0ge1xyXG4gICAgaWQ6IFwic3RhclN5bWJvbFwiLFxyXG4gICAgeDogbnVsbCxcclxuICAgIHk6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoem9kaWFjdW1FcXVpbm94KSB7XHJcbiAgICAgICAgdGhpcy54ID0gc2NhbGUoem9kaWFjdW1FcXVpbm94LngxKTtcclxuICAgICAgICB0aGlzLnkgPSBzY2FsZSh6b2RpYWN1bUVxdWlub3gueTEpO1xyXG4gICAgfSxcclxuICAgIHNob3c6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyUG9zaXRpb25cIik7XHJcbiAgICAgICAgc3Rhci5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB0aGlzLnggKyBcIiBcIiArIHRoaXMueSArIFwiKVwiKTtcclxuICAgICAgICBkaXNwbGF5SW5saW5lQnlFbGVtZW50KHN0YXIpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBtb29uSGFuZGxlID0ge1xyXG4gICAgaWQ6IFwibW9vbkhhbmRsZVwiLFxyXG4gICAgeDE6IDAsXHJcbiAgICB5MTogMCxcclxuICAgIHgyOiBudWxsLFxyXG4gICAgeTI6IG51bGwsXHJcbiAgICByOiBudWxsLFxyXG4gICAgYW5nbGU6IDAsXHJcbiAgICBpbml0OiBmdW5jdGlvbihjYW5jcmlUcm9waWN1c1JhZGl1cykge1xyXG4gICAgICAgIHRoaXMuciA9IHNjYWxlKGNhbmNyaVRyb3BpY3VzUmFkaXVzKTtcclxuICAgICAgICB0aGlzLnkyID0gMDtcclxuICAgICAgICB0aGlzLngyID0gc2NhbGUoY2FuY3JpVHJvcGljdXNSYWRpdXMgKiAwLjk1KTtcclxuICAgICAgICB2YXIgaGFuZGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcIngyXCIsIHRoaXMueDIudG9TdHJpbmcoKSk7XHJcbiAgICB9LFxyXG4gICAgc2hvdzogZnVuY3Rpb24oYW5nbGVEZWcpIHtcclxuICAgICAgICB2YXIgaGFuZGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIGFuZ2xlRGVnICsgXCIpXCIpO1xyXG4gICAgICAgIGRpc3BsYXlJbmxpbmVCeUVsZW1lbnQoaGFuZGxlKVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBtb29uU3ltYm9sID0ge1xyXG4gICAgaWQ6IFwibW9vblN5bWJvbFwiLFxyXG4gICAgYW5nbGU6IDAsXHJcbiAgICByOiBudWxsLFxyXG4gICAgeDogbnVsbCxcclxuICAgIHk6IG51bGwsXHJcblxyXG4gICAgc2hvd0F0OiBmdW5jdGlvbih4UHgsIHlQeCwgcm90YXRpb25EZWcpIHtcclxuICAgICAgICB2YXIgbW9vbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9vblBvc2l0aW9uXCIpO1xyXG4gICAgICAgIG1vb24uc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeFB4ICsgXCIgXCIgKyB5UHggKyBcIikgcm90YXRlKFwiICsgcm90YXRpb25EZWcgICsgXCIpXCIpO1xyXG4gICAgICAgIGRpc3BsYXlJbmxpbmVCeUVsZW1lbnQobW9vbik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIHpvZGlhY3VtID0ge1xyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiAwLFxyXG4gICAgY3k6IDAsXHJcbiAgICBjMDoge3g6IG51bGwsIHk6IG51bGx9LCAvLyBjZW50ZXIgWCwgWSBjb29yZGluYXRlcyB3aGlsZSBhbmdsZSA9IDBcclxuICAgIGUwOiB7eDogbnVsbCwgeTogbnVsbH0sIC8vIGVjbGlwc2UgcG9sZSBYLCBZIGNvb3JkaW5hdGVzIHdoaWxlIGFuZ2xlID0gMFxyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZSgwKTtcclxuICAgICAgICB0aGlzLmMwID0ge3g6IHRoaXMuY3gsIHk6IHRoaXMuY3l9O1xyXG4gICAgICAgIHRoaXMuZTAgPSB0aGlzLmVjbGlwc2VQb2xlQ29uc3RydWN0aW9uKCk7XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZTogZnVuY3Rpb24oYW5nbGVEZWcpIHtcclxuICAgICAgICBhbmdsZURlZyA9ICh0eXBlb2YgYW5nbGVEZWcgIT09ICd1bmRlZmluZWQnKSA/ICBhbmdsZURlZyA6IDA7XHJcbiAgICAgICAgdmFyIGFuZ2xlUmFkID0gZGVnMnJhZChhbmdsZURlZyk7XHJcbiAgICAgICAgdGhpcy5yID0gKGNhbmNyaVRyb3BpY3VzLnIgKyBjYXByaWNvcm5pVHJvcGljdXMucikgLyAyO1xyXG4gICAgICAgIHZhciBjZW50ZXJSb3RhdGlvblJhZGl1cyA9IGNhcHJpY29ybmlUcm9waWN1cy5yIC0gdGhpcy5yO1xyXG4gICAgICAgIHRoaXMuY3kgPSBjZW50ZXJSb3RhdGlvblJhZGl1cyAqIE1hdGguc2luKGFuZ2xlUmFkKTtcclxuICAgICAgICB0aGlzLmN4ID0gY2VudGVyUm90YXRpb25SYWRpdXMgKiBNYXRoLmNvcyhhbmdsZVJhZCk7XHJcbiAgICB9LFxyXG4gICAgZWNsaXBzZVBvbGVDb25zdHJ1Y3Rpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcG9pbnRPbkVxdWF0b3IxID0gcG9sYXIyQ2FydGVzaWFuKDAsIDAsIGVxdWF0b3IuciwgOTAgKyBPcmJpc0RlY2xpbmF0aW9uRGVnKTtcclxuICAgICAgICB2YXIgcG9pbnRPbkVxdWF0b3IyID0ge3g6MCwgeTogLWVxdWF0b3Iucn07XHJcbiAgICAgICAgdmFyIGxpbmVHZW5lcmFsRXF1YXRpb25Db25zdGFudHMgPSBnZW5lcmFsRXF1YXRpb25Db25zdGFudHNPZkxpbmUocG9pbnRPbkVxdWF0b3IxLCBwb2ludE9uRXF1YXRvcjIpO1xyXG4gICAgICAgIHZhciB4ID0gaW50ZXJzZWN0aW9uT2ZMaW5lQW5kWGF4aXMobGluZUdlbmVyYWxFcXVhdGlvbkNvbnN0YW50cyk7XHJcbiAgICAgICAgcmV0dXJuIHt4OiB4LCB5OiAwfTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgem9kaWFjdW1PdXRlckNpcmNsZSA9IHtcclxuICAgIGlkOiBcInpvZGlhY3VtT3V0ZXJDaXJjbGVcIixcclxuICAgIHI6IG51bGwsXHJcbiAgICBjeDogbnVsbCxcclxuICAgIGN5OiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgem9kaWFjdW0uY29tcHV0ZSgwKTtcclxuICAgICAgICB0aGlzLnIgPSB6b2RpYWN1bS5yO1xyXG4gICAgICAgIHRoaXMuY3ggPSB6b2RpYWN1bS5jeDtcclxuICAgICAgICB0aGlzLmN5ID0gem9kaWFjdW0uY3k7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIHpvZGlhY3VtSW5uZXJDaXJjbGUgPSB7XHJcbiAgICBpZDogXCJ6b2RpYWN1bUlubmVyQ2lyY2xlXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IG51bGwsXHJcbiAgICBjeTogbnVsbCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKHpvZGlhY3VtT3V0ZXJDaXJjbGUpIHtcclxuICAgICAgICB0aGlzLnIgPSB6b2RpYWN1bU91dGVyQ2lyY2xlLnIgKiAwLjg7XHJcbiAgICAgICAgdGhpcy5jeCA9IHpvZGlhY3VtT3V0ZXJDaXJjbGUuY3g7XHJcbiAgICAgICAgdGhpcy5jeSA9IHpvZGlhY3VtT3V0ZXJDaXJjbGUuY3k7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgem9kaWFjdW1DZW50cmFsQ2lyY2xlID0ge1xyXG4gICAgaWQ6IFwiem9kaWFjdW1Jbm5lckNpcmNsZVwiLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbih6b2RpYWN1bUlubmVyQ2lyY2xlLCB6b2RpYWN1bU91dGVyQ2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5yID0gKHpvZGlhY3VtT3V0ZXJDaXJjbGUuciArIHpvZGlhY3VtSW5uZXJDaXJjbGUucikgLyAyO1xyXG4gICAgICAgIHRoaXMuY3ggPSB6b2RpYWN1bU91dGVyQ2lyY2xlLmN4O1xyXG4gICAgICAgIHRoaXMuY3kgPSB6b2RpYWN1bU91dGVyQ2lyY2xlLmN5O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBob2xlQ2lyY2xlWm9kaWFjdW1Jbm5lciA9IHtcclxuICAgIGlkOiBcImhvbGVDaXJjbGVab2RpYWN1bUlubmVyXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IG51bGwsXHJcbiAgICBjeTogbnVsbCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKHpvZGlhY3VtSW5uZXJDaXJjbGUpIHtcclxuICAgICAgICB0aGlzLnIgPSB6b2RpYWN1bUlubmVyQ2lyY2xlLnI7XHJcbiAgICAgICAgdGhpcy5jeCA9IHpvZGlhY3VtSW5uZXJDaXJjbGUuY3g7XHJcbiAgICAgICAgdGhpcy5jeSA9IHpvZGlhY3VtSW5uZXJDaXJjbGUuY3k7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIG1hc2tDaXJjbGVab2RpYWN1bU91dGVyID0ge1xyXG4gICAgaWQ6IFwibWFza0NpcmNsZVpvZGlhY3VtT3V0ZXJcIixcclxuICAgIHI6IG51bGwsXHJcbiAgICBjeDogbnVsbCxcclxuICAgIGN5OiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24oem9kaWFjdW1PdXRlckNpcmNsZSkge1xyXG4gICAgICAgIHRoaXMuciA9IHpvZGlhY3VtT3V0ZXJDaXJjbGUucjtcclxuICAgICAgICB0aGlzLmN4ID0gem9kaWFjdW1PdXRlckNpcmNsZS5jeDtcclxuICAgICAgICB0aGlzLmN5ID0gem9kaWFjdW1PdXRlckNpcmNsZS5jeTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgem9kaWFjdW1QaWVjZXMgPSB7XHJcbiAgICB0b3A6IG51bGwsXHJcbiAgICBib3R0b206IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoem9kaWFjdW1PdXRlckNpcmNsZSwgem9kaWFjdW1Jbm5lckNpcmNsZSkge1xyXG4gICAgICAgIHZhciBjeCA9IHNjYWxlKHpvZGlhY3VtT3V0ZXJDaXJjbGUuY3gpO1xyXG4gICAgICAgIHZhciBjeSA9IHNjYWxlKHpvZGlhY3VtT3V0ZXJDaXJjbGUuY3kpO1xyXG4gICAgICAgIHZhciByMSA9IHNjYWxlKHpvZGlhY3VtT3V0ZXJDaXJjbGUucik7XHJcbiAgICAgICAgdmFyIHIyID0gc2NhbGUoem9kaWFjdW1Jbm5lckNpcmNsZS5yKTtcclxuICAgICAgICB0aGlzLnRvcCA9IFtdO1xyXG4gICAgICAgIHRoaXMuYm90dG9tID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYW5nbGVEZWcgPSAtIGkgKiAzMDtcclxuICAgICAgICAgICAgdGhpcy50b3BbaV0gPSBwb2xhcjJDYXJ0ZXNpYW4oY3gsIGN5LCByMSwgYW5nbGVEZWcgLSA5MCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tW2ldID0gcG9sYXIyQ2FydGVzaWFuKGN4LCBjeSwgcjIsIGFuZ2xlRGVnIC0gOTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbi8vIFBvaW50cyBvbiBlcXVhdG9yIGZvciBjb25zdHJ1Y3Rpb24gb2YgWm9kaWFjXHJcbnZhciBlcXVhdG9yUG9pbnRzID0ge1xyXG4gICAgcG9pbnQ6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoZXF1YXRvcikge1xyXG4gICAgICAgIHRoaXMucG9pbnQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGFuZ2xlRGVnID0gLSBpICogMzA7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRbaV0gPSBwb2xhcjJDYXJ0ZXNpYW4oZXF1YXRvci5jeCwgZXF1YXRvci5jeSwgZXF1YXRvci5yLCBhbmdsZURlZyAtIDkwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBQb2ludHMgb24gZXF1YXRvciBmb3IgY29uc3RydWN0aW9uIG9mIFpvZGlhYyAtIHJvdGF0aW9uIDE1IGRlZ1xyXG52YXIgZXF1YXRvclBvaW50c1JvdGF0ZWQgPSB7XHJcbiAgICBwb2ludDogbnVsbCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uIChlcXVhdG9yKSB7XHJcbiAgICAgICAgdGhpcy5wb2ludCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYW5nbGVEZWcgPSAtIGkgKiAzMCAtIDE1O1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50W2ldID0gcG9sYXIyQ2FydGVzaWFuKGVxdWF0b3IuY3gsIGVxdWF0b3IuY3ksIGVxdWF0b3IuciwgYW5nbGVEZWcgLSA5MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciB6b2RpYWN1bU91dGVyUG9pbnRzID0ge1xyXG4gICAgcG9pbnQ6IG51bGwsXHJcbiAgICBlY2xpcHNlUG9sZToge3g6IG51bGwsIHk6IDB9LFxyXG4gICAgY3g6IG51bGwsXHJcbiAgICBjeTogbnVsbCxcclxuICAgIHI6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbih6b2RpYWN1bSwgZXF1YXRvclBvaW50cykge1xyXG4gICAgICAgIC8vIHdoaWNoIHJvb3Qgb2YgcXVhZHJhdGljIGVxdWF0aW9uIHdlIHNlbGVjdCBmb3Igc29sdXRpb24gZm9yIGdpdmVuIGluZGV4IChhbmdsZSlcclxuICAgICAgICB2YXIgcm9vdCA9IFsxLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAxXTtcclxuICAgICAgICB0aGlzLmVjbGlwc2VQb2xlID0gem9kaWFjdW0uZTA7XHJcbiAgICAgICAgdGhpcy5jeCA9IHpvZGlhY3VtLmN4O1xyXG4gICAgICAgIHRoaXMuY3kgPSB6b2RpYWN1bS5jeTtcclxuICAgICAgICB0aGlzLnIgPSB6b2RpYWN1bS5yO1xyXG4gICAgICAgIHRoaXMucG9pbnQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHR3b1BvaW50cyA9IHRoaXMuY29tcHV0ZVByb2plY3Rpb24oZXF1YXRvclBvaW50cy5wb2ludFtpXSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRbaV0gPSAocm9vdFtpXSA9PSAxKSA/IHR3b1BvaW50cy5wMSA6IHR3b1BvaW50cy5wMjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZVByb2plY3Rpb246IGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25PZkNpcmNsZUFuZExpbmUoem9kaWFjdW0sIHRoaXMuZWNsaXBzZVBvbGUsIHBvaW50KVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciB6b2RpYWN1bUlubmVyUG9pbnRzID0ge1xyXG4gICAgcG9pbnQ6IG51bGwsXHJcbiAgICBjZW50cmFsUG9pbnQ6IHt4OiAwLCB5OiAwfSxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IG51bGwsXHJcbiAgICByOiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24oem9kaWFjdW1Jbm5lckNpcmNsZSwgb3V0ZXJQb2ludHMpIHtcclxuICAgICAgICAvLyB3aGljaCByb290IG9mIHF1YWRyYXRpYyBlcXVhdGlvbiB3ZSBzZWxlY3QgZm9yIHNvbHV0aW9uIGZvciBnaXZlbiBpbmRleCAoYW5nbGUpXHJcbiAgICAgICAgdmFyIHJvb3QgPSBbMSwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMV07XHJcbiAgICAgICAgdGhpcy5jeCA9IHpvZGlhY3VtSW5uZXJDaXJjbGUuY3g7XHJcbiAgICAgICAgdGhpcy5jeSA9IHpvZGlhY3VtSW5uZXJDaXJjbGUuY3k7XHJcbiAgICAgICAgdGhpcy5yID0gem9kaWFjdW1Jbm5lckNpcmNsZS5yO1xyXG4gICAgICAgIHRoaXMucG9pbnQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gdmFyIHR3b1BvaW50cyA9IHRoaXMuY29tcHV0ZVByb2plY3Rpb24oZXF1YXRvclBvaW50cy5wb2ludFtpXSk7XHJcbiAgICAgICAgICAgIHZhciB0d29Qb2ludHMgPSBpbnRlcnNlY3Rpb25PZkNpcmNsZUFuZExpbmUoem9kaWFjdW1Jbm5lckNpcmNsZSwgb3V0ZXJQb2ludHMucG9pbnRbaV0sIHRoaXMuY2VudHJhbFBvaW50KTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludFtpXSA9IChyb290W2ldID09IDEpID8gdHdvUG9pbnRzLnAxIDogdHdvUG9pbnRzLnAyO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlUHJvamVjdGlvbjogZnVuY3Rpb24gKHBvaW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbk9mQ2lyY2xlQW5kTGluZSh6b2RpYWN1bUlubmVyQ2lyY2xlLCB0aGlzLmNlbnRyYWxQb2ludCwgcG9pbnQpXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIHpvZGlhY3VtQ2VudGVyUG9pbnRzID0ge1xyXG4gICAgcG9pbnQ6IG51bGwsXHJcbiAgICBjZW50cmFsUG9pbnQ6IHt4OiAwLCB5OiAwfSxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IG51bGwsXHJcbiAgICByOiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24oem9kaWFjdW1DZW50cmFsQ2lyY2xlLCBlcXVhdG9yUG9pbnRzUm90YXRlZCkge1xyXG4gICAgICAgIC8vIHdoaWNoIHJvb3Qgb2YgcXVhZHJhdGljIGVxdWF0aW9uIHdlIHNlbGVjdCBmb3Igc29sdXRpb24gZm9yIGdpdmVuIGluZGV4IChhbmdsZSlcclxuICAgICAgICB2YXIgcm9vdCA9IFsyLCAyLCAyLCAyLCAyLCAyLCAxLCAxLCAxLCAxLCAxLCAxXTtcclxuICAgICAgICB0aGlzLmVjbGlwc2VQb2xlID0gem9kaWFjdW0uZTA7XHJcbiAgICAgICAgdGhpcy5jeCA9IHpvZGlhY3VtQ2VudHJhbENpcmNsZS5jeDtcclxuICAgICAgICB0aGlzLmN5ID0gem9kaWFjdW1DZW50cmFsQ2lyY2xlLmN5O1xyXG4gICAgICAgIHRoaXMuciA9IHpvZGlhY3VtQ2VudHJhbENpcmNsZS5yO1xyXG4gICAgICAgIHRoaXMucG9pbnQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHR3b1BvaW50cyA9IHRoaXMuY29tcHV0ZVByb2plY3Rpb24oZXF1YXRvclBvaW50c1JvdGF0ZWQucG9pbnRbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50W2ldID0gKHJvb3RbaV0gPT0gMSkgPyB0d29Qb2ludHMucDEgOiB0d29Qb2ludHMucDI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVQcm9qZWN0aW9uOiBmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uT2ZDaXJjbGVBbmRMaW5lKHpvZGlhY3VtQ2VudHJhbENpcmNsZSwgdGhpcy5jZW50cmFsUG9pbnQsIHBvaW50KVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciB6b2RpYWN1bUVxdWlub3ggPSB7XHJcbiAgICBpZDpcInpvZGlhY3VtRXF1aW5veFwiLFxyXG4gICAgeDE6IDAsXHJcbiAgICB5MTogbnVsbCxcclxuICAgIHgyOiAwLFxyXG4gICAgeTI6IG51bGwsXHJcbiAgICBjb21wdXRlOiBmdW5jdGlvbihlcXVhdG9yUmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy55MSA9IC1lcXVhdG9yUmFkaXVzICogMS4yO1xyXG4gICAgICAgIHRoaXMueTIgPSBlcXVhdG9yUmFkaXVzO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciB6b2RpYWN1bVNvbHN0aWNlID0ge1xyXG4gICAgaWQ6XCJ6b2RpYWN1bVNvbHN0aWNlXCIsXHJcbiAgICB4MTogbnVsbCxcclxuICAgIHkxOiAwLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogMCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uKGNhbmNyaVRyb3BpY3VzUmFkaXVzLCBjYXByaWNvcm5pVHJvcGljdXNSYWRpdXMpIHtcclxuICAgICAgICB0aGlzLngxID0gY2Fwcmljb3JuaVRyb3BpY3VzUmFkaXVzO1xyXG4gICAgICAgIHRoaXMueDIgPSAtIGNhbmNyaVRyb3BpY3VzUmFkaXVzO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBtb29uU2hhcGUgPSB7XHJcbiAgICByOiA2LFxyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGR3ID0gZGVzY3JpYmVBcmMoMCwgMCwgdGhpcy5yLCAtOTAsIDkwKTtcclxuICAgICAgICB2YXIgbW9vbldoaXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29uV2hpdGVcIik7XHJcbiAgICAgICAgbW9vbldoaXRlLnNldEF0dHJpYnV0ZShcImRcIiwgZHcpO1xyXG4gICAgICAgIG1vb25XaGl0ZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIHRoaXMuci50b1N0cmluZygpKTtcclxuXHJcbiAgICAgICAgdmFyIGRiID0gZGVzY3JpYmVBcmMoMCwgMCwgdGhpcy5yLCA5MCwgLTkwKTtcclxuICAgICAgICB2YXIgbW9vbkJsYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29uQmxhY2tcIik7XHJcbiAgICAgICAgbW9vbkJsYWNrLnNldEF0dHJpYnV0ZShcImRcIiwgZGIpO1xyXG4gICAgICAgIG1vb25CbGFjay5zZXRBdHRyaWJ1dGUoXCJyXCIsIHRoaXMuci50b1N0cmluZygpKTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlOiBmdW5jdGlvbihzdW5BbmdsZURlZywgbW9vbkFuZ2xlRGVnKSB7XHJcbiAgICAgICAgdmFyIHN1bkFuZ2xlRGVnID0gbm9ybWFsaXplQW5nbGVEZWcoc3VuQW5nbGVEZWcpO1xyXG4gICAgICAgIHZhciBtb29uQW5nbGVEZWcgPSBub3JtYWxpemVBbmdsZURlZyhtb29uQW5nbGVEZWcpO1xyXG4gICAgICAgIHZhciBtb29uQWdlID0gbm9ybWFsaXplQW5nbGVEZWcoc3VuQW5nbGVEZWcgLSBtb29uQW5nbGVEZWcpO1xyXG4gICAgICAgIHZhciBtb29uUGhhc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vb25QaGFzZVwiKTtcclxuICAgICAgICBpZiAobW9vbkFnZSA8IDApIHsgIC8vIHN3YXAgQiZXIGJhY2tncm91bmQgb2YgbW9vbiBzeW1ib2xcclxuICAgICAgICAgICAgbW9vblBoYXNlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtb29uUGhhc2Uuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbWFrZSBsaWdodCBhbmQgZGFyayBwYXJ0IG9mIHRoZSBtb29uXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKG1vb25BZ2UpIDwgOTApIHtcclxuICAgICAgICAgICAgdmFyIGRhcmtuZXNzID0gbW9vbkFnZTtcclxuICAgICAgICAgICAgdmFyIG1vb25EYXJrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29uRGFya1wiKTtcclxuICAgICAgICAgICAgbW9vbkRhcmsuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0cmFuc2Zvcm06IHJvdGF0ZVkoXCIgKyBkYXJrbmVzcyArIFwiZGVnKVwiKTtcclxuICAgICAgICAgICAgZGlzcGxheUlubGluZUJ5RWxlbWVudChtb29uRGFyayk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlOb25lQnlJZChcIm1vb25MaWdodFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbW9vbkxpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29uTGlnaHRcIik7XHJcbiAgICAgICAgICAgIHZhciBsaWdodG5lc3MgPSAxODAgLSBNYXRoLmFicyhtb29uQWdlKTtcclxuICAgICAgICAgICAgbW9vbkxpZ2h0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiByb3RhdGVZKFwiICsgbGlnaHRuZXNzICsgXCJkZWcpXCIpO1xyXG4gICAgICAgICAgICBkaXNwbGF5SW5saW5lQnlFbGVtZW50KG1vb25MaWdodCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlOb25lQnlJZChcIm1vb25EYXJrXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgb2xkVGltZU91dGVyQ2lyY2xlID0ge1xyXG4gICAgaWQ6IFwib2xkVGltZU91dGVyQ2lyY2xlXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IG51bGwsXHJcbiAgICBjeTogbnVsbCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuciA9IGNhbmNyaVRyb3BpY3VzLnIgKiAxLjE0O1xyXG4gICAgICAgIHRoaXMuY3ggPSBjYW5jcmlUcm9waWN1cy5jeDtcclxuICAgICAgICB0aGlzLmN5ID0gY2FuY3JpVHJvcGljdXMuY3k7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIG9sZFRpbWVJbm5lckNpcmNsZSA9IHtcclxuICAgIGlkOiBcIm9sZFRpbWVJbm5lckNpcmNsZVwiLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbihvbGRUaW1lT3V0ZXJDaXJjbGUpIHtcclxuICAgICAgICB0aGlzLnIgPSBvbGRUaW1lT3V0ZXJDaXJjbGUuciAqIDAuODk7XHJcbiAgICAgICAgdGhpcy5jeCA9IG9sZFRpbWVPdXRlckNpcmNsZS5jeDtcclxuICAgICAgICB0aGlzLmN5ID0gb2xkVGltZU91dGVyQ2lyY2xlLmN5O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBob2xlQ2lyY2xlT2xkVGltZUlubmVyID0ge1xyXG4gICAgaWQ6IFwiaG9sZUNpcmNsZU9sZFRpbWVJbm5lclwiLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbihvbGRUaW1lSW5uZXJDaXJjbGUpIHtcclxuICAgICAgICB0aGlzLnIgPSBvbGRUaW1lSW5uZXJDaXJjbGUucjtcclxuICAgICAgICB0aGlzLmN4ID0gb2xkVGltZUlubmVyQ2lyY2xlLmN4O1xyXG4gICAgICAgIHRoaXMuY3kgPSBvbGRUaW1lSW5uZXJDaXJjbGUuY3k7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIG1hc2tDaXJjbGVPbGRUaW1lT3V0ZXIgPSB7XHJcbiAgICBpZDogXCJtYXNrQ2lyY2xlT2xkVGltZU91dGVyXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IG51bGwsXHJcbiAgICBjeTogbnVsbCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKG9sZFRpbWVPdXRlckNpcmNsZSkge1xyXG4gICAgICAgIHRoaXMuciA9IG9sZFRpbWVPdXRlckNpcmNsZS5yO1xyXG4gICAgICAgIHRoaXMuY3ggPSBvbGRUaW1lT3V0ZXJDaXJjbGUuY3g7XHJcbiAgICAgICAgdGhpcy5jeSA9IG9sZFRpbWVPdXRlckNpcmNsZS5jeTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUobnVtKVxyXG57XHJcbiAgICByZXR1cm4gKDEwMCAqIG51bSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3Rpb24oYWxwaGEpIHtcclxuICAgIHJldHVybiAoMiAqIG9yYmlzLnIgKiBNYXRoLnRhbihNYXRoLlBJIC8gNCArIGFscGhhLzIpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEFzdHJvbm9taWNhbENsb2NrKCkge1xyXG4gICAgb3JiaXNDZW50ZXIuY29tcHV0ZShPcmJpc0RpYW1ldGVyKTtcclxuICAgIG9yYmlzLmNvbXB1dGUoT3JiaXNEaWFtZXRlcik7XHJcbiAgICAvLyBvcmJpc0F4b25YLmluaXQoKTtcclxuICAgIC8vIG9yYmlzQXhvblkuaW5pdCgpO1xyXG4gICAgLy9wbGFudW0uaW5pdCgpO1xyXG4gICAgLy9vcmJpc0VxdWF0b3IuY29tcHV0ZShPcmJpc0RpYW1ldGVyKTtcclxuICAgIC8vZXF1YXRvclByb2plY3Rpb24uaW5pdCgpO1xyXG4gICAgLy8gb3JiaXNDYW5jcmlUcm9waWN1cy5jb21wdXRlKG9yYmlzQ2VudGVyLCBvcmJpcy5yLCBvcmJpc0RlY2xpbmF0aW9uKTtcclxuICAgIC8vIG9yYmlzQ2Fwcmljb3JuaVRyb3BpY3VzLmNvbXB1dGUob3JiaXNDZW50ZXIsIG9yYmlzLnIsIG9yYmlzRGVjbGluYXRpb24pO1xyXG4gICAgLy8gb3JiaXNMYXRpdHVkby5jb21wdXRlKG9yYmlzQ2VudGVyLCBvcmJpcy5yLCBob3Jpem9udGlzKTtcclxuICAgIC8vIG9yYmlzT3BhY3VzLmluaXQoKTtcclxuICAgIC8vIGNhbmNyaVRyb3BpY3VzUHJvamVjdGlvbi5pbml0KCk7XHJcbiAgICAvLyBjYXByaWNvcm5pVHJvcGljdXNQcm9qZWN0aW9uLmluaXQoKTtcclxuICAgIGVxdWF0b3IuY29tcHV0ZSgpO1xyXG4gICAgY2FuY3JpVHJvcGljdXMuY29tcHV0ZShvcmJpc0RlY2xpbmF0aW9uKTtcclxuICAgIGNsaXBDaXJjbGVDYW5jcmlUcm9waWN1cy5jb21wdXRlKG9yYmlzRGVjbGluYXRpb24pO1xyXG4gICAgY2Fwcmljb3JuaVRyb3BpY3VzLmNvbXB1dGUob3JiaXNEZWNsaW5hdGlvbik7XHJcbiAgICAvLyBsYXRpdHVkb1Byb2plY3Rpb25BLmluaXQoKTtcclxuICAgIC8vIGxhdGl0dWRvUHJvamVjdGlvbkIuaW5pdCgpO1xyXG4gICAgbGF0aXR1ZG9Ib3Jpem9udGlzLmluaXQoKTtcclxuICAgIC8vIG9wYWN1c1Byb2plY3Rpb25BLmluaXQoKTtcclxuICAgIC8vIG9wYWN1c1Byb2plY3Rpb25CLmluaXQoKTtcclxuICAgIG9wYWN1c0hvcml6b250aXMuY29tcHV0ZShob3Jpem9udGlzLCBPcGFjdXMpO1xyXG4gICAgLy9jbGlja01lUG9pbnQuaW5pdCgpO1xyXG5cclxuICAgIG9sZFRpbWVPdXRlckNpcmNsZS5pbml0KCk7XHJcbiAgICBvbGRUaW1lSW5uZXJDaXJjbGUuaW5pdChvbGRUaW1lT3V0ZXJDaXJjbGUpO1xyXG4gICAgaG9sZUNpcmNsZU9sZFRpbWVJbm5lci5pbml0KG9sZFRpbWVJbm5lckNpcmNsZSk7XHJcbiAgICBtYXNrQ2lyY2xlT2xkVGltZU91dGVyLmluaXQob2xkVGltZU91dGVyQ2lyY2xlKTtcclxuXHJcbiAgICB6b2RpYWN1bS5pbml0KCk7XHJcbiAgICB6b2RpYWN1bU91dGVyQ2lyY2xlLmluaXQoKTtcclxuICAgIHpvZGlhY3VtSW5uZXJDaXJjbGUuaW5pdCh6b2RpYWN1bU91dGVyQ2lyY2xlKTtcclxuICAgIHpvZGlhY3VtQ2VudHJhbENpcmNsZS5pbml0KHpvZGlhY3VtSW5uZXJDaXJjbGUsIHpvZGlhY3VtT3V0ZXJDaXJjbGUpO1xyXG4gICAgaG9sZUNpcmNsZVpvZGlhY3VtSW5uZXIuaW5pdCh6b2RpYWN1bUlubmVyQ2lyY2xlKTtcclxuICAgIG1hc2tDaXJjbGVab2RpYWN1bU91dGVyLmluaXQoem9kaWFjdW1PdXRlckNpcmNsZSk7XHJcbiAgICB6b2RpYWN1bUVxdWlub3guY29tcHV0ZShlcXVhdG9yLnIpO1xyXG4gICAgem9kaWFjdW1Tb2xzdGljZS5jb21wdXRlKGNhbmNyaVRyb3BpY3VzLnIsIGNhcHJpY29ybmlUcm9waWN1cy5yKTtcclxuICAgIHpvZGlhY3VtUGllY2VzLmluaXQoem9kaWFjdW1PdXRlckNpcmNsZSwgem9kaWFjdW1Jbm5lckNpcmNsZSk7XHJcbiAgICBzdGFyU3ltYm9sLmluaXQoem9kaWFjdW1FcXVpbm94KTtcclxuICAgIHN1bkhhbmRsZS5pbml0KGNhbmNyaVRyb3BpY3VzLnIpO1xyXG4gICAgbW9vbkhhbmRsZS5pbml0KGNhbmNyaVRyb3BpY3VzLnIpO1xyXG4gICAgbW9vblNoYXBlLmluaXQoKTtcclxuICAgIGVxdWF0b3JQb2ludHMuaW5pdChlcXVhdG9yKTtcclxuICAgIGVxdWF0b3JQb2ludHNSb3RhdGVkLmluaXQoZXF1YXRvcik7XHJcbiAgICB6b2RpYWN1bU91dGVyUG9pbnRzLmluaXQoem9kaWFjdW0sIGVxdWF0b3JQb2ludHMpO1xyXG4gICAgem9kaWFjdW1DZW50ZXJQb2ludHMuaW5pdCh6b2RpYWN1bUNlbnRyYWxDaXJjbGUsIGVxdWF0b3JQb2ludHNSb3RhdGVkKTtcclxuICAgIHpvZGlhY3VtSW5uZXJQb2ludHMuaW5pdCh6b2RpYWN1bUlubmVyQ2lyY2xlLCB6b2RpYWN1bU91dGVyUG9pbnRzKTtcclxufVxyXG4iLCJ2YXIgb3JiaXNBeG9uWCA9IHtcclxuICAgIGlkOiBcIm9yYmlzQXhvblhcIixcclxuICAgIHgxOiBudWxsLFxyXG4gICAgeTE6IG51bGwsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiBudWxsLFxyXG4gICAgb3ZlcmxhcDogMC4xLFxyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy54MSA9IC1vcmJpcy5yIC0gdGhpcy5vdmVybGFwO1xyXG4gICAgICAgIHRoaXMueTEgPSBvcmJpcy5yO1xyXG4gICAgICAgIHRoaXMueDIgPSBvcmJpcy5yICsgdGhpcy5vdmVybGFwO1xyXG4gICAgICAgIHRoaXMueTIgPSBvcmJpcy5yO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9yYmlzQXhvblkgPSB7XHJcbiAgICBpZDogXCJvcmJpc0F4b25ZXCIsXHJcbiAgICB4MTogMCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IDAsXHJcbiAgICB5MjogbnVsbCxcclxuICAgIG92ZXJsYXA6IDAuMSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMueTEgPSAtIHRoaXMub3ZlcmxhcDtcclxuICAgICAgICB0aGlzLnkyID0gMiAqIG9yYmlzLnIgKyB0aGlzLm92ZXJsYXA7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb3JiaXNFcXVhdG9yID0ge1xyXG4gICAgaWQ6IFwib3JiaXNFcXVhdG9yXCIsXHJcbiAgICB4MTogbnVsbCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogbnVsbCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChvcmJpc0RpYW1ldGVyKSB7XHJcbiAgICAgICAgdmFyIHJhZGl1cyA9IG9yYmlzRGlhbWV0ZXIgLyAyO1xyXG4gICAgICAgIHRoaXMueDEgPSAtcmFkaXVzO1xyXG4gICAgICAgIHRoaXMueTEgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy54MiA9IHJhZGl1cztcclxuICAgICAgICB0aGlzLnkyID0gcmFkaXVzO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNsaWNrTWVQb2ludCA9IHtcclxuICAgIGlkOiBcImNsaWNrTWVQb2ludFwiLFxyXG4gICAgeDogMCxcclxuICAgIHk6IDAsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb3JiaXNDYW5jcmlUcm9waWN1cyA9IHtcclxuICAgIGlkOiBcIm9yYmlzQ2FuY3JpVHJvcGljdXNcIixcclxuICAgIHgxOiBudWxsLFxyXG4gICAgeTE6IG51bGwsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiBudWxsLFxyXG4gICAgY29tcHV0ZTogZnVuY3Rpb24gKG9yYmlzQ2VudGVyLCBvcmJpc1JhZGl1cywgb3JiaXNEZWNsaW5hdGlvbikge1xyXG4gICAgICAgIHZhciBvcmJpc1ggPSBNYXRoLmNvcyhvcmJpc0RlY2xpbmF0aW9uKSAqIG9yYmlzUmFkaXVzO1xyXG4gICAgICAgIHZhciBvcmJpc1kgPSBNYXRoLnNpbihvcmJpc0RlY2xpbmF0aW9uKSAqIG9yYmlzUmFkaXVzO1xyXG4gICAgICAgIHRoaXMueDEgPSBvcmJpc0NlbnRlci54IC0gb3JiaXNYO1xyXG4gICAgICAgIHRoaXMueTEgPSBvcmJpc0NlbnRlci55ICsgb3JiaXNZO1xyXG4gICAgICAgIHRoaXMueDIgPSBvcmJpc0NlbnRlci54ICsgb3JiaXNYO1xyXG4gICAgICAgIHRoaXMueTIgPSB0aGlzLnkxO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9yYmlzQ2Fwcmljb3JuaVRyb3BpY3VzID0ge1xyXG4gICAgaWQ6IFwib3JiaXNDYXByaWNvcm5pVHJvcGljdXNcIixcclxuICAgIHgxOiBudWxsLFxyXG4gICAgeTE6IG51bGwsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiBudWxsLFxyXG4gICAgY29tcHV0ZTogZnVuY3Rpb24gKG9yYmlzQ2VudGVyLCBvcmJpc1JhZGl1cywgb3JiaXNEZWNsaW5hdGlvbikge1xyXG4gICAgICAgIHZhciBvcmJpc1ggPSBNYXRoLmNvcyhvcmJpc0RlY2xpbmF0aW9uKSAqIG9yYmlzUmFkaXVzO1xyXG4gICAgICAgIHZhciBvcmJpc1kgPSAtIE1hdGguc2luKG9yYmlzRGVjbGluYXRpb24pICogb3JiaXNSYWRpdXM7XHJcbiAgICAgICAgdGhpcy54MSA9IG9yYmlzQ2VudGVyLnggLSBvcmJpc1g7XHJcbiAgICAgICAgdGhpcy55MSA9IG9yYmlzQ2VudGVyLnkgKyBvcmJpc1k7XHJcbiAgICAgICAgdGhpcy54MiA9IG9yYmlzQ2VudGVyLnggKyBvcmJpc1g7XHJcbiAgICAgICAgdGhpcy55MiA9IHRoaXMueTE7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb3JiaXNMYXRpdHVkbyA9IHtcclxuICAgIGlkOiBcIm9yYmlzTGF0aXR1ZG9cIixcclxuICAgIHgxOiBudWxsLFxyXG4gICAgeTE6IG51bGwsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiBudWxsLFxyXG4gICAgY29tcHV0ZTogZnVuY3Rpb24gKG9yYmlzQ2VudGVyLCBvcmJpc1JhZGl1cywgaG9yaXpvbnRpcykge1xyXG4gICAgICAgIHZhciBvcmJpc1ggPSBNYXRoLmNvcygtaG9yaXpvbnRpcykgKiBvcmJpc1JhZGl1cztcclxuICAgICAgICB2YXIgb3JiaXNZID0gTWF0aC5zaW4oLWhvcml6b250aXMpICogb3JiaXNSYWRpdXM7XHJcbiAgICAgICAgdGhpcy54MSA9IG9yYmlzQ2VudGVyLnggLSBvcmJpc1g7XHJcbiAgICAgICAgdGhpcy55MSA9IG9yYmlzQ2VudGVyLnkgKyBvcmJpc1k7XHJcbiAgICAgICAgdGhpcy54MiA9IG9yYmlzQ2VudGVyLnggKyBvcmJpc1g7XHJcbiAgICAgICAgdGhpcy55MiA9IG9yYmlzQ2VudGVyLnkgLSBvcmJpc1k7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb3JiaXNPcGFjdXMgPSB7XHJcbiAgICBpZDogXCJvcmJpc09wYWN1c1wiLFxyXG4gICAgeDE6IG51bGwsXHJcbiAgICB5MTogbnVsbCxcclxuICAgIHgyOiBudWxsLFxyXG4gICAgeTI6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG9yYmlzWDEgPSBNYXRoLmNvcyhvcHBvc2l0ZUFuZ2xlKGhvcml6b250aXMgKyBPcGFjdXMpKSAqIG9yYmlzLnI7XHJcbiAgICAgICAgdmFyIG9yYmlzWTEgPSBNYXRoLnNpbihvcHBvc2l0ZUFuZ2xlKGhvcml6b250aXMgKyBPcGFjdXMpKSAqIG9yYmlzLnI7XHJcbiAgICAgICAgdmFyIG9yYmlzWDIgPSBNYXRoLmNvcyhob3Jpem9udGlzIC0gT3BhY3VzKSAqIG9yYmlzLnI7XHJcbiAgICAgICAgdmFyIG9yYmlzWTIgPSBNYXRoLnNpbihob3Jpem9udGlzIC0gT3BhY3VzKSAqIG9yYmlzLnI7XHJcbiAgICAgICAgdGhpcy54MSA9IG9yYmlzQ2VudGVyLnggKyBvcmJpc1gxO1xyXG4gICAgICAgIHRoaXMueTEgPSBvcmJpc0NlbnRlci55ICsgb3JiaXNZMTtcclxuICAgICAgICB0aGlzLngyID0gb3JiaXNDZW50ZXIueCArIG9yYmlzWDI7XHJcbiAgICAgICAgdGhpcy55MiA9IG9yYmlzQ2VudGVyLnkgKyBvcmJpc1kyO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHBsYW51bSA9IHtcclxuICAgIGlkOiBcInBsYW51bVwiLFxyXG4gICAgeDE6IG51bGwsXHJcbiAgICB5MTogMCxcclxuICAgIHgyOiBudWxsLFxyXG4gICAgeTI6IDAsXHJcbiAgICBvdmVybGFwOiAwLjEsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBsYW51bVggPSBwcm9qZWN0aW9uKG9yYmlzRGVjbGluYXRpb24pICsgdGhpcy5vdmVybGFwO1xyXG4gICAgICAgIHRoaXMueDEgPSBwbGFudW1YO1xyXG4gICAgICAgIHRoaXMueDIgPSAtcGxhbnVtWDtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBlcXVhdG9yUHJvamVjdGlvbiA9IHtcclxuICAgIGlkOiBcImVxdWF0b3JQcm9qZWN0aW9uXCIsXHJcbiAgICB4MTogMCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogMCxcclxuICAgIG92ZXJsYXA6IDAuMSxcclxuICAgIHg6IG51bGwsXHJcbiAgICB5OiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMueCA9IC0gcHJvamVjdGlvbigwKTtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMueDEgPSB0aGlzLm92ZXJsYXA7XHJcbiAgICAgICAgdGhpcy55MSA9IDIgKiBvcmJpcy5yICsgdGhpcy5vdmVybGFwO1xyXG4gICAgICAgIHRoaXMueDIgPSB0aGlzLnggLSB0aGlzLm92ZXJsYXA7XHJcbiAgICAgICAgdGhpcy55MiA9IHRoaXMueSAtIHRoaXMub3ZlcmxhcDtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjYW5jcmlUcm9waWN1c1Byb2plY3Rpb24gPSB7XHJcbiAgICBpZDogXCJjYW5jcmlUcm9waWN1c1Byb2plY3Rpb25cIixcclxuICAgIHgxOiAwLFxyXG4gICAgeTE6IG51bGwsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiAwLFxyXG4gICAgeDogbnVsbCxcclxuICAgIHk6IDAsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy54MjtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMueTEgPSAyICogb3JiaXMucjtcclxuICAgICAgICB0aGlzLngyID0gLSBwcm9qZWN0aW9uKG9yYmlzRGVjbGluYXRpb24pO1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMueDI7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY2Fwcmljb3JuaVRyb3BpY3VzUHJvamVjdGlvbiA9IHtcclxuICAgIGlkOiBcImNhcHJpY29ybmlUcm9waWN1c1Byb2plY3Rpb25cIixcclxuICAgIHgxOiAwLFxyXG4gICAgeTE6IG51bGwsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiAwLFxyXG4gICAgeDogbnVsbCxcclxuICAgIHk6IDAsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy55MSA9ICAyICogb3JiaXMucjtcclxuICAgICAgICB0aGlzLnggPSAtIHByb2plY3Rpb24oLW9yYmlzRGVjbGluYXRpb24pO1xyXG4gICAgICAgIHRoaXMueDIgPSB0aGlzLng7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxudmFyIGxhdGl0dWRvUHJvamVjdGlvbkEgPSB7XHJcbiAgICBpZDogXCJsYXRpdHVkb1Byb2plY3Rpb25BXCIsXHJcbiAgICB4MTogMCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogMCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnkxID0gMiAqIG9yYmlzLnI7XHJcbiAgICAgICAgdGhpcy54MiA9IHByb2plY3Rpb24oaG9yaXpvbnRpcyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgbGF0aXR1ZG9Qcm9qZWN0aW9uQiA9IHtcclxuICAgIGlkOiBcImxhdGl0dWRvUHJvamVjdGlvbkJcIixcclxuICAgIHgxOiAwLFxyXG4gICAgeTE6IG51bGwsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiAwLFxyXG4gICAgeDogbnVsbCxcclxuICAgIHk6IDAsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy55MSA9IDIgKiBvcmJpcy5yO1xyXG4gICAgICAgIHRoaXMueCA9IHByb2plY3Rpb24ob3Bwb3NpdGVBbmdsZShob3Jpem9udGlzKSk7XHJcbiAgICAgICAgdGhpcy54MiA9IHRoaXMueDtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG52YXIgb3BhY3VzUHJvamVjdGlvbkEgPSB7XHJcbiAgICBpZDogXCJvcGFjdXNQcm9qZWN0aW9uQVwiLFxyXG4gICAgeDE6IDAsXHJcbiAgICB5MTogbnVsbCxcclxuICAgIHgyOiBudWxsLFxyXG4gICAgeTI6IDAsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy55MSA9IDIgKiBvcmJpcy5yO1xyXG4gICAgICAgIHRoaXMueDIgPSBwcm9qZWN0aW9uKGhvcml6b250aXMgLSBPcGFjdXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9wYWN1c1Byb2plY3Rpb25CID0ge1xyXG4gICAgaWQ6IFwib3BhY3VzUHJvamVjdGlvbkJcIixcclxuICAgIHgxOiAwLFxyXG4gICAgeTE6IG51bGwsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiAwLFxyXG4gICAgeDogbnVsbCxcclxuICAgIHk6IDAsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy55MSA9IDIgKiBvcmJpcy5yO1xyXG4gICAgICAgIHRoaXMueCA9IHByb2plY3Rpb24ob3Bwb3NpdGVBbmdsZShob3Jpem9udGlzICsgT3BhY3VzKSk7XHJcbiAgICAgICAgdGhpcy54MiA9IHRoaXMueDtcclxuICAgIH1cclxufTsiLCJpbXBvcnQge3F1YWRyYXRpY0VxdWF0aW9ufSBmcm9tIFwiLi9tYXRoXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0aW9uT2ZDaXJjbGVBbmRMaW5lKGNpcmNsZSwgcG9pbnRBLCBwb2ludEIpIHtcclxuICAgIHZhciBlcXVhdGlvbkNvbnN0YW50ID0gZ2VuZXJhbEVxdWF0aW9uQ29uc3RhbnRzT2ZMaW5lKHBvaW50QSwgcG9pbnRCKTtcclxuICAgIHZhciBhID0gZXF1YXRpb25Db25zdGFudC5hO1xyXG4gICAgdmFyIGIgPSBlcXVhdGlvbkNvbnN0YW50LmI7XHJcbiAgICB2YXIgYyA9IGVxdWF0aW9uQ29uc3RhbnQuYztcclxuXHJcbiAgICAvLyBjaXJjbGUgZXF1YXRpb24gKHggLSBtKTIgKyAoeSAtIG4pMiA9IHIyXHJcbiAgICB2YXIgbSA9IGNpcmNsZS5jeDtcclxuICAgIHZhciBuID0gY2lyY2xlLmN5O1xyXG4gICAgdmFyIHIgPSBjaXJjbGUucjtcclxuXHJcbiAgICAvLyBwcmVwYXJlIHBvd2VycyBvZiAyXHJcbiAgICB2YXIgYTIgPSBNYXRoLnBvdyhhLCAyKTtcclxuICAgIHZhciBiMiA9IE1hdGgucG93KGIsIDIpO1xyXG4gICAgdmFyIGMyID0gTWF0aC5wb3coYywgMik7XHJcbiAgICB2YXIgbTIgPSBNYXRoLnBvdyhtLCAyKTtcclxuICAgIHZhciBuMiA9IE1hdGgucG93KG4sIDIpO1xyXG4gICAgdmFyIHIyID0gTWF0aC5wb3cociwgMik7XHJcblxyXG4gICAgLy8gaW50ZXJzZWN0aW9uIG9mIGNpcmNsZSBhbmQgbGluZVxyXG4gICAgLy8gc2V0IG9mIHR3byBlcXVhdGlvbnMgbGVhZHMgdG8gYSBxdWFkcmF0aWMgZXF1YXRpb25cclxuICAgIC8vIEF4MiArIEJ4ICsgQyA9IDBcclxuICAgIC8vIHJlc3VsdHM6IHgxLCB4MlxyXG4gICAgdmFyIEEgPSBhMiArIGIyO1xyXG4gICAgdmFyIEIgPSAyICogKGMgKiBhICsgYSAqIGIgKiBuIC0gYjIgKiBtKTtcclxuICAgIHZhciBDID0gYjIgKiBtMiArIGMyICsgMiAqIGIgKiBjICogbiArIGIyICogbjIgLSBiMiAqIHIyO1xyXG4gICAgdmFyIHJlc3VsdCA9IHF1YWRyYXRpY0VxdWF0aW9uKEEsIEIsIEMpO1xyXG5cclxuICAgIC8vIGNvbXB1dGUgWSBjb29yZGluYXRpb25cclxuICAgIGZ1bmN0aW9uIGNvbXB1dGVZQ29vcmRpbmF0aW9uKHgpIHtcclxuICAgICAgICByZXR1cm4gKC1jIC0gYSAqIHgpIC8gYjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgeTEgPSBjb21wdXRlWUNvb3JkaW5hdGlvbihyZXN1bHQueDEpO1xyXG4gICAgdmFyIHkyID0gY29tcHV0ZVlDb29yZGluYXRpb24ocmVzdWx0LngyKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcDE6IHt4OiByZXN1bHQueDEsIHk6IHkxfSxcclxuICAgICAgICBwMjoge3g6IHJlc3VsdC54MiwgeTogeTJ9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmFsRXF1YXRpb25Db25zdGFudHNPZkxpbmUocG9pbnRBLCBwb2ludEIpIHtcclxuICAgIC8vIGRpcmVjdGlvbmFsIHZlY3RvclxyXG4gICAgdmFyIHN4ID0gcG9pbnRCLnggLSBwb2ludEEueDtcclxuICAgIHZhciBzeSA9IHBvaW50Qi55IC0gcG9pbnRBLnk7XHJcblxyXG4gICAgLy8gbm9ybWFsIHZlY3RvclxyXG4gICAgdmFyIG54ID0gLXN5O1xyXG4gICAgdmFyIG55ID0gc3g7XHJcblxyXG4gICAgLy8gbGluZSBlcXVhdGlvbiBheCArIGJ5ICtjID0gMFxyXG4gICAgdmFyIGEgPSBueDtcclxuICAgIHZhciBiID0gbnk7XHJcbiAgICB2YXIgYyA9IC1hICogcG9pbnRBLnggLSBiICogcG9pbnRBLnk7ICAgLy8gYW55IHBvaW50IG9uIHRoaXMgbGluZSAtIGhlcmUgcG9pbnRBXHJcblxyXG4gICAgcmV0dXJuIHthOiBhLCBiOiBiLCBjOiBjfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdGlvbk9mTGluZUFuZFhheGlzKGdlbmVyYWxFcXVhdGlvbkNvbnN0YW50cykge1xyXG4gICAgcmV0dXJuIC0gZ2VuZXJhbEVxdWF0aW9uQ29uc3RhbnRzLmMgLyBnZW5lcmFsRXF1YXRpb25Db25zdGFudHMuYTtcclxufSIsImltcG9ydCB7ZGVnMnJhZCwgcG9sYXIyQ2FydGVzaWFufSBmcm9tIFwiLi9tYXRoXCI7XHJcbmltcG9ydCB7XHJcbiAgICBjYW5jcmlUcm9waWN1cyxcclxuICAgIGNhcHJpY29ybmlUcm9waWN1cyxcclxuICAgIGNsaXBDaXJjbGVDYW5jcmlUcm9waWN1cyxcclxuICAgIGVxdWF0b3IsIGhvbGVDaXJjbGVPbGRUaW1lSW5uZXIsXHJcbiAgICBob2xlQ2lyY2xlWm9kaWFjdW1Jbm5lcixcclxuICAgIGxhdGl0dWRvSG9yaXpvbnRpcywgbWFza0NpcmNsZU9sZFRpbWVPdXRlcixcclxuICAgIG1hc2tDaXJjbGVab2RpYWN1bU91dGVyLCBvbGRUaW1lSW5uZXJDaXJjbGUsIG9sZFRpbWVPdXRlckNpcmNsZSxcclxuICAgIG9wYWN1c0hvcml6b250aXMsXHJcbiAgICBzY2FsZSxcclxuICAgIHpvZGlhY3VtQ2VudGVyUG9pbnRzLCB6b2RpYWN1bUVxdWlub3gsIHpvZGlhY3VtSW5uZXJDaXJjbGUsXHJcbiAgICB6b2RpYWN1bUlubmVyUG9pbnRzLCB6b2RpYWN1bU91dGVyQ2lyY2xlLFxyXG4gICAgem9kaWFjdW1PdXRlclBvaW50cyxcclxuICAgIHpvZGlhY3VtU29sc3RpY2VcclxufSBmcm9tIFwiLi9jbG9ja29ialwiO1xyXG5pbXBvcnQge2RlZzJzdW59IGZyb20gXCIuL3RpbWVcIjtcclxuXHJcblN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzY2FsZVBvaW50KHBvaW50KSB7XHJcbiAgICByZXR1cm4ge3g6IHNjYWxlKHBvaW50LngpLCB5OiBzY2FsZShwb2ludC55KX1cclxufVxyXG5mdW5jdGlvbiBzZXRYWUJ5SWQoaWQsIHgsIHkpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInhcIiAsIHgpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5XCIgLCB5KTtcclxufVxyXG5mdW5jdGlvbiBzZXRUcmFuc2xhdGVCeUlkKGlkLCB0cmFuc2xhdGUpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcclxuICAgICAgICBcInRyYW5zZm9ybVwiLCAndHJhbnNsYXRlKCcgKyB0cmFuc2xhdGUueCArICcsICcgKyB0cmFuc2xhdGUueSArICcpJ1xyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Um90YXRlQnlJZChpZCwgcm90YXRpb24sIGNlbnRlcikge1xyXG4gICAgbGV0IHJvdGF0aW9uQ2VudGVyID0gXCIwLDBcIjtcclxuICAgIGlmICh0eXBlb2YgY2VudGVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJvdGF0aW9uQ2VudGVyID0gY2VudGVyLnggKyBcIixcIiArIGNlbnRlci55O1xyXG4gICAgfVxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFtcInJvdGF0ZShcIiwgcm90YXRpb24sIFwiIFwiLCByb3RhdGlvbkNlbnRlciwgXCIpXCJdLmpvaW4oXCJcIikgICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0NpcmNsZShvYmopIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouaWQpO1xyXG4gICAgc2V0Q2lyY2xlQXR0cmlidXRlcyhlbGVtZW50LCBvYmouY3gsIG9iai5jeSwgb2JqLnIpO1xyXG4gICAgZGlzcGxheUlubGluZUJ5RWxlbWVudChlbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0xpbmUobGluZSkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpbmUuaWQpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBzY2FsZShsaW5lLngxKSk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInkxXCIsIHNjYWxlKGxpbmUueTEpKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwieDJcIiwgc2NhbGUobGluZS54MikpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBzY2FsZShsaW5lLnkyKSk7XHJcbiAgICBkaXNwbGF5SW5saW5lQnlFbGVtZW50KGVsZW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDaXJjbGVBdHRyaWJ1dGVzQnlJZChjaXJjbGVJZCwgY3gsIGN5LCByKSB7XHJcbiAgICBjb25zdCBjaXJjbGVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2lyY2xlSWQpO1xyXG4gICAgc2V0Q2lyY2xlQXR0cmlidXRlcyhjaXJjbGVFbGVtZW50LCBjeCwgY3ksIHIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDaXJjbGVBdHRyaWJ1dGVzKGNpcmNsZUVsZW1lbnQsIGN4LCBjeSwgcikge1xyXG4gICAgY2lyY2xlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJyXCIsIHNjYWxlKHIpKTtcclxuICAgIGNpcmNsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY3hcIiwgc2NhbGUoY3gpKTtcclxuICAgIGNpcmNsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY3lcIiwgc2NhbGUoY3kpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0R3JhZGllbnRBdHRyaWJ1dGVzKGdyYWRpZW50SWQsIGN4LCBjeSwgcikge1xyXG4gICAgY29uc3QgZ3JhZGllbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ3JhZGllbnRJZCk7XHJcbiAgICBzZXRDaXJjbGVBdHRyaWJ1dGVzKGdyYWRpZW50RWxlbWVudCwgY3gsIGN5LCByKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0NpcmNsZVdpdGhHcmFkaWVudChvYmopIHtcclxuICAgIGNvbnN0IGdyYWRpZW50SWQgPSBcImdyYWRpZW50XCIgKyBvYmouaWQuY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKCk7XHJcbiAgICBzZXRHcmFkaWVudEF0dHJpYnV0ZXMoZ3JhZGllbnRJZCwgb2JqLmN4LCBvYmouY3ksIG9iai5yKTtcclxuICAgIGRyYXdDaXJjbGUob2JqKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlJbmxpbmVCeUlkKGlkKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgZGlzcGxheUlubGluZUJ5RWxlbWVudChlbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlJbmxpbmVCeUVsZW1lbnQoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNwbGF5XCIsIFwiaW5saW5lXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU5vbmVCeUlkKGlkKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgZGlzcGxheU5vbmVCeUVsZW1lbnQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlOb25lQnlFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVTdmdCeUlkKGlkLCBhbmdsZURlZykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIGFuZ2xlRGVnICsgXCIpXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3Q2xvY2tBeGlzU3lzdGVtKCkge1xyXG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvY2tBeGlzU3lzdGVtXCIpO1xyXG4gICAgZS5zZXRBdHRyaWJ1dGUoXCJkaXNwbGF5XCIsIFwiaW5saW5lXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3Q2xvY2tOdW1iZXJzKCkge1xyXG4gICAgY29uc3QgciA9IHNjYWxlKGNhbmNyaVRyb3BpY3VzLnIpICogMC45O1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlclwiICsgaS50b1N0cmluZygpKTtcclxuICAgICAgICBjb25zdCBwb3NpdGlvbkVsZW1lbnQgPSAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3NpdGlvblwiICsgKyBpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlID0gaSAqIDE1O1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlUmFkID0gZGVnMnJhZChkZWcyc3VuKGFuZ2xlKSk7XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlUmFkKSAqIHI7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguc2luKGFuZ2xlUmFkKSAqIHI7XHJcbiAgICAgICAgcG9zaXRpb25FbGVtZW50LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHggKyBcIiBcIiArIHkgKyBcIilcIik7XHJcbiAgICAgICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKFwiICsgYW5nbGUgKyBcIiAwLDApXCIpO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheUlubGluZUJ5SWQoXCJjbG9ja1wiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVpvZGlhY3VtKGFuZ2xlRGVnKSB7ICAgLy8gYW5nbGVEZWcgZnJvbSBhdXR1bW4gZXF1aW5veCAgICgwIC4uLiBlcXVpbm94LCA5MCAuLi4gd2ludGVyIHNvbHN0aWNlKVxyXG4gICAgY29uc3Qgem9kaWFjdW1Hcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiem9kaWFjdW1cIik7XHJcbiAgICB6b2RpYWN1bUdyb3VwLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIGFuZ2xlRGVnICsgXCIpXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3Wm9kaWFjdW0oKSB7XHJcbiAgICBkcmF3Q2lyY2xlKG1hc2tDaXJjbGVab2RpYWN1bU91dGVyKTtcclxuICAgIGRyYXdDaXJjbGUoaG9sZUNpcmNsZVpvZGlhY3VtSW5uZXIpO1xyXG4gICAgZHJhd0NpcmNsZSh6b2RpYWN1bU91dGVyQ2lyY2xlKTtcclxuICAgIGRyYXdDaXJjbGUoem9kaWFjdW1Jbm5lckNpcmNsZSk7XHJcbiAgICBkcmF3TGluZSh6b2RpYWN1bUVxdWlub3gpO1xyXG4gICAgZHJhd0xpbmUoem9kaWFjdW1Tb2xzdGljZSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbGVmdE91dGVyID0gc2NhbGVQb2ludCh6b2RpYWN1bU91dGVyUG9pbnRzLnBvaW50W2ldKTtcclxuICAgICAgICBjb25zdCBsZWZ0SW5uZXIgPSBzY2FsZVBvaW50KHpvZGlhY3VtSW5uZXJQb2ludHMucG9pbnRbaV0pO1xyXG4gICAgICAgIGNvbnN0IGNlbnRlclBvaW50ID0gc2NhbGVQb2ludCh6b2RpYWN1bUNlbnRlclBvaW50cy5wb2ludFtpXSk7XHJcbiAgICAgICAgc2V0VHJhbnNsYXRlQnlJZChcInBvc2l0aW9uU2lnblwiICsgaSwgY2VudGVyUG9pbnQpO1xyXG4gICAgICAgIGNvbnN0IGlkID0gXCJzaWduXCIgKyBpO1xyXG4gICAgICAgIGNvbnN0IHNpZ24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgc2lnbi5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiMFwiKTtcclxuICAgICAgICBzaWduLnNldEF0dHJpYnV0ZShcInlcIiwgXCIwXCIpO1xyXG4gICAgICAgIHNpZ24uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMTBcIik7XHJcbiAgICAgICAgc2lnbi5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxMTBcIik7XHJcbiAgICAgICAgc2V0Um90YXRlQnlJZChpZCwgLWkgKiAzMCAtIDE1LCB7eDogMCwgeTogMH0pO1xyXG5cclxuICAgICAgICBjb25zdCBhcmNaID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcmNaXCIgKyBpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRCYXIgPSBbXCJNXCIsIGxlZnRPdXRlci54LCBsZWZ0T3V0ZXIueSwgXCJMXCIsIGxlZnRJbm5lci54LCBsZWZ0SW5uZXIueV0uam9pbignICcpO1xyXG4gICAgICAgIGNvbnN0IGR6ID0gW2xlZnRCYXJdLmpvaW4oJyAnKTtcclxuICAgICAgICBhcmNaLnNldEF0dHJpYnV0ZShcImRcIiwgZHopO1xyXG4gICAgICAgIGFyY1ouc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwib3JhbmdlXCIpO1xyXG4gICAgICAgIGFyY1ouc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMlwiKTtcclxuICAgICAgICBhcmNaLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0FzdHJvbm9taWNhbENsb2NrKCkge1xyXG4gICAgZHJhd0NpcmNsZShjbGlwQ2lyY2xlQ2FuY3JpVHJvcGljdXMpO1xyXG4gICAgZHJhd0NpcmNsZVdpdGhHcmFkaWVudChlcXVhdG9yKTtcclxuICAgIGRyYXdDaXJjbGVXaXRoR3JhZGllbnQoY2FuY3JpVHJvcGljdXMpO1xyXG4gICAgZHJhd0NpcmNsZVdpdGhHcmFkaWVudChjYXByaWNvcm5pVHJvcGljdXMpO1xyXG4gICAgZHJhd0NpcmNsZVdpdGhHcmFkaWVudChsYXRpdHVkb0hvcml6b250aXMpO1xyXG4gICAgZHJhd0NpcmNsZShvcGFjdXNIb3Jpem9udGlzKTtcclxuICAgIGRyYXdDbG9ja051bWJlcnMoKTtcclxuICAgIGRyYXdJbmZvVGV4dCgpO1xyXG4gICAgZHJhd1pvZGlhY3VtKCk7XHJcbiAgICBkcmF3T2xkVGltZSgpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NyaWJlQXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpIHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gcG9sYXIyQ2FydGVzaWFuKHgsIHksIHJhZGl1cywgZW5kQW5nbGUpO1xyXG4gICAgY29uc3QgZW5kID0gcG9sYXIyQ2FydGVzaWFuKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSk7XHJcbiAgICBjb25zdCBsYXJnZUFyY0ZsYWcgPSBlbmRBbmdsZSAtIHN0YXJ0QW5nbGUgPD0gMTgwID8gXCIwXCIgOiBcIjFcIjtcclxuICAgIHJldHVybiBkZXNjcmliZUFyY0J5Q2FydGVzaWFuKHN0YXJ0LCByYWRpdXMsIGxhcmdlQXJjRmxhZywgZW5kKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzY3JpYmVBcmNCeUNhcnRlc2lhbihzdGFydCwgcmFkaXVzLCBsYXJnZUFyY0ZsYWcsIGVuZCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBcIk1cIiwgcGFyc2VGbG9hdChzdGFydC54LnRvRml4ZWQoOCkpLCBwYXJzZUZsb2F0KHN0YXJ0LnkudG9GaXhlZCg4KSksXHJcbiAgICAgICAgXCJBXCIsIHJhZGl1cywgcmFkaXVzLCAwLCBsYXJnZUFyY0ZsYWcsIDAsIHBhcnNlRmxvYXQoZW5kLngudG9GaXhlZCg4KSksIHBhcnNlRmxvYXQoZW5kLnkudG9GaXhlZCg4KSlcclxuICAgIF0uam9pbihcIiBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdJbmZvVGV4dCgpIHtcclxuICAgIGNvbnN0IHIgPSBzY2FsZShlcXVhdG9yLnIpICogMS4xO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZm9cIiArIGkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgY29uc3QgYW5nbGUgPSBpICogOCAtIDYwO1xyXG4gICAgICAgIGNvbnN0IGFuZ2xlUmFkID0gZGVnMnJhZChkZWcyc3VuKGFuZ2xlKSk7XHJcbiAgICAgICAgY29uc3QgeCA9IE1hdGguY29zKGFuZ2xlUmFkKSAqIHI7XHJcbiAgICAgICAgY29uc3QgeSA9IE1hdGguc2luKGFuZ2xlUmFkKSAqIHI7XHJcbiAgICAgICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiIFwiICsgeSArIFwiKSByb3RhdGUoXCIgKyBhbmdsZSArIFwiIDAsMClcIik7XHJcbiAgICAgICAgZGlzcGxheUlubGluZUJ5SWQoXCJpbmZvXCIgKyBpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3T2xkVGltZSgpIHtcclxuICAgIGRyYXdDaXJjbGUobWFza0NpcmNsZU9sZFRpbWVPdXRlcik7XHJcbiAgICBkcmF3Q2lyY2xlKGhvbGVDaXJjbGVPbGRUaW1lSW5uZXIpO1xyXG4gICAgZHJhd0NpcmNsZShvbGRUaW1lT3V0ZXJDaXJjbGUpO1xyXG4gICAgZHJhd0NpcmNsZShvbGRUaW1lSW5uZXJDaXJjbGUpO1xyXG4gICAgY29uc3QgciA9IHNjYWxlKGNhbmNyaVRyb3BpY3VzLnIpICogMS4wMjtcclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMjU7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xkdGltZVwiICsgaS50b1N0cmluZygpKTtcclxuICAgICAgICBjb25zdCBhbmdsZSA9IChpIC0gMSkgKiAxNTtcclxuICAgICAgICBjb25zdCBhbmdsZVJhZCA9IGRlZzJyYWQoZGVnMnN1bihhbmdsZSkpO1xyXG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmNvcyhhbmdsZVJhZCkgKiByO1xyXG4gICAgICAgIGNvbnN0IHkgPSBNYXRoLnNpbihhbmdsZVJhZCkgKiByO1xyXG4gICAgICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiLTI1XCIpO1xyXG4gICAgICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiLTE1XCIpO1xyXG4gICAgICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjExMFwiKTtcclxuICAgICAgICBpbWFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTEwXCIpO1xyXG4gICAgICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIgXCIgKyB5ICsgXCIpIHJvdGF0ZShcIiArIGFuZ2xlICsgXCIgMCwwKVwiKTtcclxuICAgICAgICBkaXNwbGF5SW5saW5lQnlJZChcIm9sZHRpbWVcIiArIGkudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuLi9jc3MvYXN0cm8uY3NzJztcclxuaW1wb3J0ICcuL21hdGgnO1xyXG5pbXBvcnQgJy4vYW5pbWF0aW9ucyc7XHJcbmltcG9ydCAnLi9jbG9ja29iaic7XHJcbmltcG9ydCAnLi9jb25zdHJ1Y3Rpb24nO1xyXG5pbXBvcnQgJy4vZ2VvbWV0cnknO1xyXG5pbXBvcnQgJy4vZ3JhcGhpY3MnO1xyXG5pbXBvcnQgJy4vdGltZSc7XHJcbmltcG9ydCB7YmFja2dyb3VuZFJlc2l6ZSwgc2V0QmFja2dyb3VuZFBvc2l0aW9uWH0gZnJvbSBcIi4vem9vZGlhYy1wYWludGluZ3NcIjtcclxucmVxdWlyZSgnZmlsZS1sb2FkZXI/bmFtZT1bbmFtZV0uW2V4dF0hLi9pbmRleC5odG1sJyk7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgY29uc3RydWN0QXN0cm9ub21pY2FsQ2xvY2ssXHJcbiAgICBtb29uSGFuZGxlLCBtb29uU2hhcGUsXHJcbiAgICBtb29uU3ltYm9sLFxyXG4gICAgc2NhbGUsXHJcbiAgICBzdGFyU3ltYm9sLFxyXG4gICAgc3VuSGFuZGxlLFxyXG4gICAgc3VuU3ltYm9sLFxyXG4gICAgem9kaWFjdW1cclxufSBmcm9tIFwiLi9jbG9ja29ialwiO1xyXG5pbXBvcnQge2RlZzJyYWQsIG5vcm1hbGl6ZUFuZ2xlRGVnLCBxdWFkcmF0aWNFcXVhdGlvbn0gZnJvbSBcIi4vbWF0aFwiO1xyXG5pbXBvcnQgKiBhcyBteU1hdGggZnJvbSBcIi4vbWF0aFwiO1xyXG5pbXBvcnQge2Rpc3BsYXlJbmxpbmVCeUlkLCBkcmF3QXN0cm9ub21pY2FsQ2xvY2ssIHJvdGF0ZVpvZGlhY3VtfSBmcm9tIFwiLi9ncmFwaGljc1wiO1xyXG5pbXBvcnQge2FzdHJvbm9taWNhbENsb2NrVGltZSwgZGF0ZVRvU3VuVGltZUFuZ2xlLCBkYXlsaWdodFNhdmluZ1RpbWVTd2l0Y2gsIHN1bjJkZWd9IGZyb20gXCIuL3RpbWVcIjtcclxuaW1wb3J0IHtcclxuICAgIHN0YXJ0QW5pbWF0ZURheWxpZ2h0U2F2aW5nVGltZU9mZiwgc3RhcnRBbmltYXRlRGF5bGlnaHRTYXZpbmdUaW1lT24sXHJcbiAgICBzdGFydEFzdHJvbm9taWNhbENsb2NrLFxyXG4gICAgc3RvcEFzdHJvbm9taWNhbENsb2NrXHJcbn0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xyXG5cclxudmFyIGxhc3RUb3VjaE1vdmVYO1xyXG52YXIgbGFzdFRvdWNoTW92ZVk7XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlUG9zaXRpb25PbkVjbGlwc2UoYW5nbGVEZWcsIHpvZGlhY3VtKSB7XHJcbiAgICB2YXIgbm9ybWFsaXplZEFuZ2xlID0gbm9ybWFsaXplQW5nbGVEZWcoYW5nbGVEZWcpO1xyXG4gICAgdmFyIG0gPSB6b2RpYWN1bS5jeDtcclxuICAgIHZhciBuID0gem9kaWFjdW0uY3k7XHJcbiAgICB2YXIgciA9IHpvZGlhY3VtLnI7XHJcbiAgICB2YXIgeHlTeXN0ZW0gPSB0cnVlO1xyXG4gICAgaWYgKCFteU1hdGguaXNFYXN5Rm9yVGFuZ2VudHMobm9ybWFsaXplZEFuZ2xlKSkge1xyXG4gICAgICAgIG5vcm1hbGl6ZWRBbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlRGVnKG5vcm1hbGl6ZWRBbmdsZSAtIDkwKTtcclxuICAgICAgICBtID0gW24sIG49LW1dWzBdOyAgICAvLyBtID0gbiwgbiA9IC1tXHJcbiAgICAgICAgeHlTeXN0ZW0gPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHZhciBwaGkgPSBkZWcycmFkKG5vcm1hbGl6ZWRBbmdsZSk7XHJcbiAgICB2YXIgdGdQaGkgPSBNYXRoLnRhbihwaGkpO1xyXG4gICAgdmFyIGEgPSAxICsgTWF0aC5wb3codGdQaGksIDIpO1xyXG4gICAgdmFyIGIgPSAtMiAqIChtICsgbiAqIHRnUGhpKTtcclxuICAgIHZhciBjID0gbSAqIG0gKyBuICogbiAtIHIgKiByO1xyXG4gICAgdmFyIHggPSAwO1xyXG4gICAgaWYgKG5vcm1hbGl6ZWRBbmdsZSA8PSA0NSAmJiBub3JtYWxpemVkQW5nbGUgPiAtNDUpIHtcclxuICAgICAgICB4ID0gcXVhZHJhdGljRXF1YXRpb24oYSwgYiwgYykueDE7XHJcbiAgICB9XHJcbiAgICBpZiAobm9ybWFsaXplZEFuZ2xlID4gMTM1IHx8IG5vcm1hbGl6ZWRBbmdsZSA8PSAtMTM1KSB7XHJcbiAgICAgICAgeCA9IHF1YWRyYXRpY0VxdWF0aW9uKGEsIGIsIGMpLngyO1xyXG4gICAgfVxyXG4gICAgbGV0IHkgPSB0Z1BoaSAqIHg7XHJcbiAgICBpZiAoIXh5U3lzdGVtKSB7XHJcbiAgICAgICAgLy9ub2luc3BlY3Rpb24gSlNTdXNwaWNpb3VzTmFtZUNvbWJpbmF0aW9uXHJcbiAgICAgICAgeCA9IFsteSwgeSA9IHhdWzBdOyAgICAvLyB4ID0gLSB5LCB5ID0geFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHt4OiBzY2FsZSh4KSwgeTogc2NhbGUoeSl9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVab2RpYWN1bUFuZ2xlRGVnKGRhdGUpIHtcclxuICAgIHZhciBlcXVpbm94RGF0ZSA9IG5ldyBEYXRlKDIwMTYsOCwyMiwxMCwyMik7ICAgIC8vIGF1dHVtbiBlcXVpbm94XHJcbiAgICAvLyB2YXIgZXF1aW5veERhdGUgPSBuZXcgRGF0ZSgyMDE2LDIsMjAsNSwzMSk7ICAgIC8vIHNwcmluZyBlcXVpbm94XHJcbiAgICB2YXIgZWggPSBlcXVpbm94RGF0ZS5nZXRIb3VycygpO1xyXG4gICAgdmFyIGVtID0gZXF1aW5veERhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgdmFyIGVxdWlub3hUaW1lQW5nbGUgPSBlaCAqIDE1ICsgZW0gLyA0O1xyXG4gICAgdmFyIHRpbWV6b25lQW5nbGUgPSBhc3Ryb25vbWljYWxDbG9ja1RpbWUudGltZXpvbmUgKiAxNTtcclxuICAgIHZhciB0aW1lRGlmZkRheXMgPSAoZGF0ZS5nZXRUaW1lKCkgLSBlcXVpbm94RGF0ZS5nZXRUaW1lKCkpIC8gNjAwMDAgLyA2MCAvMjQ7XHJcbiAgICB2YXIgYW5nbGVDb3JyZWN0aW9uID0gLSAxLjUgKiBNYXRoLmNvcyh0aW1lRGlmZkRheXMgLyAzNjUuMjUgKiAyICogTWF0aC5QSSkgKyAxLjU7XHJcbiAgICByZXR1cm4gKHRpbWVEaWZmRGF5cyAqIDM2MCAqIDM2Ni4yNSAvIDM2NS4yNSArIGVxdWlub3hUaW1lQW5nbGUgLSB0aW1lem9uZUFuZ2xlICsgYW5nbGVDb3JyZWN0aW9uKSAlIDM2MDtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZU1vb25BbmdsZURlZyhkYXRlKSB7XHJcbiAgICB2YXIgc3lub2RpY01vb24gPSAyOS41MzA1ODg4NTM7ICAgICAvLyBkYXlzXHJcbiAgICB2YXIgZGF5U3BlZWQgPSAoc3lub2RpY01vb24gLSAxKSAvIHN5bm9kaWNNb29uO1xyXG4gICAgdmFyIGFOZXdNb29uRGF0ZSA9IG5ldyBEYXRlKDIwMTYsIDgsIDEsIDExLCAzLCAwKTtcclxuICAgIHZhciB0aW1lRGlmZmVyZW5jZSA9IGRhdGUuZ2V0VGltZSgpIC0gYU5ld01vb25EYXRlLmdldFRpbWUoKTtcclxuICAgIHZhciB0aW1lRGlmZk1pbnMgPSB0aW1lRGlmZmVyZW5jZSAvIDYwMDAwO1xyXG4gICAgdmFyIHRpbWVEaWZmSG91cnMgPSB0aW1lRGlmZk1pbnMgLyA2MDtcclxuICAgIHZhciB0aW1lRGlmZkRheXMgPSB0aW1lRGlmZkhvdXJzIC8gMjQ7XHJcbiAgICByZXR1cm4gKHRpbWVEaWZmRGF5cyAqIGRheVNwZWVkICogMzYwICsgZGF0ZVRvU3VuVGltZUFuZ2xlKGFOZXdNb29uRGF0ZSkpICUgMzYwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93RGlnaXRhbFRpbWUoKSB7XHJcbiAgICB2YXIgZCA9IGFzdHJvbm9taWNhbENsb2NrVGltZS50b0RhdGUoKTtcclxuICAgIGlmIChhc3Ryb25vbWljYWxDbG9ja1RpbWUuZHN0KCkgJiYgIWRheWxpZ2h0U2F2aW5nVGltZVN3aXRjaC5zdGF0dXMpIHtcclxuICAgICAgICBkID0gbmV3IERhdGUoYXN0cm9ub21pY2FsQ2xvY2tUaW1lLm51bWJlciAtIDM2MDAwMDApO1xyXG4gICAgfVxyXG4gICAgdmFyIHRpbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lXCIpO1xyXG4gICAgdmFyIHRpbWV6b25lID0gYXN0cm9ub21pY2FsQ2xvY2tUaW1lLnRpbWV6b25lO1xyXG4gICAgdGltZUVsZW1lbnQuaW5uZXJUZXh0ID0gZC50b0xvY2FsZVN0cmluZygpICsgXCIgVGltZXpvbmU6IFwiICsgKCh0aW1lem9uZSA+IDApID8gXCIrXCIgOiBcIi1cIikgKyB0aW1lem9uZSArXHJcbiAgICBcIiBEU1Q6IFwiICsgKGFzdHJvbm9taWNhbENsb2NrVGltZS5kc3QoKSA/IFwiT05cIiA6IFwiT0ZGXCIpO1xyXG4gICAgZGF5bGlnaHRTYXZpbmdUaW1lU3dpdGNoLmRyYXcoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBc3Ryb25vbWljYWxUb2RheVRpbWUoKSB7XHJcbiAgICBhc3Ryb25vbWljYWxDbG9ja1RpbWUudXBkYXRlKCk7XHJcbiAgICBzaG93QXN0cm9ub21pY2FsVGltZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FzdHJvbm9taWNhbFRpbWUoKSB7XHJcbiAgICB2YXIgZCA9IGFzdHJvbm9taWNhbENsb2NrVGltZS50b0RhdGUoKTtcclxuICAgIHZhciB6b2RpYWN1bUFuZ2xlRGVnID0gY29tcHV0ZVpvZGlhY3VtQW5nbGVEZWcoZCk7XHJcbiAgICB2YXIgc3VuQW5nbGVEZWcgPSBzdW4yZGVnKGRhdGVUb1N1blRpbWVBbmdsZShkKSk7XHJcbiAgICB2YXIgbW9vbkFuZ2xlRGVnID0gc3VuMmRlZyhjb21wdXRlTW9vbkFuZ2xlRGVnKGQpKTtcclxuICAgIHJvdGF0ZVpvZGlhY3VtKHpvZGlhY3VtQW5nbGVEZWcpO1xyXG4gICAgem9kaWFjdW0uY29tcHV0ZSh6b2RpYWN1bUFuZ2xlRGVnKTtcclxuICAgIHZhciBzdW4gPSBjb21wdXRlUG9zaXRpb25PbkVjbGlwc2Uoc3VuQW5nbGVEZWcsIHpvZGlhY3VtKTtcclxuICAgIHN1bkhhbmRsZS5zaG93QnlUaW1lKGQpO1xyXG4gICAgc3VuU3ltYm9sLnNob3dBdChzdW4ueCwgc3VuLnkpO1xyXG4gICAgc3RhclN5bWJvbC5zaG93KCk7XHJcbiAgICB2YXIgbW9vbiA9IGNvbXB1dGVQb3NpdGlvbk9uRWNsaXBzZShtb29uQW5nbGVEZWcsIHpvZGlhY3VtKTtcclxuICAgIG1vb25IYW5kbGUuc2hvdyhtb29uQW5nbGVEZWcpO1xyXG4gICAgbW9vblNoYXBlLmNvbXB1dGUoc3VuQW5nbGVEZWcsIG1vb25BbmdsZURlZyk7XHJcbiAgICBtb29uU3ltYm9sLnNob3dBdChtb29uLngsIG1vb24ueSwgbW9vbkFuZ2xlRGVnICsgOTApO1xyXG4gICAgc2hvd0RpZ2l0YWxUaW1lKCk7XHJcbiAgICBzZXRCYWNrZ3JvdW5kUG9zaXRpb25YKG5vcm1hbGl6ZUFuZ2xlRGVnKGRhdGVUb1N1blRpbWVBbmdsZShkKS16b2RpYWN1bUFuZ2xlRGVnKSArIDE4MCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRheWxpZ2h0U2F2aW5nVGltZU9uKCkge1xyXG4gICAgZGF5bGlnaHRTYXZpbmdUaW1lU3dpdGNoLm1ha2VVbmNsaWNrYWJsZSgpO1xyXG4gICAgc3RhcnRBbmltYXRlRGF5bGlnaHRTYXZpbmdUaW1lT24oKTtcclxuICAgIGRheWxpZ2h0U2F2aW5nVGltZVN3aXRjaC5vbigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXlsaWdodFNhdmluZ1RpbWVPZmYoKSB7XHJcbiAgICBkYXlsaWdodFNhdmluZ1RpbWVTd2l0Y2gubWFrZVVuY2xpY2thYmxlKCk7XHJcbiAgICBzdGFydEFuaW1hdGVEYXlsaWdodFNhdmluZ1RpbWVPZmYoKTtcclxuICAgIGRheWxpZ2h0U2F2aW5nVGltZVN3aXRjaC5vZmYoKTtcclxufVxyXG5cclxuY29uc3RydWN0QXN0cm9ub21pY2FsQ2xvY2soKTtcclxuZHJhd0FzdHJvbm9taWNhbENsb2NrKCk7XHJcblxyXG5hc3Ryb25vbWljYWxDbG9ja1RpbWUuaW5pdCgpO1xyXG5kYXlsaWdodFNhdmluZ1RpbWVTd2l0Y2guaW5pdCgpO1xyXG5pZiAoZGF5bGlnaHRTYXZpbmdUaW1lU3dpdGNoLnN0YXR1cykge1xyXG4gICAgZGF5bGlnaHRTYXZpbmdUaW1lT2ZmKCk7XHJcbn1cclxuXHJcbnNob3dBc3Ryb25vbWljYWxUb2RheVRpbWUoKTtcclxuZGlzcGxheUlubGluZUJ5SWQoXCJ6b2RpYWN1bVwiKTtcclxuZGlzcGxheUlubGluZUJ5SWQoXCJtb29uUGhhc2VcIik7XHJcbmRpc3BsYXlJbmxpbmVCeUlkKFwic3VuU3ltYm9sXCIpO1xyXG5cclxuLy8gTGlzdGVuZXJzXHJcbmFkZFdoZWVsTGlzdGVuZXIoXCJ6b2RpYWN1bVwiLCB6b2RpYWNXaGVlbCk7XHJcbmFkZFdoZWVsTGlzdGVuZXIoXCJ0aW1lXCIsIHN1bldoZWVsKTtcclxuYWRkVG91Y2hNb3ZlKFwiY29udGFpbmVyXCIsIHRvdWNoTW92ZSk7XHJcbmFkZFRvdWNoTW92ZShcImJhY2tncm91bmQtem9kaWFjXCIsIHRvdWNoTW92ZSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBzaG93QXN0cm9ub21pY2FsVGltZSgpO1xyXG4gICAgYmFja2dyb3VuZFJlc2l6ZSgpO1xyXG59KTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpICB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICAgIHByZXNzZWRFc2MoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuLy8gdcSNZXNhdFxyXG52YXIgem9kaWFjdW1TbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInpvZGlhY3VtU2xpZGVyXCIpO1xyXG56b2RpYWN1bVNsaWRlci5vbmlucHV0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBzdG9wQXN0cm9ub21pY2FsQ2xvY2soKTtcclxuICAgIGFzdHJvbm9taWNhbENsb2NrVGltZS51cGRhdGUoKTtcclxuICAgIGFzdHJvbm9taWNhbENsb2NrVGltZS5hZGREYXlzKHRoaXMudmFsdWUpO1xyXG4gICAgc2hvd0FzdHJvbm9taWNhbFRpbWUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkV2hlZWxMaXN0ZW5lcihpZCwgd2hlZWxGdW5jdGlvbikge1xyXG4gICAgLy8gWm9kaWFjdW0gKHllYXIgY3ljbGUpXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcilcclxuICAgIHtcclxuICAgICAgICAvLyBJRTksIENocm9tZSwgU2FmYXJpLCBPcGVyYVxyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgd2hlZWxGdW5jdGlvbiwgZmFsc2UpO1xyXG4gICAgICAgIC8vIEZpcmVmb3hcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Nb3VzZVNjcm9sbFwiLCB3aGVlbEZ1bmN0aW9uLCBmYWxzZSk7XHJcbiAgICB9XHJcbi8vIElFIDYvNy84XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudChcIm9ubW91c2V3aGVlbFwiLCB3aGVlbEZ1bmN0aW9uKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkVG91Y2hNb3ZlKGlkLCB0b3VjaE1vdmVGdW5jdGlvbikge1xyXG4gICAgLy8gWm9kaWFjdW0gKHllYXIgY3ljbGUpXHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgaWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0b3VjaE1vdmVGdW5jdGlvbiwgZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB6b2RpYWNXaGVlbChlKVxyXG57XHJcbiAgICAvLyBjcm9zcy1icm93c2VyIHdoZWVsIGRlbHRhXHJcbiAgICB2YXIgZSA9IHdpbmRvdy5ldmVudCB8fCBlOyAvLyBvbGQgSUUgc3VwcG9ydFxyXG4gICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIChlLndoZWVsRGVsdGEgfHwgLWUuZGV0YWlsKSkpO1xyXG4gICAgYXBpQWRkRGF5cygtZGVsdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdW5XaGVlbChlKVxyXG57XHJcbiAgICAvLyBjcm9zcy1icm93c2VyIHdoZWVsIGRlbHRhXHJcbiAgICB2YXIgZSA9IHdpbmRvdy5ldmVudCB8fCBlOyAvLyBvbGQgSUUgc3VwcG9ydFxyXG4gICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIChlLndoZWVsRGVsdGEgfHwgLWUuZGV0YWlsKSkpO1xyXG4gICAgYXBpQWRkTWludXRlcygtIGRlbHRhICogMjApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvdWNoTW92ZShlKVxyXG57XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgeCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgbGV0IHkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgIGxldCBkZWx0YURheXMgPSAwO1xyXG4gICAgbGV0IGRlbHRhTWludXRlcyA9IDA7XHJcbiAgICBsZXQgZGVsdGFYID0geCAtIGxhc3RUb3VjaE1vdmVYO1xyXG4gICAgbGV0IGRlbHRhWSA9IHkgLSBsYXN0VG91Y2hNb3ZlWTtcclxuICAgIGNvbnN0IG1pbmltYWxTdGVwID0gMTtcclxuICAgIGlmIChNYXRoLmFicyhkZWx0YVgpID4gTWF0aC5hYnMoZGVsdGFZKSkge1xyXG4gICAgICAgIGlmICh4IDwgbGFzdFRvdWNoTW92ZVggLSBtaW5pbWFsU3RlcCkge1xyXG4gICAgICAgICAgICBkZWx0YURheXMgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHggPiBsYXN0VG91Y2hNb3ZlWCArIG1pbmltYWxTdGVwKSB7XHJcbiAgICAgICAgICAgIGRlbHRhRGF5cyA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgaWYgKHkgPCBsYXN0VG91Y2hNb3ZlWSAtIG1pbmltYWxTdGVwKSB7XHJcbiAgICAgICAgICAgIGRlbHRhTWludXRlcyA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoeSA+IGxhc3RUb3VjaE1vdmVZICsgbWluaW1hbFN0ZXApIHtcclxuICAgICAgICAgICAgZGVsdGFNaW51dGVzID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFRvdWNoTW92ZVggPSB4O1xyXG4gICAgbGFzdFRvdWNoTW92ZVkgPSB5O1xyXG5cclxuICAgIGFwaUFkZERheXMoZGVsdGFEYXlzKTtcclxuICAgIGFwaUFkZE1pbnV0ZXMoLSBkZWx0YU1pbnV0ZXMgKiAxMClcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlc3NlZEVzYygpIHtcclxuICAgIHN0YXJ0QXN0cm9ub21pY2FsQ2xvY2soKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBpQWRkRGF5cyhkYXlzKSB7XHJcbiAgICBzdG9wQXN0cm9ub21pY2FsQ2xvY2soKTtcclxuICAgIGFzdHJvbm9taWNhbENsb2NrVGltZS5hZGREYXlzKGRheXMpO1xyXG4gICAgc2hvd0FzdHJvbm9taWNhbFRpbWUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBpQWRkTWludXRlcyhtaW51dGVzKSB7XHJcbiAgICBzdG9wQXN0cm9ub21pY2FsQ2xvY2soKTtcclxuICAgIGFzdHJvbm9taWNhbENsb2NrVGltZS5hZGRNaW51dGVzKG1pbnV0ZXMpO1xyXG4gICAgc2hvd0FzdHJvbm9taWNhbFRpbWUoKTtcclxufVxyXG5cclxud2luZG93LmRheWxpZ2h0U2F2aW5nVGltZU9mZiA9IGRheWxpZ2h0U2F2aW5nVGltZU9mZjtcclxud2luZG93LmRheWxpZ2h0U2F2aW5nVGltZU9uID0gZGF5bGlnaHRTYXZpbmdUaW1lT247XHJcblxyXG5zdGFydEFzdHJvbm9taWNhbENsb2NrKCk7XHJcbmJhY2tncm91bmRSZXNpemUoKTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlZzJyYWQoZGVnKSB7XHJcbiAgICByZXR1cm4gZGVnICogTWF0aC5QSSAvIDE4MDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wcG9zaXRlQW5nbGUocmFkKSB7XHJcbiAgICByZXR1cm4gTWF0aC5QSSArIHJhZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvbGFyMkNhcnRlc2lhbihjZW50ZXJYLCBjZW50ZXJZLCByYWRpdXMsIGFuZ2xlRGVnKSB7XHJcbiAgICBjb25zdCBhbmdsZVJhZCA9IGRlZzJyYWQoYW5nbGVEZWcpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgeDogY2VudGVyWCArIChyYWRpdXMgKiBNYXRoLmNvcyhhbmdsZVJhZCkpLFxyXG4gICAgICAgIHk6IGNlbnRlclkgKyAocmFkaXVzICogTWF0aC5zaW4oYW5nbGVSYWQpKVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHF1YWRyYXRpY0VxdWF0aW9uKGEsIGIsIGMpIHtcclxuICAgIGNvbnN0IGQgPSBxdWFkcmF0aWNEaXNjcmltaW5hbnQoYSwgYiwgYyk7XHJcbiAgICBpZiAoZCA+PSAwKSB7XHJcbiAgICAgICAgY29uc3QgYTIgPSAyICogYTtcclxuICAgICAgICBjb25zdCBzcXJ0RCA9IE1hdGguc3FydChkKTtcclxuICAgICAgICBjb25zdCB4MSA9ICgtYiArIHNxcnREKSAvIGEyO1xyXG4gICAgICAgIGNvbnN0IHgyID0gKC1iIC0gc3FydEQpIC8gYTI7XHJcbiAgICAgICAgcmV0dXJuIHt4MTogeDEsIHgyOiB4Mn07XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1YWRyYXRpY0Rpc2NyaW1pbmFudChhLCBiLCBjKSB7XHJcbiAgICByZXR1cm4gYiAqIGIgLSA0ICogYSAqIGM7XHJcbn1cclxuXHJcbi8vIGNvbnZlcnNpb24gb2YgYW5nbGUgYWJvdmUgMTgwIGRlZyBhbmQgYmVsb3cgLTE4MCBkZWdcclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUFuZ2xlRGVnKGFuZ2xlRGVnKSB7XHJcbiAgICBjb25zdCBhbmdsZSA9IGFuZ2xlRGVnICUgMzYwO1xyXG4gICAgaWYgKGFuZ2xlID4gMTgwKSB7XHJcbiAgICAgICAgcmV0dXJuIGFuZ2xlIC0gMzYwOyAvLyBjb252ZXJ0ZWQgdG8gbmVnYXRpdmUgYW5nbGUgKDAuLi4tMTgwKVxyXG4gICAgfVxyXG4gICAgaWYgKGFuZ2xlIDwgLTE4MCkge1xyXG4gICAgICAgIHJldHVybiBhbmdsZSArIDM2MDsgLy8gY29udmVydGVkIHRvIHBvc2l0aXZlIGFuZ2xlICgwLi4uMTgwKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFuZ2xlOyAgIC8vIGNhbiBiZSBiZXR3ZWVuIC0xODAgYW5kIDE4MFxyXG59XHJcblxyXG4vLyByZXR1cm4gdHJ1ZSBpZiBhbmdsZSBpcyBiZXR3ZWVuIC00NSBhbmQgNDUgZGVnIG9yIGJldHdlZW4gMTM1IGFuZCAyMjUgZGVnLlxyXG5leHBvcnQgZnVuY3Rpb24gaXNFYXN5Rm9yVGFuZ2VudHMoYW5nbGVEZWcpIHtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRBbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlRGVnKGFuZ2xlRGVnKTtcclxuICAgIGlmIChub3JtYWxpemVkQW5nbGUgPiAtNDUgJiYgbm9ybWFsaXplZEFuZ2xlIDw9IDQ1KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKG5vcm1hbGl6ZWRBbmdsZSA+IDEzNSB8fCBub3JtYWxpemVkQW5nbGUgPD0gLTEzNSk7XHJcbn1cclxuIiwiZXhwb3J0IHZhciBhc3Ryb25vbWljYWxDbG9ja1RpbWUgPSB7XHJcbiAgICBudW1iZXI6IG51bGwsXHJcbiAgICB0aW1lem9uZTogbnVsbCxcclxuICAgIGFkZERheXM6IGZ1bmN0aW9uIChkYXlzKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgKz0gZGF5cyAqIDI0ICogMzYwMDAwMDtcclxuICAgIH0sXHJcbiAgICBhZGRIb3VyczogZnVuY3Rpb24gKGhvdXJzKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgKz0gaG91cnMgKiAzNjAwMDAwO1xyXG4gICAgfSxcclxuICAgIGFkZE1pbnV0ZXM6IGZ1bmN0aW9uIChtaW51dGVzKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgKz0gbWludXRlcyAqIDYwMDAwO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB9LFxyXG4gICAgdG9EYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMubnVtYmVyKTtcclxuICAgIH0sXHJcbiAgICBkc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3RkT2Zmc2V0ID0gdGhpcy5zdGRUaW1lT2Zmc2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9EYXRlKCkuZ2V0VGltZXpvbmVPZmZzZXQoKSA8IHN0ZE9mZnNldDtcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLnRpbWV6b25lID0gLSB0aGlzLnN0ZFRpbWVPZmZzZXQoKSAvIDYwO1xyXG4gICAgfSxcclxuICAgIHN0ZFRpbWVPZmZzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgamFuID0gbmV3IERhdGUodGhpcy50b0RhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICB2YXIganVsID0gbmV3IERhdGUodGhpcy50b0RhdGUoKS5nZXRGdWxsWWVhcigpLCA2LCAxKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoamFuLmdldFRpbWV6b25lT2Zmc2V0KCksIGp1bC5nZXRUaW1lem9uZU9mZnNldCgpKTtcclxuICAgIH0sXHJcbiAgICBnZXREYXlzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXIgLyAyNCAvIDM2MDAwMDA7XHJcbiAgICB9XHJcbn07XHJcblxyXG4gICAgLy8gcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKDIwMTcsOCwyMiwxNywyNCkpO1xyXG4gICAgLy8gcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKDIwMTcsMiwyMCwxMSwzMCkpO1xyXG4gICAgLy8gcmV0dXJuIG5ldyBEYXRlKDIwMTcsMiwyMCwxMSwzMCk7XHJcbiAgICAvLyByZXR1cm4gbmV3IERhdGUoMjAxNyw1LDIxLDE3LDI0KTtcclxuICAgIC8vICByZXR1cm4gbmV3IERhdGUoMjAxNyw4LDIyLDE3LDI0KTtcclxuXHJcbi8vIENvbnZlcnQgYW5nbGUgb2Ygc3VuIHRpbWUgdG8gbm9ybWFsIGFuZ2xlLlxyXG4vLyAwIC4uLiBNaWRuaWdodCAoOTAgZGVnKSwgMTgwIC4uLiBOb29uICgyNzAgZGVnKVxyXG5leHBvcnQgZnVuY3Rpb24gc3VuMmRlZyhzdW5BbmdsZSkge1xyXG4gICAgcmV0dXJuIChzdW5BbmdsZSArIDkwKSAlIDM2MDtcclxufVxyXG5cclxuLy8gQ29udmVydCBub3JtYWwgYW5nbGUgdG8gc3VuIHRpbWUgYW5nbGUuXHJcbi8vIDkwIGRlZyAoTWlkbmlnaHQpIC4uLiAwLCAyNzAgZGVnIChOb29uKSAuLi4gMTgwXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWcyc3VuKGFuZ2xlRGVnKSB7XHJcbiAgICByZXR1cm4gKGFuZ2xlRGVnICsgMjcwKSAlIDM2MDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb1N1blRpbWVBbmdsZShkYXRlKSB7XHJcbiAgICByZXR1cm4gKGRhdGUuZ2V0VVRDTWludXRlcygpICsgKGRhdGUuZ2V0VVRDSG91cnMoKSAgKyBhc3Ryb25vbWljYWxDbG9ja1RpbWUudGltZXpvbmUpICogNjApIC8gNFxyXG59XHJcblxyXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExODg3OTM0L2NoZWNrLWlmLWRheWxpZ2h0LXNhdmluZy10aW1lLWlzLWluLWVmZmVjdC1hbmQtaWYtaXQtaXMtZm9yLWhvdy1tYW55LWhvdXJzXHJcblxyXG5EYXRlLnByb3RvdHlwZS5zdGRUaW1lem9uZU9mZnNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGphbiA9IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICB2YXIganVsID0gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCA2LCAxKTtcclxuICAgIHJldHVybiBNYXRoLm1heChqYW4uZ2V0VGltZXpvbmVPZmZzZXQoKSwganVsLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xyXG59O1xyXG5cclxuRGF0ZS5wcm90b3R5cGUuZHN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRUaW1lem9uZU9mZnNldCgpIDwgdGhpcy5zdGRUaW1lem9uZU9mZnNldCgpO1xyXG59O1xyXG5cclxuRGF0ZS5wcm90b3R5cGUuYWRkSG91cnMgPSBmdW5jdGlvbihoKSB7XHJcbiAgIHRoaXMuc2V0VGltZSh0aGlzLmdldFRpbWUoKSArIChoKjYwKjYwKjEwMDApKTtcclxuICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGRheWxpZ2h0U2F2aW5nVGltZVN3aXRjaCA9IHtcclxuICAgIGlkOiBcImRzdFN3aXRjaFwiLFxyXG4gICAgc3RhdHVzOiBmYWxzZSxcclxuICAgIGNsaWNrYWJsZTogZmFsc2UsXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IGFzdHJvbm9taWNhbENsb2NrVGltZS5kc3QoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZSgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdXNwZW5kKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBvZmY6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2thYmxlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgZHN0U3dpdGNoT24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRzdE9uXCIpO1xyXG4gICAgICAgIGRzdFN3aXRjaE9uLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgXCJkYXlsaWdodFNhdmluZ1RpbWVPZmYoKVwiKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH0sXHJcbiAgICBzdXNwZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBkc3RTd2l0Y2hPZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRzdE9mZlwiKTtcclxuICAgICAgICBkc3RTd2l0Y2hPZmYuc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcIlwiKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH0sXHJcbiAgICBkcmF3OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZHN0U3dpdGNoT2ZmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkc3RPZmZcIik7XHJcbiAgICAgICAgdmFyIGRzdFN3aXRjaE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkc3RPblwiKTtcclxuICAgICAgICBkc3RTd2l0Y2hPZmYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5jbGlja2FibGUgPyBcImNsaWNrYWJsZVwiIDogXCJ1bmNsaWNrYWJsZVwiKTtcclxuICAgICAgICBkc3RTd2l0Y2hPbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLmNsaWNrYWJsZSA/IFwiY2xpY2thYmxlXCIgOiBcInVuY2xpY2thYmxlXCIpO1xyXG4gICAgICAgIHZhciBvZmYgPSBcImRpc3BsYXk6IG5vbmVcIjtcclxuICAgICAgICB2YXIgb24gPSBcImRpc3BsYXk6IGlubGluZVwiO1xyXG4gICAgICAgIHZhciBkc3RPZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRzdE9mZlwiKTtcclxuICAgICAgICBkc3RPZmYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdGhpcy5zdGF0dXMgPyBvZmYgOiBvbik7XHJcbiAgICAgICAgdmFyIGRzdE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkc3RPblwiKTtcclxuICAgICAgICBkc3RPbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB0aGlzLnN0YXR1cyA/IG9uIDogb2ZmKTtcclxuICAgIH0sXHJcbiAgICBtYWtlVW5jbGlja2FibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBkc3RTd2l0Y2hPZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRzdE9mZlwiKTtcclxuICAgICAgICB2YXIgZHN0U3dpdGNoT24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRzdE9uXCIpO1xyXG4gICAgICAgIGRzdFN3aXRjaE9mZi5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsIFwiXCIpO1xyXG4gICAgICAgIGRzdFN3aXRjaE9uLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgXCJcIik7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9LFxyXG4gICAgbWFrZUNsaWNrYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2thYmxlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgZHN0U3dpdGNoT2ZmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkc3RPZmZcIik7XHJcbiAgICAgICAgdmFyIGRzdFN3aXRjaE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkc3RPblwiKTtcclxuICAgICAgICBkc3RTd2l0Y2hPZmYuc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcImRheWxpZ2h0U2F2aW5nVGltZU9uKClcIik7XHJcbiAgICAgICAgZHN0U3dpdGNoT24uc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcImRheWxpZ2h0U2F2aW5nVGltZU9mZigpXCIpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG59O1xyXG4iLCJyZXF1aXJlKCcuLi9pbWcvYmFja2dyb3VuZC16b2RpYWMucG5nJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QmFja2dyb3VuZFBvc2l0aW9uWCh4KVxyXG57XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd6b2RpYWMtcGFpbnRpbmdzJyk7XHJcbiAgICBpZiAoc2NhbGVCYWNrZ3JvdW5kICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpbWFnZS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgIGNvbnN0IGJnSW1hZ2VXaWR0aCA9IGltYWdlLndpZHRoO1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRPZmZzZXQgPSA1MDA7IC8vIHNldCBhcHByb3ByaWF0ZSBiYWNrZ3JvdW5kIGltYWdlIG9mZnNldCBpbiBwaXhlbHNcclxuICAgICAgICBjb25zdCB5ZWFyUGFydCA9ICh4ICsgMTgwKSAvIDM2MDsgLy8gMCAuLiAxXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IC15ZWFyUGFydCAqIGJnSW1hZ2VXaWR0aCAvIDIgLSBiYWNrZ3JvdW5kT2Zmc2V0ICogc2NhbGVCYWNrZ3JvdW5kICsgZGlzcGxheVdpZHRoKCkgLyAyO1xyXG5cclxuICAgICAgICBjb25zdCB0cmFuc2xhdGUgPSAndHJhbnNsYXRlWCgnICsgb2Zmc2V0WCArICdweCknO1xyXG4gICAgICAgIGltYWdlLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcclxuICAgICAgICBpbWFnZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2xhdGU7XHJcbiAgICB9XHJcbiAgICAvLyBkaXNwbGF5V2lkdGgoKSAvIDIgaXMgY29ycmVjdGlvbiBmb3IgdmFyaW91cyBkaXNwbGF5IHdpZHRoXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlXaWR0aCgpIHtcclxuICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICAgIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxyXG4gICAgICAgIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlIZWlnaHQoKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgICAgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAgIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xyXG59XHJcblxyXG52YXIgc2NhbGVCYWNrZ3JvdW5kO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2tncm91bmRSZXNpemUoKSB7XHJcbiAgICBjb25zdCBoID0gZGlzcGxheUhlaWdodCgpO1xyXG4gICAgY29uc3QgdyA9IGRpc3BsYXlXaWR0aCgpO1xyXG4gICAgY29uc3Qgem9kaWFjUGFpbnRpbmdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3pvZGlhYy1wYWludGluZ3MnKTtcclxuICAgIGlmICh3ID49IGgpIHtcclxuICAgICAgICBzY2FsZUJhY2tncm91bmQgPSAxO1xyXG4gICAgICAgIHpvZGlhY1BhaW50aW5ncy5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgaWYgKGggPCB6b2RpYWNQYWludGluZ3MubmF0dXJhbEhlaWdodCkge1xyXG4gICAgICAgICAgICBzY2FsZUJhY2tncm91bmQgPSBoIC8gem9kaWFjUGFpbnRpbmdzLm5hdHVyYWxIZWlnaHQ7XHJcbiAgICAgICAgICAgIHpvZGlhY1BhaW50aW5ncy5oZWlnaHQgPSBzY2FsZUJhY2tncm91bmQgKiB6b2RpYWNQYWludGluZ3MubmF0dXJhbEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNjYWxlQmFja2dyb3VuZCA9IDAuNztcclxuICAgICAgICB6b2RpYWNQYWludGluZ3Muc3R5bGUudG9wID0gKGggLSB6b2RpYWNQYWludGluZ3MuaGVpZ2h0KSArICdweCc7XHJcbiAgICAgICAgem9kaWFjUGFpbnRpbmdzLmhlaWdodCA9IHNjYWxlQmFja2dyb3VuZCAqIHpvZGlhY1BhaW50aW5ncy5uYXR1cmFsSGVpZ2h0O1xyXG5cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9