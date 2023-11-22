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

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactTab)\n/* harmony export */ });\n// contactTab.js\nfunction contactTab() {\n    const contactDiv = document.createElement('div');\n    contactDiv.innerHTML = `\n        <img src=\"images/restaurant3.png\" alt=\"Contact Image\" />\n        <h2>Contact Us</h2>\n        <p>Email: info@restaurant.com</p>\n        <p>Phone: +1 123 456 7890</p>\n    `;\n\n    return contactDiv;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/contactTab.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactTab */ \"./src/contactTab.js\");\n/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuTab */ \"./src/menuTab.js\");\n\n\n\n\n// Ejecutar la carga inicial de la página\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    // Event listeners para las pestañas\n    const homeTabButton = document.getElementById('home-tab');\n    const contactTabButton = document.getElementById('contact-tab');\n    const menuTabButton = document.getElementById('menu-tab');\n\n    homeTabButton.addEventListener('click', _pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    contactTabButton.addEventListener('click', () => {\n        clearAndAppend((0,_contactTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    });\n    menuTabButton.addEventListener('click', () => {\n        clearAndAppend((0,_menuTab__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    });\n});\n\nfunction clearAndAppend(newChild) {\n    const contentDiv = document.getElementById('content');\n    contentDiv.innerHTML = '';\n    contentDiv.appendChild(newChild);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuTab)\n/* harmony export */ });\n// menuTab.js\nfunction menuTab() {\n    const menuDiv = document.createElement('div');\n    menuDiv.innerHTML = `\n        <img src=\"images/restaurant2.png\" alt=\"Menu Image\" />\n        <h2>Menu</h2>\n        <ul>\n            <li>Appetizers</li>\n            <li>Main Courses</li>\n            <li>Desserts</li>\n        </ul>\n    `;\n\n    return menuDiv;\n}\n\n\n//# sourceURL=webpack://restaurant/./src/menuTab.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n// pageLoad.js\nfunction pageLoad() {\n    const contentDiv = document.getElementById('content');\n\n    // Estructura básica de la página de inicio\n    const homepage = document.createElement('div');\n    homepage.innerHTML = `\n        <img src=\"images/restaurant1.png\" alt=\"Landing Image\" />\n        <h1>Welcome to Our Restaurant</h1>\n        <p>Experience the finest dining with us!</p>\n    `;\n\n    // Agregar la página de inicio al contenido\n    contentDiv.appendChild(homepage);\n}\n\n\n//# sourceURL=webpack://restaurant/./src/pageLoad.js?");

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