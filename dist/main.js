/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Nunito_variable.ttf */ "./src/fonts/Nunito_variable.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ramen-min.jpg */ "./src/img/ramen-min.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Nunito";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 200;
  font-style: normal;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  min-height: 100vh;
  font-family: "Nunito", sans-serif;
}

#content {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: repeat-y;
  background-position: center;
  background-size: cover;
  transition: 0.5s background-image;
}

header {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  padding: 20px;
  text-align: center;
  z-index: 1;
  backdrop-filter: blur(4px);
}

.logo {
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 900;
  font-size: 1.2rem;
}

nav ul {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
nav ul li {
  flex: 1;
  list-style: none;
}
nav button {
  padding: 10px 20px;
  width: 100%;
  color: white;
  background: none;
  border: none;
  transition: 1s all;
  font-weight: 600;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
}
nav button::after {
  content: "";
  background-color: white;
  position: absolute;
  bottom: 0;
  right: 100%;
  width: 100%;
  height: 2px;
  transition: 0.3s ease;
}
nav button:hover::after {
  right: 0;
}

.tabs {
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
}

#contact, #menu, #home {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  max-width: 900px;
  padding: 10px;
  backdrop-filter: blur(4px);
}
#contact h2, #menu h2, #home h2 {
  text-transform: uppercase;
}
@media (min-width: 640px) {
  #contact, #menu, #home {
    padding: 20px 50px;
  }
}

.foods {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 768px) {
  .foods {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

.category {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.category h4 {
  font-size: 2rem;
  font-weight: 900;
  margin-top: 15px;
  font-style: italic;
  text-transform: uppercase;
}

.products {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.products h5 {
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.products i {
  cursor: pointer;
}

.product {
  display: flex;
  flex-direction: column;
  justify-content: start;
}
.product .name-price {
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.product h6, .product p {
  padding-left: 10px;
  font-weight: 100;
  font-size: 1rem;
  word-spacing: 5px;
}
.product p {
  margin-bottom: 20px;
}

.info p {
  margin: 20px 0;
}
.info.center {
  text-align: center;
}
.info.center .social {
  justify-content: center;
}
.info.end {
  margin-top: auto;
}
.info button {
  padding: 5px 10px;
  background: none;
  color: white;
  font-weight: 600;
  border: none;
  border-bottom: 2px solid white;
  cursor: pointer;
  transition: 0.3s all;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.info button:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
.info .social {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
}
.info .social a {
  color: inherit;
}
.info .social i {
  font-size: 1.1rem;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,qBAAA;EACA,4CAAA;EACA,gBAAA;EACA,kBAAA;AACJ;AAEA;EACI,sBAAA;EACA,SAAA;EACA,UAAA;AAAJ;;AAKA;EACE,aAAA;EACA,iBAAA;EACE,iCAAA;AAFJ;;AAKA;EACI,kBAAA;EACA,OAAA;EACA,aAAA;EACA,sBAAA;EACA,yDAAA;EACA,2BAAA;EACA,2BAAA;EACA,sBAAA;EACA,iCAAA;AAFJ;;AAKA;EACI,gBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,oCAAA;EACA,YAAA;EACA,aAAA;EACA,6BAAA;EACA,eAAA;EACA,mBAAA;EACA,SAAA;EACA,aAAA;EACA,kBAAA;EACA,UAAA;EACA,0BAAA;AAFJ;;AAIA;EACI,aAAA;EACA,SAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;AADJ;;AAII;EACI,aAAA;EACA,eAAA;EACA,SAAA;AADR;AAGQ;EACI,OAAA;EACA,gBAAA;AADZ;AAII;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;AAFR;AAIQ;EACI,WAAA;EACA,uBAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,qBAAA;AAFZ;AAKQ;EACI,QAAA;AAHZ;;AAQA;EACI,OAAA;EACA,aAAA;EACA,uBAAA;EACA,oCAAA;AALJ;;AAQA;EACI,YAAA;EACA,aAAA;EACA,sBAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;EACA,aAAA;EACA,0BAAA;AALJ;AAOI;EACI,yBAAA;AALR;AAQI;EAfJ;IAgBQ,kBAAA;EALN;AACF;;AAkBA;EACI,aAAA;EACA,0BAAA;EACA,SAAA;AAfJ;AAgBI;EAJJ;IAKQ,8BAAA;IACA,SAAA;EAbN;AACF;;AAeA;EACI,aAAA;EACA,sBAAA;EACA,SAAA;AAZJ;AAaI;EACI,eAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,yBAAA;AAXR;;AAcA;EACI,aAAA;EACA,sBAAA;EACA,QAAA;AAXJ;AAYI;EACI,iBAAA;EACA,mBAAA;EACA,yBAAA;AAVR;AAYI;EACI,eAAA;AAVR;;AAaA;EACI,aAAA;EACA,sBAAA;EACA,sBAAA;AAVJ;AAYI;EACI,OAAA;EACA,aAAA;EACA,8BAAA;EACA,SAAA;AAVR;AAaI;EACI,kBAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;AAXR;AAaI;EACI,mBAAA;AAXR;;AAgBI;EACI,cAAA;AAbR;AAgBI;EACI,kBAAA;AAdR;AAeQ;EACI,uBAAA;AAbZ;AAgBI;EACI,gBAAA;AAdR;AAiBI;EACI,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,8BAAA;EACA,eAAA;EACA,oBAAA;EACA,4BAAA;EACA,6BAAA;AAfR;AAgBQ;EACI,0CAAA;AAdZ;AAkBI;EACI,aAAA;EACA,mBAAA;EACA,eAAA;EACA,SAAA;EACA,cAAA;AAhBR;AAkBQ;EACI,cAAA;AAhBZ;AAmBQ;EACI,iBAAA;AAjBZ","sourcesContent":["@font-face {\n    font-family: 'Nunito';\n    src: url('./fonts/Nunito_variable.ttf');\n    font-weight: 200;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n$body-color: red;\n\nbody {\n  display: flex;\n  min-height: 100vh;\n    font-family: 'Nunito', sans-serif;\n}\n\n#content {\n    position: relative;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background-image: url(./img/ramen-min.jpg);\n    background-repeat: repeat-y;\n    background-position: center;\n    background-size: cover;\n    transition: 0.5s background-image;\n}\n\nheader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    right: 0;\n    background-color: rgba($color: #000000, $alpha: 0.4);\n    color: white;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: 30px;\n    padding: 20px;\n    text-align: center;\n    z-index: 1;\n    backdrop-filter: blur(4px);\n}\n.logo {\n    display: flex;\n    gap: 10px;\n    align-items: center;\n    font-weight: 900;\n    font-size: 1.2rem;\n}\nnav {\n    ul {\n        display: flex;\n        flex-wrap: wrap;\n        gap: 10px;\n\n        li {\n            flex: 1;\n            list-style: none;\n        }\n    }\n    button {\n        padding: 10px 20px;\n        width: 100%;\n        color: white;\n        background: none;\n        border: none;\n        transition: 1s all;\n        font-weight: 600;\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        overflow: hidden;\n        cursor: pointer;\n\n        &::after {\n            content: '';\n            background-color: white;\n            position: absolute;\n            bottom: 0;\n            right: 100%;\n            width: 100%;\n            height: 2px;\n            transition: 0.3s ease;\n        }\n\n        &:hover::after {\n            right: 0;\n        }\n    }\n}\n\n.tabs {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    background-color: rgba($color: #000000, $alpha: 0.4);\n}\n\n%tab-container {\n    color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    gap: 30px;\n    max-width: 900px;\n    padding: 10px;\n    backdrop-filter: blur(4px);\n\n    h2 {\n        text-transform: uppercase;\n    }\n\n    @media (min-width: 640px) {\n        padding: 20px 50px;\n    }\n  }\n\n#home {\n    @extend %tab-container;\n    // background-color: rgba($color: #000000, $alpha: 0.4);\n}\n#menu {\n    @extend %tab-container;\n}\n#contact {\n    @extend %tab-container;\n}\n.foods {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 16px;\n    @media (min-width: 768px) {\n        grid-template-columns: 1fr 1fr;\n        gap: 40px;\n    }\n}\n.category {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    h4 {\n        font-size: 2rem;\n        font-weight: 900;\n        margin-top: 15px;\n        font-style: italic;\n        text-transform: uppercase;\n    }\n}\n.products {\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n    h5 {\n        font-size: 1.2rem;\n        letter-spacing: 2px;\n        text-transform: uppercase;\n    }\n    i {\n        cursor: pointer;\n     } \n}\n.product {\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    // gap: 20px;\n    .name-price {\n        flex: 1;\n        display: flex;\n        justify-content: space-between;\n        gap: 20px;\n    }\n    \n    h6, p {\n        padding-left: 10px;\n        font-weight: 100;\n        font-size: 1rem;\n        word-spacing: 5px;\n    }\n    p {\n        margin-bottom: 20px;\n    }\n}\n\n.info {\n    p {\n        margin: 20px 0;\n    }\n\n    &.center {\n        text-align: center;\n        .social {\n            justify-content: center;\n        }\n    }\n    &.end {\n        margin-top: auto;\n    }\n\n    button {\n        padding: 5px 10px;\n        background: none;\n        color: white;\n        font-weight: 600;\n        border: none;\n        border-bottom: 2px solid white;\n        cursor: pointer;\n        transition: 0.3s all;\n        border-top-left-radius: 10px;\n        border-top-right-radius: 10px;\n        &:hover {\n            background-color: rgba($color: #ffffff, $alpha: 0.4);\n        }\n    }\n\n    .social {\n        display: flex;\n        align-items: center;\n        flex-wrap: wrap;\n        gap: 10px;\n        margin: 10px 0;\n    \n        a {\n            color: inherit;\n        }\n    \n        i {\n            font-size: 1.1rem;\n        }\n    }\n}\n\n\n// @media (min-width: 640px) {\n//     #home {\n//         padding: 20px 50px;\n//     }\n// }"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const contact = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('div');
    contact.id = 'contact';
    
    const title = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('h2');
    title.textContent = 'contact';
    
    const contactContent = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('div');
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addClass)(contactContent, 'info');
    
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addChilds)(contactContent,
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(`Have questions, suggestions, or just want to say hello? We're here to help! Feel free to reach out to our dedicated support team using the contact information below:`),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createSocial)('fa-phone', 'Phone:', '+1-123-456-7890'),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createSocial)('fa-envelope', 'Email:', 'pho_restaurant@example.com','#'),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(`Our friendly team is available to assist you from Monday to Friday, 13:00 PM to 22:00 PM (GMT). We strive to respond to all inquiries within 24 hours.`),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(`You can also connect with us on social media:`),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createSocial)('fa-square-facebook', '', 'Pho Restaurant','#'),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createSocial)('fa-instagram', '', '@pho_restaurant','#'),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(`We value your feedback and are committed to providing the best experience possible. Your input helps us improve and serve you better.`),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(`Don't hesitate to get in touch. We're looking forward to hearing from you!`),
        );
    
    
    
    
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addChilds)(contact, title, contactContent);
    return contact;
}

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


const header = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('header');

const divLogo = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('div')
const icon = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('i')
;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.addClass)(divLogo, 'logo');
(0,_helper__WEBPACK_IMPORTED_MODULE_0__.addClass)(icon, 'fa-solid','fa-bowl-food');

