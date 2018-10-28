function make(...arguments) {
    const array = [];
    array.push(...arguments);
    return function sum(...args) {
      if (typeof args[0] === 'function') {
        const funct = args[0];
        return array.reduce((acc, num) => funct(acc, num));
      }
      array.push(...args);
      return sum;
    };
  }
  module.exports = make;  