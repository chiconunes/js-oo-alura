import User from "./User.js";
import chalk from 'chalk';
//const chalk = require('chalk');

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
    }

    exibirInfos() {
        return `${this.nome},${this.email},${this.nascimento},${this.role},${this.ativo} `
    }
}

