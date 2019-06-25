import React, { Component } from "react";
import FilterItemsColor from "../filters/FilterItemsColor";
import FilterItemsSize from "../filters/FilterItemsSize";
import FilterItemsPrice from "../filters/FilterItemsPrice";
import FilterItemsBrand from "../filters/FilterItemsBrand";

const filterBodyStyle = {
  backgroundColor: "#fff",
  padding: "24px 16px 16px",
  border: "1px solid #ccc"
};

class FilterBody extends Component {
  render() {
    return (
      <div style={filterBodyStyle}>
        <FilterItemsColor />
        <FilterItemsSize />
        <FilterItemsPrice />
        <FilterItemsBrand />
      </div>
    );
  }
}

export default FilterBody;
