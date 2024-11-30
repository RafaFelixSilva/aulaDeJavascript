const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);

// crie um programa que dado um numero imprima a sua tabuada.
const numero = 8;
for (let i = 1; i <= 10; i++) {
    console.log(i * numero);
}

// crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado.

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if(numero % 2 === 0) {
        console.log(numero);
    }
    
}