import chalk from "../node_modules/chalk/source/index.js";
import {
  ClasseORM,
  ErroArrayVazio,
  ErroObjetoInvalido,
  ErroObjetoNaoDefinido,
  ErroObjetoInexistente
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

  static atualizar(tipoRequisitado, idRequisitado, objetoNovo) {
    if (this.arr === undefined || this.arr === null || this.arr.length === 0) {
      throw new ErroArrayVazio(
        chalk.red("Array vazio! Nada para mostrar aqui!")
      );
    }

    const indiceCorrespondente = idRequisitado - 1;

    const itemObjeto = this.arr.find((item) => {
      if (
        item.tipo === tipoRequisitado &&
        indiceCorrespondente === this.arr.indexOf(item)
      ) {
        return item;
      }
    });

    if (itemObjeto === undefined || itemObjeto === null){
      throw new ErroObjetoInexistente(chalk.red("Objeto Inexistente!"));
    }

    const objeto = { tipo: this.tipoClasse, ...objetoNovo };
    const indiceItemObjeto = this.arr.indexOf(itemObjeto);
    this.arr[indiceItemObjeto] = objeto;
  }

  static remover(tipoRequisitado, idRequisitado) {
    if (this.arr === undefined || this.arr === null || this.arr.length === 0) {
      throw new ErroArrayVazio(
        chalk.red("Array vazio! Nada para mostrar aqui!")
      );
    }

    const indiceCorrespondente = idRequisitado - 1;

    const itemObjeto = this.arr.find((item) => {
      if (
        item.tipo === tipoRequisitado &&
        indiceCorrespondente === this.arr.indexOf(item)
      ) {
        return item;
      }
    });

    if (itemObjeto === undefined || itemObjeto === null){
      throw new ErroObjetoInexistente(chalk.red("Objeto Inexistente!"));
    }

    this.arr.splice(this.arr.indexOf(itemObjeto), 1);
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