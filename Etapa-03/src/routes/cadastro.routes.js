import { Router } from "express";

const cadastroRoutes = Router();

let cadastros = [];

cadastroRoutes.get("/listar", (req, res) => {
    return res.status(200).json(cadastros);
});

cadastroRoutes.post("/adicionar", (req, res) => {
    const { nome, email, telefone } = req.body;

    if (!nome || !email || !telefone) {
        return res.status(400).json({ message: "Dados inválidos" });
    }

    cadastros.push({ nome, email, telefone });

    return res.status(201).json({ nome, email, telefone });
});

cadastroRoutes.put("/atualizar", (req, res) => {

});

cadastroRoutes.delete("/remover", (req, res) => {

});

export default cadastroRoutes;