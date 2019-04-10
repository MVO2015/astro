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

/***/ "./node_modules/css-loader/dist/cjs.js!./css/astro.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/astro.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#clickMeFlash {\r\n    fill: none;\r\n    stroke: red;\r\n    stroke-width: 4;\r\n    animation-name: flash1;\r\n    animation-iteration-count: 4;\r\n    animation-duration: 0.5s;\r\n}\r\n\r\n@keyframes flash1 {\r\n    0% {stroke-width: 0;}\r\n    50% {stroke-width: 4;}\r\n    100% {stroke-width: 0;}\r\n}\r\n\r\n@keyframes flash2 {\r\n    0% {stroke-width: 0;}\r\n    50% {stroke-width: 4;}\r\n    100% {stroke-width: 0;}\r\n}\r\n\r\nbody {\r\n    color: white;\r\n    background-color: #004;\r\n    font-family: sans-serif;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n    text-shadow:\r\n        -1px -1px 0 #000,\r\n         1px -1px 0 #000,\r\n        -1px  1px 0 #000,\r\n         1px  1px 0 #000,\r\n        0 0 20px #3FF;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n.clickable {\r\n    color: white;\r\n}\r\n\r\n.unclickable {\r\n    color: #777;\r\n}\r\n\r\n.author {\r\n    font-family: serif;\r\n    text-shadow: 0 0 10px #FFF;\r\n}\r\n\r\n/* for IE9 and IE11*/\r\n.container {\r\n    width: 100%;\r\n    padding-top: 35%;\r\n    position: relative;\r\n    object-fit: scale-down;\r\n}\r\n\r\n/* for IE9 and IE11*/\r\nsvg {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.zodiac-signs {\r\n    text-anchor:middle;\r\n    alignment-baseline:middle;\r\n    dominant-baseline:central;\r\n    font-style:normal;\r\n    font-weight:bold;\r\n    font-size: 14px;\r\n    line-height:14px;\r\n}\r\n\r\n.slidecontainer {\r\n    width: 100%; /* Width of the outside container */\r\n}\r\n\r\n/* The slider itself */\r\n.slider {\r\n    -webkit-appearance: none;  /* Override default CSS styles */\r\n    appearance: none;\r\n    width: 100%; /* Full-width */\r\n    height: 25px; /* Specified height */\r\n    background: darkslateblue; /* Grey background */\r\n    outline: none; /* Remove outline */\r\n    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */\r\n    -webkit-transition: .2s; /* 0.2 seconds transition on hover */\r\n    transition: opacity .2s;\r\n}\r\n\r\n/* Mouse-over effects */\r\n.slider:hover {\r\n    opacity: 1; /* Fully shown on mouse-over */\r\n}\r\n\r\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\r\n.slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none; /* Override default look */\r\n    appearance: none;\r\n    width: 25px; /* Set a specific slider handle width */\r\n    height: 25px; /* Slider handle height */\r\n    background: orange; /* Green background */\r\n    cursor: pointer; /* Cursor on hover */\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n    width: 25px; /* Set a specific slider handle width */\r\n    height: 25px; /* Slider handle height */\r\n    background: orange; /* Green background */\r\n    cursor: pointer; /* Cursor on hover */\r\n}\r\n", ""]);



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
    var element = document.getElementById(id);
    element.setAttribute("x" , x);
    element.setAttribute("y" , y);
}
function setTranslateById(id, translate) {
    var element = document.getElementById(id);
    element.setAttribute("style", ["transform: translate(", translate.x, "px,", translate.y,"px)"].join(""));
}

function setRotateById(id, rotation, center) {
    var rotationCenter = "0,0";
    if (typeof center !== 'undefined') {
        rotationCenter = center.x + "," + center.y;
    }
    var element = document.getElementById(id);
    element.setAttribute("transform", ["rotate(", rotation, " ", rotationCenter, ")"].join("")    );
}

function drawPoint(point) {
    drawCircle({id: point.id, r: 0.05, cx: point.x, cy: point.y});
}

function drawCircle(obj) {
    var element = document.getElementById(obj.id);
    setCircleAttributes(element, obj.cx, obj.cy, obj.r);
    displayInlineByElement(element);
}

function drawLine(line) {
    var element = document.getElementById(line.id);
    element.setAttribute("x1", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(line.x1));
    element.setAttribute("y1", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(line.y1));
    element.setAttribute("x2", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(line.x2));
    element.setAttribute("y2", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(line.y2));
    displayInlineByElement(element);
}

function setCircleAttributesById(circleId, cx, cy, r) {
    var circleElement = document.getElementById(circleId);
    setCircleAttributes(circleElement, cx, cy, r);
}

function setCircleAttributes(circleElement, cx, cy, r) {
    circleElement.setAttribute("r", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(r));
    circleElement.setAttribute("cx", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(cx));
    circleElement.setAttribute("cy", Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(cy));
}

function setGradientAttributes(gradientId, cx, cy, r) {
    var gradientElement = document.getElementById(gradientId);
    setCircleAttributes(gradientElement, cx, cy, r);
}

function drawCircleWithGradient(obj) {
    var gradientId = "gradient" + obj.id.capitalizeFirstLetter();
    setGradientAttributes(gradientId, obj.cx, obj.cy, obj.r);
    drawCircle(obj);
}

function displayInlineById(id) {
    var element = document.getElementById(id);
    displayInlineByElement(element);
}

function displayInlineByElement(element) {
    element.setAttribute("display", "inline");
}

function displayNoneById(id) {
    var element = document.getElementById(id);
    displayNoneByElement(element);
}

function displayNoneByElement(element) {
    element.setAttribute("display", "none");
}

function rotateSvgById(id, angleDeg) {
    document.getElementById(id).setAttribute("transform", "rotate(" + angleDeg + ")");
}

function drawClockAxisSystem() {
    var e = document.getElementById("clockAxisSystem");
    e.setAttribute("display", "inline");
}

