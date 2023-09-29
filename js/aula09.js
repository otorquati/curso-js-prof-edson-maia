/* Arquivo JS aula 09 DOM + alterar CSS */
let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
// titulo.innerHTML = 'Aula Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', '../images/Pride-fc.jpg')
imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
document.querySelector('h1').style.color = 'red'
titulo.style.color = 'red';
titulo.style.backgroundColor = '#000';
titulo.style.borderBottom = '2px solid red';
titulo.style.padding = '0.625rem';
titulo.style.borderRadius = '5px';

/* let box = document.querySelectorAll('.box')
box[0].setAttribute('class','azul')
box[0].removeAttribute('class') */

// MODOS DE COR //

// Armazenamos o objeto da tag main 
let tela = document.querySelector('main')

// Armazenamos os objetos dos botões 
let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')

// Setamos os eventos click dos botões
btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

// Alteramos as classes do objeto tela com as funções do JS
function modoDark() {
    //event.preventDefault();
    console.log('modo Dark')
    tela.classList.add("dark")
    tela.classList.remove("light")
}

function modoLight() {
    //event.preventDefault();
    console.log('modo Light')
    tela.classList.add("light")
    tela.classList.remove("dark")
}

