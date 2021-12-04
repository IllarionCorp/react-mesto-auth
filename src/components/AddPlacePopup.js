import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: name,
      link: link
    });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm id="#add" name="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input name="title" type="text" id="title" className="fields__input" placeholder="Название" minLength="2" maxLength="30" required value={name} onChange={handleNameChange} />
      <span id="title-error" className="fields__input-error"></span>
      <input name="link" type="url" id="link" className="fields__input" required placeholder="Ссылка на картинку" value={link} onChange={handleLinkChange} />
      <span id="link-error" className="fields__input-error"></span>
    </PopupWithForm>
  );
}
