export class Boolean {
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
