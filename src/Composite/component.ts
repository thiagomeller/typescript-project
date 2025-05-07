export abstract class Component {
  protected name: string;
  protected path: string;

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }

  public getName() {
    return this.name;
  }

  public getPath() {
    return this.path;
  }

  public show(space: string = ""): void {
        throw new Error("Esse componente não suporter está ação.");
  }

  public add(c: Component): void {
        throw new Error("Esse componente não suporter está ação.");
  }

  public remove(c: Component): void {
        throw new Error("Esse componente não suporter está ação.");
  }

  public recoverChild(i: number): void {
        throw new Error("Esse componente não suporter está ação.");
  }

}
