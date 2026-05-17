let input = document.querySelector('#inputJS')
let complejidadP = document.querySelector('#complejidadP')
let tipos = document.querySelector('#tipos')
let tiposTopologicos = document.querySelector('#tiposTopologicos')
let casos = document.querySelector('#casos')

input.addEventListener('change', evento => {
    const archivo = evento.target.files[0];
    if (!archivo) return;

    const lector = new FileReader();
    lector.onload = function(e) {
        const contenido = e.target.result;
        
        try {
            const ast = esprima.parseModule(contenido , {range: true});
            let casosGenerados = [];

            let nodosPredicado = 0;
            let clasificacion = {
                for: 0,
                while: 0, 
                doWhile: 0, 
                forIn: 0, 
                forOf: 0, 
                if: 0, 
                otros: 0
            };
            
            let estadisticasTopologia = {
                simples: 0, 
                anidados: 0, 
                concatenados: 0, 
                noEstructurados: 0
            };

            estraverse.traverse(ast, {
                enter: function (node, parent) {

                    if (node.type === 'IfStatement') { clasificacion.if++; nodosPredicado++; }
                    if (node.type === 'WhileStatement') { clasificacion.while++; nodosPredicado++; }
                    if (node.type === 'ForStatement') { clasificacion.for++; nodosPredicado++; }
                    if (node.type === 'ForInStatement') { clasificacion.forIn++; nodosPredicado++; }
                    if (node.type === 'ForOfStatement') { clasificacion.forOf++; nodosPredicado++; }
                    if (node.type === 'DoWhileStatement') { clasificacion.doWhile++; nodosPredicado++; }
                    if (node.type === 'SwitchCase' && node.test !== null) { clasificacion.otros++; nodosPredicado++; }
                    if (node.type === 'LogicalExpression') { clasificacion.otros++; nodosPredicado++; }
                    
                    //Clasificación Topológica
                    if (esBucle(node)) {
                        // 1. Extraer el string exacto del bucle usando los rangos
                        let codigoBucle = contenido.substring(node.range[0], node.range[1]);

                        // 2. Determinar su categoría topológica
                        let categoria = "Simple";
                        if (tienePadreBucle(this.parents())) {
                            categoria = "Anidado";
                            estadisticasTopologia.anidados++;
                        } else {
                            if (esConcatenado(node, parent)) {
                                estadisticasTopologia.concatenados++;
                                categoria = "Concatenado";
                            } else {
                                estadisticasTopologia.simples++;
                            }
                        }
                        
                        if (tieneSaltosIrregulares(node)) {
                            estadisticasTopologia.noEstructurados++;
                            categoria = "No Estructurado"
                        }

                        let plantillaPrueba = generarPlantillaPrueba(codigoBucle, categoria, loopCounter);
                        casosGenerados.push(plantillaPrueba);
                    }
                }
            });

            // 4. Mostrar las pruebas generadas en la interfaz
            areaPruebas.textContent = casosGenerados.join('\n\n');

            const complejidad = nodosPredicado + 1;
            complejidadP.textContent = 'La complejidad ciclomática es: ' + complejidad;

            tipos.innerHTML = `
                - For: ${clasificacion.for}<br>
                - While: ${clasificacion.while}<br>
                - Do-While: ${clasificacion.doWhile}<br>
                - For-In: ${clasificacion.forIn}<br>
                - For-Of: ${clasificacion.forOf}<br>
                - If: ${clasificacion.if}<br>
                - Otros: ${clasificacion.otros}
            `;

            tiposTopologicos.innerHTML = `
                - Simples: ${estadisticasTopologia.simples}<br>
                - Anidados: ${estadisticasTopologia.anidados}<br>
                - Concatenados: ${estadisticasTopologia.concatenados}<br>
                - No estructurados: ${estadisticasTopologia.noEstructurados}
            `;

        } catch (error) {
            console.error("Error de parsing:", error);
            complejidadP.textContent = "Error: Sintaxis de JS inválida.";
        }
    }
    lector.readAsText(archivo);
});

function esBucle(node) {
    return ['ForStatement', 'WhileStatement', 'DoWhileStatement', 'ForInStatement', 'ForOfStatement'].includes(node.type);
}

