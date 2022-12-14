
const RowsSelect = ({ setRowsNb }) => (
    <div>
        Show
        <select name="select" id="select" onChange={(e) => setRowsNb(e.target.value)}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
        </select>
        entries
    </div>
)

export default RowsSelect