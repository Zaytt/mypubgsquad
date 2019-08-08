module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Error.js":
/*!************************************!*\
  !*** ./components/common/Error.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Error(props) {
  var error = props.error,
      retry = props.retry,
      message = props.message;
  var errorMessage = error.status === 429 ? 'PUBG Servers are busy, please try again later' : error.status === 404 ? "One or more players couldn't be found, be sure to type their correct names and try again." : error === 'InsufficientPlayers' ? "Search must contain at least 2 players. Check your search and try again." : message;

  if (error.status === 404 || error === 'InsufficientPlayers') {
    retry = false;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container h-100 mt-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "pubg-font text-center mb-3 display-4"
  }, "Whoops!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row d-flex justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-dark pubg-font text-center mb-3"
  }, errorMessage))), retry ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row d-flex justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8 col-sm-6 col-md-4 col-lg-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-warning w-100 ",
    onClick: retry
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-redo-alt"
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("font", {
    size: "3"
  }, " RETRY")))) : null);
}

/***/ }),

/***/ "./components/common/SearchInputGroup.js":
/*!***********************************************!*\
  !*** ./components/common/SearchInputGroup.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_Util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util/Util */ "./util/Util.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);













var SearchInputGroup =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SearchInputGroup, _React$Component);

  function SearchInputGroup() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchInputGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SearchInputGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      squadSearch: '',
      error: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componen", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "routeChange", function (e) {
      e.preventDefault();

      var squadSearch = _this.filterString(_this.state.squadSearch);

      if (squadSearch.split(',').length > 10 || squadSearch.split(',').length < 2) {
        _this.setState({
          error: 'Player Search must be between 2 and 10 players'
        });

        return;
      } else {
        _this.setState({
          squadSearch: squadSearch,
          error: null
        });

        var path = "/stats/".concat(squadSearch);
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push(path);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "filterString", function (str) {
      return Object(_util_Util__WEBPACK_IMPORTED_MODULE_9__["sanitizeString"])(_this.state.squadSearch).split(/[ ,]+/).filter(Boolean).join(',');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchInputGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          placeholder = _this$props.placeholder,
          value = _this$props.value,
          type = _this$props.type,
          navbar = _this$props.navbar;
      var _this$state = this.state,
          squadSearch = _this$state.squadSearch,
          error = _this$state.error;

      if (navbar) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "d-flex justify-content-center"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
          className: "form-inline nav-bar-search-form d-flex justify-content-center",
          onSubmit: this.routeChange,
          autoComplete: "new-password"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "input-group nav-bar-input-group"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          className: "form-control ".concat(error ? 'is-invalid' : 'border border-dark '),
          type: "search",
          name: "squadSearch",
          placeholder: placeholder,
          "aria-label": "Search",
          value: squadSearch,
          onChange: this.onChange,
          ref: "input1"
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "input-group-append",
          onClick: this.routeChange
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "input-group-text text-dark bg-warning border-dark",
          style: {
            cursor: 'pointer'
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-search"
        }))))));
      } else return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.routeChange
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("small", {
        className: "form-text text-light mb-2"
      }, "Type in up to 10 player names, separated by commas."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-group mb-1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "input-group-prepend"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "input-group-text"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-search"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control form-control-lg myinput ".concat(error ? 'is-invalid' : ''),
        type: type,
        placeholder: placeholder,
        name: "squadSearch",
        value: value,
        onChange: this.onChange
      })), error && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-text text-danger"
      }, error), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-lg btn-warning mt-4",
        type: "submit"
      }, "Search Stats"));
    }
  }]);

  return SearchInputGroup;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

SearchInputGroup.propTypes = {
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  error: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string // onChange: PropTypes.func.isRequired

};
SearchInputGroup.defaultProps = {
  type: 'text'
};
/* harmony default export */ __webpack_exports__["default"] = (SearchInputGroup);

/***/ }),

/***/ "./components/common/Separator.js":
/*!****************************************!*\
  !*** ./components/common/Separator.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Separator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Separator(props) {
  var color = props.color,
      marginTop = props.marginTop,
      marginBottom = props.marginBottom,
      length = props.length;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row d-flex justify-content-center mt-".concat(marginTop, " mb-").concat(marginBottom)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-".concat(length)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "text-center shadow ".concat("bg-".concat(color))
  })));
}

/***/ }),

/***/ "./components/common/Spinner.js":
/*!**************************************!*\
  !*** ./components/common/Spinner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__);


function Spinner() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-center align-items-center spinner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default.a, {
    type: "TailSpin",
    color: "#ffa812",
    height: 100,
    width: 100
  }));
}

/***/ }),

/***/ "./components/layout/Footer.js":
/*!*************************************!*\
  !*** ./components/layout/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer bg-dark text-white p-2 text-center"
  }, "Copyright \xA9 ", new Date().getFullYear(), " mypubgsquad");
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_SearchInputGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/SearchInputGroup */ "./components/common/SearchInputGroup.js");
/* harmony import */ var _static_fonts_HeadlinerNo45_ttf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/fonts/HeadlinerNo45.ttf */ "./static/fonts/HeadlinerNo45.ttf");
/* harmony import */ var _static_fonts_HeadlinerNo45_ttf__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_HeadlinerNo45_ttf__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/css/style.css */ "./static/css/style.css");
/* harmony import */ var _static_css_style_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_css_style_css__WEBPACK_IMPORTED_MODULE_11__);













var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderGuestLinks", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item ml-3 text-center d-block d-sm-none"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link text-muted"
      }, "Home"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item ml-3 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/register"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link text-muted d-inline-block text-nowrap "
      }, "Sign Up"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "nav-item ml-3 text-center "
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/login"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-link text-muted"
      }, "Login"))));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "topbar navbar navbar-expand-sm navbar-dark bg-dark py-1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "navbar-brand font-weight-light mt-1 d-none d-sm-block pubg-font"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-white"
      }, "MY"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-warning"
      }, "PUBG"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-white"
      }, "SQUAD"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex flex-nowrap w-100"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mx-auto search-bar-container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_SearchInputGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
        placeholder: "Search Players",
        name: "squadSearch",
        navbar: true
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "navbar-toggler ml-2",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#mobile-nav"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "mobile-nav"
      }, this.renderGuestLinks())));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/layout/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/layout/Footer.js");



function index(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "root light-gray"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./components/stats_page/AloneTogetherPicker.js":
/*!******************************************************!*\
  !*** ./components/stats_page/AloneTogetherPicker.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function AloneTogetherPicker(props) {
  var alone = props.alone,
      setAlone = props.setAlone;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row d-flex justify-content-center pubg-font"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "display-4 pubg-font text-center"
  }, "As")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6 col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "display-4 pubg-font ".concat(alone ? 'text-black' : 'text-muted'),
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setAlone(true);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12  text-center d-flex justify-content-sm-end justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mx-2 ".concat(!alone ? 'hidden' : '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-fist-raised"
  }), ' '), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mx-2"
  }, "Individuals"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-6 col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "display-4 text-center ".concat(alone ? 'text-muted' : 'text-black'),
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setAlone(false);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row d-flex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 order-1 order-sm-0 d-flex justify-content-sm-start justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "order-sm-0 order-1 mx-2"
  }, "a Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "order-sm-1 order-0 mx-2 ".concat(alone ? 'hidden' : '')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-hands-helping"
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (AloneTogetherPicker);

/***/ }),

/***/ "./components/stats_page/GeneralStats/GameModeSelector.js":
/*!****************************************************************!*\
  !*** ./components/stats_page/GeneralStats/GameModeSelector.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _SelectorPill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SelectorPill */ "./components/stats_page/GeneralStats/SelectorPill.js");
/* harmony import */ var _redux_actions_playerSeasonsActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions/playerSeasonsActions */ "./redux/actions/playerSeasonsActions.js");
















var GameModeSelector =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(GameModeSelector, _Component);

  function GameModeSelector() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, GameModeSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(GameModeSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "changeGameMode", function (mode) {
      return _this.props.setGameMode(mode);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "changePerspective", function (perspective) {
      return _this.props.setPerspective(perspective);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "renew",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this$props, squad, season, route;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, squad = _this$props.squad, season = _this$props.season;
              route = "/api/stats?squad=".concat(squad.join(','), "&seasonid=").concat(season);
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('/api/stats/cache/clear/', {
                params: {
                  target: route
                }
              });

            case 4:
              _this.props.getPlayersStats(squad.join(','), season);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(GameModeSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          mode = _this$props2.mode,
          perspective = _this$props2.perspective;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row mb-3 d-flex "
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-6 mb-2"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row justify-content-md-end"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-lg-6 d-flex  justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "nav nav-pills nav-fill nav-justified w-100 border border-dark rounded"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_SelectorPill__WEBPACK_IMPORTED_MODULE_13__["default"], {
        selected: mode === 'solo' ? true : false,
        rounded: ['left'],
        text: "Solo",
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changeGameMode('solo');
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_SelectorPill__WEBPACK_IMPORTED_MODULE_13__["default"], {
        selected: mode === 'duo' ? true : false,
        text: "Duo",
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changeGameMode('duo');
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_SelectorPill__WEBPACK_IMPORTED_MODULE_13__["default"], {
        selected: mode === 'squad' ? true : false,
        text: "Squad",
        rounded: ['right'],
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changeGameMode('squad');
        }
      }))))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-6 mb-2"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "row justify-content-start"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-lg-6 mb-2"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        className: "nav nav-pills nav-fill nav-justified w-100 d-flex border border-dark rounded"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_SelectorPill__WEBPACK_IMPORTED_MODULE_13__["default"], {
        selected: perspective === 'FPP' ? true : false,
        text: "FPP",
        rounded: ['left'],
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changePerspective('FPP');
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_SelectorPill__WEBPACK_IMPORTED_MODULE_13__["default"], {
        selected: perspective === '' ? true : false,
        text: "TPP",
        rounded: ['right'],
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changePerspective('');
        }
      }))))));
    }
  }]);

  return GameModeSelector;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(GameModeSelector, "propTypes", {
  setGameMode: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string.isRequired,
  perspective: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    mode: state.playerSeasons.mode,
    perspective: state.playerSeasons.perspective,
    season: state.playerSeasons.season,
    squad: state.playerSeasons.players
  };
};

