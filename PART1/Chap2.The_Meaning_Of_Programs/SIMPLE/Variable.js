export class Variable {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `${this.name}`;
  }

  get isReducible() {
    return true;
  }

  valueOf() {
    return this.name;
  }

  reduce(environment) {
    return environment[this.name];
  }
}
