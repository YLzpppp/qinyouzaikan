require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/detail/index"],{

/***/ "./src/pages/detail/index.css?modules":
/*!********************************************!*\
  !*** ./src/pages/detail/index.css?modules ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___1H6XQ","text":"text___3HkLe","header":"header___1gKiw","share":"share___2_0ns","shadow":"shadow___3euUM"};

/***/ }),

/***/ "./src/pages/detail/index.entry.js":
/*!*****************************************!*\
  !*** ./src/pages/detail/index.entry.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/detail/index.js");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/detail/index'));

/***/ }),

/***/ "./src/pages/detail/index.js":
/*!***********************************!*\
  !*** ./src/pages/detail/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/detail/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remax_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remax/runtime */ "./node_modules/remax/runtime.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store */ "./src/store/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var BUTTON_HEIGHT = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["rtx"])(50);
var VIDEO_HEIGHT = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["rtx"])(_utils__WEBPACK_IMPORTED_MODULE_6__["sh"]) - BUTTON_HEIGHT;
var RADIUS = 12;
var CARD_GAP = 18;
var PADDING = 20;
var CARD_WIDTH = _utils__WEBPACK_IMPORTED_MODULE_6__["sw"] - PADDING * 2;
var CARD_HEIGHT = CARD_WIDTH * 3 / 5;
var CARD_CONTAINER_HEIGHT = CARD_HEIGHT + CARD_GAP; //CARD_HEIGHT + CARD_GAP;

var CARD_CONTAINER_WIDTH = _utils__WEBPACK_IMPORTED_MODULE_6__["sw"];
var Index = Object(mobx_react__WEBPACK_IMPORTED_MODULE_4__["observer"])(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setvideodata = _useState2[1];

  var fetchNextVideo = function fetchNextVideo() {
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["request"])({
      url: "https://qyzs.zdw1.cn/api/video/getone",
      success: function success(res) {
        _store__WEBPACK_IMPORTED_MODULE_5__["default"].changeNextItem(res.data);
      }
    });
  };

  var videoUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    // return "http://1254284941.vod2.myqcloud.com/e591a6cavodcq1254284941/4558e53c5285890807458772963/f0.mp4"
    var _u = '';

    if (_store__WEBPACK_IMPORTED_MODULE_5__["default"].item.url != undefined) {
      _u = _store__WEBPACK_IMPORTED_MODULE_5__["default"].item.url;
    }

    return _u;
  }, [_store__WEBPACK_IMPORTED_MODULE_5__["default"].item]);
  var videoTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var _v = '';

    if (_store__WEBPACK_IMPORTED_MODULE_5__["default"].item.title != undefined) {
      _v = _store__WEBPACK_IMPORTED_MODULE_5__["default"].item.title;
    }

    return _v;
  }, [_store__WEBPACK_IMPORTED_MODULE_5__["default"].item]);
  Object(remax_runtime__WEBPACK_IMPORTED_MODULE_3__["usePageEvent"])("onShareAppMessage", function (res) {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }

    return {
      title: videoTitle
    };
  });

  var fetchList = function fetchList() {
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["request"])({
      url: "https://qyzs.zdw1.cn/api/video/more",
      data: {},
      success: function success(res) {
        var list = _toConsumableArray(res.data);

        setvideodata(list);
      },
      fail: function fail(err) {
        console.log("列表数据获取失败", err);
      }
    });
  };

  var updateNextItem = function updateNextItem() {
    if (_store__WEBPACK_IMPORTED_MODULE_5__["default"].nextItem.id != undefined) {
      _store__WEBPACK_IMPORTED_MODULE_5__["default"].changeItem(_store__WEBPACK_IMPORTED_MODULE_5__["default"].nextItem);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchList();
    fetchNextVideo();
  }, []);
  Object(remax_runtime__WEBPACK_IMPORTED_MODULE_3__["usePageEvent"])("onUnload", function () {
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])({
      url: "/pages/detail/index"
    });
    updateNextItem();
  });

  var onRecommendVideoTap = function onRecommendVideoTap(item) {
    _store__WEBPACK_IMPORTED_MODULE_5__["default"].changeItem(item);
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["pageScrollTo"])({
      scrollTop: 0
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Video"], {
    src: videoUrl,
    style: {
      height: VIDEO_HEIGHT,
      width: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["rtx"])(_utils__WEBPACK_IMPORTED_MODULE_6__["sw"]),
      margin: 0,
      padding: 0
    },
    controls: true,
    autoPauseIfNavigate: true,
    autoPauseIfOpenNative: true,
    autoplay: true,
    loop: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      display: "flex",
      flexDirection: "row",
      height: BUTTON_HEIGHT,
      background: "#000",
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    "open-type": "share",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pix"])(_utils__WEBPACK_IMPORTED_MODULE_6__["sw"] * 0.43),
      height: BUTTON_HEIGHT,
      background: "#008102"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "http://cos.haxibiao.com/images/5ff7f1a8d7efc.png",
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.share,
    alt: "share"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.text
  }, "\u53D1\u9001\u7ED9\u597D\u53CB")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    "open-type": "share",
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["pix"])(_utils__WEBPACK_IMPORTED_MODULE_6__["sw"] * 0.43),
      height: BUTTON_HEIGHT,
      background: "#FB0102"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/share.png",
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.share,
    alt: "share"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.text
  }, "\u5206\u4EAB\u5230\u7FA4"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      background: "#fff",
      padding: "10px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: {
      fontWeight: "bold",
      fontSize: "15pt"
    }
  }, videoTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      background: "#fff",
      display: "flex",
      alignItems: "start"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    style: {
      fontWeight: "bold",
      fontSize: "40px",
      color: "#008102",
      marginLeft: "15px"
    }
  }, "\u70ED\u95E8\u63A8\u8350")), data.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      key: index,
      style: {
        display: 'flex',
        flex: 1,
        width: '100%',
        height: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["rtx"])(CARD_CONTAINER_HEIGHT)
      },
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.shadow,
      style: {
        display: 'inline-block',
        position: 'relative',
        width: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["rtx"])(CARD_WIDTH),
        height: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["rtx"])(CARD_HEIGHT),
        backgroundColor: 'white',
        borderRadius: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["rtx"])(RADIUS),
        marginBottom: CARD_GAP,
        marginLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["rtx"])(PADDING),
        marginRight: Object(_utils__WEBPACK_IMPORTED_MODULE_6__["rtx"])(PADDING)
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      style: {
        position: 'absolute',
        zIndex: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        borderRadius: RADIUS
      },
      src: item.cover
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      style: {
        position: 'absolute',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        height: '100%',
        // backgroundColor:'#ff7799',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      style: {
        display: 'flex',
        flex: 1,
        width: '100%' // backgroundColor: '#FF0000'

      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      onTap: function onTap() {
        return onRecommendVideoTap(item);
      },
      style: {
        display: 'flex',
        flex: 1.8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center' // backgroundColor: '#FFff00'

      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/images/play.png",
      style: {
        height: 120,
        width: 120
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      style: {
        display: 'flex',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000055',
        borderBottomRightRadius: RADIUS,
        borderBottomLeftRadius: RADIUS
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      style: {
        fontSize: '13.5pt',
        color: 'white',
        fontWeight: 'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, item.title)))));
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/*!***********************************************!*\
  !*** multi ./src/pages/detail/index.entry.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/liuzhipeng/data/miniprogram/qinyouzaikan/src/pages/detail/index.entry.js */"./src/pages/detail/index.entry.js");


/***/ })

},[[2,"runtime","remax-vendors"]]]);