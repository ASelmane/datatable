"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
/**
 * Pagination component for DataTable
 * @param {number} page
 * @param {number} pages
 * @param {boolean} isLast
 * @param {boolean} isFirst
 * @param {func} prevPage
 * @param {func} nextPage
 * @param {func} setPage
 * @returns {JSX.Element} return pagination component
 */
var Pagination = function Pagination(_ref) {
  var page = _ref.page,
    pages = _ref.pages,
    isLast = _ref.isLast,
    isFirst = _ref.isFirst,
    prevPage = _ref.prevPage,
    nextPage = _ref.nextPage,
    setPage = _ref.setPage;
  return _react.createElement("div", {
    className: "pagination"
  }, _react.createElement("button", {
    className: "previous",
    onClick: prevPage,
    disabled: isFirst
  }, "Previous"), Array.from({
    length: pages
  }, function (_, i) {
    return _react.createElement("button", {
      key: i + 1,
      onClick: function onClick() {
        return setPage(i + 1);
      },
      className: page === i + 1 ? 'page active' : 'page',
      disabled: i + 1 === page ? true : false
    }, i + 1);
  }), _react.createElement("button", {
    className: "next",
    onClick: nextPage,
    disabled: isLast
  }, "Next"));
};
var _default = Pagination;
exports.default = _default;