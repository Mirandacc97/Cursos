console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "Bola"
obj1['nome2'] = "Bola2" 
//Para acessar essas variaveis futuramente vc sempre terá que acessa-la dessa forma
//seja com o . ou com o []

console.log(obj1.nome)
console.log(obj1.nome2)

function Obj(nome) {
    this.nome = nome
}
