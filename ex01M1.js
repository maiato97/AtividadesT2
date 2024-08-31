// Atividades Módulo01 - +praTi
const prompt = require("prompt-sync")()

/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/
function parImpar(){
    console.log("EXERCÍCIO 1: Testar se um número é par ou ímpar")
    let numero = parseInt(prompt("Digite um número a ser testado: "))

    if (numero % 2 === 0){
        console.log(`O número ${numero} é par`)
    }else if (numero % 2 > 0){
        console.log(`O número ${numero} é impar`)
    }else {
        console.log("ERRO! Digite um número!")
    }
}

/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/
function categoriaIdade(){
    console.log("EXERCÍCIO 2: Classificar idade em categorias com base em valor informado.")
    let idade = parseInt(prompt("Digite a idade: "))

    if (idade <= 10){
        console.log(`${idade} anos se classifica em Criança.`)
    } else if (idade < 20){
        console.log(`${idade} anos se classifica em Adolescente.`)
    } else if (idade < 60){
        console.log(`${idade} anos se classifica em Adulto.`)
    } else if (idade >= 60){
        console.log(`${idade} anos se classifica em Idoso.`)
    } else {
        console.log("ERRO! Idade inválida.")
    }
}

/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.*/

function classificaNota(){
    console.log("EXERCÍCIO 3: Classificar nota em categorias 'Aprovado', 'Recuperação' e 'Reprovado':")
    let nota = Number(prompt("Digite uma nota: "))

    if (nota >= 7){
        console.log("Aprovado!")
    } else if (nota < 7 && nota > 4){
        console.log("Recuperação!")
    } else {
        console.log("Reprovado!")
    }
}

/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/
function menuInterativo(){
    console.log("\nEXERCÍCIO 4: Menu interativo de músicas")
    const { exec } = require('child_process');

    const nothingelsematters = 'https://www.youtube.com/watch?v=tAGnKpE4NCI'
    const micdrop = 'https://www.youtube.com/watch?v=p7nGS4MkiVA'
    const cartaspravoce = 'https://www.youtube.com/watch?v=KBWJuJtcBlE'

    console.log("Escolha uma música para executar:\n1. Nothing Else Matters - Metallica \n2. MIC Drop - BTS \n3. Cartas Pra Você - NX Zero")
    let op = parseInt(prompt("Digite uma opção: "))

    switch(op){
        case 1:
            console.log("Executando Nothing Else Matters de Metallica...")
            exec(`start ${nothingelsematters}`);
            break
        case 2:
            console.log("Executando MIC Drop de BTS...")
            exec(`start ${micdrop}`)
            break
        case 3:
            console.log("Executando Cartas Pra Você de NX Zero...")
            exec(`start ${cartaspravoce}`)
            break
        default:
            return
    }
}

/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

function IMC(){
    console.log("\nEXERCÍCIO 5: Índice de Massa Corporal (IMC)")
    let peso = Number(prompt("Digite seu peso em Kg (Ex.: 71.5): "))
    let altura = Number(prompt("Digite sua altura em metros (Ex.: 1.60): "))
    let imc = peso / (altura*altura)

    console.log(`Seu IMC ficou ${imc.toFixed(1)}`)

    if (imc <= 18){
        console.log("Abaixo do peso ideal")
    } else if (imc <= 24.9){
        console.log("Peso normal")
    } else if (imc <= 29.9){
        console.log("Sobrepeso")
    } else {
        console.log("Obesidade")
    }
}

/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.*/

function testarTriangulos(){
    console.log("\nEXERCÍCIO 6: Verificar triângulo e seu tipo.")
    let ladoA = parseInt(prompt('Digite o valor do lado A: '))
    let ladoB = parseInt(prompt('Digite o valor do lado B: '))
    let ladoC = parseInt(prompt('Digite o valor do lado C: '))

    if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
        console.log("Os valores informados, formam um triangulo do tipo: ")
        if (ladoA === ladoB && ladoB === ladoC) {
            console.log("Triângulo eqüilátero")
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            console.log("Triângulo isósceles")
        } else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
            console.log("Triângulo escanelo")
        }
    } else {
        console.log("Os valores informados NÃO formam um triângulo.")
    }
}

/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

function calculoMacas(){
    console.log("\nEXERCÍCIO 7: Calcular compra de maças por quantidade.")
    let qtd = parseInt(prompt("Digite quantas maças quer comprar: "))
    let total

    if (qtd < 12){
        total = qtd * 0.30
        console.log(`${qtd} maças por R$0,30/un
                    Total compra: R$${total.toFixed(2)}`)        
    } else {
        total = qtd * 0.25
        console.log(`${qtd} maças por R$0,25/un
                    Total compra: R$${total.toFixed(2)}`)
    }
}