var mapDispatchToProps = {
  setGameMode: _redux_actions_playerSeasonsActions__WEBPACK_IMPORTED_MODULE_14__["setGameMode"],
  setPerspective: _redux_actions_playerSeasonsActions__WEBPACK_IMPORTED_MODULE_14__["setPerspective"],
  getPlayerSeasons: _redux_actions_playerSeasonsActions__WEBPACK_IMPORTED_MODULE_14__["getPlayerSeasons"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(GameModeSelector));

/***/ }),

/***/ "./components/stats_page/GeneralStats/IndividualStats.js":
/*!***************************************************************!*\
  !*** ./components/stats_page/GeneralStats/IndividualStats.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SquadMemberCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SquadMemberCard */ "./components/stats_page/GeneralStats/SquadMemberCard.js");
/* harmony import */ var _GameModeSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GameModeSelector */ "./components/stats_page/GeneralStats/GameModeSelector.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);













var IndividualStats =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(IndividualStats, _Component);

  function IndividualStats() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, IndividualStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(IndividualStats)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderSquadMembers", function (stats) {
      return stats.map(function (playerSeason) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: playerSeason.relationships.player.attributes.name,
          className: "col-lg-6 col-12 mb-3 "
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberCard__WEBPACK_IMPORTED_MODULE_9__["default"], {
          playerSeason: playerSeason
        }));
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(IndividualStats, [{
    key: "render",
    value: function render() {
      var stats = this.props.stats;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_GameModeSelector__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row "
      }, this.renderSquadMembers(stats)));
    }
  }]);

  return IndividualStats;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(IndividualStats, "propTypes", {
  stats: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    stats: state.playerSeasons.stats
  };
};

var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(IndividualStats));

/***/ }),

/***/ "./components/stats_page/GeneralStats/PillBadge.js":
/*!*********************************************************!*\
  !*** ./components/stats_page/GeneralStats/PillBadge.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function PillBadge(props) {
  var stat = props.stat,
      singular = props.singular,
      plural = props.plural,
      color = props.color;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 w-100"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "badge badge-pill my-1 badge-".concat(color, " w-100")
  }, stat === 1 ? "".concat(stat, " ").concat(singular, " ") : "".concat(stat, " ").concat(plural, " "))));
}

PillBadge.propTypes = {
  stat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  singular: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  plural: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PillBadge);

/***/ }),

/***/ "./components/stats_page/GeneralStats/SelectorPill.js":
/*!************************************************************!*\
  !*** ./components/stats_page/GeneralStats/SelectorPill.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function SelectorPill(props) {
  var selected = props.selected,
      activeColor = props.activeColor,
      inactiveColor = props.inactiveColor,
      border = props.border;
  var rounded = '';
  if (props.rounded) props.rounded.forEach(function (direction) {
    rounded = rounded + "rounded-".concat(direction, " ");
  });

  if (selected === true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item bg-".concat(activeColor, " ").concat(rounded, " ").concat(border),
      style: {
        cursor: 'pointer'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-".concat(activeColor, " w-100"),
      onClick: props.onClick
    }, props.text));
  } else if (props.disabled === true) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item bg-secondary ".concat(rounded, " ").concat(border, " disabled")
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-secondary disabled w-100",
      onClick: props.onClick,
      disabled: true
    }, props.text));
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: "nav-item bg-".concat(inactiveColor, " ").concat(rounded, " ").concat(border),
      style: {
        cursor: 'pointer'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-".concat(inactiveColor, "  w-100"),
      onClick: props.onClick
    }, props.text));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SelectorPill);

/***/ }),

/***/ "./components/stats_page/GeneralStats/SquadMemberCard.js":
/*!***************************************************************!*\
  !*** ./components/stats_page/GeneralStats/SquadMemberCard.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.round */ "lodash.round");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _SquadMemberCardHeader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SquadMemberCardHeader */ "./components/stats_page/GeneralStats/SquadMemberCardHeader.js");
/* harmony import */ var _SquadMemberCardStat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SquadMemberCardStat */ "./components/stats_page/GeneralStats/SquadMemberCardStat.js");
/* harmony import */ var _common_Separator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/Separator */ "./components/common/Separator.js");















var SquadMemberCard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SquadMemberCard, _Component);

  function SquadMemberCard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SquadMemberCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SquadMemberCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "secondsToMinutes", function (secs) {
      secs = lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(secs);
      var minutes = Math.floor(lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(secs) / 60);
      var seconds = lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(secs) - minutes * 60;
      return "".concat(minutes, ":").concat(seconds);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "checkZeroGames", function (stat, rounds) {
      return rounds === 0 ? '0' : stat;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SquadMemberCard, [{
    key: "render",
    value: function render() {
      var gameMode = this.props.mode + this.props.perspective;
      var name = this.props.playerSeason.relationships.player.attributes.name;
      var _this$props$playerSea = this.props.playerSeason.attributes.gameModeStats[gameMode],
          rankPoints = _this$props$playerSea.rankPoints,
          kills = _this$props$playerSea.kills,
          roundMostKills = _this$props$playerSea.roundMostKills,
          roundsPlayed = _this$props$playerSea.roundsPlayed,
          damageDealt = _this$props$playerSea.damageDealt,
          timeSurvived = _this$props$playerSea.timeSurvived,
          longestKill = _this$props$playerSea.longestKill,
          headshotKills = _this$props$playerSea.headshotKills,
          wins = _this$props$playerSea.wins,
          top10s = _this$props$playerSea.top10s;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card h-100 w-100 bg-dark text-light border-secondary stat-card"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberCardHeader__WEBPACK_IMPORTED_MODULE_11__["default"], {
        playername: name,
        rank: rankPoints,
        gamesPlayed: roundsPlayed,
        wins: wins,
        top10s: top10s,
        kills: kills
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Separator__WEBPACK_IMPORTED_MODULE_13__["default"], {
        color: "secondary",
        margin: "0",
        length: "12"
      }), roundsPlayed === 0 ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "text-center h-50 d-flex justify-content-center align-items-center"
      }, "No rounds played") : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberCardStat__WEBPACK_IMPORTED_MODULE_12__["default"], {
        stat: "KDR",
        value: this.checkZeroGames(lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(kills / roundsPlayed, 2), roundsPlayed),
        bold: true
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberCardStat__WEBPACK_IMPORTED_MODULE_12__["default"], {
        stat: "Avg. Damage",
        value: this.checkZeroGames(lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(damageDealt / roundsPlayed, 2), roundsPlayed),
        bold: true
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberCardStat__WEBPACK_IMPORTED_MODULE_12__["default"], {
        stat: "Most Kills",
        value: roundMostKills
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberCardStat__WEBPACK_IMPORTED_MODULE_12__["default"], {
        stat: "Avg. Time Survived",
        value: this.checkZeroGames(this.secondsToMinutes(timeSurvived / roundsPlayed), roundsPlayed)
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberCardStat__WEBPACK_IMPORTED_MODULE_12__["default"], {
        stat: "Longest Kill",
        value: "".concat(this.checkZeroGames(lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(longestKill), roundsPlayed), " m")
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberCardStat__WEBPACK_IMPORTED_MODULE_12__["default"], {
        stat: "Headshot",
        value: "".concat(this.checkZeroGames(lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(headshotKills / kills * 100, 1), roundsPlayed), " %")
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberCardStat__WEBPACK_IMPORTED_MODULE_12__["default"], {
        stat: "Win %",
        value: "".concat(this.checkZeroGames(lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(wins / roundsPlayed * 100, 1), roundsPlayed), " %")
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberCardStat__WEBPACK_IMPORTED_MODULE_12__["default"], {
        stat: "Top 10 %",
        value: "".concat(this.checkZeroGames(lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(top10s / roundsPlayed * 100, 1), roundsPlayed), " %")
      })))));
    }
  }]);

  return SquadMemberCard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(SquadMemberCard, "propTypes", {
  playerSeason: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  perspective: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    mode: state.playerSeasons.mode,
    perspective: state.playerSeasons.perspective
  };
};

