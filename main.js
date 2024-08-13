const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: " Maria, uma jovem de 22 anos, descobre que está grávida inesperadamente. Ela vive em um país onde o aborto ainda é um tema controverso e está considerando suas opções.",
         alternativas: [
            "Maria decide procurar uma clínica para realizar o aborto.",
            "Maria decide continuar com a gravidez e procurar apoio."
        ]
    },
    {
        enunciado: "Enunciado 02",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Enunciado 03",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Enunciado 04",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
    {
        enunciado: "Enunciado 05",
        alternativas: [
            "alternativa 01",
            "alternativa 02"
        ]
    },
]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Inicio do texto... "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();