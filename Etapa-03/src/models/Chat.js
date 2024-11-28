class Chat {
    constructor() {
      this.mensagens = [];
    } 
  //Aqui foi criada a classe Chat com um constructor com um atributo de mensagens 
    enviarMensagem(apelido, mensagem) {
  //Aqui foi criado um atributo de enviar mensagens que tem apelido e mensagens 
      const data = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date());
    
      const mensagemCompleta = `${data} - ${apelido}: ${mensagem}`;
      this.mensagens.push(mensagemCompleta);
    }
  }
  
  export default Chat;
