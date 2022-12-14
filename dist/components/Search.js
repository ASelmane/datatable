"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = require("react");
/**
 * Search component
 * @param {func} props.setSearch
 * @returns {JSX.Element} return Search component
 */
var Search = function Search(props) {
  var _useState = (0, _react.useState)(""),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    search = _useState2[0],
    setSearch = _useState2[1];
  var handleChange = function handleChange(e) {
    setSearch(e.target.value);
    props.setSearch(e.target.value);
  };
  return _react.createElement("div", null, _react.createElement("label", {
    htmlFor: "search"
  }, "Search: "), _react.createElement("input", {
    id: "search",
    name: "search",
    type: "text",
    value: search,
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }));
};
var _default = Search;
exports.default = _default;