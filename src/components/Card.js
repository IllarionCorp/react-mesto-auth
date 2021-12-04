import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import trash from '../images/Trash.svg';


export default function Card(props) {


  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some(item => item._id === currentUser._id);
  const cardDeleteButtonClassName = (
    `element__trash ${!isOwn && 'element__trash_off'}`
  );
  const cardLikeButtonClassName = (
    `element__like ${isLiked && 'element__like_active'}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="element">
      <img src={props.card.link} className="element__image" alt="Пользовательское изображение" onClick={handleClick} />
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}>
        <img src={trash} className="element__trash-image" alt="Иконка для удаления карточки" />
      </button>
      <div className="element__footer">
        <h2 className="element__place-name">{props.card.name}</h2>
        <div className="element__like-container">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <p className="element__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
