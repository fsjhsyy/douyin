"use strict";
(self["webpackChunkdouyin_modern_js"] = self["webpackChunkdouyin_modern_js"] || []).push([["page"],{

/***/ "./src/components/comments/CommentPanel.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommentPanel: function() { return /* binding */ CommentPanel; }
/* harmony export */ });
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/regenerator.js");
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");






var _jsxFileName = "E:\\tiktok-project\\douyin-web\\src\\components\\comments\\CommentPanel.jsx",
  _this = undefined,
  _s = __webpack_require__.$Refresh$.signature();


// 右侧固定评论面板（非抽屉）

var CommentPanel = function CommentPanel(_ref) {
  _s();
  var isVisible = _ref.isVisible,
    onToggle = _ref.onToggle,
    comments = _ref.comments,
    onCommentsChange = _ref.onCommentsChange,
    videoTitle = _ref.videoTitle;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(''),
    _useState2 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
    input = _useState2[0],
    setInput = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
    _useState4 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
    showCopied = _useState4[0],
    setShowCopied = _useState4[1];
  var listRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (isVisible && listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [comments, isVisible]);
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var value = input.trim();
    if (!value) return;
    var newComment = {
      id: String(Date.now()),
      avatar: 'https://placehold.co/40x40',
      userName: '游客',
      content: value,
      time: '刚刚',
      likes: 0,
      liked: false
    };
    var next = [newComment].concat((0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(comments));
    onCommentsChange(next);
    setInput('');
    if (listRef.current) {
      listRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  var handleToggleLike = function handleToggleLike(id) {
    var next = comments.map(function (c) {
      return c.id === id ? (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])((0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, c), {}, {
        liked: !c.liked,
        likes: c.likes + (c.liked ? -1 : 1)
      }) : c;
    });
    onCommentsChange(next);
  };
  var handleHide = function handleHide(id) {
    var next = comments.map(function (c) {
      return c.id === id ? (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])((0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, c), {}, {
        hidden: true
      }) : c;
    });
    onCommentsChange(next);
  };
  var handleCopy = /*#__PURE__*/function () {
    var _ref2 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(/*#__PURE__*/(0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_regenerator__WEBPACK_IMPORTED_MODULE_0__["default"])().m(function _callee(text) {
      var textarea, _t;
      return (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_regenerator__WEBPACK_IMPORTED_MODULE_0__["default"])().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return navigator.clipboard.writeText(text);
          case 1:
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
          case 3:
            setShowCopied(true);
            setTimeout(function () {
              return setShowCopied(false);
            }, 1500);
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function handleCopy(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  if (!isVisible) {
    return null;
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "w-[380px] border-l border-white/10 flex flex-col bg-[#0d0d0d] z-10",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "flex items-center justify-between px-4 py-3 border-b border-white/10",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "text-sm font-semibold flex items-center gap-2",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              children: "\u8BC4\u8BBA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
              className: "text-xs text-white/60",
              children: comments.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "text-xs text-white/50 line-clamp-1 mt-0.5",
            children: videoTitle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          onClick: onToggle,
          className: "text-xl leading-none text-white/70 hover:text-white transition-colors p-1",
          title: "\u9690\u85CF\u8BC4\u8BBA",
          children: "\u2715"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        ref: listRef,
        className: "flex-1 overflow-y-auto px-4 py-3 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent",
        children: comments.length === 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "text-center text-xs text-white/40 mt-10",
          children: "\u8FD8\u6CA1\u6709\u8BC4\u8BBA\uFF0C\u5FEB\u6765\u62A2\u6C99\u53D1\u5427\uFF5E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, _this) : comments.map(function (comment) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: "flex gap-3 text-xs",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("img", {
              src: comment.avatar,
              alt: comment.userName,
              className: "w-8 h-8 rounded-full flex-shrink-0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: "flex-1 min-w-0",
              children: comment.hidden ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: "text-white/40 italic",
                children: "\u8BE5\u8BC4\u8BBA\u5DF2\u88AB\u9690\u85CF"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 21
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "font-semibold mb-0.5",
                  children: comment.userName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "text-white/90 leading-relaxed whitespace-pre-wrap break-words",
                  children: comment.content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                  className: "mt-2 flex items-center gap-4 text-white/40 text-[11px]",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                    children: comment.time
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                    type: "button",
                    onClick: function onClick() {
                      return handleToggleLike(comment.id);
                    },
                    className: "flex items-center gap-1 hover:text-pink-400 transition-all ".concat(comment.liked ? 'text-pink-500 scale-105' : ''),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                      className: "text-sm ".concat(comment.liked ? 'animate-pulse' : ''),
                      children: comment.liked ? '❤️' : '🤍'
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 138,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("span", {
                      children: comment.likes
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                    type: "button",
                    className: "hover:text-white transition-colors",
                    onClick: function onClick() {
                      return handleHide(comment.id);
                    },
                    children: "\u9690\u85CF"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 25
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                    className: "ml-auto relative group",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                      type: "button",
                      className: "text-white/60 hover:text-white transition-colors",
                      children: "\u22EF"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 27
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                      className: "absolute right-0 mt-1 w-28 bg-[#1b1b1b] border border-white/10 rounded-lg shadow-lg z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
                        type: "button",
                        className: "w-full text-left text-xs px-3 py-2 hover:bg-white/5 transition-colors",
                        onClick: function onClick() {
                          return handleCopy(comment.content);
                        },
                        children: "\u590D\u5236\u8BC4\u8BBA"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 29
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 27
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 25
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 23
                }, _this)]
              }, void 0, true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 17
            }, _this)]
          }, comment.id, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("form", {
        onSubmit: handleSubmit,
        className: "border-t border-white/10 px-3 py-3 flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "flex-1 bg-white/5 rounded-full px-4 py-2 flex items-center hover:bg-white/10 transition-colors",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            className: "flex-1 bg-transparent outline-none text-xs text-white placeholder:text-white/40",
            placeholder: "\u7559\u4E0B\u4F60\u7684\u7CBE\u5F69\u8BC4\u8BBA...",
            value: input,
            onChange: function onChange(e) {
              return setInput(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
          type: "submit",
          disabled: !input.trim(),
          className: "px-4 py-2 rounded-full text-xs font-semibold transition-all ".concat(input.trim() ? 'bg-pink-500 hover:bg-pink-600 text-white scale-100 hover:scale-105' : 'bg-white/10 text-white/40 cursor-not-allowed scale-95'),
          children: "\u53D1\u5E03"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this), showCopied && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "fixed bottom-10 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white text-black text-xs z-50 shadow-lg animate-fadeIn",
      children: "\u2713 \u590D\u5236\u6210\u529F"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};
_s(CommentPanel, "tq7XtOILoCQzTkLsu6FBu81X40M=");
_c = CommentPanel;
var _c;
__webpack_require__.$Refresh$.register(_c, "CommentPanel");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/layout/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search_SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/search/SearchBar.jsx");
/* harmony import */ var _png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/layout/抖音.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _jsxFileName = "E:\\tiktok-project\\douyin-web\\src\\components\\layout\\Header.jsx",
  _this = undefined;




// 顶部导航栏：左边 Logo，中间搜索框，右边登录/注册按钮

var Header = function Header(_ref) {
  var onSearch = _ref.onSearch,
    history = _ref.history;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("header", {
    className: "h-16 border-b border-white/10 flex items-center px-6 justify-between",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "flex items-center gap-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "w-8 h-8 rounded-lg overflow-hidden",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
          src: _png__WEBPACK_IMPORTED_MODULE_2__,
          alt: "\u6296\u97F3",
          className: "w-full h-full object-cover"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
        className: "font-semibold text-lg",
        children: "\u6296\u97F3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "flex-1 max-w-xl",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_search_SearchBar__WEBPACK_IMPORTED_MODULE_1__.SearchBar, {
        onSearch: onSearch,
        history: history
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "flex items-center gap-4 text-sm text-white/70",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        className: "px-3 py-1 rounded-full border border-white/20 hover:bg-white/10",
        children: "\u6CE8\u518C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        className: "px-3 py-1 rounded-full bg-white text-black hover:bg-gray-200",
        children: "\u767B\u5F55"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};
_c = Header;
var _c;
__webpack_require__.$Refresh$.register(_c, "Header");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/layout/Sidebar.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: function() { return /* binding */ Sidebar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _jsxFileName = "E:\\tiktok-project\\douyin-web\\src\\components\\layout\\Sidebar.jsx",
  _this = undefined;


// 左侧侧边栏导航菜单

var Sidebar = function Sidebar(_ref) {
  var currentTab = _ref.currentTab,
    onTabChange = _ref.onTabChange;
  var navItems = [{
    id: 'featured',
    label: '精选',
    icon: '⭐',
    color: 'yellow'
  }, {
    id: 'recommend',
    label: '推荐',
    icon: '🔥',
    color: 'orange'
  }, {
    id: 'ai',
    label: 'AI抖音',
    icon: '🤖',
    color: 'blue'
  }, {
    id: 'follow',
    label: '关注',
    icon: '❤️',
    color: 'red'
  }, {
    id: 'friends',
    label: '朋友',
    icon: '👥',
    color: 'green'
  }, {
    id: 'my',
    label: '我的',
    icon: '👤',
    color: 'purple'
  }, {
    id: 'live',
    label: '直播',
    icon: '📹',
    color: 'pink'
  }, {
    id: 'cinema',
    label: '放映厅',
    icon: '🎬',
    color: 'indigo'
  }, {
    id: 'drama',
    label: '短剧',
    icon: '📺',
    color: 'violet'
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("aside", {
    className: "w-32 border-r border-white/10 h-full flex flex-col py-4 gap-2 overflow-y-auto",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "text-xs text-white/40 mb-2 font-semibold px-4",
      children: "\u83DC\u5355"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this), navItems.map(function (item) {
      var isActive = currentTab === item.id;
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        type: "button",
        onClick: function onClick() {
          return onTabChange(item.id);
        },
        className: "relative group w-full flex flex-row items-center gap-3 py-2.5 px-4 transition-all ".concat(isActive ? 'bg-pink-500/20 text-white' : 'text-white/60 hover:text-white hover:bg-white/5'),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "text-xl leading-none flex items-center justify-center w-6 h-6",
          children: item.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "text-sm font-medium leading-none ".concat(isActive ? 'text-pink-400' : ''),
          children: item.label
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, _this), isActive && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-500 rounded-r-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, _this);
};
_c = Sidebar;
var _c;
__webpack_require__.$Refresh$.register(_c, "Sidebar");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/layout/抖音.png":
/***/ (function(module) {

module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./src/components/pages/FeaturedPage.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeaturedPage: function() { return /* binding */ FeaturedPage; }
/* harmony export */ });
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _video_VideoPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/video/VideoPlayer.jsx");
/* harmony import */ var _comments_CommentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/comments/CommentPanel.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");


var _jsxFileName = "E:\\tiktok-project\\douyin-web\\src\\components\\pages\\FeaturedPage.jsx",
  _this = undefined,
  _s = __webpack_require__.$Refresh$.signature();




// 精选页面：网格阵列展示所有视频

var FeaturedPage = function FeaturedPage(_ref) {
  _s();
  var videos = _ref.videos;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    selectedVideo = _useState2[0],
    setSelectedVideo = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    showComments = _useState4[0],
    setShowComments = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    _useState6 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    comments = _useState6[0],
    setComments = _useState6[1];
  var handleVideoClick = function handleVideoClick(video) {
    setSelectedVideo(video);
    setComments(video.comments || []);
    setShowComments(false);
  };
  var handleClosePlayer = function handleClosePlayer() {
    setSelectedVideo(null);
    setShowComments(false);
  };
  var handleToggleComments = function handleToggleComments() {
    setShowComments(function (v) {
      return !v;
    });
  };
  var handleCommentsChange = function handleCommentsChange(newComments) {
    setComments(newComments);
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "h-full relative",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "h-full overflow-y-auto px-6 py-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "mb-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h2", {
          className: "text-xl font-bold mb-1",
          children: "\u7CBE\u9009\u89C6\u9891"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          className: "text-sm text-white/60",
          children: "\u4E3A\u4F60\u7CBE\u9009\u7684\u4F18\u8D28\u5185\u5BB9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 pb-6",
        children: videos.map(function (video) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
            type: "button",
            onClick: function onClick() {
              return handleVideoClick(video);
            },
            className: "group text-left bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "relative pb-[140%] bg-black overflow-hidden",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                src: video.cover,
                alt: video.title,
                className: "absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "w-12 h-12 rounded-full bg-pink-500/90 flex items-center justify-center text-white text-2xl",
                  children: "\u25B6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "absolute bottom-2 right-2 text-[10px] bg-black/70 rounded-full px-2 py-1 backdrop-blur-sm",
                children: ["\u2764 ", video.likes]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "p-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "text-xs line-clamp-2 text-white/90 mb-2 leading-relaxed",
                children: video.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "flex items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                  src: video.authorAvatar,
                  alt: video.authorName,
                  className: "w-5 h-5 rounded-full"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                  className: "text-[11px] text-white/60 truncate",
                  children: ["@", video.authorName]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this)]
          }, video.id, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), selectedVideo && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-sm",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
        onClick: handleClosePlayer,
        className: "absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-2xl transition-all hover:scale-110",
        children: "\u2715"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "flex items-center justify-center h-full",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_video_VideoPlayer__WEBPACK_IMPORTED_MODULE_2__.VideoPlayer, {
          video: selectedVideo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-40",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          onClick: handleToggleComments,
          className: "flex flex-col items-center text-xs text-white/80 hover:text-white transition-all hover:scale-110",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xl",
            children: "\uD83D\uDCAC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            className: "mt-1",
            children: comments.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }, _this), showComments && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "absolute right-0 top-0 h-full",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_comments_CommentPanel__WEBPACK_IMPORTED_MODULE_3__.CommentPanel, {
          isVisible: showComments,
          onToggle: handleToggleComments,
          comments: comments,
          onCommentsChange: handleCommentsChange,
          videoTitle: selectedVideo.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};
_s(FeaturedPage, "1f3DwOvbcsnPM8XhE+8y6ew2vGg=");
_c = FeaturedPage;
var _c;
__webpack_require__.$Refresh$.register(_c, "FeaturedPage");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/pages/PlaceholderPage.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaceholderPage: function() { return /* binding */ PlaceholderPage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _jsxFileName = "E:\\tiktok-project\\douyin-web\\src\\components\\pages\\PlaceholderPage.jsx",
  _this = undefined;


// 占位页面：用于尚未实现的功能

var PlaceholderPage = function PlaceholderPage(_ref) {
  var title = _ref.title,
    icon = _ref.icon,
    description = _ref.description;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "h-full flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "text-center space-y-6 px-8 max-w-md",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "text-8xl mb-4 animate-bounce",
        children: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
        className: "text-3xl font-bold text-white mb-2",
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "text-white/60 text-lg",
        children: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex items-center justify-center gap-2 text-white/40 text-sm",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "w-2 h-2 rounded-full bg-pink-500 animate-pulse"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-100"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "w-2 h-2 rounded-full bg-pink-500 animate-pulse delay-200"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "mt-8 pt-8 border-t border-white/10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "text-xs text-white/40",
          children: "\u529F\u80FD\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};
_c = PlaceholderPage;
var _c;
__webpack_require__.$Refresh$.register(_c, "PlaceholderPage");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/pages/RecommendPage.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecommendPage: function() { return /* binding */ RecommendPage; }
/* harmony export */ });
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comments_CommentPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/comments/CommentPanel.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");




var _jsxFileName = "E:\\tiktok-project\\douyin-web\\src\\components\\pages\\RecommendPage.jsx",
  _this = undefined,
  _s = __webpack_require__.$Refresh$.signature();



// 推荐页面：横屏视频播放，支持键盘上下切换

var RecommendPage = function RecommendPage(_ref) {
  _s();
  var videos = _ref.videos;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0),
    _useState2 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
    _useState4 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    showComments = _useState4[0],
    setShowComments = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
    _useState6 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    comments = _useState6[0],
    setComments = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
    _useState8 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
    videoLikes = _useState8[0],
    setVideoLikes = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),
    _useState0 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
    likedVideos = _useState0[0],
    setLikedVideos = _useState0[1];
  var currentVideo = videos[currentIndex];

  // 更新评论和点赞状态
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (currentVideo) {
      setComments(currentVideo.comments || []);
      if (!videoLikes[currentVideo.id]) {
        setVideoLikes(function (prev) {
          return (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prev), {}, (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, currentVideo.id, currentVideo.likes));
        });
      }
    }
  }, [currentVideo]);

  // 键盘上下键切换视频
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    var handleKeyDown = function handleKeyDown(event) {
      var target = event.target;
      var isTyping = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
      if (isTyping) return;
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        goPrev();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        goNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      return window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, videos.length]);
  var goPrev = function goPrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  var goNext = function goNext() {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  var handleToggleComments = function handleToggleComments() {
    setShowComments(function (v) {
      return !v;
    });
  };
  var handleCommentsChange = function handleCommentsChange(newComments) {
    setComments(newComments);
  };
  var handleToggleLike = function handleToggleLike() {
    var videoId = currentVideo.id;
    var isLiked = likedVideos[videoId];
    setLikedVideos(function (prev) {
      return (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prev), {}, (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, videoId, !isLiked));
    });
    setVideoLikes(function (prev) {
      return (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prev), {}, (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, videoId, prev[videoId] + (isLiked ? -1 : 1)));
    });
  };
  if (!currentVideo) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "h-full flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "text-white/60",
        children: "\u6682\u65E0\u89C6\u9891"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, _this);
  }
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "h-full relative flex bg-gradient-to-b from-black via-gray-900 to-black",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "flex-1 flex flex-col items-center justify-center relative px-8",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("video", {
          src: currentVideo.src,
          poster: currentVideo.cover,
          className: "w-full h-full object-cover",
          controls: true,
          autoPlay: true,
          playsInline: true
        }, currentVideo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "w-full max-w-5xl mt-6 px-4",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "flex items-start gap-4",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
            src: currentVideo.authorAvatar,
            alt: currentVideo.authorName,
            className: "w-12 h-12 rounded-full"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "flex-1 min-w-0",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
              className: "text-lg font-semibold mb-1",
              children: currentVideo.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              className: "text-sm text-white/70 mb-2",
              children: ["@", currentVideo.authorName]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
              className: "text-xs text-white/60 line-clamp-2",
              children: currentVideo.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "absolute left-1/2 -translate-x-1/2 bottom-10 flex items-center gap-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          onClick: goPrev,
          disabled: currentIndex === 0,
          className: "w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ".concat(currentIndex === 0 ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-white/10 hover:bg-white/20 text-white hover:scale-110'),
          children: "\u2191"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "text-sm text-white/60",
          children: [currentIndex + 1, " / ", videos.length]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          onClick: goNext,
          disabled: currentIndex === videos.length - 1,
          className: "w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all ".concat(currentIndex === videos.length - 1 ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-white/10 hover:bg-white/20 text-white hover:scale-110'),
          children: "\u2193"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          onClick: handleToggleLike,
          className: "flex flex-col items-center text-xs transition-all hover:scale-110",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-all ".concat(likedVideos[currentVideo.id] ? 'bg-pink-500 text-white scale-110' : 'bg-white/10 text-white/80 hover:bg-white/20'),
            children: likedVideos[currentVideo.id] ? '❤️' : '🤍'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "mt-1 ".concat(likedVideos[currentVideo.id] ? 'text-pink-400 font-semibold' : 'text-white/80'),
            children: videoLikes[currentVideo.id] || currentVideo.likes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          onClick: handleToggleComments,
          className: "flex flex-col items-center text-xs text-white/80 hover:text-white transition-all hover:scale-110",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl",
            children: "\uD83D\uDCAC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "mt-1",
            children: comments.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("button", {
          className: "flex flex-col items-center text-xs text-white/60 hover:text-white/80 transition-all hover:scale-110",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-2xl",
            children: "\u2197\uFE0F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: "mt-1",
            children: "\u5206\u4EAB"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), showComments && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "absolute right-0 top-0 h-full z-30",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_comments_CommentPanel__WEBPACK_IMPORTED_MODULE_4__.CommentPanel, {
        isVisible: showComments,
        onToggle: handleToggleComments,
        comments: comments,
        onCommentsChange: handleCommentsChange,
        videoTitle: currentVideo.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 87,
    columnNumber: 5
  }, _this);
};
_s(RecommendPage, "NFTzXEwBatsV3YT9BnMzhSB4Y1Y=");
_c = RecommendPage;
var _c;
__webpack_require__.$Refresh$.register(_c, "RecommendPage");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/search/SearchBar.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchBar: function() { return /* binding */ SearchBar; }
/* harmony export */ });
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");