(0,_helper__WEBPACK_IMPORTED_MODULE_0__.addChilds)(divLogo, icon, document.createTextNode('Pho Restaurant'))

const nav = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('nav');
const ul = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('ul');

for(let i = 1; i <= 3; i++) {
    const li = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('li');
    const button = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('button');
    if(i === 1) {
        button.textContent = 'Home';
        button.id = 'homeLink';
    } else if (i === 2) {
        button.textContent = 'Menu';
        button.id = 'menuLink';
    } else {
        button.textContent = 'Contact';
        button.id = 'contactLink';
    }
    li.appendChild(button);
    ul.appendChild(li);
}
nav.appendChild(ul);

(0,_helper__WEBPACK_IMPORTED_MODULE_0__.addChilds)(header, divLogo, nav);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addChilds: () => (/* binding */ addChilds),
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   createGeneralCategory: () => (/* binding */ createGeneralCategory),
/* harmony export */   createParagraph: () => (/* binding */ createParagraph),
/* harmony export */   createProduct: () => (/* binding */ createProduct),
/* harmony export */   createProductDescription: () => (/* binding */ createProductDescription),
/* harmony export */   createProductsCategory: () => (/* binding */ createProductsCategory),
/* harmony export */   createSocial: () => (/* binding */ createSocial)
/* harmony export */ });

function create(name){
    return document.createElement(name);   
}

function addClass(element, ...classes) {
    for(let cssClass of classes) {
        if(cssClass === '') continue;
        element.classList.add(cssClass);
    }
}

function addChilds(element, ...childs) {
    for(let child of childs) {
        element.appendChild(child);
    }
}

function createGeneralCategory(name) {
    const div = create('div');
    const title = create('h4');
    addClass(div, 'category');
    title.textContent = name;
    div.appendChild(title);
    return div
}

function createProductsCategory(name = null, photoId = false) {
    const div = create('div');
    addClass(div, 'products');
    if(name !== null || name !== '') {
        const title = create('h5');
        title.textContent = name;
        div.appendChild(title);
    }
    return div

}

function createProduct(name, price, desc = null, photoId = false) {
    const div = create('div');
    const namePrice = create('div');
    const title = desc === null ? create('h6') : create('h5');
    const priceSpan = create('span');
    addClass(div, 'product');
    addClass(namePrice, 'name-price');
    title.textContent = name;
    priceSpan.textContent = price;

    addChilds(namePrice, title, priceSpan);
    div.appendChild(namePrice);

    if(desc !== null) {
        const description = create('p');
        description.textContent = desc;
        div.appendChild(description);
    }
    return div;
}
function createProductDescription(desc) {
    const div = create('div');
    addClass(div, 'product');
    const description = create('p');
    description.textContent = desc;
    div.appendChild(description);
    return div;
}

