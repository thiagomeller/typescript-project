/* 
# Exercício 2: Sistema de Transporte Urbano

## Contexto:
### Uma empresa de transportes gerencia diferentes veículos. 
Cada veículo tem um modelo, capacidade de passageiros e método de calcular o consumo de combustível.
- Ônibus têm um consumo fixo por quilômetro.
- Táxis cobram com base no número de passageiros e distância percorrida.

### Diagrama UML:
![exercicio_02](https://gist.github.com/user-attachments/assets/75280831-b0d6-46fa-be9d-d86e844efc5b)

### Objetivo: Implementar o cálculo de consumo para cada tipo de veículo.
*/

abstract class Veiculo {
    protected modelo: string;
    protected capacidade: number;

    constructor(modelo: string, capacidade: number) {
        this.capacidade = capacidade;
        this.modelo = modelo;
    }
    
    abstract calcularConsumo(distância: number, passageiros?: number): number;
}

class Onibus extends Veiculo {
    private consumoPorKm: number;

    constructor(modelo: string, capacidade: number, consumoPorKm: number) {
        super(modelo, capacidade);
        this.consumoPorKm = consumoPorKm;
    }

    calcularConsumo(distância: number): number {
        return this.consumoPorKm * distância;
    }
}

class Taxi extends Veiculo {
    private taxaPorPassageiro: number;

    constructor(modelo: string, capacidade: number, taxaPorPassageiro: number) {
        super(modelo, capacidade);
        this.taxaPorPassageiro = taxaPorPassageiro;
    }

    calcularConsumo(distância: number, passageiros: number = 1): number {
        return this.taxaPorPassageiro * distância * passageiros;
    }
}

const onibus = new Onibus('Onibus', 45, 100);
const taxi = new Taxi('Taxi', 4, 25);

console.log(onibus.calcularConsumo(100));
console.log(taxi.calcularConsumo(100));

