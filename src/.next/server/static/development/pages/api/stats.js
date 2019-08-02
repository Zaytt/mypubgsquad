module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
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

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/api/stats/index.js":
/*!**********************************!*\
  !*** ./pages/api/stats/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");



var _require = __webpack_require__(/*! ../../../server/routes/index */ "./server/routes/index.js"),
    stats = _require.stats;

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", stats.getSquadStats(req, res));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./server/cache/cacheController.js":
/*!*****************************************!*\
  !*** ./server/cache/cacheController.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _isArray = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var memjs = __webpack_require__(/*! memjs */ "memjs");

var serverStr =  false ? undefined : 'localhost:11211';
var cache = memjs.Client.create(serverStr);
/**
 * GETS THE PLAYER SEASONS FROM THE CACHE
 * @param {Array<String>} players Player names array to look up
 */

var getCachedPlayerSeasons =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(players) {
    var cachedPlayers, nonCachedPlayers;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cachedPlayers = [];
            nonCachedPlayers = [];
            _context.next = 4;
            return _promise["default"].all(players.map(function (player) {
              return cache.get("PlayerSeason:".concat(player)).then(function (_ref2) {
                var value = _ref2.value;
                if (value) cachedPlayers.push(JSON.parse(value));else nonCachedPlayers.push(player);
              });
            }))["catch"](function (err) {
              throw err;
            });

          case 4:
            return _context.abrupt("return", {
              cachedPlayers: cachedPlayers,
              nonCachedPlayers: nonCachedPlayers
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getCachedPlayerSeasons(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * STORES THE PLAYER SEASONS IN CACHE
 * @param {Array<PlayerSeason>} playersSeasons Array or single element of PlayerSeasons
 * to store in the cache
 */


var setCachedPlayerSeasons =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(playerSeasons) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(0, _isArray["default"])(playerSeasons)) {
              _context2.next = 6;
              break;
            }

            _context2.next = 3;
            return _promise["default"].all(playerSeasons.map(function (ps) {
              return cache.set("PlayerSeason:".concat(ps.relationships.player.attributes.name), (0, _stringify["default"])(ps), {
                expires: 1800
              });
            }))["catch"](function (err) {
              throw err;
            });

          case 3:
            _context2.t0 = _context2.sent;
            _context2.next = 9;
            break;

          case 6:
            _context2.next = 8;
            return cache.set("PlayerSeason:".concat(playerSeasons.relationships.player.attributes.name), (0, _stringify["default"])(playerSeasons), {
              expires: 1800
            }).then(function (res) {
              return true;
            })["catch"](function (err) {
              throw err;
            });

          case 8:
            _context2.t0 = _context2.sent;

          case 9:
            return _context2.abrupt("return", _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function setCachedPlayerSeasons(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * GETS THE SEASONS FROM THE CACHE
 */


var getCachedSeasons = function getCachedSeasons() {
  return cache.get("Seasons").then(function (_ref4) {
    var value = _ref4.value;
    return JSON.parse(value);
  })["catch"](function (err) {
    throw err;
  });
};
/**
 * STORES THE SEASONS IN THE CACHE
 * @param {Array<Seasons>} seasons array of Seasons objects
 * to store in the cache
 */


var setCachedSeasons =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(seasons) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return cache.set("Seasons", (0, _stringify["default"])(seasons), {
              expires: 86400
            }).then(function (res) {
              return true;
            })["catch"](function (err) {
              throw err;
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function setCachedSeasons(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

module.exports = {
  getCachedPlayerSeasons: getCachedPlayerSeasons,
  setCachedPlayerSeasons: setCachedPlayerSeasons,
  getCachedSeasons: getCachedSeasons,
  setCachedSeasons: setCachedSeasons
};

/***/ }),

/***/ "./server/config/keys.js":
/*!*******************************!*\
  !*** ./server/config/keys.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./keys_dev */ "./server/config/keys_dev.js");
}

/***/ }),

/***/ "./server/config/keys_dev.js":
/*!***********************************!*\
  !*** ./server/config/keys_dev.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  mongoURI: 'mongodb://pubgleader:zayttleyedsulematz1t0@ds125578.mlab.com:25578/mypubgsquad-dev',
  pubgApiKey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwMzg0YWNlMC0yZjJmLTAxMzctNjE0ZC01OWY4MWEyNmE3MzIiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTUzMzAwMjY4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im15cHViZ3NxdWFkIn0.d_l0xzg8BB6J9uI7TAtzDbaHVqWlQWAa8PX98uUUPxg'
};

/***/ }),

