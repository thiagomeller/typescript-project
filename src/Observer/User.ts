import { Observer } from "./Observer";
import { Subject } from "./Subject";

export default class User implements Observer {
  private name: string;
  private email: string;
  private subject: Subject;

  constructor(name: string, email: string, subject: Subject) {
    this.name = name;
    this.email = email;
    this.subject = subject;
    this.subject.registerObserver(this);
  }

  getEmail(): string {
    return this.email;
  }

  getNome(): string {
    return this.name;
  }

  update(post: string): void {
    console.log("## Post ##", post);
  }
}
