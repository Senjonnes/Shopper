import React, { Component } from "react";
import FilterHead from "../filters/FilterHead";
import FilterBody from "../filters/FilterBody";

class Filter extends Component {
  render() {
    return (
      <React.Fragment>
        <FilterHead filters={this.props.filters} />
        <FilterBody />
      </React.Fragment>
    );
  }
}

export default Filter;
