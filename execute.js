//Executar tudo

import {Estudante} from "./classes/Estudante.js";
import {Pessoa} from "./classes/Pessoa.js";
// import { ORM } from "./ORM/ORM.js";


Estudante.criar({nome: 'Helder', idade: 19});
Estudante.criar({nome: 'Romeu', idade: 25, deficiente: 'nao', rendaMensal: '5000.00'});
Estudante.criar({nome: 'Junior', idade: 20, deficiente: 'sim'});
Estudante.criar({nome: 'Fabio', idade: 30, deficiente: 'sim', rendaMensal: '4300.00', logradouro: 'Rua Pingado, Bairro Café Número 1223'});
Pessoa.criar({nome: 'pessoa1'});
Pessoa.criar({id: '1', nome: 'pessoa2'});
Pessoa.criar({id: '1123', nome: 'pessoa3', sobrenome: "jean"});
Pessoa.criar({id: '11212', nome: 'pessoa4', telefone: '55-5555-5555'});

Estudante.atualizar("Estudante", 4, {nome: "Fabiano", idade: 50});

Estudante.remover("Estudante", 2);
Estudante.remover("Estudante", 1);

Pessoa.remover("Pessoa", 4);
Pessoa.remover("Pessoa", 2);

Pessoa.atualizar("Pessoa", 1, {Ciencia: 'Agronomica'});
Pessoa.atualizar("Pessoa", 2, {Facebook: 'facebook.com'});


Estudante.remover("Estudante", 1);

Estudante.buscar();
Pessoa.buscar();
// const orm = new ORM();
// orm.criar({nome: 'Helder', idade: 19}); THROW ERRO