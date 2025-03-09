/* 
Sistema de Pagamentos

User Story: Como um cliente de uma loja online, eu quero poder pagar minhas compras 
usando diferentes métodos de pagamento (cartão de crédito, PayPal, boleto), para que eu possa escolher a opção mais conveniente.
Requisitos:

Crie uma interface MetodoPagamento com o método:

    pagar(valor: number): void - Deve processar o pagamento.

Implemente a interface em três classes:

    CartaoCredito: Processa o pagamento por cartão de crédito (exiba no console: "Pagamento de R$[valor] realizado com cartão de crédito.").
    PayPal: Processa o pagamento via PayPal (exiba no console: "Pagamento de R$[valor] realizado via PayPal.").
    Boleto: Processa o pagamento por boleto (exiba no console: "Pagamento de R$[valor] realizado com boleto.").

Crie uma classe Compra com o atributo:

    valor (number)
    E um método realizarPagamento(metodo: MetodoPagamento) que usa a interface para processar o pagamento.

Teste o sistema criando uma compra e realizando pagamentos com diferentes métodos.
*/

interface PaymentMethod {
  pay: (value: number) => void;
}

class CreditCard implements PaymentMethod {
  public pay(value: number) {
    console.log(`Pagamento de R$${value} realizado com cartão de crédito.`);
  }
}

class PayPal implements PaymentMethod {
  public pay(value: number) {
    console.log(`Pagamento de R$${value} realizado via Paypal.`);
  }
}

class Boleto implements PaymentMethod {
  public pay(value: number) {
    console.log(`Pagamento de R$${value} realizado com boleto.`);
  }
}

class Purchase {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  public pay(paymentMethod: PaymentMethod) {
    paymentMethod.pay(this.value);
  }
}

const purchase = new Purchase(1000);

const paypal = new PayPal();
const creditCard = new CreditCard();
const boleto = new Boleto();

purchase.pay(paypal);
purchase.pay(creditCard);
purchase.pay(boleto);
