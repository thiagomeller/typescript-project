/* 
Exercício 1:
Converta um código que calcula a área de um retângulo 
usando funções para uma versão orientada a objetos.

function calcularAreaRetangulo(largura: number, altura: number): number {
    return largura * altura;
}

function exibirArea(largura: number, altura: number): void {
    const area = calcularAreaRetangulo(largura, altura);
    console.log(`A área do retângulo é: ${area}`);
}

console.log(exibirArea(10, 5)); // Saída: A área do retângulo é: 50 
*/

class Rectangle1 {
  private height: number;
  private width: number;

  constructor(height: number, width: number) {
    (this.height = height), (this.width = width);
  }

  private calculateArea() {
    return this.height * this.width;
  }

  public showArea() {
    const area = this.calculateArea();
    console.log(`A área do retângulo é: ${area}`);
  }
}

const rectangle = new Rectangle1(10, 5);
rectangle.showArea();
