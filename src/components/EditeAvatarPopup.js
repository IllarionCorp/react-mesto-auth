import React from "react";
import PopupWithForm from "./PopupWithForm";


export default function EditeAvatarPopup(props) {

  const ref = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: ref.current.value
    });
  }

  React.useEffect(() => {
    ref.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm id="avatar-update" name="Обновить аватар" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
      <input ref={ref} name="avatar" type="url" id="avatar" className="fields__input" placeholder="Ссылка на картинку" required />
      <span id="avatar-error" className="fields__input-error"></span>
    </PopupWithForm>
  );
}
