import chalk from "../node_modules/chalk/source/index.js";
import { ClasseORM, ErroArrayVazio, ErroObjetoInvalido, ErroObjetoNaoDefinido, ErroTipoInexistente, ErroIndiceInexistente } from "../classes/ErroPesonalizado.js";

class ORM {
  constructor() {
    if (this.constructor === ORM) {
      throw new ClasseORM(
        chalk.red("Classe ORM não pode ser instanciada diretamente!")
      );
    }
  }

  static criar(itens) {
    if(itens === null || itens === undefined) {
      throw new ErroObjetoNaoDefinido(
        chalk.red("Objeto não definido")
      );
    }
    if (typeof(itens) !== 'object'){
      throw new ErroObjetoInvalido(
        chalk.red("Objeto Inválido!")
      );
    }
    const objeto = { tipo: this.tipoClasse, ...itens };
    this.arr.push(objeto);
  }

  static atualizar() {}

  static remover(tipoRequisitado, idRequisitado) {
    const indiceCorrespondente = parseInt(idRequisitado) - 1;
    let i = 0;
    while (i < this.arr.length) {
      if (this.arr[i]["tipo"] !== tipoRequisitado){
        throw new ErroTipoInexistente(chalk.red("Tipo informado inexistente!"));
      }

      if (!(indiceCorrespondente in this.arr)){
        throw new ErroIndiceInexistente(chalk.red("Índice não encontrado!"));
      }
      i++;
    }

    this.arr.forEach(function (item, indice, array) {
      if (item["tipo"] === tipoRequisitado) {
        if (indice === indiceCorrespondente) {
          array.splice(indice, 1);
        }
      }
    });
  }

  static buscar() {
    if (this.arr === undefined || this.arr === null || this.arr.length === 0) {
      throw new ErroArrayVazio(chalk.red("Array vazio! Nada para mostrar aqui!"));
    } else {
      console.table(this.arr);
    }
  }
}

export { ORM };
