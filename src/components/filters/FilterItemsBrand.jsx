import React, { Component } from "react";

const filterBrandStyle = {
  height: "120px",
  overflowY: "scroll"
};

class FilterItemsBrand extends Component {
  render() {
    return (
      <div>
        <h5 className="text-secondary font-weight-bold my-3">Brand</h5>
        <div style={filterBrandStyle} className="checkboxes">
          <div>
            <input type="checkbox" />
            {"  "}
            <span>Abercrombie</span>
          </div>
          <div>
            <input type="checkbox" />
            {"  "}
            <span>Fitch</span>
          </div>
          <div>
            <input type="checkbox" />
            {"  "}
            <span>Adidas Originals</span>
          </div>
          <div>
            <input type="checkbox" />
            {"  "}
            <span>D & G</span>
          </div>
          <div>
            <input type="checkbox" />
            {"  "}
            <span>ASOS</span>
          </div>
          <div>
            <input type="checkbox" />
            {"  "}
            <span>Cheap Monday</span>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterItemsBrand;
