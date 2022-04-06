import User from "./User.js"
import chalk from "chalk"

class Docente extends User{
    constructor(nome,email,nascimento,role='docente',ativo=true){
        super(nome,email,nascimento,role,ativo)
    } 

    aprovaEstudante(estudante,curso){
        return `estudante ${estudante} passou no curso ${curso}.`

    }
}

const novoDocente = new Docente('Mariana','m@m.com','2021-01-01')
console.log(chalk.cyan(novoDocente))
console.log(chalk.green(novoDocente.exibirInfos()))
console.log(chalk.magenta(novoDocente.aprovaEstudante("Juliana","JS")))