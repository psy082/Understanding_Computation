export class Machine2 {
  constructor(statement, environment) {
    this.statement = statement;
    this.environment = environment;
  }
  step() {
    [this.statement, this.environment] = this.statement.reduce(
      this.environment
    );
  }
  run() {
    while (this.statement.isReducible) {
      console.log(this.statement.toString());
      console.log(this.environment);
      this.step();
    }
    console.log(this.statement.toString());
    console.log(this.environment);
  }
}
