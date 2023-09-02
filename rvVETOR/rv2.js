import prompt from 'prompt-sync'
let ler = prompt()

let n = [];

console.log('informe os nomes que vc deseja:')
for(let co = 0; co < 5; co++){
    console.log('informe o ' + (co + 1) + 'º nome')
    n[co] = ler();
};

for(let co = 0; co < 5; co++){
    console.log('os nomes informados são: ' + n[co])
};