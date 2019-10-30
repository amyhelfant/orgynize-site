(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.assign.js"), require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.set-prototype-of.js"), require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.to-string.js"), require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.constructor.js"), require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.split.js"), require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.to-string.js"), require("/workspace/orgynize/packages/web/node_modules/lodash/lodash.js"), require("react"), require("react-dom/server"), require("react-dom/unstable-native-dependencies"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.assign.js", "/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.set-prototype-of.js", "/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.to-string.js", "/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.constructor.js", "/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.split.js", "/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.to-string.js", "/workspace/orgynize/packages/web/node_modules/lodash/lodash.js", "react", "react-dom/server", "react-dom/unstable-native-dependencies"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.assign.js"), require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.set-prototype-of.js"), require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.to-string.js"), require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.constructor.js"), require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.split.js"), require("/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.to-string.js"), require("/workspace/orgynize/packages/web/node_modules/lodash/lodash.js"), require("react"), require("react-dom/server"), require("react-dom/unstable-native-dependencies"));
	else
		root["lib"] = factory(root["/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.assign.js"], root["/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.set-prototype-of.js"], root["/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.to-string.js"], root["/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.constructor.js"], root["/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.split.js"], root["/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.to-string.js"], root["/workspace/orgynize/packages/web/node_modules/lodash/lodash.js"], root["react"], root["react-dom/server"], root["react-dom/unstable-native-dependencies"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_set_prototype_of__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_dom_unstable_native_dependencies__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/develop-static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!*********************************************************************************!*\
  !*** /workspace/orgynize/node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "../../node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!*******************************************************************************!*\
  !*** /workspace/orgynize/node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/debounce/index.js":
/*!**********************************************************!*\
  !*** /workspace/orgynize/node_modules/debounce/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),

/***/ "../../node_modules/hyphenate-style-name/index.js":
/*!**********************************************************************!*\
  !*** /workspace/orgynize/node_modules/hyphenate-style-name/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/createPrefixer.js":
/*!************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/createPrefixer.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__(/*! ./utils/prefixProperty */ "../../node_modules/inline-style-prefixer/lib/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(/*! ./utils/prefixValue */ "../../node_modules/inline-style-prefixer/lib/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__(/*! ./utils/addNewValuesOnly */ "../../node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(/*! ./utils/isObject */ "../../node_modules/inline-style-prefixer/lib/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  return function prefix(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefix(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  };
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/backgroundClip.js":
/*!********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/backgroundClip.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backgroundClip;

// https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility
function backgroundClip(property, value) {
  if (typeof value === 'string' && value === 'text') {
    return ['-webkit-text', 'text'];
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/crossFade.js":
/*!***************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/crossFade.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/cursor.js":
/*!************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/cursor.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/filter.js":
/*!************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/filter.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/flex.js":
/*!**********************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/flex.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js":
/*!***************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
  // Full expanded syntax is flex-grow | flex-shrink | flex-basis.
};var flexShorthandMappings = {
  auto: '1 1 auto',
  inherit: 'inherit',
  initial: '0 1 auto',
  none: '0 0 auto',
  unset: 'unset'
};
var isUnitlessNumber = /^\d+(\.\d+)?$/;

function flexboxIE(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
  if (property === 'flex') {
    // For certain values we can do straight mappings based on the spec
    // for the expansions.
    if (Object.prototype.hasOwnProperty.call(flexShorthandMappings, value)) {
      style.msFlex = flexShorthandMappings[value];
      return;
    }
    // Here we have no direct mapping, so we favor looking for a
    // unitless positive number as that will be the most common use-case.
    if (isUnitlessNumber.test(value)) {
      style.msFlex = value + ' 1 0%';
      return;
    }

    // The next thing we can look for is if there are multiple values.
    var flexValues = value.split(/\s/);
    // If we only have a single value that wasn't a positive unitless
    // or a pre-mapped value, then we can assume it is a unit value.
    switch (flexValues.length) {
      case 1:
        style.msFlex = '1 1 ' + value;
        return;
      case 2:
        // If we have 2 units, then we expect that the first will
        // always be a unitless number and represents flex-grow.
        // The second unit will represent flex-shrink for a unitless
        // value, or flex-basis otherwise.
        if (isUnitlessNumber.test(flexValues[1])) {
          style.msFlex = flexValues[0] + ' ' + flexValues[1] + ' 0%';
        } else {
          style.msFlex = flexValues[0] + ' 1 ' + flexValues[1];
        }
        return;
      default:
        style.msFlex = value;
    }
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js":
/*!****************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/gradient.js":
/*!**************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/gradient.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/imageSet.js":
/*!**************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/imageSet.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/position.js":
/*!**************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/position.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/sizing.js":
/*!************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/sizing.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/plugins/transition.js":
/*!****************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/plugins/transition.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "../../node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "../../node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(/*! ../utils/capitalizeString */ "../../node_modules/inline-style-prefixer/lib/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js":
/*!********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/utils/capitalizeString.js":
/*!********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/utils/capitalizeString.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/utils/isObject.js":
/*!************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/utils/isObject.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/utils/prefixProperty.js":
/*!******************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/utils/prefixProperty.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(/*! ./capitalizeString */ "../../node_modules/inline-style-prefixer/lib/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = (0, _capitalizeString2.default)(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}

/***/ }),

/***/ "../../node_modules/inline-style-prefixer/lib/utils/prefixValue.js":
/*!***************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/inline-style-prefixer/lib/utils/prefixValue.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}

/***/ }),

/***/ "../../node_modules/normalize-css-color/index.js":
/*!*********************************************************************!*\
  !*** /workspace/orgynize/node_modules/normalize-css-color/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4]) // a
      ) >>> 0;
  }

  if ((match = matchers.hex3.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16
      ) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16
      ) >>> 0;
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        parse1(match[4]) // a
      ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);

  return (
    Math.round(r * 255) << 24 |
    Math.round(g * 255) << 16 |
    Math.round(b * 255) << 8
  );
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

var names = {
  transparent: 0x00000000,

  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

function rgba(colorInt) {
  var r = Math.round(((colorInt & 0xff000000) >>> 24));
  var g = Math.round(((colorInt & 0x00ff0000) >>> 16));
  var b = Math.round(((colorInt & 0x0000ff00) >>> 8));
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;


/***/ }),

/***/ "../../node_modules/object-assign/index.js":
/*!***************************************************************!*\
  !*** /workspace/orgynize/node_modules/object-assign/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../../node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************!*\
  !*** /workspace/orgynize/node_modules/prop-types/checkPropTypes.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!******************************************************************************!*\
  !*** /workspace/orgynize/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../../node_modules/prop-types/index.js":
/*!************************************************************!*\
  !*** /workspace/orgynize/node_modules/prop-types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************!*\
  !*** /workspace/orgynize/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../../node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.11.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "../../node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** /workspace/orgynize/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/AppRegistry/AppContainer.js":
/*!**************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/AppRegistry/AppContainer.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppContainer; });
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../StyleSheet */ "../../node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View */ "../../node_modules/react-native-web/dist/exports/View/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





var AppContainer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(AppContainer, _Component);

  function AppContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      mainKey: 1
    };
    return _this;
  }

  var _proto = AppContainer.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      rootTag: this.props.rootTag
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        WrapperComponent = _this$props.WrapperComponent;
    var innerView = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
      children: children,
      key: this.state.mainKey,
      pointerEvents: "box-none",
      style: styles.appContainer
    });

    if (WrapperComponent) {
      innerView = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrapperComponent, null, innerView);
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_View__WEBPACK_IMPORTED_MODULE_1__["default"], {
      pointerEvents: "box-none",
      style: styles.appContainer
    }, innerView);
  };

  return AppContainer;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

AppContainer.childContextTypes = {
  rootTag: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"]
};

AppContainer.propTypes =  true ? {
  WrapperComponent: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"],
  rootTag: prop_types__WEBPACK_IMPORTED_MODULE_2__["any"].isRequired
} : undefined;
var styles = _StyleSheet__WEBPACK_IMPORTED_MODULE_0__["default"].create({
  appContainer: {
    flex: 1
  }
});

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/AppRegistry/index.js":
/*!*******************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/AppRegistry/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppRegistry; });
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/invariant */ "../../node_modules/react-native-web/node_modules/fbjs/lib/invariant.js");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _unmountComponentAtNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../unmountComponentAtNode */ "../../node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js");
/* harmony import */ var _renderApplication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderApplication */ "../../node_modules/react-native-web/dist/exports/AppRegistry/renderApplication.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var emptyObject = {};
var runnables = {};

var componentProviderInstrumentationHook = function componentProviderInstrumentationHook(component) {
  return component();
};

var wrapperComponentProvider;

/**
 * `AppRegistry` is the JS entry point to running all React Native apps.
 */
var AppRegistry =
/*#__PURE__*/
function () {
  function AppRegistry() {}

  AppRegistry.getAppKeys = function getAppKeys() {
    return Object.keys(runnables);
  };

  AppRegistry.getApplication = function getApplication(appKey, appParameters) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(runnables[appKey] && runnables[appKey].getApplication, "Application " + appKey + " has not been registered. " + 'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');
    return runnables[appKey].getApplication(appParameters);
  };

  AppRegistry.registerComponent = function registerComponent(appKey, componentProvider) {
    runnables[appKey] = {
      getApplication: function getApplication(appParameters) {
        return Object(_renderApplication__WEBPACK_IMPORTED_MODULE_2__["getApplication"])(componentProviderInstrumentationHook(componentProvider), appParameters ? appParameters.initialProps : emptyObject, wrapperComponentProvider && wrapperComponentProvider(appParameters));
      },
      run: function run(appParameters) {
        return Object(_renderApplication__WEBPACK_IMPORTED_MODULE_2__["default"])(componentProviderInstrumentationHook(componentProvider), appParameters.initialProps || emptyObject, appParameters.rootTag, wrapperComponentProvider && wrapperComponentProvider(appParameters), appParameters.callback);
      }
    };
    return appKey;
  };

  AppRegistry.registerConfig = function registerConfig(config) {
    config.forEach(function (_ref) {
      var appKey = _ref.appKey,
          component = _ref.component,
          run = _ref.run;

      if (run) {
        AppRegistry.registerRunnable(appKey, run);
      } else {
        fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(component, 'No component provider passed in');
        AppRegistry.registerComponent(appKey, component);
      }
    });
  } // TODO: fix style sheet creation when using this method
  ;

  AppRegistry.registerRunnable = function registerRunnable(appKey, run) {
    runnables[appKey] = {
      run: run
    };
    return appKey;
  };

  AppRegistry.runApplication = function runApplication(appKey, appParameters) {
    var isDevelopment =  true && "development" !== 'test';

    if (isDevelopment) {
      var params = _objectSpread({}, appParameters);

      params.rootTag = "#" + params.rootTag.id;
      console.log("Running application \"" + appKey + "\" with appParams:\n", params, "\nDevelopment-level warnings: " + (isDevelopment ? 'ON' : 'OFF') + "." + ("\nPerformance optimizations: " + (isDevelopment ? 'OFF' : 'ON') + "."));
    }

    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(runnables[appKey] && runnables[appKey].run, "Application \"" + appKey + "\" has not been registered. " + 'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');
    runnables[appKey].run(appParameters);
  };

  AppRegistry.setComponentProviderInstrumentationHook = function setComponentProviderInstrumentationHook(hook) {
    componentProviderInstrumentationHook = hook;
  };

  AppRegistry.setWrapperComponentProvider = function setWrapperComponentProvider(provider) {
    wrapperComponentProvider = provider;
  };

  AppRegistry.unmountApplicationComponentAtRootTag = function unmountApplicationComponentAtRootTag(rootTag) {
    Object(_unmountComponentAtNode__WEBPACK_IMPORTED_MODULE_1__["default"])(rootTag);
  };

  return AppRegistry;
}();



/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/AppRegistry/renderApplication.js":
/*!*******************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/AppRegistry/renderApplication.js ***!
  \*******************************************************************************************************/
/*! exports provided: default, getApplication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderApplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplication", function() { return getApplication; });
/* harmony import */ var _AppContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppContainer */ "../../node_modules/react-native-web/dist/exports/AppRegistry/AppContainer.js");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fbjs/lib/invariant */ "../../node_modules/react-native-web/node_modules/fbjs/lib/invariant.js");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_hydrate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/hydrate */ "../../node_modules/react-native-web/dist/modules/hydrate/index.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render */ "../../node_modules/react-native-web/dist/exports/render/index.js");
/* harmony import */ var _StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StyleSheet/styleResolver */ "../../node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */






var renderFn =  true ? _render__WEBPACK_IMPORTED_MODULE_3__["default"] : undefined;
function renderApplication(RootComponent, initialProps, rootTag, WrapperComponent, callback) {
  fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);
  renderFn(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AppContainer__WEBPACK_IMPORTED_MODULE_0__["default"], {
    WrapperComponent: WrapperComponent,
    rootTag: rootTag
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RootComponent, initialProps)), rootTag, callback);
}
function getApplication(RootComponent, initialProps, WrapperComponent) {
  var element = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AppContainer__WEBPACK_IMPORTED_MODULE_0__["default"], {
    WrapperComponent: WrapperComponent,
    rootTag: {}
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(RootComponent, initialProps)); // Don't escape CSS text

  var getStyleElement = function getStyleElement(props) {
    var sheet = _StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_4__["default"].getStyleSheet();
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("style", _extends({}, props, {
      dangerouslySetInnerHTML: {
        __html: sheet.textContent
      },
      id: sheet.id
    }));
  };

  return {
    element: element,
    getStyleElement: getStyleElement
  };
}

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/ColorPropType/index.js":
/*!*********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/ColorPropType/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/normalizeColor */ "../../node_modules/react-native-web/dist/modules/normalizeColor/index.js");
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var colorPropType = function colorPropType(isRequired, props, propName, componentName, location, propFullName) {
  var color = props[propName];

  if (color === undefined || color === null) {
    if (isRequired) {
      return new Error('Required ' + location + ' `' + (propFullName || propName) + '` was not specified in `' + componentName + '`.');
    }

    return;
  }

  if (typeof color === 'number') {
    // Developers should not use a number, but we are using the prop type
    // both for user provided colors and for transformed ones. This isn't ideal
    // and should be fixed but will do for now...
    return;
  }

  if (Object(_modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__["default"])(color) === null) {
    return new Error('Invalid ' + location + ' `' + (propFullName || propName) + '` supplied to `' + componentName + '`: ' + color + '\n' + "Valid color formats are\n  - '#f0f' (#rgb)\n  - '#f0fc' (#rgba)\n  - '#ff00ff' (#rrggbb)\n  - '#ff00ff00' (#rrggbbaa)\n  - 'rgb(255, 255, 255)'\n  - 'rgba(255, 255, 255, 1.0)'\n  - 'hsl(360, 100%, 100%)'\n  - 'hsla(360, 100%, 100%, 1.0)'\n  - 'transparent'\n  - 'red'\n  - 0xff00ff00 (0xrrggbbaa)\n");
  }
};

var ColorPropType;

if (true) {
  ColorPropType = colorPropType.bind(null, false
  /* isRequired */
  );
  ColorPropType.isRequired = colorPropType.bind(null, true
  /* isRequired */
  );
} else {}

/* harmony default export */ __webpack_exports__["default"] = (ColorPropType);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/EdgeInsetsPropType/index.js":
/*!**************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/EdgeInsetsPropType/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_createStrictShapeTypeChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/createStrictShapeTypeChecker */ "../../node_modules/react-native-web/dist/modules/createStrictShapeTypeChecker/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var EdgeInsetsPropType = Object(_modules_createStrictShapeTypeChecker__WEBPACK_IMPORTED_MODULE_0__["default"])({
  top: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  left: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  right: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"]
});
/* harmony default export */ __webpack_exports__["default"] = (EdgeInsetsPropType);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/I18nManager/index.js":
/*!*******************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/I18nManager/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "../../node_modules/react-native-web/node_modules/fbjs/lib/ExecutionEnvironment.js");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var doLeftAndRightSwapInRTL = true;
var isPreferredLanguageRTL = false;
var isRTLAllowed = true;
var isRTLForced = false;

var isRTL = function isRTL() {
  if (isRTLForced) {
    return true;
  }

  return isRTLAllowed && isPreferredLanguageRTL;
};

var onDirectionChange = function onDirectionChange() {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default.a.canUseDOM) {
    if (document.documentElement && document.documentElement.setAttribute) {
      document.documentElement.setAttribute('dir', isRTL() ? 'rtl' : 'ltr');
    }
  }
};

var I18nManager = {
  allowRTL: function allowRTL(bool) {
    isRTLAllowed = bool;
    onDirectionChange();
  },
  forceRTL: function forceRTL(bool) {
    isRTLForced = bool;
    onDirectionChange();
  },
  setPreferredLanguageRTL: function setPreferredLanguageRTL(bool) {
    isPreferredLanguageRTL = bool;
    onDirectionChange();
  },
  swapLeftAndRightInRTL: function swapLeftAndRightInRTL(bool) {
    doLeftAndRightSwapInRTL = bool;
  },

  get doLeftAndRightSwapInRTL() {
    return doLeftAndRightSwapInRTL;
  },

  get isRTL() {
    return isRTL();
  }

};
/* harmony default export */ __webpack_exports__["default"] = (I18nManager);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/Image/ImageResizeMode.js":
/*!***********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/Image/ImageResizeMode.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ImageResizeMode = {
  center: 'center',
  contain: 'contain',
  cover: 'cover',
  none: 'none',
  repeat: 'repeat',
  stretch: 'stretch'
};
/* harmony default export */ __webpack_exports__["default"] = (ImageResizeMode);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/Image/ImageStylePropTypes.js":
/*!***************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/Image/ImageStylePropTypes.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_AnimationPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/AnimationPropTypes */ "../../node_modules/react-native-web/dist/modules/AnimationPropTypes/index.js");
/* harmony import */ var _modules_BorderPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/BorderPropTypes */ "../../node_modules/react-native-web/dist/modules/BorderPropTypes/index.js");
/* harmony import */ var _ColorPropType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ColorPropType */ "../../node_modules/react-native-web/dist/exports/ColorPropType/index.js");
/* harmony import */ var _ImageResizeMode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageResizeMode */ "../../node_modules/react-native-web/dist/exports/Image/ImageResizeMode.js");
/* harmony import */ var _modules_InteractionPropTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/InteractionPropTypes */ "../../node_modules/react-native-web/dist/modules/InteractionPropTypes/index.js");
/* harmony import */ var _modules_LayoutPropTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/LayoutPropTypes */ "../../node_modules/react-native-web/dist/modules/LayoutPropTypes/index.js");
/* harmony import */ var _modules_ShadowPropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/ShadowPropTypes */ "../../node_modules/react-native-web/dist/modules/ShadowPropTypes/index.js");
/* harmony import */ var _modules_TransformPropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/TransformPropTypes */ "../../node_modules/react-native-web/dist/modules/TransformPropTypes/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */










