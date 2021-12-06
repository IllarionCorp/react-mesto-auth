import React from "react";
import './Login.css';


export default function Login() {
  return (
    <div className="login">
      <h1 className="login__header">
        Вход
      </h1>
      <form className="fields" id="sign-in">
        <input className="fields__input" name="email" type="email" placeholder="Email" />
        <input className="fields__input" name="password" type="text" placeholder="Пароль" />
      </form>
      <button className="fields__submit-button" type="submit" id="login-button">
        Войти
      </button>
    </div>
  );
}
