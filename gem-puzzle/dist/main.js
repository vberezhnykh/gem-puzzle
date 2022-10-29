/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fjalla+One&family=VT323&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "h1 {\n  font-family: \"VT323\", monospace;\n  font-size: 60px;\n  text-align: center;\n  margin: 1vh auto;\n}\n\n.leader-board {\n  position: absolute;\n  width: 100%;\n  max-width: 500px;\n  height: 60vh;\n  border: 1px solid black;\n  z-index: 1;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: 25vh;\n  background-color: white;\n  padding: 10px;\n  font-family: \"VT323\", monospace;\n  font-size: 30px;\n  overflow-y: auto;\n}\n.leader-board h2 {\n  text-align: center;\n  font-size: 50px;\n}\n.leader-board ol {\n  margin-left: 2%;\n}\n.leader-board span {\n  cursor: pointer;\n}\n.leader-board .filter--active {\n  color: red;\n  font-weight: bold;\n}\n\n@media (max-width: 640px) {\n  .leader-board {\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    max-width: 96%;\n    font-size: 20px;\n  }\n  .leader-board h2 {\n    margin-top: 20px;\n  }\n}\n.controls-container {\n  width: 100%;\n  max-width: 70vh;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  display: flex;\n  justify-content: space-between;\n  font-size: 22px;\n  font-family: \"VT323\", monospace;\n}\n\n.refresh-btn,\n.pause-button {\n  background-color: #5BB8C8;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.audio-button,\n.leader-board-button,\n.close-button {\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-color: #5BB8C8;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.close-button {\n  position: absolute;\n  right: 10px;\n}\n\n.size-button {\n  background-color: #5BB8C8;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.statistics-container {\n  max-width: 70vh;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  text-align: center;\n  font-size: 30px;\n  display: flex;\n  justify-content: space-between;\n  font-family: \"VT323\", monospace;\n}\n\n@media (max-width: 768px) {\n  .controls-container,\n.statistics-container {\n    max-width: 95vw;\n    font-size: 16px;\n  }\n}\n.puzzle-wrapper {\n  width: 100%;\n  max-width: 1280px;\n  margin: 0 auto;\n}\n\n.frame {\n  position: relative;\n  border: 5px solid black;\n  height: 1200px;\n  width: 100%;\n  max-height: 70vh;\n  max-width: 70vh;\n  margin: 0 auto;\n  background-color: #5BA4C8;\n}\n\n@media (max-width: 768px) {\n  .frame {\n    max-width: 640px;\n    max-height: 640px;\n  }\n}\n@media (max-width: 640px) {\n  .frame {\n    max-width: 320px;\n    max-height: 320px;\n  }\n}\n.tile {\n  box-sizing: border-box;\n  border: 1px solid black;\n  background-color: #5BB8C8;\n  max-height: 320px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Fjalla One\", sans-serif;\n  font-size: 60px;\n  position: absolute;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.tile--three {\n  width: 33.3333333333%;\n  height: 33.3333333333%;\n}\n\n.tile--four {\n  width: 25%;\n  height: 25%;\n}\n\n.tile--five {\n  width: 20%;\n  height: 20%;\n}\n\n.tile--six {\n  width: 16.6666666667%;\n  height: 16.6666666667%;\n}\n\n.tile--seven {\n  width: 14.2857142857%;\n  height: 14.2857142857%;\n}\n\n.tile--eight {\n  width: 12.5%;\n  height: 12.5%;\n}\n\n@media (max-width: 640px) {\n  .tile--six,\n.tile--seven {\n    font-size: 40px;\n  }\n  .tile--eight {\n    font-size: 30px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/styles.scss"],"names":[],"mappings":"AAQA;EACI,+BAJO;EAKP,eAAA;EACA,kBAAA;EACA,gBAAA;AALJ;;AAQA;EACI,kBAAA;EACA,WAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,UAAA;EACA,cAAA;EACA,OAAA;EAAS,QAAA;EACT,SAAA;EACA,uBAAA;EACA,aAAA;EACA,+BAtBO;EAuBP,eAAA;EACA,gBAAA;AAJJ;AAKI;EACI,kBAAA;EACA,eAAA;AAHR;AAKI;EACI,eAAA;AAHR;AAKI;EACI,eAAA;AAHR;AAKI;EACI,UAAA;EACA,iBAAA;AAHR;;AAOA;EACI;IACI,YAAA;IACA,aAAA;IACA,MAAA;IACA,cAAA;IACA,eAAA;EAJN;EAKM;IACI,gBAAA;EAHV;AACF;AAOA;EACI,WAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,aAAA;EACA,8BAAA;EACA,eAAA;EACA,+BA9DO;AAyDX;;AAQA;;EAEI,yBArEG;EAsEH,kBAAA;EACA,eAAA;AALJ;;AAQA;;;EAGI,WAAA;EACA,YAAA;EACA,UAAA;EACA,4BAAA;EACA,wBAAA;EACA,yBAlFG;EAmFH,kBAAA;EACA,eAAA;AALJ;;AAQA;EACI,kBAAA;EACA,WAAA;AALJ;;AAQA;EACI,yBA7FG;EA8FH,kBAAA;EACA,eAAA;AALJ;;AAQA;EACI,eAAA;EACA,cAAA;EACA,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,aAAA;EACA,8BAAA;EACA,+BAxGO;AAmGX;;AAQA;EACI;;IAEI,eAAA;IACA,eAAA;EALN;AACF;AAQA;EACI,WAAA;EACA,iBAAA;EACA,cAAA;AANJ;;AASA;EACI,kBAAA;EACA,uBAAA;EACA,cAAA;EACA,WAAA;EACA,gBAAA;EACA,eAAA;EACA,cAAA;EACA,yBAlIS;AA4Hb;;AASA;EACI;IACI,gBAAA;IACA,iBAAA;EANN;AACF;AAQA;EACI;IACI,gBAAA;IACA,iBAAA;EANN;AACF;AASA;EACI,sBAAA;EACA,uBAAA;EACA,yBAtJG;EAuJH,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,qCAAA;EACA,eAAA;EACA,kBAAA;EACA,oBAAA;EACA,eAAA;AAPJ;;AAUA;EACI,qBAAA;EACA,sBAAA;AAPJ;;AAUA;EACI,UAAA;EACA,WAAA;AAPJ;;AAUA;EACI,UAAA;EACA,WAAA;AAPJ;;AAUA;EACI,qBAAA;EACA,sBAAA;AAPJ;;AAUA;EACI,qBAAA;EACA,sBAAA;AAPJ;;AAUA;EACI,YAAA;EACA,aAAA;AAPJ;;AAUA;EACI;;IAEI,eAAA;EAPN;EASE;IACI,eAAA;EAPN;AACF","sourcesContent":["@import './normalize.css';\r\n@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=VT323&display=swap');\r\n\r\n$tile: #5BB8C8;\r\n$background: #5BA4C8;\r\n$mainFont: 'VT323', monospace;\r\n$digitFont: 'Fjalla One', sans-serif;\r\n\r\nh1 {\r\n    font-family: $mainFont;\r\n    font-size: 60px;\r\n    text-align: center;\r\n    margin: 1vh auto;\r\n}\r\n\r\n.leader-board {\r\n    position: absolute;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    height: 60vh;\r\n    border: 1px solid black;\r\n    z-index: 1;\r\n    margin: 0 auto;\r\n    left: 0; right: 0;\r\n    top: 25vh;\r\n    background-color: white;\r\n    padding: 10px;\r\n    font-family: $mainFont;\r\n    font-size: 30px;\r\n    overflow-y: auto;\r\n    h2 {\r\n        text-align: center;\r\n        font-size: 50px;\r\n    }\r\n    ol {\r\n        margin-left: 2%;\r\n    }\r\n    span {\r\n        cursor: pointer;\r\n    }\r\n    .filter--active {\r\n        color: red;\r\n        font-weight: bold;\r\n    }\r\n}\r\n\r\n@media (max-width: 640px) {\r\n    .leader-board {\r\n        width: 100vw;\r\n        height: 100vh;\r\n        top: 0;\r\n        max-width: 96%;\r\n        font-size: 20px;\r\n        h2 {\r\n            margin-top: 20px;\r\n        }\r\n    }\r\n}\r\n\r\n.controls-container {\r\n    width: 100%;\r\n    max-width: 70vh;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 22px;\r\n    font-family: $mainFont;\r\n}\r\n\r\n.refresh-btn,\r\n.pause-button {\r\n    background-color: $tile;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.audio-button,\r\n.leader-board-button,\r\n.close-button {\r\n    width: 36px;\r\n    height: 36px;\r\n    padding: 0;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-color: $tile;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.close-button {\r\n    position: absolute;\r\n    right: 10px;\r\n}\r\n\r\n.size-button {\r\n    background-color: $tile;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\n.statistics-container {\r\n    max-width: 70vh;\r\n    margin: 0 auto;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-family: $mainFont;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .controls-container,\r\n    .statistics-container {\r\n        max-width: 95vw;\r\n        font-size: 16px;\r\n    } \r\n}\r\n\r\n.puzzle-wrapper {\r\n    width: 100%;\r\n    max-width: 1280px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.frame {\r\n    position: relative;\r\n    border: 5px solid black;\r\n    height: 1200px;\r\n    width: 100%;\r\n    max-height: 70vh;\r\n    max-width: 70vh;\r\n    margin: 0 auto;\r\n    background-color: $background;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .frame {\r\n        max-width: 640px;\r\n        max-height: 640px;\r\n    }\r\n}\r\n@media (max-width: 640px) {\r\n    .frame {\r\n        max-width: 320px;\r\n        max-height: 320px;\r\n    }\r\n}\r\n\r\n.tile {\r\n    box-sizing: border-box;\r\n    border: 1px solid black;\r\n    background-color: $tile;\r\n    max-height: 320px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-family: 'Fjalla One', sans-serif;\r\n    font-size: 60px;\r\n    position: absolute;\r\n    transition: all 0.3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.tile--three {\r\n    width: calc(100% / 3);\r\n    height: calc(100% / 3)\r\n}\r\n\r\n.tile--four {\r\n    width: calc(100% / 4);\r\n    height: calc(100% / 4);\r\n}\r\n\r\n.tile--five {\r\n    width: calc(100% / 5);\r\n    height: calc(100% / 5);\r\n}\r\n\r\n.tile--six {\r\n    width: calc(100% / 6);\r\n    height: calc(100% / 6);\r\n}\r\n\r\n.tile--seven {\r\n    width: calc(100% / 7);\r\n    height: calc(100% / 7);\r\n}\r\n\r\n.tile--eight {\r\n    width: calc(100% / 8);\r\n    height: calc(100% / 8);\r\n}\r\n\r\n@media(max-width: 640px) {\r\n    .tile--six,\r\n    .tile--seven {\r\n        font-size: 40px;\r\n    }\r\n    .tile--eight {\r\n        font-size: 30px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/normalize.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n    line-height: 1.15; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n  }\r\n  \r\n  /* Sections\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the margin in all browsers.\r\n   */\r\n  \r\n  body {\r\n    margin: 0;\r\n  }\r\n  \r\n  /**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n  \r\n  main {\r\n    display: block;\r\n  }\r\n  \r\n  /**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n  \r\n  h1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n  }\r\n  \r\n  /* Grouping content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n  \r\n  hr {\r\n    box-sizing: content-box; /* 1 */\r\n    height: 0; /* 1 */\r\n    overflow: visible; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  pre {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /* Text-level semantics\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n  \r\n  a {\r\n    background-color: transparent;\r\n  }\r\n  \r\n  /**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n  \r\n  abbr[title] {\r\n    border-bottom: none; /* 1 */\r\n    text-decoration: underline; /* 2 */\r\n    text-decoration: underline dotted; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n  \r\n  b,\r\n  strong {\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  code,\r\n  kbd,\r\n  samp {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n  \r\n  small {\r\n    font-size: 80%;\r\n  }\r\n  \r\n  /**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n  \r\n  sub,\r\n  sup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  sub {\r\n    bottom: -0.25em;\r\n  }\r\n  \r\n  sup {\r\n    top: -0.5em;\r\n  }\r\n  \r\n  /* Embedded content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n  \r\n  img {\r\n    border-style: none;\r\n  }\r\n  \r\n  /* Forms\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n  \r\n  button,\r\n  input,\r\n  optgroup,\r\n  select,\r\n  textarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 1 */\r\n    line-height: 1.15; /* 1 */\r\n    margin: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n  \r\n  button,\r\n  input { /* 1 */\r\n    overflow: visible;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n  \r\n  button,\r\n  select { /* 1 */\r\n    text-transform: none;\r\n  }\r\n  \r\n  /**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n  \r\n  button,\r\n  [type=\"button\"],\r\n  [type=\"reset\"],\r\n  [type=\"submit\"] {\r\n    -webkit-appearance: button;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n  \r\n  button::-moz-focus-inner,\r\n  [type=\"button\"]::-moz-focus-inner,\r\n  [type=\"reset\"]::-moz-focus-inner,\r\n  [type=\"submit\"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  /**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n  \r\n  button:-moz-focusring,\r\n  [type=\"button\"]:-moz-focusring,\r\n  [type=\"reset\"]:-moz-focusring,\r\n  [type=\"submit\"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n  }\r\n  \r\n  /**\r\n   * Correct the padding in Firefox.\r\n   */\r\n  \r\n  fieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n  \r\n  legend {\r\n    box-sizing: border-box; /* 1 */\r\n    color: inherit; /* 2 */\r\n    display: table; /* 1 */\r\n    max-width: 100%; /* 1 */\r\n    padding: 0; /* 3 */\r\n    white-space: normal; /* 1 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n  \r\n  progress {\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  /**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n  \r\n  textarea {\r\n    overflow: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n  \r\n  [type=\"checkbox\"],\r\n  [type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n  \r\n  [type=\"number\"]::-webkit-inner-spin-button,\r\n  [type=\"number\"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n  \r\n  [type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    outline-offset: -2px; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n  \r\n  [type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n  \r\n  ::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* 1 */\r\n    font: inherit; /* 2 */\r\n  }\r\n  \r\n  /* Interactive\r\n     ========================================================================== */\r\n  \r\n  /*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n  \r\n  details {\r\n    display: block;\r\n  }\r\n  \r\n  /*\r\n   * Add the correct display in all browsers.\r\n   */\r\n  \r\n  summary {\r\n    display: list-item;\r\n  }\r\n  \r\n  /* Misc\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n  \r\n  template {\r\n    display: none;\r\n  }\r\n  \r\n  /**\r\n   * Add the correct display in IE 10.\r\n   */\r\n  \r\n  [hidden] {\r\n    display: none;\r\n  }", "",{"version":3,"sources":["webpack://./src/styles/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;CAED;IACG,iBAAiB,EAAE,MAAM;IACzB,8BAA8B,EAAE,MAAM;EACxC;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,SAAS;EACX;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;IACE,cAAc;IACd,gBAAgB;EAClB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;IACE,uBAAuB,EAAE,MAAM;IAC/B,SAAS,EAAE,MAAM;IACjB,iBAAiB,EAAE,MAAM;EAC3B;;EAEA;;;IAGE;;EAEF;IACE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,6BAA6B;EAC/B;;EAEA;;;IAGE;;EAEF;IACE,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;EAC3C;;EAEA;;IAEE;;EAEF;;IAEE,mBAAmB;EACrB;;EAEA;;;IAGE;;EAEF;;;IAGE,iCAAiC,EAAE,MAAM;IACzC,cAAc,EAAE,MAAM;EACxB;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,wBAAwB;EAC1B;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,WAAW;EACb;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;;IAGE;;EAEF;;;;;IAKE,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;EACnB;;EAEA;;;IAGE;;EAEF;UACQ,MAAM;IACZ,iBAAiB;EACnB;;EAEA;;;IAGE;;EAEF;WACS,MAAM;IACb,oBAAoB;EACtB;;EAEA;;IAEE;;EAEF;;;;IAIE,0BAA0B;EAC5B;;EAEA;;IAEE;;EAEF;;;;IAIE,kBAAkB;IAClB,UAAU;EACZ;;EAEA;;IAEE;;EAEF;;;;IAIE,8BAA8B;EAChC;;EAEA;;IAEE;;EAEF;IACE,8BAA8B;EAChC;;EAEA;;;;;IAKE;;EAEF;IACE,sBAAsB,EAAE,MAAM;IAC9B,cAAc,EAAE,MAAM;IACtB,cAAc,EAAE,MAAM;IACtB,eAAe,EAAE,MAAM;IACvB,UAAU,EAAE,MAAM;IAClB,mBAAmB,EAAE,MAAM;EAC7B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;;IAGE;;EAEF;;IAEE,sBAAsB,EAAE,MAAM;IAC9B,UAAU,EAAE,MAAM;EACpB;;EAEA;;IAEE;;EAEF;;IAEE,YAAY;EACd;;EAEA;;;IAGE;;EAEF;IACE,6BAA6B,EAAE,MAAM;IACrC,oBAAoB,EAAE,MAAM;EAC9B;;EAEA;;IAEE;;EAEF;IACE,wBAAwB;EAC1B;;EAEA;;;IAGE;;EAEF;IACE,0BAA0B,EAAE,MAAM;IAClC,aAAa,EAAE,MAAM;EACvB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,cAAc;EAChB;;EAEA;;IAEE;;EAEF;IACE,kBAAkB;EACpB;;EAEA;iFAC+E;;EAE/E;;IAEE;;EAEF;IACE,aAAa;EACf;;EAEA;;IAEE;;EAEF;IACE,aAAa;EACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\n html {\r\n    line-height: 1.15; /* 1 */\r\n    -webkit-text-size-adjust: 100%; /* 2 */\r\n  }\r\n  \r\n  /* Sections\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the margin in all browsers.\r\n   */\r\n  \r\n  body {\r\n    margin: 0;\r\n  }\r\n  \r\n  /**\r\n   * Render the `main` element consistently in IE.\r\n   */\r\n  \r\n  main {\r\n    display: block;\r\n  }\r\n  \r\n  /**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\n  \r\n  h1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n  }\r\n  \r\n  /* Grouping content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\n  \r\n  hr {\r\n    box-sizing: content-box; /* 1 */\r\n    height: 0; /* 1 */\r\n    overflow: visible; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  pre {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /* Text-level semantics\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the gray background on active links in IE 10.\r\n   */\r\n  \r\n  a {\r\n    background-color: transparent;\r\n  }\r\n  \r\n  /**\r\n   * 1. Remove the bottom border in Chrome 57-\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\n  \r\n  abbr[title] {\r\n    border-bottom: none; /* 1 */\r\n    text-decoration: underline; /* 2 */\r\n    text-decoration: underline dotted; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\n  \r\n  b,\r\n  strong {\r\n    font-weight: bolder;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\n  \r\n  code,\r\n  kbd,\r\n  samp {\r\n    font-family: monospace, monospace; /* 1 */\r\n    font-size: 1em; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct font size in all browsers.\r\n   */\r\n  \r\n  small {\r\n    font-size: 80%;\r\n  }\r\n  \r\n  /**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\n  \r\n  sub,\r\n  sup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  sub {\r\n    bottom: -0.25em;\r\n  }\r\n  \r\n  sup {\r\n    top: -0.5em;\r\n  }\r\n  \r\n  /* Embedded content\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Remove the border on images inside links in IE 10.\r\n   */\r\n  \r\n  img {\r\n    border-style: none;\r\n  }\r\n  \r\n  /* Forms\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * 1. Change the font styles in all browsers.\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\n  \r\n  button,\r\n  input,\r\n  optgroup,\r\n  select,\r\n  textarea {\r\n    font-family: inherit; /* 1 */\r\n    font-size: 100%; /* 1 */\r\n    line-height: 1.15; /* 1 */\r\n    margin: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\n  \r\n  button,\r\n  input { /* 1 */\r\n    overflow: visible;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\n  \r\n  button,\r\n  select { /* 1 */\r\n    text-transform: none;\r\n  }\r\n  \r\n  /**\r\n   * Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\n  \r\n  button,\r\n  [type=\"button\"],\r\n  [type=\"reset\"],\r\n  [type=\"submit\"] {\r\n    -webkit-appearance: button;\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\n  \r\n  button::-moz-focus-inner,\r\n  [type=\"button\"]::-moz-focus-inner,\r\n  [type=\"reset\"]::-moz-focus-inner,\r\n  [type=\"submit\"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n  }\r\n  \r\n  /**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\n  \r\n  button:-moz-focusring,\r\n  [type=\"button\"]:-moz-focusring,\r\n  [type=\"reset\"]:-moz-focusring,\r\n  [type=\"submit\"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n  }\r\n  \r\n  /**\r\n   * Correct the padding in Firefox.\r\n   */\r\n  \r\n  fieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\n  \r\n  legend {\r\n    box-sizing: border-box; /* 1 */\r\n    color: inherit; /* 2 */\r\n    display: table; /* 1 */\r\n    max-width: 100%; /* 1 */\r\n    padding: 0; /* 3 */\r\n    white-space: normal; /* 1 */\r\n  }\r\n  \r\n  /**\r\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\n  \r\n  progress {\r\n    vertical-align: baseline;\r\n  }\r\n  \r\n  /**\r\n   * Remove the default vertical scrollbar in IE 10+.\r\n   */\r\n  \r\n  textarea {\r\n    overflow: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Add the correct box sizing in IE 10.\r\n   * 2. Remove the padding in IE 10.\r\n   */\r\n  \r\n  [type=\"checkbox\"],\r\n  [type=\"radio\"] {\r\n    box-sizing: border-box; /* 1 */\r\n    padding: 0; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n  \r\n  [type=\"number\"]::-webkit-inner-spin-button,\r\n  [type=\"number\"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n  \r\n  [type=\"search\"] {\r\n    -webkit-appearance: textfield; /* 1 */\r\n    outline-offset: -2px; /* 2 */\r\n  }\r\n  \r\n  /**\r\n   * Remove the inner padding in Chrome and Safari on macOS.\r\n   */\r\n  \r\n  [type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n  }\r\n  \r\n  /**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n  \r\n  ::-webkit-file-upload-button {\r\n    -webkit-appearance: button; /* 1 */\r\n    font: inherit; /* 2 */\r\n  }\r\n  \r\n  /* Interactive\r\n     ========================================================================== */\r\n  \r\n  /*\r\n   * Add the correct display in Edge, IE 10+, and Firefox.\r\n   */\r\n  \r\n  details {\r\n    display: block;\r\n  }\r\n  \r\n  /*\r\n   * Add the correct display in all browsers.\r\n   */\r\n  \r\n  summary {\r\n    display: list-item;\r\n  }\r\n  \r\n  /* Misc\r\n     ========================================================================== */\r\n  \r\n  /**\r\n   * Add the correct display in IE 10+.\r\n   */\r\n  \r\n  template {\r\n    display: none;\r\n  }\r\n  \r\n  /**\r\n   * Add the correct display in IE 10.\r\n   */\r\n  \r\n  [hidden] {\r\n    display: none;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/whoosh.mp3":
/*!*******************************!*\
  !*** ./src/assets/whoosh.mp3 ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ed67a52ff8e007b3e167949971404740.mp3");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n</head>\r\n<body>\r\n    \r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/close.svg":
/*!******************************!*\
  !*** ./src/assets/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/close.svg";

/***/ }),

/***/ "./src/assets/menu.svg":
/*!*****************************!*\
  !*** ./src/assets/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/menu.svg";

/***/ }),

