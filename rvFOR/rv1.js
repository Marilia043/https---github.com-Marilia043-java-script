import prompt from 'prompt-sync'
let ler = prompt()


console.log('Informe um número');
let num = Number(ler());

for (let cont = 0; cont <= num; cont++) {
    console.log(cont);
}