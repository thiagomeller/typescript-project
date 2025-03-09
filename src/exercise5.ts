/* 
Calculadora de Formas Geométricas

User Story: Como um estudante de matemática, eu quero poder calcular a área e 
o perímetro de diferentes formas geométricas, para que eu possa resolver problemas de geometria de forma rápida.

Requisitos:
Crie uma classe Retangulo com os atributos:

    largura (number)
    altura (number)

Adicione métodos para:

    Calcular a área (largura * altura).
    Calcular o perímetro (2 * (largura + altura)).
    Exibir os detalhes do retângulo (largura, altura, área e perímetro).

Crie uma classe Circulo com os atributos:

    raio (number)

Adicione métodos para:

    Calcular a área (Math.PI * raio * raio).
    Calcular o perímetro (2 * Math.PI * raio).
    Exibir os detalhes do círculo (raio, área e perímetro).

Teste o sistema criando um retângulo e um círculo, calculando suas áreas e perímetros, e exibindo os detalhes.
*/

class Rectangle2 {
  private height: number;
  private width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  public calculateArea() {
    return this.height * this.width;
  }

  public calculatePerimeter() {
    return 2 * (this.height + this.width);
  }

  public showDetails() {
    return console.log(`
      Retangulo
        Altura: ${this.height};
        Largura: ${this.width};
        Area: ${this.calculateArea()};
        Perimetro: ${this.calculatePerimeter()};
    `);
  }
}

class Circle {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  public calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }

  public showDetails() {
    return console.log(`
      Circulo
        Raio: ${this.radius};
        Area: ${this.calculateArea()};
        Perimetro: ${this.calculatePerimeter()};
    `);
  }
}

const rec = new Rectangle2(10, 5);
rec.showDetails();

const cir = new Circle(10);
cir.showDetails();
