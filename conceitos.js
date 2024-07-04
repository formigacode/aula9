// variaveis: alert, confirm e prompt


// js possibilita: variaveis, opções, controle de fluxo, operadores aritméticos e lógicos,
// laços de repetição e orientação de objetos.

// todas as variaveis devem ser aplcadas no console do Chrome (Ctrl+Shft+I/F12)

    alert("Hello World")

// Ctrl + L = Limpar Console
    
clear ()

// var (serve para criar uma mesma box da alert porém com opçoes de sim e não.)
    
var clima = confirm("Está frio?")

// {} significa "então"  / else = "senão"

if(clima) {alert("Então é inverno")}

else {alert("Deve ser verão!")}

// [PRECISA SER EXECUTADO NO MESMO COMANDO COMO MOSTRADO ABAIXO:]

    var clima = confirm("Está frio?")
        if(clima) {alert("Então é inverno")}
            else {alert("Deve ser verão!")}


           
 // Criando uma variável para caso a pessoa opte por não/cancelar (no caso a variavel "if")
 
 var clima = confirm("Está frio?")
        if(clima) {alert("Então é inverno")}
            else {      
                var primavera = confirm("Mas está realmente quente?") 
                if(primavera) {alert("Então é Verão")} 
                else {alert("Então é primavera!")}
            }

// prompt retorna uma (string) = {5+5=10} {"5"+""5"=55}
// string (tudo que estiver entre "aspas")

// Boolean (tipo de variaveis = int, float, string, char)

Igual [==]
Diferente [!=]
Maior = [>]
Menor = [<]

    > 5 == "5"
    true
    10 != "5"
    false

    // criando um prompt (calculadora simples)
    // Number = classe de js que converte o prompt pra numérico
    
    var num1 = Number (prompt("nota 1:") )
    var num2 = Number (prompt("nota 2:")
    var result = num1 + num2
    alert("Resultado: " + result)

    // for = laço de repetição (variavel,"menor que" 10)

    var num = Number (prompt("Digite um número:"))
    for( let i=0; i <= 10; i++ ) {console.log(num + "x" + i + "=" + (num * i))}


            