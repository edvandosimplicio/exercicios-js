//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

// Conexto léxico em ação!

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFunc = fora()

console.log(minhaFunc())