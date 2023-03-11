const lista = ["Item1", "Item2", "Item3"]

const mt = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(lista[0])
console.log(mt[1][1])

//printa matriz maneira 1
mt.forEach(mt => console.log(mt))

//printa matriz maneira 2
mt.forEach(function(item){
        console.log(item)
})


//printa item por item da matriz
mt.forEach(function(item){
    item.forEach(function(valor){
        console.log(valor)
    })

})

//cria um objeto pessoa1
const pessoa1 = {
    nome: "Goku",
    idade: 20
}
console.log(pessoa1)


pessoa1.nome = "Gohan"
pessoa1.cpf = "3234234234"
console.log(pessoa1)

//cria a classe pessoa com construtor que recebe nome e idade
class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    podeDirigir(){
        return(this.idade>=18)? "Pode dirigir" : "Não pode dirigir"
    }
}

const pessoa2 = new Pessoa("Suzane Von Richtofen", 15)
console.log(pessoa2)
console.log(pessoa2.podeDirigir())
//altera pessoa2
pessoa2.nome = "Freeza"
pessoa2.cpf = "213423453"
pessoa2.idade = 20
console.log(pessoa2)
console.log(pessoa2.podeDirigir())