var ImageStylePropTypes = _objectSpread({}, _modules_AnimationPropTypes__WEBPACK_IMPORTED_MODULE_0__["default"], _modules_BorderPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"], _modules_InteractionPropTypes__WEBPACK_IMPORTED_MODULE_4__["default"], _modules_LayoutPropTypes__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_ShadowPropTypes__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_TransformPropTypes__WEBPACK_IMPORTED_MODULE_7__["default"], {
  backgroundColor: _ColorPropType__WEBPACK_IMPORTED_MODULE_2__["default"],
  opacity: prop_types__WEBPACK_IMPORTED_MODULE_8__["number"],
  resizeMode: Object(prop_types__WEBPACK_IMPORTED_MODULE_8__["oneOf"])(Object.keys(_ImageResizeMode__WEBPACK_IMPORTED_MODULE_3__["default"])),
  tintColor: _ColorPropType__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @platform unsupported
   */
  overlayColor: prop_types__WEBPACK_IMPORTED_MODULE_8__["string"],

  /**
   * @platform web
   */
  boxShadow: prop_types__WEBPACK_IMPORTED_MODULE_8__["string"],
  filter: prop_types__WEBPACK_IMPORTED_MODULE_8__["string"]
});

/* harmony default export */ __webpack_exports__["default"] = (ImageStylePropTypes);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js":
/*!***********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/ReactNativePropRegistry */ "../../node_modules/react-native-web/dist/modules/ReactNativePropRegistry/index.js");
/* harmony import */ var _flattenStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flattenStyle */ "../../node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var absoluteFillObject = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var absoluteFill = _modules_ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__["default"].register(absoluteFillObject);
var StyleSheet = {
  absoluteFill: absoluteFill,
  absoluteFillObject: absoluteFillObject,
  compose: function compose(style1, style2) {
    if (true) {
      /* eslint-disable prefer-rest-params */
      var len = arguments.length;

      if (len > 2) {
        var readableStyles = Array.prototype.slice.call(arguments).map(function (a) {
          return Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(a);
        });
        throw new Error("StyleSheet.compose() only accepts 2 arguments, received " + len + ": " + JSON.stringify(readableStyles));
      }
      /* eslint-enable prefer-rest-params */

    }

    if (style1 && style2) {
      return [style1, style2];
    } else {
      return style1 || style2;
    }
  },
  create: function create(styles) {
    var result = {};
    Object.keys(styles).forEach(function (key) {
      if (true) {
        var validate = __webpack_require__(/*! ./validate */ "../../node_modules/react-native-web/dist/exports/StyleSheet/validate.js");

        var interopValidate = validate.default ? validate.default : validate;
        interopValidate(key, styles);
      }

      var id = styles[key] && _modules_ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__["default"].register(styles[key]);
      result[key] = id;
    });
    return result;
  },
  flatten: _flattenStyle__WEBPACK_IMPORTED_MODULE_1__["default"],
  hairlineWidth: 1
};
/* harmony default export */ __webpack_exports__["default"] = (StyleSheet);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/compile.js":
/*!********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/compile.js ***!
  \********************************************************************************************/
/*! exports provided: atomic, classic, inline, stringifyValueWithProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atomic", function() { return atomic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classic", function() { return classic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inline", function() { return inline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyValueWithProperty", function() { return stringifyValueWithProperty; });
/* harmony import */ var _createReactDOMStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReactDOMStyle */ "../../node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js");
/* harmony import */ var _vendor_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vendor/hash */ "../../node_modules/react-native-web/dist/vendor/hash/index.js");
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hyphenate-style-name */ "../../node_modules/hyphenate-style-name/index.js");
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "../../node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");
/* harmony import */ var _modules_prefixStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/prefixStyles */ "../../node_modules/react-native-web/dist/modules/prefixStyles/index.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





var cache = {
  get: function get(property, value) {
    if (cache[property] != null && cache[property].hasOwnProperty(value) && cache[property][value] != null) {
      return cache[property][value];
    }
  },
  set: function set(property, value, object) {
    if (cache[property] == null) {
      cache[property] = {};
    }

    return cache[property][value] = object;
  }
};
/**
 * Compile style to atomic CSS rules.
 */

function atomic(style) {
  return Object.keys(style).sort().reduce(function (acc, property) {
    var value = style[property];

    if (value != null) {
      var valueString = stringifyValueWithProperty(value, property);
      var cachedResult = cache.get(property, valueString);

      if (cachedResult != null) {
        var identifier = cachedResult.identifier;
        acc[identifier] = cachedResult;
      } else {
        var _identifier = createIdentifier('r', property, value);

        var rules = createAtomicRules(_identifier, property, value);

        var _cachedResult = cache.set(property, valueString, {
          property: property,
          value: stringifyValueWithProperty(value, property),
          identifier: _identifier,
          rules: rules
        });

        acc[_identifier] = _cachedResult;
      }
    }

    return acc;
  }, {});
}
/**
 * Compile simple style object to classic CSS rules.
 * No support for 'placeholderTextColor', 'scrollbarWidth', or 'pointerEvents'.
 */

function classic(style, name) {
  var _ref;

  var identifier = createIdentifier('css', name, style);

  var animationKeyframes = style.animationKeyframes,
      rest = _objectWithoutPropertiesLoose(style, ["animationKeyframes"]);

  var rules = [];
  var selector = "." + identifier;
  var animationName;

  if (animationKeyframes != null) {
    var _processKeyframesValu = processKeyframesValue(animationKeyframes),
        animationNames = _processKeyframesValu.animationNames,
        keyframesRules = _processKeyframesValu.rules;

    animationName = animationNames.join(',');
    rules.push.apply(rules, keyframesRules);
  }

  var block = createDeclarationBlock(_objectSpread({}, rest, {
    animationName: animationName
  }));
  rules.push("" + selector + block);
  return _ref = {}, _ref[identifier] = {
    identifier: identifier,
    rules: rules
  }, _ref;
}
/**
 * Compile simple style object to inline DOM styles.
 * No support for 'animationKeyframes', 'placeholderTextColor', 'scrollbarWidth', or 'pointerEvents'.
 */

function inline(style) {
  return Object(_modules_prefixStyles__WEBPACK_IMPORTED_MODULE_4__["prefixInlineStyles"])(Object(_createReactDOMStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(style));
}
/**
 * Create a value string that normalizes different input values with a common
 * output.
 */

function stringifyValueWithProperty(value, property) {
  // e.g., 0 => '0px', 'black' => 'rgba(0,0,0,1)'
  var normalizedValue = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(value, property);
  return typeof normalizedValue !== 'string' ? JSON.stringify(normalizedValue || '') : normalizedValue;
}
/**
 * Create the Atomic CSS rules needed for a given StyleSheet rule.
 * Translates StyleSheet declarations to CSS.
 */

function createAtomicRules(identifier, property, value) {
  var rules = [];
  var selector = "." + identifier; // Handle non-standard properties and object values that require multiple
  // CSS rules to be created.

  switch (property) {
    case 'animationKeyframes':
      {
        var _processKeyframesValu2 = processKeyframesValue(value),
            animationNames = _processKeyframesValu2.animationNames,
            keyframesRules = _processKeyframesValu2.rules;

        var block = createDeclarationBlock({
          animationName: animationNames.join(',')
        });
        rules.push.apply(rules, ["" + selector + block].concat(keyframesRules));
        break;
      }

    case 'placeholderTextColor':
      {
        var _block = createDeclarationBlock({
          color: value,
          opacity: 1
        });

        rules.push(selector + "::-webkit-input-placeholder" + _block, selector + "::-moz-placeholder" + _block, selector + ":-ms-input-placeholder" + _block, selector + "::placeholder" + _block);
        break;
      }
    // Polyfill for draft spec
    // https://drafts.csswg.org/css-scrollbars-1/

    case 'scrollbarWidth':
      {
        if (value === 'none') {
          rules.push(selector + "::-webkit-scrollbar{display:none}", selector + "{overflow:-moz-scrollbars-none;-ms-overflow-style:none;scrollbar-width:none;}");
        }

        break;
      }
    // See #513

    case 'pointerEvents':
      {
        var _createDeclarationBlo3;

        var finalValue = value;

        if (value === 'auto' || value === 'box-only') {
          finalValue = 'auto!important';

          if (value === 'box-only') {
            var _createDeclarationBlo;

            var _block3 = createDeclarationBlock((_createDeclarationBlo = {}, _createDeclarationBlo[property] = 'none', _createDeclarationBlo));

            rules.push(selector + ">*" + _block3);
          }
        } else if (value === 'none' || value === 'box-none') {
          finalValue = 'none!important';

          if (value === 'box-none') {
            var _createDeclarationBlo2;

            var _block4 = createDeclarationBlock((_createDeclarationBlo2 = {}, _createDeclarationBlo2[property] = 'auto', _createDeclarationBlo2));

            rules.push(selector + ">*" + _block4);
          }
        }

        var _block2 = createDeclarationBlock((_createDeclarationBlo3 = {}, _createDeclarationBlo3[property] = finalValue, _createDeclarationBlo3));

        rules.push("" + selector + _block2);
        break;
      }

    default:
      {
        var _createDeclarationBlo4;

        var _block5 = createDeclarationBlock((_createDeclarationBlo4 = {}, _createDeclarationBlo4[property] = value, _createDeclarationBlo4));

        rules.push("" + selector + _block5);
        break;
      }
  }

  return rules;
}
/**
 * Creates a CSS declaration block from a StyleSheet object.
 */


function createDeclarationBlock(style) {
  var domStyle = Object(_modules_prefixStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_createReactDOMStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(style));
  var declarationsString = Object.keys(domStyle).map(function (property) {
    var value = domStyle[property];
    var prop = Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2__["default"])(property); // The prefixer may return an array of values:
    // { display: [ '-webkit-flex', 'flex' ] }
    // to represent "fallback" declarations
    // { display: -webkit-flex; display: flex; }

    if (Array.isArray(value)) {
      return value.map(function (v) {
        return prop + ":" + v;
      }).join(';');
    } else {
      return prop + ":" + value;
    }
  }) // Once properties are hyphenated, this will put the vendor
  // prefixed and short-form properties first in the list.
  .sort().join(';');
  return "{" + declarationsString + ";}";
}
/**
 * An identifier is associated with a unique set of styles.
 */


function createIdentifier(prefix, name, value) {
  var hashedString = Object(_vendor_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(name + stringifyValueWithProperty(value, name));
  return  true ? prefix + "-" + name + "-" + hashedString : undefined;
}
/**
 * Create individual CSS keyframes rules.
 */


function createKeyframes(keyframes) {
  var prefixes = ['-webkit-', ''];
  var identifier = createIdentifier('r', 'animation', keyframes);
  var steps = '{' + Object.keys(keyframes).map(function (stepName) {
    var rule = keyframes[stepName];
    var block = createDeclarationBlock(rule);
    return "" + stepName + block;
  }).join('') + '}';
  var rules = prefixes.map(function (prefix) {
    return "@" + prefix + "keyframes " + identifier + steps;
  });
  return {
    identifier: identifier,
    rules: rules
  };
}
/**
 * Create CSS keyframes rules and names from a StyleSheet keyframes object.
 */


function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === 'number') {
    throw new Error('Invalid CSS keyframes type');
  }

  var animationNames = [];
  var rules = [];
  var value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach(function (keyframes) {
    if (typeof keyframes === 'string') {
      // Support external animation libraries (identifiers only)
      animationNames.push(keyframes);
    } else {
      // Create rules for each of the keyframes
      var _createKeyframes = createKeyframes(keyframes),
          identifier = _createKeyframes.identifier,
          keyframesRules = _createKeyframes.rules;

      animationNames.push(identifier);
      rules.push.apply(rules, keyframesRules);
    }
  });
  return {
    animationNames: animationNames,
    rules: rules
  };
}

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/constants.js":
/*!**********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/constants.js ***!
  \**********************************************************************************************/
/*! exports provided: STYLE_ELEMENT_ID, STYLE_GROUPS, STYLE_SHORT_FORM_EXPANSIONS, MONOSPACE_FONT_STACK, SYSTEM_FONT_STACK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_ELEMENT_ID", function() { return STYLE_ELEMENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_GROUPS", function() { return STYLE_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_SHORT_FORM_EXPANSIONS", function() { return STYLE_SHORT_FORM_EXPANSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONOSPACE_FONT_STACK", function() { return MONOSPACE_FONT_STACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_FONT_STACK", function() { return SYSTEM_FONT_STACK; });
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var STYLE_ELEMENT_ID = 'react-native-stylesheet';
var STYLE_GROUPS = {
  reset: 0,
  modality: 0.1,
  classicReset: 0.5,
  classic: 1,
  atomic: 2.2,
  custom: {
    borderColor: 2,
    borderRadius: 2,
    borderStyle: 2,
    borderWidth: 2,
    display: 2,
    flex: 2,
    margin: 2,
    overflow: 2,
    overscrollBehavior: 2,
    padding: 2,
    marginHorizontal: 2.1,
    marginVertical: 2.1,
    paddingHorizontal: 2.1,
    paddingVertical: 2.1
  }
};
var STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
  borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
  borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
  borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  marginHorizontal: ['marginRight', 'marginLeft'],
  marginVertical: ['marginTop', 'marginBottom'],
  overflow: ['overflowX', 'overflowY'],
  overscrollBehavior: ['overscrollBehaviorX', 'overscrollBehaviorY'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  paddingHorizontal: ['paddingRight', 'paddingLeft'],
  paddingVertical: ['paddingTop', 'paddingBottom']
};
var MONOSPACE_FONT_STACK = 'monospace,monospace';
var SYSTEM_FONT_STACK = 'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif';

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js":
/*!********************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCSSStyleSheet; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "../../node_modules/react-native-web/node_modules/fbjs/lib/ExecutionEnvironment.js");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
 // $FlowFixMe: HTMLStyleElement is incorrectly typed - https://github.com/facebook/flow/issues/2696

function createCSSStyleSheet(id) {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
    var element = document.getElementById(id);

    if (element != null) {
      // $FlowFixMe: HTMLElement is incorrectly typed
      return element.sheet;
    } else {
      var _element = document.createElement('style');

      _element.setAttribute('id', id);

      var head = document.head;

      if (head) {
        head.insertBefore(_element, head.firstChild);
      }

      return _element.sheet;
    }
  } else {
    return null;
  }
}

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js":
/*!***********************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "../../node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");
/* harmony import */ var _resolveShadowValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveShadowValue */ "../../node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var defaultOffset = {
  height: 0,
  width: 0
};

function boxShadowReducer(resolvedStyle, style) {
  var boxShadow = style.boxShadow;
  var shadow = Object(_resolveShadowValue__WEBPACK_IMPORTED_MODULE_1__["default"])(style);

  if (shadow != null) {
    resolvedStyle.boxShadow = boxShadow ? boxShadow + ", " + shadow : shadow;
  }
}

function textShadowReducer(resolvedStyle, style) {
  var textShadowColor = style.textShadowColor,
      textShadowOffset = style.textShadowOffset,
      textShadowRadius = style.textShadowRadius;

  var _ref = textShadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var radius = textShadowRadius || 0;
  var offsetX = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(width);
  var offsetY = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(height);
  var blurRadius = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(radius);
  var color = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(textShadowColor, 'textShadowColor');

  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    resolvedStyle.textShadow = offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
}

