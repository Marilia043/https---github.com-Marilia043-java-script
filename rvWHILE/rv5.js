import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe o número de linhas');
let linhas = Number(ler());

let cont = 0;
while (cont <= linhas){
    process.stdout.write('*')
    cont++;
}