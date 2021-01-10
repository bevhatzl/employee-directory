import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container/index";
import SearchForm from "../SearchForm/index";
import SearchResults from "../SearchResults/index";
import TableHeader from "../TableHeader/index";
import Alert from "../Alert/index";

class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    sortOrder: "ascend",
    filteredEmps: [],
    error: ""
  };

  // When the component mounts, get a list of all available employees and update this.state.employees
  componentDidMount() {
    API.getAllEmployees()
      .then(res => this.setState({ employees: res.data.results, filteredEmps: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const letterInput = (event.target.value).toLowerCase();
    console.log(letterInput);

    const allEmps = this.state.employees;
    console.log(allEmps);
    console.log(this.state.filteredEmps);

    const filteredList = (allEmps.filter(item => 
      ((item.name.first + " " + item.name.last).toLowerCase()).includes(letterInput))
    )

    console.log(filteredList);
    this.setState({ filteredEmps: filteredList });
  }


  handleSortChange = event => {
    if (this.state.sortOrder === "ascend") {
      this.setState({ sortOrder: "descend" })

    } else {
      this.setState({ sortOrder: "ascend" })
    }
  }



  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Name!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleInputChange={this.handleInputChange}
            employees={this.state.employees}
          />
          <table>
            <TableHeader handleClick={this.handleSortChange} />
            <SearchResults results={this.state.filteredEmps} order={this.state.sortOrder} />
          </table>
        </Container>
      </div>
    );
  }
}

export default Search;
