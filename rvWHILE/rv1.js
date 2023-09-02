import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe até q número será contado');
let num = Number(ler());

let cont = 1;

while (cont <= num) {
    console.log(cont)
    cont++;    
}
