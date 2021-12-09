import React from "react";
import closeIcon from '../images/Close_Icon.svg';

export default function InfoTooltip(props) {
  return (
    <div className = {`popup ${props.isOpen === true && 'popup_opened'}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={props.onClose}>
          <img id="profile-closed" src={closeIcon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" />
        </button>
        {props.children}
      </div>
    </div>
  );
}
