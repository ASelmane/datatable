"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _react = require("react");
/**
 * DataTableHead component
 * @param {array} columns
 * @param {array} dataState
 * @param {func} setDataState
 * @returns {JSX.Element} return DataTableHead component
*/
var DataTableHead = function DataTableHead(_ref) {
  var columns = _ref.columns,
    dataState = _ref.dataState,
    setDataState = _ref.setDataState;
  var _useState = (0, _react.useState)({
      column: null,
      direction: 'asc'
    }),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    sort = _useState2[0],
    setSort = _useState2[1];
  var handleSort = function handleSort(e, column) {
    var svg = e.currentTarget.querySelector('.sort');
    if (sort.column === column) {
      if (sort.direction === 'asc') {
        svg.querySelector(':nth-child(2)').setAttribute('fill', '#000');
        svg.querySelector(':nth-child(1)').setAttribute('fill', '#858585');
        setSort({
          column: column,
          direction: 'desc'
        });
      } else {
        svg.querySelector(':nth-child(1)').setAttribute('fill', '#000');
        svg.querySelector(':nth-child(2)').setAttribute('fill', '#858585');
        setSort({
          column: column,
          direction: 'asc'
        });
      }
    } else {
      document.querySelectorAll('.sort').forEach(function (svg) {
        svg.querySelector(':nth-child(1)').setAttribute('fill', '#858585');
        svg.querySelector(':nth-child(2)').setAttribute('fill', '#858585');
      });
      svg.querySelector(':nth-child(1)').setAttribute('fill', '#000');
      setSort({
        column: column,
        direction: 'asc'
      });
    }
  };
  (0, _react.useEffect)(function () {
    if (sort.column) {
      var sortedData = (0, _toConsumableArray2.default)(dataState).sort(function (a, b) {
        if (a[sort.column] < b[sort.column]) {
          return sort.direction === 'asc' ? -1 : 1;
        }
        if (a[sort.column] > b[sort.column]) {
          return sort.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
      setDataState(sortedData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);
  return _react.createElement("thead", null, _react.createElement("tr", null, columns.map(function (column) {
    return _react.createElement("th", {
      key: column.data,
      onClick: function onClick(e) {
        return handleSort(e, column.data);
      }
    }, _react.createElement("div", {
      className: "columns-header"
    }, column.title, _react.createElement("svg", {
      className: "sort",
      width: "6",
      height: "18",
      viewBox: "0 0 6 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _react.createElement("path", {
      d: "M0 7.99993L3 0L6 7.99993H0Z",
      fill: "#858585"
    }), _react.createElement("path", {
      d: "M6 9.99986H0L3 18L6 9.99986Z",
      fill: "#858585"
    }))));
  })));
};
var _default = DataTableHead;
exports.default = _default;