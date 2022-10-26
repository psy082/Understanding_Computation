export class Number {
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
    if (!other instanceof Number) return false;
    return this.value === other.value;
  }

  get isReducible() {
    return false;
  }
}
