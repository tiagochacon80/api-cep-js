async function busacEndereco() {
    var consultaCep = await fetch('http://viacep.com.br/ws/01001000/json')    
    var consultaCepConvertida = await consultaCep.json();
    console.log(consultaCepConvertida);
}       

busacEndereco();



