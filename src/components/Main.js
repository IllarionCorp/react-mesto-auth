import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import pen from "../images/pen.svg";
import vector from "../images/Vector.svg";
import Card from "./Card";

export default function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar"
          style={{ backgroundImage: `url(${currentUser.avatar}` }}
        >
          <button
            type="button"
            className="profile__button-edite-avatar"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__nickname">{currentUser.name}</h1>
          <p className="profile__profession">{currentUser.about}</p>
          <button
            type="button"
            className="profile__button-edite"
            onClick={props.onEditProfile}
          >
            <img
              src={pen}
              className="profile__image-edite"
              alt="Картинка с ручкой для окна редактирования профиля"
            />
          </button>
        </div>
        <button
          type="button"
          className="profile__button-add"
          onClick={props.onAddPlace}
        >
          <img
            src={vector}
            className="profile__image-add"
            alt="Картинка с плюсиком"
          />
        </button>
      </section>
      <section className="elements">
        {" "}
        {props.cards.map((data) => (
          <Card
            key={data._id}
            card={data}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