var _jsxFileName = "E:\\tiktok-project\\douyin-web\\src\\components\\search\\SearchBar.jsx",
  _this = undefined,
  _s = __webpack_require__.$Refresh$.signature();


// 简单搜索框 + 历史记录下拉

var SearchBar = function SearchBar(_ref) {
  _s();
  var onSearch = _ref.onSearch,
    history = _ref.history;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState2 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState4 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var keyword = value.trim();
    if (!keyword) return;
    onSearch(keyword);
    setValue('');
  };
  var handleClickHistory = function handleClickHistory(item) {
    onSearch(item);
    setValue('');
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "relative z-[100]",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
      onSubmit: handleSubmit,
      className: "flex items-center rounded-full bg-white/5 px-4 py-1.5 border transition-all ".concat(focused ? 'border-pink-500 shadow-lg shadow-pink-500/20' : 'border-white/20'),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
        className: "text-white/40 mr-2",
        children: "\uD83D\uDD0D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
        className: "bg-transparent flex-1 outline-none text-sm text-white placeholder:text-white/40",
        placeholder: "\u641C\u7D22\u89C6\u9891\u3001\u7528\u6237\u6216\u8BDD\u9898",
        value: value,
        onChange: function onChange(e) {
          return setValue(e.target.value);
        },
        onFocus: function onFocus() {
          return setFocused(true);
        },
        onBlur: function onBlur() {
          return setFocused(false);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
        type: "submit",
        className: "ml-2 px-4 py-1.5 rounded-full bg-pink-500 text-xs font-medium hover:bg-pink-600 active:scale-95 transition-all hover:shadow-lg hover:shadow-pink-500/30",
        children: "\u641C\u7D22"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), focused && history.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "absolute left-0 right-0 mt-2 bg-[#181818] border border-pink-500/30 rounded-xl text-xs max-h-60 overflow-y-auto shadow-2xl z-[110] animate-fadeIn",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "px-3 py-2 border-b border-white/10 flex items-center justify-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "text-white/60 text-[11px]",
          children: "\u641C\u7D22\u5386\u53F2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
          className: "text-white/40 text-[10px]",
          children: [history.length, " \u6761\u8BB0\u5F55"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "py-1",
        children: history.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            type: "button",
            onMouseDown: function onMouseDown(e) {
              return e.preventDefault();
            } // 防止 blur 关闭下拉
            ,
            onClick: function onClick() {
              return handleClickHistory(item);
            },
            className: "w-full text-left px-4 py-2.5 hover:bg-pink-500/10 transition-colors flex items-center gap-2 group",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              className: "text-white/40 text-[10px] group-hover:text-pink-400",
              children: [index + 1, "."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              className: "flex-1 text-white/80 group-hover:text-white",
              children: item
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              className: "text-white/20 group-hover:text-pink-400 text-[10px]",
              children: "\u2192"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, _this)]
          }, item, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};
