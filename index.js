var bigInt = require('big-integer');

module.exports = function(p) {
  p = bigInt(p);
  if (p.equals(2)) {
    return true;
  }
  // else if (!primality(p)) {
  //   return false;
  // }

  var s = bigInt(4);
  var M = bigInt(2).pow(p).minus(1);

  var index = -1;
  while (++index < p - 2) {
    s = bigInt(s).pow(2).minus(2).mod(M);
  }

  return s.equals(0);
};