/***/ "./server/core/statsAnalysis.js":
/*!**************************************!*\
  !*** ./server/core/statsAnalysis.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _isArray = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var _mergeWith = __webpack_require__(/*! lodash.mergewith */ "lodash.mergewith");

var _add = __webpack_require__(/*! lodash.add */ "lodash.add");

var _omit = __webpack_require__(/*! lodash.omit */ "lodash.omit");

var _isEmpty = __webpack_require__(/*! lodash.isempty */ "lodash.isempty");

var _isNumber = __webpack_require__(/*! lodash.isnumber */ "lodash.isnumber");

var _merge = __webpack_require__(/*! lodash.merge */ "lodash.merge");

var _keys = __webpack_require__(/*! lodash.keys */ "lodash.keys");

var _intersectionBy = __webpack_require__(/*! lodash.intersectionby */ "lodash.intersectionby");

var pubg = __webpack_require__(/*! ../pubg_api/pubg */ "./server/pubg_api/pubg.js");
/**
 * @description Returns an array containing info about a player and their season stats,
 * as well as the matches played this season
 * @param {string[]} playerNames array with a string of player names to lookup
 * @param {string} seasonid the PUBG season id
 * @returns {Array<Promise<PlayerSeason>>|<Promise<PlayerSeason>>} array containgin player info and season stats
 */


