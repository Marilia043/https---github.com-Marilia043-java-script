import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe um número limite');
let limite = Number(ler());

console.log('Começando a contagem');
contar (limite)

function contar(limite) {
    let cont = 0;

    while (cont <= limite) {
        console.log(cont);
        cont++;
    
    }

}