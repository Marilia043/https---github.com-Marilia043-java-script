import prompt from 'prompt-sync';
let ler = prompt();

let t = [];
let f = 0;

console.log('qual numero vc quer saber a tabuada? :')
let tb = Number(ler());

console.log('multiplicar até que numero? :')
let qt = Number(ler());

for(let c = 0; c < qt; c++){
    f = f + tb;
    t[c] = f;
    console.log(t[c]);
}