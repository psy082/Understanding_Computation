import { Machine } from "./Machine.js";
import { Machine2 } from "./Machine2.js";
import { Number } from "./Number.js";
import { Boolean } from "./Boolean.js";
import { Add } from "./Add.js";
import { Multiply } from "./Multiply.js";
import { LessThan } from "./LessThan.js";
import { Variable } from "./Variable.js";
import { Assign } from "./Assign.js";
import { If } from "./If.js";

const mode = 6;

if (mode === 1) {
  const machine = new Machine(
    new Add(
      new Multiply(new Number(1), new Number(2)),
      new Multiply(new Number(3), new Number(4))
    )
  );

  machine.run();
  console.log(machine.reduced_expression);
}

if (mode === 2) {
  const machine = new Machine(
    new LessThan(new Number(5), new Add(new Number(2), new Number(2)))
  );

  machine.run();
  console.log(machine.reduced_expression);
}

if (mode === 3) {
  const machine = new Machine(new Add(new Variable("x"), new Variable("y")), {
    x: new Number(3),
    y: new Number(4),
  });

  machine.run();
  console.log(machine.reduced_expression);
}

if (mode === 4) {
  let statement = new Assign("x", new Add(new Variable("x"), new Number(1)));
  console.log(statement.toString());

  let environment = { x: new Number(2) };
  console.log(environment);

  console.log(statement.isReducible);

  [statement, environment] = statement.reduce(environment);
  console.log(statement.toString());
  console.log(environment);

  [statement, environment] = statement.reduce(environment);
  console.log(statement.toString());
  console.log(environment);

  [statement, environment] = statement.reduce(environment);
  console.log(statement.toString());
  console.log(environment);

  console.log(statement.isReducible);
}

if (mode === 5) {
  const machine = new Machine2(
    new Assign("x", new Add(new Variable("x"), new Number(1))),
    { x: new Number(2) }
  );
  machine.run();
}

if (mode === 6) {
  const machine = new Machine2(
    new If(
      new Variable("x"),
      new Assign("y", new Number(1)),
      new Assign("y", new Number(2))
    ),
    { x: new Boolean(true) }
  );
  machine.run();
}
