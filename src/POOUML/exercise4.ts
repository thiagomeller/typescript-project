/* 
# Exercício 4: Sistema de Pedidos de Restaurante

## Contexto:
### Um restaurante gerencia pedidos de clientes. Cada pedido tem um número, 
lista de itens e um método para calcular o valor total.
- Um item tem nome e preço.
- Os pedidos podem ser presenciais ou por delivery.
- Pedidos delivery têm um custo adicional de entrega.

### Diagrama UML:
![exercicio_04](https://gist.github.com/user-attachments/assets/51c981c4-d771-491a-a5bb-996b813f1e59)

### Objetivo: Implementar o cálculo do total, considerando o tipo de pedido.
*/

class Item {
    public nome: string;
    public preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedido {
    protected numero: number;
    protected items: Item[] = [];

    constructor(numero: number) {
        this.numero = numero;
    }

    public adicionarItem(item: Item) {
        this.items.push(item);
        console.log('item adicionado');
    }

    public calcularTotal(): number {
        const precos = this.items.map(item => item.preco);
        return precos.reduce((soma, a) => soma + a, 0);
    }
}

class PedidoDelivary extends Pedido {
    private taxaEntrega: number;

    constructor(numero: number, taxa: number) {
        super(numero);
        this.taxaEntrega = taxa;
    }

    public calcularTotal(): number {
        const precos = this.items.map(item => item.preco);
        return precos.reduce((soma, a) => soma + a, 0) + this.taxaEntrega;
    }
}

const item = new Item('item1', 10)
const item22 = new Item('item2', 20)

const pedido = new Pedido(2);

pedido.adicionarItem(item);
pedido.adicionarItem(item22);
console.log(pedido.calcularTotal());

const pedidoDelivary = new PedidoDelivary(3, 10);

pedidoDelivary.adicionarItem(item);
pedidoDelivary.adicionarItem(item22);
console.log(pedidoDelivary.calcularTotal());



