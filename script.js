async function busacEndereco(cep) {
    try {
        var consultaCep = await fetch(`http://viacep.com.br/ws/${cep}/json`)    
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida) {
            throw Error('CEP nao existente!');
        }
        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    }
    catch (erro) {
        console.log(erro);
    }    
}   





