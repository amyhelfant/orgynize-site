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
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/Zoom */ "./node_modules/react-reveal/Zoom.js");
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-reveal/Flip */ "./node_modules/react-reveal/Flip.js");
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_7__);


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
      lineNumber: 30
    },
    __self: this
  }, __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-543454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("meta", {
    "viewport-fit": "cover",
    className: "jsx-543454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-543454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Orgynize"), __jsx("link", {
    rel: "canonical",
    href: "https://orgynize.app",
    className: "jsx-543454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Abel|Sedgwick+Ave+Display&display=swap",
    rel: "stylesheet",
    className: "jsx-543454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4250896198",
    __self: this
  }, "html,body{background:black;color:white;font-family:\"Abel\";margin:0;padding:0;height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3lCLEFBSTRCLGlCQUNMLFlBQ08sbUJBQ1YsU0FDQyxVQUNHLGFBQ2YiLCJmaWxlIjoiL3dvcmtzcGFjZS9vcmd5bml6ZS1zaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEZsZXhib3ggZnJvbSBcImZsZXhib3gtcmVhY3RcIjtcbmltcG9ydCBab29tIGZyb20gXCJyZWFjdC1yZXZlYWwvWm9vbVwiO1xuaW1wb3J0IEZsaXAgZnJvbSBcInJlYWN0LXJldmVhbC9GbGlwXCI7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlbWFpbCA9PSBudWxsIHx8IGVtYWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2goXCIvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgIGJvZHk6IGVuY29kZSh7IFwiZm9ybS1uYW1lXCI6IFwiY29udGFjdFwiLCBlbWFpbDogZW1haWwgfSlcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gc2V0U2hvd0NvbmZpcm1hdGlvbih0cnVlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgdmlld3BvcnQtZml0PVwiY292ZXJcIiAvPlxuICAgICAgICA8dGl0bGU+T3JneW5pemU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9vcmd5bml6ZS5hcHBcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxTZWRnd2ljaytBdmUrRGlzcGxheSZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFiZWxcIjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICB6LWluZXg6IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgOHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBmZjIyO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gICAgICAgICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gICAgICAgICAgbWFyZ2luOiAwOyAvKiAyICovXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8RmxleGJveFxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgbWF4SGVpZ2h0PVwiOTB2aFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIG1heFdpZHRoPVwiMTAwdndcIlxuICAgICAgPlxuICAgICAgICA8RmxleGJveFxuICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17MTJ9XG4gICAgICAgID5cbiAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICA8aDE+Rm9yIHBhcnR5IHBsYW5uZXJzIHRoYXQgYXJlIG5vdCBmcmVha3MgaW4gdGhlIHNwcmVhZHNoZWV0czwvaDE+XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICA8L0ZsZXhib3g+XG5cbiAgICAgICAgPEZsZXhib3ggZmxleEdyb3c9ezF9IG1hcmdpblRvcD17MTJ9IG1hcmdpbkJvdHRvbT17MTJ9PlxuICAgICAgICAgIDxab29tPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L1pvb20+XG4gICAgICAgIDwvRmxleGJveD5cblxuICAgICAgICA8RmxleGJveFxuICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdFwiXG4gICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgICBkYXRhLW5ldGxpZnk9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCIgLz5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIFdhbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB3ZSdyZSByZWFkeSBmb3IgeW91IHRvIHN0YXJ0IHBhcnR5aW5nP1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4gc2V0RW1haWwoZXZ0LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGhlcmVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkdvPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICA8L0ZsZXhib3g+XG4gICAgICAgIDxGbGV4Ym94IGZsZXhHcm93PXsxfSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJcIj5Pcmd5bml6ZSBieSBRdXh4eG48L3A+XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICA8L0ZsZXhib3g+XG4gICAgICA8L0ZsZXhib3g+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2862121384",
    __self: this
  }, "h1.jsx-543454535{box-sizing:border-box;text-align:center;font-size:3em;z-inex:10;}.footer.jsx-543454535{font-size:11px;padding:8px 16px;width:calc(100% - 32px);padding-bottom:0px margin-top:12px;}.logo.jsx-543454535{object-fit:contain;}button.jsx-543454535{display:inline-block;border:none;border-radius:4px;padding:12px;margin:0 0 0 8px;-webkit-text-decoration:none;text-decoration:none;background:#00ff22;color:#000;cursor:pointer;text-align:center;text-transform:uppercase;-webkit-transition:background 250ms ease-in-out,-webkit-transform 150ms ease;-webkit-transition:background 250ms ease-in-out,transform 150ms ease;transition:background 250ms ease-in-out,transform 150ms ease;-webkit-appearance:none;-moz-appearance:none;}input.jsx-543454535{font-family:inherit;font-size:100%;margin:0;-webkit-appearance:none;-moz-appearance:none;padding:0.5em 1em;}label.jsx-543454535{font-size:1.5em;margin-right:20px;}@media only screen and (max-width:600px){h1.jsx-543454535{font-size:2em;word-wrap:normal;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGtCLEFBR2lDLEFBT1AsQUFRSSxBQUlFLEFBaUJELEFBU0YsQUFNRSxjQUNHLENBNUNOLENBc0NHLEdBOUJ0QixDQXFCaUIsQ0FqQkgsQ0FuQk0sU0FvRGhCLENBNUNzQixDQVlOLENBMEJwQixDQVRXLEtBcENLLElBcUNVLE9BakJYLEdBbkJILEVBUU0sUUFQbEIsQUFtQm1CLElBaUJJLGFBaEJBLFFBaUJILEVBN0JwQixnQkE4QkEsd0JBakJxQixtQkFDUixXQUNJLGVBQ0csa0JBQ08seUJBQ3FDLCtNQUN0Qyx3QkFDSCxxQkFDdkIiLCJmaWxlIjoiL3dvcmtzcGFjZS9vcmd5bml6ZS1zaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEZsZXhib3ggZnJvbSBcImZsZXhib3gtcmVhY3RcIjtcbmltcG9ydCBab29tIGZyb20gXCJyZWFjdC1yZXZlYWwvWm9vbVwiO1xuaW1wb3J0IEZsaXAgZnJvbSBcInJlYWN0LXJldmVhbC9GbGlwXCI7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlbWFpbCA9PSBudWxsIHx8IGVtYWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2goXCIvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgIGJvZHk6IGVuY29kZSh7IFwiZm9ybS1uYW1lXCI6IFwiY29udGFjdFwiLCBlbWFpbDogZW1haWwgfSlcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gc2V0U2hvd0NvbmZpcm1hdGlvbih0cnVlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgdmlld3BvcnQtZml0PVwiY292ZXJcIiAvPlxuICAgICAgICA8dGl0bGU+T3JneW5pemU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9vcmd5bml6ZS5hcHBcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxTZWRnd2ljaytBdmUrRGlzcGxheSZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFiZWxcIjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICB6LWluZXg6IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgOHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBmZjIyO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gICAgICAgICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gICAgICAgICAgbWFyZ2luOiAwOyAvKiAyICovXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8RmxleGJveFxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgbWF4SGVpZ2h0PVwiOTB2aFwiXG4gICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIG1heFdpZHRoPVwiMTAwdndcIlxuICAgICAgPlxuICAgICAgICA8RmxleGJveFxuICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgIG1hcmdpbkJvdHRvbT17MTJ9XG4gICAgICAgID5cbiAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICA8aDE+Rm9yIHBhcnR5IHBsYW5uZXJzIHRoYXQgYXJlIG5vdCBmcmVha3MgaW4gdGhlIHNwcmVhZHNoZWV0czwvaDE+XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICA8L0ZsZXhib3g+XG5cbiAgICAgICAgPEZsZXhib3ggZmxleEdyb3c9ezF9IG1hcmdpblRvcD17MTJ9IG1hcmdpbkJvdHRvbT17MTJ9PlxuICAgICAgICAgIDxab29tPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICA8L1pvb20+XG4gICAgICAgIDwvRmxleGJveD5cblxuICAgICAgICA8RmxleGJveFxuICAgICAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdFwiXG4gICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgICBkYXRhLW5ldGxpZnk9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCIgLz5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIFdhbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB3ZSdyZSByZWFkeSBmb3IgeW91IHRvIHN0YXJ0IHBhcnR5aW5nP1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4gc2V0RW1haWwoZXZ0LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGhlcmVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkdvPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICA8L0ZsZXhib3g+XG4gICAgICAgIDxGbGV4Ym94IGZsZXhHcm93PXsxfSB3aWR0aD1cIjEwMCVcIj5cbiAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJcIj5Pcmd5bml6ZSBieSBRdXh4eG48L3A+XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICA8L0ZsZXhib3g+XG4gICAgICA8L0ZsZXhib3g+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    flexDirection: "column",
    maxHeight: "90vh",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "100vw",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    flexGrow: 1,
    marginBottom: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_7___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-543454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "For party planners that are not freaks in the spreadsheets"))), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    flexGrow: 1,
    marginTop: 12,
    marginBottom: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("img", {
    src: "/logo.png",
    className: "jsx-543454535" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }))), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_7___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("form", {
    name: "contact",
    method: "post",
    "data-netlify": "true",
    "data-netlify-honeypot": "bot-field",
    onSubmit: handleSubmit,
    className: "jsx-543454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    className: "jsx-543454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), __jsx("label", {
    className: "jsx-543454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
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
    className: "jsx-543454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-543454535",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "Go")))), __jsx(flexbox_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
    flexGrow: 1,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_7___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-543454535" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Orgynize by Quxxxn")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.cbb9d1614dd404f3b63b.hot-update.js.map