import React, { Component } from "react";
import del from "../../assets/remove.png";

export default class ListItens extends Component {
  state = {
    itens: []
  };

  componentDidMount() {
    this.loadItens();
  }

  loadItens = async () => {
    const token = await localStorage.getItem("token");
    fetch("http://localhost:3003/listItens", {
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
    const { item } = this.props;
    return (
      <div className="itens-card">
        <p className="itens">{item.qtd}</p>
        <p className="itens">{item.descricao}</p>
        <p className="itens">{item.valor}</p>
        {/* <div className="buttons-user-actions">
          <button className="button-action">
            <img className="button-action-image" src={del} alt="seta-direita" />
          </button>
        </div> */}
      </div>
    );
  }
}