var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(SquadMemberCard));

/***/ }),

/***/ "./components/stats_page/GeneralStats/SquadMemberCardHeader.js":
/*!*********************************************************************!*\
  !*** ./components/stats_page/GeneralStats/SquadMemberCardHeader.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash.round */ "lodash.round");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util_Util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../util/Util */ "./util/Util.js");
/* harmony import */ var _PillBadge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PillBadge */ "./components/stats_page/GeneralStats/PillBadge.js");










 // import rankIcons from '../../../assets/images/images.js';



var SquadMemberItemHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SquadMemberItemHeader, _Component);

  function SquadMemberItemHeader() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SquadMemberItemHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SquadMemberItemHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "images", {
      Unranked: '/static/img/rank_icons/80px-Rank-Unranked.png',
      Beginner: '/static/img/rank_icons/80px-Rank-Beginner.png',
      Novice: '/static/img/rank_icons/80px-Rank-Novice.png',
      Experienced: '/static/img/rank_icons/80px-Rank-Experienced.png',
      Skilled: '/static/img/rank_icons/80px-Rank-Skilled.png',
      Specialist: '/static/img/rank_icons/80px-Rank-Specialist.png',
      Expert: '/static/img/rank_icons/80px-Rank-Expert.png',
      Survivor: '/static/img/rank_icons/80px-Rank-Survivor.png',
      LoneSurvivor: '/static/img/rank_icons/80px-Rank-LoneSurvivor.png'
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SquadMemberItemHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          playername = _this$props.playername,
          rank = _this$props.rank,
          gamesPlayed = _this$props.gamesPlayed,
          wins = _this$props.wins,
          top10s = _this$props.top10s;
      var rankIconSrc = this.images[Object(_util_Util__WEBPACK_IMPORTED_MODULE_10__["getRankTitle"])(rank)];
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-5  d-flex align-items-center mx-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "card-title text-truncate text-warning"
      }, playername)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-7  mx-0"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-flex col-xl-2 col-lg-2 col-sm-3 col-4 p-0 justify-content-end"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: rankIconSrc,
        alt: "Rank Icon",
        style: {
          width: '80px',
          height: '80px'
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "d-none d-sm-flex col-xl-5 col-lg-5 col-sm-4 col-4 align-items-end justify-content-center text-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12 p-0 d-flex align-items-end  justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, lodash_round__WEBPACK_IMPORTED_MODULE_9___default()(rank)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12  p-0 d-flex align-items-end  justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "text-light",
        style: {
          fontSize: '14px'
        }
      }, Object(_util_Util__WEBPACK_IMPORTED_MODULE_10__["getRankTitleLevel"])(rank))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-xl-5 col-lg-5 col-sm-5 col-8 px-1"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PillBadge__WEBPACK_IMPORTED_MODULE_11__["default"], {
        stat: gamesPlayed,
        singular: "Game",
        plural: "Games",
        color: "success"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PillBadge__WEBPACK_IMPORTED_MODULE_11__["default"], {
        stat: top10s,
        singular: "Top 10",
        plural: "Top 10s",
        color: "primary"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PillBadge__WEBPACK_IMPORTED_MODULE_11__["default"], {
        stat: wins,
        singular: "Win",
        plural: "Wins",
        color: "warning"
      })))));
    }
  }]);

  return SquadMemberItemHeader;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(SquadMemberItemHeader, "propTypes", {
  playername: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  rank: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  wins: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired,
  top10s: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (SquadMemberItemHeader);

/***/ }),

/***/ "./components/stats_page/GeneralStats/SquadMemberCardStat.js":
/*!*******************************************************************!*\
  !*** ./components/stats_page/GeneralStats/SquadMemberCardStat.js ***!
  \*******************************************************************/
/*! exports provided: SquadMemberStat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadMemberStat", function() { return SquadMemberStat; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);








var SquadMemberStat =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SquadMemberStat, _Component);

  function SquadMemberStat() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SquadMemberStat);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SquadMemberStat).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SquadMemberStat, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stat = _this$props.stat,
          value = _this$props.value;
      var bold = this.props.bold ? 'font-weight-bold' : '';
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-6 col-sm-3 mb-2"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", null, stat)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-6 col-sm-3 ".concat(bold, " mb-2")
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", null, value)));
    }
  }]);

  return SquadMemberStat;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(SquadMemberStat, "propTypes", {
  stat: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any.isRequired,
  bold: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
});

/* harmony default export */ __webpack_exports__["default"] = (SquadMemberStat);

/***/ }),

/***/ "./components/stats_page/SquadStats/PlayerPicker.js":
/*!**********************************************************!*\
  !*** ./components/stats_page/SquadStats/PlayerPicker.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash.difference */ "lodash.difference");
/* harmony import */ var lodash_difference__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_difference__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lodash.without */ "lodash.without");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash.concat */ "lodash.concat");
/* harmony import */ var lodash_concat__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash_concat__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lodash.omit */ "lodash.omit");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../redux/actions/togetherStatsActions */ "./redux/actions/togetherStatsActions.js");



















var PlayerPicker =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(PlayerPicker, _Component);

  function PlayerPicker() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PlayerPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(PlayerPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      inactiveColor: 'btn-secondary'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onButtonClick", function (ref, playerName) {
      var button = _this.refs[ref];

      if (button.classList.contains('selected')) {
        _this.deactivateButton(button, playerName); // Remove player from the squad in the store


        _this.props.setSquadMembers(lodash_without__WEBPACK_IMPORTED_MODULE_13___default()(_this.props.membersPicked, button.value));
      } else {
        if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(_this.props.membersColors).length >= 4) {
          return;
        } else {
          _this.activateButton(button, playerName); // Add player to the squad in the store


          _this.props.setSquadMembers(lodash_concat__WEBPACK_IMPORTED_MODULE_14___default()(_this.props.membersPicked, button.value));
        }
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "activateButton", function (button, playerName) {
      var color = _this.getColor();

      _this.addColor(color, playerName);

      button.classList.remove(_this.state.inactiveColor);
      button.classList.add("btn-".concat(color), 'selected', 'border', 'border-dark');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "deactivateButton", function (button, playerName) {
      var colorClass = button.classList.contains('btn-primary') ? 'btn-primary' : button.classList.contains('btn-danger') ? 'btn-danger' : button.classList.contains('btn-success') ? 'btn-success' : button.classList.contains('btn-info') ? 'btn-info' : '';

      _this.removeColor(playerName);

      button.classList.remove(colorClass, 'selected', 'border', 'border-dark');
      button.classList.add(_this.state.inactiveColor);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "renderButtons", function (players) {
      if (players) return players.map(function (playerName, index) {
        var button = _this.refs["button".concat(index)];

        var disabled = button ? !button.classList.contains('selected') && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(_this.props.membersColors).length === 4 ? 'disabled' : null : '';
        var color = _this.props.membersColors.hasOwnProperty(playerName) ? "btn-".concat(_this.props.membersColors[playerName], " border border-dark selected") : 'btn-secondary';
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          type: "button",
          key: index,
          value: playerName,
          ref: "button".concat(index),
          className: "btn btn-sm m-1 ".concat(color, " ").concat(disabled),
          onClick: disabled ? null : function () {
            return _this.onButtonClick("button".concat(index), playerName);
          }
        }, playerName);
      });else return '';
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(PlayerPicker, [{
    key: "getColor",
    // Returns the first unused color
    value: function getColor() {
      var colors = ['primary', 'danger', 'success', 'info'];

      var usedColors = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(this.props.membersColors);

      var diff = lodash_difference__WEBPACK_IMPORTED_MODULE_12___default()(colors, usedColors);

      return diff.length >= 1 ? diff[0] : '';
    } // Turns on and off a button color and adds/removes a player from the squad to search

  }, {
    key: "addColor",
    // Set the state of this color as true, which means it is in use
    value: function addColor(color, playerName) {
      this.props.setSquadMembersColors(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.membersColors, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])({}, playerName, color)));
    } // Set the state of this color as false, which means it is available

  }, {
    key: "removeColor",
    value: function removeColor(playerName) {
      this.props.setSquadMembersColors(lodash_omit__WEBPACK_IMPORTED_MODULE_15___default()(this.props.membersColors, playerName));
    } // Renders the buttons for the players

  }, {
    key: "render",
    value: function render() {
      var players = this.props.players;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "row mb-4 d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-md-10 col-12 text-center "
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h5", {
        className: "text-dark"
      }, "Pick up to 4 squad members to look for their stats together:"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("br", null), this.renderButtons(players))));
    }
  }]);

  return PlayerPicker;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(PlayerPicker, "propTypes", {
  players: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    players: state.playerSeasons.players,
    membersPicked: state.squad.membersPicked,
    membersColors: state.squad.membersColors
  };
};

var mapDispatchToProps = {
  setSquadMembers: _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_17__["setSquadMembers"],
  setSquadMembersColors: _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_17__["setSquadMembersColors"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["connect"])(mapStateToProps, mapDispatchToProps)(PlayerPicker));

/***/ }),

/***/ "./components/stats_page/SquadStats/SquadMemberRandomFact.js":
/*!*******************************************************************!*\
  !*** ./components/stats_page/SquadStats/SquadMemberRandomFact.js ***!
  \*******************************************************************/
