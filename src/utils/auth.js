class Auth {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`СМЭРТ: ${res.status}`);
  }

  registration({ password, email }) {
    return fetch(this._url + "/signup", {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email
      })
    })
      .then(this._checkResponse)
  }

  login(data) {
    return fetch(this._url + "/signin", {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password: data.password,
        email: data.email
      })
    })
      .then(this._checkResponse)
  }

  checkToken() {
    return fetch(this._url + "/users/me", {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(this._checkResponse)
  }
}

const auth = new Auth({
  url: "https://auth.nomoreparties.co",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default auth;
