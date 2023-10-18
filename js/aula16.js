/* Arquivo JS da aula 16 */

// definição das variáveis
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function() {
    // adicinar animações 
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    // tocar o efeito sonoro
    dadoRolando.play()

    // Pcultar o botão sortear
    btnSortear.style.display = 'none'

    // Usar a função setTimeout para executar o sorteio a cada 1.75 segundos
    setTimeout(function(){
        // Armazenar o numero sorteado
        numeroSorteado = getRandonInt(1,6)

        // Escrever o numero sorteado no console
        console.log(numeroSorteado)

        // definir o atributo src na tag img para o numero sorteado
        imgDado.setAttribute('src', '../img/dado/'+numeroSorteado+'.png')

        // Escrever o numero sorteado no parágrafo
        sorteado.textContent = numeroSorteado

        // Exibir o botão sortear
        btnSortear.style.display = 'inline-block'

        // retirar a animaçao
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    },1750)
})

function getRandonInt(min, max) {
    min = Math.ceil(min) // arredonda para cima ceil = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random()*(max-min+1))+min
}