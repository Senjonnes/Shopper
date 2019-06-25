import React, { Component } from "react";
import FilterItemsUpdate from "../filters/FilterItemsUpdate";

const filterFootStyle = {
  backgroundColor: "#ececec",
  padding: "24px 16px 16px",
  border: "1px solid #ccc",
  borderTop: "none"
};

class FilterFoot extends Component {
  render() {
    return (
      <div>
        <div style={filterFootStyle}>
          <FilterItemsUpdate filters={this.props.filters} />
        </div>
      </div>
    );
  }
}

export default FilterFoot;
