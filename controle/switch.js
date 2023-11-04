const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 1: console.log('ok')
        case 2:
        case 3: case 4: case 5:
        case 6: console.log('Aprovado') 
        break
        case 7: console.log('Recuperação')
        break
        case 8: console.log('Reprovado')
        break

        default: console.log('nota inválida')
    }
}
imprimirResultado()