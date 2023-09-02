import prompt from 'prompt-sync';
let ler = prompt();

let n = [];

console.log('quantos numeros irão ser informados: ')
let q = Number(ler());

console.log('informe os numeros desejados: ')
for(let i = 0; i < q; i++){
    console.log('informe o ' + (i + 1) + 'º numero')
    n[i] = Number(ler());
}

for(let i = 0; i < q; i++){
    console.log('os numeros informados foram: ' + n[i]);
}

for(let i = 0; i < q; i++){
    if(n[i] % 2 == 0){
        console.log('os numeros pares são: ' + n[i])
    }
}