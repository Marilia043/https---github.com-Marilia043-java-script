import prompt from 'prompt-sync';
let ler = prompt();

                            //VETOR/ARRAY serve para guardar mais de uma coisa na variável 
                            //Sempre começa do 0 -> 10 = 0; 20 = 1; 30 = 2; 40 = 3
                            //LENGHT serve para contar a quantidade começando a partir do 1 -> 10 = 1; 20 = 2; 30 = 3; 40 = 4

let x = [10, 20, 30, 40];

for (let cont = 0; cont < x.length; cont++){
    let item = x[cont];

    console.log(item);
}

                            //As duas tem a mesma função entretanto a segunda está abreviada

for (let item of x){
    console.log(item);
}