_s(SearchBar, "cnHHhLH99ZTTtWX0GPUy5Vv3WqQ=");
_c = SearchBar;
var _c;
__webpack_require__.$Refresh$.register(_c, "SearchBar");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/video/VideoPlayer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoPlayer: function() { return /* binding */ VideoPlayer; }
/* harmony export */ });
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");


var _jsxFileName = "E:\\tiktok-project\\douyin-web\\src\\components\\video\\VideoPlayer.jsx",
  _this = undefined,
  _s = __webpack_require__.$Refresh$.signature();


var VOLUME_KEY = 'douyin_volume';

// 工具：把秒数变成 00:00 格式
function formatTime(seconds) {
  if (!seconds || Number.isNaN(seconds)) return '00:00';
  var m = Math.floor(seconds / 60);
  var s = Math.floor(seconds % 60);
  return "".concat(String(m).padStart(2, '0'), ":").concat(String(s).padStart(2, '0'));
}

// 真正的视频播放器组件
var VideoPlayer = function VideoPlayer(_ref) {
  _s();
  var video = _ref.video;
  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var progressBarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var volumeBarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
    _useState2 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    isPlaying = _useState2[0],
    setIsPlaying = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState4 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    duration = _useState4[0],
    setDuration = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState6 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
    currentTime = _useState6[0],
    setCurrentTime = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
    _useState8 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
    buffered = _useState8[0],
    setBuffered = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.6),
    _useState0 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState9, 2),
    volume = _useState0[0],
    setVolume = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0.6),
    _useState10 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState1, 2),
    lastVolume = _useState10[0],
    setLastVolume = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState12 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState11, 2),
    showVolumeSlider = _useState12[0],
    setShowVolumeSlider = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
    _useState14 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState13, 2),
    playbackRate = _useState14[0],
    setPlaybackRate = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState16 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState15, 2),
    showSpeedMenu = _useState16[0],
    setShowSpeedMenu = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState18 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState17, 2),
    isSeeking = _useState18[0],
    setIsSeeking = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState20 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState19, 2),
    isFullscreen = _useState20[0],
    setIsFullscreen = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
    _useState22 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState21, 2),
    danmuText = _useState22[0],
    setDanmuText = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('9/16'),
    _useState24 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState23, 2),
    aspectRatio = _useState24[0],
    setAspectRatio = _useState24[1]; // 9/16竖屏, 16/9横屏
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState26 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState25, 2),
    showControls = _useState26[0],
    setShowControls = _useState26[1];
  var isMuted = volume === 0;

  // 初始：从 localStorage 读取音量
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    try {
      var stored = window.localStorage.getItem(VOLUME_KEY);
      if (stored) {
        var v = parseFloat(stored);
        if (!Number.isNaN(v)) {
          setVolume(v);
          setLastVolume(v || 0.6);
          if (videoRef.current) {
            videoRef.current.volume = v;
          }
        }
      } else if (videoRef.current) {
        videoRef.current.volume = volume;
      }
    } catch (_unused) {
      // 忽略错误
    }
  }, []);

  // 音量变化时写入 localStorage
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    try {
      window.localStorage.setItem(VOLUME_KEY, String(volume));
    } catch (_unused2) {
      // 忽略错误
    }
  }, [volume]);

  // 同步倍速到 video 标签
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate, video.id]);

  // 点击视频或空格键：切换播放 / 暂停
  var togglePlay = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    var el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play().catch(function () {});
    } else {
      el.pause();
    }
  }, []);

  // 监听空格键
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handler = function handler(event) {
      var target = event.target;
      var isTyping = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);
      if (isTyping) return;
      if (event.code === 'Space') {
        event.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener('keydown', handler);
    return function () {
      return window.removeEventListener('keydown', handler);
    };
  }, [togglePlay]);

  // 视频切换时重置进度并尝试自动播放
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var el = videoRef.current;
    if (!el) return;
    setCurrentTime(0);
    setDuration(el.duration || 0);
    setBuffered(0);
    el.play().then(function () {
      return setIsPlaying(true);
    }).catch(function () {
      // 浏览器可能禁止自动播放
      setIsPlaying(false);
    });
  }, [video.id]);

  // 监听全屏状态变化
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var onFsChange = function onFsChange() {
      var fsElement = document.fullscreenElement;
      setIsFullscreen(fsElement === containerRef.current);
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return function () {
      return document.removeEventListener('fullscreenchange', onFsChange);
    };
  }, []);

  // 播放进度更新
  var handleTimeUpdate = function handleTimeUpdate() {
    var el = videoRef.current;
    if (!el) return;
    setCurrentTime(el.currentTime);
    setDuration(el.duration || 0);
  };

  // 缓冲进度更新
  var handleProgress = function handleProgress() {
    var el = videoRef.current;
    if (!el || !el.duration) return;
    var ranges = el.buffered;
    if (!ranges.length) return;
    var end = ranges.end(ranges.length - 1);
    setBuffered(end / el.duration);
  };
  var progress = duration ? currentTime / duration : 0;

  // 根据鼠标事件算出进度条上的比例（0 ~ 1）
  var getProgressFromEvent = function getProgressFromEvent(e) {
    if (!progressBarRef.current || !duration) return 0;
    var rect = progressBarRef.current.getBoundingClientRect();
    var ratio = (e.clientX - rect.left) / rect.width;
    return Math.min(1, Math.max(0, ratio));
  };

  // 按下进度条：立即跳到对应位置，并进入拖动状态
  var handleProgressMouseDown = function handleProgressMouseDown(e) {
    e.preventDefault();
    var ratio = getProgressFromEvent(e);
    setIsSeeking(true);
    if (videoRef.current && duration) {
      var nextTime = ratio * duration;
      videoRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    }
  };

  // 拖动进度条：不断更新 currentTime
  var handleProgressMouseMove = function handleProgressMouseMove(e) {
    if (!isSeeking) return;
    var ratio = getProgressFromEvent(e);
    if (videoRef.current && duration) {
      var nextTime = ratio * duration;
      videoRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    }
  };
  var stopSeeking = function stopSeeking() {
    return setIsSeeking(false);
  };

  // 调整音量（用于滚轮）
  var changeVolume = function changeVolume(delta) {
    setVolume(function (prev) {
      var next = prev + delta;
      if (next < 0) next = 0;
      if (next > 1) next = 1;
      if (videoRef.current) {
        videoRef.current.volume = next;
      }
      if (next > 0) setLastVolume(next);
      return next;
    });
  };

  // 鼠标滚轮：调节音量
  var handleWheel = function handleWheel(e) {
    e.preventDefault();
    var delta = e.deltaY < 0 ? 0.05 : -0.05;
    changeVolume(delta);
  };

  // 点击垂直音量条：设置音量
  var handleVolumeClick = function handleVolumeClick(e) {
    if (!volumeBarRef.current) return;
    var rect = volumeBarRef.current.getBoundingClientRect();
    var ratio = 1 - (e.clientY - rect.top) / rect.height;
    var next = ratio;
    if (next < 0) next = 0;
    if (next > 1) next = 1;
    if (videoRef.current) {
      videoRef.current.volume = next;
    }
    if (next > 0) setLastVolume(next);
    setVolume(next);
  };

  // 静音 / 取消静音
  var toggleMute = function toggleMute() {
    if (isMuted) {
      var target = lastVolume || 0.6;
      if (videoRef.current) videoRef.current.volume = target;
      setVolume(target);
    } else {
      setLastVolume(volume || 0.6);
      if (videoRef.current) videoRef.current.volume = 0;
      setVolume(0);
    }
  };

  // 全屏 / 退出全屏
  var toggleFullscreen = function toggleFullscreen() {
    var container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(function () {});
    } else {
      document.exitFullscreen().catch(function () {});
    }
  };

  // 切换横竖屏
  var toggleAspectRatio = function toggleAspectRatio() {
    setAspectRatio(function (prev) {
      return prev === '9/16' ? '16/9' : '9/16';
    });
  };

  // 网页全屏（不是浏览器全屏）
  var toggleWebFullscreen = function toggleWebFullscreen() {
    var container = containerRef.current;
    if (!container) return;
    if (!isFullscreen) {
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100vw';
      container.style.height = '100vh';
      container.style.zIndex = '100';
      setIsFullscreen(true);
    } else {
      container.style.position = '';
      container.style.top = '';
      container.style.left = '';
      container.style.width = '';
      container.style.height = '';
      container.style.zIndex = '';
      setIsFullscreen(false);
    }
  };
  var speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

  // 弹幕表单仅做 UI，提交后清空输入框
  var handleDanmuSubmit = function handleDanmuSubmit(e) {
    e.preventDefault();
    setDanmuText('');
  };
  var containerStyle = aspectRatio === '9/16' ? 'w-[320px] sm:w-[360px] md:w-[420px] aspect-[9/16]' : 'w-[560px] md:w-[720px] aspect-[16/9]';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    ref: containerRef,
    className: "relative ".concat(containerStyle, " bg-black rounded-xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 z-30"),
    onWheel: handleWheel,
    onMouseEnter: function onMouseEnter() {
      return setShowControls(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShowControls(false);
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("video", {
      ref: videoRef,
      src: video.src,
      poster: video.cover,
      className: "w-full h-full object-cover",
      playsInline: true,
      onClick: togglePlay,
      onTimeUpdate: handleTimeUpdate,
      onLoadedMetadata: handleTimeUpdate,
      onProgress: handleProgress,
      onPlay: function onPlay() {
        return setIsPlaying(true);
      },
      onPause: function onPause() {
        return setIsPlaying(false);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "absolute inset-0 flex flex-col justify-between p-4 pointer-events-none",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "flex items-center gap-3 pointer-events-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: video.authorAvatar,
          alt: video.authorName,
          className: "w-10 h-10 rounded-full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 312,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex flex-col",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            className: "text-sm font-semibold",
            children: ["@", video.authorName]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 318,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "pointer-events-auto",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "mb-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "font-semibold text-sm mb-1",
            children: video.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 326,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "text-xs text-white/80 max-h-10 overflow-hidden",
            children: video.description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 327,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("form", {
          onSubmit: handleDanmuSubmit,
          className: "mb-3 inline-flex items-center bg-black/40 rounded-full px-3 py-1 text-xs text-white/80 max-w-full",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            className: "mr-2 text-[11px] text-white/60",
            children: "\u5F39\u5E55"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 337,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", {
            className: "bg-transparent outline-none text-xs text-white placeholder:text-white/40 w-40 sm:w-52 md:w-64",
            placeholder: "\u53D1\u4E00\u6761\u53CB\u5584\u7684\u5F39\u5E55\u5427\uFF5E",
            value: danmuText,
            onChange: function onChange(e) {
              return setDanmuText(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
            type: "submit",
            disabled: !danmuText.trim(),
            className: "ml-2 text-[11px] ".concat(danmuText.trim() ? 'text-pink-400' : 'text-white/40 cursor-not-allowed'),
            children: "\u53D1\u9001"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            ref: progressBarRef,
            className: "relative h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer group",
            onMouseDown: handleProgressMouseDown,
            onMouseMove: handleProgressMouseMove,
            onMouseUp: stopSeeking,
            onMouseLeave: stopSeeking,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "absolute inset-y-0 bg-white/30",
              style: {
                width: "".concat(buffered * 100, "%")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "absolute inset-y-0 bg-pink-500",
              style: {
                width: "".concat(progress * 100, "%")
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 374,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "absolute top-1/2 w-3 h-3 rounded-full bg-white shadow group-hover:scale-110 transition-transform",
              style: {
                left: "".concat(progress * 100, "%"),
                transform: 'translate(-50%, -50%)'
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 379,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 360,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "flex items-center justify-between text-[11px]",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "flex items-center gap-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                type: "button",
                onClick: togglePlay,
                className: "w-6 h-6 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition",
                children: isPlaying ? '❚❚' : '▶'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 392,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                children: [formatTime(currentTime), " / ", formatTime(duration)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 399,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 390,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "flex items-center gap-3",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "relative flex items-center gap-2",
                onMouseEnter: function onMouseEnter() {
                  return setShowVolumeSlider(true);
                },
                onMouseLeave: function onMouseLeave() {
                  return setShowVolumeSlider(false);
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  onClick: toggleMute,
                  className: "w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition text-xs",
                  title: isMuted ? '取消静音' : '静音',
                  children: isMuted ? '🔇' : '🔊'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 411,
                  columnNumber: 19
                }, _this), showVolumeSlider && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  ref: volumeBarRef,
                  className: "h-20 w-1.5 bg-white/20 rounded-full relative cursor-pointer",
                  onClick: handleVolumeClick,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "absolute bottom-0 left-0 right-0 bg-white/70",
                    style: {
                      height: "".concat(volume * 100, "%")
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 425,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "absolute left-1/2 w-3 h-3 rounded-full bg-white shadow",
                    style: {
                      bottom: "".concat(volume * 100, "%"),
                      transform: 'translate(-50%, 50%)'
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 429,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 420,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 406,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "relative",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  type: "button",
                  onClick: function onClick() {
                    return setShowSpeedMenu(function (v) {
                      return !v;
                    });
                  },
                  className: "w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition text-[10px] font-bold",
                  title: "\u64AD\u653E\u901F\u5EA6",
                  children: [playbackRate, "\xD7"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 442,
                  columnNumber: 19
                }, _this), showSpeedMenu && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "absolute right-0 bottom-8 bg-[#1b1b1b] border border-white/10 rounded-lg shadow-lg text-[11px] py-1 z-50",
                  children: speeds.map(function (speed) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      type: "button",
                      onClick: function onClick() {
                        setPlaybackRate(speed);
                        setShowSpeedMenu(false);
                      },
                      className: "px-4 py-1.5 w-full text-left hover:bg-white/5 transition-colors ".concat(playbackRate === speed ? 'text-pink-400 font-semibold' : 'text-white'),
                      children: speed === 1 ? '正常' : "".concat(speed, "\xD7")
                    }, speed, false, {
                      fileName: _jsxFileName,
                      lineNumber: 453,
                      columnNumber: 25
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 451,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 441,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                type: "button",
                onClick: toggleAspectRatio,
                className: "w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition text-xs",
                title: aspectRatio === '9/16' ? '切换到横屏' : '切换到竖屏',
                children: aspectRatio === '9/16' ? '📱' : '🖥️'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 472,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                type: "button",
                onClick: toggleWebFullscreen,
                className: "w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition text-xs",
                title: "\u7F51\u9875\u5168\u5C4F",
                children: isFullscreen ? '⤫' : '⤢'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 482,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                type: "button",
                onClick: toggleFullscreen,
                className: "w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 active:scale-95 transition text-xs",
                title: "\u6D4F\u89C8\u5668\u5168\u5C4F",
                children: "\uD83D\uDD32"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 492,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 287,
    columnNumber: 5
  }, _this);
};
_s(VideoPlayer, "y1PV2KiB1muFVo2BYpcFlQN8WdI=");
_c = VideoPlayer;
var _c;
__webpack_require__.$Refresh$.register(_c, "VideoPlayer");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/hooks/useLocalStorage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLocalStorage: function() { return /* binding */ useLocalStorage; }
/* harmony export */ });
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");


var _s = __webpack_require__.$Refresh$.signature();


// 一个非常简单的 localStorage Hook
// 用来存音量、搜索历史等
function useLocalStorage(key, initialValue) {
  _s();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
      if (typeof window === 'undefined') return initialValue;
      try {
        var stored = window.localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
      } catch (_unused) {
        return initialValue;
      }
    }),
    _useState2 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (_unused2) {
      // 忽略写入错误
    }
  }, [key, value]);
  return [value, setValue];
}
_s(useLocalStorage, "jmkll6Kacdv6Ckr7ZTC0CfBaZns=");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/mock/videos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchVideoList: function() { return /* binding */ fetchVideoList; },
/* harmony export */   mockVideos: function() { return /* binding */ mockVideos; }
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

// 这里简单写一些假数据，真实项目可以换成接口
var baseComments = [{
  id: 'c1',
  avatar: 'https://placehold.co/40x40',
  userName: '评论用户1',
  content: '你的视频真好看！',
  time: '1小时前',
  likes: 1
}, {
  id: 'c2',
  avatar: 'https://placehold.co/40x40?text=A',
  userName: '评论用户2',
  content: '你的视频真好看！',
  time: '2小时前',
  likes: 2
}, {
  id: 'c3',
  avatar: 'https://placehold.co/40x40?text=B',
  userName: '评论用户3',
  content: '你的视频真好看！',
  time: '3小时前',
  likes: 3
}];
var mockVideos = [{
  id: 'v1',
  title: '大家好我是用户1',
  description: '大家好我是用户1，很高兴认识大家！',
  src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  cover: 'https://placehold.co/600x800/000000/FFFFFF?text=Video+1',
  authorName: 'AAA用户1',
  authorAvatar: 'https://placehold.co/80x80?text=M',
  likes: 1,
  comments: baseComments
}, {
  id: 'v2',
  title: '大家好我是用户2',
  description: '大家好我是用户2，很高兴认识大家！。',
  src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  cover: 'https://placehold.co/600x800/111111/FFFFFF?text=Video+2',
  authorName: 'BBB用户2',
  authorAvatar: 'https://placehold.co/80x80?text=J',
  likes: 2,
  comments: baseComments
}, {
  id: 'v3',
  title: '大家好我是用户3',
  description: '大家好我是用户3，很高兴认识大家！',
  src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  cover: 'https://placehold.co/600x800/222222/FFFFFF?text=Video+3',
  authorName: 'CCC用户3',
  authorAvatar: 'https://placehold.co/80x80?text=P',
  likes: 3,
  comments: baseComments
}];

// 模拟请求（返回 Promise）
function fetchVideoList() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(mockVideos);
    }, 400);
  });
}

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/routes/page.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mock_videos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/mock/videos.js");
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/hooks/useLocalStorage.js");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/layout/Header.jsx");
/* harmony import */ var _components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/layout/Sidebar.jsx");
/* harmony import */ var _components_pages_FeaturedPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/pages/FeaturedPage.jsx");
/* harmony import */ var _components_pages_RecommendPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/pages/RecommendPage.jsx");
/* harmony import */ var _components_pages_PlaceholderPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/components/pages/PlaceholderPage.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");



