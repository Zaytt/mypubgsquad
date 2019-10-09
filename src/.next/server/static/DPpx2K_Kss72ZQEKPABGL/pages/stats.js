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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("PL1w");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("LkAs"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("Moms"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("bMj6"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("hZod"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("tEuJ"));

var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("pzQc"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) { var name; }

  return WithRouteWrapper;
}

/***/ }),

/***/ "/jQE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMatchesTogether; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRankTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getRankTitleLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sanitizeString; });
/* unused harmony export setAuthToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isEmpty; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1qCV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_intersectionby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Wpmc");
/* harmony import */ var lodash_intersectionby__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_intersectionby__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @description Get the matches that the given players have played together
 * @param {Array<PlayerSeason>} playerSeasons an array of playerSeasons objects
 * @returns {Array<Matches>} containing arrays of matches that the players in [playerSeasons] have in common
 */

var getMatchesTogether = function getMatchesTogether(playerSeasons) {
  var matchesTogether = playerSeasons[0].relationships.player.relationships.matches;

  for (var i = 1; i < playerSeasons.length; i++) {
    // Find duo matches that the players have in common
    matchesTogether = lodash_intersectionby__WEBPACK_IMPORTED_MODULE_1___default()(matchesTogether, playerSeasons[i].relationships.player.relationships.matches, 'id');
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
var setAuthToken = function setAuthToken(token) {
  if (token) {
    // Apply to every request
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common['Authorization'] = "Bearer ".concat(token);
  } else {
    // Delete the Auth Header
    delete axios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.headers.common['Authorization'];
  }
};
var isEmpty = function isEmpty(value) {
  return value == undefined || value == null || typeof value === 'object' && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(value).length === 0 || typeof value == 'string' && value.trim().length === 0;
};

/***/ }),

/***/ "0ZHj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticateAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return authenticateFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deAuthenticateAction; });
/* unused harmony export restoreState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginUserFacebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return logoutUser; });
/* unused harmony export restore */
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UrUy");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("R3/3");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("u0k+");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tlnx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("/jQE");





 // Set logged in user

var authenticateAction = function authenticateAction(user) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__[/* AUTHENTICATE */ "a"],
    payload: user
  };
};
var authenticateFacebook = function authenticateFacebook(token) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__[/* AUTHENTICATE_FACEBOOK */ "b"],
    payload: token
  };
};
var deAuthenticateAction = function deAuthenticateAction() {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_2__[/* DEAUTHENTICATE */ "c"]
  };
};
var restoreState = function restoreState(authState) {
  return {
    type: RESTORE_AUTH_STATE,
    payload: authState
  };
}; // Register User

var registerUser = function registerUser(userData) {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('api/auth/register', userData).then(function (res) {
      return true;
    })["catch"](function (err) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__[/* GET_AUTH_ERRORS */ "d"],
        payload: err.response.data
      });
    });
  };
}; // Login - GET user Token

var loginUser = function loginUser(userData) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('api/auth/login', userData).then(function (res) {
                  var user = res.data;
                  dispatch(authenticateAction(user._id));
                })["catch"](function (err) {
                  dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_2__[/* GET_AUTH_ERRORS */ "d"],
                    payload: err.response.data
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var loginUserFacebook = function loginUserFacebook() {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};
var logoutUser = function logoutUser() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('api/auth/logout').then(function (res) {
                  return dispatch(deAuthenticateAction());
                })["catch"](function (err) {
                  dispatch({
                    type: _types__WEBPACK_IMPORTED_MODULE_2__[/* GET_AUTH_ERRORS */ "d"],
                    payload: err.response.data
                  });
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var restore = function restore(savedState) {
  return function (dispatch) {
    dispatch(restoreState(savedState));
  };
};

/***/ }),

/***/ "0gJa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LkAs");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Moms");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bMj6");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hZod");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YKN3");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tEuJ");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("azxR");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_Util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("/jQE");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);











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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      squadSearch: '',
      error: null
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "componen", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "routeChange", function (e) {
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
        next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(path);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "onChange", function (e) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])({}, e.target.name, e.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "filterString", function (str) {
      return Object(_utils_Util__WEBPACK_IMPORTED_MODULE_8__[/* sanitizeString */ "e"])(_this.state.squadSearch).split(/[ ,]+/).filter(Boolean).join(',');
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

SearchInputGroup.defaultProps = {
  type: 'text'
};
/* harmony default export */ __webpack_exports__["a"] = (SearchInputGroup);

/***/ }),

/***/ "1qCV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "2gAL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Separator; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
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

/***/ "2xrT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Loka");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "6Ndq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "6mFX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "7mTa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aAV7");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UbzJ");


