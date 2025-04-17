interface FuncionarioA {
  nome: string;
  id: number;
  salario: number;
  departamento: string;
}

interface FuncionarioB {
  nomeCompleto: string;
  identificacao: string;
  remuneracao: number;
  setor: string;
  codigoAcesso: string;
}

class AdaptadorFuncionarioB implements FuncionarioA {
  private funcionarioB: FuncionarioB;

  constructor(funcionarioB: FuncionarioB) {
    this.funcionarioB = funcionarioB;
  }

  get nome(): string {
    return this.funcionarioB.nomeCompleto.split(" ")[0];
  }

  get id(): number {
    return parseInt(this.funcionarioB.identificacao, 10);
  }

  get salario(): number {
    return this.funcionarioB.remuneracao * 0.8;
  }

  get departamento(): string {
    const setor = this.funcionarioB.setor.toLowerCase();

    const mapeamento: Record<string, string> = {
      ti: "Tecnologia",
      tecnologia: "Tecnologia",
      rh: "RH",
      "recursos humanos": "RH",
      fin: "Financeiro",
      financeiro: "Financeiro",
    };

    return mapeamento[setor] || "Outros";
  }
}

class FuncionarioBConcreto implements FuncionarioB {
  constructor(
    public nomeCompleto: string,
    public identificacao: string,
    public remuneracao: number,
    public setor: string,
    public codigoAcesso: string
  ) {}
}

const funcionarioB = new FuncionarioBConcreto(
  "João Silva Pereira",
  "10045",
  5000.0,
  "TI",
  "TI-JSP-10045"
);

const adaptador = new AdaptadorFuncionarioB(funcionarioB);

console.log(`Nome: ${adaptador.nome}`);
console.log(`ID: ${adaptador.id}`);
console.log(`Salário: ${adaptador.salario}`);
console.log(`Departamento: ${adaptador.departamento}`);

function sistemaAProcessaFuncionario(funcionario: FuncionarioA): void {
  console.log("\nSistema A processando funcionário:");
  console.log(`- Nome: ${funcionario.nome}`);
  console.log(`- ID: ${funcionario.id}`);
  console.log(`- Salário líquido: R$ ${funcionario.salario.toFixed(2)}`);
  console.log(`- Depto: ${funcionario.departamento}`);
}

sistemaAProcessaFuncionario(adaptador);