var getPlayersSeasonStats =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(playerNames, seasonid) {
    var players;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return pubg.getPlayer({
              name: playerNames
            });

          case 2:
            players = _context.sent;

            if (!(0, _isArray["default"])(players)) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return pubg.getManyPlayerSeason({
              players: players
            }, seasonid)["catch"](function (err) {
              throw err;
            });

          case 6:
            _context.t0 = _context.sent;
            _context.next = 12;
            break;

          case 9:
            _context.next = 11;
            return pubg.getPlayerSeason(players, seasonid)["catch"](function (err) {
              throw err;
            });

          case 11:
            _context.t0 = _context.sent;

          case 12:
            return _context.abrupt("return", _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPlayersSeasonStats(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Combines the season stats of a group of players into their total aggregate
 * for each game mode, for a given season.
 * @param {PlayerSeason[]} playersStats an array of players that contains their stats for a season
 * @returns {Object} an object
 */


var getCombinedStats = function getCombinedStats(playersStats) {
  // Declare the combined stats obj
  var combinedStats = {
    solo: {},
    soloFPP: {},
    duo: {},
    duoFPP: {},
    squad: {},
    squadFPP: {}
  }; // Sum the stats of the season of each player to get the squad total stats

  playersStats.forEach(function (player) {
    _mergeWith(combinedStats.solo, player.season.stats.solo, _add);

    _mergeWith(combinedStats.soloFPP, player.season.stats.soloFPP, _add);

    _mergeWith(combinedStats.duo, player.season.stats.duo, _add);

    _mergeWith(combinedStats.duoFPP, player.season.stats.duoFPP, _add);

    _mergeWith(combinedStats.squad, player.season.stats.squad, _add);

    _mergeWith(combinedStats.squadFPP, player.season.stats.squadFPP, _add);
  });
  return combinedStats;
};
/**
 * @description Get the matches that the given players have played together
 * @param {PlayerSeason[]} playersStats an array of players that contains their stats for a season
 * @returns {Object} containing arrays of matches that the players in [playersStats] have in common,
 * separated by game mode (duo, duoFPP, squad, squadFPP)
 */


var getMatchesTogether = function getMatchesTogether(playersStats) {
  var matchesTogether = {};
  matchesTogether.duo = playersStats[0].season.matches.matchesDuo;
  matchesTogether.duoFPP = playersStats[0].season.matches.matchesDuoFPP;
  matchesTogether.squad = playersStats[0].season.matches.matchesSquad;
  matchesTogether.squadFPP = playersStats[0].season.matches.matchesSquadFPP;

  for (var i = 1; i < playersStats.length; i++) {
    // Find duo matches that the players have in common
    matchesTogether.duo = _intersectionBy(matchesTogether.duo, playersStats[i].season.matches.matchesDuo, 'id');
    matchesTogether.duo = matchesTogether.duo.map(function (match) {
      return match.fetch();
    }); // Find duoFPP matches that the players have in common

    matchesTogether.duoFPP = _intersectionBy(matchesTogether.duoFPP, playersStats[i].season.matches.matchesDuoFPP, 'id'); // Find squad matches that the players have in common

    matchesTogether.squad = _intersectionBy(matchesTogether.squad, playersStats[i].season.matches.matchesSquad, 'id'); // Find squadFPP matches that the players have in common

    matchesTogether.squadFPP = _intersectionBy(matchesTogether.squadFPP, playersStats[i].season.matches.matchesSquadFPP, 'id');
  }

  return matchesTogether;
};
/**
 * @description Get the stats of a group of players from the matches that they have played
 * together this season.
 * @param {String[]} playerNames Array of player names
 * @param {String} seasonid id of the season
 * @returns {Object} Object with stats of the players for each game mode
 */


var getSquadStatsFromMatches =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(matches, playerNames) {
    var fetchedMatches, fullDuoMatches, fullDuoFPPMatches, fullSquadMatches, fullSquadFPPMatches, duoMatchesStats, duoFPPMatchesStats, squadMatchesStats, squadFPPMatchesStats;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _promise["default"].all(matches.map(
            /*#__PURE__*/
            function () {
              var _ref3 = (0, _asyncToGenerator2["default"])(
              /*#__PURE__*/
              _regenerator["default"].mark(function _callee2(match) {
                return _regenerator["default"].wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return pubg.getMatch(match.id);

                      case 2:
                        return _context2.abrupt("return", _context2.sent);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x5) {
                return _ref3.apply(this, arguments);
              };
            }()));

          case 2:
            fetchedMatches = _context3.sent;
            fullDuoMatches = fetchedMatches.filter(function (match) {
              return match.attributes.gameMode === 'duo';
            });
            fullDuoFPPMatches = fetchedMatches.filter(function (match) {
              return match.attributes.gameMode === 'duo-fpp';
            });
            fullSquadMatches = fetchedMatches.filter(function (match) {
              return match.attributes.gameMode === 'squad';
            });
            fullSquadFPPMatches = fetchedMatches.filter(function (match) {
              return match.attributes.gameMode === 'squad-fpp';
            }); // Get the stats of the players from the duo matches

            duoMatchesStats = getPlayersStatsFromMatches(fullDuoMatches, playerNames); // Get the stats of the players from the duo fpp matches

            duoFPPMatchesStats = getPlayersStatsFromMatches(fullDuoFPPMatches, playerNames); // Get the stats of the players from the squad matches

            squadMatchesStats = getPlayersStatsFromMatches(fullSquadMatches, playerNames); // Get the stats of the players from the squad fpp matches

            squadFPPMatchesStats = getPlayersStatsFromMatches(fullSquadFPPMatches, playerNames);
            return _context3.abrupt("return", {
              duo: {
                gamesPlayed: fullDuoMatches.length,
                wins: duoMatchesStats[playerNames[0]].wins,
                top10s: duoMatchesStats[playerNames[0]].top10s,
                stats: duoMatchesStats
              },
              duoFPP: {
                gamesPlayed: fullDuoFPPMatches.length,
                wins: duoFPPMatchesStats[playerNames[0]].wins,
                top10s: duoFPPMatchesStats[playerNames[0]].top10s,
                stats: duoFPPMatchesStats
              },
              squad: {
                gamesPlayed: fullSquadMatches.length,
                wins: squadMatchesStats[playerNames[0]].wins,
                top10s: squadMatchesStats[playerNames[0]].top10s,
                stats: squadMatchesStats
              },
              squadFPP: {
                gamesPlayed: fullSquadFPPMatches.length,
                wins: squadFPPMatchesStats[playerNames[0]].wins,
                top10s: squadFPPMatchesStats[playerNames[0]].top10s,
                stats: squadFPPMatchesStats
              }
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getSquadStatsFromMatches(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * @description Return an object that contains an array for each game mode that contains the
 * aggregated stats of each squad member
 * @param {Match[]} matches An array of Match that the players have in common
 * @param {string[]} players Array of player names
 * @returns {Object} Object with player stats for each game mode
 */


var getPlayersStatsFromMatches = function getPlayersStatsFromMatches(matches, players) {
  var squadStats = {
    teamTotal: {}
  };
  players.forEach(function (player) {
    squadStats[player] = {
      wins: 0,
      top10s: 0,
      alive: 0,
      suicides: 0,
      zoneDeaths: 0,
      badges: []
    };
  }); // Traverse the matches

  for (var i = 0; i < matches.length; i++) {
    var rosters = matches[i].relationships.rosters; // Traverse the rosters from the match

    var _loop2 = function _loop2(j) {
      var participants = rosters[j].relationships.participants; // If the roster contains any of the squad players process it, else -> search next roster

      if (players.some(function (p) {
        for (var _i = 0; _i < participants.length; _i++) {
          if (p === participants[_i].attributes.stats.name) {
            return true;
          }
        }

        return false;
      })) {
        // Traverse the participants in the roster
        for (var k = 0; k < participants.length; k++) {
          var name = participants[k].attributes.stats.name; // If the participant is not part of the queried players, skip him

          if (!players.includes(name)) continue; // Merge the stats obj of the player with the match stats

          _mergeWith(squadStats[name], participants[k].attributes.stats, function (objValue, srcValue, key, object, source, stack) {
            return sumPlayerStats(objValue, srcValue, key, object, source, stack);
          }); // Merge the stats of a player with the team total if its a squad


          _mergeWith(squadStats.teamTotal, participants[k].attributes.stats, function (objValue, srcValue, key, object, source, stack) {
            return sumPlayerStats(objValue, srcValue, key, object, source, stack);
          });
        }
      } else {
        return "continue";
      } // Roster was found, no need to keep iterating this match's rosters


      return "break";
    };

    _loop: for (var j = 0; j < rosters.length; j++) {
      var _ret = _loop2(j);

      switch (_ret) {
        case "continue":
          continue;

        case "break":
          break _loop;
      }
    }
  } // Add the badges for the players and return the updated object


  return calculateBadges(squadStats);
};
/**
 * Function used to merge the objects for the player stats from each match
 * Parameters are the ones used for lodash's mergeWith function
 */


var sumPlayerStats = function sumPlayerStats(objValue, srcValue, key, object) {
  if (key === 'longestKill') {
    return objValue > srcValue ? objValue : srcValue;
  } else if (key === 'winPlace') {
    srcValue === 1 ? object.wins++ : null;
    srcValue <= 10 ? object.top10s++ : null;
  } else if (key === 'deathType') {
    srcValue === 'byzone' ? object.zoneDeaths++ : srcValue === 'suicide' ? object.suicide++ : srcValue === 'alive' ? object.alive++ : null;
  } else {
    return _isNumber(objValue) ? objValue + srcValue : srcValue;
  }
};
/**
 * @description Add the corresponding badges to each player in the squad stats
 * @param squadStats array of players and their stats for a given set of matches
 * @returns the updated squadStats obj with each player with their badges
 */


var calculateBadges = function calculateBadges(squadStats) {
  if (_isEmpty(squadStats.teamTotal)) {
    return squadStats;
  } else {
    // Get the top metrics and their value
    var badges = [{
      stat: 'assists',
      description: 'Most Assists'
    }, {
      stat: 'damageDealt',
      description: 'Most Damage Dealt'
    }, {
      stat: 'headshotKills',
      description: 'Most Headshots'
    }, {
      stat: 'kills',
      description: 'Most Kills'
    }, {
      stat: 'longestKill',
      description: 'Longest Kill'
    }, {
      stat: 'revives',
      description: 'Most Revives'
    }, {
      stat: 'roadKills',
      description: 'Most Road Kills'
    }, {
      stat: 'swimDistance',
      description: 'Most Distance Swimmed'
    }, {
      stat: 'teamKills',
      description: 'Most Teamkills'
    }, {
      stat: 'timeSurvived',
      description: 'Longest Time Survived'
    }, {
      stat: 'vehicleDestroys',
      description: 'Most Vehicles Destroyed'
    }, {
      stat: 'walkDistance',
      description: 'Most Distance Walked'
    }, {
      stat: 'suicides',
      description: 'Most Suicides'
    }, {
      stat: 'weaponsAcquired',
      description: 'Most Weapons Looted'
    }, {
      stat: 'zoneDeaths',
      description: 'Most Zone Deaths'
    }];

    for (var i = 0; i < badges.length; i++) {
      var topPlayer = getTopPlayer(squadStats, badges[i].stat);

      if (topPlayer.player) {
        squadStats[topPlayer.player].badges.push(_omit(_merge(topPlayer, badges[i]), 'player'));
      }
    }

    return squadStats;
  }
};
/**
 * @description Get the player name that has the highest score in a given metric
 * @param squadStats the stats obj of a group of players
 * @param metric the metric to be evaluated
 * @returns and object with the player index in the squadStat param and the value of the max metric
 */


var getTopPlayer = function getTopPlayer(squadStats, metric) {
  squadArray = _keys(squadStats); // Get an array of player names from the squad

  var topValue = 0;
  var topPlayer = null; // Traverse the player names array

  for (var i = 1; i < squadArray.length; i++) {
    if (squadStats[squadArray[i]][metric] > topValue) {
      topValue = squadStats[squadArray[i]][metric];
      topPlayer = squadArray[i];
    }
  }

  return {
    stat: metric,
    player: topPlayer,
    value: topValue
  };
};

module.exports = {
  calculateBadges: calculateBadges,
  getPlayersSeasonStats: getPlayersSeasonStats,
  getCombinedStats: getCombinedStats,
  getMatchesTogether: getMatchesTogether,
  getSquadStatsFromMatches: getSquadStatsFromMatches
};

/***/ }),

/***/ "./server/pubg_api/pubg.js":
/*!*********************************!*\
  !*** ./server/pubg_api/pubg.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ../config/keys */ "./server/config/keys.js"),
    pubgApiKey = _require.pubgApiKey; // Require model and initiate client with api key


var pubg = __webpack_require__(/*! @zaytt/pubg */ "@zaytt/pubg");

var pubgClient = new pubg.Client(pubgApiKey, 'steam');
module.exports = pubgClient;

/***/ }),

/***/ "./server/routes/controllers/seasonsController.js":
/*!********************************************************!*\
  !*** ./server/routes/controllers/seasonsController.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var pubgAPI = __webpack_require__(/*! ../../pubg_api/pubg */ "./server/pubg_api/pubg.js");

var _require = __webpack_require__(/*! ../../cache/cacheController */ "./server/cache/cacheController.js"),
    getCachedSeasons = _require.getCachedSeasons,
    setCachedSeasons = _require.setCachedSeasons;

var storeSeasons =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return pubgAPI.getSeasons();

          case 2:
            seasons = _context.sent;
            _context.next = 5;
            return setCachedSeasons(seasons).then(function (res) {
              return console.log('Stored Seasons in Cache');
            })["catch"](function (err) {
              console.warn('Failed to store seasons in cache');
              throw err;
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function storeSeasons() {
    return _ref.apply(this, arguments);
  };
}();

var getSeasons =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var seasons;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getCachedSeasons();

          case 2:
            seasons = _context2.sent;

            if (!seasons) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", seasons);

          case 7:
            _context2.next = 9;
            return pubgAPI.getSeasons();

          case 9:
            seasons = _context2.sent;
            _context2.next = 12;
            return setCachedSeasons(seasons)["catch"](function (err) {
              throw err;
            });

          case 12:
            return _context2.abrupt("return", seasons);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getSeasons() {
    return _ref2.apply(this, arguments);
  };
}();

var getCurrentSeason =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3() {
    var seasons;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getSeasons();

          case 2:
            seasons = _context3.sent;
            return _context3.abrupt("return", seasons.filter(function (season) {
              return season.attributes.isCurrentSeason;
            })[0]);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getCurrentSeason() {
    return _ref3.apply(this, arguments);
  };
}();

module.exports = {
  storeSeasons: storeSeasons,
  getSeasons: getSeasons,
  getCurrentSeason: getCurrentSeason
};

/***/ }),

/***/ "./server/routes/controllers/statsController.js":
/*!******************************************************!*\
  !*** ./server/routes/controllers/statsController.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _isArray = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js"));

var _ = __webpack_require__(/*! lodash */ "lodash");

