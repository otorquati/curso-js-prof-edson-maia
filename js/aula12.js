/* Aula 12 de JS Estruturas
   Condicionais e de Escolha
*/

let nt1 = document.querySelector('#nt1')
let nt2 = document.querySelector('#nt2')
let sit1 = document.querySelector('#sit1')
let sit2 = document.querySelector('#sit2')
let sit3 = document.querySelector('#sit3')
let media = document.querySelector('#media')
let botaoEnviar = document.querySelector('#btn1')
// let sit3 = document.querySelector('#nt3')
let escolha = document.querySelector('#escolha')

// ESCOLHA CASO
let situacao = ''
let notaCorte = 5.0

botaoEnviar.addEventListener('click', 
function (){
    
    let mediaFinal = ((parseInt(nt1.value)*4)+(parseInt(nt2.value)*6))/10 
    media.textContent = mediaFinal
    /* CONDICIONAIS */
    
    /* IF */
    if (mediaFinal >= notaCorte ) {
        sit1.textContent = `Aprovado com média: ${mediaFinal}`
    }
    
    /* IF ELSE */
    if (mediaFinal >= notaCorte ) {
        sit2.textContent = `Aprovado com média: ${mediaFinal}`
    } else {
        sit2.textContent = `Reprovado com média: ${mediaFinal}`
    }
    
    /* IF TERNARIO */
    mediaFinal >= notaCorte  ? sit3.textContent = 'Passou' : sit3.textContent = 'Ficou'
    
    /* IF ENCADEADO OU ANINHADO */
    if(mediaFinal >= notaCorte ) {
        situacao = 'Aprovado'
    } else if (mediaFinal <= 3) {
        situacao = 'Reprovado'
    } else {
        situacao = 'Recuperação'
    }
    console.log(situacao)
    switch(situacao) {
        
        case 'Aprovado':
            escolha.textContent = situacao + ': Passou de ano'
            break
            
        case 'Reprovado':
            escolha.textContent = situacao + ': NÃO passou de ano'
            break
            
        case 'Recuperação':
            escolha.textContent = situacao + ': Ainda tem uma chance'
            break
                
        default:
            escolha.textContent = situacao + 'Estude'
            // default nao precisa de break
    }
})