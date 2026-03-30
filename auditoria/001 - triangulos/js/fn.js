function determinar(){   
    let lado1 = Number(document.querySelector('#lado1').value)
    let lado2 = Number(document.querySelector('#lado2').value)
    let lado3 = Number(document.querySelector('#lado3').value)

    let iguales = 0

    let devolucion = 'easter-egg'

    let lados = [lado1, lado2, lado3]

    for (let i = 0; i < lados.length; i++){
        if (lados[i] > lados[i+1]){
            aux = lados[i]
            lados[i] = lados[i+1]
            lados[i+1] = aux
        } 
    }

    if (lados[0] + lados[1] > lados[2]){
        if (lado1 == lado2){
            iguales++
        }
        if (lado2 == lado3){
            iguales++
        }
        if (lado3 == lado1){
            iguales++
        }

        if (iguales == 3){
            devolucion = 'es equilatero'
        } else if (iguales == 1){
            devolucion = 'es isoseles'
        } else{
            devolucion = 'es escaleno'
        }
    } else{
        devolucion = 'error'
    }

    let cambio = document.querySelector('#cambio')
    cambio.textContent = devolucion
}

