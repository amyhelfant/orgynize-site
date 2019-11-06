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
      lineNumber: 29
    },
    __self: this
  }, __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Orgynize"), __jsx("link", {
    rel: "canonical",
    href: "https://orgynize.app",
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Abel|Sedgwick+Ave+Display&display=swap",
    rel: "stylesheet",
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1660626986",
    __self: this
  }, "body{background:black;color:white;font-family:'Abel';}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzJCLEFBRzRCLGlCQUNMLFlBQ08sbUJBQ3JCIiwiZmlsZSI6Ii93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxuICAgICAgICAubWFwKFxuICAgICAgICAgICAga2V5ID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKVxuICAgICAgICApXG4gICAgICAgIC5qb2luKFwiJlwiKTtcbn07XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgICAgIGlmIChlbWFpbCA9PSBudWxsIHx8IGVtYWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaChcIi9cIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxuICAgICAgICAgICAgYm9keTogZW5jb2RlKHsgXCJmb3JtLW5hbWVcIjogXCJjb250YWN0XCIsIGVtYWlsOiBlbWFpbCB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2V0U2hvd0NvbmZpcm1hdGlvbih0cnVlKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgIDx0aXRsZT5Pcmd5bml6ZTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9vcmd5bml6ZS5hcHBcIiAvPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYmVsfFNlZGd3aWNrK0F2ZStEaXNwbGF5JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWJlbCc7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTZWRnd2ljayBBdmUgRGlzcGxheSc7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCc7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHZ3JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMC41cHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdnctNDBweCk7XG4gICAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+Rm9yIHBhcnR5IHBsYW5uZXJzIHRoYXQgYXJlIG5vdCBmcmVha3MgaW4gdGhlIHNwcmVhZHNoZWV0czwvaDE+XG4gICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIvPlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBuYW1lPVwiY29udGFjdFwiXG4gICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgIGRhdGEtbmV0bGlmeT1cInRydWVcIlxuICAgICAgICAgICAgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgID5cbiAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtLW5hbWVcIiB2YWx1ZT1cImNvbnRhY3RcIiAvPlxuICAgICAgICAgICAgPGxhYmVsPldhbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB3ZSdyZSByZWFkeSBmb3IgeW91IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgcGFydHlpbmc/PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgaGVyZVwiIHR5cGU9XCJ0ZXh0XCIvPlxuICAgICAgICAgICAgPGJ1dHRvbj5HbzwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICA8cD5Pcmd5bml6ZSBieSBRdXh4eG48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXX0= */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4204282216",
    __self: this
  }, "h1.jsx-3249976491{font-family:'Sedgwick Ave Display';text-align:center;}.container.jsx-3249976491{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:'100vh';-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:20px;width:'100vw';}.footer.jsx-3249976491{border-top:0.5px solid white;width:calc(100vw-40px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q3NCLEFBR29ELEFBS2hCLEFBVVUsNkJBQ04sTUFmTCxpQkFnQnRCLENBZkEsd0NBSWlCLDBFQUNTLDhFQUNQLGVBQ1EsbUdBQ1YsYUFDQyxjQUNsQiIsImZpbGUiOiIvd29ya3NwYWNlL29yZ3luaXplLXNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5jb25zdCBlbmNvZGUgPSBkYXRhID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAgICAgLm1hcChcbiAgICAgICAgICAgIGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSlcbiAgICAgICAgKVxuICAgICAgICAuam9pbihcIiZcIik7XG59O1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgICAgICBpZiAoZW1haWwgPT0gbnVsbCB8fCBlbWFpbC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZmV0Y2goXCIvXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgICAgICAgIGJvZHk6IGVuY29kZSh7IFwiZm9ybS1uYW1lXCI6IFwiY29udGFjdFwiLCBlbWFpbDogZW1haWwgfSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHNldFNob3dDb25maXJtYXRpb24odHJ1ZSkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgICAgICA8dGl0bGU+T3JneW5pemU8L3RpdGxlPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vb3JneW5pemUuYXBwXCIgLz5cbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxTZWRnd2ljaytBdmUrRGlzcGxheSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0FiZWwnO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2VkZ3dpY2sgQXZlIERpc3BsYXknO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDB2dyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LTQwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGgxPkZvciBwYXJ0eSBwbGFubmVycyB0aGF0IGFyZSBub3QgZnJlYWtzIGluIHRoZSBzcHJlYWRzaGVldHM8L2gxPlxuICAgICAgICA8aW1nIHNyYz1cIi9sb2dvLnBuZ1wiLz5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RcIlxuICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICBkYXRhLW5ldGxpZnk9XCJ0cnVlXCJcbiAgICAgICAgICAgIGRhdGEtbmV0bGlmeS1ob25leXBvdD1cImJvdC1maWVsZFwiXG4gICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICA+XG4gICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCIgLz5cbiAgICAgICAgICAgIDxsYWJlbD5XYW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gd2UncmUgcmVhZHkgZm9yIHlvdSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0IHBhcnR5aW5nPzwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGhlcmVcIiB0eXBlPVwidGV4dFwiLz5cbiAgICAgICAgICAgIDxidXR0b24+R288L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgPHA+T3JneW5pemUgYnkgUXV4eHhuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il19 */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx("div", {
    className: "jsx-3249976491" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "For party planners that are not freaks in the spreadsheets"), __jsx("img", {
    src: "/logo.png",
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("form", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    },
    name: "contact",
    method: "post",
    "data-netlify": "true",
    "data-netlify-honeypot": "bot-field",
    onSubmit: handleSubmit,
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("label", {
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Want to be notified when we're ready for you to start partying?"), __jsx("input", {
    name: "email",
    placeholder: "Your email here",
    type: "text",
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("button", {
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Go")), __jsx("div", {
    className: "jsx-3249976491" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-3249976491",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Orgynize by Quxxxn"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.193d089e72682a80bc4a.hot-update.js.map