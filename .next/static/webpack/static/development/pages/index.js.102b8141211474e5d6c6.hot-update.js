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
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("meta", {
    "viewport-fit": "cover",
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Orgynize"), __jsx("link", {
    rel: "canonical",
    href: "https://orgynize.app",
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Abel|Sedgwick+Ave+Display&display=swap",
    rel: "stylesheet",
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3885565696",
    __self: this
  }, "html,body{background:black;color:white;font-family:\"Abel\";margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3lCLEFBSTRCLGlCQUNMLFlBQ08sbUJBQ1YsU0FDQyxVQUNaIiwiZmlsZSI6Ii93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBGbGV4Ym94IGZyb20gJ2ZsZXhib3gtcmVhY3QnO1xuXG5jb25zdCBlbmNvZGUgPSBkYXRhID0+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpXG4gICAgLm1hcChrZXkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pKVxuICAgIC5qb2luKFwiJlwiKTtcbn07XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGlmIChlbWFpbCA9PSBudWxsIHx8IGVtYWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2goXCIvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgIGJvZHk6IGVuY29kZSh7IFwiZm9ybS1uYW1lXCI6IFwiY29udGFjdFwiLCBlbWFpbDogZW1haWwgfSlcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gc2V0U2hvd0NvbmZpcm1hdGlvbih0cnVlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgdmlld3BvcnQtZml0PVwiY292ZXJcIiAvPlxuICAgICAgICA8dGl0bGU+T3JneW5pemU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9vcmd5bml6ZS5hcHBcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxTZWRnd2ljaytBdmUrRGlzcGxheSZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFiZWxcIjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiU2VkZ3dpY2sgQXZlIERpc3BsYXlcIjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAwLjVweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgfcOfXG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8RmxleGJveCBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgbWF4SGVpZ2h0PVwiMTAwdmhcIj5cbiAgICAgICAgPEZsZXhib3g+XG4gICAgICAgICAgICA8aDE+Rm9yIHBhcnR5IHBsYW5uZXJzIHRoYXQgYXJlIG5vdCBmcmVha3MgaW4gdGhlIHNwcmVhZHNoZWV0czwvaDE+XG4gICAgICAgIDwvRmxleGJveD5cbiAgICAgICAgPEZsZXhib3g+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgPC9GbGV4Ym94PlxuICAgICAgICA8RmxleGJveD5cbiAgICAgICAgPGZvcm1cbiAgICAgICAgICBuYW1lPVwiY29udGFjdFwiXG4gICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgZGF0YS1uZXRsaWZ5PVwidHJ1ZVwiXG4gICAgICAgICAgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCJcbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCIgLz5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBXYW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gd2UncmUgcmVhZHkgZm9yIHlvdSB0byBzdGFydCBwYXJ0eWluZz9cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgaGVyZVwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICA8YnV0dG9uPkdvPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9GbGV4Ym94PlxuICAgICAgICA8RmxleGJveD5cbiAgICAgICAgICA8cD5Pcmd5bml6ZSBieSBRdXh4eG48L3A+XG4gICAgICAgIDwvRmxleGJveD5cbiAgICAgIDwvRmxleGJveD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1133566878",
    __self: this
  }, "h1.jsx-2212911863{font-family:\"Sedgwick Ave Display\";text-align:center;}.footer.jsx-2212911863{border-top:0.5px solid white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ2tCLEFBRzhDLEFBS04sNkJBQy9CLE1BTG9CLGtCQUNwQiIsImZpbGUiOiIvd29ya3NwYWNlL29yZ3luaXplLXNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgRmxleGJveCBmcm9tICdmbGV4Ym94LXJlYWN0JztcblxuY29uc3QgZW5jb2RlID0gZGF0YSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxuICAgIC5tYXAoa2V5ID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKSlcbiAgICAuam9pbihcIiZcIik7XG59O1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBpZiAoZW1haWwgPT0gbnVsbCB8fCBlbWFpbC5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZldGNoKFwiL1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXG4gICAgICBib2R5OiBlbmNvZGUoeyBcImZvcm0tbmFtZVwiOiBcImNvbnRhY3RcIiwgZW1haWw6IGVtYWlsIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHNldFNob3dDb25maXJtYXRpb24odHJ1ZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIHZpZXdwb3J0LWZpdD1cImNvdmVyXCIgLz5cbiAgICAgICAgPHRpdGxlPk9yZ3luaXplPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vb3JneW5pemUuYXBwXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFiZWx8U2VkZ3dpY2srQXZlK0Rpc3BsYXkmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBYmVsXCI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNlZGd3aWNrIEF2ZSBEaXNwbGF5XCI7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgd2hpdGU7XG4gICAgICAgIH3Dn1xuICAgICAgYH08L3N0eWxlPlxuICAgICAgPEZsZXhib3ggZmxleERpcmVjdGlvbj1cImNvbHVtblwiIG1heEhlaWdodD1cIjEwMHZoXCI+XG4gICAgICAgIDxGbGV4Ym94PlxuICAgICAgICAgICAgPGgxPkZvciBwYXJ0eSBwbGFubmVycyB0aGF0IGFyZSBub3QgZnJlYWtzIGluIHRoZSBzcHJlYWRzaGVldHM8L2gxPlxuICAgICAgICA8L0ZsZXhib3g+XG4gICAgICAgIDxGbGV4Ym94PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9sb2dvLnBuZ1wiIC8+XG4gICAgICAgIDwvRmxleGJveD5cbiAgICAgICAgPEZsZXhib3g+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgbmFtZT1cImNvbnRhY3RcIlxuICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgIGRhdGEtbmV0bGlmeT1cInRydWVcIlxuICAgICAgICAgIGRhdGEtbmV0bGlmeS1ob25leXBvdD1cImJvdC1maWVsZFwiXG4gICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm0tbmFtZVwiIHZhbHVlPVwiY29udGFjdFwiIC8+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgV2FudCB0byBiZSBub3RpZmllZCB3aGVuIHdlJ3JlIHJlYWR5IGZvciB5b3UgdG8gc3RhcnQgcGFydHlpbmc/XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGhlcmVcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgICAgPGJ1dHRvbj5HbzwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvRmxleGJveD5cbiAgICAgICAgPEZsZXhib3g+XG4gICAgICAgICAgPHA+T3JneW5pemUgYnkgUXV4eHhuPC9wPlxuICAgICAgICA8L0ZsZXhib3g+XG4gICAgICA8L0ZsZXhib3g+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
    flexDirection: "column",
    maxHeight: "100vh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "For party planners that are not freaks in the spreadsheets")), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("img", {
    src: "/logo.png",
    className: "jsx-2212911863" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  })), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("form", {
    name: "contact",
    method: "post",
    "data-netlify": "true",
    "data-netlify-honeypot": "bot-field",
    onSubmit: handleSubmit,
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("label", {
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Want to be notified when we're ready for you to start partying?"), __jsx("input", {
    name: "email",
    placeholder: "Your email here",
    type: "text",
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("button", {
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Go"))), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2212911863",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Orgynize by Quxxxn"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.102b8141211474e5d6c6.hot-update.js.map