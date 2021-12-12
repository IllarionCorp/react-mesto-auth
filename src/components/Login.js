import React from "react";
import "./Login.css";
import api from "../utils/api";
import { Navigate } from "react-router-dom";

export default function Login(props) {
  const refEmail = React.useRef();
  const refPassword = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    api
      .login({
        email: refEmail.current.value,
        password: refPassword.current.value,
      })
      .then(() => {
        return <Navigate to="/" />;
      })
      .catch((err) => {
        props.handleInfoFailClick();
        console.log(err);
      });
  }

  return (
    <div className="login">
      <h2 className="login__header">Вход</h2>
      <form className="form" id="sign-in" onSubmit={handleSubmit}>
        <input
          className="form__input"
          name="email"
          type="email"
          placeholder="Email"
          ref={refEmail}
          required
        />
        <input
          className="form__input"
          name="password"
          type="text"
          placeholder="Пароль"
          ref={refPassword}
          required
          minLength="8"
        />
        <button className="form__submit-button" type="submit" id="login-button">
          Войти
        </button>
      </form>
    </div>
  );
}
