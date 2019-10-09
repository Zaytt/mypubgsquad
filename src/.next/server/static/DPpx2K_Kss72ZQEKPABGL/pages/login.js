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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("O2ls");


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

/***/ "JbZM":
/***/ (function(module, exports) {

module.exports = "/_next/static/fonts/HeadlinerNo45-03a61498fdceb889a05322cc7142e4dd.ttf";

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "O2ls":
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

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/get.js + 1 modules
var get = __webpack_require__("aP3L");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
var inherits = __webpack_require__("tEuJ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("YKN3");

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("azxR");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./redux/actions/authActions.js
var authActions = __webpack_require__("0ZHj");

// EXTERNAL MODULE: ./components/common/TextFieldGroup.js
var TextFieldGroup = __webpack_require__("xHgl");

// EXTERNAL MODULE: ./components/common/Separator.js
var Separator = __webpack_require__("2gAL");

// EXTERNAL MODULE: ./utils/Util.js
var Util = __webpack_require__("/jQE");

// CONCATENATED MODULE: ./components/login_page/Login.js


















var Login_Login =
/*#__PURE__*/
function (_Component) {
  Object(inherits["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["default"])(this, (_getPrototypeOf2 = Object(getPrototypeOf["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      email: '',
      password: '',
      errors: {}
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onChange", function (e) {
      _this.setState(Object(defineProperty["a" /* default */])({}, e.target.name, e.target.value));
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onSubmit", function (e) {
      e.preventDefault();
      var user = {
        username: _this.state.email,
        password: _this.state.password
      };

      var res = _this.props.loginUser(user);
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "facebookLogin",
    /*#__PURE__*/
    Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // const res = await this.props.loginUserFacebook();
              // console.log('From Client:');
              // console.log(res);
              router_default.a.push('/api/auth/facebook');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    return _this;
  }

  Object(createClass["default"])(Login, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (!this.props.auth.isAuthenticated && nextProps.auth.isAuthenticated) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.isAuthenticated) {
        router_default.a.push('/dashboard');
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.auth.isAuthenticated) {
        router_default.a.push('/dashboard');
      }

      if (newProps.auth.errors) {
        this.setState({
          errors: newProps.auth.errors
        });
      }
    }
  }, {
    key: "renderAlreadyLoggedIn",
    value: function renderAlreadyLoggedIn() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h2", {
        className: "display-4 text-center mb-5"
      }, "You're already logged in"), external_react_default.a.createElement("p", null, "Were you looking for the", external_react_default.a.createElement(link_default.a, {
        href: "/logout"
      }, external_react_default.a.createElement("a", null, "Dashboard?"))));
    }
  }, {
    key: "renderLoginForm",
    value: function renderLoginForm() {
      var errors = this.state.errors;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h1", {
        className: "display-4 text-center mb-5"
      }, "Login to your account"), external_react_default.a.createElement("form", {
        noValidate: true,
        onSubmit: this.onSubmit
      }, external_react_default.a.createElement(TextFieldGroup["a" /* default */], {
        name: "email",
        placeholder: "Email Address",
        type: "email",
        value: this.state.email,
        onChange: this.onChange,
        error: errors.email
      }), external_react_default.a.createElement(TextFieldGroup["a" /* default */], {
        name: "password",
        placeholder: "Password",
        type: "password",
        value: this.state.password,
        onChange: this.onChange,
        error: errors.password
      }), external_react_default.a.createElement("input", {
        type: "submit",
        className: "btn btn-warning btn-block mt-4 mb-4 border border-dark",
        value: "Log in"
      })), Object(Util["d" /* isEmpty */])(this.state.errors) ? '' : external_react_default.a.createElement("div", {
        className: "text-center"
      }, external_react_default.a.createElement(link_default.a, {
        href: "/password/reset"
      }, external_react_default.a.createElement("a", null, "Forgot your password?"))), external_react_default.a.createElement("div", {
        className: "text-center"
      }, external_react_default.a.createElement(Separator["a" /* default */], {
        color: "dark-gray",
        marginTop: "4",
        marginBottom: "2",
        length: "12"
      }), external_react_default.a.createElement("p", null, "Or login with:"), external_react_default.a.createElement(link_default.a, {
        href: "/api/auth/facebook"
      }, external_react_default.a.createElement("button", {
        className: "border-0 mx-2"
      }, external_react_default.a.createElement("i", {
        className: "fab fa-facebook-square fa-4x text-primary"
      }))), external_react_default.a.createElement(link_default.a, {
        href: "/api/auth/steam"
      }, external_react_default.a.createElement("button", {
        className: "border-0 mx-2 p-0"
      }, external_react_default.a.createElement("i", {
        className: "fab fa-steam-square fa-4x text-dark"
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var isAuthenticated = this.props.auth.isAuthenticated;
      return external_react_default.a.createElement("div", {
        className: "login mt-3 full-height"
      }, external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-10 col-md-8 col-lg-6 m-auto"
      }, isAuthenticated ? this.renderAlreadyLoggedIn() : this.renderLoginForm()))));
    }
  }]);

  return Login;
}(external_react_["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

/* harmony default export */ var login_page_Login = (Object(external_react_redux_["connect"])(mapStateToProps, {
  loginUser: authActions["d" /* loginUser */],
  loginUserFacebook: authActions["e" /* loginUserFacebook */]
})(Login_Login)); // export default connect(mapStateToProps)(Login);
// CONCATENATED MODULE: ./components/login_page/index.js


/* harmony default export */ var login_page = (login_page_Login);
// EXTERNAL MODULE: ./components/layout/index.js + 2 modules
var layout = __webpack_require__("okHz");

// EXTERNAL MODULE: ./components/page/Page.js
var Page = __webpack_require__("t47Z");

// CONCATENATED MODULE: ./pages/login.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return login_LoginPage; });














var login_LoginPage =
/*#__PURE__*/
function (_Page) {
  Object(inherits["default"])(LoginPage, _Page);

  function LoginPage() {
    Object(classCallCheck["default"])(this, LoginPage);

    return Object(possibleConstructorReturn["default"])(this, Object(getPrototypeOf["default"])(LoginPage).apply(this, arguments));
  }

  Object(createClass["default"])(LoginPage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(layout["a" /* default */], null, external_react_default.a.createElement(login_page, null));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(asyncToGenerator["a" /* default */])(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var req, res, props;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req, res = _ref.res;
                _context.next = 3;
                return Object(get["a" /* default */])(Object(getPrototypeOf["default"])(LoginPage), "getInitialProps", this).call(this, {
                  req: req
                });

              case 3:
                props = _context.sent;

                // If theres a user logged in, redirect him to the dashboard
                if (props.user) {
                  if (res) {
                    res.writeHead(302, {
                      Location: '/dashboard'
                    });
                    res.end();
                  } else {
                    router_default.a.push('/dashboard');
                  }
                }

                return _context.abrupt("return", props);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return LoginPage;
}(Page["a" /* default */]);



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

/***/ "R/ia":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gnsa");

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

/***/ "aP3L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("tvLF");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/core-js/reflect/get.js
var get = __webpack_require__("R/ia");
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("hZod");

// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/superPropBase.js

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(getPrototypeOf["default"])(object);
    if (object === null) break;
  }

  return object;
}
// CONCATENATED MODULE: ../node_modules/@babel/runtime-corejs2/helpers/esm/get.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get_get; });




function get_get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && get_default.a) {
    get_get = get_default.a;
  } else {
    get_get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;

      var desc = get_own_property_descriptor_default()(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return get_get(target, property, receiver || target);
}

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

/***/ "gnsa":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/get");

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

/***/ "jDdP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

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

/***/ "t+lh":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "t47Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UrUy");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("R3/3");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("LkAs");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Moms");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("bMj6");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("hZod");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tEuJ");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var Page =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Page, _React$Component);

  function Page() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Page);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Page).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Page, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                pageProps = {}; // Checks if theres a user logged in and adds it to the Page's props

                if (req && req.session.passport) {
                  pageProps.user = req.session.passport.user;
                }

                return _context.abrupt("return", pageProps);

              case 4:
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

  return Page;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Page);

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

/***/ "xHgl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



var TextFieldGroup = function TextFieldGroup(_ref) {
  var name = _ref.name,
      placeholder = _ref.placeholder,
      value = _ref.value,
      error = _ref.error,
      info = _ref.info,
      type = _ref.type,
      onChange = _ref.onChange,
      disabled = _ref.disabled;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: type,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('form-control form-control-lg', {
      'is-invalid': error
    }),
    placeholder: placeholder,
    name: name,
    value: value,
    onChange: onChange,
    disabled: disabled
  }), info && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "form-text text-muted"
  }, info), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, error));
};

TextFieldGroup.defaultProps = {
  type: 'text'
};
/* harmony default export */ __webpack_exports__["a"] = (TextFieldGroup);

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