/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("PL1w");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("LkAs"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("Moms"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("bMj6"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("hZod"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("tEuJ"));

var _interopRequireWildcard = __webpack_require__("k3h2");

var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__("6mFX"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("bBV7"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
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

if (false) { var exact, warn; }

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "9oVP":
/***/ (function(module, exports) {

module.exports = require("lodash.concat");

/***/ }),

/***/ "JbZM":
/***/ (function(module, exports) {

module.exports = "/_next/static/fonts/HeadlinerNo45-03a61498fdceb889a05322cc7142e4dd.ttf";

/***/ }),

/***/ "LkAs":
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

/***/ "Loka":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "MK6P":
/***/ (function(module, exports) {

module.exports = require("lodash.omit");

/***/ }),

/***/ "Moms":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
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

/***/ "OKNm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "PL1w":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "QD0D":
/***/ (function(module, exports) {

module.exports = require("lodash.difference");

/***/ }),

/***/ "QzC/":
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "R3/3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ZOIa");
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

/***/ "Rbzu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tvLF");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("s4hn");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1qCV");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("azxR");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "TIwn":
/***/ (function(module, exports) {



/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U8Yc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UbzJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("UrUy");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("R3/3");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("LkAs");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("Moms");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("bMj6");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("hZod");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/layout/index.js + 2 modules
var layout = __webpack_require__("okHz");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "react-swipeable-views"
var external_react_swipeable_views_ = __webpack_require__("QzC/");
var external_react_swipeable_views_default = /*#__PURE__*/__webpack_require__.n(external_react_swipeable_views_);

// EXTERNAL MODULE: ./components/common/Separator.js
var Separator = __webpack_require__("2gAL");

// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__("2Hsl");
var external_react_loader_spinner_default = /*#__PURE__*/__webpack_require__.n(external_react_loader_spinner_);

// CONCATENATED MODULE: ./components/common/Spinner.js


function Spinner() {
  return external_react_default.a.createElement("div", {
    className: "d-flex justify-content-center align-items-center spinner"
  }, external_react_default.a.createElement(external_react_loader_spinner_default.a, {
    type: "TailSpin",
    color: "#ffa812",
    height: 100,
    width: 100
  }));
}
// CONCATENATED MODULE: ./components/common/Error.js

function Error(props) {
  var error = props.error,
      retry = props.retry,
      message = props.message;
  var errorMessage = error.status === 429 ? 'PUBG Servers are busy, please try again later' : error.status === 404 ? "One or more players couldn't be found, be sure to type their correct names and try again." : error === 'InsufficientPlayers' ? "Search must contain at least 2 players. Check your search and try again." : message;

  if (error.status === 404 || error === 'InsufficientPlayers') {
    retry = false;
  }

  return external_react_default.a.createElement("div", {
    className: "container h-100 mt-2"
  }, external_react_default.a.createElement("h1", {
    className: "pubg-font text-center mb-3 display-4"
  }, "Whoops!"), external_react_default.a.createElement("div", {
    className: "row d-flex justify-content-center"
  }, external_react_default.a.createElement("div", {
    className: "col-12"
  }, external_react_default.a.createElement("h1", {
    className: "text-dark pubg-font text-center mb-3"
  }, errorMessage))), retry ? external_react_default.a.createElement("div", {
    className: "row d-flex justify-content-center"
  }, external_react_default.a.createElement("div", {
    className: "col-8 col-sm-6 col-md-4 col-lg-3"
  }, external_react_default.a.createElement("button", {
    className: "btn btn-warning w-100 ",
    onClick: retry
  }, external_react_default.a.createElement("i", {
    className: "fas fa-redo-alt"
  }), " ", external_react_default.a.createElement("font", {
    size: "3"
  }, " RETRY")))) : null);
}
// CONCATENATED MODULE: ./components/stats_page/AloneTogetherPicker.js


function AloneTogetherPicker(props) {
  var alone = props.alone,
      setAlone = props.setAlone;
  return external_react_default.a.createElement("div", {
    className: "row d-flex justify-content-center pubg-font"
  }, external_react_default.a.createElement("div", {
    className: "col-12"
  }, external_react_default.a.createElement("h2", {
    className: "display-4 pubg-font text-center"
  }, "As")), external_react_default.a.createElement("div", {
    className: "col-sm-6 col-12"
  }, external_react_default.a.createElement("h2", {
    className: "display-4 pubg-font ".concat(alone ? 'text-black' : 'text-muted'),
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setAlone(true);
    }
  }, external_react_default.a.createElement("div", {
    className: "row d-flex"
  }, external_react_default.a.createElement("div", {
    className: "col-12  text-center d-flex justify-content-sm-end justify-content-center"
  }, external_react_default.a.createElement("span", {
    className: "mx-2 ".concat(!alone ? 'hidden' : '')
  }, external_react_default.a.createElement("i", {
    className: "fas fa-fist-raised"
  }), ' '), external_react_default.a.createElement("span", {
    className: "mx-2"
  }, "Individuals"))))), external_react_default.a.createElement("div", {
    className: "col-sm-6 col-12"
  }, external_react_default.a.createElement("h2", {
    className: "display-4 text-center ".concat(alone ? 'text-muted' : 'text-black'),
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setAlone(false);
    }
  }, external_react_default.a.createElement("div", {
    className: "row d-flex"
  }, external_react_default.a.createElement("div", {
    className: "col-12 order-1 order-sm-0 d-flex justify-content-sm-start justify-content-center"
  }, external_react_default.a.createElement("span", {
    className: "order-sm-0 order-1 mx-2"
  }, "a Team"), external_react_default.a.createElement("span", {
    className: "order-sm-1 order-0 mx-2 ".concat(alone ? 'hidden' : '')
  }, external_react_default.a.createElement("i", {
    className: "fas fa-hands-helping"
  })))))));
}

/* harmony default export */ var stats_page_AloneTogetherPicker = (AloneTogetherPicker);
// EXTERNAL MODULE: external "lodash.round"
var external_lodash_round_ = __webpack_require__("Y/UJ");
var external_lodash_round_default = /*#__PURE__*/__webpack_require__.n(external_lodash_round_);

// EXTERNAL MODULE: ./utils/Util.js
var Util = __webpack_require__("/jQE");

// CONCATENATED MODULE: ./components/stats_page/GeneralStats/PillBadge.js


function PillBadge(props) {
  var stat = props.stat,
      singular = props.singular,
      plural = props.plural,
      color = props.color;
  return external_react_default.a.createElement("div", {
    className: "row"
  }, external_react_default.a.createElement("div", {
    className: "col-12 w-100"
  }, external_react_default.a.createElement("span", {
    className: "badge badge-pill my-1 badge-".concat(color, " w-100")
  }, stat === 1 ? "".concat(stat, " ").concat(singular, " ") : "".concat(stat, " ").concat(plural, " "))));
}

/* harmony default export */ var GeneralStats_PillBadge = (PillBadge);
// CONCATENATED MODULE: ./components/stats_page/GeneralStats/SquadMemberCardHeader.js









 // import rankIcons from '../../../assets/images/images.js';



var SquadMemberCardHeader_SquadMemberItemHeader =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(SquadMemberItemHeader, _Component);

  function SquadMemberItemHeader() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, SquadMemberItemHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(SquadMemberItemHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "images", {
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

  Object(createClass["default"])(SquadMemberItemHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          playername = _this$props.playername,
          rank = _this$props.rank,
          gamesPlayed = _this$props.gamesPlayed,
          wins = _this$props.wins,
          top10s = _this$props.top10s;
      var rankIconSrc = this.images[Object(Util["b" /* getRankTitle */])(rank)];
      return external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-5  d-flex align-items-center mx-0"
      }, external_react_default.a.createElement("h2", {
        className: "card-title text-truncate text-warning"
      }, playername)), external_react_default.a.createElement("div", {
        className: "col-7  mx-0"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "d-flex col-xl-2 col-lg-2 col-sm-3 col-4 p-0 justify-content-end"
      }, external_react_default.a.createElement("img", {
        src: rankIconSrc,
        alt: "Rank Icon",
        style: {
          width: '80px',
          height: '80px'
        }
      })), external_react_default.a.createElement("div", {
        className: "d-none d-sm-flex col-xl-5 col-lg-5 col-sm-4 col-4 align-items-end justify-content-center text-center"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-12 p-0 d-flex align-items-end  justify-content-center"
      }, external_react_default.a.createElement("h4", null, external_lodash_round_default()(rank)))), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-12  p-0 d-flex align-items-end  justify-content-center"
      }, external_react_default.a.createElement("p", {
        className: "text-light",
        style: {
          fontSize: '14px'
        }
      }, Object(Util["c" /* getRankTitleLevel */])(rank))))))), external_react_default.a.createElement("div", {
        className: "col-xl-5 col-lg-5 col-sm-5 col-8 px-1"
      }, external_react_default.a.createElement(GeneralStats_PillBadge, {
        stat: gamesPlayed,
        singular: "Game",
        plural: "Games",
        color: "success"
      }), external_react_default.a.createElement(GeneralStats_PillBadge, {
        stat: top10s,
        singular: "Top 10",
        plural: "Top 10s",
        color: "primary"
      }), external_react_default.a.createElement(GeneralStats_PillBadge, {
        stat: wins,
        singular: "Win",
        plural: "Wins",
        color: "warning"
      })))));
    }
  }]);

  return SquadMemberItemHeader;
}(external_react_["Component"]);

/* harmony default export */ var SquadMemberCardHeader = (SquadMemberCardHeader_SquadMemberItemHeader);
// CONCATENATED MODULE: ./components/stats_page/GeneralStats/SquadMemberCardStat.js






var SquadMemberCardStat_SquadMemberStat =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(SquadMemberStat, _Component);

  function SquadMemberStat() {
    Object(classCallCheck["default"])(this, SquadMemberStat);

    return Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(SquadMemberStat).apply(this, arguments));
  }

  Object(createClass["default"])(SquadMemberStat, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stat = _this$props.stat,
          value = _this$props.value;
      var bold = this.props.bold ? 'font-weight-bold' : '';
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        className: "col-6 col-sm-3 mb-2"
      }, external_react_default.a.createElement("h6", null, stat)), external_react_default.a.createElement("div", {
        className: "col-6 col-sm-3 ".concat(bold, " mb-2")
      }, external_react_default.a.createElement("h6", null, value)));
    }
  }]);

  return SquadMemberStat;
}(external_react_["Component"]);
/* harmony default export */ var SquadMemberCardStat = (SquadMemberCardStat_SquadMemberStat);
// CONCATENATED MODULE: ./components/stats_page/GeneralStats/SquadMemberCard.js














var SquadMemberCard_SquadMemberCard =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(SquadMemberCard, _Component);

  function SquadMemberCard() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, SquadMemberCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(SquadMemberCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "secondsToMinutes", function (secs) {
      secs = external_lodash_round_default()(secs);
      var minutes = Math.floor(external_lodash_round_default()(secs) / 60);
      var seconds = external_lodash_round_default()(secs) - minutes * 60;
      return "".concat(minutes, ":").concat(seconds);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "checkZeroGames", function (stat, rounds) {
      return rounds === 0 ? '0' : stat;
    });

    return _this;
  }

  Object(createClass["default"])(SquadMemberCard, [{
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
      return external_react_default.a.createElement("div", {
        className: "card h-100 w-100 bg-dark text-light border-secondary stat-card"
      }, external_react_default.a.createElement("div", {
        className: "card-body"
      }, external_react_default.a.createElement(SquadMemberCardHeader, {
        playername: name,
        rank: rankPoints,
        gamesPlayed: roundsPlayed,
        wins: wins,
        top10s: top10s,
        kills: kills
      }), external_react_default.a.createElement(Separator["a" /* default */], {
        color: "secondary",
        margin: "0",
        length: "12"
      }), roundsPlayed === 0 ? external_react_default.a.createElement("h3", {
        className: "text-center h-50 d-flex justify-content-center align-items-center"
      }, "No rounds played") : external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement(SquadMemberCardStat, {
        stat: "KDR",
        value: this.checkZeroGames(external_lodash_round_default()(kills / roundsPlayed, 2), roundsPlayed),
        bold: true
      }), external_react_default.a.createElement(SquadMemberCardStat, {
        stat: "Avg. Damage",
        value: this.checkZeroGames(external_lodash_round_default()(damageDealt / roundsPlayed, 2), roundsPlayed),
        bold: true
      })), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement(SquadMemberCardStat, {
        stat: "Most Kills",
        value: roundMostKills
      }), external_react_default.a.createElement(SquadMemberCardStat, {
        stat: "Avg. Time Survived",
        value: this.checkZeroGames(this.secondsToMinutes(timeSurvived / roundsPlayed), roundsPlayed)
      })), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement(SquadMemberCardStat, {
        stat: "Longest Kill",
        value: "".concat(this.checkZeroGames(external_lodash_round_default()(longestKill), roundsPlayed), " m")
      }), external_react_default.a.createElement(SquadMemberCardStat, {
        stat: "Headshot",
        value: "".concat(this.checkZeroGames(external_lodash_round_default()(headshotKills / kills * 100, 1), roundsPlayed), " %")
      })), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement(SquadMemberCardStat, {
        stat: "Win %",
        value: "".concat(this.checkZeroGames(external_lodash_round_default()(wins / roundsPlayed * 100, 1), roundsPlayed), " %")
      }), external_react_default.a.createElement(SquadMemberCardStat, {
        stat: "Top 10 %",
        value: "".concat(this.checkZeroGames(external_lodash_round_default()(top10s / roundsPlayed * 100, 1), roundsPlayed), " %")
      })))));
    }
  }]);

  return SquadMemberCard;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    mode: state.playerSeasons.mode,
    perspective: state.playerSeasons.perspective
  };
};

