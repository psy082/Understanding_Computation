import { Boolean } from "./Boolean.js";

export class LessThan {
  constructor(left, right) {
    this._left = left;
    this._right = right;
  }

  toString() {
    return `${this._left.toString()} < ${this._right.toString()}`;
  }

  reduce(environment) {
    if (this._left.isReducible) {
      return new LessThan(this._left.reduce(environment), this._right);
    }

    if (this._right.isReducible) {
      return new LessThan(this._left, this._right.reduce(environment));
    }

    return new Boolean(this._left < this._right);
  }

  get isReducible() {
    return true;
  }
}
