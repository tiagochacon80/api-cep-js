async function busacEndereco() {

    try {
        var consultaCep = await fetch('http://viacep.com.br/ws/01001250/json')    
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida) {
            throw Error('CEP nao existente!');
        }
        console.log(consultaCepConvertida);
    }
    catch (erro) {
        console.log(erro);
    }
    
}       

busacEndereco();