var mapDispatchToProps = {};
/* harmony default export */ var GeneralStats_SquadMemberCard = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(SquadMemberCard_SquadMemberCard));
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/stats_page/GeneralStats/SelectorPill.js


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
    return external_react_default.a.createElement("li", {
      className: "nav-item bg-".concat(activeColor, " ").concat(rounded, " ").concat(border),
      style: {
        cursor: 'pointer'
      }
    }, external_react_default.a.createElement("button", {
      className: "btn btn-".concat(activeColor, " w-100"),
      onClick: props.onClick
    }, props.text));
  } else if (props.disabled === true) {
    return external_react_default.a.createElement("li", {
      className: "nav-item bg-secondary ".concat(rounded, " ").concat(border, " disabled")
    }, external_react_default.a.createElement("button", {
      className: "btn btn-secondary disabled w-100",
      onClick: props.onClick,
      disabled: true
    }, props.text));
  } else {
    return external_react_default.a.createElement("li", {
      className: "nav-item bg-".concat(inactiveColor, " ").concat(rounded, " ").concat(border),
      style: {
        cursor: 'pointer'
      }
    }, external_react_default.a.createElement("button", {
      className: "btn btn-".concat(inactiveColor, "  w-100"),
      onClick: props.onClick
    }, props.text));
  }
}

/* harmony default export */ var GeneralStats_SelectorPill = (SelectorPill);
// EXTERNAL MODULE: ./redux/actions/types.js
var types = __webpack_require__("u0k+");

// CONCATENATED MODULE: ./redux/actions/playerSeasonsActions.js

 // Get the individual info of each of the squad members

var playerSeasonsActions_getPlayerSeasons = function getPlayerSeasons(squad, seasonid, refresh) {
  return function (dispatch, getState) {
    dispatch(playerSeasonsActions_setStatsLoading());

    if (squad.split(',').length < 2) {
      dispatch({
        type: types["l" /* SET_ERROR */],
        payload: 'InsufficientPlayers'
      });
    } else {
      external_axios_default.a.get('/api/stats', {
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
          type: types["e" /* GET_PLAYER_SEASONS */],
          payload: payload
        });
      })["catch"](function (err) {
        dispatch({
          type: types["l" /* SET_ERROR */],
          payload: err.response.data
        });
      });
    }
  };
};
var playerSeasonsActions_setGameMode = function setGameMode(mode) {
  return function (dispatch) {
    dispatch({
      type: types["m" /* SET_GAME_MODE */],
      payload: mode
    });
  };
};
var playerSeasonsActions_setPerspective = function setPerspective(perspective) {
  return function (dispatch) {
    dispatch({
      type: types["n" /* SET_PERSPECTIVE */],
      payload: perspective
    });
  };
};
var playerSeasonsActions_getCurrentSeason = function getCurrentSeason() {
  return function (dispatch) {
    external_axios_default.a.get('/api/seasons/current').then(function (res) {
      dispatch({
        type: types["o" /* SET_SEASON */],
        payload: res.data.id
      });
    })["catch"](function (err) {
      dispatch({
        type: types["o" /* SET_SEASON */],
        payload: ''
      });
    });
  };
};
var playerSeasonsActions_setStatsLoading = function setStatsLoading() {
  return {
    type: types["h" /* LOADING_STATS */]
  };
};
// CONCATENATED MODULE: ./components/stats_page/GeneralStats/GameModeSelector.js















