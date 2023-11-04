const valor = 'Global'

function funcao(){
    console.log(valor)
}

function execute(){
    const valor = 'interno'
    funcao()
}

execute()