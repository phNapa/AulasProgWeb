/*
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀creeper oh man !⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⡇⠀⠀⠀⠀⠀  ⢸⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⡇⠀⠀  ⠀⠀⠀⢸⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀
*/

const express = require("express")
const app = express()
const port = 3000

class Pessoa{
    constructor(nome, email, idade, hobbies){
        this.nome = nome
        this.email = email
        this.idade = idade
        this.hobbies = hobbies
    }
}

app.get('/pessoa',(req,res) => {

    const pessoa1 = new Pessoa("Paulo", "paulo@teste.com", 21, ["carros", "jogos", "séries"])
    const pessoaJson = JSON.stringify(pessoa1)
    res.setHeader("Content-Type", "application/json")
    res.send(pessoaJson)
})

app.get('/listapessoa',(req,res) => {
    const pessoa1 = new Pessoa("Paulo", "paulo@teste.com", 21, ["carros", "jogos", "séries"])
    const pessoa2 = new Pessoa("Lucas", "lucas@teste.com", 20, ["faz nada da vida", "filmes", "cachorro"])
    const pessoa3 = new Pessoa("thiGAS", "thigas@teste.com", 22, ["skate", "bike", "parque"])

    
    const listaPessoaJson = JSON.stringify([pessoa1,pessoa2,pessoa3])

    res.setHeader("Content-Type", "application/json")
    res.send(listaPessoaJson)
})

app.listen(port, () => {
    console.log("App executando na porta " + port)
})