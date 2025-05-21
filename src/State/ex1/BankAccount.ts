import { ActiveState } from "./ActiveState";
import { State } from "./State";

export class BankAccount {
  private active: State;
  private blocked: State;
  private inactive: State;
  private suspended: State;
  private closed: State;

  private state: State;

  constructor() {
    this.active = new ActiveState(this);

    this.state = this.active;
  }

  setState(s: State): void {
    this.state = s;
  }

  deposit(): void {
    this.state.deposit();
  }

  withdraw(): void {
    this.state.withdraw();
  }

  blockAccount(): void {
    this.state.blockAccount();
  }

  reactivateAccount(): void {
    this.state.reactivateAccount();
  }

  closeAccount(): void {
    this.state.closeAccount();
  }

  contestBlockSolicitation(): void {
    this.state.contestBlockSolicitation();
  }

  getActiveState() {
    return this.active;
  }
}
