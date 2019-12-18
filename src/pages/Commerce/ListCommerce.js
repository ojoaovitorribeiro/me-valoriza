import React, { Component } from "react";
// import del from "../../assets/remove.png";

export default class ListCommerce extends Component {
  render() {
    const { commerce } = this.props;
    return (
      <div className="users-card">
        <p className="user">{commerce.name}</p>
        <p className="user">
          {commerce.street_name}, {commerce.street_number}
        </p>

        {/* <div className="buttons-user-actions">
          <button className="button-action">
            <img
              className="button-action-image"
              src={del}
              alt="description of image"
            />
          </button>
        </div> */}
      </div>
    );
  }
}
