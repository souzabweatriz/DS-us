import  { Router } from "express";
import ChatRepository from "../models/chat/ChatRepository.js";

const chatRoutes = Router();
const userList = new ChatRepository ();

let chats = []

chatRoutes.get

export default chatRoutes;