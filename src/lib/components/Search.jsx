import { useState } from "react";

/**
 * Search component
 * @param {func} props.setSearch
 * @returns {JSX.Element} return Search component
 */
const Search = (props) => {
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
        props.setSearch(e.target.value);
    };

    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input id="search" name="search" type="text" value={search} onChange={(e) => handleChange(e)} />
        </div>
    );
};

export default Search;