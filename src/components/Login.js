import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import auth from "../utils/auth";


export default function Login(props) {
  const refEmail = React.useRef();
  const refPassword = React.useRef();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    auth
      .login({
        email: refEmail.current.value,
        password: refPassword.current.value,
      })
      .then((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          props.setLoginState(true);
          props.setEmail(refEmail.current.value);
          navigate("/");
        } else {
          props.handleInfoFailClick();
          console.log("Ошибка при входе");
        }
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
        />
        <button className="form__submit-button" type="submit" id="login-button">
          Войти
        </button>
      </form>
    </div>
  );
}
