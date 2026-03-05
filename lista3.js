// Criar um programa para verificar se o número 12 é divisível por 2 e por 3.

let num1 = 12;

if (num1 % 2 == 0 && num1 % 3 == 0) {
    console.log("O número " + num1 + " é divisível por 2 e por 3");
} else {
    console.log("O número " + num1 + " não é divisível por 2 e por 3");
}

//Criar um programa para mostrar um desconto de 12% para produtos acima de R$800.
 let preco = 800
let desconto = preco * 0.12;
    let precoFinal = preco - desconto;
if (preco > 800) {
   
    console.log("Preço original: " + preco);
    console.log("Desconto de 12%: " + desconto);
    console.log("Preço com desconto: " + precoFinal);
} else {
    console.log("O produto não tem desconto");
}

//Criar um programa que mostre os números de 1 a 10 usando laço de repetição.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Criar um programa para mostrar apenas os números pares entre 1 e 20.

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Criar um programa para mostrar apenas os números ímpares entre 1 e 20.

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// Criar um programa para mostrar a tabuada do 5.

for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


//Criar um programa para mostrar os números de 1 a 7 usando while
let i = 1;

while (i <= 7) {
    console.log(i);
    i++;
}


//Criar um programa para mostrar a tabuada do 3 usando while
let i2 = 1;

while (i2 <= 10) {
    console.log("3 x " + i + " = " + (3 * i2));
    i++;
}



//Criar um programa para mostrar o fatorial de 5
let num2 = 5;
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial = fatorial * i;
}

console.log("Fatorial de 5 = " + fatorial);



//Criar um programa para saber se o número 7 é primo
let numero = 7;
let divisores = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        divisores++;
    }
}

if (divisores == 2) {
    console.log("O número é primo");
} else {
    console.log("O número não é primo");
}


//Criar um programa para calcular a potência de 2³
let base = 2;
let expoente = 3;
let resultado = base ** expoente;

console.log("Resultado = " + resultado);










