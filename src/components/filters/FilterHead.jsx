import React, { Component } from "react";
import FilterItemsCount from "../filters/FilterItemsCount";

const filterHeadStyle = {
  backgroundColor: "#ececec",
  padding: "24px 16px 16px",
  border: "1px solid #ccc",
  borderBottom: "none"
};

class FilterHead extends Component {
  render() {
    return (
      <div style={filterHeadStyle}>
        <FilterItemsCount filters={this.props.filters} />
      </div>
    );
  }
}

export default FilterHead;
