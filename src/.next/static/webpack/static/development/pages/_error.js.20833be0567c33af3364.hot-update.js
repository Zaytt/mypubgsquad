webpackHotUpdate("static/development/pages/_error.js",{

/***/ "../node_modules/next-server/head.js":
false,

/***/ "../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fivan%2FDocuments%2FDeveloper%2FPortfolio-Projects%2Fmypubgsquad%2Fmypubgsquad-next%2Fsrc%2Fpages%2F_error.js!./":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fivan%2FDocuments%2FDeveloper%2FPortfolio-Projects%2Fmypubgsquad%2Fmypubgsquad-next%2Fsrc%2Fpages%2F_error.js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var page = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
      if(true) {
        module.hot.accept(/*! ./pages/_error.js */ "./pages/_error.js", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js")
          next.router.update("/_error", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "../node_modules/next/dist/pages/_error.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");






/**
 * Creating a page named _error.js lets you override HTTP error messages
 */





var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ErrorPage, _React$Component);

  function ErrorPage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ErrorPage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ErrorPage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ErrorPage, [{
    key: "render",
    value: function render() {
      var response;

      switch (this.props.errorCode) {
        case 200: // Also display a 404 if someone requests /_error explicitly

        case 401:
          response = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
            title: "Unauthorized| MYPUBGSQUAD.com"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "pt-5 container text-center full-height"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
            className: "display-4 "
          }, "Registered users only"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "You must be a registered user to view this content."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/login"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Login")), ' ', "or", ' ', react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/login"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Register")), ' ', "to view this content")));

        case 404:
          response = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
            title: "Page Not Found | MYPUBGSQUAD.com"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "pt-5 container text-center full-height"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
            className: "display-4 "
          }, "Page Not Found"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "The page ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, this.props.router.asPath), " does not exist."), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", null, "Go Home")))));
          break;

        case 500:
          response = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
            title: "Internal Server Error| MYPUBGSQUAD.com"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "pt-5 container text-center"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
            className: "display-4"
          }, "Internal Server Error"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "An internal server error occurred.")));
          break;

        default:
          response = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
            title: "Internal Server Error| MYPUBGSQUAD.com"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "pt-5 container text-center"
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
            className: "display-4"
          }, "HTTP ", this.props.errorCode, " Error"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "An ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, "HTTP ", this.props.errorCode), " error occurred while trying to access ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("strong", null, this.props.router.pathname))));
      }

      return response;
    }
  }], [{
    key: "propTypes",
    value: function propTypes() {
      return {
        errorCode: react__WEBPACK_IMPORTED_MODULE_5___default.a.PropTypes.number.isRequired,
        url: react__WEBPACK_IMPORTED_MODULE_5___default.a.PropTypes.string.isRequired
      };
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;
      var errorCode = res ? res.statusCode : xhr ? xhr.status : null;
      return {
        errorCode: errorCode
      };
    }
  }]);

  return ErrorPage;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(ErrorPage));

/***/ }),

/***/ 0:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fivan%2FDocuments%2FDeveloper%2FPortfolio-Projects%2Fmypubgsquad%2Fmypubgsquad-next%2Fsrc%2Fpages%2F_error.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2FUsers%2Fivan%2FDocuments%2FDeveloper%2FPortfolio-Projects%2Fmypubgsquad%2Fmypubgsquad-next%2Fsrc%2Fpages%2F_error.js! */"../node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2FUsers%2Fivan%2FDocuments%2FDeveloper%2FPortfolio-Projects%2Fmypubgsquad%2Fmypubgsquad-next%2Fsrc%2Fpages%2F_error.js!./");


/***/ })

})
//# sourceMappingURL=_error.js.20833be0567c33af3364.hot-update.js.map