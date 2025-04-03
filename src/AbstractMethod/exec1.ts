// Interfaces dos produtos (brinquedos)
interface Carrinho {
  play(): void;
}

interface Boneca {
  play(): void;
}

class CarrinhoDePlastico implements Carrinho {
  play(): void {
    console.log("Brincando com carrinho de plástico");
  }
}

class BonecaDePlastico implements Boneca {
  play(): void {
    console.log("Brincando com boneca de plástico");
  }
}

class CarrinhoDeMadeira implements Carrinho {
  play(): void {
    console.log("Brincando com carrinho de madeira");
  }
}

class BonecaDeMadeira implements Boneca {
  play(): void {
    console.log("Brincando com boneca de madeira");
  }
}

interface FabricaDeBrinquedos {
  criarCarrinho(): Carrinho;
  criarBoneca(): Boneca;
}

class FabricaDePlastico implements FabricaDeBrinquedos {
  criarCarrinho(): Carrinho {
    return new CarrinhoDePlastico();
  }

  criarBoneca(): Boneca {
    return new BonecaDePlastico();
  }
}

class FabricaDeMadeira implements FabricaDeBrinquedos {
  criarCarrinho(): Carrinho {
    return new CarrinhoDeMadeira();
  }

  criarBoneca(): Boneca {
    return new BonecaDeMadeira();
  }
}

const fabricaPlastico = new FabricaDePlastico();
const fabricaMadeira = new FabricaDeMadeira();

const carrinho = fabricaPlastico.criarCarrinho();
const boneca = fabricaPlastico.criarBoneca();
carrinho.play();
boneca.play();

const carrinhoM = fabricaMadeira.criarCarrinho();
const bonecaM = fabricaMadeira.criarBoneca();
carrinhoM.play();
bonecaM.play();