function tienePadreBucle(parents) {
    return parents.some(p => esBucle(p));
}

function esConcatenado(node, parent) {
    if (!parent) return false;
    // Buscamos en 'body' o 'consequent' (para ifs sin llaves)
    let listaNodos = parent.body || parent.consequent;
    
    // Si el body es un BlockStatement, entramos a su lista de nodos
    if (listaNodos && listaNodos.type === 'BlockStatement') {
        listaNodos = listaNodos.body;
    }

    if (Array.isArray(listaNodos)) {
        const buclesEnNivel = listaNodos.filter(n => esBucle(n));
        return buclesEnNivel.length > 1;
    }
    return false;
}

function tieneSaltosIrregulares(node) {
    let irregular = false;
    estraverse.traverse(node, {
        enter: function(child) {
            // Un bucle no estructurado usa etiquetas (labels) para saltar
            if ((child.type === 'BreakStatement' || child.type === 'ContinueStatement') && child.label) {
                irregular = true;
            }
        }
    });
    return irregular;
}

// --- EMULACIÓN DE ESTRAVERSE PARA TU PROYECTO ---
const estraverse = {
    traverse: function (root, visitor) {
        const stack = []; // Pila para rastrear los padres

        function internalTraverse(node, parent) {
            if (!node || typeof node !== 'object') return;

            // Mock de la función parents() que pide tu código
            const context = {
                parents: () => [...stack]
            };

            // Ejecutar el 'enter' usando el contexto para que 'this.parents()' funcione
            if (visitor.enter) {
                visitor.enter.call(context, node, parent);
            }

            // Guardar el nodo actual en la pila de padres antes de bajar a los hijos
            stack.push(node);

            // Recorrer todas las propiedades del nodo
            for (let key in node) {
                if (Object.prototype.hasOwnProperty.call(node, key)) {
                    const child = node[key];
                    if (Array.isArray(child)) {
                        child.forEach(c => internalTraverse(c, node));
                    } else if (child && typeof child === 'object' && child.type) {
                        internalTraverse(child, node);
                    }
                }
            }

            // Sacar el nodo de la pila al terminar de recorrer sus hijos
            stack.pop();
        }

        internalTraverse(root, null);
    }
};
// --- FIN DE LA FUNCIÓN ESTRAVERSE ---

// Función asistente para armar el archivo de pruebas automáticamente
function generarPlantillaPrueba(codigoBucle, categoria, id) {
    let sugerenciaEntrada = "";

    // Inteligencia básica según la categoría
    switch(categoria) {
        case "Simple":
            sugerenciaEntrada = `
    // TOPOLOGÍA: SIMPLE
    // Alerta de Caja Blanca: Prueba los límites de la condición del bucle.
    const entradaInmediata = []; // Fuerza 0 iteraciones
    const entradaNormal = [1, 2, 3]; // Fuerza N iteraciones`;
            break;
        case "Anidado":
            sugerenciaEntrada = `
    // TOPOLOGÍA: ANIDADO
    // Alerta de Caja Blanca: Prueba matrices vacías [[]] o combinaciones extremas (NxM).
    const matrizVacia = []; 
    const matrizExtrema = [[0]];`;
            break;
        default:
            sugerenciaEntrada = `
    // TOPOLOGÍA: ${categoria.toUpperCase()}
    // Alerta de Caja Blanca: Verifica estados intermedios o salidas abruptas (break/continue).
    const datosEntrada = null;`;
            break;
    }

    // Retorna una estructura limpia simulando un archivo de pruebas real
    return `/** ---- PRUEBA AUTOMÁTICA PARA BUCLE #${id} ---- **/
describe('Pruebas para Bucle #${id} (${categoria})', () => {
    test('Debería procesar correctamente los valores límite de la condición', () => {
        ${sugerenciaEntrada.trim()}
        
        // Código aislado bajo análisis:
        function encasuladoParaPrueba() {
            // Inyecta tus variables de prueba aquí antes de ejecutar el bucle
            ${codigoBucle.replace(/\n/g, '\n            ')}
        }

        expect(() => encasuladoParaPrueba()).not.toThrow();
    });
});`;
}