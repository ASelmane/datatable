"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var RowsSelect = function RowsSelect(_ref) {
  var setRowsNb = _ref.setRowsNb;
  return /*#__PURE__*/React.createElement("div", null, "Show", /*#__PURE__*/React.createElement("select", {
    name: "select",
    id: "select",
    onChange: function onChange(e) {
      return setRowsNb(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/React.createElement("option", {
    value: "25"
  }, "25"), /*#__PURE__*/React.createElement("option", {
    value: "50"
  }, "50"), /*#__PURE__*/React.createElement("option", {
    value: "100"
  }, "100")), "entries");
};
var _default = RowsSelect;
exports.default = _default;