function createSocial(iconName, name, data, url = null) {
    const social = create('div');
    const icon = create('i');
    const spanName = create('span');
    const spanData = create('span');
    addClass(social, 'social');
    addClass(icon, 'fa-solid', iconName.includes('facebook') || iconName.includes('instagram') || iconName.includes('git') ? 'fa-brands' : '', iconName);
    addClass(spanName, 'social-name');
    addClass(spanData, 'social-data');
    spanName.textContent = name;

    if(url === null) {
        spanData.textContent = data;
    } else {
        const a = create('a');
        a.href = url;
        a.textContent = data;
        spanData.appendChild(a);
    }
    addChilds(social, icon, spanName, spanData);
    return social;
}
function createParagraph(text) {
    const p = create('p');
    p.textContent = text;
    return p;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const home = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('div');
    home.id = 'home';
    
    const title = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('h2');
    title.textContent = 'home';
    
    const homeContent = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('div');
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addClass)(homeContent, 'info', 'center');

    const button = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('button');
    button.id = "menuLinkBtn";
    button.textContent = "Go to menu";
    
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addChilds)(homeContent,
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(`Welcome to Pho. Indulge in a Culinary Journey!`),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(`At Pho, we invite you to experience a world of exquisite flavors and unforgettable dining. Step into a warm and inviting ambiance where every dish tells a story and every meal becomes a cherished memory.`),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(`Discover a diverse and mouthwatering menu that celebrates the finest ingredients and culinary traditions. From signature dishes prepared by our skilled chefs to seasonal specials that reflect the essence of each season, our menu is a celebration of culinary craftsmanship.`),
        button
    );

    //Credits
    const titleCredits = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('h2');
    titleCredits.textContent = 'credits';
    const creditsContent = (0,_helper__WEBPACK_IMPORTED_MODULE_0__.create)('div');
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addClass)(creditsContent, 'info', 'center', 'end');
    (0,_helper__WEBPACK_IMPORTED_MODULE_0__.addChilds)(creditsContent,
        titleCredits,
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createSocial)('', 'Home Image:', 'Photo by Freepik', 'https://www.freepik.es/foto-gratis/fideos-planos-laicos-arreglo-tazon_11741074.htm#query=ramen&position=15&from_view=search&track=sph'),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createSocial)('', 'Menu Image:', 'Photo by Freepik', 'https://www.freepik.es/foto-gratis/rollos-sushi-espacio-copia_9489872.htm#query=japanese%20food&position=7&from_view=search&track=ais'),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createSocial)('', 'Contact Image:', 'Photo by stockking in Freepik', 'https://www.freepik.es/foto-gratis/vista-lateral-mezclar-rollos-sushi-bandeja-jengibre-wasabi_9521218.htm#query=japanese%20food&position=12&from_view=search&track=ais'),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createSocial)('', 'Menu by:', 'SSAM', 'https://drive.google.com/drive/folders/1vISyn5Xq2av_ngiBS__YoPOPhucu81G7'),
        (0,_helper__WEBPACK_IMPORTED_MODULE_0__.createSocial)('fa-github', 'Created by:', 'jonhatanh', 'https://github.com/jonhatanh')
        )


    
    ;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.addChilds)(home, title, homeContent, creditsContent);
    return home;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _foods_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foods.json */ "./src/foods.json");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const menu = _helper__WEBPACK_IMPORTED_MODULE_0__.create('div');
    menu.id = 'menu';

    const title = _helper__WEBPACK_IMPORTED_MODULE_0__.create('h2');
    title.textContent = 'menu';

    const foods = _helper__WEBPACK_IMPORTED_MODULE_0__.create('div');
    _helper__WEBPACK_IMPORTED_MODULE_0__.addClass(foods, 'foods');

    for (let categoryName in _foods_json__WEBPACK_IMPORTED_MODULE_1__) {
        const category = _helper__WEBPACK_IMPORTED_MODULE_0__.createGeneralCategory(categoryName);
        for (let subCategoryName in _foods_json__WEBPACK_IMPORTED_MODULE_1__[categoryName]) {
            const subCategory = _helper__WEBPACK_IMPORTED_MODULE_0__.createProductsCategory(subCategoryName);
            for (let product of _foods_json__WEBPACK_IMPORTED_MODULE_1__[categoryName][subCategoryName]) {
                if(product.name === undefined) {
                    subCategory.appendChild(
                        _helper__WEBPACK_IMPORTED_MODULE_0__.createProductDescription(product.description)
                    );
                    continue;
                }
                subCategory.appendChild(
                    _helper__WEBPACK_IMPORTED_MODULE_0__.createProduct(
                        product.name,
                        product.price,
                        product.description
                    )
                );
            }
            category.appendChild(subCategory);
        }
        foods.appendChild(category);
    }


    _helper__WEBPACK_IMPORTED_MODULE_0__.addChilds(menu, title, foods);
    return menu;
}

/***/ }),

/***/ "./src/fonts/Nunito_variable.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Nunito_variable.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a3eef3e0a61b7eb3eda.ttf";

/***/ }),

/***/ "./src/img/ramen-min.jpg":
/*!*******************************!*\
  !*** ./src/img/ramen-min.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b586c5c8d4ca242dd562.jpg";

/***/ }),

/***/ "./src/img/sushi-contact-min.jpg":
/*!***************************************!*\
  !*** ./src/img/sushi-contact-min.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8201cb18efb3499ad01f.jpg";

/***/ }),

/***/ "./src/img/sushi-menu-min.jpg":
/*!************************************!*\
  !*** ./src/img/sushi-menu-min.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f18d75edf1eedac5f8e4.jpg";

/***/ }),

