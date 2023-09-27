/* Desafios em JS - Aula 06 */

// Definições

// Atletas

let nome= 'Fedor Valdomirovich Emelianenko'
let nacionalidade= 'Russo'
let idade= 44
let peso= 106
let altura= 1.83    

// Frase do dia
const dia = 27
const mes = 9
const ano = 2023
const autor = 'Aaron Shwartz'
const frase = "Seja curioso. Leia tudo. Teste coisas novas. O que as pessosas chamam deinteligência se resume a curiosidade." 

// Array meses do ano

let meses = [
    ' Janeiro',
    ' Fevereiro', 
    ' Março', 
    ' Abril', 
    ' Maio', 
    ' Junho']

// Objeto jogos
let jogo = {
    titulo: 'League of Legends - LoL',
    desenvolvedor: 'Riot Games',
    anoLancamento: 2009
}

document.write('<h2>Informações</h2>')
document.write(`Lutador: ${nome} <br>`)
document.write(`nacionalidade: ${nacionalidade} <br>`)
document.write(`Idade: ${idade} anos<br>`)
document.write(`Peso: ${peso} kg <br>`)
document.write(`Altura: ${altura} m<br>`)

// Exibição Frase do dia
document.write('<h2>Frase do Dia</h2>')
document.write(dia + "/"+mes+"/"+ano+"<br>")
document.write(frase+"<br>")
document.write(autor)

// Exibição Meses do ano
document.write('<h2>Meses do Ano</h2>')
document.write(meses+"...")

// Exibição objeto jogo

document.write('<h2>Jogo</h2>')
document.write(`Jogo: ${jogo.titulo} <br>`)
document.write(`Desenvolvido por: ${jogo.desenvolvedor} <br>`)
document.write(`Ano de Lançamento: ${jogo.anoLancamento}`)
