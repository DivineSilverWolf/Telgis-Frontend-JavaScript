import axios from "axios";

export default class UserService {

  static async getUsersFromChat(chatId) {
    const users = await axios.get("http://localhost/chats/" + chatId)
    return users
  }

  static async getFriendsByUserId(userId) {
    return axios.get("http:///friends/" + userId)
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }

  static async postUser(login, password) {
    return axios.post("http://192.168.43.17:8000/users/", { 
      username : login,
      email : null ,
      password_hash : password,
      avatar_url : null,
      status : null
    })
      .then(res => console.log(res))
      .catch(e => console.log(e))

    // return axios.post('https://reqres.in/api/users/2', { 
    // "name" : 'a',
    //     "job" : 'b'
    //   }
    // )
  }

  static async postUserLocationBuUserId(userId, {latitude, longitude}) {
    return await axios.post("http://localhost/user/" + userId, {latitude, longitude})
      .then( res => console.log(res))
      .catch(e => console.log(e))
  }
}
