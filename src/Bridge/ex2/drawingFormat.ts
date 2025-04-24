import { Render } from "./render";

export abstract class DrawingFormat {
  private renderMethod: Render;

  constructor(render: Render) {
    this.renderMethod = render;
  }

  useRender(): void {
    this.renderMethod.render();
  }
}

export class VetorialDrawing extends DrawingFormat {
  useRender(): void {
    console.log(`Vetorial drawing`);
  }
}

export class BitmapDrawing extends DrawingFormat {
  useRender(): void {
    console.log(`Bitmap drawing`);
  }
}

export class Drawing3D extends DrawingFormat {
  useRender(): void {
    console.log(`3D drawing`);
  }
}
