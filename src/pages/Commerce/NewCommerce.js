import React, { Component } from "react";

import { Link, Redirect } from "react-router-dom";
import back from "../../assets/back.png";
import Footer from "../../components/Footer/index";
import plus from "../../assets/plus.svg";
import shop from "../../assets/shop.png";
import { Container } from "../../global/index.js";

export default class NewUser extends Component {
  state = {
    name: "",
    street_name: "",
    street_number: "",
    neighborhood: "",
    city: "",
    state: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const {
      name,
      street_name,
      street_number,
      neighborhood,
      city,
      state
    } = this.state;

    if (
      name === "" ||
      street_name === "" ||
      street_number === "" ||
      neighborhood === "" ||
      city === "" ||
      state === ""
    )
      return alert("Há campos obrigatórios em branco!");

    try {
      const token = await localStorage.getItem("token");
      fetch("http://localhost:3003/commerce", {
        method: "POST",
        body: JSON.stringify({
          name: this.state.name,
          street_name: this.state.street_name,
          street_number: this.state.street_number,
          neighborhood: this.state.neighborhood,
          city: this.state.city,
          state: this.state.state
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });

      alert("Comércio Cadastrado com Sucesso");
      this.redirecionar();
    } catch (err) {
      alert("Erro no Cadastro");
      console.log(err);
    }
  };

  redirecionar = () => {
    this.setState({ path: "/commerces" });
    this.setState({ from: true });
  };

  render() {
    if (this.state.from) {
      return <Redirect to={this.state.path} />;
    }
    document.title = "Add Commerces";

    return (
      <Container>
        <div className="container">
          <div className="div-logo">
            <img className="logo" src={shop} alt="description of image" />
          </div>
          <p className="nome-page">Novo Comércio</p>
          <form className="forms">
            <input
              type="text"
              placeholder="Nome"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Rua"
              value={this.state.street_name}
              onChange={e => this.setState({ street_name: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Número"
              value={this.state.street_number}
              onChange={e => this.setState({ street_number: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Bairro"
              value={this.state.neighborhood}
              onChange={e => this.setState({ neighborhood: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Cidade"
              value={this.state.city}
              onChange={e => this.setState({ city: e.target.value })}
              className="input"
            />
            <input
              type="text"
              placeholder="Estado"
              value={this.state.state}
              onChange={e => this.setState({ state: e.target.value })}
              className="input"
            />
            <button
              className="button"
              type="submit"
              onClick={this.handleSubmit}
            >
              Cadastrar
              <img className="imgg" src={plus} alt="description of image" />
            </button>
          </form>
          <Link className="link" to={"/commerces"}>
            <button className="button" type="submit">
              Voltar
              <img className="imgg" src={back} alt="description of image" />
            </button>
          </Link>
          <Footer />
        </div>
      </Container>
    );
  }
}
