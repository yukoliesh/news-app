"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SavedItem = exports.SavedItems = exports.FavoriteHeader = exports.ReadLaterIcon = exports.HeartIcon = exports.LinkStyle = exports.HyperLinkStyle = exports.MorePopularButton = exports.MoreLatestButton = exports.PopularHeader = exports.LatestHeader = exports.LightModeSwitchLabel = exports.RightAlingedBox = exports.CenterBox = exports.NewsTitleEllipsisBox = exports.HeadlinerColCont = exports.HeadlinerColBox = exports.Box = exports.NavAction = exports.NavItem = exports.NavCont = exports.MainWrapper = exports.BorderLine = exports.HeadingLinkStyle = exports.HeaderTodayText = exports.Header = exports.HeaderCont = exports.HeaderWrapper = exports.ContentWrapper = exports.Background = void 0;

var _styledComponents = _interopRequireWildcard(require("@xstyled/styled-components"));

var _system = require("@xstyled/system");

var _reactRouterDom = require("react-router-dom");

var _fontStyle = require("./font-style");

var _color = require("./color");

var _layout = require("./layout");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  line-height: 1.5\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 0;\n  padding-left: 0;\n  list-style-type: decimal-leading-zero;\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  color: ", ";\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  background: none;\n  cursor: pointer;\n  outline: none;\n  font-size: 1.2em;\n  color: ", ";\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  border: none;\n  background: none;\n  cursor: pointer;\n  outline: none;\n  font-size: 1.2em;\n  color: ", ";\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 400;\n  text-decoration: none; \n  &:hover{\n    color: ", "\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 600;\n  text-decoration: none; \n  &:hover{\n    color: ", ";\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  background-color: ", ";\n  color: ", ";\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  background-color: ", ";\n  color: ", ";\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  width: 80%;\n  border-radius: 2.5em;\n  padding: 1.5em 2em;\n  font-size: 1em;\n  text-align: center;\n  text-decoration: none;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  color: ", ";\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  color: ", ";\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  background-color:  ", ";\n  box-shadow:  ", ";\n  padding: 1em 2em 2em;\n  border-radius: 1.5em;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n  font-size: 1em;\n  &:hover{\n    color: ", "\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  line-height: 1.5;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  list-style: none;\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  padding: 2em 4em; \n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: solid 1px ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  text-decoration: none; \n  &:hover{\n    color: ", "\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n  -webkit-text-stroke: 1px white;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 3em;\n  font-style: italic;\n  font-weight: 600;\n  text-align: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 700px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  background: ", ";\n  background: ", ";\n  border-radius: 1.5em 1.5em 0 0;\n  padding: 4em 5em;\n  height: 350px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  background-color: ", ";\n  border-radius: 1.5em 1.5em 0 0;\n  width: 70vw;\n  min-height: 40vh;\n  padding-bottom: 3em;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// App component
var Background = _styledComponents["default"].div(_templateObject(), _layout.displayflex, _layout.bg);

exports.Background = Background;

var ContentWrapper = _styledComponents["default"].div(_templateObject2(), _fontStyle.fontFamily, function (_ref) {
  var theme = _ref.theme;
  return theme.wrapperBg;
});

exports.ContentWrapper = ContentWrapper;

var HeaderWrapper = _styledComponents["default"].div(_templateObject3(), _layout.displayflex, function (_ref2) {
  var theme = _ref2.theme;
  return theme.headerBg;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.headerGradient;
});

exports.HeaderWrapper = HeaderWrapper;

var HeaderCont = _styledComponents["default"].div(_templateObject4());

exports.HeaderCont = HeaderCont;

var Header = _styledComponents["default"].h1(_templateObject5());

exports.Header = Header;

var HeaderTodayText = _styledComponents["default"].span(_templateObject6());

exports.HeaderTodayText = HeaderTodayText;
var HeadingLinkStyle = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject7(), _color.lm_white, _color.lm_white);
exports.HeadingLinkStyle = HeadingLinkStyle;

var BorderLine = _styledComponents["default"].div(_templateObject8(), _color.lm_white);

exports.BorderLine = BorderLine;

var MainWrapper = _styledComponents["default"].div(_templateObject9(), _layout.displayflex); // Navlink Component


exports.MainWrapper = MainWrapper;

var NavCont = _styledComponents["default"].ul(_templateObject10());

exports.NavCont = NavCont;

var NavItem = _styledComponents["default"].li(_templateObject11());

exports.NavItem = NavItem;

var NavAction = _styledComponents["default"].button(_templateObject12(), _color.lm_purple); // Box


exports.NavAction = NavAction;

var Box = _styledComponents["default"].div(_templateObject13(), _system.system);

exports.Box = Box;
var HeadlinerColBox = (0, _styledComponents["default"])(Box)(_templateObject14());
exports.HeadlinerColBox = HeadlinerColBox;

var HeadlinerColCont = _styledComponents["default"].div(_templateObject15(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.headlinerBg;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.boxShadow;
});

exports.HeadlinerColCont = HeadlinerColCont;
var NewsTitleEllipsisBox = (0, _styledComponents["default"])(Box)(_templateObject16()); // Switch

exports.NewsTitleEllipsisBox = NewsTitleEllipsisBox;
var CenterBox = (0, _styledComponents["default"])(Box)(_templateObject17());
exports.CenterBox = CenterBox;
var RightAlingedBox = (0, _styledComponents["default"])(Box)(_templateObject18());
exports.RightAlingedBox = RightAlingedBox;

var LightModeSwitchLabel = _styledComponents["default"].span(_templateObject19(), _color.lm_white); // Front HeadLiner


exports.LightModeSwitchLabel = LightModeSwitchLabel;

var LatestHeader = _styledComponents["default"].h2(_templateObject20(), _fontStyle.pageHeaderFontStyle, function (_ref6) {
  var theme = _ref6.theme;
  return theme.latestColor;
});

exports.LatestHeader = LatestHeader;

var PopularHeader = _styledComponents["default"].h2(_templateObject21(), _fontStyle.pageHeaderFontStyle, function (_ref7) {
  var theme = _ref7.theme;
  return theme.popularColor;
});

exports.PopularHeader = PopularHeader;
var MoreButtonStyle = (0, _styledComponents.css)(_templateObject22());
var MoreLatestButton = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject23(), MoreButtonStyle, function (_ref8) {
  var theme = _ref8.theme;
  return theme.latestColor;
}, _color.lm_white);
exports.MoreLatestButton = MoreLatestButton;
var MorePopularButton = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject24(), MoreButtonStyle, function (_ref9) {
  var theme = _ref9.theme;
  return theme.popularColor;
}, _color.lm_white); // Link Style

exports.MorePopularButton = MorePopularButton;

var HyperLinkStyle = _styledComponents["default"].a(_templateObject25(), function (_ref10) {
  var theme = _ref10.theme;
  return theme.titleLink;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.titleLinkHover;
});

exports.HyperLinkStyle = HyperLinkStyle;
var LinkStyle = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject26(), _color.lm_white, _color.grey); // Your Favorite icon

exports.LinkStyle = LinkStyle;

var HeartIcon = _styledComponents["default"].button(_templateObject27(), function (_ref12) {
  var theme = _ref12.theme;
  return theme.heartIcon;
}); // Read Later icon


exports.HeartIcon = HeartIcon;

var ReadLaterIcon = _styledComponents["default"].button(_templateObject28(), function (_ref13) {
  var theme = _ref13.theme;
  return theme.bookmarkIcon;
}); // Your Favorite page


exports.ReadLaterIcon = ReadLaterIcon;

var FavoriteHeader = _styledComponents["default"].h2(_templateObject29(), _fontStyle.pageHeaderFontStyle, _color.lm_favorite);

exports.FavoriteHeader = FavoriteHeader;

var SavedItems = _styledComponents["default"].ol(_templateObject30());

exports.SavedItems = SavedItems;

var SavedItem = _styledComponents["default"].li(_templateObject31());

exports.SavedItem = SavedItem;