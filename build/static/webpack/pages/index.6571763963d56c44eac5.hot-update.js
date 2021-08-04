webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ListGames/ListGames.js":
/*!*******************************************!*\
  !*** ./components/ListGames/ListGames.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ListGames; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useWindowSize */ \"./hooks/useWindowSize.js\");\n/* harmony import */ var _utils_breakpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/breakpoint */ \"./utils/breakpoint.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/home/ydalimir/Escritorio/client/components/ListGames/ListGames.js\",\n    _s = $RefreshSig$(),\n    _this2 = undefined;\n\n\n\n\n\n\n\n\nfunction ListGames(props) {\n  _s();\n\n  var _this = this;\n\n  var games = props.games;\n\n  var _useWindowSize = Object(_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(),\n      width = _useWindowSize.width;\n\n  var getColumnsRender = function getColumnsRender() {\n    switch (true) {\n      case width > _utils_breakpoint__WEBPACK_IMPORTED_MODULE_5__[\"breakpointUpLg\"]:\n        return 5;\n\n      case width > _utils_breakpoint__WEBPACK_IMPORTED_MODULE_5__[\"breakpointUpMd\"]:\n        return 3;\n\n      case width > _utils_breakpoint__WEBPACK_IMPORTED_MODULE_5__[\"breakpointUpSm\"]:\n        return 2;\n\n      default:\n        return 1;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n        className: \" lg:my-8 lg:grid-cols-4 grid-cols-1 grid gap-4 my-4  \",\n        children: [Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"map\"])(games, function (game) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(Game, {\n            game: game\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(DisplaySmall, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 12\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ListGames, \"7ylMWtgt/PZegaW+VXObWeRbjaQ=\", false, function () {\n  return [_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n});\n\n_c = ListGames;\n\nvar DisplaySmall = function DisplaySmall() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n    className: \"lg:w-flex-fourth bg-light px-6 pt-10 pb-2 lg:p-6 lg:pb-0 hover:bg-light-200 lg:mb-0 mb-4\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/\".concat(game.url),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"a\", {\n        \"aria-label\": game.title,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n          className: \"flex flex-column justify-center items-center h-32\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n            src: game.poster.url,\n            alt: game.title,\n            className: \"w-3/5\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 11\n          }, _this2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 9\n        }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n          className: \"\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"p\", {\n            className: \"text-xl font-semibold mb-1\",\n            children: game.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 11\n          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"p\", {\n            className: \"text-xs text-gray-700 mb-4\",\n            children: [game.price, \" mxn \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 11\n          }, _this2)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 9\n        }, _this2)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }, _this2)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }, _this2)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 3\n  }, _this2);\n};\n\n_c2 = DisplaySmall;\n\nfunction Game(props) {\n  var game = props.game;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n    className: \" mb-4 lg:mb-0 bg-light p-8 pb-0 hover:bg-light-200\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      href: \"/\".concat(game.url),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"a\", {\n        \"aria-label\": game.title,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n          className: \"flex flex-column justify-center items-center h-56\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n            src: game.poster.url,\n            alt: game.title,\n            className: \"w-3/5\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"div\", {\n          className: \"mb-8\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"p\", {\n            className: \"text-3xl font-semibold mb-1\",\n            children: game.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"p\", {\n            className: \"text-xs text-gray-700\",\n            children: [game.price, \" mxn  \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 5\n  }, this);\n}\n\n_c3 = Game;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ListGames\");\n$RefreshReg$(_c2, \"DisplaySmall\");\n$RefreshReg$(_c3, \"Game\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaXN0R2FtZXMvTGlzdEdhbWVzLmpzP2MyYTkiXSwibmFtZXMiOlsiTGlzdEdhbWVzIiwicHJvcHMiLCJnYW1lcyIsInVzZVdpbmRvd1NpemUiLCJ3aWR0aCIsImdldENvbHVtbnNSZW5kZXIiLCJicmVha3BvaW50VXBMZyIsImJyZWFrcG9pbnRVcE1kIiwiYnJlYWtwb2ludFVwU20iLCJtYXAiLCJnYW1lIiwiRGlzcGxheVNtYWxsIiwidXJsIiwidGl0bGUiLCJwb3N0ZXIiLCJwcmljZSIsIkdhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1lLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3ZDLE1BQVFDLEtBQVIsR0FBa0JELEtBQWxCLENBQVFDLEtBQVI7O0FBQ0EsdUJBQWtCQyxvRUFBYSxFQUEvQjtBQUFBLE1BQVFDLEtBQVIsa0JBQVFBLEtBQVI7O0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFlBQVEsSUFBUjtBQUNFLFdBQUtELEtBQUssR0FBR0UsZ0VBQWI7QUFDRSxlQUFPLENBQVA7O0FBQ0YsV0FBS0YsS0FBSyxHQUFHRyxnRUFBYjtBQUNFLGVBQU8sQ0FBUDs7QUFDRixXQUFLSCxLQUFLLEdBQUdJLGdFQUFiO0FBQ0UsZUFBTyxDQUFQOztBQUNGO0FBQ0UsZUFBTyxDQUFQO0FBUko7QUFVRCxHQVhEOztBQWFBLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsdURBQWY7QUFBQSxtQkFLR0Msa0RBQUcsQ0FBQ1AsS0FBRCxFQUFRLFVBQUNRLElBQUQ7QUFBQSw4QkFDVixxRUFBQyxJQUFEO0FBQU0sZ0JBQUksRUFBRUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVO0FBQUEsU0FBUixDQUxOLGVBUUcscUVBQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBcEN1QlYsUztVQUVKRyw0RDs7O0tBRklILFM7O0FBc0N4QixJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLHNCQUNuQjtBQUFLLGFBQVMsRUFBQywwRkFBZjtBQUFBLDJCQUdFLHFFQUFDLGdEQUFEO0FBQU8sVUFBSSxhQUFNRCxJQUFJLENBQUNFLEdBQVgsQ0FBWDtBQUFBLDZCQUNFO0FBQUcsc0JBQVlGLElBQUksQ0FBQ0csS0FBcEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsbURBQWY7QUFBQSxpQ0FDRSxxRUFBQyx1REFBRDtBQUFPLGVBQUcsRUFBRUgsSUFBSSxDQUFDSSxNQUFMLENBQVlGLEdBQXhCO0FBQTZCLGVBQUcsRUFBRUYsSUFBSSxDQUFDRyxLQUF2QztBQUErQyxxQkFBUyxFQUFDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFDLEVBQWY7QUFBQSxrQ0FDRTtBQUFHLHFCQUFTLEVBQUMsNEJBQWI7QUFBQSxzQkFBMkNILElBQUksQ0FBQ0c7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUcscUJBQVMsRUFBQyw0QkFBYjtBQUFBLHVCQUEyQ0gsSUFBSSxDQUFDSyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRG1CO0FBQUEsQ0FBckI7O01BQU1KLFk7O0FBbUJOLFNBQVNLLElBQVQsQ0FBY2YsS0FBZCxFQUFxQjtBQUNuQixNQUFRUyxJQUFSLEdBQWlCVCxLQUFqQixDQUFRUyxJQUFSO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsb0RBQWY7QUFBQSwyQkFHRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksYUFBTUEsSUFBSSxDQUFDRSxHQUFYLENBQVY7QUFBQSw2QkFDRTtBQUFHLHNCQUFZRixJQUFJLENBQUNHLEtBQXBCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLG1EQUFmO0FBQUEsaUNBQ0UscUVBQUMsdURBQUQ7QUFBTyxlQUFHLEVBQUVILElBQUksQ0FBQ0ksTUFBTCxDQUFZRixHQUF4QjtBQUE2QixlQUFHLEVBQUVGLElBQUksQ0FBQ0csS0FBdkM7QUFBK0MscUJBQVMsRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsa0NBQ0U7QUFBRyxxQkFBUyxFQUFDLDZCQUFiO0FBQUEsc0JBQTRDSCxJQUFJLENBQUNHO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUFHLHFCQUFTLEVBQUMsdUJBQWI7QUFBQSx1QkFBc0NILElBQUksQ0FBQ0ssS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztNQXBCUUMsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGlzdEdhbWVzL0xpc3RHYW1lcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEltYWdlLCBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2luZG93U2l6ZVwiO1xuaW1wb3J0IHtcbiAgYnJlYWtwb2ludFVwU20sXG4gIGJyZWFrcG9pbnRVcE1kLFxuICBicmVha3BvaW50VXBMZyxcbn0gZnJvbSBcIi4uLy4uL3V0aWxzL2JyZWFrcG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdEdhbWVzKHByb3BzKSB7XG4gIGNvbnN0IHsgZ2FtZXMgfSA9IHByb3BzO1xuICBjb25zdCB7IHdpZHRoIH0gPSB1c2VXaW5kb3dTaXplKCk7XG5cbiAgY29uc3QgZ2V0Q29sdW1uc1JlbmRlciA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgIGNhc2Ugd2lkdGggPiBicmVha3BvaW50VXBMZzpcbiAgICAgICAgcmV0dXJuIDU7XG4gICAgICBjYXNlIHdpZHRoID4gYnJlYWtwb2ludFVwTWQ6XG4gICAgICAgIHJldHVybiAzO1xuICAgICAgY2FzZSB3aWR0aCA+IGJyZWFrcG9pbnRVcFNtOlxuICAgICAgICByZXR1cm4gMjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgID5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXG4gICAgbGc6bXktOCBsZzpncmlkLWNvbHMtNFxuICAgIGdyaWQtY29scy0xXG4gICAgZ3JpZCBnYXAtNCBteS00IFxuICBcIiA+XG4gICAgICAgICAge21hcChnYW1lcywgKGdhbWUpID0+IChcbiAgICAgICAgICAgIDxHYW1lIGdhbWU9e2dhbWV9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgIDxEaXNwbGF5U21hbGxcbiAgICAgICAgIFxuICAgICAgICAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IERpc3BsYXlTbWFsbCA9ICgpID0+ICAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGc6dy1mbGV4LWZvdXJ0aCBiZy1saWdodFxuICBweC02IHB0LTEwIHBiLTIgbGc6cC02IGxnOnBiLTBcbiAgaG92ZXI6YmctbGlnaHQtMjAwIGxnOm1iLTAgbWItNFwiPlxuICAgIDxMaW5rICBocmVmPXtgLyR7Z2FtZS51cmx9YH0+XG4gICAgICA8YSBhcmlhLWxhYmVsPXtnYW1lLnRpdGxlfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLTMyXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz17Z2FtZS5wb3N0ZXIudXJsfSBhbHQ9e2dhbWUudGl0bGV9ICBjbGFzc05hbWU9XCJ3LTMvNVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi0xXCI+e2dhbWUudGl0bGV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMCBtYi00XCI+e2dhbWUucHJpY2V9IG14biA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgPC9kaXY+XG4pXG5cblxuZnVuY3Rpb24gR2FtZShwcm9wcykge1xuICBjb25zdCB7IGdhbWUgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcbiAgICBtYi00IGxnOm1iLTBcbiAgICBiZy1saWdodCBwLTggcGItMCBob3ZlcjpiZy1saWdodC0yMDBcIj5cbiAgICAgIDxMaW5rIGhyZWY9e2AvJHtnYW1lLnVybH1gfT5cbiAgICAgICAgPGEgYXJpYS1sYWJlbD17Z2FtZS50aXRsZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLTU2XCI+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtnYW1lLnBvc3Rlci51cmx9IGFsdD17Z2FtZS50aXRsZX0gIGNsYXNzTmFtZT1cInctMy81XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbWItMVwiPntnYW1lLnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTcwMFwiPntnYW1lLnByaWNlfSBteG4gIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ListGames/ListGames.js\n");

/***/ })

})