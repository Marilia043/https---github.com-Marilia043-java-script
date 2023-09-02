import prompt from 'prompt-sync';
let ler = prompt();

let n = [];
let nt =  [];

console.log('quantos numeros vc quer informar? :')
let x = Number(ler());

console.log('informe os numeros desejados');
for(let i = 0; i < x; i++){
    console.log('informe o ' + (i + 1) + 'º numero')
    n[i] = Number(ler());
    nt[i] = n[i] * 2;
}

for(let i = 0; i < x; i++){
    console.log('o dobro de ' + n[i] + ' é igual a ' + nt[i]);
}