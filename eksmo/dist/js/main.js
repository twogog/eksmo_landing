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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var quizLeftFrame = document.querySelectorAll('.quiz-left__frame'),
      quizLeftCheck = document.querySelectorAll('.quiz-left__check'),
      quizLeftOk = document.querySelectorAll('.quiz-left__ok');
  var quizRightFrame = document.querySelectorAll('.quiz-right__frame'),
      quizRightCheck = document.querySelectorAll('.quiz-right__check'),
      quizRightOk = document.querySelectorAll('.quiz-right__ok');
  quizLeftFrame.forEach(function callback(currentValue, i) {
    quizLeftFrame[i].addEventListener('click', function (event) {
      var target = event.target;

      if (target && target.classList.contains('quiz-left__check')) {
        quizLeftFrame[i].style.borderColor = '#50d66c';
        quizLeftCheck[i].style.outlineColor = '#50d66c';
        quizLeftOk[i].style.display = 'block';
        quizLeftOk[i].classList.add('quiz_active');
      } else if (target && target.classList.contains('quiz_active')) {
        quizLeftOk[i].style.display = 'none';
        quizLeftFrame[i].style.borderColor = '#f3f3f3';
        quizLeftCheck[i].style.outlineColor = '#eeeeee';
      }
    });
  });
  quizRightFrame.forEach(function callback(currentValue, i) {
    quizRightFrame[i].addEventListener('click', function (event) {
      var target = event.target;

      if (target && target.classList.contains('quiz-right__check')) {
        quizRightFrame[i].style.borderColor = '#e13636';
        quizRightCheck[i].style.outlineColor = '#e13636';
        quizRightOk[i].style.display = 'block';
        quizRightOk[i].classList.add('quiz_active');
      } else if (target && target.classList.contains('quiz_active')) {
        quizRightOk[i].style.display = 'none';
        quizRightFrame[i].style.borderColor = '#f3f3f3';
        quizRightCheck[i].style.outlineColor = '#eeeeee';
      }
    });
  }); //---------------------------------------------------------------------------

  var quizInput = document.querySelectorAll('.quiz-input__test'),
      quizInputOk = document.querySelectorAll('.quiz-input__image'),
      quizInputText = document.querySelectorAll('.quiz-input__text');
  quizInput.forEach(function callback(currentValue, i) {
    quizInput[i].addEventListener('click', function (event) {
      var target = event.target;

      if (target && target.classList.contains('quiz-input__check')) {
        quizInput[i].style.backgroundColor = '#50d66c';
        quizInputText[i].style.color = '#ffffff';
        quizInputOk[i].style.display = 'block';
        quizInputOk[i].classList.add('quiz_active');
      } else if (target && target.classList.contains('quiz_active')) {
        quizInputOk[i].style.display = 'none';
        quizInput[i].style.backgroundColor = '#fcfcfc';
        quizInputText[i].style.color = '#9c9c9c';
      }
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map