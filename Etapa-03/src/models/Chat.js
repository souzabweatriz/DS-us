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

    //A parte do new Intl.DateTimeFormat nós nunca tínhamos visto, demos uma pesquisada e nós vimos que essa função ajuda a formatar datas e horários de acordo com a localização, e no nosso caso nós colocamos a do Brasil (pt-BR).
    //Na parte hour: "2-digit" também não tínhamos entendido muito bem, mas pelo oque vimos e pesquisamos, ele dá esse comando para fazer com que as opções hour e minute retorne sempre com dois dígitos.
    //A função format está ligada com o Intl.DateTimeFormat, onde nós colocamos as informações sobre os horários, isso vai retornar para nós o resultado de acordo com as configurações fornecidas, como por exemplo: 08:45.

      const mensagemCompleta = `${data} - ${apelido}: ${mensagem}`;
      this.mensagens.push(mensagemCompleta);
    }
  }
    //Aqui a mensagem vai ser mostrada da seguinte forma: 08:45 - Alba: Obrigada pela sua participação!
  
  export default Chat;