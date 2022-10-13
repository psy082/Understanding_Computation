import { Number } from "./Number.js";

export class Add {
  constructor(left, right) {
    this._left = left;
    this._right = right;
  }

  toString() {
    return `${this._left.toString()} + ${this._right.toString()}`;
  }

  reduce(environment) {
    if (this._left.isReducible) {
      return new Add(this._left.reduce(environment), this._right);
    }

    if (this._right.isReducible) {
      return new Add(this._left, this._right.reduce(environment));
    }

    return new Number(this._left.value + this._right.value);
  }

  get isReducible() {
    return true;
  }
}
