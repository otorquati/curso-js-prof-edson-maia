/* Aula 15 - Aquivo JS */

// Aramazena os objetos em variáveis

let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

let btnCalc = document.querySelector('#btnCalc')
let btnRst = document.querySelector('#btnRst')

// Função para calcular média ponderada
function calcularMedia(n1, n2) {
    return ((n1*4)+(n2*6))/10
}

// Função para definição da situação final
function situaçãoFinal(mediaFinal) {
    let situacaoFinal = ''
    if (mediaFinal >=7) {
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal <3) {
        situacaoFinal = 'Reprovado(a)'
    } else {
        situacaoFinal = 'Recuperacao'
    }
    return situacaoFinal
}

// Função para formatar a situação final
function formatarSituacao (situacaoFinal) {
    console.log('Situação Final: '+ situacaoFinal)
    switch (situacaoFinal){
        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            console.log('Adicionou class aprovado')
        break
        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            console.log('Adicionou class Reprovado')
        break
        case 'Recuperacao':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.add('recuperacao')
            console.log('Adicionou class Recuperacao')
        break

            default: 
                console.log('Situação Indefinida')    
    }
}

function validaNota(numero) {
    let num1= cxNota1.value
    let num2= cxNota2.value
    if (num1 < 0 || num1 > 10 || num2 < 0 || num2 >10 ){
        formulario.reset()
        aviso.textContent='Digite um número entre 0(zero) e 10(dez)!'
        aviso.classList.add('alerta')
        setTimeout(function(){
            aviso.textContent=''
            aviso.classList.remove('alerta')
        }, 2000);
    }
}

btnCalc.addEventListener('click', function(e){
    // Usa o metodo parseFloat para converter string em número
    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = calcularMedia(nota1, nota2)

    //mostra os valores no console   
    console.log(nota1)
    console.log(nota2)
    console.log(media)

    // Verifica os valores e define a situação final
    if (isNaN(media) || media<0 ) {
        console.log('Não é um número')
        cxSituacao.value = ''
    } else {
        cxMedia.value=parseFloat(media)
        cxSituacao.value = situaçãoFinal(media)
        formatarSituacao(situaçãoFinal(media))
    }
    e.preventDefault()
})

btnRst.addEventListener('click',function(e){
    aviso.classList.remove('aprovado')
    aviso.classList.remove('reprovado')
    aviso.classList.remove('recuperacao')
})
