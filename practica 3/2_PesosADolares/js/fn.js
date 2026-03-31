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

    DOC.textContent = 'Compra:'
    DOV.textContent = 'Venta:'
    DBC.textContent = 'Compra:'
    DBV.textContent = 'Venta:'
    DMEPC.textContent = 'Compra:'
    DMEPV.textContent = 'Venta:'      
    } else {
    let dolarOficial = await apiDolarOficial.json()
    let dolarBlue = await apiDolarBlue.json()
    let dolarMEP = await apiDolarMEP.json()

    DOC.textContent = 'Compra: $' + (cantidad / dolarOficial.compra).toFixed(4)
    DOV.textContent = 'Venta: $' + (cantidad / dolarOficial.venta).toFixed(4)

    DBC.textContent = 'Compra: $' + (cantidad / dolarBlue.compra).toFixed(4)
    DBV.textContent = 'Venta: $' + (cantidad / dolarBlue.venta).toFixed(4)

    DMEPC.textContent = 'Compra: $' + (cantidad / dolarMEP.compra).toFixed(4)
    DMEPV.textContent = 'Venta: $' + (cantidad / dolarMEP.venta).toFixed(4)
    }
}