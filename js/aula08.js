/* Arquivo JS Aula 08 */
// DOM Document Object Model
// Arvore com elementos desde o Browser, a Janela do Browser, o Documento e cada elemento html que formam os conteudos.
/*
navigator
window
    location
    document -> html -> head e body
    history
*/
// Para manipular o DOM precisamos
// indicar qual objeto usar, depois
// chamar um método (função) para seleciona ele, seus dados, trazer informações, etc. 
// querySelector()
// selecionar elementos com base na tag, #id ou .class
let titulo =document.querySelector('h1')
console.log(titulo)
 // .textContent
 // propriedade ou atributo textContent 
 // serve para alterar conteudo 
 // de um elemento que foi selecionado
 // console.log(titulo.textContent)
 // console.log(titulo.innerHTML)
// titulo.textContent = "DOM"
// console.log(titulo.textContent)
// .querySelectorAll()
// selecionar todos os elementoos com base na tag, #id ou .class
let testando = document.querySelectorAll('.box')
console.log(testando)
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
testando[1].textContent = 'texto qualquer'