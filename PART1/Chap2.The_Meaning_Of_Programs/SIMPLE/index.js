import { Machine } from "./Machine.js";
import { Number } from "./Number.js";
import { Add } from "./Add.js";
import { Multiply } from "./Multiply.js";
import { LessThan } from "./LessThan.js";
import { Variable } from "./Variable.js";

// const machine1 = new Machine(
//   new Add(
//     new Multiply(new Number(1), new Number(2)),
//     new Multiply(new Number(3), new Number(4))
//   )
// );

// machine1.run();
// console.log(machine1.reduced_expression);

// const machine2 = new Machine(
//   new LessThan(new Number(5), new Add(new Number(2), new Number(2)))
// );

// machine2.run();
// console.log(machine2.reduced_expression);

const machine3 = new Machine(new Add(new Variable("x"), new Variable("y")), {
  x: new Number(3),
  y: new Number(4),
});

machine3.run();
console.log(machine3.reduced_expression);
