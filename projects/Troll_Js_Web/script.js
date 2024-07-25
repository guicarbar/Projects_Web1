// area das variaveis

const block1 = `
    <div class="timer-troll">
        <h2>Timer</h2>
        <hr>
        <p>Apenas uma tela de loading, calma ai!</p>
        <div></div>
        <button title="Vc achou" onclick="trocar(2)"></button>
    </div>
`

const block2 = `
    <div class="cronometro" id="errot" onmousemove="errou()" onmouseenter="timerC()"></div>
`

const block3 = `
    <div id="passou">
        <h1>Voce consegui passar, parabens.</h1>
        <hr>
        <p>
            Agora so esperar carregar, estamos calculando seus pontos.
        </p>
        <div class="box">
            <div class="front"></div>
            <div class="back"></div>
            <div class="left" id="left" title="clica aqui" onmouseenter="btnRaimbow()" onmouseout="btnRaimbow()" onclick="trocar(4)"></div>
            <div class="right"></div>
            <div class="top"></div>
            <div class="botton"></div>
        </div>
    </div>
`

const block4 = `
    <div class="final">
        <h1>Agora é sério, você passou mesmo!</h1>
        <hr>
        <p>
            Muito obrigado por dedicar seu tempo neste game troll. Como já foi dito, o intuito desse game era apenas para trabalhar um pouco com JavaScript e testar minhas habilidades.
        </p>
        <p>
            Este gamezinho foi criado por Guilherme Carvalho. Visite meu GitHub e dê uma olhada em meus outros projetos.
        </p>
    </div>
`

const errouText = `
    <h1>ERROU!</h1>
`


// troll do sobre do site



function toggleBlur() {
    let element = document.getElementById('referencia');
    if (element.style.filter === 'none' || element.style.filter === '') {
        element.style.filter = 'blur(10px)';
    } else {
        element.style.filter = 'none';
    }
}



// function de randomizar os numeros



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// troll do teleport do botao

function teleport() {
    let button = document.getElementById('buttonTp')
    let largura = randomNumber(0, 1085)
    let altura = randomNumber(0, 557)

    button.style.top = altura + 'px'
    button.style.left = largura + 'px'
    button.style.transform = 'none'
}



// function de trocar as divs



function trocar(block) {
    let screen = document.getElementById('main-screen')

    switch (block) {
        case 1:
            screen.innerHTML = ''
            screen.innerHTML = block1
            break;
        case 2:
            screen.innerHTML = ''
            screen.innerHTML = block2
            break;
        case 3:
            screen.innerHTML = ''
            screen.innerHTML = block3
            break;
        case 4:
            screen.innerHTML = ''
            screen.innerHTML = block4
            break;
        default:
            screen.innerHTML = 'Erro'
      }
}



// troll de errou no cronometro



let timerOut
let timerCount

function passou() {
    trocar(3)
}

function timerC() {
    clearTimeout(timerOut);
    timerOut = setTimeout(passou, 6000);
}

function errou() {
    clearTimeout(timerCount);

    let text = document.getElementById('errot')

    text.innerHTML = errouText


    timerCount = setTimeout(() => {
        text.innerHTML = "";
    }, 700);

    timerC()
}



// troll do bloco girando



function btnRaimbow() {
    let left = document.getElementById('left')

    if (left.style.animation === "") {
        left.style.animation = "piscando .3s infinite ease"
    } else {
        left.style.animation = ""
    }
}