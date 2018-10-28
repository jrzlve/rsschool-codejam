const assert = require('assert');
const sumOfOther = require('../sumOfOther');
const make = require('../make');
const recursion = require('../recursion');

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
      assert.deepStrictEqual(sumOfOther([5, 30, 100, 5, 10, 50]), [195, 170, 100, 195, 190, 150,]);
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
  describe('recursion', () => {
    it('test 1', () => {
      assert.deepStrictEqual(
        recursion({
          value: 100,
          left: { value: 90, left: { value: 70 }, right: { value: 99 } },
          right: { value: 120, left: { value: 110 }, right: { value: 130 } },
        }),
        [[100], [90, 120], [70, 99, 110, 130]],
        );
      });
    it('test 2', () => {
      assert.deepStrictEqual(
        recursion({
          value: 95,
          left: { value: 63, left: { value: 10 }, right: { value: 8 } },
          right: { value: 51, left: { value: 6 }, right: { value: 2 } },
        }),
        [[95], [63, 51], [10, 8, 6, 2]],
        );
      });
    it('test 3', () => {
      assert.deepStrictEqual(
        recursion({
          value: 12,
          left: { value: 15, left: { value: 37 }, right: { value: 39 } },
          right: { value: 58, left: { value: 99 }, right: { value: 101 } },
        }),
        [[12], [15, 58], [37, 39, 99, 101]],
      );
    });
    it('test 4', () => {
      assert.deepStrictEqual(
        recursion({
          value: 20,
          left: {
            value: 12,
            left: { value: 10, left: { value: 7 }, right: { value: 31 } },
            right: { value: 20, left: { value: 90 }, right: { value: 50 } },
          },
          right: {
            value: 25,
            left: { value: 24, left: { value: 83 }, right: { value: 60 } },
            right: { value: 40, left: { value: 90 }, right: { value: 13 } },
          },
        }),
        [[20], [12, 25], [10, 20, 24, 40], [7, 31, 90, 50, 83, 60, 90, 13]],
      );
    });
  });
});
