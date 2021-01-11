require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./src/pages/index/index.css?modules":
/*!*******************************************!*\
  !*** ./src/pages/index/index.css?modules ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"fl":"fl___CSmkS","container":"container___S1Lz5","recyclerview":"recyclerview___1aeci","shadow":"shadow___1hlmm"};

/***/ }),

/***/ "./src/pages/index/index.entry.js":
/*!****************************************!*\
  !*** ./src/pages/index/index.entry.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/index/index.js");


Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index'));

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/index/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./src/store/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
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







var RADIUS = 12;
var CARD_GAP = 18;
var PADDING = 20;
var CARD_WIDTH = _utils__WEBPACK_IMPORTED_MODULE_5__["sw"] - PADDING * 2;
var CARD_HEIGHT = CARD_WIDTH * 3 / 5;
var CARD_CONTAINER_HEIGHT = CARD_HEIGHT + CARD_GAP; //CARD_HEIGHT + CARD_GAP;

var CARD_CONTAINER_WIDTH = _utils__WEBPACK_IMPORTED_MODULE_5__["sw"];
var TEXT_DEFAULT = '#121212';
var TEXT_ACTIVE = '#FA2641';
var Index = Object(mobx_react__WEBPACK_IMPORTED_MODULE_3__["observer"])(function (props) {
  var isFetchingRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(false);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentTabIndex = _useState2[0],
      setTabIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      tabsData = _useState4[0],
      settabsdata = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      videoData = _useState6[0],
      setvideodata = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState8 = _slicedToArray(_useState7, 2),
      error = _useState8[0],
      seterror = _useState8[1];

  var currentFetchPageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(1);

  var fetchList = function fetchList(type, more) {
    isFetchingRef.current = true;
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["showLoading"])();
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["request"])({
      url: 'http://qyzs.zdw1.cn/api/video/list',
      data: {
        type: type,
        page: currentFetchPageRef.current
      },
      success: function success(res) {
        // console.log("列表数据获取成功", res)
        if (more) {
          var list = [].concat(_toConsumableArray(videoData), _toConsumableArray(res.data));
          setvideodata(list);
        } else {
          var _list = _toConsumableArray(res.data);

          setvideodata(_list);
        }
      },
      fail: function fail(err) {
        seterror(err);
      },
      complete: function complete() {
        isFetchingRef.current = false;
        Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])(); // console.log("列表数据获取执行完毕")
      }
    });
  };

  var fetchTabs = function fetchTabs() {
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["request"])({
      url: 'http://qyzs.zdw1.cn/api/video/indextype',
      success: function success(res) {
        console.log("标签栏数据获取成功", res);

        var list = _toConsumableArray(res.data);

        settabsdata(list);
      },
      fail: function fail(err) {
        console.log("标签栏数据获取失败", err);
      },
      complete: function complete() {
        console.log("标签栏数据获取执行完毕");
      }
    });
  };

  var onScrollToLower = function onScrollToLower(event) {
    // console.log("滚动到底部",isFetchingRef.current)
    if (isFetchingRef.current == false) {
      var type = tabsData[currentTabIndex];
      currentFetchPageRef.current += 1;
      fetchList(type, true);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchTabs();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (tabsData.length > 0) {
      currentFetchPageRef.current = 1;
      var type = tabsData[currentTabIndex];
      fetchList(type, false);
    }
  }, [currentTabIndex, tabsData]);

  var onVideoItemTap = function onVideoItemTap(item) {
    _store__WEBPACK_IMPORTED_MODULE_4__["default"].changeItem(item);
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])({
      url: "/pages/detail/index"
    });
  };

  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      style: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "/images/error.png",
      style: {
        width: "".concat(sysInfo.screenWidth * 0.6, "PX"),
        height: "".concat(sysInfo.screenWidth * 0.6, "PX")
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      style: {
        fontSize: '17pt'
      }
    }, "\u7F51\u7EDC\u9519\u8BEF\u274C"));
  }

  if (tabsData.length == 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      position: 'fixed',
      zIndex: 99,
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(50),
      width: '100%',
      backgroundColor: 'white',
      borderStyle: "solid",
      borderBottomWidth: 2,
      borderColor: '#f1f1f1'
    }
  }, tabsData.map(function (value, index) {
    var isMe = currentTabIndex === index;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      key: index.toString(),
      onTap: function onTap() {
        setTabIndex(index);
      },
      style: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
      },
      __key: index.toString()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      style: {
        color: isMe ? TEXT_ACTIVE : TEXT_DEFAULT,
        fontSize: isMe ? '16pt' : '14pt'
      }
    }, value));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      display: 'flex',
      flex: 1,
      // backgroundColor:'',
      height: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(50),
      width: '100%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["ScrollView"], {
    onScrollToLower: onScrollToLower,
    scrollY: true,
    lowerThreshold: 50,
    style: {
      display: 'flex',
      flex: 1,
      height: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(_utils__WEBPACK_IMPORTED_MODULE_5__["sh"]) - Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(50),
      width: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(_utils__WEBPACK_IMPORTED_MODULE_5__["sw"]),
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      display: 'flex',
      flex: 1,
      // backgroundColor:'#88ff99',
      height: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(10),
      width: '100%'
    }
  }), videoData.map(function (item, index) {
    // return <View key={index}/>
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      key: index,
      style: {
        display: 'flex',
        flex: 1,
        width: '100%',
        height: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(CARD_CONTAINER_HEIGHT)
      },
      __key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_2___default.a.shadow,
      style: {
        display: 'inline-block',
        position: 'relative',
        width: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(CARD_WIDTH),
        height: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(CARD_HEIGHT),
        backgroundColor: 'white',
        borderRadius: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(RADIUS),
        marginBottom: CARD_GAP,
        marginLeft: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(PADDING),
        marginRight: Object(_utils__WEBPACK_IMPORTED_MODULE_5__["rtx"])(PADDING)
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
        return onVideoItemTap(item);
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
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 1:
/*!**********************************************!*\
  !*** multi ./src/pages/index/index.entry.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/liuzhipeng/data/miniprogram/qinyouzaikan/src/pages/index/index.entry.js */"./src/pages/index/index.entry.js");


/***/ })

},[[1,"runtime","remax-vendors"]]]);