var createCompileableStyle = function createCompileableStyle(styles) {
  var shadowColor = styles.shadowColor,
      shadowOffset = styles.shadowOffset,
      shadowOpacity = styles.shadowOpacity,
      shadowRadius = styles.shadowRadius,
      textShadowColor = styles.textShadowColor,
      textShadowOffset = styles.textShadowOffset,
      textShadowRadius = styles.textShadowRadius,
      nextStyles = _objectWithoutPropertiesLoose(styles, ["shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "textShadowColor", "textShadowOffset", "textShadowRadius"]);

  if (shadowColor != null || shadowOffset != null || shadowOpacity != null || shadowRadius != null) {
    boxShadowReducer(nextStyles, styles);
  }

  if (textShadowColor != null || textShadowOffset != null || textShadowRadius != null) {
    textShadowReducer(nextStyles, styles);
  }

  return nextStyles;
};

/* harmony default export */ __webpack_exports__["default"] = (createCompileableStyle);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js":
/*!***************************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createOrderedCSSStyleSheet; });
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var slice = Array.prototype.slice;
/**
 * Order-based insertion of CSS.
 *
 * Each rule is associated with a numerically defined group.
 * Groups are ordered within the style sheet according to their number, with the
 * lowest first.
 *
 * Groups are implemented using marker rules. The selector of the first rule of
 * each group is used only to encode the group number for hydration. An
 * alternative implementation could rely on CSSMediaRule, allowing groups to be
 * treated as a sub-sheet, but the Edge implementation of CSSMediaRule is
 * broken.
 * https://developer.mozilla.org/en-US/docs/Web/API/CSSMediaRule
 * https://gist.github.com/necolas/aa0c37846ad6bd3b05b727b959e82674
 */

function createOrderedCSSStyleSheet(sheet) {
  var groups = {};
  var selectors = {};
  /**
   * Hydrate approximate record from any existing rules in the sheet.
   */

  if (sheet != null) {
    var group;
    slice.call(sheet.cssRules).forEach(function (cssRule, i) {
      var cssText = cssRule.cssText; // Create record of existing selectors and rules

      if (cssText.indexOf('stylesheet-group') > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = {
          start: i,
          rules: [cssText]
        };
      } else {
        var selectorText = getSelectorText(cssText);

        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }

  function sheetInsert(sheet, group, text) {
    var orderedGroups = getOrderedGroups(groups);
    var groupIndex = orderedGroups.indexOf(group);
    var nextGroupIndex = groupIndex + 1;
    var nextGroup = orderedGroups[nextGroupIndex]; // Insert rule before the next group, or at the end of the stylesheet

    var position = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet.cssRules.length;
    var isInserted = insertRuleAt(sheet, text, position);

    if (isInserted) {
      // Set the starting index of the new group
      if (groups[group].start == null) {
        groups[group].start = position;
      } // Increment the starting index of all subsequent groups


      for (var i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        var groupNumber = orderedGroups[i];
        var previousStart = groups[groupNumber].start;
        groups[groupNumber].start = previousStart + 1;
      }
    }

    return isInserted;
  }

  var OrderedCSSStyleSheet = {
    /**
     * The textContent of the style sheet.
     */
    getTextContent: function getTextContent() {
      return getOrderedGroups(groups).map(function (group) {
        var rules = groups[group].rules;
        return rules.join('\n');
      }).join('\n');
    },

    /**
     * Insert a rule into the style sheet
     */
    insert: function insert(cssText, groupValue) {
      var group = Number(groupValue); // Create a new group.

      if (groups[group] == null) {
        var markerRule = encodeGroupRule(group); // Create the internal record.

        groups[group] = {
          start: null,
          rules: [markerRule]
        }; // Update CSSOM.

        if (sheet != null) {
          sheetInsert(sheet, group, markerRule);
        }
      } // selectorText is more reliable than cssText for insertion checks. The
      // browser excludes vendor-prefixed properties and rewrites certain values
      // making cssText more likely to be different from what was inserted.


      var selectorText = getSelectorText(cssText);

      if (selectorText != null && selectors[selectorText] == null) {
        // Update the internal records.
        selectors[selectorText] = true;
        groups[group].rules.push(cssText); // Update CSSOM.

        if (sheet != null) {
          var isInserted = sheetInsert(sheet, group, cssText);

          if (!isInserted) {
            // Revert internal record change if a rule was rejected (e.g.,
            // unrecognized pseudo-selector)
            groups[group].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}
/**
 * Helper functions
 */

function encodeGroupRule(group) {
  return "[stylesheet-group=\"" + group + "\"]{}";
}

function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(/["']/)[1]);
}

function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort(function (a, b) {
    return a > b ? 1 : -1;
  });
}

var pattern = /\s*([,])\s*/g;

function getSelectorText(cssText) {
  var selector = cssText.split('{')[0].trim();
  return selector !== '' ? selector.replace(pattern, '$1') : null;
}

function insertRuleAt(root, cssText, position) {
  try {
    // $FlowFixMe: Flow is missing CSSOM types needed to type 'root'.
    root.insertRule(cssText, position);
    return true;
  } catch (e) {
    // JSDOM doesn't support `CSSSMediaRule#insertRule`.
    // Also ignore errors that occur from attempting to insert vendor-prefixed selectors.
    return false;
  }
}

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js":
/*!********************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "../../node_modules/react-native-web/node_modules/fbjs/lib/ExecutionEnvironment.js");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "../../node_modules/react-native-web/dist/exports/StyleSheet/constants.js");
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "../../node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * The browser implements the CSS cascade, where the order of properties is a
 * factor in determining which styles to paint. React Native is different. It
 * gives giving precedence to the more specific style property. For example,
 * the value of `paddingTop` takes precedence over that of `padding`.
 *
 * This module creates mutally exclusive style declarations by expanding all of
 * React Native's supported shortform properties (e.g. `padding`) to their
 * longfrom equivalents.
 */

var emptyObject = {};
var supportsCSS3TextDecoration = !fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] || window.CSS != null && window.CSS.supports != null && (window.CSS.supports('text-decoration-line', 'none') || window.CSS.supports('-webkit-text-decoration-line', 'none'));
/**
 * Transform
 */
// { scale: 2 } => 'scale(2)'
// { translateX: 20 } => 'translateX(20px)'

var mapTransform = function mapTransform(transform) {
  var type = Object.keys(transform)[0];
  var value = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(transform[type], type);
  return type + "(" + value + ")";
}; // [1,2,3,4,5,6] => 'matrix3d(1,2,3,4,5,6)'


var convertTransformMatrix = function convertTransformMatrix(transformMatrix) {
  var matrix = transformMatrix.join(',');
  return "matrix3d(" + matrix + ")";
};

var resolveTransform = function resolveTransform(resolvedStyle, style) {
  var transform = style.transform;

  if (Array.isArray(style.transform)) {
    transform = style.transform.map(mapTransform).join(' ');
  } else if (style.transformMatrix) {
    transform = convertTransformMatrix(style.transformMatrix);
  }

  resolvedStyle.transform = transform;
};
/**
 * Reducer
 */


var createReactDOMStyle = function createReactDOMStyle(style) {
  if (!style) {
    return emptyObject;
  }

  var resolvedStyle = {};
  Object.keys(style).sort().forEach(function (prop) {
    var value = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(style[prop], prop); // Ignore everything else with a null value

    if (value == null) {
      return;
    }

    switch (prop) {
      // Ignore some React Native styles
      case 'aspectRatio':
      case 'elevation':
      case 'overlayColor':
      case 'resizeMode':
      case 'tintColor':
        {
          break;
        }
      // TODO: remove once this issue is fixed
      // https://github.com/rofrischmann/inline-style-prefixer/issues/159

      case 'backgroundClip':
        {
          if (value === 'text') {
            resolvedStyle.backgroundClip = value;
            resolvedStyle.WebkitBackgroundClip = value;
          }

          break;
        }
      // The 'flex' property value in React Native must be a positive integer,
      // 0, or -1.

      case 'flex':
        {
          if (value > 0) {
            resolvedStyle.flexGrow = value;
            resolvedStyle.flexShrink = 1;
            resolvedStyle.flexBasis = '0%';
          } else if (value === 0) {
            resolvedStyle.flexGrow = 0;
            resolvedStyle.flexShrink = 0;
            resolvedStyle.flexBasis = '0%';
          } else if (value === -1) {
            resolvedStyle.flexGrow = 0;
            resolvedStyle.flexShrink = 1;
            resolvedStyle.flexBasis = 'auto';
          }

          break;
        }

      case 'font':
        {
          resolvedStyle[prop] = value.replace('System', _constants__WEBPACK_IMPORTED_MODULE_1__["SYSTEM_FONT_STACK"]);
          break;
        }

      case 'fontFamily':
        {
          if (value.indexOf('System') > -1) {
            var stack = value.split(/,\s*/);
            stack[stack.indexOf('System')] = _constants__WEBPACK_IMPORTED_MODULE_1__["SYSTEM_FONT_STACK"];
            resolvedStyle[prop] = stack.join(',');
          } else if (value === 'monospace') {
            resolvedStyle[prop] = _constants__WEBPACK_IMPORTED_MODULE_1__["MONOSPACE_FONT_STACK"];
          } else {
            resolvedStyle[prop] = value;
          }

          break;
        }

      case 'fontVariant':
        {
          if (Array.isArray(value) && value.length > 0) {
            resolvedStyle.fontVariant = value.join(' ');
          }

          break;
        }

      case 'textAlignVertical':
        {
          resolvedStyle.verticalAlign = value === 'center' ? 'middle' : value;
          break;
        }

      case 'textDecorationLine':
        {
          // use 'text-decoration' for browsers that only support CSS2
          // text-decoration (e.g., IE, Edge)
          if (!supportsCSS3TextDecoration) {
            resolvedStyle.textDecoration = value;
          } else {
            resolvedStyle.textDecorationLine = value;
          }

          break;
        }

      case 'transform':
      case 'transformMatrix':
        {
          resolveTransform(resolvedStyle, style);
          break;
        }

      case 'writingDirection':
        {
          resolvedStyle.direction = value;
          break;
        }

      default:
        {
          var longFormProperties = _constants__WEBPACK_IMPORTED_MODULE_1__["STYLE_SHORT_FORM_EXPANSIONS"][prop];

          if (longFormProperties) {
            longFormProperties.forEach(function (longForm, i) {
              // The value of any longform property in the original styles takes
              // precedence over the shortform's value.
              if (typeof style[longForm] === 'undefined') {
                resolvedStyle[longForm] = value;
              }
            });
          } else {
            resolvedStyle[prop] = Array.isArray(value) ? value.join(',') : value;
          }
        }
    }
  });
  return resolvedStyle;
};

/* harmony default export */ __webpack_exports__["default"] = (createReactDOMStyle);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js":
/*!********************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStyleResolver; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "../../node_modules/react-native-web/node_modules/fbjs/lib/ExecutionEnvironment.js");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createCSSStyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCSSStyleSheet */ "../../node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js");
/* harmony import */ var _createCompileableStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCompileableStyle */ "../../node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js");
/* harmony import */ var _createOrderedCSSStyleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createOrderedCSSStyleSheet */ "../../node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js");
/* harmony import */ var _modules_flattenArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/flattenArray */ "../../node_modules/react-native-web/dist/modules/flattenArray/index.js");
/* harmony import */ var _flattenStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flattenStyle */ "../../node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js");
/* harmony import */ var _I18nManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../I18nManager */ "../../node_modules/react-native-web/dist/exports/I18nManager/index.js");
/* harmony import */ var _i18nStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i18nStyle */ "../../node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js");
/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compile */ "../../node_modules/react-native-web/dist/exports/StyleSheet/compile.js");
/* harmony import */ var _initialRules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./initialRules */ "../../node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js");
/* harmony import */ var _modality__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modality */ "../../node_modules/react-native-web/dist/exports/StyleSheet/modality.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "../../node_modules/react-native-web/dist/exports/StyleSheet/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * WARNING: changes to this file in particular can cause significant changes to
 * the results of render performance benchmarks.
 */












var emptyObject = {};
function createStyleResolver() {
  var inserted, sheet, lookup;
  var resolved = {
    css: {},
    ltr: {},
    rtl: {},
    rtlNoSwap: {}
  };

  var init = function init() {
    inserted = {
      css: {},
      ltr: {},
      rtl: {},
      rtlNoSwap: {}
    };
    sheet = Object(_createOrderedCSSStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_createCSSStyleSheet__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_ELEMENT_ID"]));
    lookup = {
      byClassName: {},
      byProp: {}
    };
    Object(_modality__WEBPACK_IMPORTED_MODULE_10__["default"])(function (rule) {
      return sheet.insert(rule, _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].modality);
    });
    _initialRules__WEBPACK_IMPORTED_MODULE_9__["default"].forEach(function (rule) {
      sheet.insert(rule, _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].reset);
    });
  };

  init();

  function addToLookup(className, prop, value) {
    if (!lookup.byProp[prop]) {
      lookup.byProp[prop] = {};
    }

    lookup.byProp[prop][value] = className;
    lookup.byClassName[className] = {
      prop: prop,
      value: value
    };
  }

  function getClassName(prop, value) {
    var val = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["stringifyValueWithProperty"])(value, prop);
    var cache = lookup.byProp;
    return cache[prop] && cache[prop].hasOwnProperty(val) && cache[prop][val];
  }

  function _injectRegisteredStyle(id) {
    var doLeftAndRightSwapInRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_6__["default"].doLeftAndRightSwapInRTL,
        isRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_6__["default"].isRTL;
    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr';

    if (!inserted[dir][id]) {
      var style = Object(_createCompileableStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_i18nStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(id)));
      var results = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["atomic"])(style);
      Object.keys(results).forEach(function (key) {
        var _results$key = results[key],
            identifier = _results$key.identifier,
            property = _results$key.property,
            rules = _results$key.rules,
            value = _results$key.value;
        addToLookup(identifier, property, value);
        rules.forEach(function (rule) {
          var group = _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].custom[property] || _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].atomic;
          sheet.insert(rule, group);
        });
      });
      inserted[dir][id] = true;
    }
  }
  /**
   * Resolves a React Native style object to DOM attributes
   */


  function resolve(style, classList) {
    var nextClassList = [];
    var props = {};

    if (!style && !classList) {
      return props;
    }

    if (Array.isArray(classList)) {
      Object(_modules_flattenArray__WEBPACK_IMPORTED_MODULE_4__["default"])(classList).forEach(function (identifier) {
        if (identifier) {
          if (inserted.css[identifier] == null && resolved.css[identifier] != null) {
            var item = resolved.css[identifier];
            item.rules.forEach(function (rule) {
              sheet.insert(rule, item.group);
            });
            inserted.css[identifier] = true;
          }

          nextClassList.push(identifier);
        }
      });
    }

    if (typeof style === 'number') {
      // fast and cachable
      _injectRegisteredStyle(style);

      var key = createCacheKey(style);
      props = _resolveStyle(style, key);
    } else if (!Array.isArray(style)) {
      // resolve a plain RN style object
      props = _resolveStyle(style);
    } else {
      // flatten the style array
      // cache resolved props when all styles are registered
      // otherwise fallback to resolving
      var flatArray = Object(_modules_flattenArray__WEBPACK_IMPORTED_MODULE_4__["default"])(style);
      var isArrayOfNumbers = true;
      var cacheKey = '';

      for (var i = 0; i < flatArray.length; i++) {
        var id = flatArray[i];

        if (typeof id !== 'number') {
          isArrayOfNumbers = false;
        } else {
          if (isArrayOfNumbers) {
            cacheKey += id + '-';
          }

          _injectRegisteredStyle(id);
        }
      }

      var _key = isArrayOfNumbers ? createCacheKey(cacheKey) : null;

      props = _resolveStyle(flatArray, _key);
    }

    nextClassList.push.apply(nextClassList, props.classList);
    var finalProps = {
      className: classListToString(nextClassList),
      classList: nextClassList
    };

    if (props.style) {
      finalProps.style = props.style;
    }

    return finalProps;
  }
  /**
   * Resolves a React Native style object to DOM attributes, accounting for
   * the existing styles applied to the DOM node.
   *
   * To determine the next style, some of the existing DOM state must be
   * converted back into React Native styles.
   */


  function resolveWithNode(rnStyleNext, node) {
    function getDeclaration(className) {
      return lookup.byClassName[className] || emptyObject;
    }

    var _getDOMStyleInfo = getDOMStyleInfo(node),
        rdomClassList = _getDOMStyleInfo.classList,
        rdomStyle = _getDOMStyleInfo.style; // Convert the DOM classList back into a React Native form
    // Preserves unrecognized class names.


    var _rdomClassList$reduce = rdomClassList.reduce(function (styleProps, className) {
      var _getDeclaration = getDeclaration(className),
          prop = _getDeclaration.prop,
          value = _getDeclaration.value;

      if (prop) {
        styleProps.style[prop] = value;
      } else {
        styleProps.classList.push(className);
      }

      return styleProps;
    }, {
      classList: [],
      style: {}
    }),
        rnClassList = _rdomClassList$reduce.classList,
        rnStyle = _rdomClassList$reduce.style; // Create next DOM style props from current and next RN styles


    var _resolve = resolve([Object(_i18nStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(rnStyle), rnStyleNext]),
        rdomClassListNext = _resolve.classList,
        rdomStyleNext = _resolve.style; // Final className
    // Add the current class names not managed by React Native


    var className = classListToString(rdomClassListNext.concat(rnClassList)); // Final style
    // Next class names take priority over current inline styles

    var style = _objectSpread({}, rdomStyle);

    rdomClassListNext.forEach(function (className) {
      var _getDeclaration2 = getDeclaration(className),
          prop = _getDeclaration2.prop;

      if (style[prop]) {
        style[prop] = '';
      }
    }); // Next inline styles take priority over current inline styles

    Object.assign(style, rdomStyleNext);
    return {
      className: className,
      style: style
    };
  }
  /**
   * Resolves a React Native style object
   */


  function _resolveStyle(style, key) {
    var doLeftAndRightSwapInRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_6__["default"].doLeftAndRightSwapInRTL,
        isRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_6__["default"].isRTL;
    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr'; // faster: memoized

    if (key != null && resolved[dir][key] != null) {
      return resolved[dir][key];
    }

    var flatStyle = Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(style);
    var localizedStyle = Object(_createCompileableStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_i18nStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(flatStyle)); // slower: convert style object to props and cache

    var props = Object.keys(localizedStyle).sort().reduce(function (props, styleProp) {
      var value = localizedStyle[styleProp];

      if (value != null) {
        var className = getClassName(styleProp, value);

        if (className) {
          props.classList.push(className);
        } else {
          // Certain properties and values are not transformed by 'createReactDOMStyle' as they
          // require more complex transforms into multiple CSS rules. Here we assume that StyleManager
          // can bind these styles to a className, and prevent them becoming invalid inline-styles.
          if (styleProp === 'animationKeyframes' || styleProp === 'placeholderTextColor' || styleProp === 'pointerEvents' || styleProp === 'scrollbarWidth') {
            var _atomic;

            var a = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["atomic"])((_atomic = {}, _atomic[styleProp] = value, _atomic));
            Object.values(a).forEach(function (_ref) {
              var identifier = _ref.identifier,
                  rules = _ref.rules;
              props.classList.push(identifier);
              rules.forEach(function (rule) {
                sheet.insert(rule, _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].atomic);
              });
            });
          } else {
            if (!props.style) {
              props.style = {};
            } // 4x slower render


            props.style[styleProp] = value;
          }
        }
      }

      return props;
    }, {
      classList: []
    });

    if (props.style) {
      props.style = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["inline"])(props.style);
    }

    if (key != null) {
      resolved[dir][key] = props;
    }

    return props;
  }

  return {
    getStyleSheet: function getStyleSheet() {
      var textContent = sheet.getTextContent(); // Reset state on the server so critical css is always the result

      if (!fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
        init();
      }

      return {
        id: _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_ELEMENT_ID"],
        textContent: textContent
      };
    },
    createCSS: function createCSS(rules, group) {
      var result = {};
      Object.keys(rules).forEach(function (name) {
        var style = rules[name];
        var compiled = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["classic"])(style, name);
        Object.values(compiled).forEach(function (_ref2) {
          var identifier = _ref2.identifier,
              rules = _ref2.rules;
          resolved.css[identifier] = {
            group: group || _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].classic,
            rules: rules
          };
          result[name] = identifier;
        });
      });
      return result;
    },
    resolve: resolve,
    sheet: sheet,
    resolveWithNode: resolveWithNode
  };
}
/**
 * Misc helpers
 */

var createCacheKey = function createCacheKey(id) {
  var prefix = 'rn';
  return prefix + "-" + id;
};

var classListToString = function classListToString(list) {
  return list.join(' ').trim();
};
/**
 * Copies classList and style data from a DOM node
 */


var hyphenPattern = /-([a-z])/g;

var toCamelCase = function toCamelCase(str) {
  return str.replace(hyphenPattern, function (m) {
    return m[1].toUpperCase();
  });
};

var getDOMStyleInfo = function getDOMStyleInfo(node) {
  var nodeStyle = node.style;
  var classList = Array.prototype.slice.call(node.classList);
  var style = {}; // DOM style is a CSSStyleDeclaration
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration

  for (var i = 0; i < nodeStyle.length; i += 1) {
    var property = nodeStyle.item(i);

    if (property) {
      // DOM style uses hyphenated prop names and may include vendor prefixes
      // Transform back into React DOM style.
      style[toCamelCase(property)] = nodeStyle.getPropertyValue(property);
    }
  }

  return {
    classList: classList,
    style: style
  };
};

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/css.js":
/*!****************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/css.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styleResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleResolver */ "../../node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * A simple (and dangerous) CSS system.
 * The order of CSS rule insertion is not guaranteed.
 * Avoiding combining 2 or more classes that modify the same property.
 */

var css = {
  /**
   * const classes = css.create({ base: {}, extra: {} })
   */
  create: function create(rules, group) {
    return _styleResolver__WEBPACK_IMPORTED_MODULE_0__["default"].createCSS(rules, group);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (css);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js":
/*!*************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/ReactNativePropRegistry */ "../../node_modules/react-native-web/dist/modules/ReactNativePropRegistry/index.js");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fbjs/lib/invariant */ "../../node_modules/react-native-web/node_modules/fbjs/lib/invariant.js");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



function getStyle(style) {
  if (typeof style === 'number') {
    return _modules_ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__["default"].getByID(style);
  }

  return style;
}

