import axios from "axios";

export default class UserService {
  static base_url = "http://localhost:8000"

  // static async getUsersFromChat(chatId) {
  //   const users = await axios.get(`${this.base_url}/chats/` + chatId)
  //   return users
  // }

  // static async getFriendsByUserId(userId) {
  //   return axios.get("friends/" + userId)
  //     .then(res => console.log(res))
  //     .catch(e => console.log(e))
  // }

  static async postNewUser(login, password) {
    try {
      const res = await axios.post(`${this.base_url}/registration`, { login, password })

      if (res.ok) {
        return res
      }

      console.log("Error: " + res.status + res.statusText)
      return null
    }

    catch(e) {
      console.log(e)
      return null
    }
  }

  static async postRegisterUser(login, password) {
    try {
      const res = await axios.post(`${this.base_url}/auth/${login}`, { password })
      
      console.log(res)

      if (res.ok) {
        return res.data
      }

      console.log("Error: " + res.status + res.statusText)
      return null
    }

    catch(e) {
      console.log(e)
      return null
    }
  }

  static async postUserLocationByUserId(userId, {latitude, longitude}) {
    return await axios.post("http://localhost/user/" + userId, {latitude, longitude})
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }

  static async postFriendRequest(myLogin, friendLogin) {
    try {
      const res = await axios.post(`${this.base_url}/friends/add/${friendLogin}`, { myLogin })

      if (res.ok) {
        return res.data
      }

      console.log("Не удалось отправить заявку в друзья: " + res.status + res.statusText)
      return null
    }

    catch(e) {
      console.log(e)
      return null
    }
  }

  static async getFriendConfirmation() {
    try {
      const res = await axios.get(`${this.base_url}/friends/confirm/`)

      if (res.ok) {
        return res.data
      }

      console.log("Ошибка при получении ответа от друга: " + res.status + res.statusText)
      return null
    }

    catch(e) {
      console.log(e)
      return null
    }
  }

  static async postFriendInvitation(userId, frinedId) {
    return await axios.post("http://localhost/users");
  }

  static async getUsers(login) {
    try {
      const res = await axios.get(`${this.base_url}/friends/${login}`)

      if (res.ok) {
        return res.data
      }

      console.log("Ошибка при получении друзей: " + res.status + res.statusText)
      return null
    }

    catch(e) {
      console.log(e)
      return null
    }
  }

}
