import React, { Component } from "react";
import d1 from "../img/d1.png";
import d2 from "../img/d2.png";
import d3 from "../img/d3.png";
import d4 from "../img/d4.png";
import d5 from "../img/d5.png";
import d6 from "../img/d6.png";

export class ImagesTile extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <div className="row">
          <div className="col-md-4">
            <div className="image-tile">
              <div className="d-flex justify-content-center">
                <img src={d1} />
              </div>
              <p className="text-dark m-0 py-3 text-center font-weight-bold">
                Men's Shirt Offer
              </p>
              <div className="text-center py-3">
                <button className="btn btn-primary btn-sm solid-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-tile">
              <div className="d-flex justify-content-center">
                <img src={d2} />
              </div>
              <p className="text-dark m-0 py-3 text-center font-weight-bold">
                Men's Shirt Offer
              </p>
              <div className="text-center py-3">
                <button className="btn btn-primary btn-sm solid-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-tile">
              <div className="d-flex justify-content-center">
                <img src={d3} />
              </div>
              <p className="text-dark m-0 py-3 text-center font-weight-bold">
                Men's Shirt Offer
              </p>
              <div className="text-center py-3">
                <button className="btn btn-primary btn-sm solid-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="image-tile">
              <div className="d-flex justify-content-center">
                <img src={d4} />
              </div>
              <p className="text-dark m-0 py-3 text-center font-weight-bold">
                Men's Shirt Offer
              </p>
              <div className="text-center py-3">
                <button className="btn btn-primary btn-sm solid-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-tile">
              <div className="d-flex justify-content-center">
                <img src={d5} />
              </div>
              <p className="text-dark m-0 py-3 text-center font-weight-bold">
                Men's Shirt Offer
              </p>
              <div className="text-center py-3">
                <button className="btn btn-primary btn-sm solid-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="image-tile">
              <div className="d-flex justify-content-center">
                <img src={d6} />
              </div>
              <p className="text-dark m-0 py-3 text-center font-weight-bold">
                Men's Shirt Offer
              </p>
              <div className="text-center py-3">
                <button className="btn btn-primary btn-sm solid-button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImagesTile;
