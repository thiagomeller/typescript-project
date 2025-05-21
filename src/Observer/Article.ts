import { Observer } from "./Observer";
import { Subject } from "./Subject";

export default class Article implements Subject {
  private observers: Observer[] = [];
  private posts: string[] = [];

  notifyObserver(): void {}

  registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  removeObserver(o: Observer): void {
    for (let index = 0; index < this.observers.length; index++) {
      const element = this.observers[index];
      if (element === o) {
        this.observers.splice(index, 1);
      }
    }
  }

  addPost(post: string) {
    this.posts.push(post);
  }
}
