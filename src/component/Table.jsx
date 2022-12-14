import DataTable from "../lib";

const Table = ({ data, columns }) => {
    return (
        <DataTable
            data={data}
            columns={columns}
        />
    );
}

export default Table;