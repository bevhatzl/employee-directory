import React from "react";
// import "./style.css";
// import handleSortChange from '../Search/index';

function TableHeader(props) {
  return (
    <thead>
        <tr>
            <th scope="col">Image</th>
            {/* <th scope="col">Name</th> */}
            <th scope="col" onClick={props.handleClick}>Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
        </tr>
    </thead>
  );
}

export default TableHeader;