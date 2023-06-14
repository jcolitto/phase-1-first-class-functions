function receivesAFunction(postFunction) {
  postFunction();
}

//

function returnsANamedFunction() {
  return function namedFunction() {};
}

//

function returnsAnAnonymousFunction() {
  return function () {};
}
