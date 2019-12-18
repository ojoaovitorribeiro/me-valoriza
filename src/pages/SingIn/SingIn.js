import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import Footer from "../../components/Footer/index";
import enter from "../../assets/enter.png";
import logo from "../../assets/icone.svg";

import { Container } from "../../global/index.js";

export default class SingIn extends Component {
  state = {
    typeUser: "",
    nome: "",
    email: "",
    password: "",
    from: false,
    path: ""
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    if (email === "" || password === "") return alert("Há campos em branco!");

    try {
      const loga = await api.post("/sessions", {
        email: this.state.email,
        password: this.state.password
      });

      await localStorage.setItem("token", loga.data.token);

      if (loga.data.user.isAdmin === false) {
        this.setState({ path: "/home" });
      } else {
        this.setState({ path: "/homeAdmin" });
      }

      console.log(this.state.path);
      this.setState({ from: true });
      alert("Bem vindo!");
    } catch (err) {
      alert(
        "Erro na autenticação. Informe a um administrador, ou tente novamente."
      );
      console.log(err);
    }
  };

  render() {
    if (this.state.from) {
      return <Redirect to={this.state.path} />;
    }
    document.title = "Login";

    return (
      <Container>
        <div className="container">
          <div className="div-logo">
            <img className="logo" src={logo} alt="description of image" />
          </div>
          <p className="nome-page">Login</p>
          <form className="forms">
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              className="input"
            />
            <input
              type="password"
              placeholder="Senha"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              className="input"
            />
            <button
              className="button"
              type="submit"
              onClick={this.handleSubmit}
            >
              Entrar
              <img className="imgg" src={enter} alt="entrar" />
            </button>
          </form>
          <Footer />
        </div>
      </Container>
    );
  }
}