/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

function ordemCrescente(){
    console.log("EXERCÍCIO 8: Ler 2 valores diferentes e colocar em ordem crescente.")
    let valor1 = Number(prompt("Digite o primeiro valor: "))
    let valor2 = Number(prompt("Digite o segundo valor: "))  

    if (valor1 !== valor2){
        if (valor1 > valor2){
            console.log(valor2, valor1)
        } else {
            console.log(valor1, valor2)
        }
    } else {
        console.log("Os valores são iguais!")
    }
}

/*9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
utilizando um loop for.*/

function contagemRegressiva(){
    console.log("EXERCÍCIO 9: Exibir contagem regressiva de 10 até 1.")
    let start = prompt("Aperte ENTER para começar: ")
    if (start = " "){
        for (let i = 10; i <= 10 && i >= 1; i--){
            console.log(i)
        }
    } console.log("HAPPY NEW YEAR!")
}

/*10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/

function numero10x(){
    console.log("EXERCÍCIO 10: Ler um número inteiro e mostrar na tela 10x.")
    let num = parseInt(prompt("Digite um número: "))

    for(let i = 1; i <= 10; i++){
        console.log(`${i}º: ${num}`)
    }
}
/*11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.*/

function loopsoma(){
    console.log("EXERCÍCIO 11: Soma de 5 números em loop for. ")
    let soma = 0
    let num

    for(let i = 1; i <= 5; i++){
        num = Number(prompt(`Digite o ${i}° valor a ser somado: `))
        soma = soma + num
    }
    console.log(`A soma dos números inseridos é: ${soma}`)
}

/*12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.*/

function tabuada(){
    console.log("EXERCÍCIO 12: Tabuada de um número fornecido pelo usuário.")
    let n = parseInt(prompt("Digite o número: "))
    let result = 0

    for (let i = 1; i <= 10; i++){
        result = i * n
        console.log(`${n} x ${i} = ${result}`)
    }
}

/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

function mediaNumerosDecimais(){
    console.log("EXERCÍCIO 13: Média de números decimais até usuário digitar 0.")
    let num
    let soma = 0
    let i = 0
    let media
    while (num !== 0){
        num = parseInt(prompt("Digite um número decimal: "))
        soma = soma + num
        media = soma / i
        i++
    } console.log(`A média dos números é: ${media}`)
}

/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

function fatorial(){
    console.log("EXERCÍCIO 14: Calcula fatorial de um número fornecido pelo usuário.")
    let result = 1
    let i = parseInt(prompt("Digite o número: "))

    while (i > 1){
        result *= i
        i--
    }
    console.log(`O fatorial do número ${i} é: ${result}`)
}

/*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

function sequenciaFibonacci(){
    console.log("EXERCÍCIO 15: Mostra na tela os 10 primeiros números de Fibonacci.")
    let a = 0
    let b = 1
    let c

    let start = prompt("Aperte ENTER para continuar: ")
    if(start === ''){
        console.log(a)
        console.log(b)

        for (let i = 2; i < 10; i++){
            c = a + b
            console.log(c)
            a = b
            b = c
        }
    }
}

//Função para seleção das funções(exercicios) em switch case
function menuOpcoes(ex){
    switch(ex){
        case 1:
            parImpar()
            break;
        case 2:
            categoriaIdade()
            break;
        case 3:
            classificaNota()
            break;
        case 4:
            menuInterativo()
            break;
        case 5:
            IMC()
            break;
        case 6:
            testarTriangulos()
            break;
        case 7:
            calculoMacas()
            break;
        case 8:
            ordemCrescente()
            break;
        case 9:
            contagemRegressiva()
            break;
        case 10:
            numero10x()
            break;
        case 11:
            loopsoma()
            break;
        case 12:
            tabuada()
            break;
        case 13:
            mediaNumerosDecimais()
            break;
        case 14:
            fatorial()
            break;
        case 15:
            sequenciaFibonacci()
            break;
    }
}

let ex, continuar

do{
    console.log(`\n**ATIVIDADES MÓDULO 01 +praTi**
        Exercicíos de 1 à 15
        Enunciado do exercício será mostrado no ato de sua execução.`
    )
    ex = parseInt(prompt("Digite qual exercício quer executar: "))

    if (ex >= 1 && ex <= 15) {
        menuOpcoes(ex)
    } else {
        console.log("Opção inválida. Por favor, digite um número entre 1 e 15.")
    }

    continuar = prompt("\nDeseja voltar ao menu?('s' ou 'n'): ")

    if (continuar === "s"){
        menuOpcoes()
    } else {
        console.log("Saindo...")
        return
    }

}while(ex <= 15)