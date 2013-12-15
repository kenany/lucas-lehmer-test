# lucas-lehmer-test

[Lucas-Lehmer primality test](https://en.wikipedia.org/wiki/Lucas%E2%80%93Lehmer_primality_test)
in JavaScript. This is the primality test that is used by the Great Internet
Mersenne Prime Search to locate large primes, and has done a pretty good job of
finding some of the largest primes to date.

## Example

``` javascript
var lucasLehmerTest = require('lucas-lehmer-test');

lucasLehmerTest(31);
// => true
```

## Installation

``` bash
$ npm install lucas-lehmer-test
```

## API

``` javascript
var lucasLehmerTest = require('lucas-lehmer-test');
```

### lucasLehmerTest(value)

Uses the Lucas-Lehmer primality test to determine if `value` is a prime number.
Returns `true` if it is; otherwise it returns `false`. `value` can be either a
_Number_ (it most cases it probably will be) or a _String_ (for really large
numbers that JavaScript has a hard time with).