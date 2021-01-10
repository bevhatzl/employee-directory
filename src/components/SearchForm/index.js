import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.employees array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          type="text"
          className="form-control"
          placeholder="Type in a name to begin"
          id="employee"
        />
      </div>
    </form>
  );
}

export default SearchForm;