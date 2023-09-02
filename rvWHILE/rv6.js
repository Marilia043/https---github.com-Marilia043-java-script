import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe os lados do quadrado');
let tam1 = Number(ler());


let cont = 0;
let linhas = 1;

while (linhas <= tam1 ) {
    while (cont < tam1) {
        process.stdout.write('*')
        cont++;
    }
    cont = 0;
    linhas++;
    console.log();
} 
