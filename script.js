async function busacEndereco(cep) {
    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)    
        var consultaCepConvertida = await consultaCep.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP nao existente!');
        }
        console.log(consultaCepConvertida);
        return consultaCepConvertida;
    }
    catch (erro) {
        console.log(erro);
    }    
}   

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => busacEndereco(cep.value));





