let a = 3
global.b = 123

this.c = 333
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// variavel maluca sem var e let

maluca = 3

console.log(global.abc)
