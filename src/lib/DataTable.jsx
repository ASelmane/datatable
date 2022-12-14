import propTypes from 'prop-types';
import Search from './components/Search';
import Pagination from './components/Pagination';
import DataTableHead from './components/DataTableHead';
import { useEffect, useState } from 'react';
import './DataTable.css';
import RowsSelect from './components/RowsSelect';

/**
 * DataTable component
 * @param {array} data
 * @param {array} columns
 * @returns {JSX.Element} return DataTable component
*/
const DataTable = ({ data, columns }) => {
    const [dataState, setDataState] = useState(data || []);
    const [pages, setPages] = useState(1);
    const [page, setPage] = useState(1);
    const [rowsNb, setRowsNb] = useState(10);
    const [search, setSearch] = useState('');

    useEffect(() => {
        setDataState(data.filter((row) => {
            let found = false;
            columns.forEach((column) => {
                if (row[column.data].toString().toLowerCase().includes(search.toLowerCase())) {
                    found = true;
                }
            });
            return found;
        }));

        setPages(Math.ceil(dataState.length / rowsNb));
        setPage(1);
    }, [search, rowsNb, columns, data, dataState.length]);

    const nextPage = () => {
        if (page < pages) {
            setPage(page + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="data-table">
            <div className='data-table-header'>
                <RowsSelect setRowsNb={setRowsNb} />
                <Search setSearch={setSearch} />
            </div>
            <table>
                {
                    columns && columns.length > 0 && (
                        <DataTableHead columns={columns} dataState={dataState} setDataState={setDataState} />
                    )
                }
                <tbody>
                    {
                        dataState.length === 0 ? (
                            <tr>
                                <td>No data found</td>
                            </tr>
                        ) : (
                            dataState.slice((page - 1) * rowsNb, page * rowsNb).map((row, id) => (
                                <tr key={id}>
                                    {
                                        columns.map((column) => (
                                            <td key={column.data}>{row[column.data]}</td>
                                        ))
                                    }
                                </tr>
                            ))
                        )
                    }
                    
                </tbody>
            </table>
            <Pagination page={page} setPage={setPage} pages={pages} isFirst={page === 1 ? true : false} isLast={page === pages ? true : false} nextPage={nextPage} prevPage={prevPage} />
        </div>
    );
};

DataTable.propTypes = {
    data: propTypes.array.isRequired,
    columns: propTypes.arrayOf(
        propTypes.shape({
            title: propTypes.string.isRequired,
            data: propTypes.string.isRequired,
        })
    ).isRequired,
};

export default DataTable;