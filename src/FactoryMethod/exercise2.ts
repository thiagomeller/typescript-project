interface Payment {
  processPayment(amount: number): void;
}

class CreditCardPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`Processando pagamento de R$${amount} via Cartão de Crédito`);
  }
}

class PayPalPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`Processando pagamento de R$${amount} via PayPal`);
  }
}

class BoletoPayment implements Payment {
  processPayment(amount: number): void {
    console.log(`Processando pagamento de R$${amount} via Boleto`);
  }
}

type Methods = "cartaoCredito" | "paypal" | "boleto" | "pix";

class PaymentFactory {
  public static createPayment(method: Methods): Payment {
    switch (method.toLowerCase()) {
      case "cartaoCredito":
        return new CreditCardPayment();
      case "paypal":
        return new PayPalPayment();
      case "boleto":
        return new BoletoPayment();
      default:
        throw new Error(`Método de pagamento ${method} não suportado.`);
    }
  }
}

function processOrder(amount: number, paymentMethod: Methods) {
  try {
    const payment = PaymentFactory.createPayment(paymentMethod);
    payment.processPayment(amount);
    console.log("Pagamento realizado com sucesso!");
  } catch (error) {
    console.error(error);
  }
}

processOrder(100.5, "boleto");
processOrder(75.3, "paypal");
processOrder(200.0, "boleto");
processOrder(50.0, "pix");
