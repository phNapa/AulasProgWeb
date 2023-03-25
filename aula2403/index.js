/*
⣿⣿⣿⣿⣿⣿⣿⠟⠉⠉⠄⠄⠄⠄⠄⠉⠉⠻⣿⣿⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⣿⡿⠁⢀⣤⡶⠶⠶⣦⡄⠰⡌⠂⠄⢸⣿⣿⣿⣿⣿⣿ 
⣿⣿⣿⣿⡟⠄⣰⠟⣡⣴⣶⣶⣤⣉⣀⣴⠖⠂⠈⣀⣀⣀⠉⠻⣿ 
⣿⣿⣿⣿⡇⠠⡏⠰⢋⣴⣶⣬⠹⣿⡟⢀⣴⣾⣿⣿⣿⣿⣿⣆⠘ 
⣿⣿⣿⣿⡇⠄⡇⠄⢉⠉⠉⠄⠄⣿⠁⣾⣿⣿⣿⣿⣿⣿⣿⣿⡄ 
⣿⣿⣿⣿⡇⠄⢻⠘⣬⣀⣀⣀⣴⢋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇ 
⣿⣿⣿⣿⡇⠄⢸⠆⣿⣿⣿⡟⢱⣿⡟⠻⠛⠉⠄⠄⠄⣀⣴⣶⣶ 
⣿⣿⣿⣿⡇⠄⠈⣰⣿⣿⣿⣷⡈⢿⣿⣦⣄⣀⠄⠄⠄⠉⠛⢻⣿ 
⣿⣿⣿⣿⠃⠄⠄⠈⠋⠹⣿⣿⡿⣦⡉⠻⠿⠿⣿⡿⠿⠒⠄⣸⣿ 
⠁⠄⠄⠈⢀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠉⠐⠄⠄⠄⠄⠄⠠⣶⣿⣿ 
⠄⠄⢀⣴⣿⣷⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢿⣿⣿ 
⠄⢠⣾⣿⣿⡏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⡀⢸⣿⣿ 
⢀⣿⣿⣿⠏⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣴⣶⣿⣿⣿⡇⣼⣿⣿ 
⢸⣿⠟⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⢠⣾⣿⣿⣿⣿⣿⡟⢠⣿⣿⣿ 
⠈⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣿⣿⣿⣿⣿⣿⠟⡀⠻⢿⣿⣿ 
⣷⣶⣶⣤⡀⠄⠄⠄⠄⠄⠄⢠⣤⣄⠉⡉⢉⣉⣥⡌⢻⡆⠈⣿⣿ 
⣿⣿⣿⣿⣿⣶⣤⠄⠄⠄⠄⢸⣿⡟⢀⡷⠸⢿⡿⠇⠘⠃⣰⣿⣿ 
⠛⠛⠛⠛⠛⠛⠛⠂⠄⠄⠄⠄⠉⠄⠄⠄⠂⠄⠄⠒⠚⠛ 
*/
//inicando server express
const express = require("express")
const app = express()
const port = 3000

//arrow function Ex. (req,res) =>{}  ==   function func (req,res){}
app.get('/',(req,res) => {
    res.send("Olá Mundo!")
})

//rota /bibliotecas
app.get('/bibliotecas',(req,res) => {
    //cria array bibliotecas
    const bibliotecas = {
        nome: "Teste-Express",
        vers: 1,
        bibliotecas: ["Express", "JSON"]
    }
    //transforma bibliotecas em arquivo JSON
    const bibliotecasJson = JSON.stringify(bibliotecas)
    res.setHeader("Content-Type", "application/json")
    //retorna 'bibliotecas' em formato JSON
    res.send(bibliotecasJson)
})

let soma = 0
app.get('/somar',(req,res) => {
    soma++
    res.send(JSON.stringify(req.headers))
    res.send(JSON.stringify(soma))
})

app.listen(port, () => {
    console.log("App executando na porta " + port)
})