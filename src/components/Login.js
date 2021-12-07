import React from "react";
import './Login.css';


export default function Login() {
  return (
    <div className="login">
      <h2 className="login__header">
        Вход
      </h2>
      <form className="form" id="sign-in">
        <input className="form__input" name="email" type="email" placeholder="Email" />
        <input className="form__input" name="password" type="text" placeholder="Пароль" />
      </form>
      <button className="form__submit-button" type="submit" id="login-button">
        Войти
      </button>
    </div>
  );
}
