function FizzBuzz() {
}

FizzBuzz.prototype.play = function(number) {
  if (this._isDivisibleBy(15, number)) {
    return 'fizzbuzz';
  } else if (this._isDivisibleBy(5, number)) {
    return 'buzz';
  } else if (this._isDivisibleBy(3, number)) {
    return 'fizz';
  } else {
    return number;
  }
}

FizzBuzz.prototype._isDivisibleBy = function(divisor, number) {
  return (number % divisor === 0);
}
