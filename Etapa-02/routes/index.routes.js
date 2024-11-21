import {Router} from "express";

import chatRoutes from "./chat.routes.js"

const routes = Router();

routes.get("/", (req, res) => {
    return res.status(200).json({message: "Vai Corinthians!!!!"});
});

routes.use("/chat", charRoutes);

export default routes;