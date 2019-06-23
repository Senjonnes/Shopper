import React, { Component } from "react";
// import WearsList from "./components/WearsList";

class FilterItemsCount extends Component {
  render() {
    return (
      <React.Fragment>
        <span className="pr-1" style={{ display: "flex" }}>
          Filter{" "}
          {this.props.filters.dresses.map((dress) => (
            <li className="pr-1" key={dress.id}>
              {dress.itemName}
            </li>
          ))}{" "}
          Items
        </span>
        <div>
          <input type="button" value="x" /> Gender: <span>Women</span>
        </div>
        <div>
          <input type="button" value="x" /> Category: <span>Dresses</span>
        </div>
      </React.Fragment>
    );
  }
}

export default FilterItemsCount;