var GameModeSelector_GameModeSelector =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(GameModeSelector, _Component);

  function GameModeSelector() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, GameModeSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(GameModeSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "changeGameMode", function (mode) {
      return _this.props.setGameMode(mode);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "changePerspective", function (perspective) {
      return _this.props.setPerspective(perspective);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renew",
    /*#__PURE__*/
    Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var _this$props, squad, season, route;

      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = _this.props, squad = _this$props.squad, season = _this$props.season;
              route = "/api/stats?squad=".concat(squad.join(','), "&seasonid=").concat(season);
              _context.next = 4;
              return external_axios_default.a.get('/api/stats/cache/clear/', {
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

  Object(createClass["default"])(GameModeSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          mode = _this$props2.mode,
          perspective = _this$props2.perspective;
      return external_react_default.a.createElement("div", {
        className: "row mb-3 d-flex "
      }, external_react_default.a.createElement("div", {
        className: "col-md-6 mb-2"
      }, external_react_default.a.createElement("div", {
        className: "row justify-content-md-end"
      }, external_react_default.a.createElement("div", {
        className: "col-lg-6 d-flex  justify-content-center"
      }, external_react_default.a.createElement("ul", {
        className: "nav nav-pills nav-fill nav-justified w-100 border border-dark rounded"
      }, external_react_default.a.createElement(GeneralStats_SelectorPill, {
        selected: mode === 'solo' ? true : false,
        rounded: ['left'],
        text: "Solo",
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changeGameMode('solo');
        }
      }), external_react_default.a.createElement(GeneralStats_SelectorPill, {
        selected: mode === 'duo' ? true : false,
        text: "Duo",
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changeGameMode('duo');
        }
      }), external_react_default.a.createElement(GeneralStats_SelectorPill, {
        selected: mode === 'squad' ? true : false,
        text: "Squad",
        rounded: ['right'],
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changeGameMode('squad');
        }
      }))))), external_react_default.a.createElement("div", {
        className: "col-md-6 mb-2"
      }, external_react_default.a.createElement("div", {
        className: "row justify-content-start"
      }, external_react_default.a.createElement("div", {
        className: "col-lg-6 mb-2"
      }, external_react_default.a.createElement("ul", {
        className: "nav nav-pills nav-fill nav-justified w-100 d-flex border border-dark rounded"
      }, external_react_default.a.createElement(GeneralStats_SelectorPill, {
        selected: perspective === 'FPP' ? true : false,
        text: "FPP",
        rounded: ['left'],
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changePerspective('FPP');
        }
      }), external_react_default.a.createElement(GeneralStats_SelectorPill, {
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
}(external_react_["Component"]);

var GameModeSelector_mapStateToProps = function mapStateToProps(state) {
  return {
    mode: state.playerSeasons.mode,
    perspective: state.playerSeasons.perspective,
    season: state.playerSeasons.season,
    squad: state.playerSeasons.players
  };
};

var GameModeSelector_mapDispatchToProps = {
  setGameMode: playerSeasonsActions_setGameMode,
  setPerspective: playerSeasonsActions_setPerspective,
  getPlayerSeasons: playerSeasonsActions_getPlayerSeasons
};
/* harmony default export */ var GeneralStats_GameModeSelector = (Object(external_react_redux_["connect"])(GameModeSelector_mapStateToProps, GameModeSelector_mapDispatchToProps)(GameModeSelector_GameModeSelector));
// CONCATENATED MODULE: ./components/stats_page/GeneralStats/IndividualStats.js












var IndividualStats_IndividualStats =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(IndividualStats, _Component);

  function IndividualStats() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, IndividualStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(IndividualStats)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderSquadMembers", function (stats) {
      return stats.map(function (playerSeason) {
        return external_react_default.a.createElement("div", {
          key: playerSeason.relationships.player.attributes.name,
          className: "col-lg-6 col-12 mb-3 "
        }, external_react_default.a.createElement(GeneralStats_SquadMemberCard, {
          playerSeason: playerSeason
        }));
      });
    });

    return _this;
  }

  Object(createClass["default"])(IndividualStats, [{
    key: "render",
    value: function render() {
      var stats = this.props.stats;
      return external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement(GeneralStats_GameModeSelector, null), external_react_default.a.createElement("div", {
        className: "row "
      }, this.renderSquadMembers(stats)));
    }
  }]);

  return IndividualStats;
}(external_react_["Component"]);

var IndividualStats_mapStateToProps = function mapStateToProps(state) {
  return {
    stats: state.playerSeasons.stats
  };
};

var IndividualStats_mapDispatchToProps = {};
/* harmony default export */ var GeneralStats_IndividualStats = (Object(external_react_redux_["connect"])(IndividualStats_mapStateToProps, IndividualStats_mapDispatchToProps)(IndividualStats_IndividualStats));
// EXTERNAL MODULE: external "lodash.isempty"
var external_lodash_isempty_ = __webpack_require__("xWzl");
var external_lodash_isempty_default = /*#__PURE__*/__webpack_require__.n(external_lodash_isempty_);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("Rbzu");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/values.js
var values = __webpack_require__("2xrT");
var values_default = /*#__PURE__*/__webpack_require__.n(values);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("1qCV");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: external "lodash.difference"
var external_lodash_difference_ = __webpack_require__("QD0D");
var external_lodash_difference_default = /*#__PURE__*/__webpack_require__.n(external_lodash_difference_);

// EXTERNAL MODULE: external "lodash.without"
var external_lodash_without_ = __webpack_require__("iQHz");
var external_lodash_without_default = /*#__PURE__*/__webpack_require__.n(external_lodash_without_);

// EXTERNAL MODULE: external "lodash.concat"
var external_lodash_concat_ = __webpack_require__("9oVP");
var external_lodash_concat_default = /*#__PURE__*/__webpack_require__.n(external_lodash_concat_);

// EXTERNAL MODULE: external "lodash.omit"
var external_lodash_omit_ = __webpack_require__("MK6P");
var external_lodash_omit_default = /*#__PURE__*/__webpack_require__.n(external_lodash_omit_);

// CONCATENATED MODULE: ./redux/actions/togetherStatsActions.js



var togetherStatsActions_setSquadMembers = function setSquadMembers(squadMembersArray) {
  return {
    type: types["r" /* SET_SQUAD_MEMBERS */],
    payload: squadMembersArray
  };
};
var togetherStatsActions_setSquadMembersFetched = function setSquadMembersFetched(squadMembersArray) {
  return {
    type: types["t" /* SET_SQUAD_MEMBERS_FETCHED */],
    payload: squadMembersArray
  };
};
var togetherStatsActions_setSquadMembersColors = function setSquadMembersColors(squadMembersColors) {
  return {
    type: types["s" /* SET_SQUAD_MEMBERS_COLORS */],
    payload: squadMembersColors
  };
};
var togetherStatsActions_setSquadGameMode = function setSquadGameMode(mode) {
  return function (dispatch) {
    dispatch({
      type: types["q" /* SET_SQUAD_GAME_MODE */],
      payload: mode
    });
  };
};
var togetherStatsActions_setSquadPerspective = function setSquadPerspective(perspective) {
  return function (dispatch) {
    dispatch({
      type: types["u" /* SET_SQUAD_PERSPECTIVE */],
      payload: perspective
    });
  };
};
var togetherStatsActions_selectPlayer = function selectPlayer(player) {
  return function (dispatch) {
    dispatch({
      type: types["k" /* SELECT_PLAYER */],
      payload: player
    });
  };
};
var togetherStatsActions_setSquadStatsLoading = function setSquadStatsLoading() {
  return {
    type: types["g" /* LOADING_SQUAD_STATS */]
  };
};
var togetherStatsActions_getSquadStats = function getSquadStats() {
  return function (dispatch, getState) {
    dispatch(togetherStatsActions_setStatsLoading());
    var store = getState();
    var stats = store.playerSeasons.stats;
    var membersPicked = store.squad.membersPicked;
    var matches = Object(Util["a" /* getMatchesTogether */])(stats.filter(function (ps) {
      return membersPicked.includes(ps.relationships.player.attributes.name);
    }));
    external_axios_default.a.post('/api/stats/matches', {
      matches: matches,
      playerNames: membersPicked
    }).then(function (res) {
      dispatch({
        type: types["f" /* GET_SQUAD_STATS */],
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch({
        type: types["p" /* SET_SQUAD_ERROR */],
        payload: err.response.data
      });
    });
  };
};
var togetherStatsActions_setStatsLoading = function setStatsLoading() {
  return {
    type: types["g" /* LOADING_SQUAD_STATS */]
  };
};
// CONCATENATED MODULE: ./components/stats_page/SquadStats/PlayerPicker.js


















var PlayerPicker_PlayerPicker =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(PlayerPicker, _Component);

  function PlayerPicker() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, PlayerPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(PlayerPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      inactiveColor: 'btn-secondary'
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onButtonClick", function (ref, playerName) {
      var button = _this.refs[ref];

      if (button.classList.contains('selected')) {
        _this.deactivateButton(button, playerName); // Remove player from the squad in the store


        _this.props.setSquadMembers(external_lodash_without_default()(_this.props.membersPicked, button.value));
      } else {
        if (keys_default()(_this.props.membersColors).length >= 4) {
          return;
        } else {
          _this.activateButton(button, playerName); // Add player to the squad in the store


          _this.props.setSquadMembers(external_lodash_concat_default()(_this.props.membersPicked, button.value));
        }
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "activateButton", function (button, playerName) {
      var color = _this.getColor();

      _this.addColor(color, playerName);

      button.classList.remove(_this.state.inactiveColor);
      button.classList.add("btn-".concat(color), 'selected', 'border', 'border-dark');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "deactivateButton", function (button, playerName) {
      var colorClass = button.classList.contains('btn-primary') ? 'btn-primary' : button.classList.contains('btn-danger') ? 'btn-danger' : button.classList.contains('btn-success') ? 'btn-success' : button.classList.contains('btn-info') ? 'btn-info' : '';

      _this.removeColor(playerName);

      button.classList.remove(colorClass, 'selected', 'border', 'border-dark');
      button.classList.add(_this.state.inactiveColor);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderButtons", function (players) {
      if (players) return players.map(function (playerName, index) {
        var button = _this.refs["button".concat(index)];

        var disabled = button ? !button.classList.contains('selected') && keys_default()(_this.props.membersColors).length === 4 ? 'disabled' : null : '';
        var color = _this.props.membersColors.hasOwnProperty(playerName) ? "btn-".concat(_this.props.membersColors[playerName], " border border-dark selected") : 'btn-secondary';
        return external_react_default.a.createElement("button", {
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

  Object(createClass["default"])(PlayerPicker, [{
    key: "getColor",
    // Returns the first unused color
    value: function getColor() {
      var colors = ['primary', 'danger', 'success', 'info'];

      var usedColors = values_default()(this.props.membersColors);

      var diff = external_lodash_difference_default()(colors, usedColors);

      return diff.length >= 1 ? diff[0] : '';
    } // Turns on and off a button color and adds/removes a player from the squad to search

  }, {
    key: "addColor",
    // Set the state of this color as true, which means it is in use
    value: function addColor(color, playerName) {
      this.props.setSquadMembersColors(Object(objectSpread["a" /* default */])({}, this.props.membersColors, Object(defineProperty["a" /* default */])({}, playerName, color)));
    } // Set the state of this color as false, which means it is available

  }, {
    key: "removeColor",
    value: function removeColor(playerName) {
      this.props.setSquadMembersColors(external_lodash_omit_default()(this.props.membersColors, playerName));
    } // Renders the buttons for the players

  }, {
    key: "render",
    value: function render() {
      var players = this.props.players;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        className: "row mb-4 d-flex justify-content-center"
      }, external_react_default.a.createElement("div", {
        className: "col-md-10 col-12 text-center "
      }, external_react_default.a.createElement("h5", {
        className: "text-dark"
      }, "Pick up to 4 squad members to look for their stats together:"), external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), this.renderButtons(players))));
    }
  }]);

  return PlayerPicker;
}(external_react_["Component"]);

var PlayerPicker_mapStateToProps = function mapStateToProps(state) {
  return {
    players: state.playerSeasons.players,
    membersPicked: state.squad.membersPicked,
    membersColors: state.squad.membersColors
  };
};

var PlayerPicker_mapDispatchToProps = {
  setSquadMembers: togetherStatsActions_setSquadMembers,
  setSquadMembersColors: togetherStatsActions_setSquadMembersColors
};
/* harmony default export */ var SquadStats_PlayerPicker = (Object(external_react_redux_["connect"])(PlayerPicker_mapStateToProps, PlayerPicker_mapDispatchToProps)(PlayerPicker_PlayerPicker));
// EXTERNAL MODULE: external "lodash.isequal"
var external_lodash_isequal_ = __webpack_require__("wdnA");
var external_lodash_isequal_default = /*#__PURE__*/__webpack_require__.n(external_lodash_isequal_);

// EXTERNAL MODULE: external "lodash.sortby"
var external_lodash_sortby_ = __webpack_require__("YM5+");
var external_lodash_sortby_default = /*#__PURE__*/__webpack_require__.n(external_lodash_sortby_);

// CONCATENATED MODULE: ./components/stats_page/SquadStats/SquadSearch.js















var SquadSearch_SquadSearch =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(SquadSearch, _Component);

  function SquadSearch() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, SquadSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(SquadSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "searchSquadStats", function () {
      _this.props.membersPicked.sort();

      _this.props.setSquadMembersFetched(_this.props.membersPicked);

      _this.props.getSquadStats(_this.props.membersPicked.join(','));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "refreshSquadStats", function () {
      var membersFetchedArray = _this.props.membersFetched.join(',');

      _this.props.getPlayerSeasons(membersFetchedArray, _this.props.season, true);

      _this.props.getSquadStats(membersFetchedArray);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderSearchButton", function () {
      var searchButton = '';

      if (_this.props.membersPicked && _this.props.membersPicked.length >= 2 && (external_lodash_isempty_default()(_this.props.stats) || !external_lodash_isequal_default()(external_lodash_sortby_default()(_this.props.membersPicked), external_lodash_sortby_default()(_this.props.membersFetched)))) {
        searchButton = external_react_default.a.createElement("li", {
          className: "nav-item bg-warning rounded-left rounded-right "
        }, external_react_default.a.createElement("button", {
          className: "btn btn-warning border border-dark rounded w-100",
          onClick: _this.searchSquadStats
        }, external_react_default.a.createElement("i", {
          className: "fas fa-search"
        }), " Search"));
      } else {
        searchButton = external_react_default.a.createElement("li", {
          className: "nav-item  bg-secondary text-light rounded-left rounded-right disabled"
        }, external_react_default.a.createElement("button", {
          disabled: true,
          className: "btn btn-secondary disabled w-100 "
        }, external_react_default.a.createElement("i", {
          className: "fas fa-search"
        }), " Search"));
      }

      return searchButton;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderReloadButton", function () {
      var reloadButton = '';

      if (!external_lodash_isempty_default()(_this.props.stats) && external_lodash_isequal_default()(external_lodash_sortby_default()(_this.props.membersPicked), external_lodash_sortby_default()(_this.props.membersFetched))) {
        reloadButton = external_react_default.a.createElement("li", {
          className: "nav-item bg-warning text-light rounded-right"
        }, external_react_default.a.createElement("button", {
          className: "btn btn-warning w-100 border border-dark",
          onClick: _this.refreshSquadStats
        }, external_react_default.a.createElement("i", {
          className: "fas fa-redo-alt"
        }), " Refresh"));
      } else {
        reloadButton = external_react_default.a.createElement("li", {
          className: "nav-item bg-secondary text-light rounded-right disabled"
        }, external_react_default.a.createElement("button", {
          disabled: true,
          className: "btn btn-secondary disabled w-100 "
        }, external_react_default.a.createElement("i", {
          className: "fas fa-redo-alt"
        }), " Refresh"));
      }

      return reloadButton;
    });

    return _this;
  }

  Object(createClass["default"])(SquadSearch, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "row d-flex justify-content-center mb-2 mt-5"
      }, external_react_default.a.createElement("div", {
        className: "col-lg-3 col-md-6 col-11"
      }, external_react_default.a.createElement("ul", {
        className: "nav nav-pills mt-2 nav-fill nav-justified"
      }, this.renderSearchButton())));
    }
  }]);

  return SquadSearch;
}(external_react_["Component"]);

var SquadSearch_mapStateToProps = function mapStateToProps(state) {
  return {
    membersPicked: state.squad.membersPicked,
    membersFetched: state.squad.membersFetched,
    stats: state.squad.stats,
    season: state.playerSeasons.season
  };
};

var SquadSearch_mapDispatchToProps = {
  getSquadStats: togetherStatsActions_getSquadStats,
  setSquadMembersFetched: togetherStatsActions_setSquadMembersFetched,
  selectPlayer: togetherStatsActions_selectPlayer,
  getPlayerSeasons: playerSeasonsActions_getPlayerSeasons
};
/* harmony default export */ var SquadStats_SquadSearch = (Object(external_react_redux_["connect"])(SquadSearch_mapStateToProps, SquadSearch_mapDispatchToProps)(SquadSearch_SquadSearch));
// CONCATENATED MODULE: ./components/stats_page/SquadStats/SquadStatsFilter.js












var SquadStatsFilter_StatsFilter =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(StatsFilter, _Component);

  function StatsFilter() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, StatsFilter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(StatsFilter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "changeGameMode", function (mode) {
      return _this.props.setSquadGameMode(mode);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "changePerspective", function (perspective) {
      return _this.props.setSquadPerspective(perspective);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderDuoButton", function () {
      var mode = _this.props.mode;

      if (_this.props.squadFetched.length === 2) {
        return external_react_default.a.createElement(GeneralStats_SelectorPill, {
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
        return external_react_default.a.createElement(GeneralStats_SelectorPill, {
          text: "Duo",
          rounded: ['left'],
          disabled: true
        });
      }
    });

    return _this;
  }

  Object(createClass["default"])(StatsFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          mode = _this$props.mode,
          perspective = _this$props.perspective;
      return external_react_default.a.createElement("div", {
        className: "row mb-5 d-flex justify-content-center"
      }, external_react_default.a.createElement("div", {
        className: "col-lg-8 col-md-10 col-12"
      }, external_react_default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement("ul", {
        className: "nav nav-pills mt-2 nav-fill nav-justified border border-dark rounded"
      }, this.renderDuoButton(), external_react_default.a.createElement(GeneralStats_SelectorPill, {
        selected: mode === 'squad' ? true : false,
        text: "Squad",
        rounded: ['right'],
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changeGameMode('squad');
        }
      }))), external_react_default.a.createElement("div", {
        className: "col-6"
      }, external_react_default.a.createElement("ul", {
        className: "nav nav-pills mt-2 nav-fill nav-justified border border-dark rounded"
      }, external_react_default.a.createElement(GeneralStats_SelectorPill, {
        selected: perspective === 'FPP' ? true : false,
        text: "FPP",
        rounded: ['left'],
        activeColor: "warning",
        inactiveColor: "secondary",
        onClick: function onClick() {
          return _this2.changePerspective('FPP');
        }
      }), external_react_default.a.createElement(GeneralStats_SelectorPill, {
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
}(external_react_["Component"]);

var SquadStatsFilter_mapStateToProps = function mapStateToProps(state) {
  return {
    squadFetched: state.squad.membersFetched,
    mode: state.squad.mode,
    perspective: state.squad.perspective
  };
};

var SquadStatsFilter_mapDispatchToProps = {
  setSquadGameMode: togetherStatsActions_setSquadGameMode,
  setSquadPerspective: togetherStatsActions_setSquadPerspective
};
/* harmony default export */ var SquadStatsFilter = (Object(external_react_redux_["connect"])(SquadStatsFilter_mapStateToProps, SquadStatsFilter_mapDispatchToProps)(SquadStatsFilter_StatsFilter));
// CONCATENATED MODULE: ./components/stats_page/SquadStats/SquadStatsSummary.js











var SquadStatsSummary_SquadStatsSummary =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(SquadStatsSummary, _Component);

  function SquadStatsSummary() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, SquadStatsSummary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(SquadStatsSummary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "formatNames", function () {
      var text = '';
      var squad = _this.props.squad;

      if (!external_lodash_isempty_default()(squad)) {
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

  Object(createClass["default"])(SquadStatsSummary, [{
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


      if (!external_lodash_isempty_default()(stats)) {
        matchesInfo = stats[gameMode].gamesPlayed === 1 ? "Played ".concat(stats[gameMode].gamesPlayed, " ").concat(modeInfo, " Match Together") : "Played ".concat(stats[gameMode].gamesPlayed, " ").concat(modeInfo, " Matches Together");
        topTenInfo = stats[gameMode].top10s === 1 ? "Reached Top Ten ".concat(stats[gameMode].top10s, " Time") : "Reached Top Ten ".concat(stats[gameMode].top10s, " Times");
        winInfo = stats[gameMode].wins === 1 ? "Earned ".concat(stats[gameMode].wins, " Chicken Dinner") : "Earned ".concat(stats[gameMode].wins, " Chicken Dinners");
      }

      return external_react_default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, external_react_default.a.createElement("div", {
        className: "col-lg-8 col-md-10 col-12"
      }, external_react_default.a.createElement("h4", {
        className: "text-dark text-center"
      }, "In the past 14 days,"), external_react_default.a.createElement("h3", {
        className: "text-dark text-center mb-4"
      }, this.formatNames(), " have: "), external_react_default.a.createElement("ul", {
        className: "list-group  "
      }, external_react_default.a.createElement("li", {
        className: "list-group-item bg-dark text-light border border-dark"
      }, external_react_default.a.createElement("h4", {
        className: "text-center"
      }, external_react_default.a.createElement("i", {
        className: "fas fa-users"
      }), " ", external_react_default.a.createElement("span", null, matchesInfo))), external_react_default.a.createElement("li", {
        className: "list-group-item bg-dark text-light border border-dark"
      }, external_react_default.a.createElement("h4", {
        className: "text-center"
      }, external_react_default.a.createElement("i", {
        className: "fas fa-medal"
      }), " ", topTenInfo)), external_react_default.a.createElement("li", {
        className: "list-group-item bg-warning border border-dark"
      }, external_react_default.a.createElement("h4", {
        className: "text-center"
      }, external_react_default.a.createElement("i", {
        className: "fas fa-trophy"
      }), " ", winInfo)))));
    }
  }]);

  return SquadStatsSummary;
}(external_react_["Component"]);

var SquadStatsSummary_mapStateToProps = function mapStateToProps(state) {
  return {
    stats: state.squad.stats,
    squad: state.squad.membersFetched,
    mode: state.squad.mode,
    perspective: state.squad.perspective
  };
};

var SquadStatsSummary_mapDispatchToProps = {};
/* harmony default export */ var SquadStats_SquadStatsSummary = (Object(external_react_redux_["connect"])(SquadStatsSummary_mapStateToProps, SquadStatsSummary_mapDispatchToProps)(SquadStatsSummary_SquadStatsSummary));
// CONCATENATED MODULE: ./components/stats_page/SquadStats/SquadMemberStatsHeader.js










var SquadMemberStatsHeader_SquadMemberStatsHeader =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(SquadMemberStatsHeader, _Component);

  function SquadMemberStatsHeader() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, SquadMemberStatsHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(SquadMemberStatsHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderBadges", function () {
      var badges = _this.props.badges.filter(function (badge) {
        return keys_default()(_this.state.badgeColors).includes(badge.stat);
      });

      return badges.map(function (badge) {
        return external_react_default.a.createElement("span", {
          "data-tip": true,
          "data-for": badge.stat,
          key: badge.stat,
          className: "badge ".concat(_this.state.badgeColors[badge.stat], " active my-badge m-1")
        }, badge.description);
      });
    });

    return _this;
  }

  Object(createClass["default"])(SquadMemberStatsHeader, [{
    key: "render",
    value: function render() {
      var player = this.props.player;
      return external_react_default.a.createElement("div", {
        className: "row d-flex align-items-center justify-content-center"
      }, external_react_default.a.createElement("div", {
        className: "col-12 col-sm-6 justify-content-sm-center justify-content-start"
      }, external_react_default.a.createElement("h1", {
        className: "card-title text-warning "
      }, player)), external_react_default.a.createElement("div", {
        className: "col-12 col-sm-6 d-flex flex-wrap justify-content-center"
      }, this.renderBadges()));
    }
  }]);

  return SquadMemberStatsHeader;
}(external_react_["Component"]);

var SquadMemberStatsHeader_mapStateToProps = function mapStateToProps(state) {
  return {};
};

var SquadMemberStatsHeader_mapDispatchToProps = {};
/* harmony default export */ var SquadStats_SquadMemberStatsHeader = (Object(external_react_redux_["connect"])(SquadMemberStatsHeader_mapStateToProps, SquadMemberStatsHeader_mapDispatchToProps)(SquadMemberStatsHeader_SquadMemberStatsHeader));
// CONCATENATED MODULE: ./components/stats_page/SquadStats/StatRow.js



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
    var stat = external_lodash_round_default()(playerStat / squadStat * 100, 0);

    info = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("span", {
      className: "text-warning"
    }, " ", stat, "%"), " of the Squad's total ", label);
  } else {
    var diff = playerStat - squadStat;
    var color = '';
    var direction = '';

    if (type === 'avg') {
      // Show the stat description as the % above or below the Squad's Average
      var percentage = Math.abs(external_lodash_round_default()(diff / squadStat * 100, 0));
      if (isNaN(percentage)) percentage = 0;

      if (diff > 0) {
        direction = 'above';
        color = 'text-success';
      } else {
        direction = 'below';
        color = 'text-danger';
      }

      info = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("span", {
        className: color
      }, percentage, "%"), " ", direction, " the Squad's average");
    } else if (type === 'distance') {
      //Means player hasn't made a Kill
      if (nokills) {
        info = external_react_default.a.createElement(external_react_default.a.Fragment, null, "No Kills");
      } // Show the stat description as the difference in meters
      else if (diff === 0) {
          info = external_react_default.a.createElement(external_react_default.a.Fragment, null, label, " in the Squad");
        } else {
          info = external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("span", {
            className: "text-danger"
          }, Math.abs(diff)), " meters shorter than the ", label);
        }
    }
  }

  return external_react_default.a.createElement("div", {
    className: "row mb-3 d-flex justify-content-center"
  }, external_react_default.a.createElement("div", {
    className: "col-md-4 col-sm-3 col-4"
  }, external_react_default.a.createElement("h6", {
    className: "font-weight-bold"
  }, label)), external_react_default.a.createElement("div", {
    className: "col-md-2 col-sm-2 col-3"
  }, external_react_default.a.createElement("h6", null, playerStat, " ", unit)), external_react_default.a.createElement("div", {
    className: "col-md-6 col-sm-7 col-5"
  }, external_react_default.a.createElement("h6", null, info)));
}

