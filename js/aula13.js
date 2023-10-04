/* Aula 13 de JS - Estruturas de repetição */

let carros = ['Fusca', 'Brasília', 'Gurgel']

/* FOR = para Faça */
/* i = iterador, interação ou index */
document.write("<h3>Escrevendo em ordem crescente</h3>")
for(let i = 1; i<= 5; i++) {
    document.write(i+" ")
}
document.write("<h3>Escrevendo em ordem decrescente</h3>")
for(let i = 5; i>= 1; i--) {
    document.write(i+" ")
}

document.write("<h3>Escrevendo os elementos de um array</h3>")
for(let i = 0; i<carros.length ; i++) {
    document.write(`<li>${carros[i]}</li>`)
}

/* FOREACH - para cada */
let frutas = ['Pera','Uva','Maçã','Banana','Melância']

document.write("<h3>Escrevendo os elementos de um array com foreach</h3>")
frutas.forEach(function(frutas,i){
    document.write(`${i}. ${frutas} <br>`)
})

document.write("<h3>Escrevendo os elementos do array carros com foreach</h3>")
carros.forEach(function(carros,i){
    document.write(`<li>${carros}</li>`)
})

/* WHILE enquanto */

// Criar uma váriavel de controle ou contador fora do laço 
let contador = 0
document.write("<h3>Escrevendo os elementos de um array com while</h3>")
while(contador < frutas.length) {
    document.write(`<li>${frutas[contador]}</li>`)
    contador++
}

document.write(`<br> Contador = ${contador}`)

document.write("<h3>Escrevendo os elementos de um array com do - while</h3>")
/* DO WHILE - faça enquanto */
let iterador =0
do {
    document.write(`<li>${carros[iterador]}</li>`)
    iterador++
} while ( iterador < carros.length)






