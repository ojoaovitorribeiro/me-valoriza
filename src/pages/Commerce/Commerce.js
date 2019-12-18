import React, { Component } from "react";
import { Link } from "react-router-dom";

import ListCommerce from "./ListCommerce";
import comm from "../../assets/shop.png";
import back from "../../assets/back.png";
import plus from "../../assets/plus.svg";
import { Container } from "../../global/index.js";
import "../Home/index.css";
export default class Commerce extends Component {
  state = {
    commerces: []
  };

  componentDidMount() {
    this.loadCommerces();
  }

  loadCommerces = async () => {
    const token = await localStorage.getItem("token");
    fetch("http://localhost:3003/commerces", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setUsers(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUsers = data => {
    console.log(data);
    this.setState({ commerces: data });
    console.log(this.state.commerces);
  };

  render() {
    document.title = "Commerces";

    return (
      <Container>
        <div className="container">
          <div className="div-logo">
            <img className="card-logo" src={comm} alt="description of image" />
          </div>
          <p className="nome-page">Comércios</p>
          <div className="div-container"></div>
          <div>
            <div className="users-card">
              <p className="user">Comércio</p>
              <p className="user">Endereço (Logradouro, número)</p>
              <div className="buttons-user-actions">
                <p className="button-action">Excluir</p>
              </div>
            </div>
            <div className="card-users">
              {this.state.commerces.map(commerce => (
                <ListCommerce key={commerce._id} commerce={commerce} />
              ))}
            </div>
          </div>
          <Link className="link" to={"/newCommerce"}>
            {" "}
            <button className="button" type="submit">
              Novo
              <img className="imgg" src={plus} alt="novo-user" />
            </button>
          </Link>
          <Link className="link" to={"/homeAdmin"}>
            {" "}
            <button className="button" type="submit">
              Voltar
              <img className="imgg" src={back} alt="description of image" />
            </button>
          </Link>
          {/* <Footer /> */}
        </div>
      </Container>
    );
  }
}
