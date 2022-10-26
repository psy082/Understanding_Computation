export class Boolean {
  constructor(v) {
    this.value = v;
  }

  toString() {
    return `${this.value}`;
  }

  valueOf() {
    return this.value;
  }

  is(other) {
    console.dir(other.__proto__.constructor);
    console.dir(this.__proto__.constructor);
    if (!other instanceof Boolean) return false;
    return this.value === other.value;
  }

  get isReducible() {
    return false;
  }
}
