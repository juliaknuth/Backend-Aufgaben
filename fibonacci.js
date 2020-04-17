function fibonacci (n) {
    if (n === 1) {
      return [0, 1];
    } else {
      let number = fibonacci(n - 1);
      number.push(number[number.length - 1] + number[number.length - 2]);
      return number;
    }
  };

module.exports = fibonacci