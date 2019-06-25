import React, { Component } from "react";

class FilterItemsUpdate extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <button className="btn btn-danger btn-sm solid-button">Apply</button>
        <button className="btn btn-danger btn-sm light-button">
          x Clear All
        </button>
      </div>
    );
  }
}

export default FilterItemsUpdate;
