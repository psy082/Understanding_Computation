import { Boolean } from "./Boolean.js";

export class If {
  constructor(condition, consequence, alternative) {
    this.condition = condition;
    this.consequence = consequence;
    this.alternative = alternative;
  }

  toString() {
    return `if (${this.condition}) { ${this.consequence} } else { ${this.alternative} }`;
  }

  get isReducible() {
    return true;
  }

  reduce(environment) {
    if (this.condition.isReducible) {
      return [
        new If(
          this.condition.reduce(environment),
          this.consequence,
          this.alternative
        ),
        environment,
      ];
    } else {
      if (new Boolean(true).is(this.condition)) {
        return [this.consequence, environment];
      } else {
        return [this.alternative, environment];
      }
    }
  }
}
