import {ORM} from '../ORM/ORM.js';

class Pessoa extends ORM{
    static arr = [];
    static tipoClasse = this.name;
}

export {Pessoa};