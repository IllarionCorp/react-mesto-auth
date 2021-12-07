import React from "react";
import "../index.css";
import api from "../utils/api";
import Footer from "./Footer";
import Header from "./Header.js";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditeProfilePopup from "./EditeProfilePopup";
import EditeAvatarPopup from "./EditeAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import { Route, Routes } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    cardInfo: {},
    open: false,
  });
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [logginIn, setLogginIn] = React.useState(true);

  React.useEffect(() => {
    api
      .getAllInfo()
      .then(([resCard, resInfo]) => {
        setCurrentUser(resInfo);
        setCards(resCard);
      })
      .catch((err) => alert("Смэрт запроса к API: " + err));
  }, []);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({ cardInfo: card, open: true });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (isLiked === false) {
      api
        .putMyLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => alert("Cмэрт постановки лайка: " + err));
    } else {
      api
        .deleteMyLike(card._id)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => alert("Смэрт снятия лайка: " + err));
    }
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => setCards((list) => list.filter((c) => c._id !== card._id && c)))
      .catch((err) => alert("Смэрт удаления карточки: " + err));
  }

  function handleUpdateUser(data) {
    api
      .patchUserInfo(data)
      .then((newInfo) => {
        setCurrentUser(newInfo);
        closeAllPopups();
      })
      .catch((err) => alert("Смэрт обновления профиля: " + err));
  }

  function handleUpdateAvatar(data) {
    api
      .patchAvatar(data)
      .then((newInfo) => {
        setCurrentUser(newInfo);
        closeAllPopups();
      })
      .catch((err) => alert("Смэрт обновления аватара: " + err));
  }

  function handleAddCard(data) {
    api
      .postNewCards(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => alert("Смэрт новой карточки: " + err));
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ cardInfo: {}, open: false });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <EditeProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <EditeAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddPlace={handleAddCard}
      />
      <PopupWithForm id="delete-card" name="Вы уверены?" />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      {/* <div id="delete-card" className="popup">
        <div className="popup__container">
          <button type="button" className="popup__close-button">
            <img id="image-closed" src={Close_Icon} className="popup__close-icon" alt="крестик для закрытия диалогового окна" />
          </button>
          <h2 className="popup__description">Вы уверены?</h2>
          <form id="delete-cards" name="delete-form" className="fields fields_delete-card" noValidate>
            <button id="delete-button" type="submit" className="fields__submit-button fields__submit-button_delete">
              Да
            </button>
          </form>
        </div>
        </div> */}
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main
          cards={cards}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />} />
      </Routes>
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
