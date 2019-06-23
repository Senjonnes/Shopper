import React, { Component } from "react";
import Header from "./components/layout/Header";
import WearsList from "./components/WearsList";
import Filter from "./components/Filter";
import ImagesTile from "./components/ImagesTile";

import "./App.css";

class App extends Component {
  state = {
    items: {
      dresses: [
        {
          id: 1,
          gender: "Women",
          itemName: "Gown",
          size: "M",
          price: 20,
          color: "Yellow",
          brand: "ASOS"
        },
        {
          id: 2,
          gender: "Women",
          itemName: "Skirt",
          size: "XL",
          price: 50,
          color: "Blue",
          brand: "Fitch"
        },
        {
          id: 3,
          gender: "Men",
          itemName: "Shirt",
          size: "S",
          price: 10,
          color: "Black",
          brand: "ADIDAS"
        },
        {
          id: 4,
          gender: "Men",
          itemName: "Polo",
          size: "M",
          price: 30,
          color: "Blue",
          brand: "Fitch"
        }
      ],
      footwears: [
        {
          id: 1,
          gender: "Women",
          itemName: "Wedge",
          size: "L",
          price: 40,
          color: "Blue",
          brand: "Fitch"
        },
        {
          id: 2,
          gender: "Women",
          itemName: "Heels",
          size: "S",
          price: 10,
          color: "Pink",
          brand: "ASOS"
        },
        {
          id: 3,
          gender: "Men",
          itemName: "Canvas",
          size: "XS",
          price: 5,
          color: "Red",
          brand: "ADIDAS"
        },
        {
          id: 4,
          gender: "Men",
          itemName: "Palm",
          size: "L",
          price: 45,
          color: "Black",
          brand: "Fitch"
        }
      ],
      bags: [
        {
          id: 1,
          gender: "Women",
          itemName: "Hand Bag",
          size: "XL",
          price: 50,
          color: "Green",
          brand: "Fitch"
        },
        {
          id: 2,
          gender: "Women",
          itemName: "Purse",
          size: "M",
          price: 25,
          color: "Yellow",
          brand: "ASOS"
        },
        {
          id: 3,
          gender: "Men",
          itemName: "Back Bag",
          size: "L",
          price: 50,
          color: "Black",
          brand: "ADIDAS"
        },
        {
          id: 4,
          gender: "Men",
          itemName: "One Hand",
          size: "XL",
          price: 20,
          color: "Blue",
          brand: "ASOS"
        }
      ],
      pants: [
        {
          id: 1,
          gender: "Women",
          itemName: "G-Strings",
          size: "L",
          price: 35,
          color: "Red",
          brand: "Fitch"
        },
        {
          id: 2,
          gender: "Women",
          itemName: "Leggies",
          size: "L",
          price: 30,
          color: "Blue",
          brand: "ASOS"
        },
        {
          id: 3,
          gender: "Men",
          itemName: "Jeans",
          size: "L",
          price: 4,
          color: "Green",
          brand: "Fitch"
        },
        {
          id: 4,
          gender: "Men",
          itemName: "Palm Trousers",
          size: "L",
          price: 36,
          color: "Yellow",
          brand: "ADIDAS"
        }
      ]
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <div style={{ padding: "16px", backgroundColor: "#dfdfdf" }}>
            <WearsList />
            <div className="row">
              <div className="col-md-3">
                <Filter filters={this.state.items} />
              </div>
              <div className="col-md-9">
                <ImagesTile />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
