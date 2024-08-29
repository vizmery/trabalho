const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [ 
    {
    enunciado: " Maria, uma jovem de 22 anos, descobre que está grávida inesperadamente. Ela vive em um país onde o aborto ainda é um tema controverso e está considerando suas opções.",
    alternativas: [
        {
            texto:"Maria decide procurar uma clínica para realizar o aborto.",
            afirmacao:""
        },
    {
        
            texto:"Maria decide continuar com a gravidez e procurar apoio.",
           afirmacao:""
        }   
    ]
},
{
    enunciado: "Após o procedimento, Maria sente uma mistura de alívio e tristeza. Ela começa a participar de grupos de apoio para mulheres que passaram por situações semelhantes.",
    alternativas: [
        {
            texto: " Maria se torna uma defensora dos direitos reprodutivos das mulheres e se engaja em campanhas pela legalização do aborto. ",
            afirmacao: "maria se torna uma defensora"
        },
        {
            texto: " Maria decide focar em sua carreira e em seus estudos, tentando deixar a experiência para trás.",
            afirmacao: "Maria decide focar em sua carreira"
  ,
           

        }
    ]
},
{
    enunciado:" Maria decide não realizar o aborto e, em vez disso, opta por colocar o bebê para adoção após o nascimento." ,
    alternativas: [
        {
            texto: "Maria mantém contato com a família adotiva e sente que tomou a decisão certa." ,
        

        },
        {
            texto: "Maria tem dificuldades emocionais com a decisão de adoção e busca terapia para lidar com seus sentimentos." ,
        }
    ]

},
{
    enunciado: "Com o apoio da família, Maria consegue equilibrar os estudos e a maternidade. Ela começa a pensar em seu futuro e no futuro do bebê." ,
    alternativas: [
        {
            texto: "Maria encontra uma organização que ajuda mães jovens a continuarem seus estudos e decide se inscrever." ,
           
        },
        {
            texto:  "Maria decide pausar os estudos para se dedicar totalmente à criação do bebê."
,

        }
    ]
}

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
    caixaPerguntas.textContent = "  "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();