/* harmony default export */ var SquadStats_StatRow = (StatRow);
// CONCATENATED MODULE: ./components/stats_page/SquadStats/SquadMemberRandomFact.js










var SquadMemberRandomFact_SquadMemberRandomFact =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(SquadMemberRandomFact, _Component);

  function SquadMemberRandomFact() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, SquadMemberRandomFact);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(SquadMemberRandomFact)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getFactText", function (stat) {
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

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "calculateRandomFact", function () {
      var factsAvailable = ['timeSurvived', 'survived', 'zoneDeaths', 'teamKills', 'roadKills', 'revives', 'swimDistance', 'walkDistance', 'vehicleDestroys', 'weaponsAcquired'];

      var facts = _this.props.stats.badges.filter(function (badge) {
        return factsAvailable.includes(badge.stat);
      });

      var fact = facts.length > 0 ? facts[Math.floor(Math.random() * (facts.length - 1))] : false;
      if (!fact) return _this.calculateRandomAvgFact();else {
        var factText = _this.getFactText(fact.stat);

        var factValue = fact.stat === 'walkDistance' ? external_lodash_round_default()(fact.value / 1000, 1) : fact.stat === 'timeSurvived' ? _this.convertSeconds(external_lodash_round_default()(fact.value, 0)) : fact.value % 1 === 0 ? fact.value : external_lodash_round_default()(fact.value, 1);
        return "".concat(factText.actionMost, " ").concat(factValue, " ").concat(factText.unitMost);
      }
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "calculateRandomAvgFact", function () {
      var factsAvailable = ['alive', 'timeSurvived', 'walkDistance', 'weaponsAcquired'];
      var _this$props = _this.props,
          stats = _this$props.stats,
          rounds = _this$props.rounds;
      var facts = factsAvailable.filter(function (fact) {
        return _this.props.stats[fact] > 0;
      });
      var fact = facts[Math.floor(Math.random() * (facts.length - 1))];
      var factValue = fact === 'walkDistance' ? external_lodash_round_default()(stats[fact] / (1000 * rounds), 1) : fact === 'timeSurvived' ? _this.convertSeconds(external_lodash_round_default()(stats[fact] / rounds, 0)) : fact === 'alive' ? stats[fact] : external_lodash_round_default()(stats[fact] / rounds, 0);

      var factText = _this.getFactText(fact);

      return "".concat(factText.actionAvg, " ").concat(factValue, " ").concat(factText.unitAvg);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "convertSeconds", function (sec) {
      var hrs = Math.floor(sec / 3600);
      var min = Math.floor((sec - hrs * 3600) / 60);
      var seconds = sec - hrs * 3600 - min * 60;
      seconds = Math.round(seconds * 100) / 100;
      var result = hrs === 0 ? '' : hrs === 1 ? "".concat(hrs, " hour") : "".concat(hrs, " hours");
      result += (hrs > 0 ? ', ' : '') + (min === 1 ? "".concat(min, " minute") : "".concat(min, " minutes"));
      result += (hrs === 0 && min === 0 ? ' ' : ' and ') + (seconds === 1 ? "".concat(seconds, " second") : "".concat(seconds, " seconds"));
      return result;
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "getRandomFact", function () {
      var chance = Math.floor(Math.random() * 100);
      if (chance < 60) return _this.calculateRandomFact();else return _this.calculateRandomAvgFact();
    });

    return _this;
  }

  Object(createClass["default"])(SquadMemberRandomFact, [{
    key: "render",
    value: function render() {
      var randomFact = this.getRandomFact();
      return external_react_default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, external_react_default.a.createElement("div", {
        className: "col-10"
      }, external_react_default.a.createElement("h5", {
        className: "mb-3"
      }, "Random fact: "), external_react_default.a.createElement("p", {
        className: "lead"
      }, ' ', external_react_default.a.createElement("span", {
        className: "text-warning"
      }, "".concat(this.props.player, " ")), external_react_default.a.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: randomFact
        }
      }))));
    }
  }]);

  return SquadMemberRandomFact;
}(external_react_["Component"]);

