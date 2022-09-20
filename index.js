const bigInt = require('big-integer');

/**
 * @param {number} p
 * @returns {boolean}
 */
module.exports = function(p) {
  p = bigInt(p);
  if (p.equals(2)) {
    return true;
  }
  // else if (!primality(p)) {
  //   return false;
  // }

  let s = bigInt(4);
  const M = bigInt(2).pow(p).minus(1);

  let index = bigInt(-1);
  while ((index = index.next()).lesser(p.minus(2))) {
    s = s.pow(2).minus(2).mod(M);
  }

  return s.equals(0);
};
