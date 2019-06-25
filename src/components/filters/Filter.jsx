import React, { Component } from "react";
import FilterHead from "../filters/FilterHead";
import FilterBody from "../filters/FilterBody";
import FilterFoot from "../filters/FilterFoot";

class Filter extends Component {
  render() {
    return (
      <React.Fragment>
        <FilterHead filters={this.props.filters} />
        <FilterBody />
        <FilterFoot />
      </React.Fragment>
    );
  }
}

export default Filter;