/*! exports provided: SquadMemberRandomFact, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadMemberRandomFact", function() { return SquadMemberRandomFact; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.round */ "lodash.round");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_10__);











var SquadMemberRandomFact =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SquadMemberRandomFact, _Component);

  function SquadMemberRandomFact() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SquadMemberRandomFact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SquadMemberRandomFact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getFactText", function (stat) {
      switch (stat) {
        case 'timeSurvived':
          return {
            actionMost: 'has <span class="text-info">survived</span> for',
            actionAvg: 'has <span class="text-info">survived</span> for an average of',
            unitMost: ', the longest of the whole squad.',
            unitAvg: ' each round.'
          };

        case 'alive':
          return {
            actionAvg: 'has survived <span class="text-info"> all the way</span> to the end to enjoy his <span class="text-warning">chicken dinner</span>',
            unitAvg: 'times'
          };

        case 'zoneDeaths':
          return {
            actionMost: 'has been killed by the <span class="text-info">zone</span>',
            unitMost: 'times, more than any other squad member.'
          };

        case 'teamKills':
          return {
            actionMost: 'has commited',
            unitMost: '<span class="text-danger">team kills</span>, more than any other squad member. Shame on him.'
          };

        case 'headshotKills':
          return {
            actionMost: 'has shot ',
            unitMost: 'players in the <span class="text-info">face</span>!. Glorious!'
          };

        case 'roadKills':
          return {
            actionMost: 'has <span class="text-success">ran over</span>',
            unitMost: 'players.<br>Awesome!'
          };

        case 'revives':
          return {
            actionMost: 'has <span class="text-info">revived</span> his teammates',
            unitMost: 'times.<br>Hero!'
          };

        case 'swimDistance':
          return {
            actionMost: 'has <span class="text-info">swum</span> over',
            unitMost: 'meters.<br>Pretty impressive considering he was carrying over 50kg of guns, explosives and energy drinks.'
          };

        case 'walkDistance':
          return {
            actionMost: 'has <span class="text-info">walked</span> over',
            actionAvg: 'walks around',
            unitMost: 'kilometers.',
            unitAvg: '<span class="text-info">kilometers</span> per round.'
          };

        case 'vehicleDestroys':
          return {
            actionMost: 'has <span class="text-success">destroyed</span>',
            unitMost: 'vehicles.<br>Nice!'
          };

        case 'weaponsAcquired':
          return {
            actionMost: 'has picked up',
            actionAvg: 'has picked up an average of',
            unitMost: "<span class=\"text-success\">weapons</span>.",
            unitAvg: '<span class="text-success">weapons</span> per match. Yep, running out of random stats here.'
          };

        default:
          return null;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "calculateRandomFact", function () {
      var factsAvailable = ['timeSurvived', 'survived', 'zoneDeaths', 'teamKills', 'roadKills', 'revives', 'swimDistance', 'walkDistance', 'vehicleDestroys', 'weaponsAcquired'];

      var facts = _this.props.stats.badges.filter(function (badge) {
        return factsAvailable.includes(badge.stat);
      });

      var fact = facts.length > 0 ? facts[Math.floor(Math.random() * (facts.length - 1))] : false;
      if (!fact) return _this.calculateRandomAvgFact();else {
        var factText = _this.getFactText(fact.stat);

        var factValue = fact.stat === 'walkDistance' ? lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(fact.value / 1000, 1) : fact.stat === 'timeSurvived' ? _this.convertSeconds(lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(fact.value, 0)) : fact.value % 1 === 0 ? fact.value : lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(fact.value, 1);
        return "".concat(factText.actionMost, " ").concat(factValue, " ").concat(factText.unitMost);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "calculateRandomAvgFact", function () {
      var factsAvailable = ['alive', 'timeSurvived', 'walkDistance', 'weaponsAcquired'];
      var _this$props = _this.props,
          stats = _this$props.stats,
          rounds = _this$props.rounds;
      var facts = factsAvailable.filter(function (fact) {
        return _this.props.stats[fact] > 0;
      });
      var fact = facts[Math.floor(Math.random() * (facts.length - 1))];
      var factValue = fact === 'walkDistance' ? lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(stats[fact] / (1000 * rounds), 1) : fact === 'timeSurvived' ? _this.convertSeconds(lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(stats[fact] / rounds, 0)) : fact === 'alive' ? stats[fact] : lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(stats[fact] / rounds, 0);

      var factText = _this.getFactText(fact);

      return "".concat(factText.actionAvg, " ").concat(factValue, " ").concat(factText.unitAvg);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "convertSeconds", function (sec) {
      var hrs = Math.floor(sec / 3600);
      var min = Math.floor((sec - hrs * 3600) / 60);
      var seconds = sec - hrs * 3600 - min * 60;
      seconds = Math.round(seconds * 100) / 100;
      var result = hrs === 0 ? '' : hrs === 1 ? "".concat(hrs, " hour") : "".concat(hrs, " hours");
      result += (hrs > 0 ? ', ' : '') + (min === 1 ? "".concat(min, " minute") : "".concat(min, " minutes"));
      result += (hrs === 0 && min === 0 ? ' ' : ' and ') + (seconds === 1 ? "".concat(seconds, " second") : "".concat(seconds, " seconds"));
      return result;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getRandomFact", function () {
      var chance = Math.floor(Math.random() * 100);
      if (chance < 60) return _this.calculateRandomFact();else return _this.calculateRandomAvgFact();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SquadMemberRandomFact, [{
    key: "render",
    value: function render() {
      var randomFact = this.getRandomFact();
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-10"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h5", {
        className: "mb-3"
      }, "Random fact: "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "lead"
      }, ' ', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "text-warning"
      }, "".concat(this.props.player, " ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: randomFact
        }
      }))));
    }
  }]);

  return SquadMemberRandomFact;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(SquadMemberRandomFact, "propTypes", {
  player: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  stats: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  rounds: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(SquadMemberRandomFact));

/***/ }),

/***/ "./components/stats_page/SquadStats/SquadMemberSelector.js":
/*!*****************************************************************!*\
  !*** ./components/stats_page/SquadStats/SquadMemberSelector.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.isempty */ "lodash.isempty");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _GeneralStats_SelectorPill__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../GeneralStats/SelectorPill */ "./components/stats_page/GeneralStats/SelectorPill.js");
/* harmony import */ var _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../redux/actions/togetherStatsActions */ "./redux/actions/togetherStatsActions.js");














var SquadMemberSelector =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SquadMemberSelector, _Component);

  function SquadMemberSelector() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SquadMemberSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SquadMemberSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onButtonClick", function (player) {
      _this.props.setPlayer(player);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderPlayerButtons", function () {
      var _this$props = _this.props,
          squad = _this$props.squad,
          selectedPlayer = _this$props.selectedPlayer,
          selectPlayer = _this$props.selectPlayer;

      if (!lodash_isempty__WEBPACK_IMPORTED_MODULE_10___default()(squad)) {
        if (selectedPlayer === '') _this.props.selectPlayer(squad[0]);
        return squad.map(function (player, index) {
          var selected = player === selectedPlayer;
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_GeneralStats_SelectorPill__WEBPACK_IMPORTED_MODULE_11__["default"], {
            key: player,
            text: player,
            rounded: ['top'],
            activeColor: "dark",
            inactiveColor: "secondary",
            border: index !== 0 && index !== squad.length - 1 ? 'border-dark border-top border-bottom' : 'border border-dark',
            onClick: function onClick() {
              return selectPlayer(player);
            },
            selected: selected
          });
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SquadMemberSelector, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex justify-content-center text-muted mt-3"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "nav nav-pills mt-2 nav-fill nav-justified"
      }, this.renderPlayerButtons())));
    }
  }]);

  return SquadMemberSelector;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(SquadMemberSelector, "propTypes", {
  squad: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  selectedPlayer: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  selectPlayer: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    squad: state.squad.membersFetched,
    selectedPlayer: state.squad.selectedPlayer
  };
};

var mapDispatchToProps = {
  selectPlayer: _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_12__["selectPlayer"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(SquadMemberSelector));

/***/ }),

/***/ "./components/stats_page/SquadStats/SquadMemberStats.js":
/*!**************************************************************!*\
  !*** ./components/stats_page/SquadStats/SquadMemberStats.js ***!
  \**************************************************************/
/*! exports provided: SquadMemberStats, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadMemberStats", function() { return SquadMemberStats; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash.isempty */ "lodash.isempty");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.round */ "lodash.round");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_Separator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/Separator */ "./components/common/Separator.js");
/* harmony import */ var _SquadMemberStatsHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SquadMemberStatsHeader */ "./components/stats_page/SquadStats/SquadMemberStatsHeader.js");
/* harmony import */ var _StatRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./StatRow */ "./components/stats_page/SquadStats/StatRow.js");
/* harmony import */ var _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions/togetherStatsActions */ "./redux/actions/togetherStatsActions.js");
/* harmony import */ var _SquadMemberRandomFact__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SquadMemberRandomFact */ "./components/stats_page/SquadStats/SquadMemberRandomFact.js");
















