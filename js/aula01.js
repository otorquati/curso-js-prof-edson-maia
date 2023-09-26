/* 
Comentários em várias linhas
Arquivo js externo
*/

document.write("Olá mundo!");
console.log("Olá mundo no console");
// alert("Olá mundo com alerta");

// Variáveis
let mensagem = "Minha mensagem";
let mensagem2 = "outra mensagem";

// Técnicas e nomeação de variáveis
let meu_peso = 83.5 // Snake Case
let meuPeso = 74.6 // Camel case

// Tipos de Variáveis
let minhaAltura = 1.74; // Float
let minhaIdade = 62; // int
let ehDoador = true; // boolean
let teste = null;

/* CRIAR CONSTANTES e atribuir valor */

const PI = 3.1415;
const TAXA = 0.5;

/* ESCREVE O CONTEÚDO DE VARIÁVEIS e CONSTANTES */

// Para concatenar usamos o sinal de +

document.write("<p>Mensagem: "+mensagem+"<p>");
document.write("<p>Mesnagem 2:"+mensagem2+"<p>");

/* Utilizando template string utilizando o sinal de crase para abrir e fechar 
a template string e declara as variáveis com ${variável} */
document.write("<p>Peso: "+meuPeso+" kg<p>");
document.write(`Altura: ${minhaAltura} m`);
document.write("<p>Idade: "+minhaIdade+" anos<p>");
document.write(`Doador?: ${ehDoador ? "sim" : "não"}`);
document.write("<p> Teste: "+teste+"<p>");
document.write("<p>PI: "+PI+"<p>");
document.write("<p>TAXA: "+TAXA+"<p>");


