webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flexbox_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flexbox-react */ "./node_modules/flexbox-react/dist/index.js");
/* harmony import */ var flexbox_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flexbox_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-fade-in */ "./node_modules/react-fade-in/lib/index.js");
/* harmony import */ var react_fade_in__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_fade_in__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-reveal/Zoom */ "./node_modules/react-reveal/Zoom.js");
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-reveal/Flip */ "./node_modules/react-reveal/Flip.js");
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "/workspace/orgynize-site/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var encode = function encode(data) {
  return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(data).map(function (key) {
    return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
  }).join("&");
};

function Home() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      email = _React$useState2[0],
      setEmail = _React$useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

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
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-136715111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("meta", {
    "viewport-fit": "cover",
    className: "jsx-136715111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-136715111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Orgynize"), __jsx("link", {
    rel: "canonical",
    href: "https://orgynize.app",
    className: "jsx-136715111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Abel|Sedgwick+Ave+Display&display=swap",
    rel: "stylesheet",
    className: "jsx-136715111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4250896198",
    __self: this
  }, "html,body{background:black;color:white;font-family:\"Abel\";margin:0;padding:0;height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q3lCLEFBSTRCLGlCQUNMLFlBQ08sbUJBQ1YsU0FDQyxVQUNHLGFBQ2YiLCJmaWxlIjoiL3dvcmtzcGFjZS9vcmd5bml6ZS1zaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEZsZXhib3ggZnJvbSBcImZsZXhib3gtcmVhY3RcIjtcbmltcG9ydCBGYWRlSW4gZnJvbSAncmVhY3QtZmFkZS1pbic7XG5pbXBvcnQgWm9vbSBmcm9tICdyZWFjdC1yZXZlYWwvWm9vbSc7XG5pbXBvcnQgRmxpcCBmcm9tICdyZWFjdC1yZXZlYWwvRmxpcCc7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlbWFpbCA9PSBudWxsIHx8IGVtYWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2goXCIvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgIGJvZHk6IGVuY29kZSh7IFwiZm9ybS1uYW1lXCI6IFwiY29udGFjdFwiLCBlbWFpbDogZW1haWwgfSlcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gc2V0U2hvd0NvbmZpcm1hdGlvbih0cnVlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgdmlld3BvcnQtZml0PVwiY292ZXJcIiAvPlxuICAgICAgICA8dGl0bGU+T3JneW5pemU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9vcmd5bml6ZS5hcHBcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxTZWRnd2ljaytBdmUrRGlzcGxheSZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFiZWxcIjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICB6LWluZXg6IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgOHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBmZjIyO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gICAgICAgICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gICAgICAgICAgbWFyZ2luOiAwOyAvKiAyICovXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8RmxleGJveFxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgbWF4SGVpZ2h0PVwiOTB2aFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIG1heFdpZHRoPVwiMTAwdndcIlxuICAgICAgPlxuICAgICAgICA8RmxleGJveCBmbGV4R3Jvdz17MX0gbWFyZ2luQm90dG9tPXsxMn0+XG4gICAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgPGgxPkZvciBwYXJ0eSBwbGFubmVycyB0aGF0IGFyZSBub3QgZnJlYWtzIGluIHRoZSBzcHJlYWRzaGVldHM8L2gxPlxuICAgICAgICAgIDwvRmxpcD5cbiAgICAgICAgPC9GbGV4Ym94PlxuXG4gICAgICAgIDxGbGV4Ym94IGZsZXhHcm93PXsxfSBtYXJnaW5Ub3A9ezEyfSBtYXJnaW5Cb3R0b209ezEyfT5cbiAgICAgICAgICA8Wm9vbT48aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvbG9nby5wbmdcIiAvPjwvWm9vbT5cbiAgICAgICAgPC9GbGV4Ym94PlxuXG4gICAgICAgIDxGbGV4Ym94XG4gICAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPEZsaXAgdG9wIGNhc2NhZGUgZGVsYXk9ezEwMDB9PlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBuYW1lPVwiY29udGFjdFwiXG4gICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgIGRhdGEtbmV0bGlmeT1cInRydWVcIlxuICAgICAgICAgICAgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCIgLz5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgV2FudCB0byBiZSBub3RpZmllZCB3aGVuIHdlJ3JlIHJlYWR5IGZvciB5b3UgdG8gc3RhcnQgcGFydHlpbmc/XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4gc2V0RW1haWwoZXZ0LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBoZXJlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+R288L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICA8L0ZsZXhib3g+XG4gICAgICAgIDxGbGV4Ym94IGZsZXhHcm93PXsxfSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgPEZsaXAgdG9wIGNhc2NhZGUgZGVsYXk9ezEwMDB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3RlclwiPk9yZ3luaXplIGJ5IFF1eHh4bjwvcD5cbiAgICAgICAgICA8L0ZsaXA+XG4gICAgICAgIDwvRmxleGJveD5cbiAgICAgIDwvRmxleGJveD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2525801480",
    __self: this
  }, "h1.jsx-136715111{box-sizing:border-box;padding:8px 20px;text-align:center;font-size:3em;z-inex:10;}.footer.jsx-136715111{font-size:11px;padding:8px 16px;width:calc(100% - 32px);padding-bottom:0px margin-top:12px;}.logo.jsx-136715111{object-fit:contain;}button.jsx-136715111{display:inline-block;border:none;border-radius:4px;padding:12px;margin:0 0 0 8px;-webkit-text-decoration:none;text-decoration:none;background:#00ff22;color:#000;cursor:pointer;text-align:center;text-transform:uppercase;-webkit-transition:background 250ms ease-in-out,-webkit-transform 150ms ease;-webkit-transition:background 250ms ease-in-out,transform 150ms ease;transition:background 250ms ease-in-out,transform 150ms ease;-webkit-appearance:none;-moz-appearance:none;}input.jsx-136715111{font-family:inherit;font-size:100%;margin:0;-webkit-appearance:none;-moz-appearance:none;padding:0.5em 1em;}label.jsx-136715111{font-size:1.5em;margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRGtCLEFBR2lDLEFBUVAsQUFRSSxBQUlFLEFBaUJELEFBU0YsZUFyQ0QsQ0FzQ0csR0E5QnRCLENBcUJpQixDQWpCSCxDQXBCSyxVQVNPLENBWU4sQ0EwQnBCLENBVFcsSUFyQ1MsS0FzQ00sT0FqQlgsS0FYRyxDQVRGLE9BcUJHLElBaUJJLEdBckNYLFVBQ1osQUFvQnVCLFFBaUJILEVBN0JwQixnQkE4QkEsd0JBakJxQixtQkFDUixXQUNJLGVBQ0csa0JBQ08seUJBQ3FDLCtNQUN0Qyx3QkFDSCxxQkFDdkIiLCJmaWxlIjoiL3dvcmtzcGFjZS9vcmd5bml6ZS1zaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEZsZXhib3ggZnJvbSBcImZsZXhib3gtcmVhY3RcIjtcbmltcG9ydCBGYWRlSW4gZnJvbSAncmVhY3QtZmFkZS1pbic7XG5pbXBvcnQgWm9vbSBmcm9tICdyZWFjdC1yZXZlYWwvWm9vbSc7XG5pbXBvcnQgRmxpcCBmcm9tICdyZWFjdC1yZXZlYWwvRmxpcCc7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlbWFpbCA9PSBudWxsIHx8IGVtYWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2goXCIvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgIGJvZHk6IGVuY29kZSh7IFwiZm9ybS1uYW1lXCI6IFwiY29udGFjdFwiLCBlbWFpbDogZW1haWwgfSlcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gc2V0U2hvd0NvbmZpcm1hdGlvbih0cnVlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgdmlld3BvcnQtZml0PVwiY292ZXJcIiAvPlxuICAgICAgICA8dGl0bGU+T3JneW5pemU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9vcmd5bml6ZS5hcHBcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxTZWRnd2ljaytBdmUrRGlzcGxheSZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFiZWxcIjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICB6LWluZXg6IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgOHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBmZjIyO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gICAgICAgICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gICAgICAgICAgbWFyZ2luOiAwOyAvKiAyICovXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8RmxleGJveFxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgbWF4SGVpZ2h0PVwiOTB2aFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIG1heFdpZHRoPVwiMTAwdndcIlxuICAgICAgPlxuICAgICAgICA8RmxleGJveCBmbGV4R3Jvdz17MX0gbWFyZ2luQm90dG9tPXsxMn0+XG4gICAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgPGgxPkZvciBwYXJ0eSBwbGFubmVycyB0aGF0IGFyZSBub3QgZnJlYWtzIGluIHRoZSBzcHJlYWRzaGVldHM8L2gxPlxuICAgICAgICAgIDwvRmxpcD5cbiAgICAgICAgPC9GbGV4Ym94PlxuXG4gICAgICAgIDxGbGV4Ym94IGZsZXhHcm93PXsxfSBtYXJnaW5Ub3A9ezEyfSBtYXJnaW5Cb3R0b209ezEyfT5cbiAgICAgICAgICA8Wm9vbT48aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9XCIvbG9nby5wbmdcIiAvPjwvWm9vbT5cbiAgICAgICAgPC9GbGV4Ym94PlxuXG4gICAgICAgIDxGbGV4Ym94XG4gICAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPEZsaXAgdG9wIGNhc2NhZGUgZGVsYXk9ezEwMDB9PlxuICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICBuYW1lPVwiY29udGFjdFwiXG4gICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgIGRhdGEtbmV0bGlmeT1cInRydWVcIlxuICAgICAgICAgICAgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCIgLz5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgV2FudCB0byBiZSBub3RpZmllZCB3aGVuIHdlJ3JlIHJlYWR5IGZvciB5b3UgdG8gc3RhcnQgcGFydHlpbmc/XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4gc2V0RW1haWwoZXZ0LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBoZXJlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+R288L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICA8L0ZsZXhib3g+XG4gICAgICAgIDxGbGV4Ym94IGZsZXhHcm93PXsxfSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgPEZsaXAgdG9wIGNhc2NhZGUgZGVsYXk9ezEwMDB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3RlclwiPk9yZ3luaXplIGJ5IFF1eHh4bjwvcD5cbiAgICAgICAgICA8L0ZsaXA+XG4gICAgICAgIDwvRmxleGJveD5cbiAgICAgIDwvRmxleGJveD5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    flexDirection: "column",
    maxHeight: "90vh",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    flexGrow: 1,
    marginBottom: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-136715111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "For party planners that are not freaks in the spreadsheets"))), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    flexGrow: 1,
    marginTop: 12,
    marginBottom: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("img", {
    src: "/logo.png",
    className: "jsx-136715111" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }))), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("form", {
    name: "contact",
    method: "post",
    "data-netlify": "true",
    "data-netlify-honeypot": "bot-field",
    onSubmit: handleSubmit,
    className: "jsx-136715111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    className: "jsx-136715111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx("label", {
    className: "jsx-136715111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Want to be notified when we're ready for you to start partying?"), __jsx("input", {
    name: "email",
    onChange: function onChange(evt) {
      return setEmail(evt.target.value);
    },
    placeholder: "Your email here",
    type: "text",
    value: email,
    className: "jsx-136715111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-136715111",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Go")))), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    flexGrow: 1,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-136715111" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Orgynize by Quxxxn")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.3b7fc306491ba5f47cfb.hot-update.js.map