var _jsxFileName = "E:\\tiktok-project\\douyin-web\\src\\routes\\page.jsx",
  _this = undefined,
  _s = __webpack_require__.$Refresh$.signature();









// Page 组件就是首页内容，Modern.js 会自动渲染它

var Page = function Page() {
  _s();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    videos = _useState2[0],
    setVideos = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('featured'),
    _useState4 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    currentTab = _useState4[0],
    setCurrentTab = _useState4[1];
  var _useLocalStorage = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__.useLocalStorage)('douyin_search_history', []),
    _useLocalStorage2 = (0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useLocalStorage, 2),
    searchHistory = _useLocalStorage2[0],
    setSearchHistory = _useLocalStorage2[1];

  // 初始化：请求视频列表（mock）
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    (0,_mock_videos__WEBPACK_IMPORTED_MODULE_3__.fetchVideoList)().then(function (list) {
      setVideos(list);
    });
  }, []);

  // 搜索：只记录关键字到历史，不做实际过滤（作业要求）
  var handleSearch = function handleSearch(keyword) {
    var trimmed = keyword.trim();
    if (!trimmed) return;
    setSearchHistory(function (prev) {
      var next = [trimmed].concat((0,E_tiktok_project_douyin_web_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev.filter(function (item) {
        return item !== trimmed;
      })));
      return next.slice(0, 10);
    });
  };
  var handleTabChange = function handleTabChange(tab) {
    setCurrentTab(tab);
  };

  // 根据当前tab渲染不同的页面
  var renderContent = function renderContent() {
    if (!videos.length) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "h-full flex items-center justify-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
          className: "text-xl text-white/60",
          children: "\u52A0\u8F7D\u4E2D..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this);
    }
    switch (currentTab) {
      case 'featured':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_pages_FeaturedPage__WEBPACK_IMPORTED_MODULE_7__.FeaturedPage, {
          videos: videos
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 16
        }, _this);
      case 'recommend':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_pages_RecommendPage__WEBPACK_IMPORTED_MODULE_8__.RecommendPage, {
          videos: videos
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 16
        }, _this);
      case 'ai':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_pages_PlaceholderPage__WEBPACK_IMPORTED_MODULE_9__.PlaceholderPage, {
          title: "AI\u6296\u97F3",
          icon: "\uD83E\uDD16",
          description: "\u667A\u80FD\u63A8\u8350\uFF0C\u7CBE\u51C6\u5339\u914D\u4F60\u7684\u5174\u8DA3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this);
      case 'follow':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_pages_PlaceholderPage__WEBPACK_IMPORTED_MODULE_9__.PlaceholderPage, {
          title: "\u5173\u6CE8",
          icon: "\u2764\uFE0F",
          description: "\u67E5\u770B\u4F60\u5173\u6CE8\u7684\u521B\u4F5C\u8005\u7684\u6700\u65B0\u52A8\u6001"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this);
      case 'friends':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_pages_PlaceholderPage__WEBPACK_IMPORTED_MODULE_9__.PlaceholderPage, {
          title: "\u670B\u53CB",
          icon: "\uD83D\uDC65",
          description: "\u4E0E\u597D\u53CB\u5206\u4EAB\u7CBE\u5F69\u65F6\u523B"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this);
      case 'my':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_pages_PlaceholderPage__WEBPACK_IMPORTED_MODULE_9__.PlaceholderPage, {
          title: "\u6211\u7684",
          icon: "\uD83D\uDC64",
          description: "\u7BA1\u7406\u4F60\u7684\u4E2A\u4EBA\u4E3B\u9875\u548C\u4F5C\u54C1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this);
      case 'live':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_pages_PlaceholderPage__WEBPACK_IMPORTED_MODULE_9__.PlaceholderPage, {
          title: "\u76F4\u64AD",
          icon: "\uD83D\uDCF9",
          description: "\u5B9E\u65F6\u4E92\u52A8\uFF0C\u7CBE\u5F69\u4E0D\u65AD"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, _this);
      case 'cinema':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_pages_PlaceholderPage__WEBPACK_IMPORTED_MODULE_9__.PlaceholderPage, {
          title: "\u653E\u6620\u5385",
          icon: "\uD83C\uDFAC",
          description: "\u9AD8\u6E05\u5F71\u89C6\uFF0C\u7545\u4EAB\u89C2\u5F71\u4F53\u9A8C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this);
      case 'drama':
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_pages_PlaceholderPage__WEBPACK_IMPORTED_MODULE_9__.PlaceholderPage, {
          title: "\u77ED\u5267",
          icon: "\uD83D\uDCFA",
          description: "\u7CBE\u5F69\u77ED\u5267\uFF0C\u8FFD\u5267\u5FC5\u5907"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this);
      default:
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_pages_FeaturedPage__WEBPACK_IMPORTED_MODULE_7__.FeaturedPage, {
          videos: videos
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 16
        }, _this);
    }
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: "h-screen bg-black text-white flex flex-col relative",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "relative z-50",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_layout_Header__WEBPACK_IMPORTED_MODULE_5__.Header, {
        onSearch: handleSearch,
        history: searchHistory
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
      className: "flex flex-1 overflow-hidden relative",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
        className: "relative z-10",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_6__.Sidebar, {
          currentTab: currentTab,
          onTabChange: handleTabChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("main", {
        className: "flex-1 overflow-hidden relative",
        children: renderContent()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, _this);
};
_s(Page, "JDbXGwOydVmKgUJBzSFmkFlMfWQ=", false, function () {
  return [_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__.useLocalStorage];
});
_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);
var _c;
__webpack_require__.$Refresh$.register(_c, "Page");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

}]);
//# sourceMappingURL=page.js.map