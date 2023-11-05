import chalk from '../node_modules/chalk/source/index.js';
import {ClasseORM} from '../classes/ErroPesonalizado.js';

class ORM {
  constructor() {
    if(this.constructor === ORM) {
      throw new ClasseORM(chalk.red("Classe ORM não pode ser instanciada diretamente!"));
    }
    
  }

  static criar(itensObjeto) {
    const objetoComTipo = {...itensObjeto};
    this.arr.push(objetoComTipo); //this referencia a classe estudante
    console.log(this.arr);
  }

  static atualizar() {}

  static remover() {

  }

  static buscar() {}
}

export {ORM};