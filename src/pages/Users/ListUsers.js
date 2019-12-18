import React, { Component } from "react";

// import { Container } "../../../global/index.js";
import "./index.css";
// import del from "../../assets/remove.png";
export default class ListUsers extends Component {
  render() {
    const { user } = this.props;
    return (
      // <Container>
      <div className="users-card">
        <p className="user">{user.name}</p>
        <p className="user">{user.email}</p>
        {/* <p className="user">{user.password}</p> */}
        {/* <p className="user">{user.isAdmin}</p> */}
        {/* <div className="buttons-user-actions">
          <button className="button-action">
            <img className="imgg" src={del} alt="description of image" />
          </button>
        </div> */}
      </div>
      // </Container>
    );
  }
}
