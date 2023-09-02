import prompt from 'prompt-sync'
let ler = prompt()

let n = [];

console.log('informe os numeros que vc deseja:')
for(let co = 0; co < 5; co++){
    console.log('informe o ' + (co + 1) + 'º numero')
    n[co] = Number(ler())
};

for(let co = 0; co < 5; co++){
    console.log('os numeros informados são: ' + n[co])
};