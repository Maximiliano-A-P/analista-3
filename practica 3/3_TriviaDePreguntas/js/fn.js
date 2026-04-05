let cat1 = document.querySelector('#cat1')
let cat2 = document.querySelector('#cat2')
let cat3 = document.querySelector('#cat3')
let cat4 = document.querySelector('#cat4')
let cat5 = document.querySelector('#cat5')
let cat6 = document.querySelector('#cat6')

let respuestas = []
let botones = []

let debajo = document.querySelector('#debajo')

async function traerData() {
    let datos = await fetch('data/trivia_realista_240.json')
    let data = await datos.json()
    return data
}

async function inicio(){
    let data = await traerData()
    cat1.textContent = data.categorias[0].nombre
    cat2.textContent = data.categorias[1].nombre
    cat3.textContent = data.categorias[2].nombre
    cat4.textContent = data.categorias[3].nombre
    cat5.textContent = data.categorias[4].nombre
    cat6.textContent = data.categorias[5].nombre
    console.log(data)
}

inicio()

async function juego(categoria) {
    let superior = document.createElement('div')
    superior.setAttribute('id','superior')
    debajo.appendChild(superior)

    let data = await traerData()
    let tema = categoria;

    let number
    let preguntas = []

    let esta
    while (preguntas.length < 5) {
        number = Math.round(Math.random() * 40)
        esta = false
        for (let i = 0; i < preguntas.length; i++){
            if (number == preguntas[i]){
                esta = true
            }
        }
        if (esta == false) {
            preguntas.push(number)
        }
    }

    let divPregunta = document.createElement('div')
    divPregunta.setAttribute('class', 'flex') 
    superior.appendChild(divPregunta)

    let preguntaP = document.createElement('p')
    preguntaP.setAttribute('id','pregunta')
    preguntaP.textContent = 'pregunta'
    divPregunta.appendChild(preguntaP)

    let tiempo = document.createElement('p')
    tiempo.setAttribute('id','tiempo')
    tiempo.textContent = '5'
    divPregunta.appendChild(tiempo)

    let divRespuestas = document.createElement('div')
    divRespuestas.setAttribute('class', 'flex wrap')
    superior.appendChild(divRespuestas)
    
    let respuesta1 = document.createElement('button')
    respuesta1.setAttribute('class','respuesta')
    respuesta1.textContent = 'respuesta1'
    divRespuestas.appendChild(respuesta1)

    let respuesta2 = document.createElement('button')
    respuesta2.setAttribute('class','respuesta')
    respuesta2.textContent = 'respuesta2'
    divRespuestas.appendChild(respuesta2)

    let respuesta3 = document.createElement('button')
    respuesta3.setAttribute('class','respuesta')
    respuesta3.textContent = 'respuesta3'
    divRespuestas.appendChild(respuesta3)

    let respuesta4 = document.createElement('button')
    respuesta4.setAttribute('class','respuesta')
    respuesta4.textContent = 'respuesta4'
    divRespuestas.appendChild(respuesta4)

    botones.push(respuesta1)
    botones.push(respuesta2)
    botones.push(respuesta3)
    botones.push(respuesta4)

    let estadoJuego = 'enCurso'
    let cuantasPreguntas = 0
    let preguntasIndice
    let respuestaCorrectaLugar 
    while (estadoJuego == 'enCurso'){
        preguntasIndice = preguntas[cuantasPreguntas]
        preguntaP.textContent = data.categorias[tema].preguntas[preguntasIndice].pregunta
        respuestaCorrectaLugar = Math.round(Math.random() * 3)
        if (respuestaCorrectaLugar == 0){
            respuesta1.textContent = data.categorias[tema].preguntas[preguntasIndice].correcta
            respuesta1.onclick = () => suRespuesta(true)
            respuesta2.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[0]
            respuesta2.onclick = () => suRespuesta(false)
            respuesta3.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[1]
            respuesta3.onclick = () => suRespuesta(false)
            respuesta4.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[2]
            respuesta4.onclick = () => suRespuesta(false)
        }
        if (respuestaCorrectaLugar == 1){
            respuesta1.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[0]
            respuesta1.onclick = () => suRespuesta(false)
            respuesta2.textContent = data.categorias[tema].preguntas[preguntasIndice].correcta
            respuesta2.onclick = () => suRespuesta(true)
            respuesta3.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[1]
            respuesta3.onclick = () => suRespuesta(false)
            respuesta4.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[2]
            respuesta4.onclick = () => suRespuesta(false)
        }
        if (respuestaCorrectaLugar == 2){
            respuesta1.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[0]
            respuesta1.onclick = () => suRespuesta(false)
            respuesta2.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[1]
            respuesta2.onclick = () => suRespuesta(false)
            respuesta3.textContent = data.categorias[tema].preguntas[preguntasIndice].correcta
            respuesta3.onclick = () => suRespuesta(true)
            respuesta4.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[2]
            respuesta4.onclick = () => suRespuesta(false)
        }
        if (respuestaCorrectaLugar == 3){
            respuesta1.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[0]
            respuesta1.onclick = () => suRespuesta(false)
            respuesta2.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[1]
            respuesta2.onclick = () => suRespuesta(false)
            respuesta3.textContent = data.categorias[tema].preguntas[preguntasIndice].incorrectas[2]
            respuesta3.onclick = () => suRespuesta(false)
            respuesta4.textContent = data.categorias[tema].preguntas[preguntasIndice].correcta
            respuesta4.onclick = () => suRespuesta(true)
        }
        
        await continuar()

        cuantasPreguntas++

        if (cuantasPreguntas == 5) {
            estadoJuego = 'terminado'
        }
    }
}
 
function continuar(){
    return new Promise((resolve) => {
    let tiempoActual
    let tiempoP = document.querySelector('#tiempo')
    let i = 5

    let terminarTurno = () => {
        clearInterval(intervalo)
        botones.forEach(btn => btn.removeEventListener('click', terminarTurno))
        resolve()
    }

    let intervalo = setInterval(()=>{
            i--
            tiempoActual = i
            tiempoP.textContent = tiempoActual
            if (i == 0){
                suRespuesta(false)
                terminarTurno();
            }
        }, 1000)

    botones.forEach(btn =>{
        btn.addEventListener('click', terminarTurno)
    })
    })
}

function suRespuesta(suRespuesta){
    let respuesta = suRespuesta
    respuestas.push(respuesta)
    if (respuestas.length == 5) {
        debajo.lastElementChild.remove()
        mostrarResultados()
    }
}

function mostrarResultados(){
    let resultados = document.createElement('div')
    resultados.setAttribute('id','resultados')
    debajo.appendChild(resultados)

    let resultadosP = document.createElement('p')
    let cantidadCorrectas = 0
    for (let i = 0; i < 5; i++){
        if (respuestas[i] == true){
            cantidadCorrectas++
        }
    }
    resultadosP.textContent = 'Has acertado ' + cantidadCorrectas + ' preguntas!!!'
    resultados.appendChild(resultadosP)

    let volverInicioB = document.createElement('button')
    volverInicioB.textContent = 'Volver al inicio'
    volverInicioB.setAttribute('id','volverB')
    volverInicioB.onclick = () => volverInicio()
    resultados.appendChild(volverInicioB)
}

function volverInicio(){
    debajo.lastElementChild.remove()
}