function flattenStyle(style) {
  if (!style) {
    return undefined;
  }

  if (true) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(style !== true, 'style may be false but not true');
  }

  if (!Array.isArray(style)) {
    return getStyle(style);
  }

  var result = {};

  for (var i = 0, styleLength = style.length; i < styleLength; ++i) {
    var computedStyle = flattenStyle(style[i]);

    if (computedStyle) {
      for (var key in computedStyle) {
        var value = computedStyle[key];
        result[key] = value;
      }
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (flattenStyle);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js":
/*!**********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _I18nManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../I18nManager */ "../../node_modules/react-native-web/dist/exports/I18nManager/index.js");
/* harmony import */ var _modules_multiplyStyleLengthValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/multiplyStyleLengthValue */ "../../node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var emptyObject = {};
var borderTopLeftRadius = 'borderTopLeftRadius';
var borderTopRightRadius = 'borderTopRightRadius';
var borderBottomLeftRadius = 'borderBottomLeftRadius';
var borderBottomRightRadius = 'borderBottomRightRadius';
var borderLeftColor = 'borderLeftColor';
var borderLeftStyle = 'borderLeftStyle';
var borderLeftWidth = 'borderLeftWidth';
var borderRightColor = 'borderRightColor';
var borderRightStyle = 'borderRightStyle';
var borderRightWidth = 'borderRightWidth';
var right = 'right';
var marginLeft = 'marginLeft';
var marginRight = 'marginRight';
var paddingLeft = 'paddingLeft';
var paddingRight = 'paddingRight';
var left = 'left'; // Map of LTR property names to their BiDi equivalent.

var PROPERTIES_FLIP = {
  borderTopLeftRadius: borderTopRightRadius,
  borderTopRightRadius: borderTopLeftRadius,
  borderBottomLeftRadius: borderBottomRightRadius,
  borderBottomRightRadius: borderBottomLeftRadius,
  borderLeftColor: borderRightColor,
  borderLeftStyle: borderRightStyle,
  borderLeftWidth: borderRightWidth,
  borderRightColor: borderLeftColor,
  borderRightStyle: borderLeftStyle,
  borderRightWidth: borderLeftWidth,
  left: right,
  marginLeft: marginRight,
  marginRight: marginLeft,
  paddingLeft: paddingRight,
  paddingRight: paddingLeft,
  right: left
}; // Map of I18N property names to their LTR equivalent.

var PROPERTIES_I18N = {
  borderTopStartRadius: borderTopLeftRadius,
  borderTopEndRadius: borderTopRightRadius,
  borderBottomStartRadius: borderBottomLeftRadius,
  borderBottomEndRadius: borderBottomRightRadius,
  borderStartColor: borderLeftColor,
  borderStartStyle: borderLeftStyle,
  borderStartWidth: borderLeftWidth,
  borderEndColor: borderRightColor,
  borderEndStyle: borderRightStyle,
  borderEndWidth: borderRightWidth,
  end: right,
  marginStart: marginLeft,
  marginEnd: marginRight,
  paddingStart: paddingLeft,
  paddingEnd: paddingRight,
  start: left
};
var PROPERTIES_VALUE = {
  clear: true,
  float: true,
  textAlign: true
}; // Invert the sign of a numeric-like value

var additiveInverse = function additiveInverse(value) {
  return Object(_modules_multiplyStyleLengthValue__WEBPACK_IMPORTED_MODULE_1__["default"])(value, -1);
};

var i18nStyle = function i18nStyle(originalStyle) {
  var doLeftAndRightSwapInRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_0__["default"].doLeftAndRightSwapInRTL,
      isRTL = _I18nManager__WEBPACK_IMPORTED_MODULE_0__["default"].isRTL;
  var style = originalStyle || emptyObject;
  var frozenProps = {};
  var nextStyle = {};

  for (var originalProp in style) {
    if (!Object.prototype.hasOwnProperty.call(style, originalProp)) {
      continue;
    }

    var originalValue = style[originalProp];
    var prop = originalProp;
    var value = originalValue; // BiDi flip properties

    if (PROPERTIES_I18N.hasOwnProperty(originalProp)) {
      // convert start/end
      var convertedProp = PROPERTIES_I18N[originalProp];
      prop = isRTL ? PROPERTIES_FLIP[convertedProp] : convertedProp;
    } else if (isRTL && doLeftAndRightSwapInRTL && PROPERTIES_FLIP[originalProp]) {
      prop = PROPERTIES_FLIP[originalProp];
    } // BiDi flip values


    if (PROPERTIES_VALUE.hasOwnProperty(originalProp)) {
      if (originalValue === 'start') {
        value = isRTL ? 'right' : 'left';
      } else if (originalValue === 'end') {
        value = isRTL ? 'left' : 'right';
      } else if (isRTL && doLeftAndRightSwapInRTL) {
        if (originalValue === 'left') {
          value = 'right';
        } else if (originalValue === 'right') {
          value = 'left';
        }
      }
    } // BiDi flip transitionProperty value


    if (prop === 'transitionProperty') {
      // BiDi flip properties
      if (PROPERTIES_I18N.hasOwnProperty(value)) {
        // convert start/end
        var convertedValue = PROPERTIES_I18N[originalValue];
        value = isRTL ? PROPERTIES_FLIP[convertedValue] : convertedValue;
      } else if (isRTL && doLeftAndRightSwapInRTL && PROPERTIES_FLIP[originalValue]) {
        value = PROPERTIES_FLIP[originalValue];
      }
    } // Create finalized style


    if (isRTL && prop === 'textShadowOffset') {
      nextStyle[prop] = value;
      nextStyle[prop].width = additiveInverse(value.width);
    } else if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }

    if (PROPERTIES_I18N[originalProp]) {
      frozenProps[prop] = true;
    }
  }

  return nextStyle;
};

/* harmony default export */ __webpack_exports__["default"] = (i18nStyle);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/index.js":
/*!******************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "../../node_modules/react-native-web/node_modules/fbjs/lib/ExecutionEnvironment.js");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleSheet */ "../../node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

 // allow original component styles to be inspected in React Dev Tools

if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = _StyleSheet__WEBPACK_IMPORTED_MODULE_1__["default"].flatten;
}

/* harmony default export */ __webpack_exports__["default"] = (_StyleSheet__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js":
/*!*************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var resets = [// minimal top-level reset
'html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}', 'body{margin:0;}', // minimal form pseudo-element reset
'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}', 'input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,' + 'input::-webkit-search-cancel-button,input::-webkit-search-decoration,' + 'input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}'];
/* harmony default export */ __webpack_exports__["default"] = (resets);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/modality.js":
/*!*********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/modality.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "../../node_modules/react-native-web/node_modules/fbjs/lib/ExecutionEnvironment.js");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Adapts focus styles based on the user's active input modality (i.e., how
 * they are interacting with the UI right now).
 *
 * Focus styles are only relevant when using the keyboard to interact with the
 * page. If we only show the focus ring when relevant, we can avoid user
 * confusion without compromising accessibility.
 *
 * The script uses two heuristics to determine whether the keyboard is being used:
 *
 * 1. a keydown event occurred immediately before a focus event;
 * 2. a focus event happened on an element which requires keyboard interaction (e.g., a text field);
 *
 * This software or document includes material copied from or derived from https://github.com/WICG/focus-visible.
 * Copyright © 2018 W3C® (MIT, ERCIM, Keio, Beihang).
 * W3C Software Notice and License: https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 * 
 */

var focusVisibleAttributeName = 'data-focusvisible-polyfill';
var rule = ":focus:not([" + focusVisibleAttributeName + "]){outline: none;}";

var modality = function modality(insertRule) {
  insertRule(rule);

  if (!fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
    return;
  }

  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` attribute being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    var isReadOnly = el.readOnly;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !isReadOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !isReadOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` attribute to the given element if it was not added by
   * the author.
   */


  function addFocusVisibleAttribute(el) {
    if (el.hasAttribute(focusVisibleAttributeName)) {
      return;
    }

    el.setAttribute(focusVisibleAttributeName, true);
  }
  /**
   * Remove the `focus-visible` attribute from the given element if it was not
   * originally added by the author.
   */


  function removeFocusVisibleAttribute(el) {
    el.removeAttribute(focusVisibleAttributeName);
  }
  /**
   * Remove the `focus-visible` attribute from all elements in the document.
   */


  function removeAllFocusVisibleAttributes() {
    var list = document.querySelectorAll("[" + focusVisibleAttributeName + "]");

    for (var i = 0; i < list.length; i += 1) {
      removeFocusVisibleAttribute(list[i]);
    }
  }
  /**
   * Treat `keydown` as a signal that the user is in keyboard modality.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   */


  function onKeyDown(e) {
    if (e.key !== 'Tab' && (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
      return;
    }

    if (isValidFocusTarget(document.activeElement)) {
      addFocusVisibleAttribute(document.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * It also avoids the situation where a user presses on an element within a
   * previously keyboard-focused element (i.e., `e.target` is not the previously
   * focused element, but one of its descendants) and we need to remove the
   * focus ring because a `blur` event doesn't occur.
   */


  function onPointerDown(e) {
    if (hadKeyboardEvent === true) {
      removeAllFocusVisibleAttributes();
    }

    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` attribute to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleAttribute(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` attribute from the target.
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.hasAttribute(focusVisibleAttributeName)) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      }, 100);
      removeFocusVisibleAttribute(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had the focus-visible attribute.
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the attribute when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName === 'HTML') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();
};

/* harmony default export */ __webpack_exports__["default"] = (modality);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js":
/*!***************************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeValueWithProperty; });
/* harmony import */ var _modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/unitlessNumbers */ "../../node_modules/react-native-web/dist/modules/unitlessNumbers/index.js");
/* harmony import */ var _modules_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/normalizeColor */ "../../node_modules/react-native-web/dist/modules/normalizeColor/index.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  var returnValue = value;

  if ((property == null || !_modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__["default"][property]) && typeof value === 'number') {
    returnValue = value + "px";
  } else if (property != null && colorProps[property]) {
    returnValue = Object(_modules_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  }

  return returnValue;
}

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js":
/*!*******************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/normalizeColor */ "../../node_modules/react-native-web/dist/modules/normalizeColor/index.js");
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "../../node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var defaultOffset = {
  height: 0,
  width: 0
};

var resolveShadowValue = function resolveShadowValue(style) {
  var shadowColor = style.shadowColor,
      shadowOffset = style.shadowOffset,
      shadowOpacity = style.shadowOpacity,
      shadowRadius = style.shadowRadius;

  var _ref = shadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var offsetX = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(width);
  var offsetY = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(height);
  var blurRadius = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(shadowRadius || 0);
  var color = Object(_modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__["default"])(shadowColor || 'black', shadowOpacity);

  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (resolveShadowValue);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js":
/*!**************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStyleResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyleResolver */ "../../node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var styleResolver = Object(_createStyleResolver__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (styleResolver);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/StyleSheet/validate.js":
/*!*********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/StyleSheet/validate.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
/* harmony import */ var _Image_ImageStylePropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Image/ImageStylePropTypes */ "../../node_modules/react-native-web/dist/exports/Image/ImageStylePropTypes.js");
/* harmony import */ var _TextInput_TextInputStylePropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TextInput/TextInputStylePropTypes */ "../../node_modules/react-native-web/dist/exports/TextInput/TextInputStylePropTypes.js");
/* harmony import */ var _Text_TextStylePropTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Text/TextStylePropTypes */ "../../node_modules/react-native-web/dist/exports/Text/TextStylePropTypes.js");
/* harmony import */ var _View_ViewStylePropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../View/ViewStylePropTypes */ "../../node_modules/react-native-web/dist/exports/View/ViewStylePropTypes.js");
/* harmony import */ var fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fbjs/lib/warning */ "../../node_modules/react-native-web/node_modules/fbjs/lib/warning.js");
/* harmony import */ var fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// import { STYLE_SHORT_FORM_EXPANSIONS } from './constants';





var validProperties = [].concat(Object.keys(_Image_ImageStylePropTypes__WEBPACK_IMPORTED_MODULE_0__["default"]), Object.keys(_TextInput_TextInputStylePropTypes__WEBPACK_IMPORTED_MODULE_1__["default"]), Object.keys(_Text_TextStylePropTypes__WEBPACK_IMPORTED_MODULE_2__["default"]), Object.keys(_View_ViewStylePropTypes__WEBPACK_IMPORTED_MODULE_3__["default"]), ['appearance', 'borderCollapse', 'borderSpacing', 'clear', 'cursor', 'fill', 'float', 'listStyle', 'objectFit', 'objectPosition', 'pointerEvents', 'placeholderTextColor', 'tableLayout']).sort().reduce(function (acc, curr) {
  acc[curr] = true;
  return acc;
}, {});
var invalidShortforms = {
  background: true,
  borderBottom: true,
  borderLeft: true,
  borderRight: true,
  borderTop: true,
  font: true,
  grid: true,
  outline: true,
  textDecoration: true
};
/*
const singleValueShortForms = Object.keys(STYLE_SHORT_FORM_EXPANSIONS).reduce((a, c) => {
  a[c] = true;
  return a;
}, {});
*/

function error(message) {
  fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_4___default()(false, message);
}

function validate(key, styles) {
  var obj = styles[key];

  for (var k in obj) {
    var prop = k.trim();
    var value = obj[prop];
    var isInvalid = false;

    if (value === null) {
      continue;
    }

    if (validProperties[prop] == null) {
      var suggestion = '';

      if (prop === 'animation' || prop === 'animationName') {
        suggestion = 'Did you mean "animationKeyframes"?'; // } else if (prop === 'boxShadow') {
        //  suggestion = 'Did you mean "shadow{Color,Offset,Opacity,Radius}"?';
      } else if (prop === 'direction') {
        suggestion = 'Did you mean "writingDirection"?';
      } else if (prop === 'verticalAlign') {
        suggestion = 'Did you mean "textAlignVertical"?';
      } else if (invalidShortforms[prop]) {
        suggestion = 'Please use long-form properties.';
      }

      isInvalid = true;
      error("Invalid style property of \"" + prop + "\". " + suggestion);
    } // else if (singleValueShortForms[prop]) {
    //   TODO: fix check
    //   if (typeof value === 'string' && value.indexOf(' ') > -1) {
    //     error(
    //       `Invalid style declaration "${prop}:${value}". This property must only specify a single value.`
    //     );
    //     isInvalid = true;
    //   }
    // }
    else if (typeof value === 'string' && value.indexOf('!important') > -1) {
        error("Invalid style declaration \"" + prop + ":" + value + "\". Values cannot include \"!important\"");
        isInvalid = true;
      }

    if (isInvalid) {
      delete obj[k];
    }
  }
}

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/Text/TextStylePropTypes.js":
/*!*************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/Text/TextStylePropTypes.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorPropType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ColorPropType */ "../../node_modules/react-native-web/dist/exports/ColorPropType/index.js");
/* harmony import */ var _View_ViewStylePropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../View/ViewStylePropTypes */ "../../node_modules/react-native-web/dist/exports/View/ViewStylePropTypes.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var numberOrString = Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["number"], prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]]);

var TextStylePropTypes = _objectSpread({}, _View_ViewStylePropTypes__WEBPACK_IMPORTED_MODULE_1__["default"], {
  color: _ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  fontFeatureSettings: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  fontSize: numberOrString,
  fontStyle: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  fontVariant: prop_types__WEBPACK_IMPORTED_MODULE_2__["array"],
  letterSpacing: numberOrString,
  lineHeight: numberOrString,
  textAlign: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['center', 'end', 'inherit', 'justify', 'justify-all', 'left', 'right', 'start']),
  textAlignVertical: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  textDecorationColor: _ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  textDecorationLine: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  textDecorationStyle: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  textShadowColor: _ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  textShadowOffset: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({
    width: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
    height: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"]
  }),
  textShadowRadius: prop_types__WEBPACK_IMPORTED_MODULE_2__["number"],
  textTransform: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['capitalize', 'lowercase', 'none', 'uppercase']),
  writingDirection: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['auto', 'ltr', 'rtl']),

  /* @platform web */
  textIndent: numberOrString,
  textOverflow: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  textRendering: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['auto', 'geometricPrecision', 'optimizeLegibility', 'optimizeSpeed']),
  unicodeBidi: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['normal', 'bidi-override', 'embed', 'isolate', 'isolate-override', 'plaintext']),
  whiteSpace: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  wordBreak: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['normal', 'break-all', 'break-word', 'keep-all']),
  wordWrap: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  MozOsxFontSmoothing: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  WebkitFontSmoothing: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
});

/* harmony default export */ __webpack_exports__["default"] = (TextStylePropTypes);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/TextInput/TextInputStylePropTypes.js":
/*!***********************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/TextInput/TextInputStylePropTypes.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorPropType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ColorPropType */ "../../node_modules/react-native-web/dist/exports/ColorPropType/index.js");
/* harmony import */ var _Text_TextStylePropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Text/TextStylePropTypes */ "../../node_modules/react-native-web/dist/exports/Text/TextStylePropTypes.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




var TextInputStylePropTypes = _objectSpread({}, _Text_TextStylePropTypes__WEBPACK_IMPORTED_MODULE_1__["default"], {
  /* @platform web */
  caretColor: _ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  resize: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOf"])(['none', 'vertical', 'horizontal', 'both'])
});

/* harmony default export */ __webpack_exports__["default"] = (TextInputStylePropTypes);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/UIManager/index.js":
/*!*****************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/UIManager/index.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/getBoundingClientRect */ "../../node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js");
/* harmony import */ var _vendor_react_dom_setValueForStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vendor/react-dom/setValueForStyles */ "../../node_modules/react-native-web/dist/vendor/react-dom/setValueForStyles/index.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var getRect = function getRect(node) {
  // Unlike the DOM's getBoundingClientRect, React Native layout measurements
  // for "height" and "width" ignore scale transforms.
  // https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
  var _getBoundingClientRec = Object(_modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      x = _getBoundingClientRec.x,
      y = _getBoundingClientRec.y,
      top = _getBoundingClientRec.top,
      left = _getBoundingClientRec.left;

  var width = node.offsetWidth;
  var height = node.offsetHeight;
  return {
    x: x,
    y: y,
    width: width,
    height: height,
    top: top,
    left: left
  };
};