var SquadMemberRandomFact_mapStateToProps = function mapStateToProps(state) {
  return {};
};

var SquadMemberRandomFact_mapDispatchToProps = {};
/* harmony default export */ var SquadStats_SquadMemberRandomFact = (Object(external_react_redux_["connect"])(SquadMemberRandomFact_mapStateToProps, SquadMemberRandomFact_mapDispatchToProps)(SquadMemberRandomFact_SquadMemberRandomFact));
// CONCATENATED MODULE: ./components/stats_page/SquadStats/SquadMemberStats.js














var SquadMemberStats_SquadMemberStats =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(SquadMemberStats, _Component);

  function SquadMemberStats() {
    Object(classCallCheck["default"])(this, SquadMemberStats);

    return Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(SquadMemberStats).apply(this, arguments));
  }

  Object(createClass["default"])(SquadMemberStats, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          player = _this$props.player,
          stats = _this$props.stats,
          mode = _this$props.mode,
          perspective = _this$props.perspective,
          squad = _this$props.squad;
      var gameMode = mode + perspective;

      if (external_lodash_isempty_default()(stats)) {
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
      return external_react_default.a.createElement("div", {
        className: "row  d-flex justify-content-center text-light "
      }, external_react_default.a.createElement("div", {
        className: "col-lg-8 col-md-10 col-12 text-center"
      }, external_react_default.a.createElement("div", {
        className: "bg-dark text-light border-secondary stat-card mb-5 rounded-bottom"
      }, external_react_default.a.createElement("div", {
        className: "card-body"
      }, external_react_default.a.createElement(SquadStats_SquadMemberStatsHeader, {
        player: player,
        badges: badges
      }), external_react_default.a.createElement(Separator["a" /* default */], {
        color: "secondary",
        length: 10,
        margin: 4
      }), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement(SquadStats_StatRow, {
        label: "Kills",
        playerStat: playerStats.kills,
        squadStat: squadStats.kills,
        type: "total"
      }), external_react_default.a.createElement(SquadStats_StatRow, {
        label: "K/D",
        playerStat: external_lodash_round_default()(playerStats.kills / gamesPlayed, 2),
        squadStat: external_lodash_round_default()(squadStats.kills / (gamesPlayed * squad.length), 2),
        type: "avg"
      }), external_react_default.a.createElement(SquadStats_StatRow, {
        label: "Total Damage",
        playerStat: external_lodash_round_default()(playerStats.damageDealt, 0),
        squadStat: external_lodash_round_default()(squadStats.damageDealt, 0),
        type: "total"
      }), external_react_default.a.createElement(SquadStats_StatRow, {
        label: "Avg. Damage",
        playerStat: external_lodash_round_default()(playerStats.damageDealt / gamesPlayed, 0),
        squadStat: external_lodash_round_default()(squadStats.damageDealt / (gamesPlayed * squad.length), 0),
        type: "avg"
      }), external_react_default.a.createElement(SquadStats_StatRow, {
        label: "% Headshot Kills",
        playerStat: external_lodash_round_default()(playerStats.headshotKills / playerStats.kills * 100, 1),
        squadStat: external_lodash_round_default()(squadStats.headshotKills / squadStats.kills * 100, 1),
        type: "avg",
        unit: "%"
      }), external_react_default.a.createElement(SquadStats_StatRow, {
        label: "Longest Kill",
        playerStat: external_lodash_round_default()(playerStats.longestKill, 0),
        squadStat: external_lodash_round_default()(squadStats.longestKill, 0),
        type: "distance",
        unit: "m",
        nokills: playerStats.kills === 0
      }))), external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement(Separator["a" /* default */], {
        color: "secondary",
        length: 10,
        margin: 4
      }), external_react_default.a.createElement(SquadMemberRandomFact_SquadMemberRandomFact, {
        player: player,
        stats: playerStats,
        rounds: gamesPlayed
      })))))));
    }
  }]);

  return SquadMemberStats;
}(external_react_["Component"]);

