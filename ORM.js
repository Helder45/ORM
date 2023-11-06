import chalk from "../node_modules/chalk/source/index.js";
import {
  ClasseORM,
  ErroArrayVazio,
  ErroObjetoInvalido,
  ErroObjetoNaoDefinido,
  ErroTipoInexistente,
  ErroIndiceInexistente,
} from "../classes/ErroPesonalizado.js";

class ORM {
  constructor() {
    if (this.constructor === ORM) {
      throw new ClasseORM(
        chalk.red("Classe ORM não pode ser instanciada diretamente!")
      );
    }
  }

  static criar(itens) {
    if (itens === null || itens === undefined) {
      throw new ErroObjetoNaoDefinido(chalk.red("Objeto não definido"));
    }
    if (typeof itens !== "object") {
      throw new ErroObjetoInvalido(chalk.red("Objeto Inválido!"));
    }
    const objeto = { tipo: this.tipoClasse, ...itens };
    this.arr.push(objeto);
  }

  static atualizar() {}

  static remover(tipoRequisitado, idRequisitado) {
    const indiceCorrespondente = parseInt(idRequisitado) - 1;

    try {
      this.arr.forEach(function (item, indice, array) {
        if (item["tipo"] === tipoRequisitado) {
          if (indiceCorrespondente in array) {
            array.splice(indice, 1);
          } else {
            throw new ErroIndiceInexistente("Índice não encontrado!");
          }
        } else {
          throw new ErroTipoInexistente(
            "Tipo informado inexistente! Não foi possível realizar a remoção."
          );
        }
      });
    } catch (error) {
      console.error(chalk.red(error.stack));
    }
  }

  static buscar() {
    if (this.arr === undefined || this.arr === null || this.arr.length === 0) {
      throw new ErroArrayVazio(
        chalk.red("Array vazio! Nada para mostrar aqui!")
      );
    } else {
      console.table(this.arr);
    }
  }
}

export { ORM };
