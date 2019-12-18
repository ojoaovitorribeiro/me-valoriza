import styled from "styled-components";

export const Container = styled.div`
  .container {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  background-color: #fafad2;

  .div-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15vh;
    width: 80px;
    height: 80px;
  }

  .logo {
    width: 50%;
    height: 50%;
  }

  .nome-page {
    margin: 0;
    margin-top: 3vh;
    margin-bottom: 3vh;
    font-size: 26px;
    font-weight: lighter;
    color: #8b4513;
  }

  .forms {
    width: 50vh;
    height: 35vh;
    margin: 0;
    margin-top: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  /* ::-webkit-input-placeholder {
    color: #708090;
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: lighter;
    padding-bottom: 10px;
  } */

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    margin-bottom: 4vh;
    width: 30vh;
    height: 5.5vh;
    border: none;
    border-radius: 5px;
    background: #8b4513;
    font-family: "Open Sans", sans-serif;
    font-weight: lighter;
    color: rgb(100, 181, 246);
    font-size: 21px;
  }

  .imgg {
    margin-left: 2vh;
    width: 20px;
    height: 20px;
  }

  .input {
    margin: 0;
    width: 50vh;
    height: 4vh;
    background: none;
    border: none;
    outline: none;
    border-bottom: solid 1px #708090;
    box-shadow: 0px 1px 0px rgba(139, 69, 19, 0.2);
  }

  .select {
    padding: 0;
    margin: 0;
    width: 50vh;
    height: 4vh;
    background: none;
    border: none;
    outline: none;
    color: rgb(0, 0, 0);
  }
`;
