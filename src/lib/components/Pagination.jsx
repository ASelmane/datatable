import propTypes from 'prop-types';

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
const Pagination = ({ page, pages, isLast, isFirst, prevPage, nextPage, setPage }) => (
    <div className="pagination">
        <button className='previous' onClick={prevPage} disabled={isFirst}>
            Previous
        </button>
        {
            Array.from({ length: pages }, (_, i) => (
                <button key={i + 1} onClick={() => setPage(i + 1)} className={page === i + 1 ? 'page active' : 'page'}  disabled={i+1 === page ? true : false}>
                    {i + 1}
                </button>
            ))
        }
        <button className='next' onClick={nextPage} disabled={isLast}>
            Next
        </button>
    </div>
);

Pagination.propTypes = {
    page: propTypes.number.isRequired,
    pages: propTypes.number.isRequired,
    isLast: propTypes.bool.isRequired,
    isFirst: propTypes.bool.isRequired,
    prevPage: propTypes.func.isRequired,
    nextPage: propTypes.func.isRequired,
};

export default Pagination;