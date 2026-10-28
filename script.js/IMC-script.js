
let peso = prompt("Digite o seu peso (kg): ")
let altura = prompt ("Informe a sua altura (metros):")


function calcularIMC(peso,altura){
    return  peso / (altura * altura)

}
let resultado = calcularIMC(peso,altura)

function classificarIMC(resultado){

    if (resultado <= 18.5){
        alert ("abaixo do peso" + resultado)
    }
    else if (resultado > 18.5 && resultado <= 24.9 ){
        alert ("Peso normal" + resultado)
    }
    else if (resultado > 25 && resultado <= 29.9){
        alert ("Sobrepeso" + resultado)
    }
    else if (resultado > 30 && resultado <= 34.9){
        alert ("Obesidade grau 1" + resultado)
    }
    else if ( resultado > 35 && resultado <= 39.9){
        alert ("Obesidade grau 2" + resultado)
    }
    else if (resultado > 40){
        alert ("Obesidade grau 3 (grave)" + resultado)
    }
}
function gerarRelatorio (peso,altura){
    let resultado = calcularIMC(peso,altura)
    classificarIMC(resultado)
}
alert (gerarRelatorio (peso,altura))