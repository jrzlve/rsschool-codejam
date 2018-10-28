const assert = require('assert');
const sumOfOther = require('../sumOfOther');

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