/***/ "./src/foods.json":
/*!************************!*\
  !*** ./src/foods.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"starters":{"":[{"name":"mandu","price":120,"description":"Four beef-stuffed empanadas, noodles and chives  on a bed of mashed sweet potatoes"},{"name":"fried chicken","price":130,"description":"Fried chicken glazed in our korean sweet chili sauce"},{"name":"bao buns","price":95,"description":"Steamed bread stuffed with pickled cucumber, pork belly and our korean sweet chilli sauce"},{"name":"chili shrimp","price":125,"description":"Fried shrimp served with our delicious korean sweet chili sauce"},{"name":"pajeon","price":130,"description":"Korean crepe made of  shrimp, squid onion, chives and carrots"}],"Extras":[{"name":"Octopus","price":120},{"name":"Protein","price":60},{"name":"Kimchi","price":30},{"name":"Egg","price":20},{"name":"Rice","price":20}]},"specialties":{"ramyeon":[{"description":"Homemade wheat pasta in a chili broth and vegetables. Proteins to choose from:"},{"name":"Shrimp","price":225},{"name":"Chicken Miso","price":230},{"name":"Pork Kimchi","price":210},{"name":"Tofu Miso","price":205},{"name":"Tofu Kimchi","price":205}],"bibim ramen":[{"description":"Homemade wheat chili pasta sautéed with vegetables and gochujang sauce"},{"name":"Shrimp","price":230},{"name":"Beef","price":220},{"name":"Chicken","price":220},{"name":"Yeyuk","price":220},{"name":"Bacon","price":210},{"name":"Tofu","price":210},{"name":"Octopus","price":280}],"":[{"name":"bibimbap salmon","price":280,"description":"Rice with salad, algae ,roe fish and fresh salmon served with soy sauce, korean chilli flakes and wasabi in a stone bowl"},{"name":"bibimbap","price":220,"description":"Rice and vegetables, beef, egg cooked at low temperature, with gochujang sauce and served in a stone bowl. We recommend mixing all the ingredients"},{"name":"BULGOGI PASTA","price":220,"description":"Sliced beef marinated in soy sauce and served with potato starch noodles, mushrooms onion and rice on the side"},{"name":"TOFU KIMCHI YEYUK","price":220,"description":"Pork marinated in Korean chili paste Sautéed with onion, tofu and kimchi Served with rice and lettuce to prepare the traditional SSAM wraps"},{"name":"BIBIM TOCINO","price":220,"description":"Rice with sliced pork meat marinated with korean chili paste, sautéed with chives and cheese au gratin served in a stone bowl"}]},"beverages":{"drinks":[{"name":"Lemonade w/ Maracuya (450 ml)","price":60},{"name":"Lemonade w/ Raspberry (450 ml)","price":230},{"name":"Lemonade w/ Ginger (450 ml)","price":55},{"name":"Lemonade w/ Matcha (450 ml)","price":55},{"name":"Grape Juice (238 ml)","price":60}],"hot drinks":[{"name":"Ginger (300 ml)","price":60},{"name":"Ginseng with honey (300 ml)","price":230},{"name":"Green Tea with brown rice (300 ml)","price":55}],"coffee":[{"name":"Espresso (50 ml)","price":50},{"name":"American (110 ml)","price":50},{"name":"Affogato (100 ml)","price":85},{"name":"Capuccino (110 ml)","price":80},{"name":"Latte (110 ml)","price":80}],"others":[{"name":"Mango Juice (354 ml)","price":50},{"name":"Coke/Diet Coke (330 ml)","price":55},{"name":"Sparkling Water (355 ml)","price":45},{"name":"Still Water (355 ml)","price":40}]},"desserts":{"":[{"name":"soft ice cream","price":75,"description":"Homemade soft serve ice cream"},{"name":"MATCHA POPSICLE","price":75,"description":"Chocolate coated"},{"name":"S\'MORE","price":75,"description":"Matcha-filled marshmellow"},{"name":"FRIED ICE-CREAM","price":115,"description":"Vanilla flavored"},{"name":"LAVA CAKE","price":140,"description":"Cake and ice cream"},{"name":"Bingsu","price":115,"description":"Shaved ice dessert with sweet toppings, taro flavored"}]}}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helper */ "./src/helper.js");
/* harmony import */ var _img_ramen_min_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/ramen-min.jpg */ "./src/img/ramen-min.jpg");
/* harmony import */ var _img_sushi_menu_min_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/sushi-menu-min.jpg */ "./src/img/sushi-menu-min.jpg");
/* harmony import */ var _img_sushi_contact_min_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/sushi-contact-min.jpg */ "./src/img/sushi-contact-min.jpg");







//img





const content = document.getElementById('content');
const tabs = (0,_helper__WEBPACK_IMPORTED_MODULE_5__.create)('div');
tabs.id = 'tabs';
(0,_helper__WEBPACK_IMPORTED_MODULE_5__.addClass)(tabs, 'tabs');


tabs.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
(0,_helper__WEBPACK_IMPORTED_MODULE_5__.addChilds)(content, _header__WEBPACK_IMPORTED_MODULE_1__["default"], tabs);


document.getElementById('homeLink').addEventListener('click', changeTab);
document.getElementById('menuLink').addEventListener('click', changeTab);
document.getElementById('contactLink').addEventListener('click', changeTab);
document.getElementById('menuLinkBtn').addEventListener('click', changeTab);

