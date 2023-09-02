import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa de contagem regressiva \nInforme um número');
let num = Number(ler());

let cont = 0;

while (cont <= num) {
    console.log(num)
    num--;
}

