import React from "react";
// import "./style.css";

function SearchResults(props) {

  if (props.order === "ascend") {
    const res = props.results;
    const sortedArray = res.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
    console.log(sortedArray);
  } else {
    const res = props.results;
    const sortedArray = res.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
  }

  function formatDate(date){
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate =[day, month, year].join("-");
    return formattedDate;
}

  return (
    <tbody>
      {props.results.map(result => (
        <tr key={result.email} className="list-group-item">
          <td><img alt="Employee photo" src={result.picture.thumbnail} className="img-fluid" /></td>
          <td>{result.name.first + " " + result.name.last}</td>
          <td>{result.phone}</td>
          <td>{result.email}</td>
          <td>{formatDate(result.dob.date)}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default SearchResults;