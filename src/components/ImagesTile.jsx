import React, { Component } from "react";

export class ImagesTile extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-4 w-50 bg-dark">
            <img src />
          </div>
          <div className="col-md-4 w-50 bg-dark">
            <img src />
          </div>
          <div className="col-md-4 w-50 bg-dark">
            <img src />
          </div>
          <div className="col-md-4 w-50 bg-dark">
            <img src />
          </div>
          <div className="col-md-4 w-50 bg-dark">
            <img src />
          </div>
          <div className="col-md-4 w-50 bg-dark">
            <img src />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ImagesTile;