var SquadMemberStats =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SquadMemberStats, _Component);

  function SquadMemberStats() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SquadMemberStats);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SquadMemberStats).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SquadMemberStats, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          player = _this$props.player,
          stats = _this$props.stats,
          mode = _this$props.mode,
          perspective = _this$props.perspective,
          squad = _this$props.squad;
      var gameMode = mode + perspective;

      if (lodash_isempty__WEBPACK_IMPORTED_MODULE_9___default()(stats)) {
        return '';
      }

      if (!squad.includes(player)) {
        this.props.selectPlayer(squad[0]);
        player = squad[0];
      }

      var badges = stats[gameMode].stats[player].badges;
      var playerStats = stats[gameMode].stats[player];
      var squadStats = stats[gameMode].stats.teamTotal;
      var gamesPlayed = stats[gameMode].gamesPlayed;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row  d-flex justify-content-center text-light "
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-lg-8 col-md-10 col-12 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "bg-dark text-light border-secondary stat-card mb-5 rounded-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SquadMemberStatsHeader__WEBPACK_IMPORTED_MODULE_12__["default"], {
        player: player,
        badges: badges
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_Separator__WEBPACK_IMPORTED_MODULE_11__["default"], {
        color: "secondary",
        length: 10,
        margin: 4
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_StatRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: "Kills",
        playerStat: playerStats.kills,
        squadStat: squadStats.kills,
        type: "total"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_StatRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: "K/D",
        playerStat: lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(playerStats.kills / gamesPlayed, 2),
        squadStat: lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(squadStats.kills / (gamesPlayed * squad.length), 2),
        type: "avg"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_StatRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: "Total Damage",
        playerStat: lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(playerStats.damageDealt, 0),
        squadStat: lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(squadStats.damageDealt, 0),
        type: "total"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_StatRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: "Avg. Damage",
        playerStat: lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(playerStats.damageDealt / gamesPlayed, 0),
        squadStat: lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(squadStats.damageDealt / (gamesPlayed * squad.length), 0),
        type: "avg"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_StatRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: "% Headshot Kills",
        playerStat: lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(playerStats.headshotKills / playerStats.kills * 100, 1),
        squadStat: lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(squadStats.headshotKills / squadStats.kills * 100, 1),
        type: "avg",
        unit: "%"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_StatRow__WEBPACK_IMPORTED_MODULE_13__["default"], {
        label: "Longest Kill",
        playerStat: lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(playerStats.longestKill, 0),
        squadStat: lodash_round__WEBPACK_IMPORTED_MODULE_10___default()(squadStats.longestKill, 0),
        type: "distance",
        unit: "m",
        nokills: playerStats.kills === 0
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_Separator__WEBPACK_IMPORTED_MODULE_11__["default"], {
        color: "secondary",
        length: 10,
        margin: 4
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_SquadMemberRandomFact__WEBPACK_IMPORTED_MODULE_15__["SquadMemberRandomFact"], {
        player: player,
        stats: playerStats,
        rounds: gamesPlayed
      })))))));
    }
  }]);

  return SquadMemberStats;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(SquadMemberStats, "propTypes", {
  player: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  stats: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  perspective: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired,
  squad: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    player: state.squad.selectedPlayer,
    stats: state.squad.stats,
    mode: state.squad.mode,
    perspective: state.squad.perspective,
    squad: state.squad.membersFetched
  };
};

var mapDispatchToProps = {
  selectPlayer: _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_14__["selectPlayer"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(SquadMemberStats));

/***/ }),

/***/ "./components/stats_page/SquadStats/SquadMemberStatsHeader.js":
/*!********************************************************************!*\
  !*** ./components/stats_page/SquadStats/SquadMemberStatsHeader.js ***!
  \********************************************************************/
/*! exports provided: SquadMemberStatsHeader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SquadMemberStatsHeader", function() { return SquadMemberStatsHeader; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);











var SquadMemberStatsHeader =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(SquadMemberStatsHeader, _Component);

  function SquadMemberStatsHeader() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SquadMemberStatsHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SquadMemberStatsHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      badgeColors: {
        assists: 'badge-primary',
        damageDealt: 'badge-dark border border-warning',
        headshotKills: 'badge-warning',
        kills: 'badge-danger',
        longestKill: 'badge-success',
        teamKills: 'badge-dark border border-danger text-light',
        timeSurvived: 'badge-info',
        vehicleDestroys: 'badge-dark border border-success'
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "renderBadges", function () {
      var badges = _this.props.badges.filter(function (badge) {
        return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_this.state.badgeColors).includes(badge.stat);
      });

      return badges.map(function (badge) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          "data-tip": true,
          "data-for": badge.stat,
          key: badge.stat,
          className: "badge ".concat(_this.state.badgeColors[badge.stat], " active my-badge m-1")
        }, badge.description);
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SquadMemberStatsHeader, [{
    key: "render",
    value: function render() {
      var player = this.props.player;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row d-flex align-items-center justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-12 col-sm-6 justify-content-sm-center justify-content-start"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "card-title text-warning "
      }, player)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-12 col-sm-6 d-flex flex-wrap justify-content-center"
      }, this.renderBadges()));
    }
  }]);

  return SquadMemberStatsHeader;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(SquadMemberStatsHeader, "propTypes", {
  player: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  badges: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(SquadMemberStatsHeader));

/***/ }),

/***/ "./components/stats_page/SquadStats/SquadSearch.js":
/*!*********************************************************!*\
  !*** ./components/stats_page/SquadStats/SquadSearch.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.isempty */ "lodash.isempty");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash.isequal */ "lodash.isequal");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lodash_sortby__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash.sortby */ "lodash.sortby");
/* harmony import */ var lodash_sortby__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_sortby__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_actions_playerSeasonsActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../redux/actions/playerSeasonsActions */ "./redux/actions/playerSeasonsActions.js");
/* harmony import */ var _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../redux/actions/togetherStatsActions */ "./redux/actions/togetherStatsActions.js");
















var SquadSearch =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SquadSearch, _Component);

  function SquadSearch() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SquadSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SquadSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "searchSquadStats", function () {
      _this.props.membersPicked.sort();

      _this.props.setSquadMembersFetched(_this.props.membersPicked);

      _this.props.getSquadStats(_this.props.membersPicked.join(','));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "refreshSquadStats", function () {
      var membersFetchedArray = _this.props.membersFetched.join(',');

      _this.props.getPlayerSeasons(membersFetchedArray, _this.props.season, true);

      _this.props.getSquadStats(membersFetchedArray);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderSearchButton", function () {
      var searchButton = '';

      if (_this.props.membersPicked && _this.props.membersPicked.length >= 2 && (lodash_isempty__WEBPACK_IMPORTED_MODULE_10___default()(_this.props.stats) || !lodash_isequal__WEBPACK_IMPORTED_MODULE_11___default()(lodash_sortby__WEBPACK_IMPORTED_MODULE_12___default()(_this.props.membersPicked), lodash_sortby__WEBPACK_IMPORTED_MODULE_12___default()(_this.props.membersFetched)))) {
        searchButton = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item bg-warning rounded-left rounded-right "
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "btn btn-warning border border-dark rounded w-100",
          onClick: _this.searchSquadStats
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-search"
        }), " Search"));
      } else {
        searchButton = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item  bg-secondary text-light rounded-left rounded-right disabled"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          disabled: true,
          className: "btn btn-secondary disabled w-100 "
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-search"
        }), " Search"));
      }

      return searchButton;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderReloadButton", function () {
      var reloadButton = '';

      if (!lodash_isempty__WEBPACK_IMPORTED_MODULE_10___default()(_this.props.stats) && lodash_isequal__WEBPACK_IMPORTED_MODULE_11___default()(lodash_sortby__WEBPACK_IMPORTED_MODULE_12___default()(_this.props.membersPicked), lodash_sortby__WEBPACK_IMPORTED_MODULE_12___default()(_this.props.membersFetched))) {
        reloadButton = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item bg-warning text-light rounded-right"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          className: "btn btn-warning w-100 border border-dark",
          onClick: _this.refreshSquadStats
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-redo-alt"
        }), " Refresh"));
      } else {
        reloadButton = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          className: "nav-item bg-secondary text-light rounded-right disabled"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
          disabled: true,
          className: "btn btn-secondary disabled w-100 "
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "fas fa-redo-alt"
        }), " Refresh"));
      }

      return reloadButton;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SquadSearch, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex justify-content-center mb-2 mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-md-6 col-11"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "nav nav-pills mt-2 nav-fill nav-justified"
      }, this.renderSearchButton())));
    }
  }]);

  return SquadSearch;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(SquadSearch, "propTypes", {
  membersPicked: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  membersFetched: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  stats: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  season: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    membersPicked: state.squad.membersPicked,
    membersFetched: state.squad.membersFetched,
    stats: state.squad.stats,
    season: state.playerSeasons.season
  };
};

var mapDispatchToProps = {
  getSquadStats: _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_14__["getSquadStats"],
  setSquadMembersFetched: _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_14__["setSquadMembersFetched"],
  selectPlayer: _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_14__["selectPlayer"],
  getPlayerSeasons: _redux_actions_playerSeasonsActions__WEBPACK_IMPORTED_MODULE_13__["getPlayerSeasons"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(SquadSearch));

/***/ }),

