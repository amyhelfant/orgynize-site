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
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Zoom */ "./node_modules/react-reveal/Zoom.js");
/* harmony import */ var react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Zoom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/Flip */ "./node_modules/react-reveal/Flip.js");
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_6__);


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
      lineNumber: 29
    },
    __self: this
  }, __jsx("meta", {
    charSet: "utf-8",
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("meta", {
    "viewport-fit": "cover",
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Orgynize"), __jsx("link", {
    rel: "canonical",
    href: "https://orgynize.app",
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Abel|Sedgwick+Ave+Display&display=swap",
    rel: "stylesheet",
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "547830811",
    __self: this
  }, "html,body{background-color:black;color:white;font-family:\"Abel\";margin:0;padding:0;height:calc(100vh - env(safe-area-inset-bottom));position:relative;background-image:url('/logo.png');background-repeat:no-repeat;background-attachment:fixed;background-position:center;background-size:contain;background-origin:content-box;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3lCLEFBSWtDLHVCQUNYLFlBQ08sbUJBQ1YsU0FDQyxVQUN1QyxpREFDL0Isa0JBRWdCLGtDQUNOLDRCQUNBLDRCQUNULDJCQUNILHdCQUNNLDhCQUNqQixhQUNQIiwiZmlsZSI6Ii93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBab29tIGZyb20gXCJyZWFjdC1yZXZlYWwvWm9vbVwiO1xuaW1wb3J0IEZsaXAgZnJvbSBcInJlYWN0LXJldmVhbC9GbGlwXCI7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlbWFpbCA9PSBudWxsIHx8IGVtYWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2goXCIvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgIGJvZHk6IGVuY29kZSh7IFwiZm9ybS1uYW1lXCI6IFwiY29udGFjdFwiLCBlbWFpbDogZW1haWwgfSlcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gc2V0U2hvd0NvbmZpcm1hdGlvbih0cnVlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgdmlld3BvcnQtZml0PVwiY292ZXJcIiAvPlxuICAgICAgICA8dGl0bGU+T3JneW5pemU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9vcmd5bml6ZS5hcHBcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxTZWRnd2ljaytBdmUrRGlzcGxheSZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFiZWxcIjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2xvZ28ucG5nJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xuICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICB6LWluZXg6IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdjEge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2MiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYzIHtcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdjQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHhcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGZmMjI7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgICAgICAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgICAgICAgICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjllbTtcbiAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MVwiPlxuICAgICAgICAgIDxGbGlwIHRvcCBjYXNjYWRlIGRlbGF5PXsxMDAwfT5cbiAgICAgICAgICAgIDxoMT5Gb3IgcGFydHkgcGxhbm5lcnMgdGhhdCBhcmUgbm90IGZyZWFrcyBpbiB0aGUgc3ByZWFkc2hlZXRzPC9oMT5cbiAgICAgICAgICA8L0ZsaXA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2M1wiPlxuICAgICAgICAgIDxGbGlwIHRvcCBjYXNjYWRlIGRlbGF5PXsxMDAwfT5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0XCJcbiAgICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICAgIGRhdGEtbmV0bGlmeT1cInRydWVcIlxuICAgICAgICAgICAgICBkYXRhLW5ldGxpZnktaG9uZXlwb3Q9XCJib3QtZmllbGRcIlxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtLW5hbWVcIiB2YWx1ZT1cImNvbnRhY3RcIiAvPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgV2FudCB0byBiZSBub3RpZmllZCB3aGVuIHdlJ3JlIHJlYWR5IGZvciB5b3UgdG8gc3RhcnQgcGFydHlpbmc/XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiBzZXRFbWFpbChldnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgaGVyZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+R288L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L0ZsaXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjRcIj5cbiAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJcIj5Pcmd5bml6ZSBieSBRdXh4eG48L3A+XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1658438555",
    __self: this
  }, "h1.jsx-2054985737{box-sizing:border-box;text-align:center;font-size:3em;z-inex:10;}.div1.jsx-2054985737{height:30%;}.div2.jsx-2054985737{height:40%;}.div3.jsx-2054985737{height:20%;}.div4.jsx-2054985737{height:10%;}.footer.jsx-2054985737{font-size:11px;padding:8px 16px;width:calc(100% - 32px);padding-bottom:0px margin-top:12px;}.logo.jsx-2054985737{object-fit:contain;}button.jsx-2054985737{display:inline-block;border:none;border-radius:4px;padding:12px;margin:0 0 0 8px;-webkit-text-decoration:none;text-decoration:none;background:#00ff22;color:#000;cursor:pointer;text-align:center;text-transform:uppercase;-webkit-transition:background 250ms ease-in-out,-webkit-transform 150ms ease;-webkit-transition:background 250ms ease-in-out,transform 150ms ease;transition:background 250ms ease-in-out,transform 150ms ease;-webkit-appearance:none;-moz-appearance:none;}input.jsx-2054985737{font-family:inherit;font-size:100%;margin:0;-webkit-appearance:none;-moz-appearance:none;padding:0.5em 1em;}label.jsx-2054985737{font-size:1.5em;margin-right:20px;}@media only screen and (max-width:600px){h1.jsx-2054985737{font-size:1.9em;word-wrap:normal !important;white-space:normal !important;}.logo.jsx-2054985737{max-height:350px;}label.jsx-2054985737{font-size:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRGtCLEFBR2lDLEFBT1QsQUFJQSxBQUlBLEFBSUEsQUFJRSxBQVFJLEFBSUUsQUFpQkQsQUFTRixBQU1JLEFBTUMsQUFJSCxXQXJFdEIsQUFJQSxBQUlBLEFBSUEsR0EwREksQ0F0RGUsQ0FzQ0csQUFNYyxDQU1oQyxFQTFDSixDQXFCaUIsQ0FqQkgsQ0FuQ00sVUF3Qk0sQ0FZTixDQTBCcEIsQ0FUVyxLQXBESyxJQXFEVSxBQWNZLE9BL0J2QixHQW5DSCxFQXdCTSxRQXZCbEIsQUFtQ21CLElBaUJJLE1BY25CLE9BOUJtQixRQWlCSCxFQTdCcEIsZ0JBOEJBLHdCQWpCcUIsbUJBQ1IsV0FDSSxlQUNHLGtCQUNPLHlCQUNxQywrTUFDdEMsd0JBQ0gscUJBQ3ZCIiwiZmlsZSI6Ii93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBab29tIGZyb20gXCJyZWFjdC1yZXZlYWwvWm9vbVwiO1xuaW1wb3J0IEZsaXAgZnJvbSBcInJlYWN0LXJldmVhbC9GbGlwXCI7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlbWFpbCA9PSBudWxsIHx8IGVtYWlsLmxlbmd0aCA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmV0Y2goXCIvXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgfSxcbiAgICAgIGJvZHk6IGVuY29kZSh7IFwiZm9ybS1uYW1lXCI6IFwiY29udGFjdFwiLCBlbWFpbDogZW1haWwgfSlcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4gc2V0U2hvd0NvbmZpcm1hdGlvbih0cnVlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgdmlld3BvcnQtZml0PVwiY292ZXJcIiAvPlxuICAgICAgICA8dGl0bGU+T3JneW5pemU8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPVwiaHR0cHM6Ly9vcmd5bml6ZS5hcHBcIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QWJlbHxTZWRnd2ljaytBdmUrRGlzcGxheSZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgaHRtbCxcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFiZWxcIjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2xvZ28ucG5nJyk7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xuICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICB6LWluZXg6IDEwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdjEge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2MiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYzIHtcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdjQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHhcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGZmMjI7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgICAgICAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgICAgICAgICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjllbTtcbiAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM1MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MVwiPlxuICAgICAgICAgIDxGbGlwIHRvcCBjYXNjYWRlIGRlbGF5PXsxMDAwfT5cbiAgICAgICAgICAgIDxoMT5Gb3IgcGFydHkgcGxhbm5lcnMgdGhhdCBhcmUgbm90IGZyZWFrcyBpbiB0aGUgc3ByZWFkc2hlZXRzPC9oMT5cbiAgICAgICAgICA8L0ZsaXA+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2M1wiPlxuICAgICAgICAgIDxGbGlwIHRvcCBjYXNjYWRlIGRlbGF5PXsxMDAwfT5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0XCJcbiAgICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICAgIGRhdGEtbmV0bGlmeT1cInRydWVcIlxuICAgICAgICAgICAgICBkYXRhLW5ldGxpZnktaG9uZXlwb3Q9XCJib3QtZmllbGRcIlxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtLW5hbWVcIiB2YWx1ZT1cImNvbnRhY3RcIiAvPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgV2FudCB0byBiZSBub3RpZmllZCB3aGVuIHdlJ3JlIHJlYWR5IGZvciB5b3UgdG8gc3RhcnQgcGFydHlpbmc/XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiBzZXRFbWFpbChldnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgaGVyZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+R288L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L0ZsaXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjRcIj5cbiAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJcIj5Pcmd5bml6ZSBieSBRdXh4eG48L3A+XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx("div", {
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2054985737" + " " + "div1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "For party planners that are not freaks in the spreadsheets"))), __jsx("div", {
    className: "jsx-2054985737" + " " + "div3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("form", {
    name: "contact",
    method: "post",
    "data-netlify": "true",
    "data-netlify-honeypot": "bot-field",
    onSubmit: handleSubmit,
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx("label", {
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
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
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-2054985737",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Go")))), __jsx("div", {
    className: "jsx-2054985737" + " " + "div4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2054985737" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "Orgynize by Quxxxn")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.2a839d3493a7eab45a00.hot-update.js.map