var seasonsController = __webpack_require__(/*! ./seasonsController */ "./server/routes/controllers/seasonsController.js");

var cache = __webpack_require__(/*! ../../cache/cacheController */ "./server/cache/cacheController.js");

var _require = __webpack_require__(/*! ../../core/statsAnalysis */ "./server/core/statsAnalysis.js"),
    getPlayersSeasonStats = _require.getPlayersSeasonStats,
    getSquadStatsFromMatches = _require.getSquadStatsFromMatches;

var test =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.json(req.query);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function test(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * @route GET /api/stats?squad=[playernames]&season=[seasonid]
 * @description Returns the stats of a squad of players for a given season
 * @returns {<Array<PlayerSeasons>>} An array of filtered pubg.js PlayerSeasons objects.
 * @access Public
 */


var getSquadStats =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var _req$query, squad, season, refresh, currentSeason, playerNamesArray, playersStats, fetchedPlayers, _ref3, cachedPlayers, nonCachedPlayers, newCachedPlayers;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$query = req.query, squad = _req$query.squad, season = _req$query.season, refresh = _req$query.refresh;

            if (season) {
              _context2.next = 6;
              break;
            }

            _context2.next = 4;
            return seasonsController.getCurrentSeason();

          case 4:
            currentSeason = _context2.sent;
            season = currentSeason.id;

          case 6:
            playerNamesArray = squad.split(',');
            _context2.prev = 7;

            if (!refresh) {
              _context2.next = 15;
              break;
            }

            _context2.next = 11;
            return getPlayersSeasonStats(playerNamesArray, season);

          case 11:
            fetchedPlayers = _context2.sent;
            playersStats = (0, _isArray["default"])(fetchedPlayers) ? fetchedPlayers.map(function (p) {
              return _.pick(p, ['attributes', 'relationships.player', 'relationships.season']);
            }) : _.pick(fetchedPlayers, ['attributes', 'relationships.player', 'relationships.season']);
            _context2.next = 29;
            break;

          case 15:
            _context2.next = 17;
            return cache.getCachedPlayerSeasons(playerNamesArray);

          case 17:
            _ref3 = _context2.sent;
            cachedPlayers = _ref3.cachedPlayers;
            nonCachedPlayers = _ref3.nonCachedPlayers;

            if (!(nonCachedPlayers.length > 0)) {
              _context2.next = 28;
              break;
            }

            _context2.next = 23;
            return getPlayersSeasonStats(nonCachedPlayers, season);

          case 23:
            fetchedPlayers = _context2.sent;
            newCachedPlayers = (0, _isArray["default"])(fetchedPlayers) ? fetchedPlayers.map(function (p) {
              return _.pick(p, ['attributes', 'relationships.player', 'relationships.season']);
            }) : _.pick(fetchedPlayers, ['attributes', 'relationships.player', 'relationships.season']); // Cache the fetched players

            _context2.next = 27;
            return cache.setCachedPlayerSeasons(newCachedPlayers);

          case 27:
            cachedPlayers = cachedPlayers.concat(newCachedPlayers);

          case 28:
            playersStats = cachedPlayers;

          case 29:
            res.status(200).json(playersStats);
            _context2.next = 35;
            break;

          case 32:
            _context2.prev = 32;
            _context2.t0 = _context2["catch"](7);

            if (_context2.t0.message.status) {
              res.status(_context2.t0.message.status).json(_context2.t0.message);
            } else if (_context2.t0.status) {
              res.status(_context2.t0.status).json(_context2.t0);
            } else {
              res.status(_context2.t0).json(_context2.t0.message);
            }

          case 35:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 32]]);
  }));

  return function getSquadStats(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/**
 * @route GET /api/stats/matches
 * @description returns the stats of players from the matches that they have played together this season
 */


var getSquadMatchesStats =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var _req$body, matches, playerNames;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, matches = _req$body.matches, playerNames = _req$body.playerNames;
            _context3.prev = 1;
            _context3.t0 = res.status(200);
            _context3.next = 5;
            return getSquadStatsFromMatches(matches, playerNames);

          case 5:
            _context3.t1 = _context3.sent;

            _context3.t0.json.call(_context3.t0, _context3.t1);

            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t2 = _context3["catch"](1);
            console.log(_context3.t2);

            if (_context3.t2.status) {
              res.status(_context3.t2.status).json({
                error: _context3.t2.status,
                message: _context3.t2.message
              });
            } else {
              res.status(500).json({
                error: 500,
                message: _context3.t2.message
              });
            }

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));

  return function getSquadMatchesStats(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

module.exports = {
  test: test,
  getSquadStats: getSquadStats,
  getSquadMatchesStats: getSquadMatchesStats
};

/***/ }),

