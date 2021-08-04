webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _layouts_BasicLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layouts/BasicLayout */ \"./layouts/BasicLayout/index.js\");\n/* harmony import */ var _api_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/game */ \"./api/game.js\");\n/* harmony import */ var _components_ListGames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ListGames */ \"./components/ListGames/index.js\");\n/* harmony import */ var _components_Seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Seo */ \"./components/Seo.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/home/ydalimir/Escritorio/client/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      games = _useState[0],\n      setGames = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_api_game__WEBPACK_IMPORTED_MODULE_6__[\"getLastGamesApi\"])(50);\n\n            case 2:\n              response = _context.sent;\n              if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"size\"])(response) > 0) setGames(response);else setGames([]);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxDEV\"])(\"div\", {\n      className: \" lg:my-8 lg:grid-cols-4 grid-cols-1 grid gap-4 my-4  \",\n      children: [!games && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Loader\"], {\n        active: true,\n        children: \"Cargando productos\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 18\n      }, this), games && Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"size\"])(games) === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxDEV\"])(\"h3\", {\n          children: \"No hay productos\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), Object(lodash__WEBPACK_IMPORTED_MODULE_4__[\"size\"])(games) > 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__[\"jsxDEV\"])(_components_ListGames__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        games: games\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 27\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 1\n    }, this)\n  }, void 0, false);\n}\n\n_s(Home, \"cGYayGzOhsC9QkJj1PbKOUKMsuY=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJnYW1lcyIsInNldEdhbWVzIiwidXNlRWZmZWN0IiwiZ2V0TGFzdEdhbWVzQXBpIiwicmVzcG9uc2UiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0Isa0JBQTBCQyxzREFBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPQyxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QscUxBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDd0JDLGlFQUFlLENBQUMsRUFBRCxDQUR2Qzs7QUFBQTtBQUNPQyxzQkFEUDtBQUVDLGtCQUFJQyxtREFBSSxDQUFDRCxRQUFELENBQUosR0FBaUIsQ0FBckIsRUFBd0JILFFBQVEsQ0FBQ0csUUFBRCxDQUFSLENBQXhCLEtBQ0tILFFBQVEsQ0FBQyxFQUFELENBQVI7O0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRDtBQUtELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDRTtBQUFBLDJCQUVKO0FBQUssZUFBUyxFQUFDLHVEQUFmO0FBQUEsaUJBTU8sQ0FBQ0QsS0FBRCxpQkFBVSxxRUFBQyx3REFBRDtBQUFRLGNBQU0sTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5qQixFQU9PQSxLQUFLLElBQUlLLG1EQUFJLENBQUNMLEtBQUQsQ0FBSixLQUFnQixDQUF6QixpQkFDQztBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJSLEVBWU9LLG1EQUFJLENBQUNMLEtBQUQsQ0FBSixHQUFjLENBQWQsaUJBQW1CLHFFQUFDLDZEQUFEO0FBQVcsYUFBSyxFQUFFQTtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZJLG1CQURGO0FBeUJEOztHQXBDdUJGLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IHNpemUgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgQmFzaWNMYXlvdXQgZnJvbSBcIi4uL2xheW91dHMvQmFzaWNMYXlvdXRcIjtcbmltcG9ydCB7IGdldExhc3RHYW1lc0FwaSB9IGZyb20gXCIuLi9hcGkvZ2FtZVwiO1xuaW1wb3J0IExpc3RHYW1lcyBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0R2FtZXNcIjtcbmltcG9ydCBTZW8gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtnYW1lcywgc2V0R2FtZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRMYXN0R2FtZXNBcGkoNTApO1xuICAgICAgaWYgKHNpemUocmVzcG9uc2UpID4gMCkgc2V0R2FtZXMocmVzcG9uc2UpO1xuICAgICAgZWxzZSBzZXRHYW1lcyhbXSk7XG4gICAgfSkoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cblxuPGRpdiBjbGFzc05hbWU9XCJcbiAgICBsZzpteS04IGxnOmdyaWQtY29scy00XG4gICAgZ3JpZC1jb2xzLTFcbiAgICBncmlkIGdhcC00IG15LTQgXG4gIFwiID5cbiAgICAgIFxuICAgICAgeyFnYW1lcyAmJiA8TG9hZGVyIGFjdGl2ZT5DYXJnYW5kbyBwcm9kdWN0b3M8L0xvYWRlcj59XG4gICAgICB7Z2FtZXMgJiYgc2l6ZShnYW1lcykgPT09IDAgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5ObyBoYXkgcHJvZHVjdG9zPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3NpemUoZ2FtZXMpID4gMCAmJiA8TGlzdEdhbWVzIGdhbWVzPXtnYW1lc30gLz59XG4gICAgPC9kaXY+XG4gICAgXG4gICAgIFxuICAgICBcbiAgICA8Lz5cbiAgICBcbiAgICBcbiAgICBcbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})