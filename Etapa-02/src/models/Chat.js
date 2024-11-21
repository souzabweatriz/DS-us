class Chat{
    constructor(apelido, mensagens){
        this.apelido = apelido
        this.mensagens = mensagens
    } enviarMensagem(apelido, mensagens) {
        return Date.now()
    }
}

export default Chat;

