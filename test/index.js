const test = require('tape');
const isFunction = require('lodash.isfunction');

const lucasLehmerTest = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(lucasLehmerTest));
});

test('works', function(t) {
  const TEST_ARRAY = [
    [2, true],
    [3, true],
    [4, false],
    [5, true],
    [6, false],
    [7, true],
    [8, false],
    [9, false],
    [10, false],
    [11, false],
    [12, false],
    [31, true],
    [47, false],
    [127, true]
  ];

  t.plan(TEST_ARRAY.length);

  TEST_ARRAY.forEach(function(value) {
    t.equal(lucasLehmerTest(value[0]), value[1]);
  });
});
