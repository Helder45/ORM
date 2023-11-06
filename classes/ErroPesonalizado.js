import chalk from "../node_modules/chalk/source/index.js";

class ClasseORM extends Error{
    constructor(msg){
        super(msg);
        this.name = "ClasseORM";
    }
}

class ErroArrayVazio extends Error{
    constructor(msg) {
        super(msg);
        this.name = chalk.yellow("Erro de Array Vazio");
    }
}

class ErroObjetoInvalido extends Error{
    constructor(msg) {
        super(msg);
        this.name = chalk.yellow("Erro de Objeto Inválido");
    }
}

class ErroObjetoNaoDefinido extends Error{
    constructor(msg) {
        super(msg);
        this.name = chalk.yellow("Erro de Objeto Não Definido");
    }
}

class ErroObjetoInexistente extends Error{
    constructor(msg) {
        super(msg);
        this.name = chalk.yellow("Erro de Objeto Inexistente");
    }
}

export {ClasseORM, ErroArrayVazio, ErroObjetoInvalido, ErroObjetoNaoDefinido, ErroObjetoInexistente};