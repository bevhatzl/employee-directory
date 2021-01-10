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
      .then(res => this.setState({ employees: res.data.results }))
      .then(this.setState({ filteredEmps: this.state.employees }))
      .catch(err => console.log(err));
  }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };


  // handleSearchChange = event => {
  //   const filter = event.target.value;
  //   const filteredList = this.state.employees.filter(item => {
  //     let values = item.name.first.toLowerCase();
  //     return values.indexOf(filter.toLowerCase()) !== -1;
  //   });

  //   this.state.filteredEmps = filteredList ;
  // }

  // handleSortChange = event => {

  // }



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
            <TableHeader />
            <SearchResults results={this.state.employees} order={this.state.sortOrder} />
          </table>
        </Container>
      </div>
    );
  }
}

export default Search;
