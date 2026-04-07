async function calcular() {
    let cantidad = Number(document.querySelector('#cantidadPesos').value)
    let errorApi = document.querySelector('#errorApi')
    let errorCantidad = document.querySelector('#errorCantidad')

    errorCantidad.textContent = ''
    errorApi.textContent = ''

    let apiDolarOficial
    let apiDolarBlue
    let apiDolarMEP

    let DOC = document.querySelector('#DOC')
    let DOV = document.querySelector('#DOV')
    let DBC = document.querySelector('#DBC')
    let DBV = document.querySelector('#DBV')
    let DMEPC = document.querySelector('#DMEPC')
    let DMEPV = document.querySelector('#DMEPV')

    try{
        apiDolarOficial = await fetch('https://dolarapi.com/v1/dolares/oficial')
        apiDolarBlue = await fetch('https://dolarapi.com/v1/dolares/blue')
        apiDolarMEP = await fetch('https://dolarapi.com/v1/dolares/bolsa')

        if (!apiDolarOficial.ok || !apiDolarBlue.ok || !apiDolarMEP.ok){
            throw new Error('Error HTTP')
        }

    }catch(error){
        errorApi.textContent = 'La API fallo'
        return
    }

    if (cantidad == 0){
        errorCantidad.textContent = 'No se ingreso cantidad o esta en cero'     
    } else {
    let dolarOficial = await apiDolarOficial.json()
    let dolarBlue = await apiDolarBlue.json()
    let dolarMEP = await apiDolarMEP.json()

    DOC.textContent = ((cantidad / dolarOficial.compra).toFixed(2)).replace('.',',')
    DOV.textContent = ((cantidad / dolarOficial.venta).toFixed(2)).replace('.',',')

    DBC.textContent = ((cantidad / dolarBlue.compra).toFixed(2)).replace('.',',')
    DBV.textContent = ((cantidad / dolarBlue.venta).toFixed(2)).replace('.',',')

    DMEPC.textContent = ((cantidad / dolarMEP.compra).toFixed(2)).replace('.',',')
    DMEPV.textContent = ((cantidad / dolarMEP.venta).toFixed(2)).replace('.',',')
    }
}
