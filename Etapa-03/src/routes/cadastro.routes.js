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
    const {nome, email, telefone} = req.body;

    if (!nome || !email || !telefone) {
        return res.status(400).json({ message: "Dados inválidos" });
    }
    return res.status(200).json({ message: "Cadastro atualizado com sucesso" });
});

cadastroRoutes.delete("/remover", (req, res) => {
    const {email} = req.body;

    if (!email) {
        return res.status(400).json({ message: "Cadastro não encontrado" });
    }
    return res.status(200).json({ message: "Cadastro removido com sucesso" });
});

export default cadastroRoutes;