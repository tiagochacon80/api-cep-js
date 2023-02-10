var consultaCep = fetch('http://viacep.com.br/ws/01001250/json')
       .then(resposta => resposta.json())
       .then(r => {
            if (r.erro) {
                throw Error('Esse cep nao existe!')
            } else 
                console.log(r)
        })            
        .catch(erro => console.log(erro))
        .finally(mensagem => console.log('Processamento concluido!'));

console.log(consultaCep);



