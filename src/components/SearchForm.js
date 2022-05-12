import React from "react";

function SearchForm({handleSubmit, handleChange, searchString}) {
    return(
        <form className="form-horizontal">
            <input placeholder='Search' type='text' name="searchString" onChange={handleChange} value={searchString} required />
            <button type="submit" onsubmit={handleSubmit}>Search</button>
        </form>
    )
}

export default SearchForm