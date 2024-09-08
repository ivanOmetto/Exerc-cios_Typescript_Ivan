import { Pessoa } from '../../pessoa';

// Objetivo: Utilizar interseção de tipos.

type Empregado = {
    empresa: string;
    salario: number;
};
  
type PessoaEmpregado = Pessoa & Empregado;
  
function exibirDetalhesPessoaEmpregado(pessoaEmpregado: PessoaEmpregado): string {
    return `Nome: ${pessoaEmpregado.name}\nIdade: ${pessoaEmpregado.age}\nEmpresa: ${pessoaEmpregado.empresa}\nSalário: R$${pessoaEmpregado.salario}`;
}
  
const pessoaEmpregado: PessoaEmpregado = {
    name: "Ivan",
    age: 21,
    empresa: "Banco Real",
    salario: 1000.00
};
  
console.log(exibirDetalhesPessoaEmpregado(pessoaEmpregado));
  