// Objetivo: Trabalhar com interfaces e tipos de união.

// Define a interface do produto
interface Produto {
    nome: string;
    tipo: string;
    valor: number;
}

// Possiveis formas de pagamento
type FormaPagamento = 'dinheiro' | 'credito' | 'pix' | 'debito';

// Define a interface da compra
interface Compra{
    produto: Produto;
    pagamento: FormaPagamento;
}

// Mostra compra
function exibirDetalhesCompras(compras: Compra[]): string {
    return compras.map(compra => 
        `Produto: ${compra.produto.nome}\nPreço: R$${compra.produto.valor}\ntipo: ${compra.produto.tipo}\nForma de pagamento: ${compra.pagamento}`
    ).join('\n\n');
}

const compras: Compra[] = [
    {
      produto: {
        nome: "Playstation 3",
        valor: 50.00,
        tipo: "Eletrônicos"
      },
      pagamento: 'debito'
    },
    {
      produto: {
        nome: "Guarana Jesus",
        valor: 2000.00,
        tipo: "Refresco"
      },
      pagamento: 'dinheiro'
    },
    {
      produto: {
        nome: "Cadeira Gamer",
        valor: 25000.00,
        tipo: "Móveis"
      },
      pagamento: 'pix'
    },
    {
      produto: {
        nome: " IBM 5150 PC",
        valor: 8000.00,
        tipo: "Computadores"
      },
      pagamento: 'credito'
    }
  ];
  
console.log(exibirDetalhesCompras(compras));
  

  