// Objetivo: Trabalhar com herança e sobrescrita de métodos.

class ContaBancaria {
    titular: string;
    saldo: number;
  
    constructor(titular: string, saldo: number) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    exibirSaldo(): void{
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
    }
}
  
  
class ContaCorrente extends ContaBancaria{
    limiteCredito: number;

    constructor(titular: string, saldo: number, limiteCredito: number) {
        super(titular, saldo);
        this.limiteCredito = limiteCredito;
      }

    exibirSaldo(): void {
        console.log(`Titular: ${this.titular}`);
        console.log(`Saldo disponível: R$${(this.saldo + this.limiteCredito).toFixed(2)}`);
    }
}
  
const conta1 = new ContaBancaria('Ivan Ometto', 2304.00);
console.log('\nConta Bancária:');
conta1.exibirSaldo();

const conta2 = new ContaCorrente('Pedro', 100.00, 5000.00);
console.log('\nConta Corrente:');
conta2.exibirSaldo();