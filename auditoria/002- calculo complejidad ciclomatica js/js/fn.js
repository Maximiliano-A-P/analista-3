let input = document.querySelector('#inputJS')
let complejidadP = document.querySelector('#complejidadP')

input.addEventListener('change', evento => {
    const archivo = evento.target.files[0];

    if (!archivo) return;

    const lector = new FileReader();

    lector.onload = function(e) {
        const contenido = e.target.result;

        try {
            const ast = esprima.parseModule(contenido);

            let nodosPredicado = 0;

            traverse(ast, (node) => {
                if (node.type === 'IfStatement' || 
                    node.type === 'WhileStatement' || 
                    node.type === 'ForStatement' ||
                    node.type === 'DoWhileStatement') {
                    nodosPredicado++;
                }
                if (node.type === 'SwitchCase' && node.test !== null) {
                    nodosPredicado++;
                }
                if (node.type === 'LogicalExpression') {
                    nodosPredicado++;
                }
            });

            const complejidad = nodosPredicado + 1;
            complejidadP.textContent = 'La complejidad ciclomática es: ' + complejidad;

        } catch (error) {
            console.error("Error de parsing:", error);
            complejidadP.textContent = "Error: No se pudo leer el JS (Sintaxis inválida o no soportada).";
        }
    }
    lector.readAsText(archivo);
})

function traverse(node, callback) {
    callback(node);
    for (let key in node) {
        if (node[key] && typeof node[key] === 'object') {
            traverse(node[key], callback);
        }
    }
}