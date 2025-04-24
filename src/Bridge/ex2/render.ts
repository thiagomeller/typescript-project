export interface Render {
  render(): void;
}

export class WindowsRender implements Render {
  render(): void {
    console.log(`Windows Render`);
  }
}

export class LinuxRender implements Render {
  render(): void {
    console.log(`Linux Render`);
  }
}

export class AndroidRender implements Render {
  render(): void {
    console.log(`Android Render`);
  }
}
