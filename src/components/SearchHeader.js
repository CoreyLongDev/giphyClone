import React from 'react';

function SearchHeader({ lastSearchString }) {
    return (
        <header>
            <h1>Giphy Searcher</h1>
            <p className="muted">
                Showing results for <strong>{lastSearchString}</strong>
            </p>
        </header>
    )
}

export default SearchHeader;