/***/ "./src/assets/volume-off.svg":
/*!***********************************!*\
  !*** ./src/assets/volume-off.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/volume-off.svg";

/***/ }),

/***/ "./src/assets/volume-on.svg":
/*!**********************************!*\
  !*** ./src/assets/volume-on.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/volume-on.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _assets_whoosh_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/whoosh.mp3 */ "./src/assets/whoosh.mp3");
/* harmony import */ var _assets_volume_on_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/volume-on.svg */ "./src/assets/volume-on.svg");
/* harmony import */ var _assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/volume-off.svg */ "./src/assets/volume-off.svg");
/* harmony import */ var _assets_menu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/menu.svg */ "./src/assets/menu.svg");
/* harmony import */ var _assets_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/close.svg */ "./src/assets/close.svg");
/* eslint-disable no-param-reassign */







let size = 4;
function isSolvable(array) {
  const zeroIndex = array.indexOf(0);
  const newArray = [...array.slice(0, zeroIndex), ...array.slice(zeroIndex + 1)];
  let counter = 0;
  for (let i = 0; i < newArray.length; i += 1) {
    let k = 1;
    while (k < newArray.length) {
      if (newArray[i] > newArray[i + k]) counter += 1;
      k += 1;
    }
  }
  /* если размер доски четный, то дополнительно добавляем номер ряда, в котором содержится
  пустая клетка, начиная с 0 */
  if (size % 2 === 0) {
    const row = Math.ceil((zeroIndex + 1) / size) - 1;
    return (counter + row) % 2 !== 0;
  }
  return counter % 2 === 0;
}
function createNumbers() {
  const numbers = [];
  for (let i = 0; i < size * size; i += 1) {
    numbers.push(i);
  }
  for (let i = numbers.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = numbers[i];
    numbers[i] = numbers[j];
    numbers[j] = temp;
  }
  // проверяем на решаемость: если решаемо возвращаем numbers, если нет, то вызываем функцию еще раз
  if (isSolvable(numbers)) return numbers;
  return createNumbers();
}
let NUMBERS;
if (localStorage.getItem('position') === null) NUMBERS = createNumbers();else NUMBERS = [...JSON.parse(localStorage.getItem('position'))];
const tiles = [];
let timerId;
let time;
if (localStorage.getItem('time') !== null) time = localStorage.getItem('time');else time = '00:00';
let moves;
if (localStorage.getItem('moves') !== null) moves = parseInt(localStorage.getItem('moves'), 10);else moves = 0;
let isPlaying = true;
let isRun = false;
let results = [];
if (localStorage.getItem('results') !== null) results = [...JSON.parse(localStorage.getItem('results'))];
let activeFilter = 'time';
function createHeading() {
  const heading = document.createElement('h1');
  heading.innerText = 'Gem Puzzle';
  document.body.append(heading);
}
function createTimer(container) {
  const timer = document.createElement('div');
  timer.className = 'timer';
  container.append(timer);
  timer.innerHTML = time;
}
function createMoveCounter(container) {
  const moveCount = document.createElement('div');
  moveCount.className = 'move-counter';
  container.append(moveCount);
  moveCount.innerHTML = `Moves: ${moves}`;
}
function createTimerAndMoveCounter() {
  const container = document.createElement('div');
  container.className = 'statistics-container';
  document.body.append(container);
  createTimer(container);
  createMoveCounter(container);
}
function createTile() {
  const tile = document.createElement('div');
  if (NUMBERS[0] === 0) tile.innerText = '';else {
    // eslint-disable-next-line prefer-destructuring
    tile.innerText = NUMBERS[0];
    tile.classList.add('tile');
    if (size === 3) tile.classList.add('tile--three');else if (size === 4) tile.classList.add('tile--four');else if (size === 5) tile.classList.add('tile--five');else if (size === 6) tile.classList.add('tile--six');else if (size === 7) tile.classList.add('tile--seven');else tile.classList.add('tile--eight');
  }
  NUMBERS.shift();
  return tile;
}
function runTimer() {
  const timer = document.querySelector('.timer');
  let minutes = parseInt(time.split(':')[0], 10);
  let seconds = parseInt(time.split(':')[1], 10);
  timerId = setInterval(() => {
    if (isRun) {
      seconds += 1;
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      timer.innerHTML = `${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}`;
    }
  }, 1000);
}
function saveState() {
  if (NUMBERS.length !== 0) NUMBERS.length = 0;
  tiles.forEach(elem => {
    if (elem.value === '') NUMBERS.push(0);else NUMBERS.push(parseInt(elem.value, 10));
  });
  localStorage.setItem('position', JSON.stringify(NUMBERS));
  time = document.querySelector('.timer').innerHTML;
  localStorage.setItem('time', time);
  localStorage.setItem('moves', moves);
}
function pauseAndSave() {
  isRun = false;
  const button = document.querySelector('.pause-button');
  // удаляем слушатель события и меняем текст внутри кнопки
  button.innerHTML = 'Continue';
  button.removeEventListener('click', pauseAndSave);
  button.addEventListener('click', () => {
    button.innerHTML = 'Pause and Save';
    button.addEventListener('click', pauseAndSave);
    isRun = true;
  });
  saveState();
}
window.onbeforeunload = saveState;
function addMove() {
  const empty = tiles.find(tile => tile.value === '');
  tiles.forEach(tile => {
    tile.element.addEventListener('click', () => {
      const tileSize = window.getComputedStyle(tile.element).width.slice(0, -2);

      // записываем разницу в положении выбранной ячейки и пустой ячейки;
      const leftDiff = Math.abs(empty.left - tile.left);
      const topDiff = Math.abs(empty.top - tile.top);
      // если ячейка не является соседней, то прекращаем выполнение функции;
      if (leftDiff + topDiff > 1) return;

      // двигаем ячейку, выбранную по индексу
      tile.element.style.left = `${empty.left * tileSize}px`;
      tile.element.style.top = `${empty.top * tileSize}px`;
      // запоминаем текущее положение пустой ячейки;
      const emptyLeft = empty.left;
      const emptyTop = empty.top;
      // записываем новое положение пустой ячейки;
      empty.left = tile.left;
      empty.top = tile.top;
      // записываем текущение положение ячейки, которое равно положению ранее пустой ячейки
      tile.left = emptyLeft;
      tile.top = emptyTop;
      const tileIndex = tiles.indexOf(tile);
      const emptyIndex = tiles.indexOf(empty);
      tiles[emptyIndex] = tiles[tileIndex];
      tiles[tileIndex] = empty;

      // увеличиваем счетчик ходов;
      moves += 1;
      const moveCounter = document.querySelector('.move-counter');
      moveCounter.innerHTML = `Moves: ${moves}`;
      // запускаем таймер
      if (!isRun) {
        isRun = true;
        runTimer();
        const button = document.querySelector('.pause-button');
        button.innerHTML = 'Pause and Save';
        button.addEventListener('click', pauseAndSave);
      }

      // добавляем звук свайпа
      const sound = new Audio(_assets_whoosh_mp3__WEBPACK_IMPORTED_MODULE_2__["default"]);
      if (isPlaying) sound.play();

      // проверяем все ли ячейки на своих местах;
      const tempArr = tiles.slice(0, -1);
      for (let i = 0; i < tempArr.length; i += 1) {
        if (parseInt(tempArr[i].value, 10) !== i + 1) return;
        if (i === tempArr.length - 1 && tiles[tiles.length - 1].value === '') {
          clearTimeout(timerId);
          const currentTime = document.querySelector('.timer').innerHTML;
          // eslint-disable-next-line no-alert
          alert(`Hooray! You solved the puzzle in ${currentTime} and ${moves} moves!`);
          // сохраняем результат в Local Storage;
          const result = {
            time: currentTime,
            moves,
            size: `${size}x${size}`
          };
          results.push(result);
          localStorage.setItem('results', JSON.stringify(results));
          // обнуляем предыдущее расположение ячеек, времени и ходов, если они сохранены в LS
          if (localStorage.getItem('time') !== null) delete localStorage.time;
          if (localStorage.getItem('position') !== null) delete localStorage.position;
          if (localStorage.getItem('moves') !== null) delete localStorage.moves;
        }
      }
    });
  });
}
function createBoard() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('puzzle-wrapper');
  document.body.append(wrapper);
  const frame = document.createElement('div');
  frame.classList.add('frame');
  wrapper.append(frame);
  for (let i = 0; i < size * size; i += 1) {
    const tile = createTile();
    frame.append(tile);
    const left = i % size;
    const top = (i - left) / size;
    const value = tile.innerHTML;
    const tileSize = window.getComputedStyle(tile).width.slice(0, -2);
    // создаем массив со всеми ячейками;
    tiles.push({
      value,
      left,
      top,
      element: tile
    });
    tile.style.left = `${left * tileSize}px`;
    tile.style.top = `${top * tileSize}px`;
  }
  setTimeout(addMove, 300);
}
function shuffleTiles() {
  tiles.length = 0;
  const refreshedNumbers = createNumbers();
  NUMBERS = [...refreshedNumbers];
  const frame = document.querySelector('.puzzle-wrapper');
  frame.remove();
  clearTimeout(timerId);
  isRun = false;
  time = '00:00';
  const statistics = document.querySelector('.statistics-container');
  statistics.remove();
  moves = 0;
  createTimerAndMoveCounter();
  createBoard();

  // удаляем сведения о предыдущей игре, если они сохранены в LS;
  if (localStorage.getItem('time') !== null) delete localStorage.time;
  if (localStorage.getItem('position') !== null) delete localStorage.position;
  if (localStorage.getItem('moves') !== null) delete localStorage.moves;
}
function listOfBestResults(filter) {
  const list = document.createElement('ol');
  const unsortedResults = [...results];
  let sortedResults;
  if (filter === 'moves') sortedResults = unsortedResults.sort((a, b) => a.moves - b.moves);else {
    sortedResults = unsortedResults.sort((a, b) => {
      const aSplitTime = a.time.split(':');
      const bSplitTime = b.time.split(':');
      const aMinutes = 60 * parseInt(aSplitTime[0], 10);
      const bMinutes = 60 * parseInt(bSplitTime[0], 10);
      const aSeconds = parseInt(aSplitTime[1], 10);
      const bSeconds = parseInt(bSplitTime[1], 10);
      const aTimeInSec = aMinutes + aSeconds;
      const bTimeInSec = bMinutes + bSeconds;
      return aTimeInSec - bTimeInSec;
    });
  }
  for (let i = 0; i < 10; i += 1) {
    const item = document.createElement('li');
    list.appendChild(item);
    if (sortedResults[i] === undefined) item.innerHTML = '---';else item.innerHTML = `Time: ${sortedResults[i].time}; Moves: ${sortedResults[i].moves}; Size: ${sortedResults[i].size}`;
  }
  return list;
}
function createLeaderBoard() {
  const leaderBoard = document.createElement('div');
  leaderBoard.className = 'leader-board';
  document.body.prepend(leaderBoard);
  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-button';
  closeBtn.style.backgroundImage = `url(${_assets_close_svg__WEBPACK_IMPORTED_MODULE_6__})`;
  closeBtn.onclick = () => leaderBoard.remove();
  leaderBoard.appendChild(closeBtn);
  const heading = document.createElement('h2');
  leaderBoard.appendChild(heading);
  heading.innerText = 'TOP RESULTS:';
  const filter = document.createElement('div');
  filter.innerHTML = 'Filter by:';
  leaderBoard.appendChild(filter);
  const timeFilter = document.createElement('span');
  timeFilter.innerHTML = ' TIME   ';
  if (activeFilter === 'time') timeFilter.className = 'filter--active';
  timeFilter.addEventListener('click', () => {
    activeFilter = 'time';
    leaderBoard.remove();
    createLeaderBoard();
  });
  filter.appendChild(timeFilter);
  const movesFilter = document.createElement('span');
  movesFilter.innerHTML = '   MOVES';
  if (activeFilter === 'moves') movesFilter.className = 'filter--active';
  movesFilter.addEventListener('click', () => {
    activeFilter = 'moves';
    leaderBoard.remove();
    createLeaderBoard();
  });
  filter.appendChild(movesFilter);
  const list = listOfBestResults(activeFilter);
  leaderBoard.appendChild(list);
  return leaderBoard;
}
function createControls() {
  // создаем контейнер с элементами управления;
  const container = document.createElement('div');
  container.className = 'controls-container';
  document.body.append(container);

  // создаем кнопку перемешивания;
  const refreshBtn = document.createElement('button');
  refreshBtn.className = 'refresh-btn';
  refreshBtn.innerText = 'Shuffle and Start';
  container.appendChild(refreshBtn);
  refreshBtn.onclick = shuffleTiles;

  // создаем кнопку паузы и сохранения состояния;
  const pauseBtn = document.createElement('button');
  pauseBtn.className = 'pause-button';
  pauseBtn.innerText = 'Pause and Save';
  refreshBtn.after(pauseBtn);
  pauseBtn.addEventListener('click', pauseAndSave);

  // создаем кнопку выключения звука;
  const audioBtn = document.createElement('button');
  audioBtn.className = 'audio-button';
  audioBtn.style.backgroundImage = `url(${_assets_volume_on_svg__WEBPACK_IMPORTED_MODULE_3__})`;
  audioBtn.addEventListener('click', () => {
    if (isPlaying) {
      audioBtn.style.backgroundImage = `url(${_assets_volume_off_svg__WEBPACK_IMPORTED_MODULE_4__})`;
      isPlaying = false;
    } else {
      audioBtn.style.backgroundImage = `url(${_assets_volume_on_svg__WEBPACK_IMPORTED_MODULE_3__})`;
      isPlaying = true;
    }
  });
  pauseBtn.after(audioBtn);

  // создаем меню выбора размера поля
  const selectSize = document.createElement('select');
  selectSize.className = 'size-button';
  selectSize.name = 'Choose size';
  const options = [3, 4, 5, 6, 7, 8];
  options.forEach(element => {
    const option = document.createElement('option');
    option.value = element;
    option.text = `${element}x${element}`;
    if (element === size) option.selected = true;
    selectSize.appendChild(option);
  });
  selectSize.addEventListener('change', () => {
    size = parseInt(selectSize.value, 10);
    shuffleTiles();
  });
  audioBtn.after(selectSize);

  // создаем таблицу лучших результатов;
  const leaderboardBtn = document.createElement('button');
  leaderboardBtn.className = 'leader-board-button';
  leaderboardBtn.style.backgroundImage = `url(${_assets_menu_svg__WEBPACK_IMPORTED_MODULE_5__})`;
  leaderboardBtn.onclick = createLeaderBoard;
  selectSize.after(leaderboardBtn);
}
window.addEventListener('load', createHeading);
window.addEventListener('load', createControls);
window.addEventListener('load', () => {
  createTimerAndMoveCounter();
  clearTimeout(timerId);
});
window.addEventListener('load', createBoard);
window.onresize = () => {
  saveState();
  tiles.length = size * size;
  const container = document.querySelector('.puzzle-wrapper');
  container.remove();
  if (localStorage.getItem('position') === null) NUMBERS = createNumbers();else NUMBERS = [...JSON.parse(localStorage.getItem('position'))];
  createBoard();
};
})();

/******/ })()
;
//# sourceMappingURL=main.js.map