export class Number {
  constructor(v) {
    this.value = v;
  }

  toString() {
    return `${this.value}`;
  }

  get isReducible() {
    return false;
  }
}
