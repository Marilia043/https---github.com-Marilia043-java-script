import prompt from 'prompt-sync';
let ler = prompt();

let soma = 0;

for(let cont = 1; cont <= 5; cont++){
   soma = soma + cont;
}

console.log('soma ' + soma);