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

/***/ "(pages-dir-node)/./components/LanguageToggle.js":
/*!**************************************!*\
  !*** ./components/LanguageToggle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/LanguageContext */ \"(pages-dir-node)/./context/LanguageContext.js\");\n// components/LanguageToggle.js\n\n\nconst LanguageToggle = ()=>{\n    const { lang, setLang } = (0,_context_LanguageContext__WEBPACK_IMPORTED_MODULE_1__.useLanguage)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: ()=>setLang(lang === 'en' ? 'de' : 'en'),\n        children: lang === 'en' ? 'Deutsch' : 'English'\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\Model-cat\\\\components\\\\LanguageToggle.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageToggle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvTGFuZ3VhZ2VUb2dnbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLCtCQUErQjs7QUFDMEI7QUFFekQsTUFBTUMsaUJBQWlCO0lBQ3JCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUUsR0FBR0gscUVBQVdBO0lBRXJDLHFCQUNFLDhEQUFDSTtRQUFPQyxTQUFTLElBQU1GLFFBQVFELFNBQVMsT0FBTyxPQUFPO2tCQUNuREEsU0FBUyxPQUFPLFlBQVk7Ozs7OztBQUduQztBQUVBLGlFQUFlRCxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHdpbGxpXFxPbmVEcml2ZVxcRGVza3RvcFxcTW9kZWwtY2F0XFxjb21wb25lbnRzXFxMYW5ndWFnZVRvZ2dsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnRzL0xhbmd1YWdlVG9nZ2xlLmpzXHJcbmltcG9ydCB7IHVzZUxhbmd1YWdlIH0gZnJvbSAnLi4vY29udGV4dC9MYW5ndWFnZUNvbnRleHQnO1xyXG5cclxuY29uc3QgTGFuZ3VhZ2VUb2dnbGUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBsYW5nLCBzZXRMYW5nIH0gPSB1c2VMYW5ndWFnZSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRMYW5nKGxhbmcgPT09ICdlbicgPyAnZGUnIDogJ2VuJyl9PlxyXG4gICAgICB7bGFuZyA9PT0gJ2VuJyA/ICdEZXV0c2NoJyA6ICdFbmdsaXNoJ31cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVRvZ2dsZTtcclxuIl0sIm5hbWVzIjpbInVzZUxhbmd1YWdlIiwiTGFuZ3VhZ2VUb2dnbGUiLCJsYW5nIiwic2V0TGFuZyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/LanguageToggle.js\n");

/***/ }),

