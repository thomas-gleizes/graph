import {
  ColorRepresentation,
  Float32BufferAttribute,
  Mesh,
  MeshBasicMaterial,
  SphereGeometry,
} from "three";

class Point {
  private _x: number;
  private _y: number;
  private _z: number;
  private readonly _color: ColorRepresentation;

  constructor(x: number, y: number, z: number, color: ColorRepresentation) {
    this._x = x;
    this._y = y;
    this._z = z;
    this._color = color;
  }

  public getSphere(): Mesh {
    const geometry = new SphereGeometry(0.5, 16, 16);

    geometry.setAttribute("position", new Float32BufferAttribute([this._x, this._y, this._z], 3));

    const material = new MeshBasicMaterial({ color: this._color });

    return new Mesh(geometry, material);
  }

  get z(): number {
    return this._z;
  }

  set z(value: number) {
    this._z = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get color(): ColorRepresentation {
    return this._color;
  }
}

export default Point;
