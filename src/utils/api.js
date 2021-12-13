class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._urlAuth = options.urlAuth;
    this._headersAuth = options._headersAuth;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`СМЭРТ: ${res.status}`);
  }

  getAllInfo() {
    return Promise.all([this.getInitialCard(), this.getUserInfo()]);
  }

  getInitialCard() {
    return fetch(this._url + "/cards", {
      headers: this._headers
    })
      .then(this._checkResponse);
  };

  getUserInfo() {
    return fetch(this._url + "/users/me", {
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  patchUserInfo(data) {
    return fetch(this._url + "/users/me", {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(this._checkResponse)
  }

  patchAvatar(data) {
    return fetch(this._url + "/users/me/avatar", {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(this._checkResponse)
  }

  postNewCards(data) {
    return fetch(this._url + "/cards", {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(this._checkResponse)
  }

  putMyLike(cardId) {
    return fetch(this._url + "/cards/likes/" + cardId, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  deleteMyLike(cardId) {
    return fetch(this._url + "/cards/likes/" + cardId, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  deleteCard(id) {
    return fetch(this._url + "/cards/" + id, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  registration({password, email}) {
    return fetch("https://auth.nomoreparties.co/signup", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password,
        email
      })
    })
      .then(this._checkResponse)
  }

  login(data) {
    return fetch(this._urlAuth + "/signin", {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        password: data.password,
        email: data.email
      })
    })
      .then(this._checkResponse)
  }

  checkToken() {
    return fetch(this._urlAuth + "/users/me", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(this._checkResponse)
  }
};

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-29",
  urlAuth: "https://auth.nomoreparties.co",
  headers: {
    Authorization: "3e854f17-4e78-4803-83c1-6cbecd942932",
    'Content-Type': 'application/json'
  }
});



export default api;

