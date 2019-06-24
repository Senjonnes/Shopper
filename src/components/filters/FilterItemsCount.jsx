import React, { Component } from "react";

const filterTextStyle = {
  display: "flex",
  fontWeight: "bold",
  fontSize: "22px",
  color: "#333"
};

class FilterItemsCount extends Component {
  getCategoryCount = (items) => {
    let count = 0;
    Object.keys(items).map((k) => {
      const newIt = items[k];
      Object.keys(newIt).map((values) => {
        if (newIt[values].itemName) {
          count += 1;
        }
      });
    });
    return count;
  };

  render() {
    return (
      <React.Fragment>
        <span style={filterTextStyle} className="pr-1">
          Filter {this.getCategoryCount(this.props.filters)} Items
        </span>
        <div>
          <input className="cancel" type="button" value="x" />{" "}
          <span style={{ fontSize: "14px" }}>Gender: </span>
          <span style={{ fontSize: "14px" }}>Women</span>
        </div>
        <div>
          <input className="cancel" type="button" value="x" />{" "}
          <span style={{ fontSize: "14px" }}>Category: </span>
          <span style={{ fontSize: "14px" }}>Dresses</span>
        </div>
      </React.Fragment>
    );
  }
}

export default FilterItemsCount;
