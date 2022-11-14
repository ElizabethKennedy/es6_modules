/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Car {\n    constructor (id, make, model, year) {\n        \n        this.id = id;\n        this.make = make;\n        this.model = model;\n        this.year = year;\n    }\n\ninfo() {\n     document.getElementById(\"car-make\").textContent = this.make;\n     document.getElementById(\"car-model\").textContent = this.model;\n     document.getElementById(\"car-year\").textContent = this.year;\n     \n   }\n\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\n\n//Select the form\nlet form = document.querySelector(\"#submitForm\");\n//Select the input for the car make\nlet makeInput = document.querySelector(\"#makeInput\");\n//Select the input for car model\nlet modelInput = document.querySelector(\"#modelInput\");\n//Select input for car year\nlet yearInput = document.querySelector(\"#yearInput\");\n//Select the paragraph element for the car make\nlet makeDisplay = document.querySelector(\"#car-make\");\n//Select the paragraph element for the car model\nlet modelDisplay = document.querySelector(\"#car-model\");\n//Select the paragraph element for car year\nlet yearDisplay = document.querySelector(\"#car-year\");\n//Select the remove button\nlet removeBtn = document.querySelector(\"#removeBtn\");\n//Select the wishlist unordered list element\nlet wishlistUl = document.querySelector(\"#wishListContainer > ul\");\n\nlet wishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nform.addEventListener(\"submit\", addCar);\n\nremoveBtn.addEventListener(\"click\", removeCar);\n\nfunction updateDOMList() {\n  wishlistUl.innerHTML = \"\";\n  wishlist.list.forEach((car) => {\n    const li = document.createElement(\"li\");\n    li.textContent = `${car.make} ${car.model}`;\n    li.addEventListener(\"click\", () => showCarDetails(car));\n    wishlistUl.appendChild(li);\n  });\n}\n\nfunction showCarDetails(car) {\n  makeDisplay.textContent = car.make;\n  modelDisplay.textContent = car.model;\n  yearDisplay.textContent = car.year;\n  removeBtn.disabled = false;\n  removeBtn.setAttribute(\"data-carId\", car.id);\n}\n\nfunction addCar(event) {\n  event.preventDefault();\n\n  let make = makeInput.value;\n  let model = modelInput.value;\n  let year = yearInput.value;\n\n  wishlist.add(make, model, year);\n\n  updateDOMList();\n}\n\nfunction removeCar() {\n  let carId = Number(removeBtn.getAttribute(\"data-carId\"));\n  wishlist.remove(carId);\n\n  updateDOMList();\n\n  makeDisplay.textContent = \"\";\n  modelDisplay.textContent = \"\";\n  yearDisplay.textContent = \"\";\n  removeBtn.disabled = true;\n}\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\nclass Wishlist {\n  constructor() {\n    this.list = [];\n    this.nextId = 0;\n  }\n  add(make, model, year) {\n    let car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.nextId++, make, model, year);\n    this.list.push(car);\n  }\n\n  remove(carId) {\n    this.list = this.list.filter((car) => car.id != carId);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wishlist);\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;