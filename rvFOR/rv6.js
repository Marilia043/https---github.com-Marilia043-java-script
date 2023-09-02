import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe um número');
let n = Number(ler());

for (let linha = 1; linha < n; linha++) {
    for (let cont = 1; cont <= n; cont++){
        process.stdout.write('*')
    }
    console.log();
}