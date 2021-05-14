function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  if (b === 0) return 0;
  return a/b;
}

function mult(a, b) {
  return a * b;
}

module.exports = {sum, sub, div, mult};