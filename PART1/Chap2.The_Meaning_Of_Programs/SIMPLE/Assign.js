export class Assign {
  constructor(name, expression) {
    this.name = name;
    this.expression = expression;
  }

  toString() {
    return `${this.name.toString()} = ${this.expression.toString()}`;
  }

  get isReducible() {
    return true;
  }

  reduce(environment) {
    if (this.expression.isReducible) {
      return new Assign(this.name, this.expression.reduce(environment));
    } else {
    }
  }
}
