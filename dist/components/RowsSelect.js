"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var RowsSelect = function RowsSelect(_ref) {
  var setRowsNb = _ref.setRowsNb;
  return _react.createElement("div", null, "Show", _react.createElement("select", {
    name: "select",
    id: "select",
    onChange: function onChange(e) {
      return setRowsNb(e.target.value);
    }
  }, _react.createElement("option", {
    value: "10"
  }, "10"), _react.createElement("option", {
    value: "25"
  }, "25"), _react.createElement("option", {
    value: "50"
  }, "50"), _react.createElement("option", {
    value: "100"
  }, "100")), "entries");
};
var _default = RowsSelect;
exports.default = _default;