class ORM {
  constructor() {
    
    throw new Error("Classe ORM não pode ser instanciada diretamente!");
  }

  static criar() {

  }

  static atualizar() {}

  static remover() {}

  static buscar() {}
}
class Pessoa extends ORM {
  constructor() {}
}

class Animal extends ORM {
  constructor() {}
}
