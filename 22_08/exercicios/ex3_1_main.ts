import { Cliente } from './ex3_1_cliente';
import { Pedido } from './ex3_1_pedido';

// Objetivo: Organizar o código usando módulos.

const cliente1 = new Cliente('Ivan Ometto', 'ivan@zipmail.com');
const pedido1 = new Pedido(cliente1, 'macintosh', 87500.00);
pedido1.exibirInformacoes();

const cliente2 = new Cliente('Pedro', 'Pedro@cansado.com');
const pedido2 = new Pedido(cliente2, 'IBM PC', 4500.00);
pedido2.exibirInformacoes();