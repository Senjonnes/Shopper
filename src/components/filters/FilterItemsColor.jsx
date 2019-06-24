import React, { Component } from "react";

class FilterItemsColor extends Component {
  state = {
    items: [
      {
        id: 1,
        button: "btn btn-primary btn-sm mr-2 rounded-btn",
        checked: false
      },
      {
        id: 2,
        button: "btn btn-success btn-sm mr-2 rounded-btn",
        checked: false
      },
      {
        id: 3,
        button: "btn btn-warning btn-sm mr-2 rounded-btn",
        checked: false
      },
      {
        id: 4,
        button: "btn btn-danger btn-sm mr-2 rounded-btn",
        checked: false
      },
      {
        id: 5,
        button: "btn btn-info btn-sm mr-2 rounded-btn",
        checked: false
      },
      {
        id: 6,
        button: "btn btn-dark btn-sm mr-2 rounded-btn",
        checked: false
      },
      {
        id: 7,
        button: "btn btn-secondary btn-sm mr-2 rounded-btn",
        checked: false
      }
    ]
  };

  render() {
    return (
      <div>
        <p className="text-secondary font-weight-bold my-3">Color</p>
        {this.state.items.map((item) => (
          <button key={item.id} className={item.button} />
        ))}
      </div>
    );
  }
}

export default FilterItemsColor;
