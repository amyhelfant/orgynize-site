webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flexbox_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flexbox-react */ "./node_modules/flexbox-react/dist/index.js");
/* harmony import */ var flexbox_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flexbox_react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/workspace/orgynize-site/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var encode = function encode(data) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
  }).join("&");
};

function Home() {
  var handleSubmit = function handleSubmit(e) {
    if (email == null || email.length <= 0) {
      return;
    }

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encode({
        "form-name": "contact",
        email: email
      })
    }).then(function () {
      return setShowConfirmation(true);
    })["catch"](function (error) {
      return console.log(error);
    });
    e.preventDefault();
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-2673754123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("meta", {
    "viewport-fit": "cover",
    className: "jsx-2673754123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-2673754123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Orgynize"), __jsx("link", {
    rel: "canonical",
    href: "https://orgynize.app",
    className: "jsx-2673754123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Abel|Sedgwick+Ave+Display&display=swap",
    rel: "stylesheet",
    className: "jsx-2673754123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4250896198",
    __self: this
  }, "html,body{background:black;color:white;font-family:\"Abel\";margin:0;padding:0;height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3lCLEFBSTRCLGlCQUNMLFlBQ08sbUJBQ1YsU0FDQyxVQUNHLGFBQ2YiLCJmaWxlIjoiL3dvcmtzcGFjZS9vcmd5bml6ZS1zaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEZsZXhib3ggZnJvbSAnZmxleGJveC1yZWFjdCc7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgaWYgKGVtYWlsID09IG51bGwgfHwgZW1haWwubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmZXRjaChcIi9cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxuICAgICAgYm9keTogZW5jb2RlKHsgXCJmb3JtLW5hbWVcIjogXCJjb250YWN0XCIsIGVtYWlsOiBlbWFpbCB9KVxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiBzZXRTaG93Q29uZmlybWF0aW9uKHRydWUpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSB2aWV3cG9ydC1maXQ9XCJjb3ZlclwiIC8+XG4gICAgICAgIDx0aXRsZT5Pcmd5bml6ZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL29yZ3luaXplLmFwcFwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYmVsfFNlZGd3aWNrK0F2ZStEaXNwbGF5JmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQWJlbFwiO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZGd3aWNrIEF2ZSBEaXNwbGF5XCI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8RmxleGJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWF4SGVpZ2h0PVwiOTB2aFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8RmxleGJveCBmbGV4R3Jvdz17MX0+XG4gICAgICAgICAgICA8aDE+Rm9yIHBhcnR5IHBsYW5uZXJzIHRoYXQgYXJlIG5vdCBmcmVha3MgaW4gdGhlIHNwcmVhZHNoZWV0czwvaDE+XG4gICAgICAgIDwvRmxleGJveD5cbiAgICAgICAgPEZsZXhib3ggZmxleEdyb3c9ezJ9PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9sb2dvLnBuZ1wiIC8+XG4gICAgICAgIDwvRmxleGJveD5cbiAgICAgICAgPEZsZXhib3ggZmxleEdyb3c9ezF9PlxuICAgICAgICA8Zm9ybVxuICAgICAgICAgIG5hbWU9XCJjb250YWN0XCJcbiAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICBkYXRhLW5ldGxpZnk9XCJ0cnVlXCJcbiAgICAgICAgICBkYXRhLW5ldGxpZnktaG9uZXlwb3Q9XCJib3QtZmllbGRcIlxuICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtLW5hbWVcIiB2YWx1ZT1cImNvbnRhY3RcIiAvPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFdhbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB3ZSdyZSByZWFkeSBmb3IgeW91IHRvIHN0YXJ0IHBhcnR5aW5nP1xuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBoZXJlXCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICAgIDxidXR0b24+R288L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L0ZsZXhib3g+XG4gICAgICAgIDxGbGV4Ym94IGZsZXhHcm93PXsxfSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJcIj5Pcmd5bml6ZSBieSBRdXh4eG48L3A+XG4gICAgICAgIDwvRmxleGJveD5cbiAgICAgIDwvRmxleGJveD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3673455588",
    __self: this
  }, "h1.jsx-2673754123{font-family:\"Sedgwick Ave Display\";text-align:center;}.footer.jsx-2673754123{border-top:0.5px solid white;padding:8px 16px;width:100%;}.logo.jsx-2673754123{object-fit:contain;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRGtCLEFBRzhDLEFBS04sQUFNUixtQkFDdkIsVUFObUIsTUFMQyxXQU1QLE9BTGIsSUFNQSIsImZpbGUiOiIvd29ya3NwYWNlL29yZ3luaXplLXNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgRmxleGJveCBmcm9tICdmbGV4Ym94LXJlYWN0JztcblxuY29uc3QgZW5jb2RlID0gZGF0YSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxuICAgIC5tYXAoa2V5ID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKSlcbiAgICAuam9pbihcIiZcIik7XG59O1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBpZiAoZW1haWwgPT0gbnVsbCB8fCBlbWFpbC5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZldGNoKFwiL1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXG4gICAgICBib2R5OiBlbmNvZGUoeyBcImZvcm0tbmFtZVwiOiBcImNvbnRhY3RcIiwgZW1haWw6IGVtYWlsIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHNldFNob3dDb25maXJtYXRpb24odHJ1ZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIHZpZXdwb3J0LWZpdD1cImNvdmVyXCIgLz5cbiAgICAgICAgPHRpdGxlPk9yZ3luaXplPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vb3JneW5pemUuYXBwXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFiZWx8U2VkZ3dpY2srQXZlK0Rpc3BsYXkmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBYmVsXCI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU2VkZ3dpY2sgQXZlIERpc3BsYXlcIjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxGbGV4Ym94IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBtYXhIZWlnaHQ9XCI5MHZoXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgIDxGbGV4Ym94IGZsZXhHcm93PXsxfT5cbiAgICAgICAgICAgIDxoMT5Gb3IgcGFydHkgcGxhbm5lcnMgdGhhdCBhcmUgbm90IGZyZWFrcyBpbiB0aGUgc3ByZWFkc2hlZXRzPC9oMT5cbiAgICAgICAgPC9GbGV4Ym94PlxuICAgICAgICA8RmxleGJveCBmbGV4R3Jvdz17Mn0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgPC9GbGV4Ym94PlxuICAgICAgICA8RmxleGJveCBmbGV4R3Jvdz17MX0+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgbmFtZT1cImNvbnRhY3RcIlxuICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgIGRhdGEtbmV0bGlmeT1cInRydWVcIlxuICAgICAgICAgIGRhdGEtbmV0bGlmeS1ob25leXBvdD1cImJvdC1maWVsZFwiXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm0tbmFtZVwiIHZhbHVlPVwiY29udGFjdFwiIC8+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgV2FudCB0byBiZSBub3RpZmllZCB3aGVuIHdlJ3JlIHJlYWR5IGZvciB5b3UgdG8gc3RhcnQgcGFydHlpbmc/XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGhlcmVcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgPGJ1dHRvbj5HbzwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvRmxleGJveD5cbiAgICAgICAgPEZsZXhib3ggZmxleEdyb3c9ezF9IHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3RlclwiPk9yZ3luaXplIGJ5IFF1eHh4bjwvcD5cbiAgICAgICAgPC9GbGV4Ym94PlxuICAgICAgPC9GbGV4Ym94PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
    flexDirection: "column",
    maxHeight: "90vh",
    justifyContent: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
    flexGrow: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2673754123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "For party planners that are not freaks in the spreadsheets")), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
    flexGrow: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("img", {
    src: "/logo.png",
    className: "jsx-2673754123" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
    flexGrow: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("form", {
    name: "contact",
    method: "post",
    "data-netlify": "true",
    "data-netlify-honeypot": "bot-field",
    onSubmit: handleSubmit,
    className: "jsx-2673754123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    className: "jsx-2673754123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("label", {
    className: "jsx-2673754123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Want to be notified when we're ready for you to start partying?"), __jsx("input", {
    name: "email",
    placeholder: "Your email here",
    type: "text",
    className: "jsx-2673754123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("button", {
    className: "jsx-2673754123",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Go"))), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
    flexGrow: 1,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2673754123" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Orgynize by Quxxxn"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.a13d418a0c98d242d44f.hot-update.js.map