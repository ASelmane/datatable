var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
var _Search = _interopRequireDefault(require("./components/Search"));
var _Pagination = _interopRequireDefault(require("./components/Pagination"));
var _DataTableHead = _interopRequireDefault(require("./components/DataTableHead"));
var _react = require("react");
require("./DataTable.css");
var _RowsSelect = _interopRequireDefault(require("./components/RowsSelect"));
/**
 * DataTable component
 * @param {array} data
 * @param {array} columns
 * @returns {JSX.Element} return DataTable component
*/
var DataTable = function DataTable(_ref) {
  var data = _ref.data,
    columns = _ref.columns;
  var _useState = (0, _react.useState)(data || []),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    dataState = _useState2[0],
    setDataState = _useState2[1];
  var _useState3 = (0, _react.useState)(1),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    pages = _useState4[0],
    setPages = _useState4[1];
  var _useState5 = (0, _react.useState)(1),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    page = _useState6[0],
    setPage = _useState6[1];
  var _useState7 = (0, _react.useState)(10),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    rowsNb = _useState8[0],
    setRowsNb = _useState8[1];
  var _useState9 = (0, _react.useState)(''),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    search = _useState10[0],
    setSearch = _useState10[1];
  (0, _react.useEffect)(function () {
    setDataState(data.filter(function (row) {
      var found = false;
      columns.forEach(function (column) {
        if (row[column.data].toString().toLowerCase().includes(search.toLowerCase())) {
          found = true;
        }
      });
      return found;
    }));
    setPages(Math.ceil(dataState.length / rowsNb));
    setPage(1);
  }, [search, rowsNb, columns, data, dataState.length]);
  var nextPage = function nextPage() {
    if (page < pages) {
      setPage(page + 1);
    }
  };
  var prevPage = function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return _react.createElement("div", {
    className: "data-table"
  }, _react.createElement("div", {
    className: "data-table-header"
  }, _react.createElement(_RowsSelect.default, {
    setRowsNb: setRowsNb
  }), _react.createElement(_Search.default, {
    setSearch: setSearch
  })), _react.createElement("table", null, columns && columns.length > 0 && _react.createElement(_DataTableHead.default, {
    columns: columns,
    dataState: dataState,
    setDataState: setDataState
  }), _react.createElement("tbody", null, dataState.length === 0 ? _react.createElement("tr", null, _react.createElement("td", null, "No data found")) : dataState.slice((page - 1) * rowsNb, page * rowsNb).map(function (row, id) {
    return _react.createElement("tr", {
      key: id
    }, columns.map(function (column) {
      return _react.createElement("td", {
        key: column.data
      }, row[column.data]);
    }));
  }))), _react.createElement(_Pagination.default, {
    page: page,
    setPage: setPage,
    pages: pages,
    isFirst: page === 1 ? true : false,
    isLast: page === pages ? true : false,
    nextPage: nextPage,
    prevPage: prevPage
  }));
};
var _default = DataTable;
exports.default = _default;