/***/ "./components/stats_page/SquadStats/SquadStatsFilter.js":
/*!**************************************************************!*\
  !*** ./components/stats_page/SquadStats/SquadStatsFilter.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _GeneralStats_SelectorPill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../GeneralStats/SelectorPill */ "./components/stats_page/GeneralStats/SelectorPill.js");
/* harmony import */ var _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../redux/actions/togetherStatsActions */ "./redux/actions/togetherStatsActions.js");













var StatsFilter =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(StatsFilter, _Component);

  function StatsFilter() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StatsFilter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StatsFilter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeGameMode", function (mode) {
      return _this.props.setSquadGameMode(mode);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changePerspective", function (perspective) {
      return _this.props.setSquadPerspective(perspective);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderDuoButton", function () {
      var mode = _this.props.mode;

      if (_this.props.squadFetched.length === 2) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_GeneralStats_SelectorPill__WEBPACK_IMPORTED_MODULE_10__["default"], {
          selected: mode === 'duo' ? true : false,
          text: "Duo",
          rounded: ['left'],
          activeColor: "warning",
          inactiveColor: "secondary",
          onClick: function onClick() {
            return _this.changeGameMode('duo');
          },
          disabled: _this.props.squadFetched.length > 2
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_GeneralStats_SelectorPill__WEBPACK_IMPORTED_MODULE_10__["default"], {
          text: "Duo",
          rounded: ['left'],
          disabled: true
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StatsFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          mode = _this$props.mode,
          perspective = _this$props.perspective;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row mb-5 d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-8 col-md-10 col-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "nav nav-pills mt-2 nav-fill nav-justified border border-dark rounded"
      }, this.renderDuoButton(), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_GeneralStats_SelectorPill__WEBPACK_IMPORTED_MODULE_10__["default"], {
        selected: mode === 'squad' ? true : false,
        text: "Squad",
        rounded: ['right'],
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changeGameMode('squad');
        }
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "nav nav-pills mt-2 nav-fill nav-justified border border-dark rounded"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_GeneralStats_SelectorPill__WEBPACK_IMPORTED_MODULE_10__["default"], {
        selected: perspective === 'FPP' ? true : false,
        text: "FPP",
        rounded: ['left'],
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changePerspective('FPP');
        }
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_GeneralStats_SelectorPill__WEBPACK_IMPORTED_MODULE_10__["default"], {
        selected: perspective === '' ? true : false,
        text: "TPP",
        rounded: ['right'],
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changePerspective('');
        }
      }))))));
    }
  }]);

  return StatsFilter;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(StatsFilter, "propTypes", {
  squadFetched: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  setSquadGameMode: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  perspective: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    squadFetched: state.squad.membersFetched,
    mode: state.squad.mode,
    perspective: state.squad.perspective
  };
};

var mapDispatchToProps = {
  setSquadGameMode: _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_11__["setSquadGameMode"],
  setSquadPerspective: _redux_actions_togetherStatsActions__WEBPACK_IMPORTED_MODULE_11__["setSquadPerspective"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(StatsFilter));

/***/ }),

/***/ "./components/stats_page/SquadStats/SquadStatsSummary.js":
/*!***************************************************************!*\
  !*** ./components/stats_page/SquadStats/SquadStatsSummary.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.isempty */ "lodash.isempty");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_10__);












var SquadStatsSummary =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SquadStatsSummary, _Component);

  function SquadStatsSummary() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SquadStatsSummary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SquadStatsSummary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "formatNames", function () {
      var text = '';
      var squad = _this.props.squad;

      if (!lodash_isempty__WEBPACK_IMPORTED_MODULE_10___default()(squad)) {
        text = squad.map(function (playerName, index) {
          if (index === squad.length - 1) {
            return '& ' + playerName;
          } else if (index === squad.length - 2) {
            return playerName + ' ';
          } else {
            return playerName + ', ';
          }
        });
      }

      return text;
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SquadStatsSummary, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stats = _this$props.stats,
          mode = _this$props.mode,
          perspective = _this$props.perspective;
      var gameMode = mode + perspective;
      var matchesInfo,
          topTenInfo,
          winInfo,
          modeInfo = '';

      switch (gameMode) {
        case 'duo':
          modeInfo = 'Duo TPP';
          break;

        case 'duoFPP':
          modeInfo = 'Duo FPP';
          break;

        case 'squad':
          modeInfo = 'Squad TPP';
          break;

        case 'squadFPP':
          modeInfo = 'Squad FPP';
          break;

        default:
          modeInfo = '';
      } // A little formating to handle plurals


      if (!lodash_isempty__WEBPACK_IMPORTED_MODULE_10___default()(stats)) {
        matchesInfo = stats[gameMode].gamesPlayed === 1 ? "Played ".concat(stats[gameMode].gamesPlayed, " ").concat(modeInfo, " Match Together") : "Played ".concat(stats[gameMode].gamesPlayed, " ").concat(modeInfo, " Matches Together");
        topTenInfo = stats[gameMode].top10s === 1 ? "Reached Top Ten ".concat(stats[gameMode].top10s, " Time") : "Reached Top Ten ".concat(stats[gameMode].top10s, " Times");
        winInfo = stats[gameMode].wins === 1 ? "Earned ".concat(stats[gameMode].wins, " Chicken Dinner") : "Earned ".concat(stats[gameMode].wins, " Chicken Dinners");
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-8 col-md-10 col-12"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "text-dark text-center"
      }, "In the past 14 days,"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "text-dark text-center mb-4"
      }, this.formatNames(), " have: "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "list-group  "
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "list-group-item bg-dark text-light border border-dark"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-users"
      }), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, matchesInfo))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "list-group-item bg-dark text-light border border-dark"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-medal"
      }), " ", topTenInfo)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "list-group-item bg-warning border border-dark"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "text-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fas fa-trophy"
      }), " ", winInfo)))));
    }
  }]);

  return SquadStatsSummary;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(SquadStatsSummary, "propTypes", {
  squad: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,
  stats: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  perspective: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    stats: state.squad.stats,
    squad: state.squad.membersFetched,
    mode: state.squad.mode,
    perspective: state.squad.perspective
  };
};

var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(SquadStatsSummary));

/***/ }),

/***/ "./components/stats_page/SquadStats/StatRow.js":
/*!*****************************************************!*\
  !*** ./components/stats_page/SquadStats/StatRow.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.round */ "lodash.round");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_1__);



function StatRow(props) {
  var playerStat = props.playerStat,
      squadStat = props.squadStat,
      label = props.label,
      type = props.type,
      unit = props.unit,
      nokills = props.nokills;
  if (isNaN(playerStat)) playerStat = 0;
  var info = '';

  if (squadStat === 0) {}

  if (type === 'total') {
    // Show the stat description as the % of the Squad's Total
    var stat = lodash_round__WEBPACK_IMPORTED_MODULE_1___default()(playerStat / squadStat * 100, 0);

    info = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-warning"
    }, " ", stat, "%"), " of the Squad's total ", label);
  } else {
    var diff = playerStat - squadStat;
    var color = '';
    var direction = '';

    if (type === 'avg') {
      // Show the stat description as the % above or below the Squad's Average
      var percentage = Math.abs(lodash_round__WEBPACK_IMPORTED_MODULE_1___default()(diff / squadStat * 100, 0));
      if (isNaN(percentage)) percentage = 0;

      if (diff > 0) {
        direction = 'above';
        color = 'text-success';
      } else {
        direction = 'below';
        color = 'text-danger';
      }

      info = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: color
      }, percentage, "%"), " ", direction, " the Squad's average");
    } else if (type === 'distance') {
      //Means player hasn't made a Kill
      if (nokills) {
        info = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "No Kills");
      } // Show the stat description as the difference in meters
      else if (diff === 0) {
          info = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, " in the Squad");
        } else {
          info = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "text-danger"
          }, Math.abs(diff)), " meters shorter than the ", label);
        }
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-3 d-flex justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-4 col-sm-3 col-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "font-weight-bold"
  }, label)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-2 col-sm-2 col-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, playerStat, " ", unit)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6 col-sm-7 col-5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, info)));
}

/* harmony default export */ __webpack_exports__["default"] = (StatRow);

/***/ }),

/***/ "./components/stats_page/SquadStats/TogetherStats.js":
/*!***********************************************************!*\
  !*** ./components/stats_page/SquadStats/TogetherStats.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.isempty */ "lodash.isempty");
/* harmony import */ var lodash_isempty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isempty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _common_Separator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/Separator */ "./components/common/Separator.js");
/* harmony import */ var _common_Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/Error */ "./components/common/Error.js");
/* harmony import */ var _PlayerPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PlayerPicker */ "./components/stats_page/SquadStats/PlayerPicker.js");
/* harmony import */ var _SquadSearch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SquadSearch */ "./components/stats_page/SquadStats/SquadSearch.js");
/* harmony import */ var _SquadStatsFilter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SquadStatsFilter */ "./components/stats_page/SquadStats/SquadStatsFilter.js");
/* harmony import */ var _SquadStatsSummary__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SquadStatsSummary */ "./components/stats_page/SquadStats/SquadStatsSummary.js");
/* harmony import */ var _SquadMemberStats__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SquadMemberStats */ "./components/stats_page/SquadStats/SquadMemberStats.js");
/* harmony import */ var _SquadMemberSelector__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./SquadMemberSelector */ "./components/stats_page/SquadStats/SquadMemberSelector.js");
/* harmony import */ var _common_Spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/Spinner */ "./components/common/Spinner.js");





















