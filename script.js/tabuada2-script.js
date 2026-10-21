// let numero = 8

// function gerarTabuada(numero){
//     for(let i = 0; i <= 10; i++){
//         console.log( " resultado " + numero + " x " + i + " = " + numero *i);
//     }
// }
// gerarTabuada(8)
// gerarTabuada(7)

// 

let peso = parseFloat(prompt("Digite o seu peso (kg): "))
let altura = parseFloat(prompt ("Informe a sua altura (metros):"))

let resultado = calcularIMC(peso,altura)

function calcularIMC(peso,altura){
    return  peso / (altura * altura)
    alert(resultado)
}
calcularIMC(peso,altura)

function classificarIMC(resultado){
    let resultado = calcularIMC ()
    if (resultado <= 18.5){
        alert ("abaixo do peso")
    }
    else if (resultado > 18.5 && resultado <= 24.9 ){
        alert ("Peso normal")
    }
    else if (resultado > 25 && resultado <= 29.9){
        alert ("Sobrepeso")
    }
    else if (resultado > 30 && resultado <= 34.9){
        alert ("Obesidade grau 1")
    }
    else if ( resultado > 35 && resultado <= 39.9){
        alert ("Obesidade grau 2")
    }
    else if (resultado > 40){
        alert ("Obesidade grau 3 (grave)")
    }
}