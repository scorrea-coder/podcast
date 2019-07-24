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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/assets/javascript/app.js":
/*!*****************************************!*\
  !*** ./client/assets/javascript/app.js ***!
  \*****************************************/
/*! exports provided: scrollDown, Audio, Podcast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollDown\", function() { return scrollDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Audio\", function() { return Audio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Podcast\", function() { return Podcast; });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar elements = {\n  scrollDownButton: document.querySelector('.app__hero__content__scroll'),\n  podcast: document.querySelector('.podcast'),\n  podcastGroup: document.querySelectorAll('.podcast__group'),\n  showMore: document.querySelector('.show__more'),\n  img: document.querySelectorAll('img')\n};\n\nvar Audio = function Audio(name, cover, track) {\n  _classCallCheck(this, Audio);\n\n  this.name = name;\n  this.track = track;\n  this.cover = cover;\n};\n\nvar Podcast =\n/*#__PURE__*/\nfunction () {\n  function Podcast() {\n    var tracks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n    _classCallCheck(this, Podcast);\n\n    this.tracks = tracks;\n  }\n\n  _createClass(Podcast, [{\n    key: \"addAudio\",\n    value: function addAudio() {\n      return this.tracks;\n    }\n  }]);\n\n  return Podcast;\n}();\n\nvar showMore = function showMore(podcastElements, show) {\n  show.addEventListener('click', function () {\n    podcastElements.forEach(function (element) {\n      if (element.className.includes('hide')) {\n        element.classList.toggle('hide');\n      }\n    });\n  });\n};\n\nvar scrollDown = function scrollDown(elementFrom, elementTo) {\n  if (elementFrom && elementTo) {\n    elementFrom.addEventListener('click', function (event) {\n      event.preventDefault();\n      elementTo.scrollIntoView({\n        behavior: 'smooth',\n        block: 'end',\n        inline: 'nearest'\n      });\n    });\n    return true;\n  }\n\n  return false;\n};\n\nvar playAudio = function playAudio(image) {\n  var playing = [];\n  image.forEach(function (img) {\n    var audio = img.getAttribute('data-audio');\n\n    if (audio) {\n      img.addEventListener('click', function () {\n        playing.unshift(audio);\n        var element = document.querySelector(\".\".concat(playing[0]));\n\n        if (element.paused) {\n          element.play();\n        } else {\n          element.pause();\n        }\n      });\n    }\n  });\n};\n\nscrollDown(elements.scrollDownButton, elements.podcast);\nshowMore(elements.podcastGroup, elements.showMore);\nplayAudio(elements.img);\n\n\n//# sourceURL=webpack:///./client/assets/javascript/app.js?");

/***/ }),

/***/ "./client/assets/styles/_root.scss":
/*!*****************************************!*\
  !*** ./client/assets/styles/_root.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./client/assets/styles/_root.scss?");

/***/ }),

/***/ 0:
/*!*********************************************************************************!*\
  !*** multi ./client/assets/javascript/app.js ./client/assets/styles/_root.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./client/assets/javascript/app.js */\"./client/assets/javascript/app.js\");\nmodule.exports = __webpack_require__(/*! ./client/assets/styles/_root.scss */\"./client/assets/styles/_root.scss\");\n\n\n//# sourceURL=webpack:///multi_./client/assets/javascript/app.js_./client/assets/styles/_root.scss?");

/***/ })

/******/ });