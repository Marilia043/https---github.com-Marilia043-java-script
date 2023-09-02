import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe um número');
let n = Number(ler());

for (let cont = 1; cont <= n; cont++) {
    process.stdout.write('*')
}

;