var SquadMemberStats_mapStateToProps = function mapStateToProps(state) {
  return {
    player: state.squad.selectedPlayer,
    stats: state.squad.stats,
    mode: state.squad.mode,
    perspective: state.squad.perspective,
    squad: state.squad.membersFetched
  };
};

var SquadMemberStats_mapDispatchToProps = {
  selectPlayer: togetherStatsActions_selectPlayer
};
/* harmony default export */ var SquadStats_SquadMemberStats = (Object(external_react_redux_["connect"])(SquadMemberStats_mapStateToProps, SquadMemberStats_mapDispatchToProps)(SquadMemberStats_SquadMemberStats));
// CONCATENATED MODULE: ./components/stats_page/SquadStats/SquadMemberSelector.js













var SquadMemberSelector_SquadMemberSelector =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(SquadMemberSelector, _Component);

  function SquadMemberSelector() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, SquadMemberSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(SquadMemberSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onButtonClick", function (player) {
      _this.props.setPlayer(player);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderPlayerButtons", function () {
      var _this$props = _this.props,
          squad = _this$props.squad,
          selectedPlayer = _this$props.selectedPlayer,
          selectPlayer = _this$props.selectPlayer;

      if (!external_lodash_isempty_default()(squad)) {
        if (selectedPlayer === '') _this.props.selectPlayer(squad[0]);
        return squad.map(function (player, index) {
          var selected = player === selectedPlayer;
          return external_react_default.a.createElement(GeneralStats_SelectorPill, {
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

  Object(createClass["default"])(SquadMemberSelector, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "row d-flex justify-content-center text-muted mt-3"
      }, external_react_default.a.createElement("div", {
        className: "col-12"
      }, external_react_default.a.createElement("ul", {
        className: "nav nav-pills mt-2 nav-fill nav-justified"
      }, this.renderPlayerButtons())));
    }
  }]);

  return SquadMemberSelector;
}(external_react_["Component"]);

var SquadMemberSelector_mapStateToProps = function mapStateToProps(state) {
  return {
    squad: state.squad.membersFetched,
    selectedPlayer: state.squad.selectedPlayer
  };
};

var SquadMemberSelector_mapDispatchToProps = {
  selectPlayer: togetherStatsActions_selectPlayer
};
/* harmony default export */ var SquadStats_SquadMemberSelector = (Object(external_react_redux_["connect"])(SquadMemberSelector_mapStateToProps, SquadMemberSelector_mapDispatchToProps)(SquadMemberSelector_SquadMemberSelector));
// CONCATENATED MODULE: ./components/stats_page/SquadStats/TogetherStats.js




















var TogetherStats_TogetherStats =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(TogetherStats, _Component);

  function TogetherStats() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, TogetherStats);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(TogetherStats)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderSquadStats", function () {
      var _this$props = _this.props,
          stats = _this$props.stats,
          mode = _this$props.mode,
          perspective = _this$props.perspective;
      var gameMode = mode + perspective;
      return external_lodash_isempty_default()(stats) ? null : external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(SquadStatsFilter, null), external_react_default.a.createElement(SquadStats_SquadStatsSummary, null), stats[gameMode].gamesPlayed === 0 ? '' : external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        className: "row  d-flex justify-content-center text-light mt-5"
      }, external_react_default.a.createElement("div", {
        className: "col-lg-8 col-md-10 col-12 text-center"
      }, external_react_default.a.createElement(SquadStats_SquadMemberSelector, null))), external_react_default.a.createElement(SquadStats_SquadMemberStats, null)));
    });

    return _this;
  }

  Object(createClass["default"])(TogetherStats, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          loading = _this$props2.loading,
          error = _this$props2.error;
      return external_react_default.a.createElement("div", {
        className: "container light-grey rounded"
      }, external_react_default.a.createElement(SquadStats_PlayerPicker, null), external_react_default.a.createElement(SquadStats_SquadSearch, null), external_react_default.a.createElement(Separator["a" /* default */], {
        color: "secondary",
        length: 10,
        margin: 4
      }), loading ? external_react_default.a.createElement(Spinner, null) : error ? external_react_default.a.createElement(Error, {
        error: error,
        message: "Oops! Something went wrong while fetching your squad's matches, please try again later"
      }) : this.renderSquadStats());
    }
  }]);

  return TogetherStats;
}(external_react_["Component"]);

var TogetherStats_mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.squad.loading,
    error: state.squad.error,
    stats: state.squad.stats,
    mode: state.squad.mode,
    perspective: state.squad.perspective
  };
};

var TogetherStats_mapDispatchToProps = {};
/* harmony default export */ var SquadStats_TogetherStats = (Object(external_react_redux_["connect"])(TogetherStats_mapStateToProps, TogetherStats_mapDispatchToProps)(TogetherStats_TogetherStats));
// CONCATENATED MODULE: ./components/stats_page/index.js








/* LIBRARIES */


 // import { Spring } from 'react-spring/renderprops';

/* COMPONENTS */







/* REDUX ACTIONS */


/* HELPER FUNCTIONS */



