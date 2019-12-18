import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Container } from "../../global/index.js";
import icon from "../../assets/ícone2.jpg";
import cesta from "../../assets/cart.png";
import logout from "../../assets/logout.png";
import quote from "../../assets/quote.png";
import item from "../../assets/search.png";
export default class Home extends Component {
  render() {
    document.title = "Public Home";

    return (
      <Container>
        <div className="container">
          <div className="div-logo">
            <img className="card-logo" src={icon} alt="aa" />
          </div>
          <p className="nome-page">Usuário Padrão</p>
          <div className="div-container">
            <div className="cards">
              <div className="div-column">
                <Link className="link" to={"/cesta"}>
                  <button className="card">
                    <div className="div-card-logo">
                      <img className="card-logo" src={cesta} />
                    </div>
                    <p className="title-card">Manter Cesta Básica</p>
                  </button>
                </Link>
              </div>
            </div>

            <div className="cards">
              <div className="div-column">
                <Link className="link" to={"/monthlyQuote"}>
                  <button className="card">
                    <div className="div-card-logo">
                      <img className="logo" src={quote} />
                    </div>
                    <p className="title-card">Cotação Mensal</p>
                  </button>
                </Link>
              </div>
            </div>

            <div className="cards">
              <div className="div-column">
                <Link className="link" to={"/item"}>
                  <button className="card">
                    <div className="div-card-logo">
                      <img className="logo" src={item} />
                    </div>
                    <p className="title-card">Itens</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <Link className="link" to={"/"}>
            {" "}
            <button className="button" type="submit">
              Sair
              <img className="imgg" src={logout} />
            </button>
          </Link>
          {/* <Footer /> */}
        </div>
      </Container>
    );
  }
}