var _measureLayout = function measureLayout(node, relativeToNativeNode, callback) {
  var relativeNode = relativeToNativeNode || node && node.parentNode;

  if (node && relativeNode) {
    setTimeout(function () {
      var relativeRect = Object(_modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(relativeNode);

      var _getRect = getRect(node),
          height = _getRect.height,
          left = _getRect.left,
          top = _getRect.top,
          width = _getRect.width;

      var x = left - relativeRect.left;
      var y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};

var focusableElements = {
  A: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
var UIManager = {
  blur: function blur(node) {
    try {
      node.blur();
    } catch (err) {}
  },
  focus: function focus(node) {
    try {
      var name = node.nodeName; // A tabIndex of -1 allows element to be programmatically focused but
      // prevents keyboard focus, so we don't want to set the value on elements
      // that support keyboard focus by default.

      if (node.getAttribute('tabIndex') == null && focusableElements[name] == null) {
        node.setAttribute('tabIndex', '-1');
      }

      node.focus();
    } catch (err) {}
  },
  measure: function measure(node, callback) {
    _measureLayout(node, null, callback);
  },
  measureInWindow: function measureInWindow(node, callback) {
    if (node) {
      setTimeout(function () {
        var _getRect2 = getRect(node),
            height = _getRect2.height,
            left = _getRect2.left,
            top = _getRect2.top,
            width = _getRect2.width;

        callback(left, top, width, height);
      }, 0);
    }
  },
  measureLayout: function measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    _measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView: function updateView(node, props, component
  /* only needed to surpress React errors in development */
  ) {
    for (var prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }

      var value = props[prop];

      switch (prop) {
        case 'style':
          {
            Object(_vendor_react_dom_setValueForStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(node, value, component._reactInternalInstance);
            break;
          }

        case 'class':
        case 'className':
          {
            node.setAttribute('class', value);
            break;
          }

        case 'text':
        case 'value':
          // native platforms use `text` prop to replace text input value
          node.value = value;
          break;

        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation: function configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  // mocks
  setLayoutAnimationEnabledExperimental: function setLayoutAnimationEnabledExperimental() {}
};
/* harmony default export */ __webpack_exports__["default"] = (UIManager);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/View/ViewPropTypes.js":
/*!********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/View/ViewPropTypes.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EdgeInsetsPropType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EdgeInsetsPropType */ "../../node_modules/react-native-web/dist/exports/EdgeInsetsPropType/index.js");
/* harmony import */ var _modules_StyleSheetPropType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/StyleSheetPropType */ "../../node_modules/react-native-web/dist/modules/StyleSheetPropType/index.js");
/* harmony import */ var _ViewStylePropTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewStylePropTypes */ "../../node_modules/react-native-web/dist/exports/View/ViewStylePropTypes.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




var stylePropType = Object(_modules_StyleSheetPropType__WEBPACK_IMPORTED_MODULE_1__["default"])(_ViewStylePropTypes__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ViewPropTypes = {
  accessibilityComponentType: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  accessibilityLabel: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  accessibilityLiveRegion: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["oneOf"])(['assertive', 'none', 'polite']),
  accessibilityRole: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  accessibilityStates: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["oneOf"])(['disabled', 'selected',
  /* web-only */
  'busy', 'checked', 'expanded', 'grabbed', 'invalid', 'pressed'])),
  accessibilityTraits: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_3__["array"], prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]]),
  accessible: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__["any"],
  hitSlop: _EdgeInsetsPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  importantForAccessibility: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["oneOf"])(['auto', 'no', 'no-hide-descendants', 'yes']),
  nativeID: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onClickCapture: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onLayout: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onMoveShouldSetResponder: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onMoveShouldSetResponderCapture: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onResponderGrant: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onResponderMove: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onResponderReject: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onResponderRelease: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onResponderTerminate: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onResponderTerminationRequest: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onStartShouldSetResponder: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onStartShouldSetResponderCapture: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onTouchCancel: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onTouchCancelCapture: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onTouchEnd: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onTouchEndCapture: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onTouchMove: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onTouchMoveCapture: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onTouchStartCapture: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  pointerEvents: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["oneOf"])(['auto', 'box-none', 'box-only', 'none']),
  style: stylePropType,
  testID: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  // web extensions
  onContextMenu: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  itemID: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  itemRef: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  itemProp: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  itemScope: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  itemType: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  // compatibility with React Native
  accessibilityViewIsModal: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  collapsable: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  needsOffscreenAlphaCompositing: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  onAccessibilityTap: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  onMagicTap: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"],
  removeClippedSubviews: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  renderToHardwareTextureAndroid: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  shouldRasterizeIOS: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  tvParallaxProperties: prop_types__WEBPACK_IMPORTED_MODULE_3__["object"]
};
/* harmony default export */ __webpack_exports__["default"] = (ViewPropTypes);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/View/ViewStylePropTypes.js":
/*!*************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/View/ViewStylePropTypes.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_AnimationPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/AnimationPropTypes */ "../../node_modules/react-native-web/dist/modules/AnimationPropTypes/index.js");
/* harmony import */ var _modules_BorderPropTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/BorderPropTypes */ "../../node_modules/react-native-web/dist/modules/BorderPropTypes/index.js");
/* harmony import */ var _ColorPropType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ColorPropType */ "../../node_modules/react-native-web/dist/exports/ColorPropType/index.js");
/* harmony import */ var _modules_InteractionPropTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/InteractionPropTypes */ "../../node_modules/react-native-web/dist/modules/InteractionPropTypes/index.js");
/* harmony import */ var _modules_LayoutPropTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/LayoutPropTypes */ "../../node_modules/react-native-web/dist/modules/LayoutPropTypes/index.js");
/* harmony import */ var _modules_ShadowPropTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/ShadowPropTypes */ "../../node_modules/react-native-web/dist/modules/ShadowPropTypes/index.js");
/* harmony import */ var _modules_TransformPropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/TransformPropTypes */ "../../node_modules/react-native-web/dist/modules/TransformPropTypes/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */








var stringOrNumber = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_7__["string"], prop_types__WEBPACK_IMPORTED_MODULE_7__["number"]]);
var overscrollBehaviorType = Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['auto', 'contain', 'none']);

var ViewStylePropTypes = _objectSpread({}, _modules_AnimationPropTypes__WEBPACK_IMPORTED_MODULE_0__["default"], _modules_BorderPropTypes__WEBPACK_IMPORTED_MODULE_1__["default"], _modules_InteractionPropTypes__WEBPACK_IMPORTED_MODULE_3__["default"], _modules_LayoutPropTypes__WEBPACK_IMPORTED_MODULE_4__["default"], _modules_ShadowPropTypes__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_TransformPropTypes__WEBPACK_IMPORTED_MODULE_6__["default"], {
  backgroundColor: _ColorPropType__WEBPACK_IMPORTED_MODULE_2__["default"],
  opacity: prop_types__WEBPACK_IMPORTED_MODULE_7__["number"],

  /**
   * @platform unsupported
   */
  elevation: prop_types__WEBPACK_IMPORTED_MODULE_7__["number"],

  /**
   * @platform web
   */
  backdropFilter: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  backgroundAttachment: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  backgroundBlendMode: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  backgroundClip: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  backgroundImage: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  backgroundOrigin: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['border-box', 'content-box', 'padding-box']),
  backgroundPosition: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  backgroundRepeat: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  backgroundSize: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  boxShadow: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  clip: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  filter: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  outlineColor: _ColorPropType__WEBPACK_IMPORTED_MODULE_2__["default"],
  outlineOffset: stringOrNumber,
  outlineStyle: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  outlineWidth: stringOrNumber,
  overscrollBehavior: overscrollBehaviorType,
  overscrollBehaviorX: overscrollBehaviorType,
  overscrollBehaviorY: overscrollBehaviorType,
  scrollbarWidth: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['auto', 'none']),
  scrollSnapAlign: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  scrollSnapType: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  WebkitMaskImage: prop_types__WEBPACK_IMPORTED_MODULE_7__["string"],
  WebkitOverflowScrolling: Object(prop_types__WEBPACK_IMPORTED_MODULE_7__["oneOf"])(['auto', 'touch'])
});

/* harmony default export */ __webpack_exports__["default"] = (ViewStylePropTypes);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/View/filterSupportedProps.js":
/*!***************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/View/filterSupportedProps.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var supportedProps = {
  accessibilityComponentType: true,
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityStates: true,
  accessibilityTraits: true,
  accessible: true,
  children: true,
  disabled: true,
  importantForAccessibility: true,
  nativeID: true,
  onBlur: true,
  onContextMenu: true,
  onFocus: true,
  onMoveShouldSetResponder: true,
  onMoveShouldSetResponderCapture: true,
  onResponderEnd: true,
  onResponderGrant: true,
  onResponderMove: true,
  onResponderReject: true,
  onResponderRelease: true,
  onResponderStart: true,
  onResponderTerminate: true,
  onResponderTerminationRequest: true,
  onScrollShouldSetResponder: true,
  onScrollShouldSetResponderCapture: true,
  onSelectionChangeShouldSetResponder: true,
  onSelectionChangeShouldSetResponderCapture: true,
  onStartShouldSetResponder: true,
  onStartShouldSetResponderCapture: true,
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true,
  pointerEvents: true,
  style: true,
  testID: true,

  /* @platform web */
  onScroll: true,
  onWheel: true,
  // keyboard events
  onKeyDown: true,
  onKeyPress: true,
  onKeyUp: true,
  // mouse events (e.g, hover effects)
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true,
  // unstable escape-hatches for web
  className: true,
  href: true,
  itemID: true,
  itemRef: true,
  itemProp: true,
  itemScope: true,
  itemType: true,
  onClick: true,
  onClickCapture: true,
  rel: true,
  target: true
};

var filterSupportedProps = function filterSupportedProps(props) {
  var safeProps = {};

  for (var prop in props) {
    if (props.hasOwnProperty(prop)) {
      if (supportedProps[prop] || prop.indexOf('aria-') === 0 || prop.indexOf('data-') === 0) {
        safeProps[prop] = props[prop];
      }
    }
  }

  return safeProps;
};

/* harmony default export */ __webpack_exports__["default"] = (filterSupportedProps);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/View/index.js":
/*!************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/View/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_applyLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/applyLayout */ "../../node_modules/react-native-web/dist/modules/applyLayout/index.js");
/* harmony import */ var _modules_applyNativeMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/applyNativeMethods */ "../../node_modules/react-native-web/dist/modules/applyNativeMethods/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../createElement */ "../../node_modules/react-native-web/dist/exports/createElement/index.js");
/* harmony import */ var _StyleSheet_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../StyleSheet/css */ "../../node_modules/react-native-web/dist/exports/StyleSheet/css.js");
/* harmony import */ var _filterSupportedProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filterSupportedProps */ "../../node_modules/react-native-web/dist/exports/View/filterSupportedProps.js");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fbjs/lib/invariant */ "../../node_modules/react-native-web/node_modules/fbjs/lib/invariant.js");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fbjs/lib/warning */ "../../node_modules/react-native-web/node_modules/fbjs/lib/warning.js");
/* harmony import */ var fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../StyleSheet */ "../../node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var _ViewPropTypes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ViewPropTypes */ "../../node_modules/react-native-web/dist/exports/View/ViewPropTypes.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */












var calculateHitSlopStyle = function calculateHitSlopStyle(hitSlop) {
  var hitStyle = {};

  for (var prop in hitSlop) {
    if (hitSlop.hasOwnProperty(prop)) {
      var value = hitSlop[prop];
      hitStyle[prop] = value > 0 ? -1 * value : 0;
    }
  }

  return hitStyle;
};

var View =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(View, _Component);

  function View() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = View.prototype;

  _proto.render = function render() {
    var hitSlop = this.props.hitSlop;
    var supportedProps = Object(_filterSupportedProps__WEBPACK_IMPORTED_MODULE_5__["default"])(this.props);

    if (true) {
      fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_7___default()(this.props.className == null, 'Using the "className" prop on <View> is deprecated.');
      react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.toArray(this.props.children).forEach(function (item) {
        fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_6___default()(typeof item !== 'string', "Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
      });
    }

    var isInAParentText = this.context.isInAParentText;
    supportedProps.classList = [this.props.className, classes.view];
    supportedProps.style = _StyleSheet__WEBPACK_IMPORTED_MODULE_8__["default"].compose(isInAParentText && styles.inline, this.props.style);

    if (hitSlop) {
      var hitSlopStyle = calculateHitSlopStyle(hitSlop);
      var hitSlopChild = Object(_createElement__WEBPACK_IMPORTED_MODULE_3__["default"])('span', {
        classList: [classes.hitSlop],
        style: hitSlopStyle
      });
      supportedProps.children = react__WEBPACK_IMPORTED_MODULE_10___default.a.Children.toArray([hitSlopChild, supportedProps.children]);
    }

    return Object(_createElement__WEBPACK_IMPORTED_MODULE_3__["default"])('div', supportedProps);
  };

  return View;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

View.displayName = 'View';
View.contextTypes = {
  isInAParentText: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"]
};
View.propTypes =  true ? _ViewPropTypes__WEBPACK_IMPORTED_MODULE_9__["default"] : undefined;
var classes = _StyleSheet_css__WEBPACK_IMPORTED_MODULE_4__["default"].create({
  view: {
    alignItems: 'stretch',
    border: '0 solid black',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: 'relative',
    zIndex: 0
  },
  // this zIndex-ordering positions the hitSlop above the View but behind
  // its children
  hitSlop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  }
});
var styles = _StyleSheet__WEBPACK_IMPORTED_MODULE_8__["default"].create({
  inline: {
    display: 'inline-flex'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_modules_applyLayout__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_modules_applyNativeMethods__WEBPACK_IMPORTED_MODULE_1__["default"])(View)));

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/createElement/index.js":
/*!*********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/createElement/index.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/AccessibilityUtil */ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js");
/* harmony import */ var _modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/createDOMProps */ "../../node_modules/react-native-web/dist/modules/createDOMProps/index.js");
/* harmony import */ var react_dom_unstable_native_dependencies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/unstable-native-dependencies */ "react-dom/unstable-native-dependencies");
/* harmony import */ var react_dom_unstable_native_dependencies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_unstable_native_dependencies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_normalizeNativeEvent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/normalizeNativeEvent */ "../../node_modules/react-native-web/dist/modules/normalizeNativeEvent/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_ResponderEventPlugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/ResponderEventPlugin */ "../../node_modules/react-native-web/dist/modules/ResponderEventPlugin/index.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */






Object(react_dom_unstable_native_dependencies__WEBPACK_IMPORTED_MODULE_2__["injectEventPluginsByName"])({
  ResponderEventPlugin: _modules_ResponderEventPlugin__WEBPACK_IMPORTED_MODULE_5__["default"]
});

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};
/**
 * Ensure event handlers receive an event of the expected shape. The 'button'
 * role – for accessibility reasons and functional equivalence to the native
 * button element – must also support synthetic keyboard activation of onclick,
 * and remove event handlers when disabled.
 */


var eventHandlerNames = {
  onBlur: true,
  onClick: true,
  onClickCapture: true,
  onContextMenu: true,
  onFocus: true,
  onResponderRelease: true,
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
};

var adjustProps = function adjustProps(domProps) {
  var onClick = domProps.onClick,
      onResponderRelease = domProps.onResponderRelease,
      role = domProps.role;
  var isButtonLikeRole = _modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__["default"].buttonLikeRoles[role];
  var isDisabled = _modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__["default"].isDisabled(domProps);
  var isLinkRole = role === 'link';
  Object.keys(domProps).forEach(function (propName) {
    var prop = domProps[propName];
    var isEventHandler = typeof prop === 'function' && eventHandlerNames[propName];

    if (isEventHandler) {
      if (isButtonLikeRole && isDisabled) {
        domProps[propName] = undefined;
      } else {
        // TODO: move this out of the render path
        domProps[propName] = function (e) {
          e.nativeEvent = Object(_modules_normalizeNativeEvent__WEBPACK_IMPORTED_MODULE_3__["default"])(e.nativeEvent);
          return prop(e);
        };
      }
    }
  }); // Cancel click events if the responder system is being used on a link
  // element. Click events are not an expected part of the React Native API,
  // and browsers dispatch click events that cannot otherwise be cancelled from
  // preceding mouse events in the responder system.

  if (isLinkRole && onResponderRelease) {
    domProps.onClick = function (e) {
      if (!e.isDefaultPrevented() && !isModifiedEvent(e.nativeEvent) && !domProps.target) {
        e.preventDefault();
      }
    };
  } // Button-like roles should trigger 'onClick' if SPACE or ENTER keys are pressed.


  if (isButtonLikeRole && !isDisabled) {
    domProps.onKeyPress = function (e) {
      if (!e.isDefaultPrevented() && (e.which === 13 || e.which === 32)) {
        e.preventDefault();

        if (onClick) {
          onClick(e);
        }
      }
    };
  }
};

var createElement = function createElement(component, props) {
  // use equivalent platform elements where possible
  var accessibilityComponent;

  if (component && component.constructor === String) {
    accessibilityComponent = _modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__["default"].propsToAccessibilityComponent(props);
  }

  var Component = accessibilityComponent || component;
  var domProps = Object(_modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__["default"])(Component, props);
  adjustProps(domProps);

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement.apply(react__WEBPACK_IMPORTED_MODULE_4___default.a, [Component, domProps].concat(children));
};

/* harmony default export */ __webpack_exports__["default"] = (createElement);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/findNodeHandle/index.js":
/*!**********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/findNodeHandle/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var findNodeHandle = function findNodeHandle(component) {
  var node;

  try {
    node = !(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(component);
  } catch (e) {}

  return node;
};

/* harmony default export */ __webpack_exports__["default"] = (findNodeHandle);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/processColor/index.js":
/*!********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/processColor/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-css-color */ "../../node_modules/normalize-css-color/index.js");
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css_color__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var processColor = function processColor(color) {
  if (color === undefined || color === null) {
    return color;
  } // convert number and hex


  var int32Color = normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default()(color);

  if (int32Color === undefined || int32Color === null) {
    return undefined;
  }

  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};

/* harmony default export */ __webpack_exports__["default"] = (processColor);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/render/index.js":
/*!**************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/render/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ }),

/***/ "../../node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js":
/*!******************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/buttonLikeRoles.js":
/*!***********************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/AccessibilityUtil/buttonLikeRoles.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var buttonLikeRoles = {
  // ARIA button behaves like native 'button' element
  button: true,
  // ARIA menuitem responds to Enter/Space like a button. Spec requires AT to
  // ignore ARIA roles of any children.
  // https://www.w3.org/WAI/GL/wiki/Using_ARIA_menus
  menuitem: true
};
/* harmony default export */ __webpack_exports__["default"] = (buttonLikeRoles);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js":
/*!*************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttonLikeRoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonLikeRoles */ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/buttonLikeRoles.js");
/* harmony import */ var _isDisabled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isDisabled */ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js");
/* harmony import */ var _propsToAccessibilityComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propsToAccessibilityComponent */ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js");
/* harmony import */ var _propsToAriaRole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./propsToAriaRole */ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




