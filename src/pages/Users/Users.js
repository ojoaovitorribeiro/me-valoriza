import React, { Component } from "react";
import { Link } from "react-router-dom";

// import Footer from "../../../components/Footer/index";
import ListUsers from "./ListUsers";

import use from "../../assets/user.png";
import back from "../../assets/back.png";
import { Container } from "../../global/index.js";
import plus from "../../assets/plus.svg";

export default class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    const token = await localStorage.getItem("token");
    fetch("http://localhost:3003/users", {
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
    this.setState({ users: data });
    console.log(this.state.users);
  };

  render() {
    document.title = "Users";

    return (
      <Container>
        <div className="container">
          <div className="div-logo">
            <img className="card-logo" src={use} />
          </div>
          <p className="nome-page">Manter Usuários</p>
          <div className="div-container">
            <Link className="link" to={"/newUser"}>
              {" "}
              <button className="button" type="submit">
                Novo Usuário
                <img className="imgg" src={plus} />
              </button>
            </Link>
          </div>
          <div>
            <div className="users-card">
              <p className="user">Nome</p>
              <p className="user">Email</p>
              <div className="buttons-user-actions">
                <p className="button-action">Excluir</p>
              </div>
            </div>
            <div className="card-users">
              {this.state.users.map(user => (
                <ListUsers key={user._id} user={user} />
              ))}
            </div>
          </div>
          <Link className="link" to={"/homeAdmin"}>
            {" "}
            <button className="button" type="submit">
              Voltar
              <img className="imgg" src={back} />
            </button>
          </Link>
          {/* <Footer /> */}
        </div>
      </Container>
    );
  }
}
