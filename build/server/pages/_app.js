module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tlnx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("T00j");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zPlV");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_CartContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xKSj");
/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("NBZd");
/* harmony import */ var _api_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("o/o4");
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("gTka");
/* harmony import */ var _scss_global_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scss_global_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("xMo/");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("jDDT");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("tyWD");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("K7k0");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function MyApp({
  Component,
  pageProps
}) {
  const {
    0: auth,
    1: setAuth
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined);
  const {
    0: realoadUser,
    1: setReloadUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: totalProductsCart,
    1: setTotalProductsCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: reloadCart,
    1: setReloadCart
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const token = Object(_api_token__WEBPACK_IMPORTED_MODULE_7__[/* getToken */ "a"])();

    if (token) {
      setAuth({
        token,
        idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token).id
      });
    } else {
      setAuth(null);
    }

    setReloadUser(false);
  }, [realoadUser]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setTotalProductsCart(Object(_api_cart__WEBPACK_IMPORTED_MODULE_8__[/* countProductsCart */ "b"])());
    setReloadCart(false);
  }, [reloadCart, auth]);

  const login = token => {
    Object(_api_token__WEBPACK_IMPORTED_MODULE_7__[/* setToken */ "d"])(token);
    setAuth({
      token,
      idUser: jwt_decode__WEBPACK_IMPORTED_MODULE_2___default()(token).id
    });
  };

  const logout = () => {
    if (auth) {
      Object(_api_token__WEBPACK_IMPORTED_MODULE_7__[/* removeToken */ "c"])();
      setAuth(null);
      router.push("/");
    }
  };

  const addProduct = product => {
    const token = Object(_api_token__WEBPACK_IMPORTED_MODULE_7__[/* getToken */ "a"])();

    if (token) {
      Object(_api_cart__WEBPACK_IMPORTED_MODULE_8__[/* addProductCart */ "a"])(product);
      setReloadCart(true);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].warning("Para comprar un juego tienes que iniciar sesión");
    }
  };

  const removeProduct = product => {
    Object(_api_cart__WEBPACK_IMPORTED_MODULE_8__[/* removeProductCart */ "f"])(product);
    setReloadCart(true);
  };

  const authData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    auth,
    login,
    logout,
    setReloadUser
  }), [auth]);
  const cartData = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => ({
    productsCart: totalProductsCart,
    addProductCart: product => addProduct(product),
    getProductsCart: _api_cart__WEBPACK_IMPORTED_MODULE_8__[/* getProductsCart */ "c"],
    removeProductCart: product => removeProduct(product),
    removeAllProductsCart: _api_cart__WEBPACK_IMPORTED_MODULE_8__[/* removeAllProductsCart */ "e"]
  }), [totalProductsCart]);
  if (auth === undefined) return null;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].Provider, {
    value: authData,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(_context_CartContext__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].Provider, {
      value: cartData,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(Component, _objectSpread({}, pageProps)), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"], {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        newestOnTop: true,
        closeOnClick: true,
        rtl: false,
        pauseOnFocusLoss: false,
        draggable: true,
        pauseOnHover: true
      })]
    })
  });
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "K7k0":
/***/ (function(module, exports) {



/***/ }),

/***/ "NBZd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasExpiredToken; });
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wyBh");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tlnx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);


function setToken(token) {
  localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* TOKEN */ "d"], token);
}
function getToken() {
  return localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* TOKEN */ "d"]);
}
function removeToken() {
  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_0__[/* TOKEN */ "d"]);
}
function hasExpiredToken(token) {
  const tokenDecode = jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
  const expireDate = tokenDecode.exp * 1000;
  const currentDate = new Date().getTime();

  if (currentDate > expireDate) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "T00j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  auth: undefined,
  login: () => null,
  logout: () => null,
  setReloadUser: () => null
});
/* harmony default export */ __webpack_exports__["a"] = (AuthContext);

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gTka":
/***/ (function(module, exports) {



/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "o/o4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProductsCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addProductCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return countProductsCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return removeProductCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return paymentCartApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeAllProductsCart; });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("oAEb");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wyBh");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sW4n");




function getProductsCart() {
  const cart = localStorage.getItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* CART */ "b"]);

  if (!cart) {
    return null;
  } else {
    const products = cart.split(",");
    return products;
  }
}
function addProductCart(product) {
  const cart = getProductsCart();

  if (!cart) {
    localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* CART */ "b"], product);
    react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success("Producto añadido al carrito");
  } else {
    const productFound = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["includes"])(cart, product);

    if (productFound) {
      react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].warning("Este producto ya esta en el carrito");
    } else {
      cart.push(product);
      localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* CART */ "b"], cart);
      react_toastify__WEBPACK_IMPORTED_MODULE_0__["toast"].success("Producto añadido correctamente");
    }
  }
}
function countProductsCart() {
  const cart = getProductsCart();

  if (!cart) {
    return 0;
  } else {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["size"])(cart);
  }
}
function removeProductCart(product) {
  const cart = getProductsCart();
  Object(lodash__WEBPACK_IMPORTED_MODULE_1__["remove"])(cart, item => {
    return item === product;
  });

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["size"])(cart) > 0) {
    localStorage.setItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* CART */ "b"], cart);
  } else {
    localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* CART */ "b"]);
  }
}
async function paymentCartApi(token, products, idUser, address, logout) {
  try {
    const addressShipping = address;
    delete addressShipping.user;
    delete addressShipping.createdAt;
    const url = `${_utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* BASE_PATH */ "a"]}/orders`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token,
        products,
        idUser,
        addressShipping
      })
    };
    const result = await Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_3__[/* authFetch */ "a"])(url, params, logout);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
function removeAllProductsCart() {
  localStorage.removeItem(_utils_constants__WEBPACK_IMPORTED_MODULE_2__[/* CART */ "b"]);
}

/***/ }),

/***/ "oAEb":
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "sW4n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authFetch; });
/* harmony import */ var _api_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("NBZd");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function authFetch(url, params, logout) {
  const token = Object(_api_token__WEBPACK_IMPORTED_MODULE_0__[/* getToken */ "a"])();

  if (!token) {
    // Usuario no logeador
    logout();
  } else {
    if (Object(_api_token__WEBPACK_IMPORTED_MODULE_0__[/* hasExpiredToken */ "b"])(token)) {
      // Token caducado
      logout();
    } else {
      const paramsTemp = _objectSpread(_objectSpread({}, params), {}, {
        headers: _objectSpread(_objectSpread({}, params === null || params === void 0 ? void 0 : params.headers), {}, {
          Authorization: `Bearer ${token}`
        })
      });

      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (error) {
        return error;
      }
    }
  }
}

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "tyWD":
/***/ (function(module, exports) {



/***/ }),

/***/ "wyBh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STRIPE_TOKEN; });
const BASE_PATH = "https://ecommerce-mx.herokuapp.com";
const TOKEN = "token";
const CART = "cart";
const STRIPE_TOKEN = "pk_test_51JIcJxAopdEHwRqeHE4dfPfc0BMXeTnqKYC6hba4EcT1DkKftlqFopOAGEe1JezoewdoZQV8v3RfOshlFxApbai900NVsXuC20";

/***/ }),

/***/ "xKSj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  productsCart: 0,
  addProductCart: () => null,
  getProductsCart: () => null,
  removeProductCart: () => null,
  removeAllProductsCart: () => null
});
/* harmony default export */ __webpack_exports__["a"] = (CartContext);

/***/ }),

/***/ "xMo/":
/***/ (function(module, exports) {



/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });