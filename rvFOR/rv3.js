import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe dois números, um para começar e outro para terminar');
let n1 = Number(ler());
let n2 = Number(ler());

console.log('Começando a contagem');

for (n1 < n2; n1++;){
    console.log(n1);
}

//ERRO
