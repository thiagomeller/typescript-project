/* 
# Exercício 3: Sistema de Banco Digital

## Contexto:
### Um banco deseja criar um sistema para contas bancárias. 
Cada conta tem um número e um saldo. Existem contas correntes e contas poupança.
- Contas Correntes permitem cheque especial.
- Contas Poupança acumulam juros mensais.

### Diagrama UML:
![exercicio_03](https://gist.github.com/user-attachments/assets/e65f4cb1-f27a-4404-b410-79f5d8a7bfba)

### Objetivo: Criar as classes e implementar as regras de saque e juros.
*/

abstract class ContaBancaria {
    protected numero: number;
    protected saldo: number;

    constructor(numero: number, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
        console.log(`deposito realizado, saldo: ${this.saldo}`);
    };

    public sacar(valor: number): boolean {
        if (valor > this.saldo) return false;
        this.saldo -= valor;
        console.log(`saque realizado. Saldo: ${this.saldo}`);
        return true;
    };
}

class ContaCorrente extends ContaBancaria {
    private limiteChequeEspecial: number;

    constructor(numero: number, saldo: number, limiteChequeEspecial: number) {
        super(numero, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public sacar(valor: number): boolean {
        if (valor < this.saldo) {
            this.saldo -= valor;
            console.log(`Saldo: ${this.saldo}`);
            return true;
        }

        if (valor > this.saldo && valor <= this.saldo + this.limiteChequeEspecial) {
            this.saldo = 0;
            this.limiteChequeEspecial -= valor;
            console.log(`Saldo: ${this.saldo}`);
            console.log(`Limite: ${this.limiteChequeEspecial}`);
            return true
        } else {
            console.log(`Não rolou`);
            return false;
        }
    }
}

class ContaPoupanca extends ContaBancaria {
    private taxaJuros: number;

    constructor(numero: number, saldo: number, taxaJuros: number) {
        super(numero, saldo);
        this.taxaJuros = taxaJuros;
    }

    public aplicarJuros() {
        const ganho = this.saldo * this.taxaJuros;
        this.saldo += ganho;
        return this.saldo;
    }
}

const contaCorrente = new ContaCorrente(1, 1000, 200);
const contaPoupanca = new ContaPoupanca(1, 1000, 0.5);

contaCorrente.sacar(30)
contaCorrente.sacar(1000)
contaCorrente.depositar(30)

contaPoupanca.aplicarJuros()





