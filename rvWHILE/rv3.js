import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe dois números \n começo e fim');
let num1 = Number(ler());
let num2 = Number(ler());


while (num1 <= num2){
    console.log(num1)
    num1++;
}
