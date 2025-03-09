/* 
Sistema de Cadastro de Produtos

User Story: Como um vendedor, eu quero poder cadastrar produtos, atualizar 
seus preços e exibir um relatório de todos os produtos cadastrados, para que eu possa gerenciar meu estoque de forma eficiente.
Requisitos:

Crie uma classe Produto com os atributos:

    nome (string)
    preco (number)
    quantidadeEmEstoque (number)

Adicione métodos para:

    Atualizar o preço do produto.
    Adicionar quantidade ao estoque.
    Remover quantidade do estoque (não permitir valores negativos).
    Exibir os detalhes do produto (nome, preço e quantidade em estoque).

Crie uma classe CadastroProdutos que gerencia uma lista de produtos.

    Adicione métodos para:
    Adicionar um novo produto.
    Atualizar o preço de um produto (usando o nome do produto).
    Exibir um relatório de todos os produtos (nome, preço e quantidade em estoque).

Teste o sistema cadastrando alguns produtos, atualizando seus preços e exibindo o relatório.
*/

class Product {
  private name: string;
  private price: number;
  private quantityInStock: number = 1;

  public constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public getProductName() {
    return this.name;
  }

  public updatePrice(newPrice: number) {
    this.price = newPrice;
  }

  public addStock(quantity: number) {
    this.quantityInStock += quantity;
  }

  public removeStock(quantity: number) {
    this.quantityInStock -= quantity;
  }

  public showDetais() {
    return `${this.name} - ${this.price} reais - Quant. em estoque: ${this.quantityInStock}`;
  }
}

class ProductsManager {
  private products: Product[] = [];

  public addProduct(product: Product) {
    const productAlreadyOnList = this.products.find(
      (el) => el.getProductName() === product.getProductName()
    );
    if (productAlreadyOnList) {
      productAlreadyOnList.addStock(1);
    } else {
      this.products.push(product);
    }
  }

  public updateProductPrice(productName: string, updatedPrice: number) {
    const product = this.products.find(
      (el) => el.getProductName() === productName
    );
    if (product) {
      product.updatePrice(updatedPrice);
    }
  }

  public showProducts() {
    console.log("Lista de produtos:");
    this.products.forEach((el, index) =>
      console.log(index + 1, el.showDetais())
    );
  }
}

const item1 = new Product("item1", 10);
const item2 = new Product("item2", 10);

const productsManager = new ProductsManager();

productsManager.addProduct(item1);
productsManager.addProduct(item2);
productsManager.showProducts();
productsManager.addProduct(item1);
productsManager.updateProductPrice("item1", 30);
productsManager.showProducts();
