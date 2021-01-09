import React from "react";
// import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
       item displays here
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          item displays here
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;