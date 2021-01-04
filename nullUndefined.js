const { null, null } = require("mathjs");

let valor // sem atribuição
console.log(valor);

valor = null;
console.log(valor);

const produto = {};
produto.preco = null;
console.log(produto.preco);
console.log(typeof(produto.preco))
produto.preco = 'null';
console.log(produto.preco);
console.log(typeof(produto.preco));