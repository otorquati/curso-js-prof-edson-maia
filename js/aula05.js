/* Arquivo JS - Aula 05 Objetos */

// CRIA OBJETOS
let pessoa = {
    nome: 'Osvaldo',
    idade: 62,
    peso: 74.5,
    altura: 1.74,
    doador: false
}

let produtos = {
    descricao: [],
    preco: []
}

const carros = {
    marca: ['Ford', 'Fiat', 'GM'],
    modelo: [ 'Ka', 'Uno', 'Corsa'],
    ano: [ 1999, 2005, 2010]
}

// Como acessar as propiedades usando .
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura

// Acessar propriedades de um vetor usando ['']

pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']

// OPERAÇÃO IMC = peso / (altura*altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

//.tofixed(X)
//limita o numero de casa decimais
//console.log("IMC = "+imc.toFixed(2))

// ALTERAR/ATUALIZAR VALOR de propriedade através do operador de atribuição =
pessoa.nome = "Edson Maia"
produtos.descricao = ['Arroz']
produtos.preco = [4.99]

// Usando o spread operator
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']
produtos.preco = [...produtos.preco, 9.99, 4.79]

// Usando o spread operator em objetos const
carros.marca = [...carros.marca, 'VW']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano = [...carros.ano, 1979]