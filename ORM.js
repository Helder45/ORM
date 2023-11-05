import chalk from '../node_modules/chalk/source/index.js';
import {ClasseORM} from '../classes/ErroPesonalizado.js';

class ORM {
  constructor() {
    if(this.constructor === ORM) {
      throw new ClasseORM(chalk.red("Classe ORM não pode ser instanciada diretamente!"));
    }
    
  }

  static criar(...itens) {
    this.arr.push(...itens); //this referencia a classe estudante
    console.log(this.arr);
  }

  static atualizar() {}

  static remover() {

  }

  static buscar() {}
}

export {ORM};