var AccessibilityUtil = {
  buttonLikeRoles: _buttonLikeRoles__WEBPACK_IMPORTED_MODULE_0__["default"],
  isDisabled: _isDisabled__WEBPACK_IMPORTED_MODULE_1__["default"],
  propsToAccessibilityComponent: _propsToAccessibilityComponent__WEBPACK_IMPORTED_MODULE_2__["default"],
  propsToAriaRole: _propsToAriaRole__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (AccessibilityUtil);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js":
/*!******************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var isDisabled = function isDisabled(props) {
  return props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf('disabled') > -1;
};

/* harmony default export */ __webpack_exports__["default"] = (isDisabled);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js":
/*!*************************************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _propsToAriaRole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propsToAriaRole */ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var roleComponents = {
  article: 'article',
  banner: 'header',
  complementary: 'aside',
  contentinfo: 'footer',
  form: 'form',
  link: 'a',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section'
};
var emptyObject = {};

var propsToAccessibilityComponent = function propsToAccessibilityComponent(props) {
  if (props === void 0) {
    props = emptyObject;
  }

  // special-case for "label" role which doesn't map to an ARIA role
  if (props.accessibilityRole === 'label') {
    return 'label';
  }

  var role = Object(_propsToAriaRole__WEBPACK_IMPORTED_MODULE_0__["default"])(props);

  if (role) {
    if (role === 'heading') {
      var level = props['aria-level'] || 1;
      return "h" + level;
    }

    return roleComponents[role];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (propsToAccessibilityComponent);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js":
/*!***********************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var accessibilityComponentTypeToRole = {
  button: 'button',
  none: 'presentation'
};
var accessibilityTraitsToRole = {
  adjustable: 'slider',
  button: 'button',
  header: 'heading',
  image: 'img',
  link: 'link',
  none: 'presentation',
  search: 'search',
  summary: 'region'
};
var accessibilityRoleToWebRole = {
  adjustable: 'slider',
  button: 'button',
  header: 'heading',
  image: 'img',
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: 'link',
  none: 'presentation',
  search: 'search',
  summary: 'region',
  text: null
};
/**
 * Provides compatibility with React Native's "accessibilityTraits" (iOS) and
 * "accessibilityComponentType" (Android), converting them to equivalent ARIA
 * roles.
 */

var propsToAriaRole = function propsToAriaRole(_ref) {
  var accessibilityComponentType = _ref.accessibilityComponentType,
      accessibilityRole = _ref.accessibilityRole,
      accessibilityTraits = _ref.accessibilityTraits;

  if (accessibilityRole) {
    var inferredRole = accessibilityRoleToWebRole[accessibilityRole];

    if (inferredRole !== null) {
      // ignore roles that don't map to web
      return inferredRole || accessibilityRole;
    }
  }

  if (accessibilityTraits) {
    var trait = Array.isArray(accessibilityTraits) ? accessibilityTraits[0] : accessibilityTraits;
    return accessibilityTraitsToRole[trait];
  }

  if (accessibilityComponentType) {
    return accessibilityComponentTypeToRole[accessibilityComponentType];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (propsToAriaRole);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/AnimationPropTypes/index.js":
/*!**************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/AnimationPropTypes/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var animationDirectionEnum = ['alternate', 'alternate-reverse', 'normal', 'reverse'];
var animationFillModeEnum = ['none', 'forwards', 'backwards', 'both'];
var animationPlayStateEnum = ['paused', 'running'];
var AnimationPropTypes = {
  animationDelay: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_0__["string"])]),
  animationDirection: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(animationDirectionEnum), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(animationDirectionEnum)]),
  animationDuration: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_0__["string"])]),
  animationFillMode: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(animationFillModeEnum), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(animationFillModeEnum)]),
  animationIterationCount: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["number"], Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['infinite']), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["number"], Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['infinite'])]))]),
  animationKeyframes: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["object"], Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], prop_types__WEBPACK_IMPORTED_MODULE_0__["object"]]))]),
  animationPlayState: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(animationPlayStateEnum), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(animationPlayStateEnum)]),
  animationTimingFunction: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_0__["string"])]),
  transitionDelay: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_0__["string"])]),
  transitionDuration: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_0__["string"])]),
  transitionProperty: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_0__["string"])]),
  transitionTimingFunction: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_0__["string"])])
};
/* harmony default export */ __webpack_exports__["default"] = (AnimationPropTypes);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/BorderPropTypes/index.js":
/*!***********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/BorderPropTypes/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exports_ColorPropType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../exports/ColorPropType */ "../../node_modules/react-native-web/dist/exports/ColorPropType/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var numberOrString = Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]);
var BorderStylePropType = Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])(['solid', 'dotted', 'dashed']);
var BorderPropTypes = {
  borderColor: _exports_ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  borderBottomColor: _exports_ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  borderEndColor: _exports_ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  borderLeftColor: _exports_ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  borderRightColor: _exports_ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  borderStartColor: _exports_ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  borderTopColor: _exports_ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  borderRadius: numberOrString,
  borderBottomEndRadius: numberOrString,
  borderBottomLeftRadius: numberOrString,
  borderBottomRightRadius: numberOrString,
  borderBottomStartRadius: numberOrString,
  borderTopEndRadius: numberOrString,
  borderTopLeftRadius: numberOrString,
  borderTopRightRadius: numberOrString,
  borderTopStartRadius: numberOrString,
  borderStyle: BorderStylePropType,
  borderBottomStyle: BorderStylePropType,
  borderEndStyle: BorderStylePropType,
  borderLeftStyle: BorderStylePropType,
  borderRightStyle: BorderStylePropType,
  borderStartStyle: BorderStylePropType,
  borderTopStyle: BorderStylePropType
};
/* harmony default export */ __webpack_exports__["default"] = (BorderPropTypes);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/InteractionPropTypes/index.js":
/*!****************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/InteractionPropTypes/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var cursorEnum = ['auto', 'default', 'none', 'context-menu', 'help', 'pointer', 'progress', 'wait', 'cell', 'crosshair', 'text', 'vertical-text', 'alias', 'copy', 'move', 'no-drop', 'not-allowed', 'e-resize', 'n-resize', 'ne-resize', 'nw-resize', 's-resize', 'se-resize', 'sw-resize', 'w-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'col-resize', 'row-resize', 'all-scroll', 'zoom-in', 'zoom-out', 'grab', 'grabbing '];
var touchActionEnum = ['auto', 'inherit', 'manipulation', 'none', 'pan-down', 'pan-left', 'pan-right', 'pan-up', 'pan-x', 'pan-y', 'pinch-zoom'];
var userSelectEnum = ['auto', 'text', 'none', 'contain', 'all'];
var InteractionPropTypes = {
  // https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Formal_syntax
  cursor: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["string"], Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(cursorEnum)]),
  // https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action#Formal_syntax
  touchAction: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(touchActionEnum),
  // https://developer.mozilla.org/en-US/docs/Web/CSS/user-select#Formal_syntax_2
  userSelect: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(userSelectEnum),
  willChange: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (InteractionPropTypes);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/LayoutPropTypes/index.js":
/*!***********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/LayoutPropTypes/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var OverflowPropType = Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['auto', 'hidden', 'scroll', 'visible']);
var hiddenOrVisible = Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['hidden', 'visible']);
var numberOrString = Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["number"], prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]]);
var LayoutPropTypes = {
  alignContent: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['auto', 'baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  backfaceVisibility: hiddenOrVisible,
  borderWidth: numberOrString,
  borderBottomWidth: numberOrString,
  borderEndWidth: numberOrString,
  borderLeftWidth: numberOrString,
  borderRightWidth: numberOrString,
  borderStartWidth: numberOrString,
  borderTopWidth: numberOrString,
  bottom: numberOrString,
  boxSizing: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  direction: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['inherit', 'ltr', 'rtl']),
  display: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  end: numberOrString,
  flex: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],
  flexBasis: numberOrString,
  flexDirection: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['column', 'column-reverse', 'row', 'row-reverse']),
  flexGrow: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],
  flexShrink: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],
  flexWrap: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['nowrap', 'wrap', 'wrap-reverse']),
  height: numberOrString,
  justifyContent: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'space-evenly']),
  left: numberOrString,
  margin: numberOrString,
  marginBottom: numberOrString,
  marginHorizontal: numberOrString,
  marginEnd: numberOrString,
  marginLeft: numberOrString,
  marginRight: numberOrString,
  marginStart: numberOrString,
  marginTop: numberOrString,
  marginVertical: numberOrString,
  maxHeight: numberOrString,
  maxWidth: numberOrString,
  minHeight: numberOrString,
  minWidth: numberOrString,
  order: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],
  overflow: OverflowPropType,
  overflowX: OverflowPropType,
  overflowY: OverflowPropType,
  padding: numberOrString,
  paddingBottom: numberOrString,
  paddingHorizontal: numberOrString,
  paddingEnd: numberOrString,
  paddingLeft: numberOrString,
  paddingRight: numberOrString,
  paddingStart: numberOrString,
  paddingTop: numberOrString,
  paddingVertical: numberOrString,
  position: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['absolute', 'fixed', 'relative', 'static', 'sticky']),
  right: numberOrString,
  start: numberOrString,
  top: numberOrString,
  visibility: hiddenOrVisible,
  width: numberOrString,
  zIndex: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],

  /**
   * @platform unsupported
   */
  aspectRatio: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"],

  /**
   * @platform web
   */
  gridAutoColumns: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  gridAutoFlow: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  gridAutoRows: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  gridColumnEnd: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  gridColumnGap: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  gridColumnStart: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  gridRowEnd: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  gridRowGap: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  gridRowStart: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  gridTemplateColumns: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  gridTemplateRows: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  gridTemplateAreas: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (LayoutPropTypes);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/NativeMethodsMixin/index.js":
/*!**************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/NativeMethodsMixin/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createDOMProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createDOMProps */ "../../node_modules/react-native-web/dist/modules/createDOMProps/index.js");
/* harmony import */ var _exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exports/findNodeHandle */ "../../node_modules/react-native-web/dist/exports/findNodeHandle/index.js");
/* harmony import */ var _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exports/StyleSheet/styleResolver */ "../../node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");
/* harmony import */ var _exports_UIManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../exports/UIManager */ "../../node_modules/react-native-web/dist/exports/UIManager/index.js");
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */




var NativeMethodsMixin = {
  /**
   * Removes focus from an input or view. This is the opposite of `focus()`.
   */
  blur: function blur() {
    _exports_UIManager__WEBPACK_IMPORTED_MODULE_3__["default"].blur(Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_1__["default"])(this));
  },

  /**
   * Requests focus for the given input or view.
   * The exact behavior triggered will depend the type of view.
   */
  focus: function focus() {
    _exports_UIManager__WEBPACK_IMPORTED_MODULE_3__["default"].focus(Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_1__["default"])(this));
  },

  /**
   * Determines the position and dimensions of the view
   */
  measure: function measure(callback) {
    _exports_UIManager__WEBPACK_IMPORTED_MODULE_3__["default"].measure(Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_1__["default"])(this), callback);
  },

  /**
   * Determines the location of the given view in the window and returns the
   * values via an async callback. If the React root view is embedded in
   * another native view, this will give you the absolute coordinates. If
   * successful, the callback will be called be called with the following
   * arguments:
   *
   *  - x
   *  - y
   *  - width
   *  - height
   *
   * Note that these measurements are not available until after the rendering
   * has been completed.
   */
  measureInWindow: function measureInWindow(callback) {
    _exports_UIManager__WEBPACK_IMPORTED_MODULE_3__["default"].measureInWindow(Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_1__["default"])(this), callback);
  },

  /**
   * Measures the view relative to another view (usually an ancestor)
   */
  measureLayout: function measureLayout(relativeToNativeNode, onSuccess, onFail) {
    _exports_UIManager__WEBPACK_IMPORTED_MODULE_3__["default"].measureLayout(Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_1__["default"])(this), relativeToNativeNode, onFail, onSuccess);
  },

  /**
   * This function sends props straight to the underlying DOM node.
   * This works as if all styles were set as inline styles. Since a DOM node
   * may aleady be styled with class names and inline styles, we need to get
   * the initial styles from the DOM node and merge them with incoming props.
   */
  setNativeProps: function setNativeProps(nativeProps) {
    if (!nativeProps) {
      return;
    }

    var node = Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_1__["default"])(this);

    if (node) {
      // Next state is determined by comparison to existing state (in the DOM).
      // Existing state has already gone through i18n transform
      var domProps = Object(_createDOMProps__WEBPACK_IMPORTED_MODULE_0__["default"])(null, nativeProps, function (style) {
        return _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_2__["default"].resolveWithNode(style, node);
      });
      _exports_UIManager__WEBPACK_IMPORTED_MODULE_3__["default"].updateView(node, domProps, this);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (NativeMethodsMixin);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/ReactNativePropRegistry/index.js":
/*!*******************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/ReactNativePropRegistry/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactNativePropRegistry; });
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var emptyObject = {};
var objects = {};
var prefix = 'r';
var uniqueID = 1;

var createKey = function createKey(id) {
  return prefix + "-" + id;
};

var ReactNativePropRegistry =
/*#__PURE__*/
function () {
  function ReactNativePropRegistry() {}

  ReactNativePropRegistry.register = function register(object) {
    var id = uniqueID++;

    if (true) {
      Object.freeze(object);
    }

    var key = createKey(id);
    objects[key] = object;
    return id;
  };

  ReactNativePropRegistry.getByID = function getByID(id) {
    if (!id) {
      // Used in the style={[condition && id]} pattern,
      // we want it to be a no-op when the value is false or null
      return emptyObject;
    }

    var key = createKey(id);
    var object = objects[key];

    if (!object) {
      console.warn('Invalid style with id `' + id + '`. Skipping ...');
      return emptyObject;
    }

    return object;
  };

  return ReactNativePropRegistry;
}();



/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/ResponderEventPlugin/index.js":
/*!****************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/ResponderEventPlugin/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalizeNativeEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../normalizeNativeEvent */ "../../node_modules/react-native-web/dist/modules/normalizeNativeEvent/index.js");
/* harmony import */ var react_dom_unstable_native_dependencies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/unstable-native-dependencies */ "react-dom/unstable-native-dependencies");
/* harmony import */ var react_dom_unstable_native_dependencies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_unstable_native_dependencies__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
// based on https://github.com/facebook/react/pull/4303/files


var ResponderEventPlugin = react_dom_unstable_native_dependencies__WEBPACK_IMPORTED_MODULE_1___default.a.ResponderEventPlugin,
    ResponderTouchHistoryStore = react_dom_unstable_native_dependencies__WEBPACK_IMPORTED_MODULE_1___default.a.ResponderTouchHistoryStore; // On older versions of React (< 16.4) we have to inject the dependencies in
// order for the plugin to work properly in the browser. This version still
// uses `top*` strings to identify the internal event names.
// https://github.com/facebook/react/pull/12629

if (!ResponderEventPlugin.eventTypes.responderMove.dependencies) {
  var topMouseDown = 'topMouseDown';
  var topMouseMove = 'topMouseMove';
  var topMouseUp = 'topMouseUp';
  var topScroll = 'topScroll';
  var topSelectionChange = 'topSelectionChange';
  var topTouchCancel = 'topTouchCancel';
  var topTouchEnd = 'topTouchEnd';
  var topTouchMove = 'topTouchMove';
  var topTouchStart = 'topTouchStart';
  var endDependencies = [topTouchCancel, topTouchEnd, topMouseUp];
  var moveDependencies = [topTouchMove, topMouseMove];
  var startDependencies = [topTouchStart, topMouseDown];
  /**
   * Setup ResponderEventPlugin dependencies
   */

  ResponderEventPlugin.eventTypes.responderMove.dependencies = moveDependencies;
  ResponderEventPlugin.eventTypes.responderEnd.dependencies = endDependencies;
  ResponderEventPlugin.eventTypes.responderStart.dependencies = startDependencies;
  ResponderEventPlugin.eventTypes.responderRelease.dependencies = endDependencies;
  ResponderEventPlugin.eventTypes.responderTerminationRequest.dependencies = [];
  ResponderEventPlugin.eventTypes.responderGrant.dependencies = [];
  ResponderEventPlugin.eventTypes.responderReject.dependencies = [];
  ResponderEventPlugin.eventTypes.responderTerminate.dependencies = [];
  ResponderEventPlugin.eventTypes.moveShouldSetResponder.dependencies = moveDependencies;
  ResponderEventPlugin.eventTypes.selectionChangeShouldSetResponder.dependencies = [topSelectionChange];
  ResponderEventPlugin.eventTypes.scrollShouldSetResponder.dependencies = [topScroll];
  ResponderEventPlugin.eventTypes.startShouldSetResponder.dependencies = startDependencies;
}

var lastActiveTouchTimestamp = null; // The length of time after a touch that we ignore the browser's emulated mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Using_Touch_Events

var EMULATED_MOUSE_THERSHOLD_MS = 1000;
var originalExtractEvents = ResponderEventPlugin.extractEvents;

ResponderEventPlugin.extractEvents = function (topLevelType, targetInst, nativeEvent, nativeEventTarget) {
  var hasActiveTouches = ResponderTouchHistoryStore.touchHistory.numberActiveTouches > 0;
  var eventType = nativeEvent.type;
  var shouldSkipMouseAfterTouch = false;

  if (eventType.indexOf('touch') > -1) {
    lastActiveTouchTimestamp = Date.now();
  } else if (lastActiveTouchTimestamp && eventType.indexOf('mouse') > -1) {
    var now = Date.now();
    shouldSkipMouseAfterTouch = now - lastActiveTouchTimestamp < EMULATED_MOUSE_THERSHOLD_MS;
  }

  if ( // Filter out mousemove and mouseup events when a touch hasn't started yet
  (eventType === 'mousemove' || eventType === 'mouseup') && !hasActiveTouches || // Filter out events from wheel/middle and right click.
  nativeEvent.button === 1 || nativeEvent.button === 2 || // Filter out mouse events that browsers dispatch immediately after touch events end
  // Prevents the REP from calling handlers twice for touch interactions.
  // See #802 and #932.
  shouldSkipMouseAfterTouch) {
    return;
  }

  var normalizedEvent = Object(_normalizeNativeEvent__WEBPACK_IMPORTED_MODULE_0__["default"])(nativeEvent);
  return originalExtractEvents.call(ResponderEventPlugin, topLevelType, targetInst, normalizedEvent, nativeEventTarget);
};

/* harmony default export */ __webpack_exports__["default"] = (ResponderEventPlugin);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/ShadowPropTypes/index.js":
/*!***********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/ShadowPropTypes/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exports_ColorPropType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../exports/ColorPropType */ "../../node_modules/react-native-web/dist/exports/ColorPropType/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var numberOrString = Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]);
var ShadowPropTypes = {
  shadowColor: _exports_ColorPropType__WEBPACK_IMPORTED_MODULE_0__["default"],
  shadowOffset: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    width: numberOrString,
    height: numberOrString
  }),
  shadowOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  shadowRadius: numberOrString,
  shadowSpread: numberOrString
};
/* harmony default export */ __webpack_exports__["default"] = (ShadowPropTypes);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/StyleSheetPropType/index.js":
/*!**************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/StyleSheetPropType/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStrictShapeTypeChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createStrictShapeTypeChecker */ "../../node_modules/react-native-web/dist/modules/createStrictShapeTypeChecker/index.js");
/* harmony import */ var _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exports/StyleSheet */ "../../node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



function StyleSheetPropType(shape) {
  var shapePropType = Object(_createStrictShapeTypeChecker__WEBPACK_IMPORTED_MODULE_0__["default"])(shape);
  return function (props, propName, componentName, location) {
    var newProps = props;

    if (props[propName]) {
      // Just make a dummy prop object with only the flattened style
      newProps = {};
      var flatStyle = _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_1__["default"].flatten(props[propName]); // Remove custom properties from check

      var nextStyle = Object.keys(flatStyle).reduce(function (acc, curr) {
        if (curr.indexOf('--') !== 0) {
          acc[curr] = flatStyle[curr];
        }

        return acc;
      }, {});
      newProps[propName] = nextStyle;
    }

    for (var _len = arguments.length, rest = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      rest[_key - 4] = arguments[_key];
    }

    return shapePropType.apply(void 0, [newProps, propName, componentName, location].concat(rest));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (StyleSheetPropType);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/TransformPropTypes/index.js":
/*!**************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/TransformPropTypes/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var numberOrString = Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["number"], prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]]);
var TransformPropTypes = {
  perspective: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_0__["number"], prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]]),
  perspectiveOrigin: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  transform: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOfType"])([Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    perspective: numberOrString
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    rotate: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    rotateX: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    rotateY: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    rotateZ: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    scale: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"]
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    scaleX: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"]
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    scaleY: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"]
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    scaleZ: prop_types__WEBPACK_IMPORTED_MODULE_0__["number"]
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    scale3d: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    skewX: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    skewY: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    translateX: numberOrString
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    translateY: numberOrString
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    translateZ: numberOrString
  }), Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["shape"])({
    translate3d: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"]
  })])),
  transformOrigin: prop_types__WEBPACK_IMPORTED_MODULE_0__["string"],
  transformStyle: Object(prop_types__WEBPACK_IMPORTED_MODULE_0__["oneOf"])(['flat', 'preserve-3d'])
};
/* harmony default export */ __webpack_exports__["default"] = (TransformPropTypes);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/applyLayout/index.js":
/*!*******************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/applyLayout/index.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "../../node_modules/react-native-web/node_modules/fbjs/lib/ExecutionEnvironment.js");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce */ "../../node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exports/findNodeHandle */ "../../node_modules/react-native-web/dist/exports/findNodeHandle/index.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var emptyObject = {};
var registry = {};
var id = 1;

var guid = function guid() {
  return "r-" + id++;
};

var resizeObserver;

if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
  if (typeof window.ResizeObserver !== 'undefined') {
    resizeObserver = new window.ResizeObserver(function (entries) {
      entries.forEach(function (_ref) {
        var target = _ref.target;
        var instance = registry[target._layoutId];
        instance && instance._handleLayout();
      });
    });
  } else {
    if (true) {
      console.warn('onLayout relies on ResizeObserver which is not supported by your browser. ' + 'Please include a polyfill, e.g., https://github.com/que-etc/resize-observer-polyfill. ' + 'Falling back to window.onresize.');
    }

    var triggerAll = function triggerAll() {
      Object.keys(registry).forEach(function (key) {
        var instance = registry[key];

        instance._handleLayout();
      });
    };

    window.addEventListener('resize', debounce__WEBPACK_IMPORTED_MODULE_1___default()(triggerAll, 16), false);
  }
}

var observe = function observe(instance) {
  var id = guid();
  registry[id] = instance;

  if (resizeObserver) {
    var node = Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_2__["default"])(instance);

    if (node) {
      node._layoutId = id;
      resizeObserver.observe(node);
    }
  } else {
    instance._layoutId = id;

    instance._handleLayout();
  }
};