var TogetherStats =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TogetherStats, _Component);

  function TogetherStats() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TogetherStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TogetherStats)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderSquadStats", function () {
      var _this$props = _this.props,
          stats = _this$props.stats,
          mode = _this$props.mode,
          perspective = _this$props.perspective;
      var gameMode = mode + perspective;
      return lodash_isempty__WEBPACK_IMPORTED_MODULE_10___default()(stats) ? null : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadStatsFilter__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadStatsSummary__WEBPACK_IMPORTED_MODULE_16__["default"], null), stats[gameMode].gamesPlayed === 0 ? '' : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row  d-flex justify-content-center text-light mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-8 col-md-10 col-12 text-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberSelector__WEBPACK_IMPORTED_MODULE_18__["default"], null))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadMemberStats__WEBPACK_IMPORTED_MODULE_17__["default"], null)));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TogetherStats, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          loading = _this$props2.loading,
          error = _this$props2.error;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container light-grey rounded"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_PlayerPicker__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadSearch__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Separator__WEBPACK_IMPORTED_MODULE_11__["default"], {
        color: "secondary",
        length: 10,
        margin: 4
      }), loading ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Spinner__WEBPACK_IMPORTED_MODULE_19__["default"], null) : error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Error__WEBPACK_IMPORTED_MODULE_12__["default"], {
        error: error,
        message: "Oops! Something went wrong while fetching your squad's matches, please try again later"
      }) : this.renderSquadStats());
    }
  }]);

  return TogetherStats;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(TogetherStats, "propTypes", {
  stats: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
  mode: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired,
  perspective: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string.isRequired
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.squad.loading,
    error: state.squad.error,
    stats: state.squad.stats,
    mode: state.squad.mode,
    perspective: state.squad.perspective
  };
};

var mapDispatchToProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(TogetherStats));

/***/ }),

/***/ "./components/stats_page/index.js":
/*!****************************************!*\
  !*** ./components/stats_page/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_Separator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/Separator */ "./components/common/Separator.js");
/* harmony import */ var _common_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/Spinner */ "./components/common/Spinner.js");
/* harmony import */ var _common_Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/Error */ "./components/common/Error.js");
/* harmony import */ var _AloneTogetherPicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AloneTogetherPicker */ "./components/stats_page/AloneTogetherPicker.js");
/* harmony import */ var _GeneralStats_IndividualStats__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GeneralStats/IndividualStats */ "./components/stats_page/GeneralStats/IndividualStats.js");
/* harmony import */ var _SquadStats_TogetherStats__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SquadStats/TogetherStats */ "./components/stats_page/SquadStats/TogetherStats.js");
/* harmony import */ var _redux_actions_playerSeasonsActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/actions/playerSeasonsActions */ "./redux/actions/playerSeasonsActions.js");
/* harmony import */ var _util_Util__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../util/Util */ "./util/Util.js");








/* LIBRARIES */


 // import { Spring } from 'react-spring/renderprops';

/* COMPONENTS */







/* REDUX ACTIONS */


/* HELPER FUNCTIONS */



var StatsDashboard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(StatsDashboard, _Component);

  function StatsDashboard() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StatsDashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(StatsDashboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      alone: true,
      squad: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fetchPlayerSeasons", function () {
      var squadMates = Object(_util_Util__WEBPACK_IMPORTED_MODULE_17__["sanitizeString"])(_this.props.squad).split(',').filter(function (el) {
        return el != null;
      }).join(',');

      _this.setState({
        squad: squadMates
      });

      _this.props.getPlayerSeasons(squadMates, _this.props.season);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "setAlone", function (status) {
      _this.setState({
        alone: status
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderStats", function () {
      var index = _this.state.alone ? 0 : 1;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_swipeable_views__WEBPACK_IMPORTED_MODULE_9___default.a, {
        index: index
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_GeneralStats_IndividualStats__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_SquadStats_TogetherStats__WEBPACK_IMPORTED_MODULE_15__["default"], null));
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StatsDashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchPlayerSeasons();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.squad !== this.state.squad) this.fetchPlayerSeasons();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loading = _this$props.loading,
          error = _this$props.error;
      var alone = this.state.alone;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "squadStats"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-12 my-4"
      }, loading ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"], null) : error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Error__WEBPACK_IMPORTED_MODULE_12__["default"], {
        error: error,
        message: "Oops! Something went wrong while fetching your squad's data, please try again later",
        retry: this.fetchPlayerSeasons
      }) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "display-3 text-center pubg-font text-black mb-4"
      }, "Your Squad this season"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_AloneTogetherPicker__WEBPACK_IMPORTED_MODULE_13__["default"], {
        setAlone: this.setAlone,
        alone: alone
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_common_Separator__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: "dark",
        length: "10",
        marginTop: "1",
        marginBottom: "3"
      }), this.renderStats())))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newSquadMates = Object(_util_Util__WEBPACK_IMPORTED_MODULE_17__["sanitizeString"])(nextProps.squad).split(',').filter(function (el) {
        return el != null;
      }).join(',');

      if (newSquadMates !== prevState.squad) {
        return {
          squad: newSquadMates
        };
      }

      return null;
    }
  }]);

  return StatsDashboard;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    players: state.playerSeasons.players,
    squadStats: state.playerSeasons.stats,
    loading: state.playerSeasons.loading,
    season: state.playerSeasons.season,
    error: state.playerSeasons.error
  };
};

var mapDispatchToProps = {
  getPlayerSeasons: _redux_actions_playerSeasonsActions__WEBPACK_IMPORTED_MODULE_16__["getPlayerSeasons"],
  getCurrentSeason: _redux_actions_playerSeasonsActions__WEBPACK_IMPORTED_MODULE_16__["getCurrentSeason"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(StatsDashboard));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/stats.js":
/*!************************!*\
  !*** ./pages/stats.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stats; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_stats_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/stats_page */ "./components/stats_page/index.js");











var stats =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(stats, _Component);

  function stats() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, stats);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(stats).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(stats, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_stats_page__WEBPACK_IMPORTED_MODULE_9__["default"], {
        squad: this.props.squad,
        test: "test"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, res = _ref.res;
                return _context.abrupt("return", {
                  squad: query.squad
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return stats;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./redux/actions/playerSeasonsActions.js":
/*!***********************************************!*\
  !*** ./redux/actions/playerSeasonsActions.js ***!
  \***********************************************/
/*! exports provided: getPlayerSeasons, setGameMode, setPerspective, getCurrentSeason, setStatsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlayerSeasons", function() { return getPlayerSeasons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGameMode", function() { return setGameMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPerspective", function() { return setPerspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentSeason", function() { return getCurrentSeason; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatsLoading", function() { return setStatsLoading; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./redux/actions/types.js");

 // Get the individual info of each of the squad members

var getPlayerSeasons = function getPlayerSeasons(squad, seasonid, refresh) {
  return function (dispatch, getState) {
    dispatch(setStatsLoading());

    if (squad.split(',').length < 2) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_ERROR"],
        payload: 'InsufficientPlayers'
      });
    } else {
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/stats', {
        params: {
          squad: squad,
          seasonid: seasonid,
          refresh: refresh
        }
      }).then(function (res) {
        var payload = {
          stats: res.data,
          players: res.data.map(function (p) {
            return p.relationships.player.attributes.name;
          }),
          season: res.data[0].relationships.season.id
        };
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_1__["GET_PLAYER_SEASONS"],
          payload: payload
        });
      })["catch"](function (err) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_ERROR"],
          payload: err.response.data
        });
      });
    }
  };
};
var setGameMode = function setGameMode(mode) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_GAME_MODE"],
      payload: mode
    });
  };
};
var setPerspective = function setPerspective(perspective) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_PERSPECTIVE"],
      payload: perspective
    });
  };
};
var getCurrentSeason = function getCurrentSeason() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/seasons/current').then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_SEASON"],
        payload: res.data.id
      });
    })["catch"](function (err) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_SEASON"],
        payload: ''
      });
    });
  };
};
var setStatsLoading = function setStatsLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOADING_STATS"]
  };
};

/***/ }),

/***/ "./redux/actions/togetherStatsActions.js":
/*!***********************************************!*\
  !*** ./redux/actions/togetherStatsActions.js ***!
  \***********************************************/
/*! exports provided: setSquadMembers, setSquadMembersFetched, setSquadMembersColors, setSquadGameMode, setSquadPerspective, selectPlayer, setSquadStatsLoading, getSquadStats, setStatsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSquadMembers", function() { return setSquadMembers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSquadMembersFetched", function() { return setSquadMembersFetched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSquadMembersColors", function() { return setSquadMembersColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSquadGameMode", function() { return setSquadGameMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSquadPerspective", function() { return setSquadPerspective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPlayer", function() { return selectPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSquadStatsLoading", function() { return setSquadStatsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSquadStats", function() { return getSquadStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStatsLoading", function() { return setStatsLoading; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Util */ "./util/Util.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./redux/actions/types.js");



var setSquadMembers = function setSquadMembers(squadMembersArray) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_SQUAD_MEMBERS"],
    payload: squadMembersArray
  };
};
var setSquadMembersFetched = function setSquadMembersFetched(squadMembersArray) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_SQUAD_MEMBERS_FETCHED"],
    payload: squadMembersArray
  };
};
var setSquadMembersColors = function setSquadMembersColors(squadMembersColors) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_SQUAD_MEMBERS_COLORS"],
    payload: squadMembersColors
  };
};
var setSquadGameMode = function setSquadGameMode(mode) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_SQUAD_GAME_MODE"],
      payload: mode
    });
  };
};
var setSquadPerspective = function setSquadPerspective(perspective) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_SQUAD_PERSPECTIVE"],
      payload: perspective
    });
  };
};
var selectPlayer = function selectPlayer(player) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["SELECT_PLAYER"],
      payload: player
    });
  };
};
var setSquadStatsLoading = function setSquadStatsLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["LOADING_SQUAD_STATS"]
  };
};
var getSquadStats = function getSquadStats() {
  return function (dispatch, getState) {
    dispatch(setStatsLoading());
    var store = getState();
    var stats = store.playerSeasons.stats;
    var membersPicked = store.squad.membersPicked;
    var matches = Object(_util_Util__WEBPACK_IMPORTED_MODULE_1__["getMatchesTogether"])(stats.filter(function (ps) {
      return membersPicked.includes(ps.relationships.player.attributes.name);
    }));
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/stats/matches', {
      matches: matches,
      playerNames: membersPicked
    }).then(function (res) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_SQUAD_STATS"],
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["SET_SQUAD_ERROR"],
        payload: err.response.data
      });
    });
  };
};
var setStatsLoading = function setStatsLoading() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__["LOADING_SQUAD_STATS"]
  };
};

