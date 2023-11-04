const saudacao = 'Opa' // contexto léxico 1

function exe() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Vando',
    idade: 25,
    peso: 90,
    endereco: {
        logradouro: 'Rua portelândia',
        numero: '513-A'
    }
}

console.log(saudacao)
console.log(exe())
console.log(cliente)