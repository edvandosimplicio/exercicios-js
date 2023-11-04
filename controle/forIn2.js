const array = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in array){
    console.log(array[i])
}

const pessoa = {
    nome: 'Vadinho',
    sobrenome: 'Silva',
    idade: 24,
    peso: 75.5
}

for(let tribute in pessoa){
    console.log(`${tribute} = ${pessoa[tribute]}`)
}