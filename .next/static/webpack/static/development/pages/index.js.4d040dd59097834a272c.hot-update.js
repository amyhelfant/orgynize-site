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
    className: "jsx-3834142140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("meta", {
    "viewport-fit": "cover",
    className: "jsx-3834142140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-3834142140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Orgynize"), __jsx("link", {
    rel: "canonical",
    href: "https://orgynize.app",
    className: "jsx-3834142140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Abel|Sedgwick+Ave+Display&display=swap",
    rel: "stylesheet",
    className: "jsx-3834142140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3826196156",
    __self: this
  }, "html,body{background-color:black;color:white;font-family:\"Abel\";margin:0;padding:0;position:relative;background-image:url(\"/logo.png\");background-repeat:no-repeat;background-attachment:fixed;background-position:center;background-size:auto 65%;background-origin:content-box;}@media only screen and (max-width:600px){body{background-size:auto 50%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3lCLEFBSWtDLEFBaUJRLHVCQWhCbkIsRUFpQlYsVUFoQmlCLG1CQUNWLFNBQ0MsVUFDUSxrQkFFZ0Isa0NBQ04sNEJBQ0EsNEJBQ0QsMkJBQ0YseUJBQ0ssOEJBQ2hDIiwiZmlsZSI6Ii93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBab29tIGZyb20gXCJyZWFjdC1yZXZlYWwvWm9vbVwiO1xuaW1wb3J0IEZsaXAgZnJvbSBcInJlYWN0LXJldmVhbC9GbGlwXCI7XG5cbmNvbnN0IGVuY29kZSA9IGRhdGEgPT4ge1xuICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSlcbiAgICAubWFwKGtleSA9PiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpXG4gICAgLmpvaW4oXCImXCIpO1xufTtcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Nob3dDb25maXJtYXRpb24sIHNldFNob3dDb25maXJtYXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGVtYWlsID09IG51bGwgfHwgZW1haWwubGVuZ3RoIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmZXRjaChcIi9cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiB9LFxuICAgICAgYm9keTogZW5jb2RlKHsgXCJmb3JtLW5hbWVcIjogXCJjb250YWN0XCIsIGVtYWlsOiBlbWFpbCB9KVxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiBzZXRTaG93Q29uZmlybWF0aW9uKHRydWUpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSB2aWV3cG9ydC1maXQ9XCJjb3ZlclwiIC8+XG4gICAgICAgIDx0aXRsZT5Pcmd5bml6ZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL29yZ3luaXplLmFwcFwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BYmVsfFNlZGd3aWNrK0F2ZStEaXNwbGF5JmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQWJlbFwiO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9sb2dvLnBuZ1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byA2NSU7XG4gICAgICAgICAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDUwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBwLmhlYWRlciB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjJlbTtcbiAgICAgICAgICB6LWluZXg6IDEwO1xuICAgICAgICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2MSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYyIHtcbiAgICAgICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdjMge1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2NCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweFxuICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9ybSxcbiAgICAgICAgLmZvbyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgOHB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBmZjIyO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDI1MG1zIGVhc2UtaW4tb3V0LCB0cmFuc2Zvcm0gMTUwbXMgZWFzZTtcbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gICAgICAgICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gICAgICAgICAgbWFyZ2luOiAwOyAvKiAyICovXG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIGhlaWdodDogOTB2aDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgcC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44OGVtO1xuICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgIHdvcmQtYnJlYWs6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEZsaXAgdG9wIGNhc2NhZGUgZGVsYXk9ezEwMDB9PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgRm9yIHBhcnR5IHBsYW5uZXJzIHRoYXQgYXJlIG5vdCBmcmVha3MgaW4gdGhlIHNwcmVhZHNoZWV0c1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9GbGlwPlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEZsaXAgdG9wIGNhc2NhZGUgZGVsYXk9ezEwMDB9PlxuICAgICAgICAgICAgeyFzaG93Q29uZmlybWF0aW9uID8gKFxuICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0XCJcbiAgICAgICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICAgICAgICBkYXRhLW5ldGxpZnk9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBkYXRhLW5ldGxpZnktaG9uZXlwb3Q9XCJib3QtZmllbGRcIlxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtLW5hbWVcIiB2YWx1ZT1cImNvbnRhY3RcIiAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIFdhbnQgdG8gYmUgbm90aWZpZWQgd2hlbiB3ZSdyZSByZWFkeSBmb3IgeW91IHRvIHN0YXJ0XG4gICAgICAgICAgICAgICAgICBwYXJ0eWluZz9cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldnQgPT4gc2V0RW1haWwoZXZ0LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWwgaGVyZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5HbzwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9vXCI+U3RheSB0dW5lZHtcIi4uLlwifTwvbGFiZWw+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRmxpcD5cbiAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb290ZXJcIj5Pcmd5bml6ZSBieSBRdXh4eG48L3A+XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "257692425",
    __self: this
  }, "p.header.jsx-3834142140{box-sizing:border-box;text-align:center;font-size:3.2em;z-inex:10;box-sizing:border-box;padding:12px 20px;}.div1.jsx-3834142140{height:30%;}.div2.jsx-3834142140{height:40%;}.div3.jsx-3834142140{height:20%;}.div4.jsx-3834142140{height:10%;}.footer.jsx-3834142140{font-size:11px;padding:8px 16px;width:calc(100% - 32px);padding-bottom:0px margin-top:12px;position:fixed;bottom:8px;left:8px;}.logo.jsx-3834142140{object-fit:contain;}form.jsx-3834142140,.foo.jsx-3834142140{margin-bottom:40px;}button.jsx-3834142140{display:inline-block;border:none;border-radius:4px;padding:12px;margin:0 0 0 8px;-webkit-text-decoration:none;text-decoration:none;background:#00ff22;color:#000;cursor:pointer;text-align:center;text-transform:uppercase;-webkit-transition:background 250ms ease-in-out,-webkit-transform 150ms ease;-webkit-transition:background 250ms ease-in-out,transform 150ms ease;transition:background 250ms ease-in-out,transform 150ms ease;-webkit-appearance:none;-moz-appearance:none;}input.jsx-3834142140{font-family:inherit;font-size:100%;margin:0;-webkit-appearance:none;-moz-appearance:none;padding:0.5em 1em;}label.jsx-3834142140{font-size:1.5em;margin-right:20px;}.container.jsx-3834142140{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;height:90vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}@media only screen and (max-width:600px){p.header.jsx-3834142140{font-size:1.88em;word-wrap:normal !important;white-space:nowrap;padding-top:8px;word-break:normal !important;}.logo.jsx-3834142140{max-height:350px;}label.jsx-3834142140{font-size:1em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2Uvb3JneW5pemUtc2l0ZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRGtCLEFBR2lDLEFBU1QsQUFJQSxBQUlBLEFBSUEsQUFJRSxBQVdJLEFBS0UsQUFJQSxBQWlCRCxBQVNGLEFBS0csQUFVRSxBQVFBLEFBSUgsV0F4RnRCLEFBSUEsQUFJQSxBQUlBLEdBNkVJLENBekVlLENBOENHLENBZWMsQUFRaEMsRUExREosQUFLQSxDQXFCaUIsQ0FqQkgsQ0E3Q00sVUEwQk0sQ0FvQk4sQ0EwQnBCLENBVFcsS0E5RE8sSUErRFEsQ0F1QkMsTUF4Q1osS0E3Q0gsQUEwQk0sUUFvQkMsQUF3Q0ssRUFyRkQsRUE4REEsWUF3QmMsQ0F4Q2QsT0E3Q0gsQ0E4REEsRUFyQ0gsRUErQ1MsYUF2RTFCLEFBeUJhLENBcUNiLEVBdUJJLE1BYlksRUE5Q0wsU0FDWCxDQThDaUIsSUE1QkksbUJBQ1IsV0FDSSxlQUNHLGtCQUNPLE9BeUJPLGtCQXhCOEIsaUdBeUJ0Qyw4RUFDMUIsZ0NBekIwQix3QkFDSCxxQkFDdkIiLCJmaWxlIjoiL3dvcmtzcGFjZS9vcmd5bml6ZS1zaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFpvb20gZnJvbSBcInJlYWN0LXJldmVhbC9ab29tXCI7XG5pbXBvcnQgRmxpcCBmcm9tIFwicmVhY3QtcmV2ZWFsL0ZsaXBcIjtcblxuY29uc3QgZW5jb2RlID0gZGF0YSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKVxuICAgIC5tYXAoa2V5ID0+IGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKSlcbiAgICAuam9pbihcIiZcIik7XG59O1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2hvd0NvbmZpcm1hdGlvbiwgc2V0U2hvd0NvbmZpcm1hdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZW1haWwgPT0gbnVsbCB8fCBlbWFpbC5sZW5ndGggPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZldGNoKFwiL1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiIH0sXG4gICAgICBib2R5OiBlbmNvZGUoeyBcImZvcm0tbmFtZVwiOiBcImNvbnRhY3RcIiwgZW1haWw6IGVtYWlsIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHNldFNob3dDb25maXJtYXRpb24odHJ1ZSkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIHZpZXdwb3J0LWZpdD1cImNvdmVyXCIgLz5cbiAgICAgICAgPHRpdGxlPk9yZ3luaXplPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj1cImh0dHBzOi8vb3JneW5pemUuYXBwXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFiZWx8U2VkZ3dpY2srQXZlK0Rpc3BsYXkmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBYmVsXCI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2xvZ28ucG5nXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDY1JTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gNTAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHAuaGVhZGVyIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDMuMmVtO1xuICAgICAgICAgIHotaW5leDogMTA7XG4gICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYxIHtcbiAgICAgICAgICAgIGhlaWdodDogMzAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdjIge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2MyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXY0IHtcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICAgICAgbGVmdDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIH1cblxuICAgICAgICBmb3JtLFxuICAgICAgICAuZm9vIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGZmMjI7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjUwbXMgZWFzZS1pbi1vdXQsIHRyYW5zZm9ybSAxNTBtcyBlYXNlO1xuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgICAgICAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgICAgICAgICBtYXJnaW46IDA7IC8qIDIgKi9cbiAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgaGVpZ2h0OiA5MHZoO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICBwLmhlYWRlciB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjg4ZW07XG4gICAgICAgICAgICAgICAgd29yZC13cmFwOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgd29yZC1icmVhazogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICBGb3IgcGFydHkgcGxhbm5lcnMgdGhhdCBhcmUgbm90IGZyZWFrcyBpbiB0aGUgc3ByZWFkc2hlZXRzXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0ZsaXA+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8RmxpcCB0b3AgY2FzY2FkZSBkZWxheT17MTAwMH0+XG4gICAgICAgICAgICB7IXNob3dDb25maXJtYXRpb24gPyAoXG4gICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbnRhY3RcIlxuICAgICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgICAgICAgIGRhdGEtbmV0bGlmeT1cInRydWVcIlxuICAgICAgICAgICAgICAgIGRhdGEtbmV0bGlmeS1ob25leXBvdD1cImJvdC1maWVsZFwiXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZvcm0tbmFtZVwiIHZhbHVlPVwiY29udGFjdFwiIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgV2FudCB0byBiZSBub3RpZmllZCB3aGVuIHdlJ3JlIHJlYWR5IGZvciB5b3UgdG8gc3RhcnRcbiAgICAgICAgICAgICAgICAgIHBhcnR5aW5nP1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2dCA9PiBzZXRFbWFpbChldnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBoZXJlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkdvPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb29cIj5TdGF5IHR1bmVke1wiLi4uXCJ9PC9sYWJlbD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9GbGlwPlxuICAgICAgICAgIDxGbGlwIHRvcCBjYXNjYWRlIGRlbGF5PXsxMDAwfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3RlclwiPk9yZ3luaXplIGJ5IFF1eHh4bjwvcD5cbiAgICAgICAgICA8L0ZsaXA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/workspace/orgynize-site/pages/index.js */"), __jsx("div", {
    className: "jsx-3834142140" + " " + "container",
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
    className: "jsx-3834142140" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, "For party planners that are not freaks in the spreadsheets")), __jsx("div", {
    className: "jsx-3834142140",
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
    className: "jsx-3834142140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("input", {
    type: "hidden",
    name: "form-name",
    value: "contact",
    className: "jsx-3834142140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), __jsx("label", {
    className: "jsx-3834142140",
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
    className: "jsx-3834142140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    className: "jsx-3834142140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Go")) : __jsx("label", {
    className: "jsx-3834142140" + " " + "foo",
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
    className: "jsx-3834142140" + " " + "footer",
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
//# sourceMappingURL=index.js.4d040dd59097834a272c.hot-update.js.map