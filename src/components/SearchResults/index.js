import React from "react";
// import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.email} className="list-group-item">
          <img alt="Employee photo" src={result.picture.thumbnail} className="img-fluid" />
          <p>{result.name.first + " " + result.name.last}</p>
          <p>{result.phone}</p>
          <p>{result.email}</p>
          <p>{result.dob.date}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;