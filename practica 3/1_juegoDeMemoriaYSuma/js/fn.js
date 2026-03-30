let puntaje
let suma

let pausado = false
let pausas

let iniciar = document.querySelector('#iniciar')
let habilitar = document.querySelector('#habilitar')
let pausa = document.querySelector('#pausa')

let reemplazar = document.querySelector('#reemplazar')

let esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function pausar(){
    if (pausado == false){
        pausado = true
        pausas++
    } else {
        pausado = false
    }
}

async function iniciarJuego(){
    reemplazar.className = 'reemplazar'
    let dificultad = Number(document.querySelector('#dificultad').value) 
    let intervalo = Number(document.querySelector('#intervalo').value)
    let cantidad = Number(document.querySelector('#cantidad').value)
    iniciar.disabled = true

    let cantidadNumeros = 8
    if (dificultad == 2){cantidadNumeros = 98}
    if (dificultad == 3){cantidadNumeros = 998}
    if (dificultad == 4){cantidadNumeros = 9998}

    if (cantidad > 99){
        cantidad = 99
    }
    if (cantidad < 3){
        cantidad = 3
    } 

    suma = -1
    let signo
    let numero
    let numeros = []
    while (suma < 0){
        suma = 0
        numeros = []
        for (let i=0; i < cantidad; i++){
            signo = Math.round(Math.random())
            numero = Math.round(Math.random() * cantidadNumeros + 1)
            if (signo == 0){
                numero = numero * -1
            }
            if (numero == numeros[i-1]){
                numero++
            } 
            numeros.push(numero)
            suma = suma + numero
        }
    }

    let indice = document.querySelector('#indice')
    let final = document.querySelector('#final')
    final.textContent = '/' + cantidad

    pausas = 0
    pausa.disabled = false
    for (let i=0; i < cantidad; i++){
            while (pausado == true) {
            await esperar(100)
            }

            indice.textContent = i+1
            reemplazar.textContent = numeros[i]
            
            await esperar(intervalo * 1000)
        }

    pausa.disabled = true
    iniciar.disabled = false

    let multiplicador = 0
    if (intervalo == 3){multiplicador = 1}
    if (intervalo == 2.5){multiplicador = 3}
    if (intervalo == 2){multiplicador = 7}
    if (intervalo == 1.5){multiplicador = 15}

    if (dificultad == 2){multiplicador = multiplicador * 3}
    if (dificultad == 3){multiplicador = multiplicador * 7}
    if (dificultad == 4){multiplicador = multiplicador * 15}

    puntaje = cantidad * multiplicador
    puntaje = puntaje/(pausas+1)

    habilitar.disabled = false
}

function respuesta(){
    let respuesta = Number(document.querySelector('#cantidad1').value)
    let puntajep = document.querySelector('#puntajep')

    if (respuesta == suma){
        puntajep.textContent = puntaje
        reemplazar.textContent = 'Correcto!'
    } else {
        reemplazar.className = 'reemplazar1'
        reemplazar.textContent = 'Erroneo la suma correcta era ' + suma
        puntajep.textContent = 0
    }
    habilitar.disabled = true
}