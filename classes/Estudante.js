import {ORM} from '../ORM/ORM.js';

class Estudante extends ORM{
    static arr = [];
    static tipoClasse = this.name;
}

export {Estudante};