import React, { Component } from "react";

class FilterItemsSize extends Component {
  render() {
    return (
      <div>
        <p className="text-secondary font-weight-bold my-3">Size</p>
        <button className="btn item-size-button">XS</button>
        <button className="btn item-size-button active">S</button>
        <button className="btn item-size-button">M</button>
        <button className="btn item-size-button">L</button>
        <button className="btn item-size-button">XL</button>
      </div>
    );
  }
}

export default FilterItemsSize;