var stats_page_StatsDashboard =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(StatsDashboard, _Component);

  function StatsDashboard() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, StatsDashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(StatsDashboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      alone: true,
      squad: ''
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "fetchPlayerSeasons", function () {
      var squadMates = Object(Util["e" /* sanitizeString */])(_this.props.squad).split(',').filter(function (el) {
        return el != null;
      }).join(',');

      _this.setState({
        squad: squadMates
      });

      _this.props.getPlayerSeasons(squadMates, _this.props.season);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "setAlone", function (status) {
      _this.setState({
        alone: status
      });
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderStats", function () {
      var index = _this.state.alone ? 0 : 1;
      return external_react_default.a.createElement(external_react_swipeable_views_default.a, {
        index: index
      }, external_react_default.a.createElement(GeneralStats_IndividualStats, null), external_react_default.a.createElement(SquadStats_TogetherStats, null));
    });

    return _this;
  }

  Object(createClass["default"])(StatsDashboard, [{
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
      return external_react_default.a.createElement("div", {
        className: "squadStats"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-md-12 my-4"
      }, loading ? external_react_default.a.createElement(Spinner, null) : error ? external_react_default.a.createElement(Error, {
        error: error,
        message: "Oops! Something went wrong while fetching your squad's data, please try again later",
        retry: this.fetchPlayerSeasons
      }) : external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("h1", {
        className: "display-3 text-center pubg-font text-black mb-4"
      }, "Your Squad this season"), external_react_default.a.createElement(stats_page_AloneTogetherPicker, {
        setAlone: this.setAlone,
        alone: alone
      }), external_react_default.a.createElement(Separator["a" /* default */], {
        color: "dark",
        length: "10",
        marginTop: "1",
        marginBottom: "3"
      }), this.renderStats())))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newSquadMates = Object(Util["e" /* sanitizeString */])(nextProps.squad).split(',').filter(function (el) {
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
}(external_react_["Component"]);

var stats_page_mapStateToProps = function mapStateToProps(state) {
  return {
    players: state.playerSeasons.players,
    squadStats: state.playerSeasons.stats,
    loading: state.playerSeasons.loading,
    season: state.playerSeasons.season,
    error: state.playerSeasons.error
  };
};

var stats_page_mapDispatchToProps = {
  getPlayerSeasons: playerSeasonsActions_getPlayerSeasons,
  getCurrentSeason: playerSeasonsActions_getCurrentSeason
};
/* harmony default export */ var stats_page = (Object(external_react_redux_["connect"])(stats_page_mapStateToProps, stats_page_mapDispatchToProps)(stats_page_StatsDashboard));
// CONCATENATED MODULE: ./pages/stats.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stats_stats; });











var stats_stats =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(stats, _Component);

  function stats() {
    Object(classCallCheck["default"])(this, stats);

    return Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(stats).apply(this, arguments));
  }

  Object(createClass["default"])(stats, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(layout["a" /* default */], null, external_react_default.a.createElement(stats_page, {
        squad: this.props.squad
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var query, res;
        return regenerator_default.a.wrap(function _callee$(_context) {
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
}(external_react_["Component"]);



/***/ }),

/***/ "UrUy":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "Wpmc":
/***/ (function(module, exports) {

module.exports = require("lodash.intersectionby");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "XzKa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "Y/UJ":
/***/ (function(module, exports) {

module.exports = require("lodash.round");

/***/ }),

/***/ "YKN3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "YM5+":
/***/ (function(module, exports) {

module.exports = require("lodash.sortby");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZKro":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("OKNm");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "ZOIa":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "aAV7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "azxR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hHgk");
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

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("PL1w");

var _construct2 = _interopRequireDefault2(__webpack_require__("qHHZ"));

var _interopRequireWildcard = __webpack_require__("k3h2");

var _interopRequireDefault = __webpack_require__("PL1w");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pzQc"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hHgk"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _requestContext = __webpack_require__("qCSu");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

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

/***/ "bMj6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("t+lh");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("XzKa");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hHgk":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hZod":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jDdP");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("OKNm");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "iQHz":
/***/ (function(module, exports) {

module.exports = require("lodash.without");

/***/ }),

/***/ "jDdP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "k3h2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("tvLF");

var _Object$defineProperty = __webpack_require__("hHgk");

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

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "okHz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("LkAs");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("Moms");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("bMj6");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("hZod");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/actions/authActions.js
var authActions = __webpack_require__("0ZHj");

// EXTERNAL MODULE: ./components/common/SearchInputGroup.js
var SearchInputGroup = __webpack_require__("0gJa");

// EXTERNAL MODULE: ./static/fonts/HeadlinerNo45.ttf
var HeadlinerNo45 = __webpack_require__("JbZM");

// EXTERNAL MODULE: ./static/css/style.css
var style = __webpack_require__("TIwn");

// CONCATENATED MODULE: ./components/layout/Header.js
















var Header_Header =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(Header, _Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "logout", function () {
      _this.props.logoutUser();

      router_default.a.push('/');
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderGuestLinks", function () {
      return external_react_default.a.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, external_react_default.a.createElement("li", {
        className: "nav-item ml-3 text-center d-block d-sm-none"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", {
        className: "nav-link text-light"
      }, "Home"))), external_react_default.a.createElement("li", {
        className: "nav-item ml-3 text-center"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/register"
      }, external_react_default.a.createElement("a", {
        className: "nav-link text-light d-inline-block text-nowrap "
      }, "Sign Up"))), external_react_default.a.createElement("li", {
        className: "nav-item ml-3 text-center "
      }, external_react_default.a.createElement(link_default.a, {
        href: "/login"
      }, external_react_default.a.createElement("a", {
        className: "nav-link text-light"
      }, "Login"))));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "renderAuthLinks", function () {
      return external_react_default.a.createElement("ul", {
        className: "navbar-nav ml-auto"
      }, external_react_default.a.createElement("li", {
        className: "nav-item ml-3 text-center d-block d-sm-none"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", {
        className: "nav-link text-light"
      }, "Home"))), external_react_default.a.createElement("li", {
        className: "nav-item ml-3 text-center"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/dashboard"
      }, external_react_default.a.createElement("a", {
        className: "nav-link text-light d-inline-block text-nowrap "
      }, "My Stats"))), external_react_default.a.createElement("li", {
        className: "nav-item ml-3 text-center "
      }, external_react_default.a.createElement("a", {
        className: "nav-link text-light",
        style: {
          cursor: 'pointer'
        },
        onClick: _this.logout
      }, "Logout")));
    });

    return _this;
  }

  Object(createClass["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this$props$auth = this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      return external_react_default.a.createElement("nav", {
        className: "topbar navbar navbar-expand-sm navbar-dark bg-dark py-1"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement("a", {
        className: "navbar-brand font-weight-light mt-1 d-none d-sm-block pubg-font"
      }, external_react_default.a.createElement("span", {
        className: "text-white"
      }, "MY"), external_react_default.a.createElement("span", {
        className: "text-warning"
      }, "PUBG"), external_react_default.a.createElement("span", {
        className: "text-white"
      }, "SQUAD"))), external_react_default.a.createElement("div", {
        className: "d-flex flex-nowrap w-100"
      }, external_react_default.a.createElement("div", {
        className: "mx-auto search-bar-container"
      }, external_react_default.a.createElement(SearchInputGroup["a" /* default */], {
        placeholder: "Search Players",
        name: "squadSearch",
        navbar: true
      })), external_react_default.a.createElement("button", {
        className: "navbar-toggler ml-2",
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#mobile-nav"
      }, external_react_default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }))), external_react_default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "mobile-nav"
      }, isAuthenticated ? this.renderAuthLinks() : this.renderGuestLinks())));
    }
  }]);

  return Header;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ var layout_Header = (Object(external_react_redux_["connect"])(mapStateToProps, {
  logoutUser: authActions["f" /* logoutUser */]
})(Header_Header));
// CONCATENATED MODULE: ./components/layout/Footer.js


var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("footer", {
    className: "footer bg-dark text-white p-2 text-center"
  }, "Copyright \xA9 ", new Date().getFullYear(), " mypubgsquad");
};

/* harmony default export */ var layout_Footer = (Footer_Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/layout/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });




function index(_ref) {
  var children = _ref.children,
      title = _ref.title;
  if (!title) title = 'PUBG Squad Stats, Season Stats & Matches | MYPUBGSQUAD.com';
  return external_react_default.a.createElement("div", {
    className: "root light-gray"
  }, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, title)), external_react_default.a.createElement(layout_Header, null), children, external_react_default.a.createElement(layout_Footer, null));
}

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pzQc":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("U8Yc");

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

/***/ "qCSu":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "qHHZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7mTa");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZKro");



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
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s4hn":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "t+lh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "tEuJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6Ndq");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZKro");


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
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "tvLF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "u0k+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_PLAYER_SEASONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOADING_STATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SET_GAME_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SET_PERSPECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SET_SEASON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return REFRESH_PLAYER_SEASONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SET_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return SET_SQUAD_MEMBERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return SET_SQUAD_MEMBERS_FETCHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return SET_SQUAD_MEMBERS_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SET_SQUAD_GAME_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SET_SQUAD_PERSPECTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SELECT_PLAYER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_SQUAD_STATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOADING_SQUAD_STATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SET_SQUAD_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_AUTH_ERRORS; });
/* unused harmony export CLEAR_ERRORS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHENTICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AUTHENTICATE_FACEBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEAUTHENTICATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RESTORE_AUTH_STATE; });
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
var SET_SQUAD_ERROR = 'SET_SQUAD_ERROR'; // Auth Action Types

var GET_AUTH_ERRORS = 'GET_AUTH_ERRORS';
var CLEAR_ERRORS = 'CLEAR_ERRORS';
var AUTHENTICATE = 'AUTHENTICATE';
var AUTHENTICATE_FACEBOOK = 'AUTHENTICATE_FACEBOOK';
var DEAUTHENTICATE = 'DEAUTHENTICATE';
var RESTORE_AUTH_STATE = 'RESTORE_AUTH_STATE';

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wdnA":
/***/ (function(module, exports) {

module.exports = require("lodash.isequal");

/***/ }),

/***/ "xWzl":
/***/ (function(module, exports) {

module.exports = require("lodash.isempty");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });