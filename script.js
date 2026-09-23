//atribuição
let meuNome = "Filipi";

//redeclaração
meuNome = "Pedro";

let idade = 28; // <-- movido para cá, antes de ser usado

const deMaior = false;
const mensagem = `Meu nome é ${meuNome} e tenho ${idade} anos`;
console.log(mensagem);

const usuario = {
    nome: "Filipi",
    idade: 23
};
console.log(usuario.idade); //23

//redeclaração - objeto
usuario.idade = 36;

console.log(usuario.idade); //36
console.log(usuario)

const frutas = ["maça", "banana", "morango", "uva", "abacaxi", "laranja"];
console.log(frutas);
console.log(frutas[1]);

if (idade >= 18){
    console.log("Você é maior de idade");
}else{
    console.log("Você é menor de idade, vá para a casa");
}

let validaIdade = (idade >= 18) ? 'Maior' : 'Menor';
console.log(validaIdade);

let statusSemaforo = "vermelho";

switch (statusSemaforo) {
    case "vermelho":
        console.log("Pare")
        break;
        case "verde":
        console.log("Siga")
        break;
    default:
        console.log("Aguarde")
}

let contador = 0;

while (contador < 10) {
    console.log(`O contador é: ${contador}`);
    contador++;
}

for (let i = 0; i <5; i++) {
    console.log(`O valor de i é: ${i}`);
}

for (const fruta of frutas) {

    if (fruta == "uva") {
        continue;
    }
    console.log(fruta);
}

function somar (a, b) {
    return a + b;
}

function cnh(idade) {
    if ( idade>= 18) {
        return 'Maior de idade';
    }
    return 'Menor de idade';
}

const multiplicar = function (a, b) {
    return a * b;
}

console.log(multiplicar(5, 3)); //15

const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // 5

const numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero) => {
    console.log(numero * 2);
});

const limpar = document.getElementById("btn-limpar");
const filtros = document.getElementsByClassName("filtro");

limpar.addEventListener("click", (event) => {
    event.preventDefault();

    for (let i = 0; i < filtros.length; i++) {
        filtros[i].checked = false;
    }

    showAlert('.alert');
})

function showAlert(el){
    const divAlert = document.querySelector(el);
    divAlert.style.display = 'block';

    setTimeout(function() {
        divAlert.style.display = 'none';
    }, 3000);
}