/***/ }),

/***/ "./redux/actions/types.js":
/*!********************************!*\
  !*** ./redux/actions/types.js ***!
  \********************************/
/*! exports provided: GET_PLAYER_SEASONS, LOADING_STATS, SET_GAME_MODE, SET_PERSPECTIVE, SET_SEASON, REFRESH_PLAYER_SEASONS, SET_ERROR, SET_SQUAD_MEMBERS, SET_SQUAD_MEMBERS_FETCHED, SET_SQUAD_MEMBERS_COLORS, SET_SQUAD_GAME_MODE, SET_SQUAD_PERSPECTIVE, SELECT_PLAYER, GET_SQUAD_STATS, LOADING_SQUAD_STATS, SET_SQUAD_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PLAYER_SEASONS", function() { return GET_PLAYER_SEASONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_STATS", function() { return LOADING_STATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_GAME_MODE", function() { return SET_GAME_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PERSPECTIVE", function() { return SET_PERSPECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEASON", function() { return SET_SEASON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_PLAYER_SEASONS", function() { return REFRESH_PLAYER_SEASONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERROR", function() { return SET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SQUAD_MEMBERS", function() { return SET_SQUAD_MEMBERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SQUAD_MEMBERS_FETCHED", function() { return SET_SQUAD_MEMBERS_FETCHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SQUAD_MEMBERS_COLORS", function() { return SET_SQUAD_MEMBERS_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SQUAD_GAME_MODE", function() { return SET_SQUAD_GAME_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SQUAD_PERSPECTIVE", function() { return SET_SQUAD_PERSPECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PLAYER", function() { return SELECT_PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SQUAD_STATS", function() { return GET_SQUAD_STATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_SQUAD_STATS", function() { return LOADING_SQUAD_STATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SQUAD_ERROR", function() { return SET_SQUAD_ERROR; });
// Individual Stats Action Types
var GET_PLAYER_SEASONS = 'GET_PLAYER_SEASONS';
var LOADING_STATS = 'LOADING_STATS';
var SET_GAME_MODE = 'SET_GAME_MODE';
var SET_PERSPECTIVE = 'SET_PERSPECTIVE';
var SET_SEASON = 'SET_SEASON';
var REFRESH_PLAYER_SEASONS = 'REFRESH_PLAYER_SEASONS';
var SET_ERROR = 'SET_ERROR'; // Together Stats Action Types

var SET_SQUAD_MEMBERS = 'SET_SQUAD_MEMBERS';
var SET_SQUAD_MEMBERS_FETCHED = 'SET_SQUAD_MEMBERS_FETCHED';
var SET_SQUAD_MEMBERS_COLORS = 'SET_SQUAD_MEMBERS_COLORS';
var SET_SQUAD_GAME_MODE = 'SET_SQUAD_GAME_MODE';
var SET_SQUAD_PERSPECTIVE = 'SET_SQUAD_PERSPECTIVE';
var SELECT_PLAYER = 'SET_PLAYER';
var GET_SQUAD_STATS = 'GET_SQUAD_STATS';
var LOADING_SQUAD_STATS = 'LOADING_SQUAD_STATS';
var SET_SQUAD_ERROR = 'SET_SQUAD_ERROR';

/***/ }),

/***/ "./static/css/style.css":
/*!******************************!*\
  !*** ./static/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/fonts/HeadlinerNo45.ttf":
/*!****************************************!*\
  !*** ./static/fonts/HeadlinerNo45.ttf ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/fonts/HeadlinerNo45-03a61498fdceb889a05322cc7142e4dd.ttf";

/***/ }),

/***/ "./util/Util.js":
/*!**********************!*\
  !*** ./util/Util.js ***!
  \**********************/
/*! exports provided: getMatchesTogether, getRankTitle, getRankTitleLevel, sanitizeString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchesTogether", function() { return getMatchesTogether; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRankTitle", function() { return getRankTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRankTitleLevel", function() { return getRankTitleLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeString", function() { return sanitizeString; });
/* harmony import */ var lodash_intersectionby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.intersectionby */ "lodash.intersectionby");
/* harmony import */ var lodash_intersectionby__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_intersectionby__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @description Get the matches that the given players have played together
 * @param {Array<PlayerSeason>} playerSeasons an array of playerSeasons objects
 * @returns {Array<Matches>} containing arrays of matches that the players in [playerSeasons] have in common
 */

var getMatchesTogether = function getMatchesTogether(playerSeasons) {
  var matchesTogether = playerSeasons[0].relationships.player.relationships.matches;

  for (var i = 1; i < playerSeasons.length; i++) {
    // Find duo matches that the players have in common
    matchesTogether = lodash_intersectionby__WEBPACK_IMPORTED_MODULE_0___default()(matchesTogether, playerSeasons[i].relationships.player.relationships.matches, 'id');
  }

  return matchesTogether;
};

var getRankTitle = function getRankTitle(rank) {
  if (rank === 0) return 'Unranked';
  var ranks = ['Beginner', 'Novice', 'Experienced', 'Skilled', 'Specialist', 'Expert', 'Survivor', 'LoneSurvivor'];
  var index = Math.trunc(rank / 1000);
  if (index === 5) return ranks[5];
  if (index >= 6) return ranks[6];
  return ranks[index];
};

var getRankTitleLevel = function getRankTitleLevel(rank) {
  if (rank === 0) return 'Unranked';
  var levels = ['V', 'IV', 'III', 'II', 'I'];
  var level = Math.trunc(rank % 1000 / 200);
  return "".concat(getRankTitle(rank), " ").concat(levels[level]);
};

var sanitizeString = function sanitizeString(str) {
  var newStr = str.replace(/[^a-z0-9áéíóúñü,.,_-]/gim, ' ');
  return newStr.trim();
};



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/stats.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivan/Documents/Developer/Portfolio-Projects/mypubgsquad/mypubgsquad-next/pages/stats.js */"./pages/stats.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "lodash.concat":
/*!********************************!*\
  !*** external "lodash.concat" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.concat");

/***/ }),

/***/ "lodash.difference":
/*!************************************!*\
  !*** external "lodash.difference" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.difference");

/***/ }),

/***/ "lodash.intersectionby":
/*!****************************************!*\
  !*** external "lodash.intersectionby" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.intersectionby");

/***/ }),

/***/ "lodash.isempty":
/*!*********************************!*\
  !*** external "lodash.isempty" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.isempty");

/***/ }),

/***/ "lodash.isequal":
/*!*********************************!*\
  !*** external "lodash.isequal" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.isequal");

/***/ }),

/***/ "lodash.omit":
/*!******************************!*\
  !*** external "lodash.omit" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.omit");

/***/ }),

/***/ "lodash.round":
/*!*******************************!*\
  !*** external "lodash.round" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.round");

/***/ }),

/***/ "lodash.sortby":
/*!********************************!*\
  !*** external "lodash.sortby" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.sortby");

/***/ }),

/***/ "lodash.without":
/*!*********************************!*\
  !*** external "lodash.without" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.without");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=stats.js.map