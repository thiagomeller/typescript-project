/* 
# Exercício 1: Sistema de Gerenciamento de Funcionários

## Contexto:
### Uma empresa deseja um sistema para gerenciar seus funcionários. 
Cada funcionário possui nome, salário e cargo. Existem dois tipos de funcionários: efetivos e terceirizados.
- Funcionários efetivos têm um bônus anual fixo.
- Funcionários terceirizados têm um custo adicional por projeto.
- Todos os funcionários podem calcular seus vencimentos com base no salário e bônus adicionais.

### Diagrama UML:
![exercicio_01](https://gist.github.com/user-attachments/assets/4b39fd27-6b7b-40d9-8deb-9d2579f4633c)

### Objetivo: Implementar a hierarquia de classes e o método calcularVencimentos().
*/

abstract class Funcionario {
    protected nome: string;
    protected salario: number;
    protected cargo: string;

    constructor(nome: string, salario: number, cargo: string) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    abstract calcularVencimentos(): number;
}

class FuncionarioEfetivo extends Funcionario {
    private bonusAnual: number;

    constructor(nome: string, salario: number, cargo: string, bonus: number) {
        super(nome, salario, cargo);
        this.bonusAnual = bonus;
    }

    calcularVencimentos(): number {
        return this.salario + this.bonusAnual;
    }

}

class FuncionarioTercerizado extends Funcionario {
    private custoPorProjeto: number;

    constructor(nome: string, salario: number, cargo: string, custo: number) {
        super(nome, salario, cargo);
        this.custoPorProjeto = custo;
    }

    calcularVencimentos(): number {
        return this.salario + this.custoPorProjeto;
    }

}

const funcionarioEfetivo = new FuncionarioEfetivo('Thiafo', 1000, 'Dev', 10000);
const funcionarioTercerizado = new FuncionarioTercerizado('Outro', 2000, 'Dev', 2110);

console.log(funcionarioEfetivo.calcularVencimentos());
console.log(funcionarioTercerizado.calcularVencimentos());
 
