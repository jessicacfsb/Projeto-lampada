var lampada = document.getElementById ("lampada")
var botaoLigar = document.getElementById("ligar")
var botaoDesligar = document.getElementById("desligar")

function acenderLampada (){
    lampada.src = 'images/lampada-acesa.jpg'
}

function apagarLampada (){
    lampada.src = 'images/lampada.jpg'
}

botaoLigar.addEventListener('click', acenderLampada)
botaoDesligar.addEventListener('click', apagarLampada)