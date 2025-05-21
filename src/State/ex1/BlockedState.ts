import { BankAccount } from "./BankAccount";
import { State } from "./State";

export class ActiveState extends State {
  private account: BankAccount;

  constructor(a: BankAccount) {
    super();
    this.account = a;
  }

  deposit(): void {
    this.account.deposit();
    console.log("Deposito realizado");
  }

  withdraw(): void {
    this.account.withdraw();
    console.log("Saque realizado");
  }
}
