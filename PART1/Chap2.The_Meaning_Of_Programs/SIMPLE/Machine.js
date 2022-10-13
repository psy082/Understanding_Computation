export class Machine {
  constructor(expression, environment) {
    this.expression = expression;
    this.reduced_expression = this.expression;
    this.environment = environment;
  }

  step() {
    this.reduced_expression = this.reduced_expression.reduce(this.environment);
  }

  run() {
    while (this.reduced_expression.isReducible) {
      console.log(this.reduced_expression.toString());
      this.step();
    }
  }
}
