export interface Observer {
  update(post: string): void;
  getNome(): string;
  getEmail(): string;
}
