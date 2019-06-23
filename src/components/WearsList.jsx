import React, { Component } from "react";

const mensWearStyle = {
  backgroundColor: "#999",
  padding: "2rem 5rem",
  marginBottom: "16px"
};

class WearsList extends Component {
  state = {
    wears: [
      {
        id: 1,
        wear: "Accessories"
      },
      {
        id: 2,
        wear: "ASOS Basic Tops"
      },
      {
        id: 3,
        wear: "Bags"
      },
      {
        id: 4,
        wear: "Caps & Hats"
      },
      {
        id: 5,
        wear: "Gifts"
      },
      {
        id: 6,
        wear: "Grooming"
      },
      {
        id: 7,
        wear: "Hoodies & Sweatshirts"
      },
      {
        id: 8,
        wear: "Jackets & Coats"
      },
      {
        id: 9,
        wear: "Jeans"
      },
      {
        id: 10,
        wear: "Jewellery"
      },
      {
        id: 11,
        wear: "Joggers"
      },
      {
        id: 12,
        wear: "Jumpers & Cardigans"
      },
      {
        id: 13,
        wear: "Leather Jackets"
      },
      {
        id: 14,
        wear: "Long Sleeve T-Shirts"
      },
      {
        id: 15,
        wear: "Loungewear"
      },
      {
        id: 16,
        wear: "Oversized & Longline"
      },
      {
        id: 17,
        wear: "Polo Shirts"
      },
      {
        id: 18,
        wear: "Shirts"
      }
    ]
  };

  render() {
    return (
      <div style={mensWearStyle}>
        <h1>Mens Wear</h1>
        <ul className="mens-wear">
          {this.state.wears.map((wears) => (
            <li key={wears.id}>{wears.wear}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default WearsList;
