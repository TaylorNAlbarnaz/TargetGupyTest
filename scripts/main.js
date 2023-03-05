let resultado1 = document.getElementById("resultado-1");
let resultado2 = document.getElementById("resultado-2");
let resultado5 = document.getElementById("resultado-5");

function resultadoPrimeiraPergunta() {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k += 1;
        soma += k;
    }

    resultado1.innerHTML = soma;
}

function checarFibonacci(valor) {
    let numeroAnterior = 0;
    let numeroAtual = 1;
    let numeroProximo = 0;

    let numeroProcurado = document.getElementById("entrada-2").value;

    while (numeroAtual <= numeroProcurado) {
        numeroProximo = numeroAtual + numeroAnterior;
        numeroAnterior = numeroAtual;
        numeroAtual = numeroProximo;
    }

    let fibonacci = (numeroProcurado == numeroAtual | numeroProcurado == numeroAnterior);

    resultado2.innerHTML = (fibonacci ? "<span>É um número Fibonacci</span>" : 
        "<span style='color: red;'>Não é um número Fibonacci</span>");
}

function inverterString(valor) {
    valor = [...valor].reverse().join("");
    resultado5.innerHTML = valor;
}

resultadoPrimeiraPergunta();