/* Arquivo JS aula 04 */

let produtos = ['Arroz','Feijão','Leite']
var codigos = Array(10,20,30)
var test = Array(10)
test[0]="oi"
test[9]="tudo bem"
test[10]="Opa!"
let meses=['Jan','Fev','Mar','Abr']
meses[0]="janeiro"

// ADICIONAR ao final push = empurre
produtos.push('Açucar', 'Trigo')
codigos.push(40,50,60,70)
meses.push('Mai','Jun','Jul','Ago', '07')

// REMOVER do final pop = estourar
produtos.pop()
codigos.pop()
meses.pop()
meses.pop()

//ADICIONAR ao início unshift
produtos.unshift('Uva', 'Maçã')

// REMOVER do inicio shift
produtos.shift()

// REMOVER de uma posição específica splice
// splice = emendar
// posição inicial,  quantos removr
codigos.splice(1,3)

// COPIAR Array slice = fatiar porção
// posicão inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0,3)

// Ver tamanho do Array - length = comprimento
meses.length
meses1.length
meses2.length

// Spreed operador ... copiar
let teste = [ ...produtos, 'Ovo', 'Pera']

// Ver índice de um valorno array
// let pos = nome_array.indexof('valor')
let pos = teste.indexOf('Ovo')
