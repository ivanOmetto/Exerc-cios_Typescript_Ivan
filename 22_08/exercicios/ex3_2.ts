// Objetivo: Utilizar namespaces para organizar o código.

namespace Financeiro {
   
    export function calcularImposto(valor: number, taxa: number): number {
      return valor * (taxa / 100);
    }
  
    export function calcularDesconto(valor: number, taxa: number): number {
      return valor * (taxa / 100);
    }
  
    export class Orcamento {
      valorTotal: number;
      itens: string[];
  
      constructor(valorTotal: number, itens: string[]) {
        this.valorTotal = valorTotal;
        this.itens = itens;
      }
  
      aplicarImpostoEDesconto(impostoTaxa: number, descontoTaxa: number): void {
        const imposto = Financeiro.calcularImposto(this.valorTotal, impostoTaxa);
        const desconto = Financeiro.calcularDesconto(this.valorTotal, descontoTaxa);
        this.valorTotal += imposto - desconto;
      }
    }
}
  

const meuOrcamento = new Financeiro.Orcamento(1000, ['item1', 'item2']);
console.log(`Valor Total Inicial: R$${meuOrcamento.valorTotal.toFixed(2)}`);

meuOrcamento.aplicarImpostoEDesconto(10, 5);
console.log(`Valor Total Após Imposto e Desconto: R$${meuOrcamento.valorTotal.toFixed(2)}`);
