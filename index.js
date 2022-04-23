import User from "./User.js";
import Docente from "./Docente.mjs";
import Admin from "./admin.mjs";
import chalk from "chalk";


const novoUser = new User("Mariana","m@m.com",'2021-01-01')
console.log(chalk.red(novoUser.exibirInfos()))
   
const novoAdmin = new Admin('Rodrigo','r@r.com','2021-0101')
console.log(chalk.blue(novoAdmin.nome))
novoAdmin.nome = 'Francisco Cardoso Nunes'
console.log(chalk.blue(novoAdmin.nome))
