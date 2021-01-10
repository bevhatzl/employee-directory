import React from "react";
// import "./style.css";

function SearchResults(props) {
  return (
    <tbody>
      {props.results.map(result => (
        <tr key={result.email} className="list-group-item">
          <td><img alt="Employee photo" src={result.picture.thumbnail} className="img-fluid" /></td>
          <td>{result.name.first + " " + result.name.last}</td>
          <td>{result.phone}</td>
          <td>{result.email}</td>
          <td>{result.dob.date}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default SearchResults;