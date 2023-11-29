import axios from "axios";

export default class ChatService {
  static async getAllChatsByUserId(userId) {
    return axios.get("http://localhost/chats", {params : {userId}})
  }

  static async getChatByChatId(userId, chatId) {
    return axios.get("http://localhost/chats/" + chatId, {params : {userId}})
  }
}