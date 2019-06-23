import React, { Component } from "react";
import FilterItemsCount from "./FilterItemsCount";

class Filter extends Component {
  render() {
    return <FilterItemsCount filters={this.props.filters} />;
  }
}

export default Filter;
