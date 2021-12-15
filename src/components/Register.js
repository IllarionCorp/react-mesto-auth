import React from "react";
import './Register.css';
import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";


export default function Register(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  function handleSetEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleSetPassword(evt) {
    setPassword(evt.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log(password)
    auth
      .registration({
       password: password,
       email: email
      })
      .then(() => {
        props.handleInfoSuccessClick();
        setTimeout(() => {
          navigate("/");
          props.onClose();
        }, 1000)
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
        <input className="form__input" name="email" type="email" placeholder="Email" onChange={handleSetEmail} value={email} required />
        <input className="form__input" name="password" type="text" placeholder="Пароль" onChange={handleSetPassword} value={password} required />
        <button className="form__submit-button" type="submit" id="register-button">
        Зарегистрироваться
      </button>
      </form>
      <p className="register__question">Уже зарегистрированы? <Link to="/login" className="register__login-link">Войти</Link></p>
    </div>
  );
}
