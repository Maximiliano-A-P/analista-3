let padre = document.querySelector('#this')

let fondo = document.createElement('div')
fondo.setAttribute('id','fondo')
padre.appendChild(fondo)

let baraja = []
let cartas = []
let clicks = 0
let coincidencias = 0
let selecionadasId = []
let selecionadasValor = []
let botones = []

let esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function newBaraja(){
    baraja = [
        "😀","😀", //0
        "😡​","😡​", //1
        "😈​","😈​", //2
        "💀​","💀​", //3
        "💖​","💖​", //4
        "💚​","💚​", //5
        "💙​","💙​", //6
        "💜​","💜​", //7
        "💯​","💯​", //8
        "👌​","👌​", //9
        "🐾​","🐾​", //10
        "🗣️​","🗣️​", //11
        "❤️‍🩹​","❤️‍🩹​", //12
        "🥀​","🥀​", //13
        "🔞​","🔞​", //14
        "🎁​","🎁​", //15
        "🌈​","🌈​", //16
        "⛄​","⛄​", //17
        "🔥​","🔥​", //18
        "🫦​","🫦​", //19
        "⭐​","⭐​", //20
        "🎄​","🎄​", //21
        "🎭​","🎭​", //22
        "🔎","🔎", //23
        "​📍​","​📍​", //24
        "🕯️​","🕯️​", //25
        "❌​","❌​", //26
        "⚠️​","⚠️​", //27
        "🙊​","🙊​", //28
        "💟​","💟​", //29
        "👽​","👽​", //30
        "🤡​","🤡​", //31
        "👻​","👻​", //32
        "🤖​","🤖​", //33
        "🫆","🫆", //34
        "​🐙​","​🐙​", //35
        "🍉​","🍉​", //36
        "🍇​","🍇​", //37
        "🌽​","🌽​", //38
        "🍕​","🍕​", //39
        "🍔​","🍔​", //40
        "🍫","🍫", //41
        "​🍒​","​🍒​", //42
        "🌭​","🌭​", //43
        "🥟​","🥟​", //44
        "🍥​","🍥​", //45
        "🍙​","🍙​", //46
        "🧊​","🧊​", //47
        "🍽️​","🍽️​", //48
        "🥨​","🥨​", //49
    ]
}

class carta{
    constructor(emoji){
        this.emoji = emoji
        this.estado = 'oculto'
    }
}

function habilitar(){
    for (let i=0; i < 100; i++){
        if (cartas[i].estado == 'oculto'){
            let habilitar = document.querySelector(`#${'b'+i}`)
            habilitar.disabled = false
        } else {}
    }
}

function terminarJuego(){
    let resultados = document.createElement('div')
    resultados.setAttribute('id','resultados')
    padre.appendChild(resultados)

    let mensaje = document.createElement('p')
    mensaje.textContent = 'Juego Terminado!🎉'
    resultados.appendChild(mensaje)

    let cantidadClicks = document.createElement('p')
    cantidadClicks.textContent = 'Clicks dados: '+ clicks
    resultados.appendChild(cantidadClicks)

    let confeti = document.createElement('p')
    confeti.textContent = '🎊🎊🎊🎊🎊'
    resultados.appendChild(confeti)
}

async function revisar(id){
    clicks++
    if (clicks == 1){
        botones = document.querySelectorAll('.botones')
        //console.log(cartas)
    }
    let carta = document.querySelector(`#${id}`)
    let aux = id.slice(1)
    carta.textContent = cartas[aux].emoji
    carta.disabled = true
    selecionadasId.push(aux)
    selecionadasValor.push(cartas[aux].emoji)
    if (selecionadasId.length == 2){
        let carta1 = document.querySelector(`#${'b'+selecionadasId[0]}`)
        let carta2 = document.querySelector(`#${'b'+selecionadasId[1]}`)
        botones.forEach(boton => {
            boton.disabled = true
        });
        await esperar(1000)
        if (selecionadasValor[0] === selecionadasValor[1]){
            cartas[selecionadasId[0]].estado = 'visible'
            cartas[selecionadasId[1]].estado = 'visible'
            coincidencias++
            //coincidencias = 50
        } else{           
            carta1.textContent = ''
            carta2.textContent = ''
        }
        selecionadasId = []
        selecionadasValor = []
        habilitar()
    }
    if (coincidencias == 50){
        terminarJuego()
    }
}

class juego{
    logica(){
        newBaraja()
        for (let i=0; i < 100; i++){
            let emojiAux = Math.round(Math.random() * (baraja.length-1))
            let emoji = baraja[emojiAux]
            let object = new carta(emoji)
            cartas.push(object)
            baraja.splice(emojiAux,1)
        }
        cartas.forEach((carta, i) => {
            let button = document.createElement('button')
            button.setAttribute('id','b'+i)
            button.setAttribute('onclick','revisar(this.id)')
            button.setAttribute('class','botones')
            fondo.appendChild(button)
        })
    }
}

let memoriaYEmoji = new juego
memoriaYEmoji.logica()