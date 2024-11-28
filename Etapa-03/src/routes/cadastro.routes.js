import { Router } from "express";

// Cria uma nova instância do roteador
const cadastroRoutes = Router();

// Array para armazenar os cadastros
let cadastros = [];

// Rota para listar todos os cadastros
cadastroRoutes.get("/listar", (req, res) => {
    // Retorna a lista de cadastros com status 200
    return res.status(200).json(cadastros);
});

// Rota para adicionar um novo cadastro
cadastroRoutes.post("/adicionar", (req, res) => {
    // Extrai os dados do corpo da requisição
    const { nome, email, telefone } = req.body;

    // Verifica se os dados são válidos
    if (!nome || !email || !telefone) {
        // Retorna um status 400 com uma mensagem de erro se os dados forem inválidos
        return res.status(400).json({ message: "Dados inválidos" });
    }

    // Adiciona o novo cadastro ao array de cadastros
    cadastros.push({ nome, email, telefone });

    // Retorna um status 201 com os dados do novo cadastro
    return res.status(201).json({ nome, email, telefone });
});

// Rota para atualizar um cadastro existente
cadastroRoutes.put("/atualizar", (req, res) => {
    // Extrai os dados do corpo da requisição
    const { nome, email, telefone } = req.body;

    // Verifica se os dados são válidos
    if (!nome || !email || !telefone) {
        // Retorna um status 400 com uma mensagem de erro se os dados forem inválidos
        return res.status(400).json({ message: "Dados inválidos" });
    }

    // Aqui você pode adicionar a lógica para atualizar o cadastro específico
    // (não implementado no código atual)

    // Retorna um status 200 com uma mensagem de sucesso
    return res.status(200).json({ message: "Cadastro atualizado com sucesso" });
});

// Rota para remover um cadastro existente
cadastroRoutes.delete("/remover", (req, res) => {
    // Extrai o email do corpo da requisição
    const { email } = req.body;

    // Verifica se o email é válido
    if (!email) {
        // Retorna um status 400 com uma mensagem de erro se o email for inválido
        return res.status(400).json({ message: "Cadastro não encontrado" });
    }

    // Aqui você pode adicionar a lógica para remover o cadastro específico
    // (não implementado no código atual)

    // Retorna um status 200 com uma mensagem de sucesso
    return res.status(200).json({ message: "Cadastro removido com sucesso" });
});

export default cadastroRoutes;
