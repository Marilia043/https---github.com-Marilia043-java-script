import prompt from 'prompt-sync';
let ler = prompt();

console.log('Programa que mostra os números pares \nInforme os números, começo e fim, para mostrarmos os pares');
let num1 = Number(ler());
let num2 = Number(ler());

while (num1 <= num2) {
    console.log(num1)
    num1 += 2;
}

