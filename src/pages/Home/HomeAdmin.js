import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container } from "../../global/index.js";
import admin from "../../assets/admin.png";
import users from "../../assets/users.png";
import comercio from "../../assets/shop.png";
import back from "../../assets/logout.png";

export default class HomeAdmin extends Component {
  render() {
    document.title = "Admin Home";

    return (
      <Container>
        <div className="container">
          <div className="div-logo">
            <img className="card-logo" src={admin} />
          </div>
          <p className="nome-page">Administrador</p>
          <div className="div-container">
            <div className="cards">
              <div className="div-column">
                <Link className="link" to={"/users"}>
                  <button className="card">
                    <div className="div-card-logo">
                      <img className="card-logo" src={users} />
                    </div>
                    <p className="title-card">Usuários</p>
                  </button>
                </Link>
              </div>
            </div>

            <div className="cards">
              <div className="div-column">
                <Link className="link" to={"/commerces"}>
                  <button className="card">
                    <div className="div-card-logo">
                      <img className="card-logo" src={comercio} />
                    </div>
                    <p className="title-card">Comércios</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Link className="link" to={"/"}>
            {" "}
            <button className="button" type="submit">
              Sair
              <img className="imgg" src={back} />
            </button>
          </Link>
          {/* <Footer /> */}
        </div>
      </Container>
    );
  }
}
