let numero = 2

for(let i = 0; i <= 10; i++){
    console.log( "resultado " + numero + "x " + i + "= " + numero *i);
}

let numero = 8

for(let i = 0; i <= 10; i++){
    console.log( " resultado " + numero + " x " + i + " = " + numero *i);
}




let numero1 = Number(prompt("Digite o primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número: "))
let operacao = prompt("Informe a opareção: \n[+]\n[-]\n[*]\n[/]")

if (operacao == "+"){
    alert ( " resultado " + numero1 + " + " + numero2 + " = " + (numero1 + numero2) )
}
else if (operacao == "*" ){
    alert ( " resultado " + numero1 + " x " + numero2 + " = " + numero1 * numero2 )
}
else if (operacao == "-")[
    alert ( " resultado " + numero1 + " - " + numero2 + " = " + (numero1 - numero2) )
]
else if (operacao ==  "/"){
    alert ( " resultado " + numero1 + " / " + numero2 + " = " + numero1 / numero2 )
}