var unobserve = function unobserve(instance) {
  if (resizeObserver) {
    var node = Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_2__["default"])(instance);

    if (node) {
      delete registry[node._layoutId];
      delete node._layoutId;
      resizeObserver.unobserve(node);
    }
  } else {
    delete registry[instance._layoutId];
    delete instance._layoutId;
  }
};

var safeOverride = function safeOverride(original, next) {
  if (original) {
    return function prototypeOverride() {
      /* eslint-disable prefer-rest-params */
      original.call(this, arguments);
      next.call(this, arguments);
      /* eslint-enable prefer-rest-params */
    };
  }

  return next;
};

var applyLayout = function applyLayout(Component) {
  var componentDidMount = Component.prototype.componentDidMount;
  var componentDidUpdate = Component.prototype.componentDidUpdate;
  var componentWillUnmount = Component.prototype.componentWillUnmount;
  Component.prototype.componentDidMount = safeOverride(componentDidMount, function componentDidMount() {
    this._layoutState = emptyObject;
    this._isMounted = true;

    if (this.props.onLayout) {
      observe(this);
    }
  });
  Component.prototype.componentDidUpdate = safeOverride(componentDidUpdate, function componentDidUpdate(prevProps) {
    if (this.props.onLayout && !prevProps.onLayout) {
      observe(this);
    } else if (!this.props.onLayout && prevProps.onLayout) {
      unobserve(this);
    }
  });
  Component.prototype.componentWillUnmount = safeOverride(componentWillUnmount, function componentWillUnmount() {
    this._isMounted = false;

    if (this.props.onLayout) {
      unobserve(this);
    }
  });

  Component.prototype._handleLayout = function () {
    var _this = this;

    var layout = this._layoutState;
    var onLayout = this.props.onLayout;

    if (onLayout) {
      this.measure(function (x, y, width, height) {
        if (_this._isMounted) {
          if (layout.x !== x || layout.y !== y || layout.width !== width || layout.height !== height) {
            _this._layoutState = {
              x: x,
              y: y,
              width: width,
              height: height
            };
            var nativeEvent = {
              layout: _this._layoutState
            };
            Object.defineProperty(nativeEvent, 'target', {
              enumerable: true,
              get: function get() {
                return Object(_exports_findNodeHandle__WEBPACK_IMPORTED_MODULE_2__["default"])(_this);
              }
            });
            onLayout({
              nativeEvent: nativeEvent,
              timeStamp: Date.now()
            });
          }
        }
      });
    }
  };

  return Component;
};

/* harmony default export */ __webpack_exports__["default"] = (applyLayout);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/applyNativeMethods/index.js":
/*!**************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/applyNativeMethods/index.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NativeMethodsMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NativeMethodsMixin */ "../../node_modules/react-native-web/dist/modules/NativeMethodsMixin/index.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var applyNativeMethods = function applyNativeMethods(Component) {
  Object.keys(_NativeMethodsMixin__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach(function (method) {
    if (!Component.prototype[method]) {
      Component.prototype[method] = _NativeMethodsMixin__WEBPACK_IMPORTED_MODULE_0__["default"][method];
    }
  });
  return Component;
};

/* harmony default export */ __webpack_exports__["default"] = (applyNativeMethods);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/createDOMProps/index.js":
/*!**********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/createDOMProps/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AccessibilityUtil */ "../../node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js");
/* harmony import */ var _exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exports/StyleSheet/css */ "../../node_modules/react-native-web/dist/exports/StyleSheet/css.js");
/* harmony import */ var _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exports/StyleSheet */ "../../node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../exports/StyleSheet/styleResolver */ "../../node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");
/* harmony import */ var _exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../exports/StyleSheet/constants */ "../../node_modules/react-native-web/dist/exports/StyleSheet/constants.js");
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */





var emptyObject = {}; // Reset styles for heading, link, and list DOM elements

var classes = _exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__["default"].create({
  reset: {
    backgroundColor: 'transparent',
    color: 'inherit',
    font: 'inherit',
    listStyle: 'none',
    margin: 0,
    textAlign: 'inherit',
    textDecoration: 'none'
  },
  cursor: {
    cursor: 'pointer'
  }
}, _exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__["STYLE_GROUPS"].classicReset);
var pointerEventsStyles = _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].create({
  auto: {
    pointerEvents: 'auto'
  },
  'box-none': {
    pointerEvents: 'box-none'
  },
  'box-only': {
    pointerEvents: 'box-only'
  },
  none: {
    pointerEvents: 'none'
  }
});

var defaultStyleResolver = function defaultStyleResolver(style, classList) {
  return _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(style, classList);
};

var createDOMProps = function createDOMProps(component, props, styleResolver) {
  if (!styleResolver) {
    styleResolver = defaultStyleResolver;
  }

  if (!props) {
    props = emptyObject;
  }

  var _props = props,
      accessibilityLabel = _props.accessibilityLabel,
      accessibilityLiveRegion = _props.accessibilityLiveRegion,
      accessibilityStates = _props.accessibilityStates,
      classList = _props.classList,
      deprecatedClassName = _props.className,
      importantForAccessibility = _props.importantForAccessibility,
      nativeID = _props.nativeID,
      placeholderTextColor = _props.placeholderTextColor,
      pointerEvents = _props.pointerEvents,
      providedStyle = _props.style,
      testID = _props.testID,
      accessible = _props.accessible,
      accessibilityComponentType = _props.accessibilityComponentType,
      accessibilityRole = _props.accessibilityRole,
      accessibilityTraits = _props.accessibilityTraits,
      domProps = _objectWithoutPropertiesLoose(_props, ["accessibilityLabel", "accessibilityLiveRegion", "accessibilityStates", "classList", "className", "importantForAccessibility", "nativeID", "placeholderTextColor", "pointerEvents", "style", "testID", "accessible", "accessibilityComponentType", "accessibilityRole", "accessibilityTraits"]);

  var disabled = _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__["default"].isDisabled(props);
  var role = _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__["default"].propsToAriaRole(props); // GENERAL ACCESSIBILITY

  if (importantForAccessibility === 'no-hide-descendants') {
    domProps['aria-hidden'] = true;
  }

  if (accessibilityLabel && accessibilityLabel.constructor === String) {
    domProps['aria-label'] = accessibilityLabel;
  }

  if (accessibilityLiveRegion && accessibilityLiveRegion.constructor === String) {
    domProps['aria-live'] = accessibilityLiveRegion === 'none' ? 'off' : accessibilityLiveRegion;
  }

  if (Array.isArray(accessibilityStates)) {
    for (var i = 0; i < accessibilityStates.length; i += 1) {
      domProps["aria-" + accessibilityStates[i]] = true;
    }
  }

  if (role && role.constructor === String) {
    domProps.role = role;
  } // DISABLED


  if (disabled) {
    domProps['aria-disabled'] = disabled;
    domProps.disabled = disabled;
  } // FOCUS
  // Assume that 'link' is focusable by default (uses <a>).
  // Assume that 'button' is not (uses <div role='button'>) but must be treated as such.


  var focusable = !disabled && importantForAccessibility !== 'no' && importantForAccessibility !== 'no-hide-descendants';

  if (role === 'link' || component === 'a' || component === 'button' || component === 'input' || component === 'select' || component === 'textarea') {
    if (accessible === false || !focusable) {
      domProps.tabIndex = '-1';
    } else {
      domProps['data-focusable'] = true;
    }
  } else if (_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__["default"].buttonLikeRoles[role] || role === 'textbox') {
    if (accessible !== false && focusable) {
      domProps['data-focusable'] = true;
      domProps.tabIndex = '0';
    }
  } else {
    if (accessible === true && focusable) {
      domProps['data-focusable'] = true;
      domProps.tabIndex = '0';
    }
  } // STYLE


  var reactNativeStyle = _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].compose(pointerEvents && pointerEventsStyles[pointerEvents], _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].compose(providedStyle, placeholderTextColor && {
    placeholderTextColor: placeholderTextColor
  })); // Additional style resets for interactive elements

  var needsCursor = (role === 'button' || role === 'link') && !disabled;
  var needsReset = component === 'a' || component === 'button' || component === 'li' || component === 'ul' || role === 'heading'; // Classic CSS styles

  var finalClassList = [deprecatedClassName, needsReset && classes.reset, needsCursor && classes.cursor, classList]; // Resolve styles

  var _styleResolver = styleResolver(reactNativeStyle, finalClassList),
      className = _styleResolver.className,
      style = _styleResolver.style;

  if (className != null && className !== '') {
    domProps.className = className;
  }

  if (style) {
    domProps.style = style;
  } // OTHER
  // Native element ID


  if (nativeID && nativeID.constructor === String) {
    domProps.id = nativeID;
  } // Link security
  // https://mathiasbynens.github.io/rel-noopener/
  // Note: using "noreferrer" doesn't impact referrer tracking for https
  // transfers (i.e., from https to https).


  if (component === 'a' && domProps.target === '_blank') {
    domProps.rel = (domProps.rel || '') + " noopener noreferrer";
  } // Automated test IDs


  if (testID && testID.constructor === String) {
    domProps['data-testid'] = testID;
  }

  return domProps;
};

/* harmony default export */ __webpack_exports__["default"] = (createDOMProps);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/createStrictShapeTypeChecker/index.js":
/*!************************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/createStrictShapeTypeChecker/index.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/invariant */ "../../node_modules/react-native-web/node_modules/fbjs/lib/invariant.js");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


function createStrictShapeTypeChecker(shapeTypes) {
  function checkType(isRequired, props, propName, componentName, location) {
    if (!props[propName]) {
      if (isRequired) {
        fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, "Required object `" + propName + "` was not specified in `" + componentName + "`.");
      }

      return;
    }

    var propValue = props[propName];
    var propType = typeof propValue;
    var locationName = location || '(unknown)';

    if (propType !== 'object') {
      fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, "Invalid " + locationName + " `" + propName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
    } // We need to check all keys in case some are required but missing from
    // props.


    var allKeys = _objectSpread({}, props[propName], shapeTypes);

    for (var _len = arguments.length, rest = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    for (var _key2 in allKeys) {
      var checker = shapeTypes[_key2];

      if (!checker) {
        fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, "Invalid props." + propName + " key `" + _key2 + "` supplied to `" + componentName + "`." + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
      }

      var error = checker.apply(void 0, [propValue, _key2, componentName, location].concat(rest));

      if (error) {
        fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(false, error.message + '\nBad object: ' + JSON.stringify(props[propName], null, '  '));
      }
    }
  }

  function chainedCheckType(props, propName, componentName, location) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 4 ? _len2 - 4 : 0), _key3 = 4; _key3 < _len2; _key3++) {
      rest[_key3 - 4] = arguments[_key3];
    }

    return checkType.apply(void 0, [false, props, propName, componentName, location].concat(rest));
  }

  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
}

/* harmony default export */ __webpack_exports__["default"] = (createStrictShapeTypeChecker);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/flattenArray/index.js":
/*!********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/flattenArray/index.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function flattenArray(array) {
  function flattenDown(array, result) {
    for (var i = 0; i < array.length; i++) {
      var value = array[i];

      if (Array.isArray(value)) {
        flattenDown(value, result);
      } else if (value != null && value !== false) {
        result.push(value);
      }
    }

    return result;
  }

  return flattenDown(array, []);
}

/* harmony default export */ __webpack_exports__["default"] = (flattenArray);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js":
/*!*****************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* global HTMLElement */
var getBoundingClientRect = function getBoundingClientRect(node) {
  if (node) {
    var isElement = node.nodeType === 1;
    /* Node.ELEMENT_NODE */

    if (isElement && typeof node.getBoundingClientRect === 'function') {
      return node.getBoundingClientRect();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getBoundingClientRect);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/hydrate/index.js":
/*!***************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/hydrate/index.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* harmony default export */ __webpack_exports__["default"] = (!(function webpackMissingModule() { var e = new Error("Cannot find module 'react-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/isWebColor/index.js":
/*!******************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/isWebColor/index.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var isWebColor = function isWebColor(color) {
  return color === 'currentcolor' || color === 'currentColor' || color === 'inherit' || color.indexOf('var(') === 0;
};

/* harmony default export */ __webpack_exports__["default"] = (isWebColor);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js":
/*!********************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var CSS_UNIT_RE = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;

var getUnit = function getUnit(str) {
  return str.match(CSS_UNIT_RE)[1];
};

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var multiplyStyleLengthValue = function multiplyStyleLengthValue(value, multiple) {
  if (typeof value === 'string') {
    var number = parseFloat(value) * multiple;
    var unit = getUnit(value);
    return "" + number + unit;
  } else if (isNumeric(value)) {
    return value * multiple;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (multiplyStyleLengthValue);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/normalizeColor/index.js":
/*!**********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/normalizeColor/index.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isWebColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isWebColor */ "../../node_modules/react-native-web/dist/modules/isWebColor/index.js");
/* harmony import */ var _exports_processColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exports/processColor */ "../../node_modules/react-native-web/dist/exports/processColor/index.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var normalizeColor = function normalizeColor(color, opacity) {
  if (opacity === void 0) {
    opacity = 1;
  }

  if (color == null) return;

  if (typeof color === 'string' && Object(_isWebColor__WEBPACK_IMPORTED_MODULE_0__["default"])(color)) {
    return color;
  }

  var colorInt = Object(_exports_processColor__WEBPACK_IMPORTED_MODULE_1__["default"])(color);

  if (colorInt != null) {
    var r = colorInt >> 16 & 255;
    var g = colorInt >> 8 & 255;
    var b = colorInt & 255;
    var a = (colorInt >> 24 & 255) / 255;
    var alpha = (a * opacity).toFixed(2);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (normalizeColor);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/normalizeNativeEvent/index.js":
/*!****************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/normalizeNativeEvent/index.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getBoundingClientRect */ "../../node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var emptyArray = [];

var emptyFunction = function emptyFunction() {}; // Mobile Safari re-uses touch objects, so we copy the properties we want and normalize the identifier


var normalizeTouches = function normalizeTouches(touches) {
  if (!touches) {
    return emptyArray;
  }

  return Array.prototype.slice.call(touches).map(function (touch) {
    var identifier = touch.identifier > 20 ? touch.identifier % 20 : touch.identifier;
    var rect;
    return {
      _normalized: true,
      clientX: touch.clientX,
      clientY: touch.clientY,
      force: touch.force,

      get locationX() {
        rect = rect || Object(_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(touch.target);

        if (rect) {
          return touch.pageX - rect.left;
        }
      },

      get locationY() {
        rect = rect || Object(_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(touch.target);

        if (rect) {
          return touch.pageY - rect.top;
        }
      },

      identifier: identifier,
      pageX: touch.pageX,
      pageY: touch.pageY,
      radiusX: touch.radiusX,
      radiusY: touch.radiusY,
      rotationAngle: touch.rotationAngle,
      screenX: touch.screenX,
      screenY: touch.screenY,
      target: touch.target,
      // normalize the timestamp
      // https://stackoverflow.com/questions/26177087/ios-8-mobile-safari-wrong-timestamp-on-touch-events
      timestamp: Date.now()
    };
  });
};

function normalizeTouchEvent(nativeEvent) {
  var changedTouches = normalizeTouches(nativeEvent.changedTouches);
  var touches = normalizeTouches(nativeEvent.touches);
  var preventDefault = typeof nativeEvent.preventDefault === 'function' ? nativeEvent.preventDefault.bind(nativeEvent) : emptyFunction;
  var stopImmediatePropagation = typeof nativeEvent.stopImmediatePropagation === 'function' ? nativeEvent.stopImmediatePropagation.bind(nativeEvent) : emptyFunction;
  var stopPropagation = typeof nativeEvent.stopPropagation === 'function' ? nativeEvent.stopPropagation.bind(nativeEvent) : emptyFunction;
  var singleChangedTouch = changedTouches[0];
  var event = {
    _normalized: true,
    bubbles: nativeEvent.bubbles,
    cancelable: nativeEvent.cancelable,
    changedTouches: changedTouches,
    defaultPrevented: nativeEvent.defaultPrevented,
    identifier: singleChangedTouch ? singleChangedTouch.identifier : undefined,

    get locationX() {
      return singleChangedTouch ? singleChangedTouch.locationX : undefined;
    },

    get locationY() {
      return singleChangedTouch ? singleChangedTouch.locationY : undefined;
    },

    pageX: singleChangedTouch ? singleChangedTouch.pageX : nativeEvent.pageX,
    pageY: singleChangedTouch ? singleChangedTouch.pageY : nativeEvent.pageY,
    preventDefault: preventDefault,
    stopImmediatePropagation: stopImmediatePropagation,
    stopPropagation: stopPropagation,
    target: nativeEvent.target,
    // normalize the timestamp
    // https://stackoverflow.com/questions/26177087/ios-8-mobile-safari-wrong-timestamp-on-touch-events
    timestamp: Date.now(),
    touches: touches,
    type: nativeEvent.type,
    which: nativeEvent.which
  };
  return event;
}

function normalizeMouseEvent(nativeEvent) {
  var rect;
  var touches = [{
    _normalized: true,
    clientX: nativeEvent.clientX,
    clientY: nativeEvent.clientY,
    force: nativeEvent.force,
    identifier: 0,

    get locationX() {
      rect = rect || Object(_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(nativeEvent.target);

      if (rect) {
        return nativeEvent.pageX - rect.left;
      }
    },

    get locationY() {
      rect = rect || Object(_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(nativeEvent.target);

      if (rect) {
        return nativeEvent.pageY - rect.top;
      }
    },

    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    screenX: nativeEvent.screenX,
    screenY: nativeEvent.screenY,
    target: nativeEvent.target,
    timestamp: Date.now()
  }];
  var preventDefault = typeof nativeEvent.preventDefault === 'function' ? nativeEvent.preventDefault.bind(nativeEvent) : emptyFunction;
  var stopImmediatePropagation = typeof nativeEvent.stopImmediatePropagation === 'function' ? nativeEvent.stopImmediatePropagation.bind(nativeEvent) : emptyFunction;
  var stopPropagation = typeof nativeEvent.stopPropagation === 'function' ? nativeEvent.stopPropagation.bind(nativeEvent) : emptyFunction;
  return {
    _normalized: true,
    bubbles: nativeEvent.bubbles,
    cancelable: nativeEvent.cancelable,
    changedTouches: touches,
    defaultPrevented: nativeEvent.defaultPrevented,
    identifier: touches[0].identifier,

    get locationX() {
      return touches[0].locationX;
    },

    get locationY() {
      return touches[0].locationY;
    },

    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    preventDefault: preventDefault,
    stopImmediatePropagation: stopImmediatePropagation,
    stopPropagation: stopPropagation,
    target: nativeEvent.target,
    timestamp: touches[0].timestamp,
    touches: nativeEvent.type === 'mouseup' ? emptyArray : touches,
    type: nativeEvent.type,
    which: nativeEvent.which
  };
} // TODO: how to best handle keyboard events?


function normalizeNativeEvent(nativeEvent) {
  if (!nativeEvent || nativeEvent._normalized) {
    return nativeEvent;
  }

  var eventType = nativeEvent.type || '';
  var mouse = eventType.indexOf('mouse') >= 0;

  if (mouse) {
    return normalizeMouseEvent(nativeEvent);
  } else {
    return normalizeTouchEvent(nativeEvent);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (normalizeNativeEvent);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/prefixStyles/index.js":
/*!********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/prefixStyles/index.js ***!
  \********************************************************************************************/
/*! exports provided: default, prefixInlineStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixInlineStyles", function() { return prefixInlineStyles; });
/* harmony import */ var inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/lib/createPrefixer */ "../../node_modules/inline-style-prefixer/lib/createPrefixer.js");
/* harmony import */ var inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static */ "../../node_modules/react-native-web/dist/modules/prefixStyles/static.js");
/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var prefixAll = inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default()(_static__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (prefixAll);
var prefixInlineStyles = function prefixInlineStyles(style) {
  var prefixedStyles = prefixAll(style); // React@15 removed undocumented support for fallback values in
  // inline-styles. Revert array values to the standard CSS value

  Object.keys(prefixedStyles).forEach(function (prop) {
    var value = prefixedStyles[prop];

    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1];
    }
  });
  return prefixedStyles;
};

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/prefixStyles/static.js":
/*!*********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/prefixStyles/static.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/backgroundClip */ "../../node_modules/inline-style-prefixer/lib/plugins/backgroundClip.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/crossFade */ "../../node_modules/inline-style-prefixer/lib/plugins/crossFade.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/cursor */ "../../node_modules/inline-style-prefixer/lib/plugins/cursor.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/filter */ "../../node_modules/inline-style-prefixer/lib/plugins/filter.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flex */ "../../node_modules/inline-style-prefixer/lib/plugins/flex.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flexboxIE */ "../../node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flexboxOld */ "../../node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/gradient */ "../../node_modules/inline-style-prefixer/lib/plugins/gradient.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/imageSet */ "../../node_modules/inline-style-prefixer/lib/plugins/imageSet.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/position */ "../../node_modules/inline-style-prefixer/lib/plugins/position.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/sizing */ "../../node_modules/inline-style-prefixer/lib/plugins/sizing.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/transition */ "../../node_modules/inline-style-prefixer/lib/plugins/transition.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_11__);












var w = ['Webkit'];
var m = ['Moz'];
var ms = ['ms'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];
/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0___default.a, inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default.a, inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default.a, inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default.a, inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default.a, inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default.a, inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default.a, inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default.a, inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_8___default.a, inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_9___default.a, inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_10___default.a, inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_11___default.a],
  prefixMap: {
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    fontFeatureSettings: w,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transform: w,
    transformOrigin: w,
    transformOriginX: w,
    transformOriginY: w,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    backdropFilter: w,
    fontKerning: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    textOrientation: w,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    gridTemplateColumns: ms,
    gridTemplateRows: ms,
    gridTemplateAreas: ms,
    gridTemplate: ms,
    gridAutoColumns: ms,
    gridAutoRows: ms,
    gridAutoFlow: ms,
    grid: ms,
    gridRowStart: ms,
    gridColumnStart: ms,
    gridRowEnd: ms,
    gridRow: ms,
    gridColumn: ms,
    gridColumnEnd: ms,
    gridColumnGap: ms,
    gridRowGap: ms,
    gridArea: ms,
    gridGap: ms,
    textSizeAdjust: ['ms', 'Webkit'],
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w
  }
});

/***/ }),

/***/ "../../node_modules/react-native-web/dist/modules/unitlessNumbers/index.js":
/*!***********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/modules/unitlessNumbers/index.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (c) Nicolas Gallagher.
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var unitlessNumbers = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridColumn: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */

var prefixes = ['ms', 'Moz', 'O', 'Webkit'];

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

Object.keys(unitlessNumbers).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
/* harmony default export */ __webpack_exports__["default"] = (unitlessNumbers);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/vendor/hash/index.js":
/*!***********************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/vendor/hash/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */

/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} str ASCII only
 * @param {number} seed Positive integer only
 * @return {number} 32-bit positive integer hash
 */
function murmurhash2_32_gc(str, seed) {
  var l = str.length,
      h = seed ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}

var hash = function hash(str) {
  return murmurhash2_32_gc(str, 1).toString(36);
};

/* harmony default export */ __webpack_exports__["default"] = (hash);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/vendor/react-dom/dangerousStyleValue/index.js":
/*!************************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/vendor/react-dom/dangerousStyleValue/index.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/unitlessNumbers */ "../../node_modules/react-native-web/dist/modules/unitlessNumbers/index.js");
/* eslint-disable */

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * From React 16.0.0
 * 
 */

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(_modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(name) && _modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__["default"][name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

/* harmony default export */ __webpack_exports__["default"] = (dangerousStyleValue);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/vendor/react-dom/setValueForStyles/index.js":
/*!**********************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/vendor/react-dom/setValueForStyles/index.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dangerousStyleValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dangerousStyleValue */ "../../node_modules/react-native-web/dist/vendor/react-dom/dangerousStyleValue/index.js");
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hyphenate-style-name */ "../../node_modules/hyphenate-style-name/index.js");
/* harmony import */ var _warnValidStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../warnValidStyle */ "../../node_modules/react-native-web/dist/vendor/react-dom/warnValidStyle/index.js");
/* eslint-disable */

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * From React 16.3.0
 * 
 */



