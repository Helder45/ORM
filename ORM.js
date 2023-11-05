import chalk from '../node_modules/chalk/source/index.js';
import {ClasseORM} from '../classes/ErroPesonalizado.js';

class ORM {
  constructor() {
    if(this.constructor === ORM) {
      throw new ClasseORM(chalk.red("Classe ORM não pode ser instanciada diretamente!"));
    }
    
  }

  static criar(itens) {

    const objeto = {tipo: this.tipoClasse, ...itens};
    this.arr.push(objeto); //this referencia a classe estudante
  }

  static atualizar() {}

  static remover(tipoRequisitado) {
    this.arr.forEach(function (item, indice) {
      if (item['tipo'] === tipoRequisitado) {
        console.log(chalk.green("Deu certo!", item['nome']));
      }
    });
  }

  static buscar() {
    console.table(this.arr);
  }
}

export {ORM};