function changeTab(e) {
    const id = e.target.id;
    const currentTab = getCurrentTab();
    if (id === 'homeLink' && currentTab !== 'home') {
        tabs.replaceChildren((0,_home__WEBPACK_IMPORTED_MODULE_2__["default"])());
        content.style.backgroundImage = `url(${_img_ramen_min_jpg__WEBPACK_IMPORTED_MODULE_6__})`;
        content.style.backgroundPosition = `center`;
        document.getElementById('menuLinkBtn').addEventListener('click', changeTab);
    } else if ((id === 'menuLink' && currentTab !== 'menu') || id === 'menuLinkBtn') {
        tabs.replaceChildren((0,_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
        content.style.backgroundImage = `url(${_img_sushi_menu_min_jpg__WEBPACK_IMPORTED_MODULE_7__})`;
        content.style.backgroundPosition = `top right 20%`;
    } else if (id === 'contactLink' && currentTab !== 'contact') {
        tabs.replaceChildren((0,_contact__WEBPACK_IMPORTED_MODULE_4__["default"])());
        content.style.backgroundImage = `url(${_img_sushi_contact_min_jpg__WEBPACK_IMPORTED_MODULE_8__})`;
        content.style.backgroundPosition = `center`;
    }
}

function getCurrentTab() {
    return tabs.firstChild.id;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1JQUE4QztBQUMxRiw0Q0FBNEMsbUhBQXNDO0FBQ2xGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxV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Q0FBQztBQUN6RDtBQUNBO0FBQ0EsTUFBTTtBQUNOLDZCQUE2QixpREFBVTtBQUN2QywrQ0FBK0Msb0RBQVMsQ0FBQztBQUN6RDtBQUNBLE1BQU07QUFDTiw2QkFBNkIsb0RBQWE7QUFDMUMsK0NBQStDLHVEQUFZLENBQUM7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvTnVuaXRvX3ZhcmlhYmxlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3JhbWVuLW1pbi5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTnVuaXRvXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4jY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgdHJhbnNpdGlvbjogMC41cyBiYWNrZ3JvdW5kLWltYWdlO1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbm5hdiB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xufVxubmF2IHVsIGxpIHtcbiAgZmxleDogMTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbm5hdiBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdHJhbnNpdGlvbjogMXMgYWxsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm5hdiBidXR0b246OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5uYXYgYnV0dG9uOmhvdmVyOjphZnRlciB7XG4gIHJpZ2h0OiAwO1xufVxuXG4udGFicyB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbiNjb250YWN0LCAjbWVudSwgI2hvbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMzBweDtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XG59XG4jY29udGFjdCBoMiwgI21lbnUgaDIsICNob21lIGgyIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xuICAjY29udGFjdCwgI21lbnUsICNob21lIHtcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XG4gIH1cbn1cblxuLmZvb2RzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMTZweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZm9vZHMge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDQwcHg7XG4gIH1cbn1cblxuLmNhdGVnb3J5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xufVxuLmNhdGVnb3J5IGg0IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogOTAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5wcm9kdWN0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogM3B4O1xufVxuLnByb2R1Y3RzIGg1IHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucHJvZHVjdHMgaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xufVxuLnByb2R1Y3QgLm5hbWUtcHJpY2Uge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMjBweDtcbn1cbi5wcm9kdWN0IGg2LCAucHJvZHVjdCBwIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIHdvcmQtc3BhY2luZzogNXB4O1xufVxuLnByb2R1Y3QgcCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pbmZvIHAge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5pbmZvLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbmZvLmNlbnRlciAuc29jaWFsIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW5mby5lbmQge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuLmluZm8gYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuLmluZm8gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuLmluZm8gLnNvY2lhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5pbmZvIC5zb2NpYWwgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuLmluZm8gLnNvY2lhbCBpIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNFLGlDQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5REFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFGSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREo7O0FBSUk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFEUjtBQUdRO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0FBRFo7QUFJSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBSVE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUZaO0FBS1E7RUFDSSxRQUFBO0FBSFo7O0FBUUE7RUFDSSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7QUFMSjs7QUFRQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FBTEo7QUFPSTtFQUNJLHlCQUFBO0FBTFI7QUFRSTtFQWZKO0lBZ0JRLGtCQUFBO0VBTE47QUFDRjs7QUFrQkE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxTQUFBO0FBZko7QUFnQkk7RUFKSjtJQUtRLDhCQUFBO0lBQ0EsU0FBQTtFQWJOO0FBQ0Y7O0FBZUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBWko7QUFhSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVhSOztBQWNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQVhKO0FBWUk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFWUjtBQVlJO0VBQ0ksZUFBQTtBQVZSOztBQWFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFWSjtBQVlJO0VBQ0ksT0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7QUFWUjtBQWFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVhSO0FBYUk7RUFDSSxtQkFBQTtBQVhSOztBQWdCSTtFQUNJLGNBQUE7QUFiUjtBQWdCSTtFQUNJLGtCQUFBO0FBZFI7QUFlUTtFQUNJLHVCQUFBO0FBYlo7QUFnQkk7RUFDSSxnQkFBQTtBQWRSO0FBaUJJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFmUjtBQWdCUTtFQUNJLDBDQUFBO0FBZFo7QUFrQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFoQlI7QUFrQlE7RUFDSSxjQUFBO0FBaEJaO0FBbUJRO0VBQ0ksaUJBQUE7QUFqQlpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvTnVuaXRvX3ZhcmlhYmxlLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiRib2R5LWNvbG9yOiByZWQ7XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9yYW1lbi1taW4uanBnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuNXMgYmFja2dyb3VuZC1pbWFnZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC40KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxufVxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxubmF2IHtcXG4gICAgdWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGdhcDogMTBweDtcXG5cXG4gICAgICAgIGxpIHtcXG4gICAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIHRyYW5zaXRpb246IDFzIGFsbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgJjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi50YWJzIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNCk7XFxufVxcblxcbiV0YWItY29udGFpbmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIG1heC13aWR0aDogOTAwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcblxcbiAgICBoMiB7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB9XFxuXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcbiAgICAgICAgcGFkZGluZzogMjBweCA1MHB4O1xcbiAgICB9XFxuICB9XFxuXFxuI2hvbWUge1xcbiAgICBAZXh0ZW5kICV0YWItY29udGFpbmVyO1xcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjQpO1xcbn1cXG4jbWVudSB7XFxuICAgIEBleHRlbmQgJXRhYi1jb250YWluZXI7XFxufVxcbiNjb250YWN0IHtcXG4gICAgQGV4dGVuZCAldGFiLWNvbnRhaW5lcjtcXG59XFxuLmZvb2RzIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdhcDogMTZweDtcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBnYXA6IDQwcHg7XFxuICAgIH1cXG59XFxuLmNhdGVnb3J5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBoNCB7XFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIH1cXG59XFxuLnByb2R1Y3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIGg1IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIH1cXG4gICAgaSB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICB9IFxcbn1cXG4ucHJvZHVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIC8vIGdhcDogMjBweDtcXG4gICAgLm5hbWUtcHJpY2Uge1xcbiAgICAgICAgZmxleDogMTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDIwcHg7XFxuICAgIH1cXG4gICAgXFxuICAgIGg2LCBwIHtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICB3b3JkLXNwYWNpbmc6IDVweDtcXG4gICAgfVxcbiAgICBwIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIH1cXG59XFxuXFxuLmluZm8ge1xcbiAgICBwIHtcXG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICB9XFxuXFxuICAgICYuY2VudGVyIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC5zb2NpYWwge1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICYuZW5kIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IDAuNCk7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnNvY2lhbCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICBcXG4gICAgICAgIGEge1xcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgICAgfVxcbiAgICBcXG4gICAgICAgIGkge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcbi8vIEBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcbi8vICAgICAjaG9tZSB7XFxuLy8gICAgICAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuLy8gICAgIH1cXG4vLyB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtjcmVhdGUsIGFkZENsYXNzLCBhZGRDaGlsZHMsIGNyZWF0ZVNvY2lhbCwgY3JlYXRlUGFyYWdyYXBofSBmcm9tICcuL2hlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gY3JlYXRlKCdkaXYnKTtcbiAgICBjb250YWN0LmlkID0gJ2NvbnRhY3QnO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlKCdoMicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ2NvbnRhY3QnO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gY3JlYXRlKCdkaXYnKTtcbiAgICBhZGRDbGFzcyhjb250YWN0Q29udGVudCwgJ2luZm8nKTtcbiAgICBcbiAgICBhZGRDaGlsZHMoY29udGFjdENvbnRlbnQsXG4gICAgICAgIGNyZWF0ZVBhcmFncmFwaChgSGF2ZSBxdWVzdGlvbnMsIHN1Z2dlc3Rpb25zLCBvciBqdXN0IHdhbnQgdG8gc2F5IGhlbGxvPyBXZSdyZSBoZXJlIHRvIGhlbHAhIEZlZWwgZnJlZSB0byByZWFjaCBvdXQgdG8gb3VyIGRlZGljYXRlZCBzdXBwb3J0IHRlYW0gdXNpbmcgdGhlIGNvbnRhY3QgaW5mb3JtYXRpb24gYmVsb3c6YCksXG4gICAgICAgIGNyZWF0ZVNvY2lhbCgnZmEtcGhvbmUnLCAnUGhvbmU6JywgJysxLTEyMy00NTYtNzg5MCcpLFxuICAgICAgICBjcmVhdGVTb2NpYWwoJ2ZhLWVudmVsb3BlJywgJ0VtYWlsOicsICdwaG9fcmVzdGF1cmFudEBleGFtcGxlLmNvbScsJyMnKSxcbiAgICAgICAgY3JlYXRlUGFyYWdyYXBoKGBPdXIgZnJpZW5kbHkgdGVhbSBpcyBhdmFpbGFibGUgdG8gYXNzaXN0IHlvdSBmcm9tIE1vbmRheSB0byBGcmlkYXksIDEzOjAwIFBNIHRvIDIyOjAwIFBNIChHTVQpLiBXZSBzdHJpdmUgdG8gcmVzcG9uZCB0byBhbGwgaW5xdWlyaWVzIHdpdGhpbiAyNCBob3Vycy5gKSxcbiAgICAgICAgY3JlYXRlUGFyYWdyYXBoKGBZb3UgY2FuIGFsc28gY29ubmVjdCB3aXRoIHVzIG9uIHNvY2lhbCBtZWRpYTpgKSxcbiAgICAgICAgY3JlYXRlU29jaWFsKCdmYS1zcXVhcmUtZmFjZWJvb2snLCAnJywgJ1BobyBSZXN0YXVyYW50JywnIycpLFxuICAgICAgICBjcmVhdGVTb2NpYWwoJ2ZhLWluc3RhZ3JhbScsICcnLCAnQHBob19yZXN0YXVyYW50JywnIycpLFxuICAgICAgICBjcmVhdGVQYXJhZ3JhcGgoYFdlIHZhbHVlIHlvdXIgZmVlZGJhY2sgYW5kIGFyZSBjb21taXR0ZWQgdG8gcHJvdmlkaW5nIHRoZSBiZXN0IGV4cGVyaWVuY2UgcG9zc2libGUuIFlvdXIgaW5wdXQgaGVscHMgdXMgaW1wcm92ZSBhbmQgc2VydmUgeW91IGJldHRlci5gKSxcbiAgICAgICAgY3JlYXRlUGFyYWdyYXBoKGBEb24ndCBoZXNpdGF0ZSB0byBnZXQgaW4gdG91Y2guIFdlJ3JlIGxvb2tpbmcgZm9yd2FyZCB0byBoZWFyaW5nIGZyb20geW91IWApLFxuICAgICAgICApO1xuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIGFkZENoaWxkcyhjb250YWN0LCB0aXRsZSwgY29udGFjdENvbnRlbnQpO1xuICAgIHJldHVybiBjb250YWN0O1xufSIsImltcG9ydCB7Y3JlYXRlLCBhZGRDbGFzcywgYWRkQ2hpbGRzfSBmcm9tICcuL2hlbHBlcidcblxuY29uc3QgaGVhZGVyID0gY3JlYXRlKCdoZWFkZXInKTtcblxuY29uc3QgZGl2TG9nbyA9IGNyZWF0ZSgnZGl2JylcbmNvbnN0IGljb24gPSBjcmVhdGUoJ2knKVxuYWRkQ2xhc3MoZGl2TG9nbywgJ2xvZ28nKTtcbmFkZENsYXNzKGljb24sICdmYS1zb2xpZCcsJ2ZhLWJvd2wtZm9vZCcpO1xuXG5hZGRDaGlsZHMoZGl2TG9nbywgaWNvbiwgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ1BobyBSZXN0YXVyYW50JykpXG5cbmNvbnN0IG5hdiA9IGNyZWF0ZSgnbmF2Jyk7XG5jb25zdCB1bCA9IGNyZWF0ZSgndWwnKTtcblxuZm9yKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICBjb25zdCBsaSA9IGNyZWF0ZSgnbGknKTtcbiAgICBjb25zdCBidXR0b24gPSBjcmVhdGUoJ2J1dHRvbicpO1xuICAgIGlmKGkgPT09IDEpIHtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgICAgICBidXR0b24uaWQgPSAnaG9tZUxpbmsnO1xuICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgICAgIGJ1dHRvbi5pZCA9ICdtZW51TGluayc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgICAgICBidXR0b24uaWQgPSAnY29udGFjdExpbmsnO1xuICAgIH1cbiAgICBsaS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbn1cbm5hdi5hcHBlbmRDaGlsZCh1bCk7XG5cbmFkZENoaWxkcyhoZWFkZXIsIGRpdkxvZ28sIG5hdik7XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjsiLCJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUobmFtZSl7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7ICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCAuLi5jbGFzc2VzKSB7XG4gICAgZm9yKGxldCBjc3NDbGFzcyBvZiBjbGFzc2VzKSB7XG4gICAgICAgIGlmKGNzc0NsYXNzID09PSAnJykgY29udGludWU7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjc3NDbGFzcyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2hpbGRzKGVsZW1lbnQsIC4uLmNoaWxkcykge1xuICAgIGZvcihsZXQgY2hpbGQgb2YgY2hpbGRzKSB7XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdlbmVyYWxDYXRlZ29yeShuYW1lKSB7XG4gICAgY29uc3QgZGl2ID0gY3JlYXRlKCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZSgnaDQnKTtcbiAgICBhZGRDbGFzcyhkaXYsICdjYXRlZ29yeScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHJldHVybiBkaXZcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3RzQ2F0ZWdvcnkobmFtZSA9IG51bGwsIHBob3RvSWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gICAgYWRkQ2xhc3MoZGl2LCAncHJvZHVjdHMnKTtcbiAgICBpZihuYW1lICE9PSBudWxsIHx8IG5hbWUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gY3JlYXRlKCdoNScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgfVxuICAgIHJldHVybiBkaXZcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZHVjdChuYW1lLCBwcmljZSwgZGVzYyA9IG51bGwsIHBob3RvSWQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gICAgY29uc3QgbmFtZVByaWNlID0gY3JlYXRlKCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRlc2MgPT09IG51bGwgPyBjcmVhdGUoJ2g2JykgOiBjcmVhdGUoJ2g1Jyk7XG4gICAgY29uc3QgcHJpY2VTcGFuID0gY3JlYXRlKCdzcGFuJyk7XG4gICAgYWRkQ2xhc3MoZGl2LCAncHJvZHVjdCcpO1xuICAgIGFkZENsYXNzKG5hbWVQcmljZSwgJ25hbWUtcHJpY2UnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgcHJpY2VTcGFuLnRleHRDb250ZW50ID0gcHJpY2U7XG5cbiAgICBhZGRDaGlsZHMobmFtZVByaWNlLCB0aXRsZSwgcHJpY2VTcGFuKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQobmFtZVByaWNlKTtcblxuICAgIGlmKGRlc2MgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGUoJ3AnKTtcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gZGl2O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2R1Y3REZXNjcmlwdGlvbihkZXNjKSB7XG4gICAgY29uc3QgZGl2ID0gY3JlYXRlKCdkaXYnKTtcbiAgICBhZGRDbGFzcyhkaXYsICdwcm9kdWN0Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGUoJ3AnKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2M7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU29jaWFsKGljb25OYW1lLCBuYW1lLCBkYXRhLCB1cmwgPSBudWxsKSB7XG4gICAgY29uc3Qgc29jaWFsID0gY3JlYXRlKCdkaXYnKTtcbiAgICBjb25zdCBpY29uID0gY3JlYXRlKCdpJyk7XG4gICAgY29uc3Qgc3Bhbk5hbWUgPSBjcmVhdGUoJ3NwYW4nKTtcbiAgICBjb25zdCBzcGFuRGF0YSA9IGNyZWF0ZSgnc3BhbicpO1xuICAgIGFkZENsYXNzKHNvY2lhbCwgJ3NvY2lhbCcpO1xuICAgIGFkZENsYXNzKGljb24sICdmYS1zb2xpZCcsIGljb25OYW1lLmluY2x1ZGVzKCdmYWNlYm9vaycpIHx8IGljb25OYW1lLmluY2x1ZGVzKCdpbnN0YWdyYW0nKSB8fCBpY29uTmFtZS5pbmNsdWRlcygnZ2l0JykgPyAnZmEtYnJhbmRzJyA6ICcnLCBpY29uTmFtZSk7XG4gICAgYWRkQ2xhc3Moc3Bhbk5hbWUsICdzb2NpYWwtbmFtZScpO1xuICAgIGFkZENsYXNzKHNwYW5EYXRhLCAnc29jaWFsLWRhdGEnKTtcbiAgICBzcGFuTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBpZih1cmwgPT09IG51bGwpIHtcbiAgICAgICAgc3BhbkRhdGEudGV4dENvbnRlbnQgPSBkYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGEgPSBjcmVhdGUoJ2EnKTtcbiAgICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgICBhLnRleHRDb250ZW50ID0gZGF0YTtcbiAgICAgICAgc3BhbkRhdGEuYXBwZW5kQ2hpbGQoYSk7XG4gICAgfVxuICAgIGFkZENoaWxkcyhzb2NpYWwsIGljb24sIHNwYW5OYW1lLCBzcGFuRGF0YSk7XG4gICAgcmV0dXJuIHNvY2lhbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgodGV4dCkge1xuICAgIGNvbnN0IHAgPSBjcmVhdGUoJ3AnKTtcbiAgICBwLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gcDtcbn0iLCJpbXBvcnQge2NyZWF0ZSwgYWRkQ2xhc3MsIGFkZENoaWxkcywgY3JlYXRlUGFyYWdyYXBoLCBjcmVhdGVTb2NpYWwgfSBmcm9tICcuL2hlbHBlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaG9tZSA9IGNyZWF0ZSgnZGl2Jyk7XG4gICAgaG9tZS5pZCA9ICdob21lJztcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZSgnaDInKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdob21lJztcbiAgICBcbiAgICBjb25zdCBob21lQ29udGVudCA9IGNyZWF0ZSgnZGl2Jyk7XG4gICAgYWRkQ2xhc3MoaG9tZUNvbnRlbnQsICdpbmZvJywgJ2NlbnRlcicpO1xuXG4gICAgY29uc3QgYnV0dG9uID0gY3JlYXRlKCdidXR0b24nKTtcbiAgICBidXR0b24uaWQgPSBcIm1lbnVMaW5rQnRuXCI7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJHbyB0byBtZW51XCI7XG4gICAgXG4gICAgYWRkQ2hpbGRzKGhvbWVDb250ZW50LFxuICAgICAgICBjcmVhdGVQYXJhZ3JhcGgoYFdlbGNvbWUgdG8gUGhvLiBJbmR1bGdlIGluIGEgQ3VsaW5hcnkgSm91cm5leSFgKSxcbiAgICAgICAgY3JlYXRlUGFyYWdyYXBoKGBBdCBQaG8sIHdlIGludml0ZSB5b3UgdG8gZXhwZXJpZW5jZSBhIHdvcmxkIG9mIGV4cXVpc2l0ZSBmbGF2b3JzIGFuZCB1bmZvcmdldHRhYmxlIGRpbmluZy4gU3RlcCBpbnRvIGEgd2FybSBhbmQgaW52aXRpbmcgYW1iaWFuY2Ugd2hlcmUgZXZlcnkgZGlzaCB0ZWxscyBhIHN0b3J5IGFuZCBldmVyeSBtZWFsIGJlY29tZXMgYSBjaGVyaXNoZWQgbWVtb3J5LmApLFxuICAgICAgICBjcmVhdGVQYXJhZ3JhcGgoYERpc2NvdmVyIGEgZGl2ZXJzZSBhbmQgbW91dGh3YXRlcmluZyBtZW51IHRoYXQgY2VsZWJyYXRlcyB0aGUgZmluZXN0IGluZ3JlZGllbnRzIGFuZCBjdWxpbmFyeSB0cmFkaXRpb25zLiBGcm9tIHNpZ25hdHVyZSBkaXNoZXMgcHJlcGFyZWQgYnkgb3VyIHNraWxsZWQgY2hlZnMgdG8gc2Vhc29uYWwgc3BlY2lhbHMgdGhhdCByZWZsZWN0IHRoZSBlc3NlbmNlIG9mIGVhY2ggc2Vhc29uLCBvdXIgbWVudSBpcyBhIGNlbGVicmF0aW9uIG9mIGN1bGluYXJ5IGNyYWZ0c21hbnNoaXAuYCksXG4gICAgICAgIGJ1dHRvblxuICAgICk7XG5cbiAgICAvL0NyZWRpdHNcbiAgICBjb25zdCB0aXRsZUNyZWRpdHMgPSBjcmVhdGUoJ2gyJyk7XG4gICAgdGl0bGVDcmVkaXRzLnRleHRDb250ZW50ID0gJ2NyZWRpdHMnO1xuICAgIGNvbnN0IGNyZWRpdHNDb250ZW50ID0gY3JlYXRlKCdkaXYnKTtcbiAgICBhZGRDbGFzcyhjcmVkaXRzQ29udGVudCwgJ2luZm8nLCAnY2VudGVyJywgJ2VuZCcpO1xuICAgIGFkZENoaWxkcyhjcmVkaXRzQ29udGVudCxcbiAgICAgICAgdGl0bGVDcmVkaXRzLFxuICAgICAgICBjcmVhdGVTb2NpYWwoJycsICdIb21lIEltYWdlOicsICdQaG90byBieSBGcmVlcGlrJywgJ2h0dHBzOi8vd3d3LmZyZWVwaWsuZXMvZm90by1ncmF0aXMvZmlkZW9zLXBsYW5vcy1sYWljb3MtYXJyZWdsby10YXpvbl8xMTc0MTA3NC5odG0jcXVlcnk9cmFtZW4mcG9zaXRpb249MTUmZnJvbV92aWV3PXNlYXJjaCZ0cmFjaz1zcGgnKSxcbiAgICAgICAgY3JlYXRlU29jaWFsKCcnLCAnTWVudSBJbWFnZTonLCAnUGhvdG8gYnkgRnJlZXBpaycsICdodHRwczovL3d3dy5mcmVlcGlrLmVzL2ZvdG8tZ3JhdGlzL3JvbGxvcy1zdXNoaS1lc3BhY2lvLWNvcGlhXzk0ODk4NzIuaHRtI3F1ZXJ5PWphcGFuZXNlJTIwZm9vZCZwb3NpdGlvbj03JmZyb21fdmlldz1zZWFyY2gmdHJhY2s9YWlzJyksXG4gICAgICAgIGNyZWF0ZVNvY2lhbCgnJywgJ0NvbnRhY3QgSW1hZ2U6JywgJ1Bob3RvIGJ5IHN0b2Nra2luZyBpbiBGcmVlcGlrJywgJ2h0dHBzOi8vd3d3LmZyZWVwaWsuZXMvZm90by1ncmF0aXMvdmlzdGEtbGF0ZXJhbC1tZXpjbGFyLXJvbGxvcy1zdXNoaS1iYW5kZWphLWplbmdpYnJlLXdhc2FiaV85NTIxMjE4Lmh0bSNxdWVyeT1qYXBhbmVzZSUyMGZvb2QmcG9zaXRpb249MTImZnJvbV92aWV3PXNlYXJjaCZ0cmFjaz1haXMnKSxcbiAgICAgICAgY3JlYXRlU29jaWFsKCcnLCAnTWVudSBieTonLCAnU1NBTScsICdodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZHJpdmUvZm9sZGVycy8xdklTeW41WHEyYXZfbmdpQlNfX1lvUE9QaHVjdTgxRzcnKSxcbiAgICAgICAgY3JlYXRlU29jaWFsKCdmYS1naXRodWInLCAnQ3JlYXRlZCBieTonLCAnam9uaGF0YW5oJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9qb25oYXRhbmgnKVxuICAgICAgICApXG5cblxuICAgIFxuICAgIGFkZENoaWxkcyhob21lLCB0aXRsZSwgaG9tZUNvbnRlbnQsIGNyZWRpdHNDb250ZW50KTtcbiAgICByZXR1cm4gaG9tZTtcbn0iLCJpbXBvcnQgKiBhcyBoZWxwIGZyb20gJy4vaGVscGVyJztcbmltcG9ydCBmb29kc0RhdGEgZnJvbSAnLi9mb29kcy5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1lbnUgPSBoZWxwLmNyZWF0ZSgnZGl2Jyk7XG4gICAgbWVudS5pZCA9ICdtZW51JztcblxuICAgIGNvbnN0IHRpdGxlID0gaGVscC5jcmVhdGUoJ2gyJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnbWVudSc7XG5cbiAgICBjb25zdCBmb29kcyA9IGhlbHAuY3JlYXRlKCdkaXYnKTtcbiAgICBoZWxwLmFkZENsYXNzKGZvb2RzLCAnZm9vZHMnKTtcblxuICAgIGZvciAobGV0IGNhdGVnb3J5TmFtZSBpbiBmb29kc0RhdGEpIHtcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBoZWxwLmNyZWF0ZUdlbmVyYWxDYXRlZ29yeShjYXRlZ29yeU5hbWUpO1xuICAgICAgICBmb3IgKGxldCBzdWJDYXRlZ29yeU5hbWUgaW4gZm9vZHNEYXRhW2NhdGVnb3J5TmFtZV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YkNhdGVnb3J5ID0gaGVscC5jcmVhdGVQcm9kdWN0c0NhdGVnb3J5KHN1YkNhdGVnb3J5TmFtZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9kdWN0IG9mIGZvb2RzRGF0YVtjYXRlZ29yeU5hbWVdW3N1YkNhdGVnb3J5TmFtZV0pIHtcbiAgICAgICAgICAgICAgICBpZihwcm9kdWN0Lm5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHAuY3JlYXRlUHJvZHVjdERlc2NyaXB0aW9uKHByb2R1Y3QuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdWJDYXRlZ29yeS5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgaGVscC5jcmVhdGVQcm9kdWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5wcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZChzdWJDYXRlZ29yeSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9vZHMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgIH1cblxuXG4gICAgaGVscC5hZGRDaGlsZHMobWVudSwgdGl0bGUsIGZvb2RzKTtcbiAgICByZXR1cm4gbWVudTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCB7Y3JlYXRlLCBhZGRDaGlsZHMsIGFkZENsYXNzfSBmcm9tICcuL2hlbHBlcic7XG4vL2ltZ1xuaW1wb3J0IGhvbWVJbWFnZSBmcm9tICcuL2ltZy9yYW1lbi1taW4uanBnJ1xuaW1wb3J0IG1lbnVJbWFnZSBmcm9tICcuL2ltZy9zdXNoaS1tZW51LW1pbi5qcGcnXG5pbXBvcnQgY29udGFjdEltYWdlIGZyb20gJy4vaW1nL3N1c2hpLWNvbnRhY3QtbWluLmpwZydcblxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbmNvbnN0IHRhYnMgPSBjcmVhdGUoJ2RpdicpO1xudGFicy5pZCA9ICd0YWJzJztcbmFkZENsYXNzKHRhYnMsICd0YWJzJyk7XG5cblxudGFicy5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpO1xuYWRkQ2hpbGRzKGNvbnRlbnQsIEhlYWRlciwgdGFicyk7XG5cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWVMaW5rJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYWIpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVMaW5rJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYWIpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RMaW5rJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYWIpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVMaW5rQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYWIpO1xuXG5mdW5jdGlvbiBjaGFuZ2VUYWIoZSkge1xuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuaWQ7XG4gICAgY29uc3QgY3VycmVudFRhYiA9IGdldEN1cnJlbnRUYWIoKTtcbiAgICBpZiAoaWQgPT09ICdob21lTGluaycgJiYgY3VycmVudFRhYiAhPT0gJ2hvbWUnKSB7XG4gICAgICAgIHRhYnMucmVwbGFjZUNoaWxkcmVuKGNyZWF0ZUhvbWUoKSk7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2hvbWVJbWFnZX0pYDtcbiAgICAgICAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgY2VudGVyYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnVMaW5rQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUYWIpO1xuICAgIH0gZWxzZSBpZiAoKGlkID09PSAnbWVudUxpbmsnICYmIGN1cnJlbnRUYWIgIT09ICdtZW51JykgfHwgaWQgPT09ICdtZW51TGlua0J0bicpIHtcbiAgICAgICAgdGFicy5yZXBsYWNlQ2hpbGRyZW4oY3JlYXRlTWVudSgpKTtcbiAgICAgICAgY29udGVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bWVudUltYWdlfSlgO1xuICAgICAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGB0b3AgcmlnaHQgMjAlYDtcbiAgICB9IGVsc2UgaWYgKGlkID09PSAnY29udGFjdExpbmsnICYmIGN1cnJlbnRUYWIgIT09ICdjb250YWN0Jykge1xuICAgICAgICB0YWJzLnJlcGxhY2VDaGlsZHJlbihjcmVhdGVDb250YWN0KCkpO1xuICAgICAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtjb250YWN0SW1hZ2V9KWA7XG4gICAgICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYGNlbnRlcmA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRDdXJyZW50VGFiKCkge1xuICAgIHJldHVybiB0YWJzLmZpcnN0Q2hpbGQuaWQ7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9