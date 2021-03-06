import React, { Component } from "react";
import { Link } from "react-router-dom";

import ListItens from "./ListItens";
import cest from "../../assets/cesta.png";
import plus from "../../assets/plus.svg";
import back from "../../assets/back.png";
import { Container } from "../../global/index";
// import api from
// ("../../services/api");
export default class Cesta extends Component {
  state = {
    itens: []
  };

  componentDidMount() {
    // executado quando o component for exibido
    this.loadItens();
  }

  loadItens = async () => {
    // deve ser arrow function esta função, pq este não pertende ao react, fonte: nossa mente. O "this" não se´ra permitido
    // const responsee = await api.get("/listItem");
    // console.log(responsee.data);

    const token = await localStorage.getItem("token");
    fetch("http://localhost:3003/listItem", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(res => res.json())
      .then(data => {
        this.setItens(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  setItens = data => {
    console.log(data);
    this.setState({ itens: data });
    console.log(this.state.itens);
  };

  render() {
    document.title = "Cesta ";

    return (
      <Container>
        <div className="container">
          <div className="div-logo">
            <img className="card-logo" src={cest} alt="description of image" />
          </div>
          <p className="nome-page">Cesta Básica</p>
          <div className="div-container">
            <Link className="link" to={"/newItem"}>
              {" "}
              <button className="button " type="submit">
                Novo Item
                <img className="imgg" src={plus} alt="description of image" />
              </button>
            </Link>
          </div>
          <div>
            <div className="users-card">
              <p className="user">Quantidade</p>
              <p className="user">Descrição</p>
              <p className="user">Valor Unitário</p>
              <div className="buttons-user-actions">
                <p className="button-action">Excluir</p>
              </div>
            </div>
            <div className="card-users">
              {this.state.itens.map(item => (
                <ListItens key={item._id} item={item} />
              ))}
            </div>
          </div>
          <Link className="link" to={"/home"}>
            {" "}
            <button className="button" type="submit">
              Voltar
              <img className="imgg" src={back} alt="description of image" />
            </button>
          </Link>
        </div>
      </Container>
    );
  }
}
