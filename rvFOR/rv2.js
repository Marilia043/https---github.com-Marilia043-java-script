import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe um número para começarmos a regressão');
let num = Number(ler());

for (let cont = 0; cont < num; num--) {
    console.log(num);
}

