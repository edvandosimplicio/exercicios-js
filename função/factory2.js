function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Xiaomi', 1320.90))
console.log(criarProduto('iPhone 15', 4600.90))