var lucasLehmerTest = require('../');
var test = require('tape');

test('works', function(t) {
  var TEST_ARRAY = [
    [2, true],
    [3, true],
    [4, false],
    [5, true],
    [6, false],
    [7, true],
    [8, false],
    [9, false],
    [10, false],
    [31, true],
    [127, true]
  ];

  t.plan(TEST_ARRAY.length);

  TEST_ARRAY.forEach(function(value) {
    t.equal(lucasLehmerTest(value[0]), value[1]);
  });
});