function efetuarCalculoIMC(peso, altura){
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function retornarStatusIMC(imc){
    let status;

    if (imc < 18.5){
        status = "Abaixo do Peso - Tá só o OSSO!";
    } else if (imc >=18.5 && imc < 24.9){
        status = "Peso Norma - Você não vai sair voando!";
    } else if ( imc >= 24.9 && imc < 30){
        status = "Acima do Peso - No primeiro passo atola!";
    } else {
        status = "OBESO - Não sai nem do lugar!"
    }
    return status
}

function validaParametro(parametro){
    if(isNaN(parametro)){
        return false;
    } else {
        return true;
    }
}

exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.retornarStatusIMC = retornarStatusIMC;
exports.validaParametro = validaParametro;