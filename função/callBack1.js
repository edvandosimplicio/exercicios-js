const fabricantes = ['Nestlé', 'Orion', 'Treloso', 'Futurinhos']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)