/***/ "(pages-dir-node)/./context/LanguageContext.js":
/*!************************************!*\
  !*** ./context/LanguageContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageProvider: () => (/* binding */ LanguageProvider),\n/* harmony export */   useLanguage: () => (/* binding */ useLanguage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations */ \"(pages-dir-node)/./context/translations.js\");\n\n\n\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst LanguageProvider = ({ children })=>{\n    const [lang, setLang] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('en');\n    const t = (key)=>_translations__WEBPACK_IMPORTED_MODULE_2__[\"default\"][lang][key] || key;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: {\n            lang,\n            setLang,\n            t\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\Model-cat\\\\context\\\\LanguageContext.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\nconst useLanguage = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvTGFuZ3VhZ2VDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTREO0FBQ2xCO0FBRTFDLE1BQU1JLGdDQUFrQkosb0RBQWFBO0FBRTlCLE1BQU1LLG1CQUFtQixDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUMzQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTU8sSUFBSSxDQUFDQyxNQUFRUCxxREFBWSxDQUFDSSxLQUFLLENBQUNHLElBQUksSUFBSUE7SUFFOUMscUJBQ0UsOERBQUNOLGdCQUFnQk8sUUFBUTtRQUFDQyxPQUFPO1lBQUVMO1lBQU1DO1lBQVNDO1FBQUU7a0JBQ2pESDs7Ozs7O0FBR1AsRUFBRTtBQUVLLE1BQU1PLGNBQWMsSUFBTVosaURBQVVBLENBQUNHLGlCQUFpQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx3aWxsaVxcT25lRHJpdmVcXERlc2t0b3BcXE1vZGVsLWNhdFxcY29udGV4dFxcTGFuZ3VhZ2VDb250ZXh0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4vdHJhbnNsYXRpb25zJztcclxuXHJcbmNvbnN0IExhbmd1YWdlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMYW5ndWFnZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtsYW5nLCBzZXRMYW5nXSA9IHVzZVN0YXRlKCdlbicpO1xyXG4gIGNvbnN0IHQgPSAoa2V5KSA9PiB0cmFuc2xhdGlvbnNbbGFuZ11ba2V5XSB8fCBrZXk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGxhbmcsIHNldExhbmcsIHQgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTGFuZ3VhZ2UgPSAoKSA9PiB1c2VDb250ZXh0KExhbmd1YWdlQ29udGV4dCk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidHJhbnNsYXRpb25zIiwiTGFuZ3VhZ2VDb250ZXh0IiwiTGFuZ3VhZ2VQcm92aWRlciIsImNoaWxkcmVuIiwibGFuZyIsInNldExhbmciLCJ0Iiwia2V5IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUxhbmd1YWdlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/LanguageContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./context/translations.js":
/*!*********************************!*\
  !*** ./context/translations.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// context/translations.js\nconst translations = {\n    en: {\n        title: 'Welcome to Model Service',\n        viewModels: 'View Models'\n    },\n    de: {\n        title: 'Willkommen bei Modelldienst',\n        viewModels: 'Modelle anzeigen'\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (translations);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvdHJhbnNsYXRpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSwwQkFBMEI7QUFDMUIsTUFBTUEsZUFBZTtJQUNuQkMsSUFBSTtRQUNGQyxPQUFPO1FBQ1BDLFlBQVk7SUFDZDtJQUNBQyxJQUFJO1FBQ0ZGLE9BQU87UUFDUEMsWUFBWTtJQUNkO0FBQ0Y7QUFFQSxpRUFBZUgsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx3aWxsaVxcT25lRHJpdmVcXERlc2t0b3BcXE1vZGVsLWNhdFxcY29udGV4dFxcdHJhbnNsYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnRleHQvdHJhbnNsYXRpb25zLmpzXHJcbmNvbnN0IHRyYW5zbGF0aW9ucyA9IHtcclxuICBlbjoge1xyXG4gICAgdGl0bGU6ICdXZWxjb21lIHRvIE1vZGVsIFNlcnZpY2UnLFxyXG4gICAgdmlld01vZGVsczogJ1ZpZXcgTW9kZWxzJyxcclxuICB9LFxyXG4gIGRlOiB7XHJcbiAgICB0aXRsZTogJ1dpbGxrb21tZW4gYmVpIE1vZGVsbGRpZW5zdCcsXHJcbiAgICB2aWV3TW9kZWxzOiAnTW9kZWxsZSBhbnplaWdlbicsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0aW9ucztcclxuIl0sIm5hbWVzIjpbInRyYW5zbGF0aW9ucyIsImVuIiwidGl0bGUiLCJ2aWV3TW9kZWxzIiwiZGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/translations.js\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_LanguageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/LanguageContext */ \"(pages-dir-node)/./context/LanguageContext.js\");\n/* harmony import */ var _components_LanguageToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LanguageToggle */ \"(pages-dir-node)/./components/LanguageToggle.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n// pages/_app.js\n\n\n // ✅ CORRECT PATH\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_LanguageContext__WEBPACK_IMPORTED_MODULE_2__.LanguageProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.navbar,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\Model-cat\\\\pages\\\\_app.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/gallery\",\n                        children: \"Gallery\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\Model-cat\\\\pages\\\\_app.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LanguageToggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\Model-cat\\\\pages\\\\_app.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\Model-cat\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\Model-cat\\\\pages\\\\_app.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\willi\\\\OneDrive\\\\Desktop\\\\Model-cat\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\nconst styles = {\n    navbar: {\n        padding: '1rem',\n        display: 'flex',\n        gap: '1rem',\n        alignItems: 'center',\n        backgroundColor: '#f0f0f0',\n        justifyContent: 'space-between'\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCOztBQUNlO0FBQytCLENBQUMsaUJBQWlCO0FBQ3RCO0FBQzdCO0FBRTdCLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNMLHNFQUFnQkE7OzBCQUNmLDhEQUFDTTtnQkFBSUMsT0FBT0MsT0FBT0MsTUFBTTs7a0NBQ3ZCLDhEQUFDUCxrREFBSUE7d0JBQUNRLE1BQUs7a0NBQUk7Ozs7OztrQ0FDZiw4REFBQ1Isa0RBQUlBO3dCQUFDUSxNQUFLO2tDQUFXOzs7Ozs7a0NBQ3RCLDhEQUFDVCxrRUFBY0E7Ozs7Ozs7Ozs7OzBCQUVqQiw4REFBQ0c7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUM7QUFFckIsTUFBTUssU0FBUztJQUNiQyxRQUFRO1FBQ05FLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxLQUFLO1FBQ0xDLFlBQVk7UUFDWkMsaUJBQWlCO1FBQ2pCQyxnQkFBZ0I7SUFDbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFx3aWxsaVxcT25lRHJpdmVcXERlc2t0b3BcXE1vZGVsLWNhdFxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC5qc1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IExhbmd1YWdlUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0xhbmd1YWdlQ29udGV4dCc7IC8vIOKchSBDT1JSRUNUIFBBVEhcclxuaW1wb3J0IExhbmd1YWdlVG9nZ2xlIGZyb20gJy4uL2NvbXBvbmVudHMvTGFuZ3VhZ2VUb2dnbGUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYW5ndWFnZVByb3ZpZGVyPlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubmF2YmFyfT5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9nYWxsZXJ5XCI+R2FsbGVyeTwvTGluaz5cclxuICAgICAgICA8TGFuZ3VhZ2VUb2dnbGUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvTGFuZ3VhZ2VQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBuYXZiYXI6IHtcclxuICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGdhcDogJzFyZW0nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmMGYwJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbIkxhbmd1YWdlUHJvdmlkZXIiLCJMYW5ndWFnZVRvZ2dsZSIsIkxpbmsiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRpdiIsInN0eWxlIiwic3R5bGVzIiwibmF2YmFyIiwiaHJlZiIsInBhZGRpbmciLCJkaXNwbGF5IiwiZ2FwIiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsImp1c3RpZnlDb250ZW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./pages/_app.js")));
module.exports = __webpack_exports__;

})();