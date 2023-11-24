import axios from "axios";

export default class ChatService {
  static async getAllChatsByUserId(userId) {
    return axios.get("http://localhost/chats", {params : {userId}})
  }

}