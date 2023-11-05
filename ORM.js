import chalk from '../node_modules/chalk/source/index.js';
import {ClasseORM} from '../classes/ErroPesonalizado.js';

class ORM {
  constructor() {
    if(this.constructor === ORM) {
      throw new ClasseORM(chalk.red("Classe ORM não pode ser instanciada diretamente!"));
    }
    
  }

  static criar(objetoArr) {

    // const objeto = {tipo: this.tipoClasse, objetoArr};
    this.arr.push(objetoArr); //this referencia a classe estudante
    console.table(this.arr);
  }

  static atualizar() {}

  static remover() {

  }

  static buscar() {
    console.log(this.arr[0]['0']);
  }
}

export {ORM};