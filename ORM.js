import chalk from '../node_modules/chalk';
import ErroClasseORM from '../classes/ErroPesonalizado.js';

class ORM {
  constructor() {
    if(this.constructor === ORM) {
      throw new ErroClasseORM(chalk.red("Classe ORM não pode ser instanciada diretamente!"));
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
