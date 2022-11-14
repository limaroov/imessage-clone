"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/chakra/theme.ts":
/*!*****************************!*\
  !*** ./src/chakra/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: false\n};\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config\n}, {\n    colors: {\n        brand: {\n            100: \"#3d84f7\"\n        }\n    },\n    styles: {\n        global: ()=>({\n                body: {\n                    bg: \"whiteAlpha.200\"\n                }\n            })\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hha3JhL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0RDtBQUU1RCxNQUFNQyxTQUFzQjtJQUMxQkMsa0JBQWtCO0lBQ2xCQyxvQkFBb0IsS0FBSztBQUMzQjtBQUVBLE1BQU1DLFFBQVFKLDZEQUFXQSxDQUN2QjtJQUFFQztBQUFPLEdBQ1Q7SUFDRUksUUFBUTtRQUNOQyxPQUFPO1lBQ0wsS0FBSztRQUNQO0lBQ0Y7SUFDQUMsUUFBUTtRQUNOQyxRQUFRLElBQU87Z0JBQ2JDLE1BQU07b0JBQ0pDLElBQUk7Z0JBQ047WUFDRjtJQUNGO0FBQ0Y7QUFHRixpRUFBZU4sS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2NoYWtyYS90aGVtZS50cz9hOWVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lLCBUaGVtZUNvbmZpZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IGNvbmZpZzogVGhlbWVDb25maWcgPSB7XG4gIGluaXRpYWxDb2xvck1vZGU6IFwiZGFya1wiLFxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IGZhbHNlLFxufTtcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZShcbiAgeyBjb25maWcgfSxcbiAge1xuICAgIGNvbG9yczoge1xuICAgICAgYnJhbmQ6IHtcbiAgICAgICAgMTAwOiBcIiMzZDg0ZjdcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzdHlsZXM6IHtcbiAgICAgIGdsb2JhbDogKCkgPT4gKHtcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGJnOiBcIndoaXRlQWxwaGEuMjAwXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9LFxuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSIsImNvbG9ycyIsImJyYW5kIiwic3R5bGVzIiwiZ2xvYmFsIiwiYm9keSIsImJnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/chakra/theme.ts\n");

/***/ }),

/***/ "./src/graphql/apollo-client.ts":
/*!**************************************!*\
  !*** ./src/graphql/apollo-client.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({\n    uri: \"http://localhost:4000/graphql\",\n    credentials: \"include\"\n});\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    link: httpLink,\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9hcG9sbG8tY2xpZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1RTtBQUV2RSxNQUFNRyxXQUFXLElBQUlGLG9EQUFRQSxDQUFDO0lBQzVCRyxLQUFLO0lBQ0xDLGFBQWE7QUFDZjtBQUVPLE1BQU1DLFNBQVMsSUFBSU4sd0RBQVlBLENBQUM7SUFDckNPLE1BQU1KO0lBQ05LLE9BQU8sSUFBSU4seURBQWFBO0FBQzFCLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9ncmFwaHFsL2Fwb2xsby1jbGllbnQudHM/NTY1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IGh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKHtcbiAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG4gIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIGxpbms6IGh0dHBMaW5rLFxuICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbn0pO1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkh0dHBMaW5rIiwiSW5NZW1vcnlDYWNoZSIsImh0dHBMaW5rIiwidXJpIiwiY3JlZGVudGlhbHMiLCJjbGllbnQiLCJsaW5rIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graphql/apollo-client.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chakra/theme */ \"./src/chakra/theme.ts\");\n/* harmony import */ var _graphql_apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../graphql/apollo-client */ \"./src/graphql/apollo-client.ts\");\n\n\n\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n        client: _graphql_apollo_client__WEBPACK_IMPORTED_MODULE_5__.client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n            session: session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ChakraProvider, {\n                theme: _chakra_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/mustapha/Developer/PROJECTS/imessage-graphql/frontend/src/pages/_app.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mustapha/Developer/PROJECTS/imessage-graphql/frontend/src/pages/_app.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mustapha/Developer/PROJECTS/imessage-graphql/frontend/src/pages/_app.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mustapha/Developer/PROJECTS/imessage-graphql/frontend/src/pages/_app.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNrRDtBQUNBO0FBQ0Y7QUFFWjtBQUVjO0FBRW5DLFNBQVNLLElBQUksRUFDMUJDLFVBQVMsRUFDVEMsV0FBVyxFQUFFQyxRQUFPLEVBQUUsR0FBR0QsV0FBVyxHQUMzQixFQUFFO0lBQ1gscUJBQ0UsOERBQUNMLDBEQUFjQTtRQUFDRSxRQUFRQSwwREFBTUE7a0JBQzVCLDRFQUFDSiw0REFBZUE7WUFBQ1EsU0FBU0E7c0JBQ3hCLDRFQUFDUCw0REFBY0E7Z0JBQUNFLE9BQU9BLHFEQUFLQTswQkFDMUIsNEVBQUNHO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL2NoYWtyYS90aGVtZVwiO1xuXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vZ3JhcGhxbC9hcG9sbG8tY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7XG4gIENvbXBvbmVudCxcbiAgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9LFxufTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgICAgPENoYWtyYVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTZXNzaW9uUHJvdmlkZXIiLCJDaGFrcmFQcm92aWRlciIsIkFwb2xsb1Byb3ZpZGVyIiwidGhlbWUiLCJjbGllbnQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();