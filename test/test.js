const assert = require('assert');
const sumOfOther = require('../sumOfOther');
const make = require('../make');

describe('Function tests', () => {
  describe('sumOfOther', () => {
    it('test 1', () => {
      assert.deepStrictEqual(sumOfOther([1, 2, 10, 2]), [14, 13, 5, 13]);
    });
    it('test 2', () => {
      assert.deepStrictEqual(sumOfOther([1]), [0]);
    });
    it('test 3', () => {
      assert.deepStrictEqual(sumOfOther([1, 2]), [2, 1]);
    });
    it('test 4', () => {
      assert.deepStrictEqual(sumOfOther([5, 30, 100, 5, 10, 50]), [195, 170, 100, 195, 190, 150,
      ]);
    });
  });
});
describe('make', () => {
  function sum(a, b) {
    return a + b;
  }
  it('test 1', () => {
    assert.strictEqual(make(100)(sum), 100);
  });
  it('test 2', () => {
    assert.strictEqual(make(10, 48)(200)(80, 20)(sum), 358);
  });
  it('test 3', () => {
    assert.strictEqual(make(10000, 1000, 100, 10)(100000, 1, 1000000)(sum), 1111111);
  });
  it('test 4', () => {
    assert.strictEqual(make(100)(200)(300)(400)(500)(sum), 1500);
  });
});