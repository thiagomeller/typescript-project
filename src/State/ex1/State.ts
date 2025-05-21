export abstract class State {
  deposit(): void {
    throw new Error("Operação inválida");
  }

  withdraw(): void {
    throw new Error("Operação inválida");
  }

  blockAccount(): void {
    throw new Error("Operação inválida");
  }

  reactivateAccount(): void {
    throw new Error("Operação inválida");
  }

  closeAccount(): void {
    throw new Error("Operação inválida");
  }

  contestBlockSolicitation(): void {
    throw new Error("Operação inválida");
  }
}
