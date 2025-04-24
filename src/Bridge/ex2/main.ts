import { BitmapDrawing, Drawing3D, VetorialDrawing } from "./drawingFormat";
import { WindowsRender } from "./render";

let renderMethod = new WindowsRender();

const vetorial = new VetorialDrawing(renderMethod);
vetorial.useRender();

const bitmap = new BitmapDrawing(renderMethod);
bitmap.useRender();

const threeD = new Drawing3D(renderMethod);
threeD.useRender();
