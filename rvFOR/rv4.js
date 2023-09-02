import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe um número');
let n = Number(ler());

for (let cont = 0; cont < n; cont +=2) {
    console.log(cont);
}