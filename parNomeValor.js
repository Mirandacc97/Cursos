//Par nome valor

const saudacao = "Opa"; // Contexto léxico 1
//Contexto lexico - é o local onde a variável foi declarada

function exec() {
    const saudacao = "Faaaaala" // Contexto léxico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Poeta Geraldinho',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)