/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */

function setValueForStyles(node, styles, getStack) {
  var style = node.style;

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;

    if (true) {
      if (!isCustomProperty) {
        Object(_warnValidStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(styleName, styles[styleName], getStack);
      }
    }

    var styleValue = Object(_dangerousStyleValue__WEBPACK_IMPORTED_MODULE_0__["default"])(styleName, styles[styleName], isCustomProperty);

    if (styleName === 'float') {
      styleName = 'cssFloat';
    }

    if (isCustomProperty) {
      var name = isCustomProperty ? styleName : Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_1__["default"])(styleName);
      style.setProperty(name, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (setValueForStyles);

/***/ }),

/***/ "../../node_modules/react-native-web/dist/vendor/react-dom/warnValidStyle/index.js":
/*!*******************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/dist/vendor/react-dom/warnValidStyle/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * From React 16.0.0
 * 
 */
var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ "../../node_modules/react-native-web/node_modules/fbjs/lib/emptyFunction.js");

var warnValidStyle = emptyFunction;

if (true) {
  var getComponentName = function getComponentName(instanceOrFiber) {
    if (typeof instanceOrFiber.getName === 'function') {
      // Stack reconciler
      var instance = instanceOrFiber;
      return instance.getName();
    }

    if (typeof instanceOrFiber.tag === 'number') {
      // Fiber reconciler
      var fiber = instanceOrFiber;
      var type = fiber.type;

      if (typeof type === 'string') {
        return type;
      }

      if (typeof type === 'function') {
        return type.displayName || type.name;
      }
    }

    return null;
  }; // 'msTransform' is correct, but the other prefixes should be capitalized


  var camelizeStyleName = __webpack_require__(/*! fbjs/lib/camelizeStyleName */ "../../node_modules/react-native-web/node_modules/fbjs/lib/camelizeStyleName.js");

  var warning = __webpack_require__(/*! fbjs/lib/warning */ "../../node_modules/react-native-web/node_modules/fbjs/lib/warning.js");

  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner));
  };

  var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner));
  };

  var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning(false, "Style property values shouldn't contain a semicolon.%s " + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
  };

  var warnStyleValueIsInfinity = function warnStyleValueIsInfinity(name, value, owner) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
  };

  var checkRenderMessage = function checkRenderMessage(owner) {
    var ownerName;

    if (owner != null) {
      // Stack passes the owner manually all the way to CSSPropertyOperations.
      ownerName = getComponentName(owner);
    } else {// Fiber doesn't pass it but uses ReactDebugCurrentFiber to track it.
      // It is only enabled in development and tracks host components too.
      // var {getCurrentFiberOwnerName} = require('ReactDebugCurrentFiber');
      //  ownerName = getCurrentFiberOwnerName();
      // TODO: also report the stack.
    }

    if (ownerName) {
      return '\n\nCheck the render method of `' + ownerName + '`.';
    }

    return '';
  };

  warnValidStyle = function warnValidStyle(name, value, component) {
    var owner;

    if (component) {// TODO: this only works with Stack. Seems like we need to add unit tests?
      // owner = component._currentElement._owner;
    }

    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value, owner);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value, owner);
      }
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (warnValidStyle);

/***/ }),

/***/ "../../node_modules/react-native-web/node_modules/fbjs/lib/ExecutionEnvironment.js":
/*!*******************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/node_modules/fbjs/lib/ExecutionEnvironment.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};
module.exports = ExecutionEnvironment;

/***/ }),

/***/ "../../node_modules/react-native-web/node_modules/fbjs/lib/camelize.js":
/*!*******************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/node_modules/fbjs/lib/camelize.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */
var _hyphenPattern = /-(.)/g;
/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */

function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

/***/ }),

/***/ "../../node_modules/react-native-web/node_modules/fbjs/lib/camelizeStyleName.js":
/*!****************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/node_modules/fbjs/lib/camelizeStyleName.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */


var camelize = __webpack_require__(/*! ./camelize */ "../../node_modules/react-native-web/node_modules/fbjs/lib/camelize.js");

var msPattern = /^-ms-/;
/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */

function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

/***/ }),

/***/ "../../node_modules/react-native-web/node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */


var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);

emptyFunction.thatReturnsThis = function () {
  return this;
};

emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "../../node_modules/react-native-web/node_modules/fbjs/lib/invariant.js":
/*!********************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/node_modules/fbjs/lib/invariant.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var validateFormat =  true ? function (format) {} : undefined;
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */

function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return String(args[argIndex++]);
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "../../node_modules/react-native-web/node_modules/fbjs/lib/warning.js":
/*!******************************************************************************************!*\
  !*** /workspace/orgynize/node_modules/react-native-web/node_modules/fbjs/lib/warning.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "../../node_modules/react-native-web/node_modules/fbjs/lib/emptyFunction.js");
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */


function printWarning(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var argIndex = 0;
  var message = 'Warning: ' + format.replace(/%s/g, function () {
    return args[argIndex++];
  });

  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try {
    // --- Welcome to debugging React ---
    // This error was thrown as a convenience so that you can use this stack
    // to find the callsite that caused this warning to fire.
    throw new Error(message);
  } catch (x) {}
}

var warning =  true ? function (condition, format) {
  if (format === undefined) {
    throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
  }

  if (!condition) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    printWarning.apply(void 0, [format].concat(args));
  }
} : undefined;
module.exports = warning;

/***/ }),

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins=[{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-react-native-web/gatsby-ssr */ "./node_modules/gatsby-plugin-react-native-web/gatsby-ssr.js"),options:{"plugins":[]}}];// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
var apis=__webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");// Run the specified API in any plugins that have implemented it
module.exports=function(api,args,defaultReturn,argTransform){if(!apis[api]){console.log("This API doesn't exist",api);}// Run each plugin in series.
// eslint-disable-next-line no-undef
var results=plugins.map(function(plugin){if(!plugin.plugin[api]){return undefined;}var result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args:args,result:result});}return result;});// Filter out undefined results.
results=results.filter(function(result){return typeof result!=="undefined";});if(results.length>0){return results;}else{return[defaultReturn];}};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function HTML(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",props.htmlAttributes,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"utf-8"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",props.bodyAttributes,props.preBodyComponents,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript",{key:"noscript",id:"gatsby-noscript"},"This app works best with JavaScript enabled."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:"body",id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,headComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,bodyAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,preBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,body:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,postBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array};

/***/ }),

/***/ "./.cache/develop-static-entry.js":
/*!****************************************!*\
  !*** ./.cache/develop-static-entry.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_api_runner_ssr__WEBPACK_IMPORTED_MODULE_8__);
// import testRequireError from "./test-require-error"
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
var testRequireError=function testRequireError(moduleName,err){var regex=new RegExp("Error: Cannot find module\\s."+moduleName);var firstLine=err.toString().split("\n")[0];return regex.test(firstLine);};var Html;try{Html=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(err){if(testRequireError("../src/html",err)){Html=__webpack_require__(/*! ./default-html */ "./.cache/default-html.js");}else{console.log("There was an error requiring \"src/html.js\"\n\n",err,"\n\n");process.exit();}}Html=Html&&Html.__esModule?Html.default:Html;/* harmony default export */ __webpack_exports__["default"] = (function(pagePath,callback){var headComponents=[react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta",{key:"environment",name:"note",content:"environment=development"})];var htmlAttributes={};var bodyAttributes={};var preBodyComponents=[];var postBodyComponents=[];var bodyProps={};var htmlStr;var setHeadComponents=function setHeadComponents(components){headComponents=headComponents.concat(components);};var setHtmlAttributes=function setHtmlAttributes(attributes){htmlAttributes=Object(lodash__WEBPACK_IMPORTED_MODULE_7__["merge"])(htmlAttributes,attributes);};var setBodyAttributes=function setBodyAttributes(attributes){bodyAttributes=Object(lodash__WEBPACK_IMPORTED_MODULE_7__["merge"])(bodyAttributes,attributes);};var setPreBodyComponents=function setPreBodyComponents(components){preBodyComponents=preBodyComponents.concat(components);};var setPostBodyComponents=function setPostBodyComponents(components){postBodyComponents=postBodyComponents.concat(components);};var setBodyProps=function setBodyProps(props){bodyProps=Object(lodash__WEBPACK_IMPORTED_MODULE_7__["merge"])({},bodyProps,props);};var getHeadComponents=function getHeadComponents(){return headComponents;};var replaceHeadComponents=function replaceHeadComponents(components){headComponents=components;};var getPreBodyComponents=function getPreBodyComponents(){return preBodyComponents;};var replacePreBodyComponents=function replacePreBodyComponents(components){preBodyComponents=components;};var getPostBodyComponents=function getPostBodyComponents(){return postBodyComponents;};var replacePostBodyComponents=function replacePostBodyComponents(components){postBodyComponents=components;};_api_runner_ssr__WEBPACK_IMPORTED_MODULE_8___default()("onRenderBody",{setHeadComponents:setHeadComponents,setHtmlAttributes:setHtmlAttributes,setBodyAttributes:setBodyAttributes,setPreBodyComponents:setPreBodyComponents,setPostBodyComponents:setPostBodyComponents,setBodyProps:setBodyProps,pathname:pagePath});_api_runner_ssr__WEBPACK_IMPORTED_MODULE_8___default()("onPreRenderHTML",{getHeadComponents:getHeadComponents,replaceHeadComponents:replaceHeadComponents,getPreBodyComponents:getPreBodyComponents,replacePreBodyComponents:replacePreBodyComponents,getPostBodyComponents:getPostBodyComponents,replacePostBodyComponents:replacePostBodyComponents,pathname:pagePath});var htmlElement=react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Html,Object.assign({},bodyProps,{body:"",headComponents:headComponents.concat([react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("script",{key:"io",src:"/socket.io/socket.io.js"})]),htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents.concat([react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("script",{key:"commons",src:"/commons.js"})])}));htmlStr=Object(react_dom_server__WEBPACK_IMPORTED_MODULE_6__["renderToStaticMarkup"])(htmlElement);htmlStr="<!DOCTYPE html>"+htmlStr;callback(null,htmlStr);});

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-native-web/gatsby-ssr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-native-web/gatsby-ssr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! core-js/modules/es6.object.set-prototype-of */ "core-js/modules/es6.object.set-prototype-of");var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(/*! react */ "react");var _react2=_interopRequireDefault(_react);var _server=__webpack_require__(/*! react-dom/server */ "react-dom/server");var _server2=_interopRequireDefault(_server);var _AppRegistry=__webpack_require__(/*! react-native-web/dist/exports/AppRegistry */ "../../node_modules/react-native-web/dist/exports/AppRegistry/index.js");var _AppRegistry2=_interopRequireDefault(_AppRegistry);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}exports.replaceRenderer=function(_ref){var bodyComponent=_ref.bodyComponent,replaceBodyHTMLString=_ref.replaceBodyHTMLString,setHeadComponents=_ref.setHeadComponents;var App=function(_React$Component){_inherits(App,_React$Component);function App(){_classCallCheck(this,App);return _possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}_createClass(App,[{key:'render',value:function render(){return bodyComponent;}}]);return App;}(_react2.default.Component);// See https://github.com/necolas/react-native-web/blob/master/website/guides/getting-started.md#server-side-rendering
_AppRegistry2.default.registerComponent('App',function(){return App;});var _AppRegistry$getAppli=_AppRegistry2.default.getApplication('App'),element=_AppRegistry$getAppli.element,getStyleElement=_AppRegistry$getAppli.getStyleElement;var html=_server2.default.renderToString(element);var styleElement=getStyleElement();replaceBodyHTMLString(html);setHeadComponents([styleElement]);};

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.11.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!*****************************************************************************************************!*\
  !*** external "/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.assign.js" ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.set-prototype-of":
/*!***************************************************************************************************************!*\
  !*** external "/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.set-prototype-of.js" ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_set_prototype_of__;

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!********************************************************************************************************!*\
  !*** external "/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.object.to-string.js" ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!**********************************************************************************************************!*\
  !*** external "/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.constructor.js" ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!****************************************************************************************************!*\
  !*** external "/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.split.js" ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!********************************************************************************************************!*\
  !*** external "/workspace/orgynize/packages/web/node_modules/core-js/modules/es6.regexp.to-string.js" ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "lodash":
/*!*********************************************************************************!*\
  !*** external "/workspace/orgynize/packages/web/node_modules/lodash/lodash.js" ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-dom/unstable-native-dependencies":
/*!*********************************************************!*\
  !*** external "react-dom/unstable-native-dependencies" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_unstable_native_dependencies__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map