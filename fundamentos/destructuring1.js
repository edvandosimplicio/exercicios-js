const pessoa = {
    nome: 'Vandinho',
    idade: 25,
    endereco: {
        logradouro: 'Rua tal',
        numero: 'Numero tal'
    }
}

const {nome: chamase, idade: anos } = pessoa

console.log(chamase, anos)

const {nome, idade} = pessoa
console.log(nome, idade)

const {sobrenome = null, humorAcido = null} = pessoa
console.log(sobrenome, humorAcido)

const { endereco: { logradouro, numero, cep = 5000.00 } } = pessoa
console.log(logradouro, numero, cep)