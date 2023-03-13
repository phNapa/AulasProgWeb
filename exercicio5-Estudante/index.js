/*
⠀⠀⠀⠀⠀⠀⠀⠈⢶⣶⣦⣤⣤⣤⣤⣤⣤⣄⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⠿⠟⣛⣛⣛⡛⠛⠻⠿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⣿⢀⡀⠀⠈⠻⣿⣿⣷⡄⠀⠀⠀⠀⣀⣤
⠀⠀⠀⠀⢠⣶⣿⠿⠛⣉⣭⣍⠛⢿⣿⠘⣿⣿⣿⣷⡜⣿⣿⣿⣎⢿⣿⣿⣿⣿
⠀⠀⠀⣴⣿⡿⠁⠀⠀⣿⣿⣿⠀⠀⠃⠀⢸⣿⣿⠉⠁⢿⣿⣿⣿⠎⠉⢻⣿⠇
⠀⠀⣼⣿⣿⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⢸⣿⣿⠀⠀⣸⣿⣿⠃⠀⠀⠘⠁⠀
⢀⣾⣿⣿⡇⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⢸⣿⣿⠀⠀⣿⣿⠇⠀⠀⠀⠀⠀⠀
⢹⣿⣿⣿⡇⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⢸⣿⣿⠀⠾⠿⠋⠀⠀⠀⣠⠀⠀⠀
⠀⢿⣿⣿⣷⠀⠀⠀⠀⣿⣿⣿⣿⣿⣷⣶⣦⣍⠻⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀
⠀⠈⢻⣿⣿⣦⠀⠀⠀⣿⣿⣿⠉⠉⠉⠙⠻⣿⣷⣌⠉⠉⠉⠉⢻⣿⠟⠀⠀⠀
⠀⠀⠀⠙⢿⣿⣷⣤⡀⠿⢿⣿⠀⠀⠀⠀⢰⣜⢿⣿⣧⡀⠀⠀⠈⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠙⠿⢿⣿⣿⣶⣶⣶⣶⣾⡇⢸⣿⣦⠻⣿⣷⣄⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⣍⣉⣛⠋⠉⠉⠀⢸⣿⣿⠀⠙⣿⣿⣦⣀⠀⠀⣀⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⣿⡀⠀⠀⠀⣾⣿⣿⡀⠀⠈⢿⣿⣿⣿⣿⠟⠁⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠺⠿⣿⣿⣷⡀⠀⠚⠿⣿⣿⣷⡄⠀⠀⠙⠿⠟⠉⠀⠀⠀
*/

class Estudante{
    constructor(nome, email, RA, curso,disciplinas){
        this.nome = nome
        this.email = email
        this.RA = RA
        this.curso = curso
        this.disciplinas = disciplinas
    }
}

const aluno1 = new Estudante("Paulin", "teste@gmail.com", "8734873458723", "ADS" ,["matematica", "quimica", "geografia", "educação fisica"])
console.log(aluno1)

const aluno2 = new Estudante("Eduardo", "teste2@gmail.com", "2345234562345", "COMEX" ,["ingles", "portugues", "historia", "filosofia"])
console.log(aluno2)