import React from 'react';
import SearchFeedEntry from './searchEntry.jsx';
import './search.css';

const SearchFeed = ({ shows, onClick }) => (
  <div>
    <h2 className="app">Search Results</h2>

    {shows.map(({ show }, i) => <SearchFeedEntry classname="search-feed-entry" key={show + i} show={show} onClick={onClick} />)}
  </div>
);

export default SearchFeed;
