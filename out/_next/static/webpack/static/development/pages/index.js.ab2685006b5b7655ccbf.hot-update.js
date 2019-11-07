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

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      showConfirmation = _React$useState4[0],
      setShowConfirmation = _React$useState4[1];

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
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("meta", {
    "viewport-fit": "cover",
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Orgynize"), __jsx("link", {
    rel: "canonical",
    href: "https://orgynize.app",
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Abel|Sedgwick+Ave+Display&display=swap",
    rel: "stylesheet",
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3826196156",
    __self: this
  }, "html,body{background-color:black;color:white;font-family:\"Abel\";margin:0;padding:0;position:relative;background-image:url(\"/logo.png\");background-repeat:no-repeat;background-attachment:fixed;background-position:center;background-size:auto 65%;background-origin:content-box;}@media only screen and (max-width:600px){body{background-size:auto 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3lCLEFBSWtDLEFBaUJRLHVCQWhCbkIsRUFpQlYsVUFoQmlCLG1CQUNWLFNBQ0MsVUFDUSxrQkFFZ0Isa0NBQ04sNEJBQ0EsNEJBQ0QsMkJBQ0YseUJBQ0ssOEJBQ2hDIiwiZmlsZSI6Ii93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBab29tIGZyb20gXCJyZWFjdC1yZXZlYWwvWm9vbVwiO1xuaW1wb3J0IEZsaXAgZnJvbSBcInJlYWN0LXJldmVhbC9GbGlwXCI7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Nob3dDb25maXJtYXRpb24sIHNldFNob3dDb25maXJtYXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGVtYWlsID09IG51bGwgfHwgZW1haWwubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmZXRjaChcIi9cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxuICAgICAgYm9keTogZW5jb2RlKHsgXCJmb3JtLW5hbWVcIjogXCJjb250YWN0XCIsIGVtYWlsOiBlbWFpbCB9KVxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiBzZXRTaG93Q29uZmlybWF0aW9uKHRydWUpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSB2aWV3cG9ydC1maXQ9XCJjb3ZlclwiIC8+XG4gICAgICAgIDx0aXRsZT5Pcmd5bml6ZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL29yZ3luaXplLmFwcFwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYmVsfFNlZGd3aWNrK0F2ZStEaXNwbGF5JmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQWJlbFwiO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9sb2dvLnBuZ1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byA2NSU7XG4gICAgICAgICAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBwLmhlYWRlciB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjJlbTtcbiAgICAgICAgICB6LWluZXg6IDEwO1xuICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2MSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdjMge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2NCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweFxuICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybSxcbiAgICAgICAgLmZvbyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgOHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBmZjIyO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gICAgICAgICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gICAgICAgICAgbWFyZ2luOiAwOyAvKiAyICovXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGhlaWdodDogOTB2aDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgcC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgICAgd29yZC13cmFwOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICAgICAgd29yZC1icmVhazogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICBGb3IgcGFydHkgcGxhbm5lcnMgdGhhdCBhcmUgbm90IGZyZWFrcyBpbiB0aGUgPGJyLz5zcHJlYWRzaGVldHNcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRmxpcD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGbGlwIHRvcCBjYXNjYWRlIGRlbGF5PXsxMDAwfT5cbiAgICAgICAgICAgIHshc2hvd0NvbmZpcm1hdGlvbiA/IChcbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdFwiXG4gICAgICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICAgICAgZGF0YS1uZXRsaWZ5PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCIgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICBXYW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gd2UncmUgcmVhZHkgZm9yIHlvdSB0byBzdGFydFxuICAgICAgICAgICAgICAgICAgcGFydHlpbmc/XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZ0ID0+IHNldEVtYWlsKGV2dC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGhlcmVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+R288L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvb1wiPlN0YXkgdHVuZWR7XCIuLi5cIn08L2xhYmVsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZsaXA+XG4gICAgICAgICAgPEZsaXAgdG9wIGNhc2NhZGUgZGVsYXk9ezEwMDB9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyXCI+T3JneW5pemUgYnkgUXV4eHhuPC9wPlxuICAgICAgICAgIDwvRmxpcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2672600678",
    __self: this
  }, "p.header.jsx-4006218451{box-sizing:border-box;text-align:center;font-size:3.2em;z-inex:10;box-sizing:border-box;padding:12px 20px;}.div1.jsx-4006218451{height:30%;}.div2.jsx-4006218451{height:40%;}.div3.jsx-4006218451{height:20%;}.div4.jsx-4006218451{height:10%;}.footer.jsx-4006218451{font-size:11px;padding:8px 16px;width:calc(100% - 32px);padding-bottom:0px margin-top:12px;position:fixed;bottom:8px;left:8px;}.logo.jsx-4006218451{object-fit:contain;}form.jsx-4006218451,.foo.jsx-4006218451{margin-bottom:40px;}button.jsx-4006218451{display:inline-block;border:none;border-radius:4px;padding:12px;margin:0 0 0 8px;-webkit-text-decoration:none;text-decoration:none;background:#00ff22;color:#000;cursor:pointer;text-align:center;text-transform:uppercase;-webkit-transition:background 250ms ease-in-out,-webkit-transform 150ms ease;-webkit-transition:background 250ms ease-in-out,transform 150ms ease;transition:background 250ms ease-in-out,transform 150ms ease;-webkit-appearance:none;-moz-appearance:none;}input.jsx-4006218451{font-family:inherit;font-size:100%;margin:0;-webkit-appearance:none;-moz-appearance:none;padding:0.5em 1em;}label.jsx-4006218451{font-size:1.5em;margin-right:20px;}.container.jsx-4006218451{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;height:90vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@media only screen and (max-width:600px){p.header.jsx-4006218451{box-sizing:border-box;font-size:2em;word-wrap:normal !important;padding:0 16px;word-break:normal !important;}.logo.jsx-4006218451{max-height:350px;}label.jsx-4006218451{font-size:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGtCLEFBR2lDLEFBU1QsQUFJQSxBQUlBLEFBSUEsQUFJRSxBQVdJLEFBS0UsQUFJQSxBQWlCRCxBQVNGLEFBS0csQUFVTyxBQVFMLEFBSUgsV0F4RnRCLEFBSUEsQUFJQSxBQUlBLEdBNkVJLENBekVlLENBOENHLENBdUJsQixFQTFESixBQUtBLENBcUJpQixDQWpCSCxDQTdDTSxBQXNGRSxVQTVESSxDQW9CTixDQTBCcEIsQ0FUVyxDQXdCeUIsSUF0RmxCLElBK0RRLE9BakJYLEtBN0NILEFBMEJNLFFBb0JDLEFBd0NJLEVBckZBLEVBOERBLFdBd0JjLEVBeENkLE9BN0NILENBOERBLEVBckNILEVBK0NTLGFBdkUxQixBQXlCYSxDQXFDYixDQXVCSSxPQWJZLEVBOUNMLFNBQ1gsQ0E4Q2lCLElBNUJJLG1CQUNSLFdBQ0ksZUFDRyxrQkFDTyxPQXlCTyxrQkF4QjhCLGlHQXlCdEMsOEVBQzFCLGdDQXpCMEIsd0JBQ0gscUJBQ3ZCIiwiZmlsZSI6Ii93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBab29tIGZyb20gXCJyZWFjdC1yZXZlYWwvWm9vbVwiO1xuaW1wb3J0IEZsaXAgZnJvbSBcInJlYWN0LXJldmVhbC9GbGlwXCI7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Nob3dDb25maXJtYXRpb24sIHNldFNob3dDb25maXJtYXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGVtYWlsID09IG51bGwgfHwgZW1haWwubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmZXRjaChcIi9cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxuICAgICAgYm9keTogZW5jb2RlKHsgXCJmb3JtLW5hbWVcIjogXCJjb250YWN0XCIsIGVtYWlsOiBlbWFpbCB9KVxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiBzZXRTaG93Q29uZmlybWF0aW9uKHRydWUpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSB2aWV3cG9ydC1maXQ9XCJjb3ZlclwiIC8+XG4gICAgICAgIDx0aXRsZT5Pcmd5bml6ZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL29yZ3luaXplLmFwcFwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYmVsfFNlZGd3aWNrK0F2ZStEaXNwbGF5JmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQWJlbFwiO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9sb2dvLnBuZ1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byA2NSU7XG4gICAgICAgICAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBwLmhlYWRlciB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjJlbTtcbiAgICAgICAgICB6LWluZXg6IDEwO1xuICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2MSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdjMge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2NCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweFxuICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybSxcbiAgICAgICAgLmZvbyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgOHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBmZjIyO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gICAgICAgICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gICAgICAgICAgbWFyZ2luOiAwOyAvKiAyICovXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGhlaWdodDogOTB2aDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgcC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgICAgd29yZC13cmFwOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgICAgICAgICAgd29yZC1icmVhazogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICBGb3IgcGFydHkgcGxhbm5lcnMgdGhhdCBhcmUgbm90IGZyZWFrcyBpbiB0aGUgPGJyLz5zcHJlYWRzaGVldHNcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRmxpcD5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxGbGlwIHRvcCBjYXNjYWRlIGRlbGF5PXsxMDAwfT5cbiAgICAgICAgICAgIHshc2hvd0NvbmZpcm1hdGlvbiA/IChcbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdFwiXG4gICAgICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgICAgICAgZGF0YS1uZXRsaWZ5PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgZGF0YS1uZXRsaWZ5LWhvbmV5cG90PVwiYm90LWZpZWxkXCJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZm9ybS1uYW1lXCIgdmFsdWU9XCJjb250YWN0XCIgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICBXYW50IHRvIGJlIG5vdGlmaWVkIHdoZW4gd2UncmUgcmVhZHkgZm9yIHlvdSB0byBzdGFydFxuICAgICAgICAgICAgICAgICAgcGFydHlpbmc/XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZ0ID0+IHNldEVtYWlsKGV2dC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsIGhlcmVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+R288L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvb1wiPlN0YXkgdHVuZWR7XCIuLi5cIn08L2xhYmVsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZsaXA+XG4gICAgICAgICAgPEZsaXAgdG9wIGNhc2NhZGUgZGVsYXk9ezEwMDB9PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyXCI+T3JneW5pemUgYnkgUXV4eHhuPC9wPlxuICAgICAgICAgIDwvRmxpcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx("div", {
    className: "jsx-4006218451" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4006218451" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "For party planners that are not freaks in the ", __jsx("br", {
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), "spreadsheets")), __jsx("div", {
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, !showConfirmation ? __jsx("form", {
    name: "contact",
    method: "post",
    "data-netlify": "true",
    "data-netlify-honeypot": "bot-field",
    onSubmit: handleSubmit,
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), __jsx("label", {
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
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
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-4006218451",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Go")) : __jsx("label", {
    className: "jsx-4006218451" + " " + "foo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Stay tuned", "...")), __jsx(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    top: true,
    cascade: true,
    delay: 1000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4006218451" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Orgynize by Quxxxn")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.ab2685006b5b7655ccbf.hot-update.js.map