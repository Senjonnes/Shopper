import React, { Component } from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

const filterPriceStyle = {
  paddingBottom: "64px"
};

class FilterItemsPrice extends Component {
  //   onChangeSlide(data) {
  //     console.log(data);
  //   }

  getPriceSlider = () => (
    <Nouislider
      range={{ min: 0, max: 100 }}
      start={[20, 80]}
      connect
      tooltips
    />
  );

  render() {
    return (
      <div style={filterPriceStyle}>
        <p className="text-secondary font-weight-bold my-3">Price slider</p>
        {this.getPriceSlider()}
      </div>
    );
  }
}

export default FilterItemsPrice;
