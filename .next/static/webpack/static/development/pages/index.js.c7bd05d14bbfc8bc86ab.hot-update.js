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
    className: "jsx-851108457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-851108457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Orgynize"), __jsx("link", {
    rel: "canonical",
    href: "https://orgynize.app",
    className: "jsx-851108457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Abel|Sedgwick+Ave+Display&display=swap",
    rel: "stylesheet",
    className: "jsx-851108457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3644583777",
    __self: this
  }, "body{background:black;color:white;font-family:'Abel';margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzJCLEFBRzRCLGlCQUNMLFlBQ08sbUJBQ1YsU0FDQyxVQUNaIiwiZmlsZSI6Ii93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxuICAgICAgICAubWFwKFxuICAgICAgICAgICAga2V5ID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKVxuICAgICAgICApXG4gICAgICAgIC5qb2luKFwiJlwiKTtcbn07XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgICAgIGlmIChlbWFpbCA9PSBudWxsIHx8IGVtYWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaChcIi9cIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxuICAgICAgICAgICAgYm9keTogZW5jb2RlKHsgXCJmb3JtLW5hbWVcIjogXCJjb250YWN0XCIsIGVtYWlsOiBlbWFpbCB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2V0U2hvd0NvbmZpcm1hdGlvbih0cnVlKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgIDx0aXRsZT5Pcmd5bml6ZTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9vcmd5bml6ZS5hcHBcIiAvPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYmVsfFNlZGd3aWNrK0F2ZStEaXNwbGF5JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWJlbCc7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTZWRnd2ljayBBdmUgRGlzcGxheSc7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+Rm9yIHBhcnR5IHBsYW5uZXJzIHRoYXQgYXJlIG5vdCBmcmVha3MgaW4gdGhlIHNwcmVhZHNoZWV0czwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9sb2dvLnBuZ1wiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG5hbWU9XCJjb250YWN0XCJcbiAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgZGF0YS1uZXRsaWZ5PVwidHJ1ZVwiXG4gICAgICAgICAgICBkYXRhLW5ldGxpZnktaG9uZXlwb3Q9XCJib3QtZmllbGRcIlxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgPlxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm0tbmFtZVwiIHZhbHVlPVwiY29udGFjdFwiIC8+XG4gICAgICAgICAgICA8bGFiZWw+V2FudCB0byBiZSBub3RpZmllZCB3aGVuIHdlJ3JlIHJlYWR5IGZvciB5b3UgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCBwYXJ0eWluZz88L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBoZXJlXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICA8YnV0dG9uPkdvPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxwPk9yZ3luaXplIGJ5IFF1eHh4bjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdfQ== */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1533353985",
    __self: this
  }, "h1.jsx-851108457{font-family:'Sedgwick Ave Display';text-align:center;}.container.jsx-851108457{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100vh;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:20px;position:relative;width:100vw;}.logo.jsx-851108457{object-fit:contain;}.footer.jsx-851108457{border-top:0.5px solid white;width:calc(100vw - 40px);}.image.jsx-851108457{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;}img.jsx-851108457{width:100%;object-fit:contain;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ3NCLEFBR29ELEFBS2hCLEFBV0EsQUFJVSxBQUtoQixBQUtGLFdBQ1EsUUFkdkIsVUFJNkIsQ0FXN0IsS0EvQnNCLGtCQUN0QixDQW9CQSxvQkFJMkIsbUJBcEJWLDBFQUNTLE1Bb0JWLFlBQ2hCLDREQXBCaUIsYUFDVSxtR0FDVixhQUNLLGtCQUNOLFlBQ2hCIiwiZmlsZSI6Ii93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxuICAgICAgICAubWFwKFxuICAgICAgICAgICAga2V5ID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKVxuICAgICAgICApXG4gICAgICAgIC5qb2luKFwiJlwiKTtcbn07XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgICAgIGlmIChlbWFpbCA9PSBudWxsIHx8IGVtYWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmZXRjaChcIi9cIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxuICAgICAgICAgICAgYm9keTogZW5jb2RlKHsgXCJmb3JtLW5hbWVcIjogXCJjb250YWN0XCIsIGVtYWlsOiBlbWFpbCB9KVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2V0U2hvd0NvbmZpcm1hdGlvbih0cnVlKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgIDx0aXRsZT5Pcmd5bml6ZTwvdGl0bGU+XG4gICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9vcmd5bml6ZS5hcHBcIiAvPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYmVsfFNlZGd3aWNrK0F2ZStEaXNwbGF5JmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQWJlbCc7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdTZWRnd2ljayBBdmUgRGlzcGxheSc7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDAuNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDE+Rm9yIHBhcnR5IHBsYW5uZXJzIHRoYXQgYXJlIG5vdCBmcmVha3MgaW4gdGhlIHNwcmVhZHNoZWV0czwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz1cIi9sb2dvLnBuZ1wiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG5hbWU9XCJjb250YWN0XCJcbiAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgZGF0YS1uZXRsaWZ5PVwidHJ1ZVwiXG4gICAgICAgICAgICBkYXRhLW5ldGxpZnktaG9uZXlwb3Q9XCJib3QtZmllbGRcIlxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgPlxuICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm0tbmFtZVwiIHZhbHVlPVwiY29udGFjdFwiIC8+XG4gICAgICAgICAgICA8bGFiZWw+V2FudCB0byBiZSBub3RpZmllZCB3aGVuIHdlJ3JlIHJlYWR5IGZvciB5b3UgdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCBwYXJ0eWluZz88L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBoZXJlXCIgdHlwZT1cInRleHRcIi8+XG4gICAgICAgICAgICA8YnV0dG9uPkdvPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxwPk9yZ3luaXplIGJ5IFF1eHh4bjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdfQ== */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx("div", {
    className: "jsx-851108457" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-851108457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "For party planners that are not freaks in the spreadsheets"), __jsx("div", {
    className: "jsx-851108457" + " " + "image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("img", {
    src: "/logo.png",
    className: "jsx-851108457" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), __jsx("form", {
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
    className: "jsx-851108457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    className: "jsx-851108457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("label", {
    className: "jsx-851108457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Want to be notified when we're ready for you to start partying?"), __jsx("input", {
    name: "email",
    placeholder: "Your email here",
    type: "text",
    className: "jsx-851108457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("button", {
    className: "jsx-851108457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Go")), __jsx("div", {
    className: "jsx-851108457" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-851108457",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Orgynize by Quxxxn"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.c7bd05d14bbfc8bc86ab.hot-update.js.map