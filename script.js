var consultaCep = fetch('http://viacep.com.br/ws/0100100/json')
       .then(resposta => resposta.json())
       .then(r => {
            if (r.erro) {
                throw Error('Esse cep nao existe!')
            } else 
                console.log(r)
        })            
        .catch(erro => console.log(erro));

console.log(consultaCep);



