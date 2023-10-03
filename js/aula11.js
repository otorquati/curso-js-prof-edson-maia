function carregou() {
    console.log('Página carregada com sucesso!')
}

function focou() {
    console.log('Foco no título')
}

function rolouPagina(){
    console.log('Página rolando')
}

function focoNoCampo() {
    console.log("Foco no campo de texto")
}

function semFocoNoCampo() {
    console.log("saiu o foco do campo de texto")
}

let letras = document.querySelector('input[type=text]')
function avisarQueTeclou() {
    let numLetras = 1
    console.log('Está teclando ' + (letras.value.length + numLetras))
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

botao1.addEventListener('mouseover', 
    function (event) {
        console.log('Foco no Botão 1')
    }
)

botao2.addEventListener('blur', 
function (event) {
    console.log('Foco no botão 2')
    }
)

botaoEnviar.addEventListener('click', 
function (event) {
    event.preventDefault()
    alert('Clicou no botão enviar!')
})
