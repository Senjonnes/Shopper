import React, { Component } from "react";

class FilterItemsSize extends Component {
  render() {
    return (
      <div>
        <h5 className="text-secondary font-weight-bold my-3">Size</h5>
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
