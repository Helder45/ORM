import chalk from "../node_modules/chalk/source/index.js";
import { ClasseORM } from "../classes/ErroPesonalizado.js";

class ORM {
  constructor() {
    if (this.constructor === ORM) {
      throw new ClasseORM(
        chalk.red("Classe ORM não pode ser instanciada diretamente!")
      );
    }
  }

  static criar(itens) {
    const objeto = { tipo: this.tipoClasse, ...itens };
    this.arr.push(objeto); //this referencia a classe estudante
  }

  static atualizar() {}

  static remover(tipoRequisitado, idRequisitado) {
    const idCorreto = (idRequisitado -= idRequisitado);
    this.arr.forEach(function (item, indice, array) {
      if (item["tipo"] === tipoRequisitado) {
        if (indice === idCorreto) {
          // console.log(chalk.green("Deu certo!", item['nome']));
          array.splice(indice, 1);
          // console.log(chalk.green("Item removido com sucesso!", itemRemovido));
        }
      }
    });
  }

  static buscar() {
    if (this.arr === undefined || this.arr === null || this.arr.length === 0) {
      console.error(chalk.red("Array vazio! Nada para mostrar aqui!"));
    } else {
      console.table(this.arr);
    }
  }
}

export { ORM };
