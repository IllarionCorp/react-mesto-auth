import closeIcon from '../images/Close_Icon.svg';

export default function ImagePopup(props) {

  return (
    <div id="image" className={`popup ${props.card.open === true && 'popup_opened'}`}>
      <div className="popup__cont-img">
        <button type="button" className="popup__close-button" onClick={props.onClose}>
          <img
            id="image-closed" src={closeIcon} className="popup__close-icon" alt="крестик для закрытия диалогового окна"
          />
        </button>
        <img src={props.card.cardInfo.link} className="popup__image" alt="Изображение в карточке" />
        <p className="popup__label">{props.card.cardInfo.name}</p>
      </div>
    </div>);
}
