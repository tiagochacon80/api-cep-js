var consultaCep = fetch('http://viacep.com.br/ws/01001000/json')
       .then(resposta => resposta.json())
       .then(r => console.log(r));

console.log(consultaCep);



