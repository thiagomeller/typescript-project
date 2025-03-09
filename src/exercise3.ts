/* 
Exercício 3:
Converta um código que simula um sistema bancário simples
(com contas, depósitos e saques) usando funções para uma versão orientada a objetos.

type Conta = {
    numero: number;
    saldo: number;
};

let contas: Conta[] = [];

function criarConta(numero: number, saldoInicial: number): void {
    contas.push({ numero, saldo: saldoInicial });
    console.log(`Conta ${numero} criada com saldo inicial de R$${saldoInicial}.`);
}

function depositar(numeroConta: number, valor: number): void {
    const conta = contas.find(c => c.numero === numeroConta);
    if (conta) {
        conta.saldo += valor;
        console.log(`Depósito de R$${valor} realizado na conta ${numeroConta}. Novo saldo: R$${conta.saldo}.`);
    } else {
        console.log("Conta não encontrada.");
    }
}

function sacar(numeroConta: number, valor: number): void {
    const conta = contas.find(c => c.numero === numeroConta);
    if (conta) {
        if (conta.saldo >= valor) {
            conta.saldo -= valor;
            console.log(`Saque de R$${valor} realizado na conta ${numeroConta}. Novo saldo: R$${conta.saldo}.`);
        } else {
            console.log("Saldo insuficiente.");
        }
    } else {
        console.log("Conta não encontrada.");
    }
}

function consultarSaldo(numeroConta: number): void {
    const conta = contas.find(c => c.numero === numeroConta);
    if (conta) {
        console.log(`Saldo da conta ${numeroConta}: R$${conta.saldo}.`);
    } else {
        console.log("Conta não encontrada.");
    }
}

criarConta(123, 1000);
depositar(123, 500);
sacar(123, 200);
consultarSaldo(123);
*/

class Account {
  private number: number;
  private balance: number;

  constructor(number: number, balance: number) {
    this.balance = balance;
    this.number = number;
  }

  public getAccountNumber() {
    return this.number;
  }

  public deposit(value: number) {
    this.balance += value;
    console.log(`${value} reais adicionados a conta`);
  }

  public withdraw(value: number) {
    if (this.balance < value) {
      console.log("Saldo insuficiente");
    } else {
      this.balance -= value;
      console.log(`${value} reais removidos da conta`);
    }
  }

  public checkBalance() {
    console.log(`Este é o saldo da conta: ${this.balance} reais`);
  }
}

class Bank {
  private accounts: Account[] = [];

  public createAccount(number: number, initialBalance: number) {
    if (
      this.accounts.find((account) => account.getAccountNumber() === number)
    ) {
      console.log(`Account already created!`);
    } else {
      const newAccount = new Account(number, initialBalance);
      this.accounts.push(newAccount);
      console.log(
        `Account ${number} created with initial balance ${initialBalance} reais`
      );
    }
  }

  public deposit(accountNumber: number, value: number) {
    const account = this.accounts.find(
      (account) => account.getAccountNumber() === accountNumber
    );

    if (account) {
      account.deposit(value);
    } else {
      console.log("Conta não encontrada");
    }
  }

  public withdraw(accountNumber: number, value: number) {
    const account = this.accounts.find(
      (account) => account.getAccountNumber() === accountNumber
    );
    if (account) {
      account.withdraw(value);
    } else {
      console.log("Conta não encontrada");
    }
  }

  public checkBalance(accountNumber: number) {
    const account = this.accounts.find(
      (account) => account.getAccountNumber() === accountNumber
    );
    if (account) {
      account.checkBalance();
    } else {
      console.log("Conta não encontrada");
    }
  }
}

const bank = new Bank();
bank.createAccount(123, 500);
bank.checkBalance(123);
bank.deposit(123, 500);
bank.checkBalance(123);
bank.withdraw(123, 200);
bank.checkBalance(123);
