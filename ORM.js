import chalk from '../node_modules/chalk';
const ErroClasseORM = require('../classes/ErroPesonalizado');

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


class Estudante extends ORM {
  static arr = [];
}

class Pessoa extends ORM {
  static arr = [];
}

class Animal extends ORM {
  static arr = [];
}

Estudante.criar( {nome: 'Helder', idade: 19}, {nome: 'Junior', idade: 20, deficiente: 'sim'});
