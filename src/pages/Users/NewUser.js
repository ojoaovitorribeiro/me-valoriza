import React, { Component } from "react";

import { Link, Redirect } from "react-router-dom";

// import Footer from "../../../components/Footer/index";
import back from "../../assets/back.png";
import cads from "../../assets/plus.svg";
import reg from "../../assets/register.png";
import { Container } from "../../global/index";
export default class NewUser extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    isAdmin: false,
    from: false,
    path: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { name, email, password } = this.state;

    if (name === "" || email === "" || password === "")
      return alert("Há campos obrigatórios em branco!");

    try {
      const token = await localStorage.getItem("token");
      fetch("http://localhost:3003/createUser", {
        method: "POST",
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          isAdmin: this.state.isAdmin
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

      alert("Usuário Cadastrado com Sucesso");
      this.redirecionar();
    } catch (err) {
      alert("Erro no Cadastro");
      console.log(err);
    }
  };

  redirecionar = () => {
    this.setState({ path: "/users" });
    this.setState({ from: true });
  };

  render() {
    if (this.state.from) {
      return <Redirect to={this.state.path} />;
    }
    document.title = "Add User";

    return (
      <Container>
        <div className="container">
          <div className="div-logo">
            <img className="logo" src={reg} alt="description of image" />
          </div>
          <p className="nome-page">Novo Usuário</p>
          <form className="forms">
            <input
              type="text"
              placeholder="Nome"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
              className="input"
            />
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
            <input
              type="text"
              placeholder="Administrador? {false} or {true}"
              value={this.state.isAdmin}
              onChange={e => this.setState({ isAdmin: e.target.value })}
              className="input"
            />
            <button
              className="button"
              type="submit"
              onClick={this.handleSubmit}
            >
              Cadastrar
              <img className="imgg" src={cads} alt="description of image" />
            </button>
          </form>

          <Link className="link" to={"/homeAdmin"}>
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
