import prompt from 'prompt-sync'
let ler = prompt()

let n = [];

console.log('quantos numeros deseja armazenar?')
let qt = Number(ler());

console.log('informe os numeros que vc deseja:')
for(let c = 0; c < qt; c++){
    console.log('informe o ' + (c + 1) + 'º numero: ')
    n[c] = Number(ler());
}

for(let c = n.length - 1; c >= 0; c--){
    console.log('os numeros informados são: ' + n[c])
}