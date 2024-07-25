var conta = ""
var contaScript = ""
var click

var screenCalc = document.getElementById('calculo')
var screenResult = document.getElementById('result')
var historico = document.getElementById('hist')

function atualizar() {
    screenCalc.innerHTML = conta
}

function add(item) {
    click = item

    switch (click) {
        case 1:
            conta += "("
            contaScript += "("
            break
        case 2:
            conta += ")"
            contaScript += ")"
            break
        case 3:
            conta += "%"
            contaScript += "%"
            break
        case 4:
            conta += "7"
            contaScript += "7"
            break
        case 5:
            conta += "8"
            contaScript += "8"
            break
        case 6:
            conta += "9"
            contaScript += "9"
            break
        case 7:
            conta += "÷"
            contaScript += "/"
            break
        case 8:
            conta += "4"
            contaScript += "4"
            break
        case 9:
            conta += "5"
            contaScript += "5"
            break
        case 10:
            conta += "6"
            contaScript += "6"
            break
        case 11:
            conta += "x"
            contaScript += "*"
            break
        case 12:
            conta += "1"
            contaScript += "1"
            break
        case 13:
            conta += "2"
            contaScript += "2"
            break
        case 14:
            conta += "3"
            contaScript += "3"
            break
        case 15:
            conta += "-"
            contaScript += "-"
            break
        case 16:
            conta += "0"
            contaScript += "0"
            break
        case 17:
            conta += ","
            contaScript += "."
            break
        case 18:
            conta += "+"
            contaScript += "+"
            break
        default:
            alert("Botão desconhecido!")
            break
    }

    atualizar()
}

function clean() {
    conta = ""
    contaScript = ""
    screenCalc.innerHTML = ""
    screenResult.innerHTML = ""
}

function calculete() {
    try {
        var result = eval(contaScript)
        screenResult.innerHTML = result

        var p = document.createElement('p')
        p.textContent = conta + " = " + result
        
        historico.appendChild(p)
    } catch (error) {
        alert("Não é uma conta válida, tente novamente!")
        console.log(error)
        location.reload()
    }
}

function cleanHist() {
    historico.innerHTML = ""
}