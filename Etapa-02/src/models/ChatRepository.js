import chatRoutes from "../models/Chat.js"
import Chat from "./Chat.js"

class ChatRepository {
    constructor () {
        this.chat = []
    }
    allchats() {
        return this.chat
    }
}