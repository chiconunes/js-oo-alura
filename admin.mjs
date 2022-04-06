import User from "./User.js";
import chalk from 'chalk';
//const chalk = require('chalk');

class Admin extends User{
    constructor(nome,email,nascimento,role='admin',ativo=true){
        super(nome,email,nascimento,role,ativo)
    }
    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }
}

const novoAdmin  = new Admin('Rodrigo','r@r.com','2021-01-01')
console.log(novoAdmin)
console.log(chalk.red( novoAdmin.exibirInfos()))
console.log(chalk.yellowBright( novoAdmin.criarCurso('JS',20)))