/***/ "./server/routes/index.js":
/*!********************************!*\
  !*** ./server/routes/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var seasons = __webpack_require__(/*! ./controllers/seasonsController */ "./server/routes/controllers/seasonsController.js");

var stats = __webpack_require__(/*! ./controllers/statsController */ "./server/routes/controllers/statsController.js");

module.exports = {
  seasons: seasons,
  stats: stats
};

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./pages/api/stats/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivan/Documents/Developer/Portfolio-Projects/mypubgsquad/mypubgsquad-next/src/pages/api/stats/index.js */"./pages/api/stats/index.js");


/***/ }),

/***/ "@zaytt/pubg":
/*!******************************!*\
  !*** external "@zaytt/pubg" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@zaytt/pubg");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash.add":
/*!*****************************!*\
  !*** external "lodash.add" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.add");

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

/***/ "lodash.isnumber":
/*!**********************************!*\
  !*** external "lodash.isnumber" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.isnumber");

/***/ }),

/***/ "lodash.keys":
/*!******************************!*\
  !*** external "lodash.keys" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.keys");

/***/ }),

/***/ "lodash.merge":
/*!*******************************!*\
  !*** external "lodash.merge" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.merge");

/***/ }),

/***/ "lodash.mergewith":
/*!***********************************!*\
  !*** external "lodash.mergewith" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.mergewith");

/***/ }),

/***/ "lodash.omit":
/*!******************************!*\
  !*** external "lodash.omit" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.omit");

/***/ }),

/***/ "memjs":
/*!************************!*\
  !*** external "memjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("memjs");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=stats.js.map