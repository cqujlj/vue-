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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_js__ = __webpack_require__(1);
// ES6的模块化导入写法：import {变量，函数，对象...} from "地址/文件"
// import { flag,add,mul} from "./mathUnits.js"

// CommonJS写法  {变量，函数，对象...} = require（ "地址/文件"）
var { flag,add,mul }=__webpack_require__(2)
// 导入默认项

if (flag){
    //显示导入的对象内容
    console.log(__WEBPACK_IMPORTED_MODULE_0__info_js__["a" /* person */])
    console.log(__WEBPACK_IMPORTED_MODULE_0__info_js__["a" /* person */].name)
    console.log(__WEBPACK_IMPORTED_MODULE_0__info_js__["a" /* person */].age)
    console.log(__WEBPACK_IMPORTED_MODULE_0__info_js__["a" /* person */].height)
}
// 调用导入的函数
console.log(add(77,4))

console.log(mul(20,7))







/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return person; });

var person={
    name:"蒋良吉",
    age:24,
    height:1.65,}


    // ES6的模块化写法 导出


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// 每个js文件只能有一个默认项
// export default 是一种语法糖，当模块只有一个导出的时候，简化写代码人的代码量

// 可以单独导出
var flag=true

function add(n,m) {
    return n+m;
}

function mul(n,m) {
    return n*m;
}

console.log(max);
// CommonJS写法  导出
module.exports={
    flag,add,mul
}

// ES6写法
// export {add,mul}

/***/ })
/******/ ]);