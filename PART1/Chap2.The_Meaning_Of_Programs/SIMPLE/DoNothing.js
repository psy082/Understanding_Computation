export class DoNothing {
  toString() {
    return "do-nothing";
  }

  equal(otherStatement) {
    return otherStatement instanceof DoNothing;
  }

  get isReducible() {
    return false;
  }
}
