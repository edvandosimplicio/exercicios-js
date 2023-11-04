function tratarErroELancar(erro) {
    throw 'não sei, se vira'
}

    function imprimirRage(obj) {
        try {
            console.log(obj.name.toUpperCase() + '!!!!')

        } catch (e) {
            tratarErroELancar(e)
        } finally {
            console.log('mais uma vez, não sei oq fazer')
        }
    }

    const obj = {
        nome: 'Vandinho'
    }

    imprimirRage(obj)