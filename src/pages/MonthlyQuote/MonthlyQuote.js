import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import ListItens from "../Cesta Básica/ListItens";
import { Container } from "../../global/index.js";

import quote from "../../assets/quote.png";
import back from "../../assets/back.png";
import plus from "../../assets/plus.svg";

export default class Cesta extends Component {
  state = {
    itens: [],
    mes: ""
  };

  componentDidMount() {
    this.loadItens();
  }

  loadItens = async () => {
    const token = await localStorage.getItem("token");
    fetch("http://localhost:300/listItem", {
      method: "POST",
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

  handleSubmit = async () => {
    try {
      const token = await localStorage.getItem("token");
      fetch("http://localhost:3003/monthlyQuote", {
        method: "POST",
        body: {
          mes: this.state.mes
        },
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

      alert("Cotação Cadastrada");
      this.redirecionar();
    } catch (err) {
      alert("Erro no Cadastro");
      console.log(err);
    }
  };

  redirecionar = () => {
    this.setState({ path: "/home" });
    this.setState({ from: true });
  };

  render() {
    if (this.state.from) {
      return <Redirect to={this.state.path} />;
    }
    document.title = "Cotação";

    return (
      <Container>
        <div className="container">
          <div className="div-logo">
            <img className="card-logo" src={quote} />
          </div>
          <p className="nome-page">Cotação Mensal</p>
          <div className="div-container">
            <select
              className="button"
              type="submit"
              value={this.state.month}
              onChange={e => this.setState({ mes: e.target.value })}
            >
              <option>Selecionar Mês</option>
              <option>Janeiro</option>
              <option>Fevereiro</option>
              <option>Março</option>
              <option>Abril</option>
              <option>Maio</option>
              <option>Junho</option>
              <option>Julho</option>
              <option>Agosto</option>
              <option>Setembro</option>
              <option>Outubro</option>
              <option>Novembro</option>
              <option>Dezembro</option>
            </select>
          </div>
          <div>
            <div className="users-card">
              <p className="user">Quantidade</p>
              <p className="user">Descrição</p>
              <p className="user">Valor Unitário</p>
              <div className="buttons-user-actions">
                <p className="button-action">Remover</p>
              </div>
            </div>
            <div className="card-users">
              {this.state.itens.map(item => (
                <ListItens key={item._id} item={item} />
              ))}
            </div>
          </div>
          <button className="button" type="submit" onClick={this.handleSubmit}>
            Salvar
            <img className="imgg" src={plus} />
          </button>
          <Link className="link" to={"/home"}>
            {" "}
            <button className="button" type="submit">
              Voltar
              <img className="imgg" src={back} alt="seta-direita" />
            </button>
          </Link>
        </div>
      </Container>
    );
  }
}
