import React from "react";
import './Register.css';
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <h2 className="register__header">
        Регистрация
      </h2>
      <form className="form" id="sign-up">
        <input className="form__input" name="email" type="email" placeholder="Email" />
        <input className="form__input" name="password" type="text" placeholder="Пароль" />
      </form>
      <button className="form__submit-button" type="submit" id="register-button">
        Зарегистрироваться
      </button>
      <p className="register__question">Уже зарегистрированы? <Link to="/login" className="register__login-link">Войти</Link></p>
    </div>
  );
}
