import React from "react";
import './Register.css';
import { Link, Navigate } from "react-router-dom";
import api from "../utils/api";

export default function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSetEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleSetPassword(evt) {
    setPassword(evt.target.value);
  }
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log(password)
    api
      .registration({
       password: password,
       email: email
      })
      .then(() => {
        props.handleInfoSuccessClick();
        setTimeout(() => {
          return(
            <Navigate to="/" />
          );
        }, 5000)
      })
      .catch((err) => {
        props.handleInfoFailClick();
        console.log(err);
      })
}
  

  return (
    <div className="register">
      <h2 className="register__header">
        Регистрация
      </h2>
      <form className="form" id="sign-up" onSubmit={handleSubmit}>
        <input className="form__input" name="email" type="email" placeholder="Email" onChange={handleSetEmail} required />
        <input className="form__input" name="password" type="text" placeholder="Пароль" onChange={handleSetPassword} required />
        <button className="form__submit-button" type="submit" id="register-button" onClick={props.onInfoClick} >
        Зарегистрироваться
      </button>
      </form>
      <p className="register__question">Уже зарегистрированы? <Link to="/login" className="register__login-link">Войти</Link></p>
    </div>
  );
}
