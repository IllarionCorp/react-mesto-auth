import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditeProfilePopup(props) {

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: name,
      about: description
    });
  }

  React.useEffect(() => {
    if (props.isOpen === true) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [props.isOpen, currentUser]);

  return (
    <PopupWithForm id="#profile" name="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input name="name" type="text" id="name" className="fields__input" value={name} minLength="2" maxLength="40" required onChange={handleNameChange} />
      <span id="name-error" className="fields__input-error"></span>
      <input name="about" type="text" id="about" className="fields__input" minLength="2" maxLength="200" required onChange={handleDescriptionChange} value={description} />
      <span id="about-error" className="fields__input-error"></span>
    </PopupWithForm>
  );
}
