import { useState, useEffect } from 'react';
import propTypes from 'prop-types';

/**
 * DataTableHead component
 * @param {array} columns
 * @param {array} dataState
 * @param {func} setDataState
 * @returns {JSX.Element} return DataTableHead component
*/
const DataTableHead = ({ columns, dataState, setDataState }) => {
    const [sort, setSort] = useState({ column: null, direction: 'asc' });
    
    const handleSort = (e, column) => {
        const svg = e.currentTarget.querySelector('.sort');
        if (sort.column === column) {
            if (sort.direction === 'asc') {
                svg.querySelector(':nth-child(2)').setAttribute('fill', '#000');
                svg.querySelector(':nth-child(1)').setAttribute('fill', '#858585');
                setSort({column, direction: 'desc'});
            }
            else {
                svg.querySelector(':nth-child(1)').setAttribute('fill', '#000');
                svg.querySelector(':nth-child(2)').setAttribute('fill', '#858585');
                setSort({column, direction: 'asc'});
            }
        } else {
            document.querySelectorAll('.sort').forEach((svg) => {
                svg.querySelector(':nth-child(1)').setAttribute('fill', '#858585');
                svg.querySelector(':nth-child(2)').setAttribute('fill', '#858585');
            });
            svg.querySelector(':nth-child(1)').setAttribute('fill', '#000');
            setSort({column, direction: 'asc'});
        }
    };

    useEffect(() => {
        if (sort.column) {
            const sortedData = [...dataState].sort((a, b) => {
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

    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.data} onClick={(e) => handleSort(e, column.data)}>
                        <div className='columns-header'>
                            {column.title}
                            <svg className='sort' width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 7.99993L3 0L6 7.99993H0Z" fill="#858585"/>
                                <path d="M6 9.99986H0L3 18L6 9.99986Z" fill="#858585"/>
                            </svg>
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );
};

DataTableHead.propTypes = {
    columns: propTypes.array.isRequired,
    dataState: propTypes.array.isRequired,
    setDataState: propTypes.func.isRequired,

};

export default DataTableHead;