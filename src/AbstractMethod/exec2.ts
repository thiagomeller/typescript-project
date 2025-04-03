interface CriaturaForte {
  attack(): void;
}

interface CriaturaVeloz {
  attack(): void;
}

class Dragao implements CriaturaForte {
  attack(): void {
    console.log("Dragão ataca");
  }
}

class Salamandra implements CriaturaVeloz {
  attack(): void {
    console.log("Salamandra ataca");
  }
}

class SerpenteMarinha implements CriaturaForte {
  attack(): void {
    console.log("Serpente Marinha ataca");
  }
}

class Tritao implements CriaturaVeloz {
  attack(): void {
    console.log("Tritão ataca");
  }
}

interface FabricaDeCriaturas {
  criarCriaturaForte(): CriaturaForte;
  criarCriaturaVeloz(): CriaturaVeloz;
}

class FabricaReinoDoFogo implements FabricaDeCriaturas {
  criarCriaturaForte(): CriaturaForte {
    return new Dragao();
  }

  criarCriaturaVeloz(): CriaturaVeloz {
    return new Salamandra();
  }
}

class FabricaReinoDaAgua implements FabricaDeCriaturas {
  criarCriaturaForte(): CriaturaForte {
    return new SerpenteMarinha();
  }

  criarCriaturaVeloz(): CriaturaVeloz {
    return new Tritao();
  }
}

const reinoDoFogo = new FabricaReinoDoFogo();
const reinoDaAgua = new FabricaReinoDaAgua();

const criaturaForte = reinoDoFogo.criarCriaturaForte();
const criaturaVeloz = reinoDoFogo.criarCriaturaVeloz();
criaturaForte.attack();
criaturaVeloz.attack();

const criaturaForteA = reinoDaAgua.criarCriaturaForte();
const criaturaVelozA = reinoDaAgua.criarCriaturaVeloz();
criaturaForteA.attack();
criaturaVelozA.attack();
