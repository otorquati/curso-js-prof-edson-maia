/* Aula 14 de JS - Manipular dados de Fomulário */
/* SELECIONE TODOS OS ELEMENTOS QUE DESEJA MANIPULAR */
let formulario = document.querySelector('form')

// Definição de variável para cada campo
let cxNome  = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso  = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc   = document.querySelector('#resultadoImc')
let aviso   = document.querySelector('#aviso')
let dados   = document.querySelectorAll('.pessoa')

// definição das váriavies dos botões 
let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

/* PARA PEGAR OS DADOS QUE ESTÃO DENTRO DOS 
CAMPOS USE A PROPRIEDADE .value 
MAS, ANTES DETERMINE UM EVENTO COMO 
REFERÊNCIA PARA PEGAR OS DADOS  */

/* Adicione um escutador para o botao enviar */
// Uma funcão anônima para pegar os valores 
// Calcular o IMC

btnEnviar.addEventListener('click', function(e) {
    // Pegar os valores de cada campo
    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cxImc.value = imc
    let sit = situacaoDoPeso(imc)
    aviso.textContent = sit

    // SAIDA DOS DADOS
    /*
    alert(
        'Nome ' + nome + '\n' +
        'Idade ' + idade + ' anos\n' +
        'Peso ' + peso + 'Kg\n' +
        'Altura ' + altura + 'm\n' +
        'IMC ' + imc + ' ' + sit
    ) 
*/
    // Criar um objeto pessoa
    let pessoa = {
        nome    : nome,
        idade   : idade,
        peso    : peso,
        altura  : altura,
        imc     : imc,
        sit     : sit,
    }
    console.log(pessoa)
    dados[1].textContent = "Nome: " + pessoa.nome
    dados[2].textContent = "Idade: " + pessoa.idade + " anos"
    dados[3].textContent = "Peso: " + pessoa.peso + " Kg"
    dados[4].textContent = "Altura: " + pessoa.altura + " m"
    dados[5].textContent = "IMC: " + pessoa.imc + " " + pessoa.sit

    e.preventDefault()
})

function situacaoDoPeso (imc) {
    let situacao =''
    if (imc < 18.5) {
        situacao = 'Baixo peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Peso Normal'
    } else if (imc >=25 && imc <=29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >=30 && imc <=34.9) {
        situacao = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situacao = 'Obesidade II'
    } else if (imc >=40) {
        situacao = 'Obesidade III'
    } else {
        situacao = 'Informe seu peso corretamente'
    }
    return situacao
}
