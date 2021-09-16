import React from 'react';
import PropTypes from 'prop-types';

const SearchControls = ({ userQuery, onQueryChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="search">Search</label>
    <input
      id="userQuery"
      type="text"
      value={userQuery}
      onChange={onQueryChange}
    />
    <button aria-label="search-articles">
      Submit
    </button>
  </form>
);

SearchControls.propTypes = {
  userQuery: PropTypes.string.isRequired,
  onQueryChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchControls;