function drawClockNumbers() {
    var r = Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(_clockobj__WEBPACK_IMPORTED_MODULE_1__["cancriTropicus"].r) * 0.9;
    for (var i = 0; i < 24; i++) {
        var textElement = document.getElementById("number" + i.toString());
        var positionElement =  document.getElementById("position" + + i.toString());
        var angle = i * 15;
        var angleRad = Object(_math__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(Object(_time__WEBPACK_IMPORTED_MODULE_2__["deg2sun"])(angle));
        var x = Math.cos(angleRad) * r;
        var y = Math.sin(angleRad) * r;
        positionElement.setAttribute("transform", "translate(" + x + " " + y + ")");
        textElement.setAttribute("transform", "rotate(" + angle + " 0,0)");
    }
    displayInlineById("clock");
}

function rotateZodiacum(angleDeg) {   // angleDeg from autumn equinox   (0 ... equinox, 90 ... winter solstice)
    var zodiacumGroup = document.getElementById("zodiacum");
    zodiacumGroup.setAttribute("transform", "rotate(" + angleDeg + ")");
}

function drawZodiacum() {
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["maskCircleZodiacumOuter"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["holeCircleZodiacumInner"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumOuterCircle"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumInnerCircle"]);
    drawLine(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumEquinox"]);
    drawLine(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumSolstice"]);

    var cx = Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumOuterCircle"].cx);
    var cy = Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumOuterCircle"].cy);
    const zoodiacCenter = {x:cx, y:cy};
    var r = Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumOuterCircle"].r);
    var radius2 = Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumInnerCircle"].r);
    var pieces = _clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumPieces"];
    for (var i = 0; i < 12; i++) {
        var leftOuter = scalePoint(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumOuterPoints"].point[i]);
        var leftInner = scalePoint(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumInnerPoints"].point[i]);
        var centerPoint = scalePoint(_clockobj__WEBPACK_IMPORTED_MODULE_1__["zodiacumCenterPoints"].point[i]);
        setTranslateById("positionSign" + i, centerPoint);
        var id = "sign" + i;
        var sign = document.getElementById(id);
        sign.setAttribute("x", "0");
        sign.setAttribute("y", "0");
        sign.setAttribute("width", "110");
        sign.setAttribute("height", "110");
        setRotateById(id, -i * 30 - 15, {x: 0, y: 0});

        // setXYById("sign" + i, -5, -5);
        var arcZ = document.getElementById("arcZ" + i.toString());
        var leftBar = ["M", leftOuter.x, leftOuter.y, "L", leftInner.x, leftInner.y].join(' ');
        var dz = [leftBar].join(' ');
        arcZ.setAttribute("d", dz);
        arcZ.setAttribute("stroke", "orange");
        arcZ.setAttribute("stroke-width", "2");
        arcZ.setAttribute("fill", "none");
    }
}

function drawAstronomicalClock() {
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["clipCircleCancriTropicus"]);
    // drawPoint(orbisCenter);
    // moveClickMe(0, orbis.r, "clickOrbisCenter()");
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
    var start = Object(_math__WEBPACK_IMPORTED_MODULE_0__["polar2Cartesian"])(x, y, radius, endAngle);
    var end = Object(_math__WEBPACK_IMPORTED_MODULE_0__["polar2Cartesian"])(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return describeArcByCartesian(start, radius, largeArcFlag, end);
}

function describeArcByCartesian(start, radius, largeArcFlag, end) {
    return [
        "M", parseFloat(start.x.toFixed(8)), parseFloat(start.y.toFixed(8)),
        "A", radius, radius, 0, largeArcFlag, 0, parseFloat(end.x.toFixed(8)), parseFloat(end.y.toFixed(8))
    ].join(" ");
}

function drawInfoText() {
    var r = Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(_clockobj__WEBPACK_IMPORTED_MODULE_1__["equator"].r) * 1.1;
    for (var i = 0; i < 16; i++) {
        var textElement = document.getElementById("info" + i.toString());
        var angle = i * 8 - 60;
        var angleRad = Object(_math__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(Object(_time__WEBPACK_IMPORTED_MODULE_2__["deg2sun"])(angle));
        var x = Math.cos(angleRad) * r;
        var y = Math.sin(angleRad) * r;
        textElement.setAttribute("transform", "translate(" + x + " " + y + ") rotate(" + angle + " 0,0)");
        displayInlineById("info" + i.toString());
    }
}

function drawOldTime() {
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["maskCircleOldTimeOuter"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["holeCircleOldTimeInner"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["oldTimeOuterCircle"]);
    drawCircle(_clockobj__WEBPACK_IMPORTED_MODULE_1__["oldTimeInnerCircle"]);
    var r = Object(_clockobj__WEBPACK_IMPORTED_MODULE_1__["scale"])(_clockobj__WEBPACK_IMPORTED_MODULE_1__["cancriTropicus"].r) * 1.02;
    for (var i = 1; i < 25; i++) {
        var imageElement = document.getElementById("oldtime" + i.toString());
        var angle = (i - 1) * 15;
        var angleRad = Object(_math__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(Object(_time__WEBPACK_IMPORTED_MODULE_2__["deg2sun"])(angle));
        var x = Math.cos(angleRad) * r;
        var y = Math.sin(angleRad) * r;
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
addListener("zodiacum", zodiacWheel);
addListener("time", sunWheel);

// učesat
var zodiacumSlider = document.getElementById("zodiacumSlider");
zodiacumSlider.oninput = function() {
    Object(_animations__WEBPACK_IMPORTED_MODULE_2__["stopAstronomicalClock"])();
    _time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].update();
    _time__WEBPACK_IMPORTED_MODULE_7__["astronomicalClockTime"].addDays(this.value);
    showAstronomicalTime();
}

Object(_animations__WEBPACK_IMPORTED_MODULE_2__["startAstronomicalClock"])();
//animateDayAround();
// animateYearAround();

function addListener(id, wheelFunction) {
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

function pressedEsc(event) {
    var x = event.which || event.keyCode;
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL2FzdHJvLmNzcz9jNjYyIiwid2VicGFjazovLy8uL2Nzcy9hc3Ryby5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xvY2tvYmouanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0cnVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoLmpzIiwid2VicGFjazovLy8uL3NyYy90aW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FB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Rjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdGpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc3Ryby5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXN0cm8uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hc3Ryby5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNjbGlja01lRmxhc2gge1xcclxcbiAgICBmaWxsOiBub25lO1xcclxcbiAgICBzdHJva2U6IHJlZDtcXHJcXG4gICAgc3Ryb2tlLXdpZHRoOiA0O1xcclxcbiAgICBhbmltYXRpb24tbmFtZTogZmxhc2gxO1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiA0O1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmxhc2gxIHtcXHJcXG4gICAgMCUge3N0cm9rZS13aWR0aDogMDt9XFxyXFxuICAgIDUwJSB7c3Ryb2tlLXdpZHRoOiA0O31cXHJcXG4gICAgMTAwJSB7c3Ryb2tlLXdpZHRoOiAwO31cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmbGFzaDIge1xcclxcbiAgICAwJSB7c3Ryb2tlLXdpZHRoOiAwO31cXHJcXG4gICAgNTAlIHtzdHJva2Utd2lkdGg6IDQ7fVxcclxcbiAgICAxMDAlIHtzdHJva2Utd2lkdGg6IDA7fVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0O1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtc2hhZG93OlxcclxcbiAgICAgICAgLTFweCAtMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgICAxcHggLTFweCAwICMwMDAsXFxyXFxuICAgICAgICAtMXB4ICAxcHggMCAjMDAwLFxcclxcbiAgICAgICAgIDFweCAgMXB4IDAgIzAwMCxcXHJcXG4gICAgICAgIDAgMCAyMHB4ICMzRkY7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2FibGUge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi51bmNsaWNrYWJsZSB7XFxyXFxuICAgIGNvbG9yOiAjNzc3O1xcclxcbn1cXHJcXG5cXHJcXG4uYXV0aG9yIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEwcHggI0ZGRjtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9yIElFOSBhbmQgSUUxMSovXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMzUlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxyXFxufVxcclxcblxcclxcbi8qIGZvciBJRTkgYW5kIElFMTEqL1xcclxcbnN2ZyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uem9kaWFjLXNpZ25zIHtcXHJcXG4gICAgdGV4dC1hbmNob3I6bWlkZGxlO1xcclxcbiAgICBhbGlnbm1lbnQtYmFzZWxpbmU6bWlkZGxlO1xcclxcbiAgICBkb21pbmFudC1iYXNlbGluZTpjZW50cmFsO1xcclxcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBsaW5lLWhlaWdodDoxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVjb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogV2lkdGggb2YgdGhlIG91dHNpZGUgY29udGFpbmVyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBzbGlkZXIgaXRzZWxmICovXFxyXFxuLnNsaWRlciB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgIC8qIE92ZXJyaWRlIGRlZmF1bHQgQ1NTIHN0eWxlcyAqL1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbC13aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7IC8qIFNwZWNpZmllZCBoZWlnaHQgKi9cXHJcXG4gICAgYmFja2dyb3VuZDogZGFya3NsYXRlYmx1ZTsgLyogR3JleSBiYWNrZ3JvdW5kICovXFxyXFxuICAgIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZSBvdXRsaW5lICovXFxyXFxuICAgIG9wYWNpdHk6IDAuNzsgLyogU2V0IHRyYW5zcGFyZW5jeSAoZm9yIG1vdXNlLW92ZXIgZWZmZWN0cyBvbiBob3ZlcikgKi9cXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7IC8qIDAuMiBzZWNvbmRzIHRyYW5zaXRpb24gb24gaG92ZXIgKi9cXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7XFxyXFxufVxcclxcblxcclxcbi8qIE1vdXNlLW92ZXIgZWZmZWN0cyAqL1xcclxcbi5zbGlkZXI6aG92ZXIge1xcclxcbiAgICBvcGFjaXR5OiAxOyAvKiBGdWxseSBzaG93biBvbiBtb3VzZS1vdmVyICovXFxyXFxufVxcclxcblxcclxcbi8qIFRoZSBzbGlkZXIgaGFuZGxlICh1c2UgLXdlYmtpdC0gKENocm9tZSwgT3BlcmEsIFNhZmFyaSwgRWRnZSkgYW5kIC1tb3otIChGaXJlZm94KSB0byBvdmVycmlkZSBkZWZhdWx0IGxvb2spICovXFxyXFxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC8qIE92ZXJyaWRlIGRlZmF1bHQgbG9vayAqL1xcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICB3aWR0aDogMjVweDsgLyogU2V0IGEgc3BlY2lmaWMgc2xpZGVyIGhhbmRsZSB3aWR0aCAqL1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7IC8qIFNsaWRlciBoYW5kbGUgaGVpZ2h0ICovXFxyXFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZTsgLyogR3JlZW4gYmFja2dyb3VuZCAqL1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIEN1cnNvciBvbiBob3ZlciAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gICAgd2lkdGg6IDI1cHg7IC8qIFNldCBhIHNwZWNpZmljIHNsaWRlciBoYW5kbGUgd2lkdGggKi9cXHJcXG4gICAgaGVpZ2h0OiAyNXB4OyAvKiBTbGlkZXIgaGFuZGxlIGhlaWdodCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kOiBvcmFuZ2U7IC8qIEdyZWVuIGJhY2tncm91bmQgKi9cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBDdXJzb3Igb24gaG92ZXIgKi9cXHJcXG59XFxyXFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCB7c2hvd0FzdHJvbm9taWNhbFRpbWUsIHNob3dBc3Ryb25vbWljYWxUb2RheVRpbWV9IGZyb20gXCIuL21haW5cIjtcclxuaW1wb3J0IHthc3Ryb25vbWljYWxDbG9ja1RpbWUsIGRheWxpZ2h0U2F2aW5nVGltZVN3aXRjaH0gZnJvbSBcIi4vdGltZVwiO1xyXG5pbXBvcnQge3JvdGF0ZVN2Z0J5SWR9IGZyb20gXCIuL2dyYXBoaWNzXCI7XHJcblxyXG52YXIgZGF5bGlnaHRTYXZpbmdUaW1lT25UaW1lcjtcclxudmFyIGRheWxpZ2h0U2F2aW5nVGltZU9mZlRpbWVyO1xyXG5sZXQgYXN0cm9ub21pY2FsQ2xvY2tVcGRhdGVUaW1lcjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEFzdHJvbm9taWNhbENsb2NrKCkge1xyXG4gICAgYXN0cm9ub21pY2FsQ2xvY2tVcGRhdGVUaW1lciA9IHNldEludGVydmFsKHNob3dBc3Ryb25vbWljYWxUb2RheVRpbWUsIDEwMDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RvcEFzdHJvbm9taWNhbENsb2NrKCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbChhc3Ryb25vbWljYWxDbG9ja1VwZGF0ZVRpbWVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVEYXlsaWdodFNhdmluZ1RpbWVPbigpIHtcclxuICAgIGNvbnN0IG51bWJlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlcnNcIik7XHJcbiAgICBsZXQgbnVtYmVyc1JvdGF0aW9uID0gbnVtYmVycy5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIikubWF0Y2goLy0/XFxkKy8pWzBdOyAgICAgICAvLyBnZXQgbnVtYmVyIGZyb20gc3RyaW5nXHJcbiAgICBpZiAobnVtYmVyc1JvdGF0aW9uID4gLTE1KSB7ICAgIC8vIGFuaW1hdGUgbnVtYmVyc1xyXG4gICAgICAgIG51bWJlcnNSb3RhdGlvbi0tO1xyXG4gICAgICAgIHJvdGF0ZVN2Z0J5SWQoXCJudW1iZXJzXCIsIG51bWJlcnNSb3RhdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBjbG9ja0ZhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb2NrRmFjZVwiKTtcclxuICAgICAgICBsZXQgY2xvY2tGYWNlUm90YXRpb24gPSBjbG9ja0ZhY2UuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpLm1hdGNoKC9cXGQrLylbMF07ICAgICAgIC8vIGdldCBudW1iZXIgZnJvbSBzdHJpbmdcclxuICAgICAgICBpZiAoY2xvY2tGYWNlUm90YXRpb24gPCAyODUpIHsgIC8vIGFuaW1hdGUgd2hvbGUgY2xvY2tcclxuICAgICAgICAgICAgY2xvY2tGYWNlUm90YXRpb24rKztcclxuICAgICAgICAgICAgY2xvY2tGYWNlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIGNsb2NrRmFjZVJvdGF0aW9uICsgXCIpIHNjYWxlKC0xLCAxKVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGRheWxpZ2h0U2F2aW5nVGltZU9uVGltZXIpOyAgICAgLy8gc3RvcCB0aGlzIGFuaW1hdGlvblxyXG4gICAgICAgICAgICBkYXlsaWdodFNhdmluZ1RpbWVTd2l0Y2gubWFrZUNsaWNrYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGVEYXlsaWdodFNhdmluZ1RpbWVPZmYoKSB7XHJcbiAgICBjb25zdCBudW1iZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXJzXCIpO1xyXG4gICAgbGV0IG51bWJlcnNSb3RhdGlvbiA9IG51bWJlcnMuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpLm1hdGNoKC8tP1xcZCsvKVswXTsgICAgICAgLy8gZ2V0IG51bWJlciBmcm9tIHN0cmluZ1xyXG4gICAgaWYgKG51bWJlcnNSb3RhdGlvbiA8IDApIHsgIC8vIGFuaW1hdGUgbnVtYmVyc1xyXG4gICAgICAgIG51bWJlcnNSb3RhdGlvbisrO1xyXG4gICAgICAgIHJvdGF0ZVN2Z0J5SWQoXCJudW1iZXJzXCIsIG51bWJlcnNSb3RhdGlvbik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBjbG9ja0ZhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb2NrRmFjZVwiKTtcclxuICAgICAgICBsZXQgY2xvY2tGYWNlUm90YXRpb24gPSBjbG9ja0ZhY2UuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpLm1hdGNoKC9cXGQrLylbMF07ICAgICAgIC8vIGdldCBudW1iZXIgZnJvbSBzdHJpbmdcclxuICAgICAgICBpZiAoY2xvY2tGYWNlUm90YXRpb24gPiAyNzApIHsgIC8vIGFuaW1hdGUgd2hvbGUgY2xvY2tcclxuICAgICAgICAgICAgY2xvY2tGYWNlUm90YXRpb24tLTtcclxuICAgICAgICAgICAgY2xvY2tGYWNlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIGNsb2NrRmFjZVJvdGF0aW9uICsgXCIpIHNjYWxlKC0xLCAxKVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGRheWxpZ2h0U2F2aW5nVGltZU9mZlRpbWVyKTsgICAgIC8vIHN0b3AgdGhpcyBhbmltYXRpb25cclxuICAgICAgICAgICAgZGF5bGlnaHRTYXZpbmdUaW1lU3dpdGNoLm1ha2VDbGlja2FibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEFuaW1hdGVEYXlsaWdodFNhdmluZ1RpbWVPZmYoKSB7XHJcbiAgICBkYXlsaWdodFNhdmluZ1RpbWVPZmZUaW1lciA9IHNldEludGVydmFsKGFuaW1hdGVEYXlsaWdodFNhdmluZ1RpbWVPZmYsIDMzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0QW5pbWF0ZURheWxpZ2h0U2F2aW5nVGltZU9uKCkge1xyXG4gICAgZGF5bGlnaHRTYXZpbmdUaW1lT25UaW1lciA9IHNldEludGVydmFsKGFuaW1hdGVEYXlsaWdodFNhdmluZ1RpbWVPbiwgMzMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlWWVhckFyb3VuZCgpIHtcclxuICAgIHN0b3BBc3Ryb25vbWljYWxDbG9jaygpO1xyXG4gICAgbGV0IGRheXMgPSAwO1xyXG4gICAgY29uc3QgeWVhckFyb3VuZFRpbWVyID0gc2V0SW50ZXJ2YWwoeWVhckFyb3VuZEFuaW1hdGlvbiwgNTApO1xyXG4gICAgZnVuY3Rpb24geWVhckFyb3VuZEFuaW1hdGlvbigpIHtcclxuICAgICAgICBpZiAoZGF5cyA8PSAzNjUpIHtcclxuICAgICAgICAgICAgc2hvd0FzdHJvbm9taWNhbFRpbWUoKTtcclxuICAgICAgICAgICAgYXN0cm9ub21pY2FsQ2xvY2tUaW1lLmFkZERheXMoMSk7XHJcbiAgICAgICAgICAgIGRheXMrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHllYXJBcm91bmRUaW1lcik7XHJcbiAgICAgICAgICAgIHN0YXJ0QXN0cm9ub21pY2FsQ2xvY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVEYXlBcm91bmQoKSB7XHJcbiAgICBzdG9wQXN0cm9ub21pY2FsQ2xvY2soKTtcclxuICAgIGNvbnN0IGRheUFyb3VuZFRpbWVyID0gc2V0SW50ZXJ2YWwoZGF5QXJvdW5kQW5pbWF0aW9uLCA1MCk7XHJcbiAgICBsZXQgbWludXRlcyA9IDA7XHJcbiAgICBjb25zdCBtaW51dGVTdGVwID0gNDtcclxuICAgIGZ1bmN0aW9uIGRheUFyb3VuZEFuaW1hdGlvbigpIHtcclxuICAgICAgICBpZiAobWludXRlcyA8IDE0NDApIHtcclxuICAgICAgICAgICAgc2hvd0FzdHJvbm9taWNhbFRpbWUoKTtcclxuICAgICAgICAgICAgYXN0cm9ub21pY2FsQ2xvY2tUaW1lLmFkZE1pbnV0ZXMobWludXRlU3RlcCk7XHJcbiAgICAgICAgICAgIG1pbnV0ZXMgKz0gbWludXRlU3RlcDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGRheUFyb3VuZFRpbWVyKTtcclxuICAgICAgICAgICAgc3RhcnRBc3Ryb25vbWljYWxDbG9jaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2RlZzJyYWQsIG5vcm1hbGl6ZUFuZ2xlRGVnLCBvcHBvc2l0ZUFuZ2xlLCBwb2xhcjJDYXJ0ZXNpYW59IGZyb20gXCIuL21hdGhcIjtcclxuaW1wb3J0IHtnZW5lcmFsRXF1YXRpb25Db25zdGFudHNPZkxpbmUsIGludGVyc2VjdGlvbk9mQ2lyY2xlQW5kTGluZSwgaW50ZXJzZWN0aW9uT2ZMaW5lQW5kWGF4aXN9IGZyb20gXCIuL2dlb21ldHJ5XCI7XHJcbmltcG9ydCB7ZGVzY3JpYmVBcmMsIGRpc3BsYXlJbmxpbmVCeUVsZW1lbnQsIGRpc3BsYXlOb25lQnlJZH0gZnJvbSBcIi4vZ3JhcGhpY3NcIjtcclxuaW1wb3J0IHtkYXRlVG9TdW5UaW1lQW5nbGV9IGZyb20gXCIuL3RpbWVcIjtcclxuXHJcbnZhciBPcmJpc0RlY2xpbmF0aW9uRGVnID0gMjMuNTtcclxudmFyIG9yYmlzRGVjbGluYXRpb24gPSBkZWcycmFkKE9yYmlzRGVjbGluYXRpb25EZWcpO1xyXG52YXIgTGF0aXR1ZG8gPSBkZWcycmFkKDUwKTtcclxudmFyIGhvcml6b250aXMgPSBNYXRoLlBJIC8gMiAtIExhdGl0dWRvO1xyXG52YXIgT3BhY3VzID0gZGVnMnJhZCgxOCk7XHJcbnZhciBPcmJpc0RpYW1ldGVyID0gMTtcclxuXHJcbnZhciBvcmJpc0NlbnRlciA9IHtcclxuICAgIGlkOiBcIm9yYmlzQ2VudGVyXCIsXHJcbiAgICB4OiAwLFxyXG4gICAgeTogbnVsbCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChvcmJpc0RpYW1ldGVyKSB7XHJcbiAgICAgICAgdGhpcy55ID0gb3JiaXNEaWFtZXRlciAvIDI7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgb3JiaXMgPSB7XHJcbiAgICBpZDogXCJvcmJpc1wiLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiAwLFxyXG4gICAgY3k6IG51bGwsXHJcbiAgICBjb21wdXRlOiBmdW5jdGlvbihvcmJpc0RpYW1ldGVyKSB7XHJcbiAgICAgICAgdGhpcy5yID0gb3JiaXNEaWFtZXRlciAvIDI7XHJcbiAgICAgICAgdGhpcy5jeSA9IHRoaXMucjtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgdmFyIGVxdWF0b3IgPSB7XHJcbiAgICBpZDogXCJlcXVhdG9yXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IDAsXHJcbiAgICBjeTogMCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnIgPSBwcm9qZWN0aW9uKDApO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBjYW5jcmlUcm9waWN1cyA9IHtcclxuICAgIGlkOiBcImNhbmNyaVRyb3BpY3VzXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IDAsXHJcbiAgICBjeTogMCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChvcmJpc0RlY2xpbmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5yID0gcHJvamVjdGlvbihvcmJpc0RlY2xpbmF0aW9uKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgY2xpcENpcmNsZUNhbmNyaVRyb3BpY3VzID0ge1xyXG4gICAgaWQ6IFwiY2xpcENpcmNsZUNhbmNyaVRyb3BpY3VzXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IDAsXHJcbiAgICBjeTogMCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChvcmJpc0RlY2xpbmF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5yID0gcHJvamVjdGlvbihvcmJpc0RlY2xpbmF0aW9uKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgdmFyIGNhcHJpY29ybmlUcm9waWN1cyA9IHtcclxuICAgIGlkOiBcImNhcHJpY29ybmlUcm9waWN1c1wiLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiAwLFxyXG4gICAgY3k6IDAsXHJcbiAgICBjb21wdXRlOiBmdW5jdGlvbiAob3JiaXNEZWNsaW5hdGlvbikge1xyXG4gICAgICAgIHRoaXMuciA9IHByb2plY3Rpb24oLW9yYmlzRGVjbGluYXRpb24pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBsYXRpdHVkb0hvcml6b250aXMgPSB7XHJcbiAgICBpZDogXCJsYXRpdHVkb0hvcml6b250aXNcIixcclxuICAgIHI6IG51bGwsXHJcbiAgICBjeDogbnVsbCxcclxuICAgIGN5OiAwLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB4MSA9IHByb2plY3Rpb24oaG9yaXpvbnRpcyk7XHJcbiAgICAgICAgdmFyIHgyID0gcHJvamVjdGlvbihvcHBvc2l0ZUFuZ2xlKGhvcml6b250aXMpKTtcclxuICAgICAgICB0aGlzLmN4ID0gKHgxICsgeDIpIC8gMiA7XHJcbiAgICAgICAgdGhpcy5yID0gTWF0aC5hYnMoeDIgLSB4MSkgLyAyO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBvcGFjdXNIb3Jpem9udGlzID0ge1xyXG4gICAgaWQ6IFwib3BhY3VzSG9yaXpvbnRpc1wiLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IDAsXHJcbiAgICBjb21wdXRlOiBmdW5jdGlvbiAoaG9yaXpvbnRpcywgb3BhY3VzKSB7XHJcbiAgICAgICAgdmFyIHgxID0gcHJvamVjdGlvbihob3Jpem9udGlzIC0gb3BhY3VzKTtcclxuICAgICAgICB2YXIgeDIgPSBwcm9qZWN0aW9uKG9wcG9zaXRlQW5nbGUoaG9yaXpvbnRpcyArIG9wYWN1cykpO1xyXG4gICAgICAgIHRoaXMuY3ggPSAoeDEgKyB4MikgLyAyIDtcclxuICAgICAgICB0aGlzLnIgPSBNYXRoLmFicyh4MiAtIHgxKSAvIDI7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIHN1bkhhbmRsZSA9IHtcclxuICAgIGlkOiBcInN1bkhhbmRsZVwiLFxyXG4gICAgeDE6IDAsXHJcbiAgICB5MTogMCxcclxuICAgIHgyOiBudWxsLFxyXG4gICAgeTI6IG51bGwsXHJcbiAgICByOiBudWxsLFxyXG4gICAgYW5nbGU6IDAsXHJcbiAgICBpbml0OiBmdW5jdGlvbihjYW5jcmlUcm9waWN1c1JhZGl1cykge1xyXG4gICAgICAgIHRoaXMuciA9IHNjYWxlKGNhbmNyaVRyb3BpY3VzUmFkaXVzKTtcclxuICAgICAgICB0aGlzLngyID0gMDtcclxuICAgICAgICB0aGlzLnkyID0gc2NhbGUoY2FuY3JpVHJvcGljdXNSYWRpdXMgKiAwLjk1KTtcclxuICAgICAgICB2YXIgaGFuZGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInkyXCIsIHRoaXMueTIudG9TdHJpbmcoKSk7XHJcbiAgICB9LFxyXG4gICAgc2hvdzogZnVuY3Rpb24oYW5nbGVEZWcpIHtcclxuICAgICAgICB2YXIgaGFuZGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5pZCk7XHJcbiAgICAgICAgaGFuZGxlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIGFuZ2xlRGVnICsgXCIpXCIpO1xyXG4gICAgICAgIGRpc3BsYXlJbmxpbmVCeUVsZW1lbnQoaGFuZGxlKVxyXG4gICAgfSxcclxuICAgIHNob3dCeVRpbWU6IGZ1bmN0aW9uKGQpIHtcclxuICAgICAgICB0aGlzLnNob3coZGF0ZVRvU3VuVGltZUFuZ2xlKGQpKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgc3VuU3ltYm9sID0ge1xyXG4gICAgaWQ6IFwic3VuU3ltYm9sXCIsXHJcbiAgICBhbmdsZTogMCxcclxuICAgIHI6IG51bGwsXHJcbiAgICB4OiBudWxsLFxyXG4gICAgeTogbnVsbCxcclxuXHJcbiAgICBzaG93QXQ6IGZ1bmN0aW9uKHhQeCwgeVB4KSB7XHJcbiAgICAgICAgdmFyIHN1biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VuUG9zaXRpb25cIik7XHJcbiAgICAgICAgc3VuLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHhQeCArIFwiIFwiICsgeVB4ICsgXCIpXCIpO1xyXG4gICAgICAgIGRpc3BsYXlJbmxpbmVCeUVsZW1lbnQoc3VuKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgc3RhclN5bWJvbCA9IHtcclxuICAgIGlkOiBcInN0YXJTeW1ib2xcIixcclxuICAgIHg6IG51bGwsXHJcbiAgICB5OiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKHpvZGlhY3VtRXF1aW5veCkge1xyXG4gICAgICAgIHRoaXMueCA9IHNjYWxlKHpvZGlhY3VtRXF1aW5veC54MSk7XHJcbiAgICAgICAgdGhpcy55ID0gc2NhbGUoem9kaWFjdW1FcXVpbm94LnkxKTtcclxuICAgIH0sXHJcbiAgICBzaG93OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc3RhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RhclBvc2l0aW9uXCIpO1xyXG4gICAgICAgIHN0YXIuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgdGhpcy54ICsgXCIgXCIgKyB0aGlzLnkgKyBcIilcIik7XHJcbiAgICAgICAgZGlzcGxheUlubGluZUJ5RWxlbWVudChzdGFyKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgbW9vbkhhbmRsZSA9IHtcclxuICAgIGlkOiBcIm1vb25IYW5kbGVcIixcclxuICAgIHgxOiAwLFxyXG4gICAgeTE6IDAsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiBudWxsLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGFuZ2xlOiAwLFxyXG4gICAgaW5pdDogZnVuY3Rpb24oY2FuY3JpVHJvcGljdXNSYWRpdXMpIHtcclxuICAgICAgICB0aGlzLnIgPSBzY2FsZShjYW5jcmlUcm9waWN1c1JhZGl1cyk7XHJcbiAgICAgICAgdGhpcy55MiA9IDA7XHJcbiAgICAgICAgdGhpcy54MiA9IHNjYWxlKGNhbmNyaVRyb3BpY3VzUmFkaXVzICogMC45NSk7XHJcbiAgICAgICAgdmFyIGhhbmRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCB0aGlzLngyLnRvU3RyaW5nKCkpO1xyXG4gICAgfSxcclxuICAgIHNob3c6IGZ1bmN0aW9uKGFuZ2xlRGVnKSB7XHJcbiAgICAgICAgdmFyIGhhbmRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuaWQpO1xyXG4gICAgICAgIGhhbmRsZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoXCIgKyBhbmdsZURlZyArIFwiKVwiKTtcclxuICAgICAgICBkaXNwbGF5SW5saW5lQnlFbGVtZW50KGhhbmRsZSlcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgbW9vblN5bWJvbCA9IHtcclxuICAgIGlkOiBcIm1vb25TeW1ib2xcIixcclxuICAgIGFuZ2xlOiAwLFxyXG4gICAgcjogbnVsbCxcclxuICAgIHg6IG51bGwsXHJcbiAgICB5OiBudWxsLFxyXG5cclxuICAgIHNob3dBdDogZnVuY3Rpb24oeFB4LCB5UHgsIHJvdGF0aW9uRGVnKSB7XHJcbiAgICAgICAgdmFyIG1vb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vb25Qb3NpdGlvblwiKTtcclxuICAgICAgICBtb29uLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHhQeCArIFwiIFwiICsgeVB4ICsgXCIpIHJvdGF0ZShcIiArIHJvdGF0aW9uRGVnICArIFwiKVwiKTtcclxuICAgICAgICBkaXNwbGF5SW5saW5lQnlFbGVtZW50KG1vb24pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciB6b2RpYWN1bSA9IHtcclxuICAgIHI6IG51bGwsXHJcbiAgICBjeDogMCxcclxuICAgIGN5OiAwLFxyXG4gICAgYzA6IHt4OiBudWxsLCB5OiBudWxsfSwgLy8gY2VudGVyIFgsIFkgY29vcmRpbmF0ZXMgd2hpbGUgYW5nbGUgPSAwXHJcbiAgICBlMDoge3g6IG51bGwsIHk6IG51bGx9LCAvLyBlY2xpcHNlIHBvbGUgWCwgWSBjb29yZGluYXRlcyB3aGlsZSBhbmdsZSA9IDBcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGUoMCk7XHJcbiAgICAgICAgdGhpcy5jMCA9IHt4OiB0aGlzLmN4LCB5OiB0aGlzLmN5fTtcclxuICAgICAgICB0aGlzLmUwID0gdGhpcy5lY2xpcHNlUG9sZUNvbnN0cnVjdGlvbigpO1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uKGFuZ2xlRGVnKSB7XHJcbiAgICAgICAgYW5nbGVEZWcgPSAodHlwZW9mIGFuZ2xlRGVnICE9PSAndW5kZWZpbmVkJykgPyAgYW5nbGVEZWcgOiAwO1xyXG4gICAgICAgIHZhciBhbmdsZVJhZCA9IGRlZzJyYWQoYW5nbGVEZWcpO1xyXG4gICAgICAgIHRoaXMuciA9IChjYW5jcmlUcm9waWN1cy5yICsgY2Fwcmljb3JuaVRyb3BpY3VzLnIpIC8gMjtcclxuICAgICAgICB2YXIgY2VudGVyUm90YXRpb25SYWRpdXMgPSBjYXByaWNvcm5pVHJvcGljdXMuciAtIHRoaXMucjtcclxuICAgICAgICB0aGlzLmN5ID0gY2VudGVyUm90YXRpb25SYWRpdXMgKiBNYXRoLnNpbihhbmdsZVJhZCk7XHJcbiAgICAgICAgdGhpcy5jeCA9IGNlbnRlclJvdGF0aW9uUmFkaXVzICogTWF0aC5jb3MoYW5nbGVSYWQpO1xyXG4gICAgfSxcclxuICAgIGVjbGlwc2VQb2xlQ29uc3RydWN0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHBvaW50T25FcXVhdG9yMSA9IHBvbGFyMkNhcnRlc2lhbigwLCAwLCBlcXVhdG9yLnIsIDkwICsgT3JiaXNEZWNsaW5hdGlvbkRlZyk7XHJcbiAgICAgICAgdmFyIHBvaW50T25FcXVhdG9yMiA9IHt4OjAsIHk6IC1lcXVhdG9yLnJ9O1xyXG4gICAgICAgIHZhciBsaW5lR2VuZXJhbEVxdWF0aW9uQ29uc3RhbnRzID0gZ2VuZXJhbEVxdWF0aW9uQ29uc3RhbnRzT2ZMaW5lKHBvaW50T25FcXVhdG9yMSwgcG9pbnRPbkVxdWF0b3IyKTtcclxuICAgICAgICB2YXIgeCA9IGludGVyc2VjdGlvbk9mTGluZUFuZFhheGlzKGxpbmVHZW5lcmFsRXF1YXRpb25Db25zdGFudHMpO1xyXG4gICAgICAgIHJldHVybiB7eDogeCwgeTogMH07XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIHpvZGlhY3VtT3V0ZXJDaXJjbGUgPSB7XHJcbiAgICBpZDogXCJ6b2RpYWN1bU91dGVyQ2lyY2xlXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IG51bGwsXHJcbiAgICBjeTogbnVsbCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHpvZGlhY3VtLmNvbXB1dGUoMCk7XHJcbiAgICAgICAgdGhpcy5yID0gem9kaWFjdW0ucjtcclxuICAgICAgICB0aGlzLmN4ID0gem9kaWFjdW0uY3g7XHJcbiAgICAgICAgdGhpcy5jeSA9IHpvZGlhY3VtLmN5O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciB6b2RpYWN1bUlubmVyQ2lyY2xlID0ge1xyXG4gICAgaWQ6IFwiem9kaWFjdW1Jbm5lckNpcmNsZVwiLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbih6b2RpYWN1bU91dGVyQ2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5yID0gem9kaWFjdW1PdXRlckNpcmNsZS5yICogMC44O1xyXG4gICAgICAgIHRoaXMuY3ggPSB6b2RpYWN1bU91dGVyQ2lyY2xlLmN4O1xyXG4gICAgICAgIHRoaXMuY3kgPSB6b2RpYWN1bU91dGVyQ2lyY2xlLmN5O1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHpvZGlhY3VtQ2VudHJhbENpcmNsZSA9IHtcclxuICAgIGlkOiBcInpvZGlhY3VtSW5uZXJDaXJjbGVcIixcclxuICAgIHI6IG51bGwsXHJcbiAgICBjeDogbnVsbCxcclxuICAgIGN5OiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24oem9kaWFjdW1Jbm5lckNpcmNsZSwgem9kaWFjdW1PdXRlckNpcmNsZSkge1xyXG4gICAgICAgIHRoaXMuciA9ICh6b2RpYWN1bU91dGVyQ2lyY2xlLnIgKyB6b2RpYWN1bUlubmVyQ2lyY2xlLnIpIC8gMjtcclxuICAgICAgICB0aGlzLmN4ID0gem9kaWFjdW1PdXRlckNpcmNsZS5jeDtcclxuICAgICAgICB0aGlzLmN5ID0gem9kaWFjdW1PdXRlckNpcmNsZS5jeTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgaG9sZUNpcmNsZVpvZGlhY3VtSW5uZXIgPSB7XHJcbiAgICBpZDogXCJob2xlQ2lyY2xlWm9kaWFjdW1Jbm5lclwiLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbih6b2RpYWN1bUlubmVyQ2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5yID0gem9kaWFjdW1Jbm5lckNpcmNsZS5yO1xyXG4gICAgICAgIHRoaXMuY3ggPSB6b2RpYWN1bUlubmVyQ2lyY2xlLmN4O1xyXG4gICAgICAgIHRoaXMuY3kgPSB6b2RpYWN1bUlubmVyQ2lyY2xlLmN5O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBtYXNrQ2lyY2xlWm9kaWFjdW1PdXRlciA9IHtcclxuICAgIGlkOiBcIm1hc2tDaXJjbGVab2RpYWN1bU91dGVyXCIsXHJcbiAgICByOiBudWxsLFxyXG4gICAgY3g6IG51bGwsXHJcbiAgICBjeTogbnVsbCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKHpvZGlhY3VtT3V0ZXJDaXJjbGUpIHtcclxuICAgICAgICB0aGlzLnIgPSB6b2RpYWN1bU91dGVyQ2lyY2xlLnI7XHJcbiAgICAgICAgdGhpcy5jeCA9IHpvZGlhY3VtT3V0ZXJDaXJjbGUuY3g7XHJcbiAgICAgICAgdGhpcy5jeSA9IHpvZGlhY3VtT3V0ZXJDaXJjbGUuY3k7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIHpvZGlhY3VtUGllY2VzID0ge1xyXG4gICAgdG9wOiBudWxsLFxyXG4gICAgYm90dG9tOiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKHpvZGlhY3VtT3V0ZXJDaXJjbGUsIHpvZGlhY3VtSW5uZXJDaXJjbGUpIHtcclxuICAgICAgICB2YXIgY3ggPSBzY2FsZSh6b2RpYWN1bU91dGVyQ2lyY2xlLmN4KTtcclxuICAgICAgICB2YXIgY3kgPSBzY2FsZSh6b2RpYWN1bU91dGVyQ2lyY2xlLmN5KTtcclxuICAgICAgICB2YXIgcjEgPSBzY2FsZSh6b2RpYWN1bU91dGVyQ2lyY2xlLnIpO1xyXG4gICAgICAgIHZhciByMiA9IHNjYWxlKHpvZGlhY3VtSW5uZXJDaXJjbGUucik7XHJcbiAgICAgICAgdGhpcy50b3AgPSBbXTtcclxuICAgICAgICB0aGlzLmJvdHRvbSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGFuZ2xlRGVnID0gLSBpICogMzA7XHJcbiAgICAgICAgICAgIHRoaXMudG9wW2ldID0gcG9sYXIyQ2FydGVzaWFuKGN4LCBjeSwgcjEsIGFuZ2xlRGVnIC0gOTApO1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbVtpXSA9IHBvbGFyMkNhcnRlc2lhbihjeCwgY3ksIHIyLCBhbmdsZURlZyAtIDkwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBQb2ludHMgb24gZXF1YXRvciBmb3IgY29uc3RydWN0aW9uIG9mIFpvZGlhY1xyXG52YXIgZXF1YXRvclBvaW50cyA9IHtcclxuICAgIHBvaW50OiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKGVxdWF0b3IpIHtcclxuICAgICAgICB0aGlzLnBvaW50ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmdsZURlZyA9IC0gaSAqIDMwO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50W2ldID0gcG9sYXIyQ2FydGVzaWFuKGVxdWF0b3IuY3gsIGVxdWF0b3IuY3ksIGVxdWF0b3IuciwgYW5nbGVEZWcgLSA5MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gUG9pbnRzIG9uIGVxdWF0b3IgZm9yIGNvbnN0cnVjdGlvbiBvZiBab2RpYWMgLSByb3RhdGlvbiAxNSBkZWdcclxudmFyIGVxdWF0b3JQb2ludHNSb3RhdGVkID0ge1xyXG4gICAgcG9pbnQ6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoZXF1YXRvcikge1xyXG4gICAgICAgIHRoaXMucG9pbnQgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGFuZ2xlRGVnID0gLSBpICogMzAgLSAxNTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludFtpXSA9IHBvbGFyMkNhcnRlc2lhbihlcXVhdG9yLmN4LCBlcXVhdG9yLmN5LCBlcXVhdG9yLnIsIGFuZ2xlRGVnIC0gOTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgem9kaWFjdW1PdXRlclBvaW50cyA9IHtcclxuICAgIHBvaW50OiBudWxsLFxyXG4gICAgZWNsaXBzZVBvbGU6IHt4OiBudWxsLCB5OiAwfSxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IG51bGwsXHJcbiAgICByOiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24oem9kaWFjdW0sIGVxdWF0b3JQb2ludHMpIHtcclxuICAgICAgICAvLyB3aGljaCByb290IG9mIHF1YWRyYXRpYyBlcXVhdGlvbiB3ZSBzZWxlY3QgZm9yIHNvbHV0aW9uIGZvciBnaXZlbiBpbmRleCAoYW5nbGUpXHJcbiAgICAgICAgdmFyIHJvb3QgPSBbMSwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMV07XHJcbiAgICAgICAgdGhpcy5lY2xpcHNlUG9sZSA9IHpvZGlhY3VtLmUwO1xyXG4gICAgICAgIHRoaXMuY3ggPSB6b2RpYWN1bS5jeDtcclxuICAgICAgICB0aGlzLmN5ID0gem9kaWFjdW0uY3k7XHJcbiAgICAgICAgdGhpcy5yID0gem9kaWFjdW0ucjtcclxuICAgICAgICB0aGlzLnBvaW50ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0d29Qb2ludHMgPSB0aGlzLmNvbXB1dGVQcm9qZWN0aW9uKGVxdWF0b3JQb2ludHMucG9pbnRbaV0pO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50W2ldID0gKHJvb3RbaV0gPT0gMSkgPyB0d29Qb2ludHMucDEgOiB0d29Qb2ludHMucDI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVQcm9qZWN0aW9uOiBmdW5jdGlvbiAocG9pbnQpIHtcclxuICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uT2ZDaXJjbGVBbmRMaW5lKHpvZGlhY3VtLCB0aGlzLmVjbGlwc2VQb2xlLCBwb2ludClcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgem9kaWFjdW1Jbm5lclBvaW50cyA9IHtcclxuICAgIHBvaW50OiBudWxsLFxyXG4gICAgY2VudHJhbFBvaW50OiB7eDogMCwgeTogMH0sXHJcbiAgICBjeDogbnVsbCxcclxuICAgIGN5OiBudWxsLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKHpvZGlhY3VtSW5uZXJDaXJjbGUsIG91dGVyUG9pbnRzKSB7XHJcbiAgICAgICAgLy8gd2hpY2ggcm9vdCBvZiBxdWFkcmF0aWMgZXF1YXRpb24gd2Ugc2VsZWN0IGZvciBzb2x1dGlvbiBmb3IgZ2l2ZW4gaW5kZXggKGFuZ2xlKVxyXG4gICAgICAgIHZhciByb290ID0gWzEsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDFdO1xyXG4gICAgICAgIHRoaXMuY3ggPSB6b2RpYWN1bUlubmVyQ2lyY2xlLmN4O1xyXG4gICAgICAgIHRoaXMuY3kgPSB6b2RpYWN1bUlubmVyQ2lyY2xlLmN5O1xyXG4gICAgICAgIHRoaXMuciA9IHpvZGlhY3VtSW5uZXJDaXJjbGUucjtcclxuICAgICAgICB0aGlzLnBvaW50ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIHZhciB0d29Qb2ludHMgPSB0aGlzLmNvbXB1dGVQcm9qZWN0aW9uKGVxdWF0b3JQb2ludHMucG9pbnRbaV0pO1xyXG4gICAgICAgICAgICB2YXIgdHdvUG9pbnRzID0gaW50ZXJzZWN0aW9uT2ZDaXJjbGVBbmRMaW5lKHpvZGlhY3VtSW5uZXJDaXJjbGUsIG91dGVyUG9pbnRzLnBvaW50W2ldLCB0aGlzLmNlbnRyYWxQb2ludCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRbaV0gPSAocm9vdFtpXSA9PSAxKSA/IHR3b1BvaW50cy5wMSA6IHR3b1BvaW50cy5wMjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZVByb2plY3Rpb246IGZ1bmN0aW9uIChwb2ludCkge1xyXG4gICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb25PZkNpcmNsZUFuZExpbmUoem9kaWFjdW1Jbm5lckNpcmNsZSwgdGhpcy5jZW50cmFsUG9pbnQsIHBvaW50KVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciB6b2RpYWN1bUNlbnRlclBvaW50cyA9IHtcclxuICAgIHBvaW50OiBudWxsLFxyXG4gICAgY2VudHJhbFBvaW50OiB7eDogMCwgeTogMH0sXHJcbiAgICBjeDogbnVsbCxcclxuICAgIGN5OiBudWxsLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKHpvZGlhY3VtQ2VudHJhbENpcmNsZSwgZXF1YXRvclBvaW50c1JvdGF0ZWQpIHtcclxuICAgICAgICAvLyB3aGljaCByb290IG9mIHF1YWRyYXRpYyBlcXVhdGlvbiB3ZSBzZWxlY3QgZm9yIHNvbHV0aW9uIGZvciBnaXZlbiBpbmRleCAoYW5nbGUpXHJcbiAgICAgICAgdmFyIHJvb3QgPSBbMiwgMiwgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMV07XHJcbiAgICAgICAgdGhpcy5lY2xpcHNlUG9sZSA9IHpvZGlhY3VtLmUwO1xyXG4gICAgICAgIHRoaXMuY3ggPSB6b2RpYWN1bUNlbnRyYWxDaXJjbGUuY3g7XHJcbiAgICAgICAgdGhpcy5jeSA9IHpvZGlhY3VtQ2VudHJhbENpcmNsZS5jeTtcclxuICAgICAgICB0aGlzLnIgPSB6b2RpYWN1bUNlbnRyYWxDaXJjbGUucjtcclxuICAgICAgICB0aGlzLnBvaW50ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0d29Qb2ludHMgPSB0aGlzLmNvbXB1dGVQcm9qZWN0aW9uKGVxdWF0b3JQb2ludHNSb3RhdGVkLnBvaW50W2ldKTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludFtpXSA9IChyb290W2ldID09IDEpID8gdHdvUG9pbnRzLnAxIDogdHdvUG9pbnRzLnAyO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlUHJvamVjdGlvbjogZnVuY3Rpb24gKHBvaW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGludGVyc2VjdGlvbk9mQ2lyY2xlQW5kTGluZSh6b2RpYWN1bUNlbnRyYWxDaXJjbGUsIHRoaXMuY2VudHJhbFBvaW50LCBwb2ludClcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgem9kaWFjdW1FcXVpbm94ID0ge1xyXG4gICAgaWQ6XCJ6b2RpYWN1bUVxdWlub3hcIixcclxuICAgIHgxOiAwLFxyXG4gICAgeTE6IG51bGwsXHJcbiAgICB4MjogMCxcclxuICAgIHkyOiBudWxsLFxyXG4gICAgY29tcHV0ZTogZnVuY3Rpb24oZXF1YXRvclJhZGl1cykge1xyXG4gICAgICAgIHRoaXMueTEgPSAtZXF1YXRvclJhZGl1cyAqIDEuMjtcclxuICAgICAgICB0aGlzLnkyID0gZXF1YXRvclJhZGl1cztcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgem9kaWFjdW1Tb2xzdGljZSA9IHtcclxuICAgIGlkOlwiem9kaWFjdW1Tb2xzdGljZVwiLFxyXG4gICAgeDE6IG51bGwsXHJcbiAgICB5MTogMCxcclxuICAgIHgyOiBudWxsLFxyXG4gICAgeTI6IDAsXHJcbiAgICBjb21wdXRlOiBmdW5jdGlvbihjYW5jcmlUcm9waWN1c1JhZGl1cywgY2Fwcmljb3JuaVRyb3BpY3VzUmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy54MSA9IGNhcHJpY29ybmlUcm9waWN1c1JhZGl1cztcclxuICAgICAgICB0aGlzLngyID0gLSBjYW5jcmlUcm9waWN1c1JhZGl1cztcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgbW9vblNoYXBlID0ge1xyXG4gICAgcjogNixcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBkdyA9IGRlc2NyaWJlQXJjKDAsIDAsIHRoaXMuciwgLTkwLCA5MCk7XHJcbiAgICAgICAgdmFyIG1vb25XaGl0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9vbldoaXRlXCIpO1xyXG4gICAgICAgIG1vb25XaGl0ZS5zZXRBdHRyaWJ1dGUoXCJkXCIsIGR3KTtcclxuICAgICAgICBtb29uV2hpdGUuc2V0QXR0cmlidXRlKFwiclwiLCB0aGlzLnIudG9TdHJpbmcoKSk7XHJcblxyXG4gICAgICAgIHZhciBkYiA9IGRlc2NyaWJlQXJjKDAsIDAsIHRoaXMuciwgOTAsIC05MCk7XHJcbiAgICAgICAgdmFyIG1vb25CbGFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9vbkJsYWNrXCIpO1xyXG4gICAgICAgIG1vb25CbGFjay5zZXRBdHRyaWJ1dGUoXCJkXCIsIGRiKTtcclxuICAgICAgICBtb29uQmxhY2suc2V0QXR0cmlidXRlKFwiclwiLCB0aGlzLnIudG9TdHJpbmcoKSk7XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZTogZnVuY3Rpb24oc3VuQW5nbGVEZWcsIG1vb25BbmdsZURlZykge1xyXG4gICAgICAgIHZhciBzdW5BbmdsZURlZyA9IG5vcm1hbGl6ZUFuZ2xlRGVnKHN1bkFuZ2xlRGVnKTtcclxuICAgICAgICB2YXIgbW9vbkFuZ2xlRGVnID0gbm9ybWFsaXplQW5nbGVEZWcobW9vbkFuZ2xlRGVnKTtcclxuICAgICAgICB2YXIgbW9vbkFnZSA9IG5vcm1hbGl6ZUFuZ2xlRGVnKHN1bkFuZ2xlRGVnIC0gbW9vbkFuZ2xlRGVnKTtcclxuICAgICAgICB2YXIgbW9vblBoYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb29uUGhhc2VcIik7XHJcbiAgICAgICAgaWYgKG1vb25BZ2UgPCAwKSB7ICAvLyBzd2FwIEImVyBiYWNrZ3JvdW5kIG9mIG1vb24gc3ltYm9sXHJcbiAgICAgICAgICAgIG1vb25QaGFzZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogcm90YXRlKDE4MGRlZylcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW9vblBoYXNlLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiByb3RhdGUoMGRlZylcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIG1ha2UgbGlnaHQgYW5kIGRhcmsgcGFydCBvZiB0aGUgbW9vblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhtb29uQWdlKSA8IDkwKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXJrbmVzcyA9IG1vb25BZ2U7XHJcbiAgICAgICAgICAgIHZhciBtb29uRGFyayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9vbkRhcmtcIik7XHJcbiAgICAgICAgICAgIG1vb25EYXJrLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwidHJhbnNmb3JtOiByb3RhdGVZKFwiICsgZGFya25lc3MgKyBcImRlZylcIik7XHJcbiAgICAgICAgICAgIGRpc3BsYXlJbmxpbmVCeUVsZW1lbnQobW9vbkRhcmspO1xyXG4gICAgICAgICAgICBkaXNwbGF5Tm9uZUJ5SWQoXCJtb29uTGlnaHRcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG1vb25MaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9vbkxpZ2h0XCIpO1xyXG4gICAgICAgICAgICB2YXIgbGlnaHRuZXNzID0gMTgwIC0gTWF0aC5hYnMobW9vbkFnZSk7XHJcbiAgICAgICAgICAgIG1vb25MaWdodC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcInRyYW5zZm9ybTogcm90YXRlWShcIiArIGxpZ2h0bmVzcyArIFwiZGVnKVwiKTtcclxuICAgICAgICAgICAgZGlzcGxheUlubGluZUJ5RWxlbWVudChtb29uTGlnaHQpO1xyXG4gICAgICAgICAgICBkaXNwbGF5Tm9uZUJ5SWQoXCJtb29uRGFya1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIG9sZFRpbWVPdXRlckNpcmNsZSA9IHtcclxuICAgIGlkOiBcIm9sZFRpbWVPdXRlckNpcmNsZVwiLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnIgPSBjYW5jcmlUcm9waWN1cy5yICogMS4xNDtcclxuICAgICAgICB0aGlzLmN4ID0gY2FuY3JpVHJvcGljdXMuY3g7XHJcbiAgICAgICAgdGhpcy5jeSA9IGNhbmNyaVRyb3BpY3VzLmN5O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBvbGRUaW1lSW5uZXJDaXJjbGUgPSB7XHJcbiAgICBpZDogXCJvbGRUaW1lSW5uZXJDaXJjbGVcIixcclxuICAgIHI6IG51bGwsXHJcbiAgICBjeDogbnVsbCxcclxuICAgIGN5OiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24ob2xkVGltZU91dGVyQ2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5yID0gb2xkVGltZU91dGVyQ2lyY2xlLnIgKiAwLjg5O1xyXG4gICAgICAgIHRoaXMuY3ggPSBvbGRUaW1lT3V0ZXJDaXJjbGUuY3g7XHJcbiAgICAgICAgdGhpcy5jeSA9IG9sZFRpbWVPdXRlckNpcmNsZS5jeTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgaG9sZUNpcmNsZU9sZFRpbWVJbm5lciA9IHtcclxuICAgIGlkOiBcImhvbGVDaXJjbGVPbGRUaW1lSW5uZXJcIixcclxuICAgIHI6IG51bGwsXHJcbiAgICBjeDogbnVsbCxcclxuICAgIGN5OiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24ob2xkVGltZUlubmVyQ2lyY2xlKSB7XHJcbiAgICAgICAgdGhpcy5yID0gb2xkVGltZUlubmVyQ2lyY2xlLnI7XHJcbiAgICAgICAgdGhpcy5jeCA9IG9sZFRpbWVJbm5lckNpcmNsZS5jeDtcclxuICAgICAgICB0aGlzLmN5ID0gb2xkVGltZUlubmVyQ2lyY2xlLmN5O1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBtYXNrQ2lyY2xlT2xkVGltZU91dGVyID0ge1xyXG4gICAgaWQ6IFwibWFza0NpcmNsZU9sZFRpbWVPdXRlclwiLFxyXG4gICAgcjogbnVsbCxcclxuICAgIGN4OiBudWxsLFxyXG4gICAgY3k6IG51bGwsXHJcbiAgICBpbml0OiBmdW5jdGlvbihvbGRUaW1lT3V0ZXJDaXJjbGUpIHtcclxuICAgICAgICB0aGlzLnIgPSBvbGRUaW1lT3V0ZXJDaXJjbGUucjtcclxuICAgICAgICB0aGlzLmN4ID0gb2xkVGltZU91dGVyQ2lyY2xlLmN4O1xyXG4gICAgICAgIHRoaXMuY3kgPSBvbGRUaW1lT3V0ZXJDaXJjbGUuY3k7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG51bSlcclxue1xyXG4gICAgcmV0dXJuICgxMDAgKiBudW0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0aW9uKGFscGhhKSB7XHJcbiAgICByZXR1cm4gKDIgKiBvcmJpcy5yICogTWF0aC50YW4oTWF0aC5QSSAvIDQgKyBhbHBoYS8yKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3RBc3Ryb25vbWljYWxDbG9jaygpIHtcclxuICAgIG9yYmlzQ2VudGVyLmNvbXB1dGUoT3JiaXNEaWFtZXRlcik7XHJcbiAgICBvcmJpcy5jb21wdXRlKE9yYmlzRGlhbWV0ZXIpO1xyXG4gICAgLy8gb3JiaXNBeG9uWC5pbml0KCk7XHJcbiAgICAvLyBvcmJpc0F4b25ZLmluaXQoKTtcclxuICAgIC8vcGxhbnVtLmluaXQoKTtcclxuICAgIC8vb3JiaXNFcXVhdG9yLmNvbXB1dGUoT3JiaXNEaWFtZXRlcik7XHJcbiAgICAvL2VxdWF0b3JQcm9qZWN0aW9uLmluaXQoKTtcclxuICAgIC8vIG9yYmlzQ2FuY3JpVHJvcGljdXMuY29tcHV0ZShvcmJpc0NlbnRlciwgb3JiaXMuciwgb3JiaXNEZWNsaW5hdGlvbik7XHJcbiAgICAvLyBvcmJpc0NhcHJpY29ybmlUcm9waWN1cy5jb21wdXRlKG9yYmlzQ2VudGVyLCBvcmJpcy5yLCBvcmJpc0RlY2xpbmF0aW9uKTtcclxuICAgIC8vIG9yYmlzTGF0aXR1ZG8uY29tcHV0ZShvcmJpc0NlbnRlciwgb3JiaXMuciwgaG9yaXpvbnRpcyk7XHJcbiAgICAvLyBvcmJpc09wYWN1cy5pbml0KCk7XHJcbiAgICAvLyBjYW5jcmlUcm9waWN1c1Byb2plY3Rpb24uaW5pdCgpO1xyXG4gICAgLy8gY2Fwcmljb3JuaVRyb3BpY3VzUHJvamVjdGlvbi5pbml0KCk7XHJcbiAgICBlcXVhdG9yLmNvbXB1dGUoKTtcclxuICAgIGNhbmNyaVRyb3BpY3VzLmNvbXB1dGUob3JiaXNEZWNsaW5hdGlvbik7XHJcbiAgICBjbGlwQ2lyY2xlQ2FuY3JpVHJvcGljdXMuY29tcHV0ZShvcmJpc0RlY2xpbmF0aW9uKTtcclxuICAgIGNhcHJpY29ybmlUcm9waWN1cy5jb21wdXRlKG9yYmlzRGVjbGluYXRpb24pO1xyXG4gICAgLy8gbGF0aXR1ZG9Qcm9qZWN0aW9uQS5pbml0KCk7XHJcbiAgICAvLyBsYXRpdHVkb1Byb2plY3Rpb25CLmluaXQoKTtcclxuICAgIGxhdGl0dWRvSG9yaXpvbnRpcy5pbml0KCk7XHJcbiAgICAvLyBvcGFjdXNQcm9qZWN0aW9uQS5pbml0KCk7XHJcbiAgICAvLyBvcGFjdXNQcm9qZWN0aW9uQi5pbml0KCk7XHJcbiAgICBvcGFjdXNIb3Jpem9udGlzLmNvbXB1dGUoaG9yaXpvbnRpcywgT3BhY3VzKTtcclxuICAgIC8vY2xpY2tNZVBvaW50LmluaXQoKTtcclxuXHJcbiAgICBvbGRUaW1lT3V0ZXJDaXJjbGUuaW5pdCgpO1xyXG4gICAgb2xkVGltZUlubmVyQ2lyY2xlLmluaXQob2xkVGltZU91dGVyQ2lyY2xlKTtcclxuICAgIGhvbGVDaXJjbGVPbGRUaW1lSW5uZXIuaW5pdChvbGRUaW1lSW5uZXJDaXJjbGUpO1xyXG4gICAgbWFza0NpcmNsZU9sZFRpbWVPdXRlci5pbml0KG9sZFRpbWVPdXRlckNpcmNsZSk7XHJcblxyXG4gICAgem9kaWFjdW0uaW5pdCgpO1xyXG4gICAgem9kaWFjdW1PdXRlckNpcmNsZS5pbml0KCk7XHJcbiAgICB6b2RpYWN1bUlubmVyQ2lyY2xlLmluaXQoem9kaWFjdW1PdXRlckNpcmNsZSk7XHJcbiAgICB6b2RpYWN1bUNlbnRyYWxDaXJjbGUuaW5pdCh6b2RpYWN1bUlubmVyQ2lyY2xlLCB6b2RpYWN1bU91dGVyQ2lyY2xlKTtcclxuICAgIGhvbGVDaXJjbGVab2RpYWN1bUlubmVyLmluaXQoem9kaWFjdW1Jbm5lckNpcmNsZSk7XHJcbiAgICBtYXNrQ2lyY2xlWm9kaWFjdW1PdXRlci5pbml0KHpvZGlhY3VtT3V0ZXJDaXJjbGUpO1xyXG4gICAgem9kaWFjdW1FcXVpbm94LmNvbXB1dGUoZXF1YXRvci5yKTtcclxuICAgIHpvZGlhY3VtU29sc3RpY2UuY29tcHV0ZShjYW5jcmlUcm9waWN1cy5yLCBjYXByaWNvcm5pVHJvcGljdXMucik7XHJcbiAgICB6b2RpYWN1bVBpZWNlcy5pbml0KHpvZGlhY3VtT3V0ZXJDaXJjbGUsIHpvZGlhY3VtSW5uZXJDaXJjbGUpO1xyXG4gICAgc3RhclN5bWJvbC5pbml0KHpvZGlhY3VtRXF1aW5veCk7XHJcbiAgICBzdW5IYW5kbGUuaW5pdChjYW5jcmlUcm9waWN1cy5yKTtcclxuICAgIG1vb25IYW5kbGUuaW5pdChjYW5jcmlUcm9waWN1cy5yKTtcclxuICAgIG1vb25TaGFwZS5pbml0KCk7XHJcbiAgICBlcXVhdG9yUG9pbnRzLmluaXQoZXF1YXRvcik7XHJcbiAgICBlcXVhdG9yUG9pbnRzUm90YXRlZC5pbml0KGVxdWF0b3IpO1xyXG4gICAgem9kaWFjdW1PdXRlclBvaW50cy5pbml0KHpvZGlhY3VtLCBlcXVhdG9yUG9pbnRzKTtcclxuICAgIHpvZGlhY3VtQ2VudGVyUG9pbnRzLmluaXQoem9kaWFjdW1DZW50cmFsQ2lyY2xlLCBlcXVhdG9yUG9pbnRzUm90YXRlZCk7XHJcbiAgICB6b2RpYWN1bUlubmVyUG9pbnRzLmluaXQoem9kaWFjdW1Jbm5lckNpcmNsZSwgem9kaWFjdW1PdXRlclBvaW50cyk7XHJcbn1cclxuIiwidmFyIG9yYmlzQXhvblggPSB7XHJcbiAgICBpZDogXCJvcmJpc0F4b25YXCIsXHJcbiAgICB4MTogbnVsbCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogbnVsbCxcclxuICAgIG92ZXJsYXA6IDAuMSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMueDEgPSAtb3JiaXMuciAtIHRoaXMub3ZlcmxhcDtcclxuICAgICAgICB0aGlzLnkxID0gb3JiaXMucjtcclxuICAgICAgICB0aGlzLngyID0gb3JiaXMuciArIHRoaXMub3ZlcmxhcDtcclxuICAgICAgICB0aGlzLnkyID0gb3JiaXMucjtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvcmJpc0F4b25ZID0ge1xyXG4gICAgaWQ6IFwib3JiaXNBeG9uWVwiLFxyXG4gICAgeDE6IDAsXHJcbiAgICB5MTogbnVsbCxcclxuICAgIHgyOiAwLFxyXG4gICAgeTI6IG51bGwsXHJcbiAgICBvdmVybGFwOiAwLjEsXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnkxID0gLSB0aGlzLm92ZXJsYXA7XHJcbiAgICAgICAgdGhpcy55MiA9IDIgKiBvcmJpcy5yICsgdGhpcy5vdmVybGFwO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9yYmlzRXF1YXRvciA9IHtcclxuICAgIGlkOiBcIm9yYmlzRXF1YXRvclwiLFxyXG4gICAgeDE6IG51bGwsXHJcbiAgICB5MTogbnVsbCxcclxuICAgIHgyOiBudWxsLFxyXG4gICAgeTI6IG51bGwsXHJcbiAgICBjb21wdXRlOiBmdW5jdGlvbiAob3JiaXNEaWFtZXRlcikge1xyXG4gICAgICAgIHZhciByYWRpdXMgPSBvcmJpc0RpYW1ldGVyIC8gMjtcclxuICAgICAgICB0aGlzLngxID0gLXJhZGl1cztcclxuICAgICAgICB0aGlzLnkxID0gcmFkaXVzO1xyXG4gICAgICAgIHRoaXMueDIgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy55MiA9IHJhZGl1cztcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjbGlja01lUG9pbnQgPSB7XHJcbiAgICBpZDogXCJjbGlja01lUG9pbnRcIixcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9yYmlzQ2FuY3JpVHJvcGljdXMgPSB7XHJcbiAgICBpZDogXCJvcmJpc0NhbmNyaVRyb3BpY3VzXCIsXHJcbiAgICB4MTogbnVsbCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogbnVsbCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChvcmJpc0NlbnRlciwgb3JiaXNSYWRpdXMsIG9yYmlzRGVjbGluYXRpb24pIHtcclxuICAgICAgICB2YXIgb3JiaXNYID0gTWF0aC5jb3Mob3JiaXNEZWNsaW5hdGlvbikgKiBvcmJpc1JhZGl1cztcclxuICAgICAgICB2YXIgb3JiaXNZID0gTWF0aC5zaW4ob3JiaXNEZWNsaW5hdGlvbikgKiBvcmJpc1JhZGl1cztcclxuICAgICAgICB0aGlzLngxID0gb3JiaXNDZW50ZXIueCAtIG9yYmlzWDtcclxuICAgICAgICB0aGlzLnkxID0gb3JiaXNDZW50ZXIueSArIG9yYmlzWTtcclxuICAgICAgICB0aGlzLngyID0gb3JiaXNDZW50ZXIueCArIG9yYmlzWDtcclxuICAgICAgICB0aGlzLnkyID0gdGhpcy55MTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvcmJpc0NhcHJpY29ybmlUcm9waWN1cyA9IHtcclxuICAgIGlkOiBcIm9yYmlzQ2Fwcmljb3JuaVRyb3BpY3VzXCIsXHJcbiAgICB4MTogbnVsbCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogbnVsbCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChvcmJpc0NlbnRlciwgb3JiaXNSYWRpdXMsIG9yYmlzRGVjbGluYXRpb24pIHtcclxuICAgICAgICB2YXIgb3JiaXNYID0gTWF0aC5jb3Mob3JiaXNEZWNsaW5hdGlvbikgKiBvcmJpc1JhZGl1cztcclxuICAgICAgICB2YXIgb3JiaXNZID0gLSBNYXRoLnNpbihvcmJpc0RlY2xpbmF0aW9uKSAqIG9yYmlzUmFkaXVzO1xyXG4gICAgICAgIHRoaXMueDEgPSBvcmJpc0NlbnRlci54IC0gb3JiaXNYO1xyXG4gICAgICAgIHRoaXMueTEgPSBvcmJpc0NlbnRlci55ICsgb3JiaXNZO1xyXG4gICAgICAgIHRoaXMueDIgPSBvcmJpc0NlbnRlci54ICsgb3JiaXNYO1xyXG4gICAgICAgIHRoaXMueTIgPSB0aGlzLnkxO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9yYmlzTGF0aXR1ZG8gPSB7XHJcbiAgICBpZDogXCJvcmJpc0xhdGl0dWRvXCIsXHJcbiAgICB4MTogbnVsbCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogbnVsbCxcclxuICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChvcmJpc0NlbnRlciwgb3JiaXNSYWRpdXMsIGhvcml6b250aXMpIHtcclxuICAgICAgICB2YXIgb3JiaXNYID0gTWF0aC5jb3MoLWhvcml6b250aXMpICogb3JiaXNSYWRpdXM7XHJcbiAgICAgICAgdmFyIG9yYmlzWSA9IE1hdGguc2luKC1ob3Jpem9udGlzKSAqIG9yYmlzUmFkaXVzO1xyXG4gICAgICAgIHRoaXMueDEgPSBvcmJpc0NlbnRlci54IC0gb3JiaXNYO1xyXG4gICAgICAgIHRoaXMueTEgPSBvcmJpc0NlbnRlci55ICsgb3JiaXNZO1xyXG4gICAgICAgIHRoaXMueDIgPSBvcmJpc0NlbnRlci54ICsgb3JiaXNYO1xyXG4gICAgICAgIHRoaXMueTIgPSBvcmJpc0NlbnRlci55IC0gb3JiaXNZO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIG9yYmlzT3BhY3VzID0ge1xyXG4gICAgaWQ6IFwib3JiaXNPcGFjdXNcIixcclxuICAgIHgxOiBudWxsLFxyXG4gICAgeTE6IG51bGwsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiBudWxsLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcmJpc1gxID0gTWF0aC5jb3Mob3Bwb3NpdGVBbmdsZShob3Jpem9udGlzICsgT3BhY3VzKSkgKiBvcmJpcy5yO1xyXG4gICAgICAgIHZhciBvcmJpc1kxID0gTWF0aC5zaW4ob3Bwb3NpdGVBbmdsZShob3Jpem9udGlzICsgT3BhY3VzKSkgKiBvcmJpcy5yO1xyXG4gICAgICAgIHZhciBvcmJpc1gyID0gTWF0aC5jb3MoaG9yaXpvbnRpcyAtIE9wYWN1cykgKiBvcmJpcy5yO1xyXG4gICAgICAgIHZhciBvcmJpc1kyID0gTWF0aC5zaW4oaG9yaXpvbnRpcyAtIE9wYWN1cykgKiBvcmJpcy5yO1xyXG4gICAgICAgIHRoaXMueDEgPSBvcmJpc0NlbnRlci54ICsgb3JiaXNYMTtcclxuICAgICAgICB0aGlzLnkxID0gb3JiaXNDZW50ZXIueSArIG9yYmlzWTE7XHJcbiAgICAgICAgdGhpcy54MiA9IG9yYmlzQ2VudGVyLnggKyBvcmJpc1gyO1xyXG4gICAgICAgIHRoaXMueTIgPSBvcmJpc0NlbnRlci55ICsgb3JiaXNZMjtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBwbGFudW0gPSB7XHJcbiAgICBpZDogXCJwbGFudW1cIixcclxuICAgIHgxOiBudWxsLFxyXG4gICAgeTE6IDAsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiAwLFxyXG4gICAgb3ZlcmxhcDogMC4xLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBwbGFudW1YID0gcHJvamVjdGlvbihvcmJpc0RlY2xpbmF0aW9uKSArIHRoaXMub3ZlcmxhcDtcclxuICAgICAgICB0aGlzLngxID0gcGxhbnVtWDtcclxuICAgICAgICB0aGlzLngyID0gLXBsYW51bVg7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZXF1YXRvclByb2plY3Rpb24gPSB7XHJcbiAgICBpZDogXCJlcXVhdG9yUHJvamVjdGlvblwiLFxyXG4gICAgeDE6IDAsXHJcbiAgICB5MTogbnVsbCxcclxuICAgIHgyOiBudWxsLFxyXG4gICAgeTI6IDAsXHJcbiAgICBvdmVybGFwOiAwLjEsXHJcbiAgICB4OiBudWxsLFxyXG4gICAgeTogbnVsbCxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnggPSAtIHByb2plY3Rpb24oMCk7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLngxID0gdGhpcy5vdmVybGFwO1xyXG4gICAgICAgIHRoaXMueTEgPSAyICogb3JiaXMuciArIHRoaXMub3ZlcmxhcDtcclxuICAgICAgICB0aGlzLngyID0gdGhpcy54IC0gdGhpcy5vdmVybGFwO1xyXG4gICAgICAgIHRoaXMueTIgPSB0aGlzLnkgLSB0aGlzLm92ZXJsYXA7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgY2FuY3JpVHJvcGljdXNQcm9qZWN0aW9uID0ge1xyXG4gICAgaWQ6IFwiY2FuY3JpVHJvcGljdXNQcm9qZWN0aW9uXCIsXHJcbiAgICB4MTogMCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogMCxcclxuICAgIHg6IG51bGwsXHJcbiAgICB5OiAwLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMueCA9IHRoaXMueDI7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLnkxID0gMiAqIG9yYmlzLnI7XHJcbiAgICAgICAgdGhpcy54MiA9IC0gcHJvamVjdGlvbihvcmJpc0RlY2xpbmF0aW9uKTtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLngyO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGNhcHJpY29ybmlUcm9waWN1c1Byb2plY3Rpb24gPSB7XHJcbiAgICBpZDogXCJjYXByaWNvcm5pVHJvcGljdXNQcm9qZWN0aW9uXCIsXHJcbiAgICB4MTogMCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogMCxcclxuICAgIHg6IG51bGwsXHJcbiAgICB5OiAwLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMueTEgPSAgMiAqIG9yYmlzLnI7XHJcbiAgICAgICAgdGhpcy54ID0gLSBwcm9qZWN0aW9uKC1vcmJpc0RlY2xpbmF0aW9uKTtcclxuICAgICAgICB0aGlzLngyID0gdGhpcy54O1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbnZhciBsYXRpdHVkb1Byb2plY3Rpb25BID0ge1xyXG4gICAgaWQ6IFwibGF0aXR1ZG9Qcm9qZWN0aW9uQVwiLFxyXG4gICAgeDE6IDAsXHJcbiAgICB5MTogbnVsbCxcclxuICAgIHgyOiBudWxsLFxyXG4gICAgeTI6IDAsXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy55MSA9IDIgKiBvcmJpcy5yO1xyXG4gICAgICAgIHRoaXMueDIgPSBwcm9qZWN0aW9uKGhvcml6b250aXMpO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIGxhdGl0dWRvUHJvamVjdGlvbkIgPSB7XHJcbiAgICBpZDogXCJsYXRpdHVkb1Byb2plY3Rpb25CXCIsXHJcbiAgICB4MTogMCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogMCxcclxuICAgIHg6IG51bGwsXHJcbiAgICB5OiAwLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMueTEgPSAyICogb3JiaXMucjtcclxuICAgICAgICB0aGlzLnggPSBwcm9qZWN0aW9uKG9wcG9zaXRlQW5nbGUoaG9yaXpvbnRpcykpO1xyXG4gICAgICAgIHRoaXMueDIgPSB0aGlzLng7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxudmFyIG9wYWN1c1Byb2plY3Rpb25BID0ge1xyXG4gICAgaWQ6IFwib3BhY3VzUHJvamVjdGlvbkFcIixcclxuICAgIHgxOiAwLFxyXG4gICAgeTE6IG51bGwsXHJcbiAgICB4MjogbnVsbCxcclxuICAgIHkyOiAwLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMueTEgPSAyICogb3JiaXMucjtcclxuICAgICAgICB0aGlzLngyID0gcHJvamVjdGlvbihob3Jpem9udGlzIC0gT3BhY3VzKTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBvcGFjdXNQcm9qZWN0aW9uQiA9IHtcclxuICAgIGlkOiBcIm9wYWN1c1Byb2plY3Rpb25CXCIsXHJcbiAgICB4MTogMCxcclxuICAgIHkxOiBudWxsLFxyXG4gICAgeDI6IG51bGwsXHJcbiAgICB5MjogMCxcclxuICAgIHg6IG51bGwsXHJcbiAgICB5OiAwLFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMueTEgPSAyICogb3JiaXMucjtcclxuICAgICAgICB0aGlzLnggPSBwcm9qZWN0aW9uKG9wcG9zaXRlQW5nbGUoaG9yaXpvbnRpcyArIE9wYWN1cykpO1xyXG4gICAgICAgIHRoaXMueDIgPSB0aGlzLng7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHtxdWFkcmF0aWNFcXVhdGlvbn0gZnJvbSBcIi4vbWF0aFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludGVyc2VjdGlvbk9mQ2lyY2xlQW5kTGluZShjaXJjbGUsIHBvaW50QSwgcG9pbnRCKSB7XHJcbiAgICB2YXIgZXF1YXRpb25Db25zdGFudCA9IGdlbmVyYWxFcXVhdGlvbkNvbnN0YW50c09mTGluZShwb2ludEEsIHBvaW50Qik7XHJcbiAgICB2YXIgYSA9IGVxdWF0aW9uQ29uc3RhbnQuYTtcclxuICAgIHZhciBiID0gZXF1YXRpb25Db25zdGFudC5iO1xyXG4gICAgdmFyIGMgPSBlcXVhdGlvbkNvbnN0YW50LmM7XHJcblxyXG4gICAgLy8gY2lyY2xlIGVxdWF0aW9uICh4IC0gbSkyICsgKHkgLSBuKTIgPSByMlxyXG4gICAgdmFyIG0gPSBjaXJjbGUuY3g7XHJcbiAgICB2YXIgbiA9IGNpcmNsZS5jeTtcclxuICAgIHZhciByID0gY2lyY2xlLnI7XHJcblxyXG4gICAgLy8gcHJlcGFyZSBwb3dlcnMgb2YgMlxyXG4gICAgdmFyIGEyID0gTWF0aC5wb3coYSwgMik7XHJcbiAgICB2YXIgYjIgPSBNYXRoLnBvdyhiLCAyKTtcclxuICAgIHZhciBjMiA9IE1hdGgucG93KGMsIDIpO1xyXG4gICAgdmFyIG0yID0gTWF0aC5wb3cobSwgMik7XHJcbiAgICB2YXIgbjIgPSBNYXRoLnBvdyhuLCAyKTtcclxuICAgIHZhciByMiA9IE1hdGgucG93KHIsIDIpO1xyXG5cclxuICAgIC8vIGludGVyc2VjdGlvbiBvZiBjaXJjbGUgYW5kIGxpbmVcclxuICAgIC8vIHNldCBvZiB0d28gZXF1YXRpb25zIGxlYWRzIHRvIGEgcXVhZHJhdGljIGVxdWF0aW9uXHJcbiAgICAvLyBBeDIgKyBCeCArIEMgPSAwXHJcbiAgICAvLyByZXN1bHRzOiB4MSwgeDJcclxuICAgIHZhciBBID0gYTIgKyBiMjtcclxuICAgIHZhciBCID0gMiAqIChjICogYSArIGEgKiBiICogbiAtIGIyICogbSk7XHJcbiAgICB2YXIgQyA9IGIyICogbTIgKyBjMiArIDIgKiBiICogYyAqIG4gKyBiMiAqIG4yIC0gYjIgKiByMjtcclxuICAgIHZhciByZXN1bHQgPSBxdWFkcmF0aWNFcXVhdGlvbihBLCBCLCBDKTtcclxuXHJcbiAgICAvLyBjb21wdXRlIFkgY29vcmRpbmF0aW9uXHJcbiAgICBmdW5jdGlvbiBjb21wdXRlWUNvb3JkaW5hdGlvbih4KSB7XHJcbiAgICAgICAgcmV0dXJuICgtYyAtIGEgKiB4KSAvIGI7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHkxID0gY29tcHV0ZVlDb29yZGluYXRpb24ocmVzdWx0LngxKTtcclxuICAgIHZhciB5MiA9IGNvbXB1dGVZQ29vcmRpbmF0aW9uKHJlc3VsdC54Mik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHAxOiB7eDogcmVzdWx0LngxLCB5OiB5MX0sXHJcbiAgICAgICAgcDI6IHt4OiByZXN1bHQueDIsIHk6IHkyfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhbEVxdWF0aW9uQ29uc3RhbnRzT2ZMaW5lKHBvaW50QSwgcG9pbnRCKSB7XHJcbiAgICAvLyBkaXJlY3Rpb25hbCB2ZWN0b3JcclxuICAgIHZhciBzeCA9IHBvaW50Qi54IC0gcG9pbnRBLng7XHJcbiAgICB2YXIgc3kgPSBwb2ludEIueSAtIHBvaW50QS55O1xyXG5cclxuICAgIC8vIG5vcm1hbCB2ZWN0b3JcclxuICAgIHZhciBueCA9IC1zeTtcclxuICAgIHZhciBueSA9IHN4O1xyXG5cclxuICAgIC8vIGxpbmUgZXF1YXRpb24gYXggKyBieSArYyA9IDBcclxuICAgIHZhciBhID0gbng7XHJcbiAgICB2YXIgYiA9IG55O1xyXG4gICAgdmFyIGMgPSAtYSAqIHBvaW50QS54IC0gYiAqIHBvaW50QS55OyAgIC8vIGFueSBwb2ludCBvbiB0aGlzIGxpbmUgLSBoZXJlIHBvaW50QVxyXG5cclxuICAgIHJldHVybiB7YTogYSwgYjogYiwgYzogY307XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnNlY3Rpb25PZkxpbmVBbmRYYXhpcyhnZW5lcmFsRXF1YXRpb25Db25zdGFudHMpIHtcclxuICAgIHJldHVybiAtIGdlbmVyYWxFcXVhdGlvbkNvbnN0YW50cy5jIC8gZ2VuZXJhbEVxdWF0aW9uQ29uc3RhbnRzLmE7XHJcbn0iLCJpbXBvcnQge2RlZzJyYWQsIHBvbGFyMkNhcnRlc2lhbn0gZnJvbSBcIi4vbWF0aFwiO1xyXG5pbXBvcnQge1xyXG4gICAgY2FuY3JpVHJvcGljdXMsXHJcbiAgICBjYXByaWNvcm5pVHJvcGljdXMsXHJcbiAgICBjbGlwQ2lyY2xlQ2FuY3JpVHJvcGljdXMsXHJcbiAgICBlcXVhdG9yLCBob2xlQ2lyY2xlT2xkVGltZUlubmVyLFxyXG4gICAgaG9sZUNpcmNsZVpvZGlhY3VtSW5uZXIsXHJcbiAgICBsYXRpdHVkb0hvcml6b250aXMsIG1hc2tDaXJjbGVPbGRUaW1lT3V0ZXIsXHJcbiAgICBtYXNrQ2lyY2xlWm9kaWFjdW1PdXRlciwgb2xkVGltZUlubmVyQ2lyY2xlLCBvbGRUaW1lT3V0ZXJDaXJjbGUsXHJcbiAgICBvcGFjdXNIb3Jpem9udGlzLFxyXG4gICAgc2NhbGUsXHJcbiAgICB6b2RpYWN1bUNlbnRlclBvaW50cywgem9kaWFjdW1FcXVpbm94LCB6b2RpYWN1bUlubmVyQ2lyY2xlLFxyXG4gICAgem9kaWFjdW1Jbm5lclBvaW50cywgem9kaWFjdW1PdXRlckNpcmNsZSxcclxuICAgIHpvZGlhY3VtT3V0ZXJQb2ludHMsXHJcbiAgICB6b2RpYWN1bVBpZWNlcywgem9kaWFjdW1Tb2xzdGljZVxyXG59IGZyb20gXCIuL2Nsb2Nrb2JqXCI7XHJcbmltcG9ydCB7ZGVnMnN1bn0gZnJvbSBcIi4vdGltZVwiO1xyXG5cclxuU3RyaW5nLnByb3RvdHlwZS5jYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNjYWxlUG9pbnQocG9pbnQpIHtcclxuICAgIHJldHVybiB7eDogc2NhbGUocG9pbnQueCksIHk6IHNjYWxlKHBvaW50LnkpfVxyXG59XHJcbmZ1bmN0aW9uIHNldFhZQnlJZChpZCwgeCwgeSkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInhcIiAsIHgpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5XCIgLCB5KTtcclxufVxyXG5mdW5jdGlvbiBzZXRUcmFuc2xhdGVCeUlkKGlkLCB0cmFuc2xhdGUpIHtcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBbXCJ0cmFuc2Zvcm06IHRyYW5zbGF0ZShcIiwgdHJhbnNsYXRlLngsIFwicHgsXCIsIHRyYW5zbGF0ZS55LFwicHgpXCJdLmpvaW4oXCJcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRSb3RhdGVCeUlkKGlkLCByb3RhdGlvbiwgY2VudGVyKSB7XHJcbiAgICB2YXIgcm90YXRpb25DZW50ZXIgPSBcIjAsMFwiO1xyXG4gICAgaWYgKHR5cGVvZiBjZW50ZXIgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcm90YXRpb25DZW50ZXIgPSBjZW50ZXIueCArIFwiLFwiICsgY2VudGVyLnk7XHJcbiAgICB9XHJcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFtcInJvdGF0ZShcIiwgcm90YXRpb24sIFwiIFwiLCByb3RhdGlvbkNlbnRlciwgXCIpXCJdLmpvaW4oXCJcIikgICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd1BvaW50KHBvaW50KSB7XHJcbiAgICBkcmF3Q2lyY2xlKHtpZDogcG9pbnQuaWQsIHI6IDAuMDUsIGN4OiBwb2ludC54LCBjeTogcG9pbnQueX0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3Q2lyY2xlKG9iaikge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvYmouaWQpO1xyXG4gICAgc2V0Q2lyY2xlQXR0cmlidXRlcyhlbGVtZW50LCBvYmouY3gsIG9iai5jeSwgb2JqLnIpO1xyXG4gICAgZGlzcGxheUlubGluZUJ5RWxlbWVudChlbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0xpbmUobGluZSkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChsaW5lLmlkKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwieDFcIiwgc2NhbGUobGluZS54MSkpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCBzY2FsZShsaW5lLnkxKSk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcIngyXCIsIHNjYWxlKGxpbmUueDIpKTtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwieTJcIiwgc2NhbGUobGluZS55MikpO1xyXG4gICAgZGlzcGxheUlubGluZUJ5RWxlbWVudChlbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q2lyY2xlQXR0cmlidXRlc0J5SWQoY2lyY2xlSWQsIGN4LCBjeSwgcikge1xyXG4gICAgdmFyIGNpcmNsZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaXJjbGVJZCk7XHJcbiAgICBzZXRDaXJjbGVBdHRyaWJ1dGVzKGNpcmNsZUVsZW1lbnQsIGN4LCBjeSwgcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldENpcmNsZUF0dHJpYnV0ZXMoY2lyY2xlRWxlbWVudCwgY3gsIGN5LCByKSB7XHJcbiAgICBjaXJjbGVFbGVtZW50LnNldEF0dHJpYnV0ZShcInJcIiwgc2NhbGUocikpO1xyXG4gICAgY2lyY2xlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBzY2FsZShjeCkpO1xyXG4gICAgY2lyY2xlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBzY2FsZShjeSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRHcmFkaWVudEF0dHJpYnV0ZXMoZ3JhZGllbnRJZCwgY3gsIGN5LCByKSB7XHJcbiAgICB2YXIgZ3JhZGllbnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ3JhZGllbnRJZCk7XHJcbiAgICBzZXRDaXJjbGVBdHRyaWJ1dGVzKGdyYWRpZW50RWxlbWVudCwgY3gsIGN5LCByKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0NpcmNsZVdpdGhHcmFkaWVudChvYmopIHtcclxuICAgIHZhciBncmFkaWVudElkID0gXCJncmFkaWVudFwiICsgb2JqLmlkLmNhcGl0YWxpemVGaXJzdExldHRlcigpO1xyXG4gICAgc2V0R3JhZGllbnRBdHRyaWJ1dGVzKGdyYWRpZW50SWQsIG9iai5jeCwgb2JqLmN5LCBvYmoucik7XHJcbiAgICBkcmF3Q2lyY2xlKG9iaik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5SW5saW5lQnlJZChpZCkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICBkaXNwbGF5SW5saW5lQnlFbGVtZW50KGVsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUlubGluZUJ5RWxlbWVudChlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc3BsYXlcIiwgXCJpbmxpbmVcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Tm9uZUJ5SWQoaWQpIHtcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgZGlzcGxheU5vbmVCeUVsZW1lbnQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlOb25lQnlFbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVTdmdCeUlkKGlkLCBhbmdsZURlZykge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIGFuZ2xlRGVnICsgXCIpXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3Q2xvY2tBeGlzU3lzdGVtKCkge1xyXG4gICAgdmFyIGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb2NrQXhpc1N5c3RlbVwiKTtcclxuICAgIGUuc2V0QXR0cmlidXRlKFwiZGlzcGxheVwiLCBcImlubGluZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZHJhd0Nsb2NrTnVtYmVycygpIHtcclxuICAgIHZhciByID0gc2NhbGUoY2FuY3JpVHJvcGljdXMucikgKiAwLjk7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgICB2YXIgdGV4dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm51bWJlclwiICsgaS50b1N0cmluZygpKTtcclxuICAgICAgICB2YXIgcG9zaXRpb25FbGVtZW50ID0gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9zaXRpb25cIiArICsgaS50b1N0cmluZygpKTtcclxuICAgICAgICB2YXIgYW5nbGUgPSBpICogMTU7XHJcbiAgICAgICAgdmFyIGFuZ2xlUmFkID0gZGVnMnJhZChkZWcyc3VuKGFuZ2xlKSk7XHJcbiAgICAgICAgdmFyIHggPSBNYXRoLmNvcyhhbmdsZVJhZCkgKiByO1xyXG4gICAgICAgIHZhciB5ID0gTWF0aC5zaW4oYW5nbGVSYWQpICogcjtcclxuICAgICAgICBwb3NpdGlvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiIFwiICsgeSArIFwiKVwiKTtcclxuICAgICAgICB0ZXh0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoXCIgKyBhbmdsZSArIFwiIDAsMClcIik7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5SW5saW5lQnlJZChcImNsb2NrXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWm9kaWFjdW0oYW5nbGVEZWcpIHsgICAvLyBhbmdsZURlZyBmcm9tIGF1dHVtbiBlcXVpbm94ICAgKDAgLi4uIGVxdWlub3gsIDkwIC4uLiB3aW50ZXIgc29sc3RpY2UpXHJcbiAgICB2YXIgem9kaWFjdW1Hcm91cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiem9kaWFjdW1cIik7XHJcbiAgICB6b2RpYWN1bUdyb3VwLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZShcIiArIGFuZ2xlRGVnICsgXCIpXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3Wm9kaWFjdW0oKSB7XHJcbiAgICBkcmF3Q2lyY2xlKG1hc2tDaXJjbGVab2RpYWN1bU91dGVyKTtcclxuICAgIGRyYXdDaXJjbGUoaG9sZUNpcmNsZVpvZGlhY3VtSW5uZXIpO1xyXG4gICAgZHJhd0NpcmNsZSh6b2RpYWN1bU91dGVyQ2lyY2xlKTtcclxuICAgIGRyYXdDaXJjbGUoem9kaWFjdW1Jbm5lckNpcmNsZSk7XHJcbiAgICBkcmF3TGluZSh6b2RpYWN1bUVxdWlub3gpO1xyXG4gICAgZHJhd0xpbmUoem9kaWFjdW1Tb2xzdGljZSk7XHJcblxyXG4gICAgdmFyIGN4ID0gc2NhbGUoem9kaWFjdW1PdXRlckNpcmNsZS5jeCk7XHJcbiAgICB2YXIgY3kgPSBzY2FsZSh6b2RpYWN1bU91dGVyQ2lyY2xlLmN5KTtcclxuICAgIGNvbnN0IHpvb2RpYWNDZW50ZXIgPSB7eDpjeCwgeTpjeX07XHJcbiAgICB2YXIgciA9IHNjYWxlKHpvZGlhY3VtT3V0ZXJDaXJjbGUucik7XHJcbiAgICB2YXIgcmFkaXVzMiA9IHNjYWxlKHpvZGlhY3VtSW5uZXJDaXJjbGUucik7XHJcbiAgICB2YXIgcGllY2VzID0gem9kaWFjdW1QaWVjZXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICB2YXIgbGVmdE91dGVyID0gc2NhbGVQb2ludCh6b2RpYWN1bU91dGVyUG9pbnRzLnBvaW50W2ldKTtcclxuICAgICAgICB2YXIgbGVmdElubmVyID0gc2NhbGVQb2ludCh6b2RpYWN1bUlubmVyUG9pbnRzLnBvaW50W2ldKTtcclxuICAgICAgICB2YXIgY2VudGVyUG9pbnQgPSBzY2FsZVBvaW50KHpvZGlhY3VtQ2VudGVyUG9pbnRzLnBvaW50W2ldKTtcclxuICAgICAgICBzZXRUcmFuc2xhdGVCeUlkKFwicG9zaXRpb25TaWduXCIgKyBpLCBjZW50ZXJQb2ludCk7XHJcbiAgICAgICAgdmFyIGlkID0gXCJzaWduXCIgKyBpO1xyXG4gICAgICAgIHZhciBzaWduID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIHNpZ24uc2V0QXR0cmlidXRlKFwieFwiLCBcIjBcIik7XHJcbiAgICAgICAgc2lnbi5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiMFwiKTtcclxuICAgICAgICBzaWduLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTEwXCIpO1xyXG4gICAgICAgIHNpZ24uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTEwXCIpO1xyXG4gICAgICAgIHNldFJvdGF0ZUJ5SWQoaWQsIC1pICogMzAgLSAxNSwge3g6IDAsIHk6IDB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0WFlCeUlkKFwic2lnblwiICsgaSwgLTUsIC01KTtcclxuICAgICAgICB2YXIgYXJjWiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXJjWlwiICsgaS50b1N0cmluZygpKTtcclxuICAgICAgICB2YXIgbGVmdEJhciA9IFtcIk1cIiwgbGVmdE91dGVyLngsIGxlZnRPdXRlci55LCBcIkxcIiwgbGVmdElubmVyLngsIGxlZnRJbm5lci55XS5qb2luKCcgJyk7XHJcbiAgICAgICAgdmFyIGR6ID0gW2xlZnRCYXJdLmpvaW4oJyAnKTtcclxuICAgICAgICBhcmNaLnNldEF0dHJpYnV0ZShcImRcIiwgZHopO1xyXG4gICAgICAgIGFyY1ouc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwib3JhbmdlXCIpO1xyXG4gICAgICAgIGFyY1ouc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMlwiKTtcclxuICAgICAgICBhcmNaLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0FzdHJvbm9taWNhbENsb2NrKCkge1xyXG4gICAgZHJhd0NpcmNsZShjbGlwQ2lyY2xlQ2FuY3JpVHJvcGljdXMpO1xyXG4gICAgLy8gZHJhd1BvaW50KG9yYmlzQ2VudGVyKTtcclxuICAgIC8vIG1vdmVDbGlja01lKDAsIG9yYmlzLnIsIFwiY2xpY2tPcmJpc0NlbnRlcigpXCIpO1xyXG4gICAgZHJhd0NpcmNsZVdpdGhHcmFkaWVudChlcXVhdG9yKTtcclxuICAgIGRyYXdDaXJjbGVXaXRoR3JhZGllbnQoY2FuY3JpVHJvcGljdXMpO1xyXG4gICAgZHJhd0NpcmNsZVdpdGhHcmFkaWVudChjYXByaWNvcm5pVHJvcGljdXMpO1xyXG4gICAgZHJhd0NpcmNsZVdpdGhHcmFkaWVudChsYXRpdHVkb0hvcml6b250aXMpO1xyXG4gICAgZHJhd0NpcmNsZShvcGFjdXNIb3Jpem9udGlzKTtcclxuICAgIGRyYXdDbG9ja051bWJlcnMoKTtcclxuICAgIGRyYXdJbmZvVGV4dCgpO1xyXG4gICAgZHJhd1pvZGlhY3VtKCk7XHJcbiAgICBkcmF3T2xkVGltZSgpO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2NyaWJlQXJjKHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpIHtcclxuICAgIHZhciBzdGFydCA9IHBvbGFyMkNhcnRlc2lhbih4LCB5LCByYWRpdXMsIGVuZEFuZ2xlKTtcclxuICAgIHZhciBlbmQgPSBwb2xhcjJDYXJ0ZXNpYW4oeCwgeSwgcmFkaXVzLCBzdGFydEFuZ2xlKTtcclxuICAgIHZhciBsYXJnZUFyY0ZsYWcgPSBlbmRBbmdsZSAtIHN0YXJ0QW5nbGUgPD0gMTgwID8gXCIwXCIgOiBcIjFcIjtcclxuICAgIHJldHVybiBkZXNjcmliZUFyY0J5Q2FydGVzaWFuKHN0YXJ0LCByYWRpdXMsIGxhcmdlQXJjRmxhZywgZW5kKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVzY3JpYmVBcmNCeUNhcnRlc2lhbihzdGFydCwgcmFkaXVzLCBsYXJnZUFyY0ZsYWcsIGVuZCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBcIk1cIiwgcGFyc2VGbG9hdChzdGFydC54LnRvRml4ZWQoOCkpLCBwYXJzZUZsb2F0KHN0YXJ0LnkudG9GaXhlZCg4KSksXHJcbiAgICAgICAgXCJBXCIsIHJhZGl1cywgcmFkaXVzLCAwLCBsYXJnZUFyY0ZsYWcsIDAsIHBhcnNlRmxvYXQoZW5kLngudG9GaXhlZCg4KSksIHBhcnNlRmxvYXQoZW5kLnkudG9GaXhlZCg4KSlcclxuICAgIF0uam9pbihcIiBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdJbmZvVGV4dCgpIHtcclxuICAgIHZhciByID0gc2NhbGUoZXF1YXRvci5yKSAqIDEuMTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgIHZhciB0ZXh0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5mb1wiICsgaS50b1N0cmluZygpKTtcclxuICAgICAgICB2YXIgYW5nbGUgPSBpICogOCAtIDYwO1xyXG4gICAgICAgIHZhciBhbmdsZVJhZCA9IGRlZzJyYWQoZGVnMnN1bihhbmdsZSkpO1xyXG4gICAgICAgIHZhciB4ID0gTWF0aC5jb3MoYW5nbGVSYWQpICogcjtcclxuICAgICAgICB2YXIgeSA9IE1hdGguc2luKGFuZ2xlUmFkKSAqIHI7XHJcbiAgICAgICAgdGV4dEVsZW1lbnQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeCArIFwiIFwiICsgeSArIFwiKSByb3RhdGUoXCIgKyBhbmdsZSArIFwiIDAsMClcIik7XHJcbiAgICAgICAgZGlzcGxheUlubGluZUJ5SWQoXCJpbmZvXCIgKyBpLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3T2xkVGltZSgpIHtcclxuICAgIGRyYXdDaXJjbGUobWFza0NpcmNsZU9sZFRpbWVPdXRlcik7XHJcbiAgICBkcmF3Q2lyY2xlKGhvbGVDaXJjbGVPbGRUaW1lSW5uZXIpO1xyXG4gICAgZHJhd0NpcmNsZShvbGRUaW1lT3V0ZXJDaXJjbGUpO1xyXG4gICAgZHJhd0NpcmNsZShvbGRUaW1lSW5uZXJDaXJjbGUpO1xyXG4gICAgdmFyIHIgPSBzY2FsZShjYW5jcmlUcm9waWN1cy5yKSAqIDEuMDI7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IDI1OyBpKyspIHtcclxuICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbGR0aW1lXCIgKyBpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHZhciBhbmdsZSA9IChpIC0gMSkgKiAxNTtcclxuICAgICAgICB2YXIgYW5nbGVSYWQgPSBkZWcycmFkKGRlZzJzdW4oYW5nbGUpKTtcclxuICAgICAgICB2YXIgeCA9IE1hdGguY29zKGFuZ2xlUmFkKSAqIHI7XHJcbiAgICAgICAgdmFyIHkgPSBNYXRoLnNpbihhbmdsZVJhZCkgKiByO1xyXG4gICAgICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiLTI1XCIpO1xyXG4gICAgICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiLTE1XCIpO1xyXG4gICAgICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjExMFwiKTtcclxuICAgICAgICBpbWFnZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTEwXCIpO1xyXG4gICAgICAgIGltYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCIgXCIgKyB5ICsgXCIpIHJvdGF0ZShcIiArIGFuZ2xlICsgXCIgMCwwKVwiKTtcclxuICAgICAgICBkaXNwbGF5SW5saW5lQnlJZChcIm9sZHRpbWVcIiArIGkudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuLi9jc3MvYXN0cm8uY3NzJztcclxuaW1wb3J0ICcuL21hdGgnO1xyXG5pbXBvcnQgJy4vYW5pbWF0aW9ucyc7XHJcbmltcG9ydCAnLi9jbG9ja29iaic7XHJcbmltcG9ydCAnLi9jb25zdHJ1Y3Rpb24nO1xyXG5pbXBvcnQgJy4vZ2VvbWV0cnknO1xyXG5pbXBvcnQgJy4vZ3JhcGhpY3MnO1xyXG5pbXBvcnQgJy4vdGltZSc7XHJcbmltcG9ydCB7XHJcbiAgICBjb25zdHJ1Y3RBc3Ryb25vbWljYWxDbG9jayxcclxuICAgIG1vb25IYW5kbGUsIG1vb25TaGFwZSxcclxuICAgIG1vb25TeW1ib2wsXHJcbiAgICBzY2FsZSxcclxuICAgIHN0YXJTeW1ib2wsXHJcbiAgICBzdW5IYW5kbGUsXHJcbiAgICBzdW5TeW1ib2wsXHJcbiAgICB6b2RpYWN1bVxyXG59IGZyb20gXCIuL2Nsb2Nrb2JqXCI7XHJcbmltcG9ydCB7ZGVnMnJhZCwgaXNFYXN5Rm9yVGFuZ2VudHMsIG5vcm1hbGl6ZUFuZ2xlRGVnLCBxdWFkcmF0aWNFcXVhdGlvbn0gZnJvbSBcIi4vbWF0aFwiO1xyXG5pbXBvcnQgKiBhcyBteU1hdGggZnJvbSBcIi4vbWF0aFwiO1xyXG5pbXBvcnQge2Rpc3BsYXlJbmxpbmVCeUlkLCBkcmF3QXN0cm9ub21pY2FsQ2xvY2ssIHJvdGF0ZVpvZGlhY3VtfSBmcm9tIFwiLi9ncmFwaGljc1wiO1xyXG5pbXBvcnQge2FzdHJvbm9taWNhbENsb2NrVGltZSwgZGF0ZVRvU3VuVGltZUFuZ2xlLCBkYXlsaWdodFNhdmluZ1RpbWVTd2l0Y2gsIHN1bjJkZWd9IGZyb20gXCIuL3RpbWVcIjtcclxuaW1wb3J0IHtcclxuICAgIHN0YXJ0QW5pbWF0ZURheWxpZ2h0U2F2aW5nVGltZU9mZiwgc3RhcnRBbmltYXRlRGF5bGlnaHRTYXZpbmdUaW1lT24sXHJcbiAgICBzdGFydEFzdHJvbm9taWNhbENsb2NrLFxyXG4gICAgc3RvcEFzdHJvbm9taWNhbENsb2NrXHJcbn0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gY29tcHV0ZVBvc2l0aW9uT25FY2xpcHNlKGFuZ2xlRGVnLCB6b2RpYWN1bSkge1xyXG4gICAgdmFyIG5vcm1hbGl6ZWRBbmdsZSA9IG5vcm1hbGl6ZUFuZ2xlRGVnKGFuZ2xlRGVnKTtcclxuICAgIHZhciBtID0gem9kaWFjdW0uY3g7XHJcbiAgICB2YXIgbiA9IHpvZGlhY3VtLmN5O1xyXG4gICAgdmFyIHIgPSB6b2RpYWN1bS5yO1xyXG4gICAgdmFyIHh5U3lzdGVtID0gdHJ1ZTtcclxuICAgIGlmICghbXlNYXRoLmlzRWFzeUZvclRhbmdlbnRzKG5vcm1hbGl6ZWRBbmdsZSkpIHtcclxuICAgICAgICBub3JtYWxpemVkQW5nbGUgPSBub3JtYWxpemVBbmdsZURlZyhub3JtYWxpemVkQW5nbGUgLSA5MCk7XHJcbiAgICAgICAgbSA9IFtuLCBuPS1tXVswXTsgICAgLy8gbSA9IG4sIG4gPSAtbVxyXG4gICAgICAgIHh5U3lzdGVtID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB2YXIgcGhpID0gZGVnMnJhZChub3JtYWxpemVkQW5nbGUpO1xyXG4gICAgdmFyIHRnUGhpID0gTWF0aC50YW4ocGhpKTtcclxuICAgIHZhciBhID0gMSArIE1hdGgucG93KHRnUGhpLCAyKTtcclxuICAgIHZhciBiID0gLTIgKiAobSArIG4gKiB0Z1BoaSk7XHJcbiAgICB2YXIgYyA9IG0gKiBtICsgbiAqIG4gLSByICogcjtcclxuICAgIHZhciB4ID0gMDtcclxuICAgIGlmIChub3JtYWxpemVkQW5nbGUgPD0gNDUgJiYgbm9ybWFsaXplZEFuZ2xlID4gLTQ1KSB7XHJcbiAgICAgICAgeCA9IHF1YWRyYXRpY0VxdWF0aW9uKGEsIGIsIGMpLngxO1xyXG4gICAgfVxyXG4gICAgaWYgKG5vcm1hbGl6ZWRBbmdsZSA+IDEzNSB8fCBub3JtYWxpemVkQW5nbGUgPD0gLTEzNSkge1xyXG4gICAgICAgIHggPSBxdWFkcmF0aWNFcXVhdGlvbihhLCBiLCBjKS54MjtcclxuICAgIH1cclxuICAgIGxldCB5ID0gdGdQaGkgKiB4O1xyXG4gICAgaWYgKCF4eVN5c3RlbSkge1xyXG4gICAgICAgIC8vbm9pbnNwZWN0aW9uIEpTU3VzcGljaW91c05hbWVDb21iaW5hdGlvblxyXG4gICAgICAgIHggPSBbLXksIHkgPSB4XVswXTsgICAgLy8geCA9IC0geSwgeSA9IHhcclxuICAgIH1cclxuICAgIHJldHVybiB7eDogc2NhbGUoeCksIHk6IHNjYWxlKHkpfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlWm9kaWFjdW1BbmdsZURlZyhkYXRlKSB7XHJcbiAgICB2YXIgZXF1aW5veERhdGUgPSBuZXcgRGF0ZSgyMDE2LDgsMjIsMTAsMjIpOyAgICAvLyBhdXR1bW4gZXF1aW5veFxyXG4gICAgLy8gdmFyIGVxdWlub3hEYXRlID0gbmV3IERhdGUoMjAxNiwyLDIwLDUsMzEpOyAgICAvLyBzcHJpbmcgZXF1aW5veFxyXG4gICAgdmFyIGVoID0gZXF1aW5veERhdGUuZ2V0SG91cnMoKTtcclxuICAgIHZhciBlbSA9IGVxdWlub3hEYXRlLmdldE1pbnV0ZXMoKTtcclxuICAgIHZhciBlcXVpbm94VGltZUFuZ2xlID0gZWggKiAxNSArIGVtIC8gNDtcclxuICAgIHZhciB0aW1lem9uZUFuZ2xlID0gYXN0cm9ub21pY2FsQ2xvY2tUaW1lLnRpbWV6b25lICogMTU7XHJcbiAgICB2YXIgdGltZURpZmZEYXlzID0gKGRhdGUuZ2V0VGltZSgpIC0gZXF1aW5veERhdGUuZ2V0VGltZSgpKSAvIDYwMDAwIC8gNjAgLzI0O1xyXG4gICAgdmFyIGFuZ2xlQ29ycmVjdGlvbiA9IC0gMS41ICogTWF0aC5jb3ModGltZURpZmZEYXlzIC8gMzY1LjI1ICogMiAqIE1hdGguUEkpICsgMS41O1xyXG4gICAgcmV0dXJuICh0aW1lRGlmZkRheXMgKiAzNjAgKiAzNjYuMjUgLyAzNjUuMjUgKyBlcXVpbm94VGltZUFuZ2xlIC0gdGltZXpvbmVBbmdsZSArIGFuZ2xlQ29ycmVjdGlvbikgJSAzNjA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXB1dGVNb29uQW5nbGVEZWcoZGF0ZSkge1xyXG4gICAgdmFyIHN5bm9kaWNNb29uID0gMjkuNTMwNTg4ODUzOyAgICAgLy8gZGF5c1xyXG4gICAgdmFyIGRheVNwZWVkID0gKHN5bm9kaWNNb29uIC0gMSkgLyBzeW5vZGljTW9vbjtcclxuICAgIHZhciBhTmV3TW9vbkRhdGUgPSBuZXcgRGF0ZSgyMDE2LCA4LCAxLCAxMSwgMywgMCk7XHJcbiAgICB2YXIgdGltZURpZmZlcmVuY2UgPSBkYXRlLmdldFRpbWUoKSAtIGFOZXdNb29uRGF0ZS5nZXRUaW1lKCk7XHJcbiAgICB2YXIgdGltZURpZmZNaW5zID0gdGltZURpZmZlcmVuY2UgLyA2MDAwMDtcclxuICAgIHZhciB0aW1lRGlmZkhvdXJzID0gdGltZURpZmZNaW5zIC8gNjA7XHJcbiAgICB2YXIgdGltZURpZmZEYXlzID0gdGltZURpZmZIb3VycyAvIDI0O1xyXG4gICAgcmV0dXJuICh0aW1lRGlmZkRheXMgKiBkYXlTcGVlZCAqIDM2MCArIGRhdGVUb1N1blRpbWVBbmdsZShhTmV3TW9vbkRhdGUpKSAlIDM2MDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0RpZ2l0YWxUaW1lKCkge1xyXG4gICAgdmFyIGQgPSBhc3Ryb25vbWljYWxDbG9ja1RpbWUudG9EYXRlKCk7XHJcbiAgICBpZiAoYXN0cm9ub21pY2FsQ2xvY2tUaW1lLmRzdCgpICYmICFkYXlsaWdodFNhdmluZ1RpbWVTd2l0Y2guc3RhdHVzKSB7XHJcbiAgICAgICAgZCA9IG5ldyBEYXRlKGFzdHJvbm9taWNhbENsb2NrVGltZS5udW1iZXIgLSAzNjAwMDAwKTtcclxuICAgIH1cclxuICAgIHZhciB0aW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGltZVwiKTtcclxuICAgIHZhciB0aW1lem9uZSA9IGFzdHJvbm9taWNhbENsb2NrVGltZS50aW1lem9uZTtcclxuICAgIHRpbWVFbGVtZW50LmlubmVyVGV4dCA9IGQudG9Mb2NhbGVTdHJpbmcoKSArIFwiIFRpbWV6b25lOiBcIiArICgodGltZXpvbmUgPiAwKSA/IFwiK1wiIDogXCItXCIpICsgdGltZXpvbmUgK1xyXG4gICAgXCIgRFNUOiBcIiArIChhc3Ryb25vbWljYWxDbG9ja1RpbWUuZHN0KCkgPyBcIk9OXCIgOiBcIk9GRlwiKTtcclxuICAgIGRheWxpZ2h0U2F2aW5nVGltZVN3aXRjaC5kcmF3KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93QXN0cm9ub21pY2FsVG9kYXlUaW1lKCkge1xyXG4gICAgYXN0cm9ub21pY2FsQ2xvY2tUaW1lLnVwZGF0ZSgpO1xyXG4gICAgc2hvd0FzdHJvbm9taWNhbFRpbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBc3Ryb25vbWljYWxUaW1lKCkge1xyXG4gICAgdmFyIGQgPSBhc3Ryb25vbWljYWxDbG9ja1RpbWUudG9EYXRlKCk7XHJcbiAgICB2YXIgem9kaWFjdW1BbmdsZURlZyA9IGNvbXB1dGVab2RpYWN1bUFuZ2xlRGVnKGQpO1xyXG4gICAgdmFyIHN1bkFuZ2xlRGVnID0gc3VuMmRlZyhkYXRlVG9TdW5UaW1lQW5nbGUoZCkpO1xyXG4gICAgdmFyIG1vb25BbmdsZURlZyA9IHN1bjJkZWcoY29tcHV0ZU1vb25BbmdsZURlZyhkKSk7XHJcbiAgICByb3RhdGVab2RpYWN1bSh6b2RpYWN1bUFuZ2xlRGVnKTtcclxuICAgIHpvZGlhY3VtLmNvbXB1dGUoem9kaWFjdW1BbmdsZURlZyk7XHJcbiAgICB2YXIgc3VuID0gY29tcHV0ZVBvc2l0aW9uT25FY2xpcHNlKHN1bkFuZ2xlRGVnLCB6b2RpYWN1bSk7XHJcbiAgICBzdW5IYW5kbGUuc2hvd0J5VGltZShkKTtcclxuICAgIHN1blN5bWJvbC5zaG93QXQoc3VuLngsIHN1bi55KTtcclxuICAgIHN0YXJTeW1ib2wuc2hvdygpO1xyXG4gICAgdmFyIG1vb24gPSBjb21wdXRlUG9zaXRpb25PbkVjbGlwc2UobW9vbkFuZ2xlRGVnLCB6b2RpYWN1bSk7XHJcbiAgICBtb29uSGFuZGxlLnNob3cobW9vbkFuZ2xlRGVnKTtcclxuICAgIG1vb25TaGFwZS5jb21wdXRlKHN1bkFuZ2xlRGVnLCBtb29uQW5nbGVEZWcpO1xyXG4gICAgbW9vblN5bWJvbC5zaG93QXQobW9vbi54LCBtb29uLnksIG1vb25BbmdsZURlZyArIDkwKTtcclxuICAgIHNob3dEaWdpdGFsVGltZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXlsaWdodFNhdmluZ1RpbWVPbigpIHtcclxuICAgIGRheWxpZ2h0U2F2aW5nVGltZVN3aXRjaC5tYWtlVW5jbGlja2FibGUoKTtcclxuICAgIHN0YXJ0QW5pbWF0ZURheWxpZ2h0U2F2aW5nVGltZU9uKCk7XHJcbiAgICBkYXlsaWdodFNhdmluZ1RpbWVTd2l0Y2gub24oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGF5bGlnaHRTYXZpbmdUaW1lT2ZmKCkge1xyXG4gICAgZGF5bGlnaHRTYXZpbmdUaW1lU3dpdGNoLm1ha2VVbmNsaWNrYWJsZSgpO1xyXG4gICAgc3RhcnRBbmltYXRlRGF5bGlnaHRTYXZpbmdUaW1lT2ZmKCk7XHJcbiAgICBkYXlsaWdodFNhdmluZ1RpbWVTd2l0Y2gub2ZmKCk7XHJcbn1cclxuXHJcbmNvbnN0cnVjdEFzdHJvbm9taWNhbENsb2NrKCk7XHJcbmRyYXdBc3Ryb25vbWljYWxDbG9jaygpO1xyXG5cclxuYXN0cm9ub21pY2FsQ2xvY2tUaW1lLmluaXQoKTtcclxuZGF5bGlnaHRTYXZpbmdUaW1lU3dpdGNoLmluaXQoKTtcclxuaWYgKGRheWxpZ2h0U2F2aW5nVGltZVN3aXRjaC5zdGF0dXMpIHtcclxuICAgIGRheWxpZ2h0U2F2aW5nVGltZU9mZigpO1xyXG59XHJcblxyXG5zaG93QXN0cm9ub21pY2FsVG9kYXlUaW1lKCk7XHJcbmRpc3BsYXlJbmxpbmVCeUlkKFwiem9kaWFjdW1cIik7XHJcbmRpc3BsYXlJbmxpbmVCeUlkKFwibW9vblBoYXNlXCIpO1xyXG5kaXNwbGF5SW5saW5lQnlJZChcInN1blN5bWJvbFwiKTtcclxuYWRkTGlzdGVuZXIoXCJ6b2RpYWN1bVwiLCB6b2RpYWNXaGVlbCk7XHJcbmFkZExpc3RlbmVyKFwidGltZVwiLCBzdW5XaGVlbCk7XHJcblxyXG4vLyB1xI1lc2F0XHJcbnZhciB6b2RpYWN1bVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiem9kaWFjdW1TbGlkZXJcIik7XHJcbnpvZGlhY3VtU2xpZGVyLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHN0b3BBc3Ryb25vbWljYWxDbG9jaygpO1xyXG4gICAgYXN0cm9ub21pY2FsQ2xvY2tUaW1lLnVwZGF0ZSgpO1xyXG4gICAgYXN0cm9ub21pY2FsQ2xvY2tUaW1lLmFkZERheXModGhpcy52YWx1ZSk7XHJcbiAgICBzaG93QXN0cm9ub21pY2FsVGltZSgpO1xyXG59XHJcblxyXG5zdGFydEFzdHJvbm9taWNhbENsb2NrKCk7XHJcbi8vYW5pbWF0ZURheUFyb3VuZCgpO1xyXG4vLyBhbmltYXRlWWVhckFyb3VuZCgpO1xyXG5cclxuZnVuY3Rpb24gYWRkTGlzdGVuZXIoaWQsIHdoZWVsRnVuY3Rpb24pIHtcclxuICAgIC8vIFpvZGlhY3VtICh5ZWFyIGN5Y2xlKVxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmIChlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gSUU5LCBDaHJvbWUsIFNhZmFyaSwgT3BlcmFcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIHdoZWVsRnVuY3Rpb24sIGZhbHNlKTtcclxuICAgICAgICAvLyBGaXJlZm94XHJcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIiwgd2hlZWxGdW5jdGlvbiwgZmFsc2UpO1xyXG4gICAgfVxyXG4vLyBJRSA2LzcvOFxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoXCJvbm1vdXNld2hlZWxcIiwgd2hlZWxGdW5jdGlvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiB6b2RpYWNXaGVlbChlKVxyXG57XHJcbiAgICAvLyBjcm9zcy1icm93c2VyIHdoZWVsIGRlbHRhXHJcbiAgICB2YXIgZSA9IHdpbmRvdy5ldmVudCB8fCBlOyAvLyBvbGQgSUUgc3VwcG9ydFxyXG4gICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIChlLndoZWVsRGVsdGEgfHwgLWUuZGV0YWlsKSkpO1xyXG4gICAgYXBpQWRkRGF5cygtZGVsdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdW5XaGVlbChlKVxyXG57XHJcbiAgICAvLyBjcm9zcy1icm93c2VyIHdoZWVsIGRlbHRhXHJcbiAgICB2YXIgZSA9IHdpbmRvdy5ldmVudCB8fCBlOyAvLyBvbGQgSUUgc3VwcG9ydFxyXG4gICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIChlLndoZWVsRGVsdGEgfHwgLWUuZGV0YWlsKSkpO1xyXG4gICAgYXBpQWRkTWludXRlcygtIGRlbHRhICogMjApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXNzZWRFc2MoZXZlbnQpIHtcclxuICAgIHZhciB4ID0gZXZlbnQud2hpY2ggfHwgZXZlbnQua2V5Q29kZTtcclxuICAgIHN0YXJ0QXN0cm9ub21pY2FsQ2xvY2soKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBpQWRkRGF5cyhkYXlzKSB7XHJcbiAgICBzdG9wQXN0cm9ub21pY2FsQ2xvY2soKTtcclxuICAgIGFzdHJvbm9taWNhbENsb2NrVGltZS5hZGREYXlzKGRheXMpO1xyXG4gICAgc2hvd0FzdHJvbm9taWNhbFRpbWUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBpQWRkTWludXRlcyhtaW51dGVzKSB7XHJcbiAgICBzdG9wQXN0cm9ub21pY2FsQ2xvY2soKTtcclxuICAgIGFzdHJvbm9taWNhbENsb2NrVGltZS5hZGRNaW51dGVzKG1pbnV0ZXMpO1xyXG4gICAgc2hvd0FzdHJvbm9taWNhbFRpbWUoKTtcclxufVxyXG5cclxud2luZG93LmRheWxpZ2h0U2F2aW5nVGltZU9mZiA9IGRheWxpZ2h0U2F2aW5nVGltZU9mZjtcclxud2luZG93LmRheWxpZ2h0U2F2aW5nVGltZU9uID0gZGF5bGlnaHRTYXZpbmdUaW1lT247XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkZWcycmFkKGRlZykge1xyXG4gICAgcmV0dXJuIGRlZyAqIE1hdGguUEkgLyAxODA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvcHBvc2l0ZUFuZ2xlKHJhZCkge1xyXG4gICAgcmV0dXJuIE1hdGguUEkgKyByYWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2xhcjJDYXJ0ZXNpYW4oY2VudGVyWCwgY2VudGVyWSwgcmFkaXVzLCBhbmdsZURlZykge1xyXG4gICAgY29uc3QgYW5nbGVSYWQgPSBkZWcycmFkKGFuZ2xlRGVnKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHg6IGNlbnRlclggKyAocmFkaXVzICogTWF0aC5jb3MoYW5nbGVSYWQpKSxcclxuICAgICAgICB5OiBjZW50ZXJZICsgKHJhZGl1cyAqIE1hdGguc2luKGFuZ2xlUmFkKSlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxdWFkcmF0aWNFcXVhdGlvbihhLCBiLCBjKSB7XHJcbiAgICBjb25zdCBkID0gcXVhZHJhdGljRGlzY3JpbWluYW50KGEsIGIsIGMpO1xyXG4gICAgaWYgKGQgPj0gMCkge1xyXG4gICAgICAgIGNvbnN0IGEyID0gMiAqIGE7XHJcbiAgICAgICAgY29uc3Qgc3FydEQgPSBNYXRoLnNxcnQoZCk7XHJcbiAgICAgICAgY29uc3QgeDEgPSAoLWIgKyBzcXJ0RCkgLyBhMjtcclxuICAgICAgICBjb25zdCB4MiA9ICgtYiAtIHNxcnREKSAvIGEyO1xyXG4gICAgICAgIHJldHVybiB7eDE6IHgxLCB4MjogeDJ9O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBxdWFkcmF0aWNEaXNjcmltaW5hbnQoYSwgYiwgYykge1xyXG4gICAgcmV0dXJuIGIgKiBiIC0gNCAqIGEgKiBjO1xyXG59XHJcblxyXG4vLyBjb252ZXJzaW9uIG9mIGFuZ2xlIGFib3ZlIDE4MCBkZWcgYW5kIGJlbG93IC0xODAgZGVnXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVBbmdsZURlZyhhbmdsZURlZykge1xyXG4gICAgY29uc3QgYW5nbGUgPSBhbmdsZURlZyAlIDM2MDtcclxuICAgIGlmIChhbmdsZSA+IDE4MCkge1xyXG4gICAgICAgIHJldHVybiBhbmdsZSAtIDM2MDsgLy8gY29udmVydGVkIHRvIG5lZ2F0aXZlIGFuZ2xlICgwLi4uLTE4MClcclxuICAgIH1cclxuICAgIGlmIChhbmdsZSA8IC0xODApIHtcclxuICAgICAgICByZXR1cm4gYW5nbGUgKyAzNjA7IC8vIGNvbnZlcnRlZCB0byBwb3NpdGl2ZSBhbmdsZSAoMC4uLjE4MClcclxuICAgIH1cclxuICAgIHJldHVybiBhbmdsZTsgICAvLyBjYW4gYmUgYmV0d2VlbiAtMTgwIGFuZCAxODBcclxufVxyXG5cclxuLy8gcmV0dXJuIHRydWUgaWYgYW5nbGUgaXMgYmV0d2VlbiAtNDUgYW5kIDQ1IGRlZyBvciBiZXR3ZWVuIDEzNSBhbmQgMjI1IGRlZy5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRWFzeUZvclRhbmdlbnRzKGFuZ2xlRGVnKSB7XHJcbiAgICBjb25zdCBub3JtYWxpemVkQW5nbGUgPSBub3JtYWxpemVBbmdsZURlZyhhbmdsZURlZyk7XHJcbiAgICBpZiAobm9ybWFsaXplZEFuZ2xlID4gLTQ1ICYmIG5vcm1hbGl6ZWRBbmdsZSA8PSA0NSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChub3JtYWxpemVkQW5nbGUgPiAxMzUgfHwgbm9ybWFsaXplZEFuZ2xlIDw9IC0xMzUpO1xyXG59XHJcbiIsImV4cG9ydCB2YXIgYXN0cm9ub21pY2FsQ2xvY2tUaW1lID0ge1xyXG4gICAgbnVtYmVyOiBudWxsLFxyXG4gICAgdGltZXpvbmU6IG51bGwsXHJcbiAgICBhZGREYXlzOiBmdW5jdGlvbiAoZGF5cykge1xyXG4gICAgICAgIHRoaXMubnVtYmVyICs9IGRheXMgKiAyNCAqIDM2MDAwMDA7XHJcbiAgICB9LFxyXG4gICAgYWRkSG91cnM6IGZ1bmN0aW9uIChob3Vycykge1xyXG4gICAgICAgIHRoaXMubnVtYmVyICs9IGhvdXJzICogMzYwMDAwMDtcclxuICAgIH0sXHJcbiAgICBhZGRNaW51dGVzOiBmdW5jdGlvbiAobWludXRlcykge1xyXG4gICAgICAgIHRoaXMubnVtYmVyICs9IG1pbnV0ZXMgKiA2MDAwMDtcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm51bWJlciA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgfSxcclxuICAgIHRvRGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLm51bWJlcik7XHJcbiAgICB9LFxyXG4gICAgZHN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHN0ZE9mZnNldCA9IHRoaXMuc3RkVGltZU9mZnNldCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgPCBzdGRPZmZzZXQ7XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy50aW1lem9uZSA9IC0gdGhpcy5zdGRUaW1lT2Zmc2V0KCkgLyA2MDtcclxuICAgIH0sXHJcbiAgICBzdGRUaW1lT2Zmc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGphbiA9IG5ldyBEYXRlKHRoaXMudG9EYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICAgICAgdmFyIGp1bCA9IG5ldyBEYXRlKHRoaXMudG9EYXRlKCkuZ2V0RnVsbFllYXIoKSwgNiwgMSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgubWF4KGphbi5nZXRUaW1lem9uZU9mZnNldCgpLCBqdWwuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG4gICAgLy8gcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKDIwMTcsOCwyMiwxNywyNCkpO1xyXG4gICAgLy8gcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKDIwMTcsMiwyMCwxMSwzMCkpO1xyXG4gICAgLy8gcmV0dXJuIG5ldyBEYXRlKDIwMTcsMiwyMCwxMSwzMCk7XHJcbiAgICAvLyByZXR1cm4gbmV3IERhdGUoMjAxNyw1LDIxLDE3LDI0KTtcclxuICAgIC8vICByZXR1cm4gbmV3IERhdGUoMjAxNyw4LDIyLDE3LDI0KTtcclxuXHJcbi8vIENvbnZlcnQgYW5nbGUgb2Ygc3VuIHRpbWUgdG8gbm9ybWFsIGFuZ2xlLlxyXG4vLyAwIC4uLiBNaWRuaWdodCAoOTAgZGVnKSwgMTgwIC4uLiBOb29uICgyNzAgZGVnKVxyXG5leHBvcnQgZnVuY3Rpb24gc3VuMmRlZyhzdW5BbmdsZSkge1xyXG4gICAgcmV0dXJuIChzdW5BbmdsZSArIDkwKSAlIDM2MDtcclxufVxyXG5cclxuLy8gQ29udmVydCBub3JtYWwgYW5nbGUgdG8gc3VuIHRpbWUgYW5nbGUuXHJcbi8vIDkwIGRlZyAoTWlkbmlnaHQpIC4uLiAwLCAyNzAgZGVnIChOb29uKSAuLi4gMTgwXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWcyc3VuKGFuZ2xlRGVnKSB7XHJcbiAgICByZXR1cm4gKGFuZ2xlRGVnICsgMjcwKSAlIDM2MDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRhdGVUb1N1blRpbWVBbmdsZShkYXRlKSB7XHJcbiAgICByZXR1cm4gKGRhdGUuZ2V0VVRDTWludXRlcygpICsgKGRhdGUuZ2V0VVRDSG91cnMoKSAgKyBhc3Ryb25vbWljYWxDbG9ja1RpbWUudGltZXpvbmUpICogNjApIC8gNFxyXG59XHJcblxyXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExODg3OTM0L2NoZWNrLWlmLWRheWxpZ2h0LXNhdmluZy10aW1lLWlzLWluLWVmZmVjdC1hbmQtaWYtaXQtaXMtZm9yLWhvdy1tYW55LWhvdXJzXHJcblxyXG5EYXRlLnByb3RvdHlwZS5zdGRUaW1lem9uZU9mZnNldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGphbiA9IG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgMCwgMSk7XHJcbiAgICB2YXIganVsID0gbmV3IERhdGUodGhpcy5nZXRGdWxsWWVhcigpLCA2LCAxKTtcclxuICAgIHJldHVybiBNYXRoLm1heChqYW4uZ2V0VGltZXpvbmVPZmZzZXQoKSwganVsLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xyXG59O1xyXG5cclxuRGF0ZS5wcm90b3R5cGUuZHN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRUaW1lem9uZU9mZnNldCgpIDwgdGhpcy5zdGRUaW1lem9uZU9mZnNldCgpO1xyXG59O1xyXG5cclxuRGF0ZS5wcm90b3R5cGUuYWRkSG91cnMgPSBmdW5jdGlvbihoKSB7XHJcbiAgIHRoaXMuc2V0VGltZSh0aGlzLmdldFRpbWUoKSArIChoKjYwKjYwKjEwMDApKTtcclxuICAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIGRheWxpZ2h0U2F2aW5nVGltZVN3aXRjaCA9IHtcclxuICAgIGlkOiBcImRzdFN3aXRjaFwiLFxyXG4gICAgc3RhdHVzOiBmYWxzZSxcclxuICAgIGNsaWNrYWJsZTogZmFsc2UsXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IGFzdHJvbm9taWNhbENsb2NrVGltZS5kc3QoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMpIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZSgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdXNwZW5kKClcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBvZmY6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2thYmxlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgZHN0U3dpdGNoT24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRzdE9uXCIpO1xyXG4gICAgICAgIGRzdFN3aXRjaE9uLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgXCJkYXlsaWdodFNhdmluZ1RpbWVPZmYoKVwiKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH0sXHJcbiAgICBzdXNwZW5kOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBkc3RTd2l0Y2hPZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRzdE9mZlwiKTtcclxuICAgICAgICBkc3RTd2l0Y2hPZmYuc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcIlwiKTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH0sXHJcbiAgICBkcmF3OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgZHN0U3dpdGNoT2ZmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkc3RPZmZcIik7XHJcbiAgICAgICAgdmFyIGRzdFN3aXRjaE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkc3RPblwiKTtcclxuICAgICAgICBkc3RTd2l0Y2hPZmYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgdGhpcy5jbGlja2FibGUgPyBcImNsaWNrYWJsZVwiIDogXCJ1bmNsaWNrYWJsZVwiKTtcclxuICAgICAgICBkc3RTd2l0Y2hPbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLmNsaWNrYWJsZSA/IFwiY2xpY2thYmxlXCIgOiBcInVuY2xpY2thYmxlXCIpO1xyXG4gICAgICAgIHZhciBvZmYgPSBcImRpc3BsYXk6IG5vbmVcIjtcclxuICAgICAgICB2YXIgb24gPSBcImRpc3BsYXk6IGlubGluZVwiO1xyXG4gICAgICAgIHZhciBkc3RPZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRzdE9mZlwiKTtcclxuICAgICAgICBkc3RPZmYuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdGhpcy5zdGF0dXMgPyBvZmYgOiBvbik7XHJcbiAgICAgICAgdmFyIGRzdE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkc3RPblwiKTtcclxuICAgICAgICBkc3RPbi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB0aGlzLnN0YXR1cyA/IG9uIDogb2ZmKTtcclxuICAgIH0sXHJcbiAgICBtYWtlVW5jbGlja2FibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsaWNrYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBkc3RTd2l0Y2hPZmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRzdE9mZlwiKTtcclxuICAgICAgICB2YXIgZHN0U3dpdGNoT24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRzdE9uXCIpO1xyXG4gICAgICAgIGRzdFN3aXRjaE9mZi5zZXRBdHRyaWJ1dGUoXCJvbmNsaWNrXCIsIFwiXCIpO1xyXG4gICAgICAgIGRzdFN3aXRjaE9uLnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIiwgXCJcIik7XHJcbiAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICB9LFxyXG4gICAgbWFrZUNsaWNrYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2thYmxlID0gdHJ1ZTtcclxuICAgICAgICB2YXIgZHN0U3dpdGNoT2ZmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkc3RPZmZcIik7XHJcbiAgICAgICAgdmFyIGRzdFN3aXRjaE9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkc3RPblwiKTtcclxuICAgICAgICBkc3RTd2l0Y2hPZmYuc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcImRheWxpZ2h0U2F2aW5nVGltZU9uKClcIik7XHJcbiAgICAgICAgZHN0U3dpdGNoT24uc2V0QXR0cmlidXRlKFwib25jbGlja1wiLCBcImRheWxpZ2h0U2F2aW5nVGltZU9mZigpXCIpO1xyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9