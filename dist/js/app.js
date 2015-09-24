'use strict';

require("babel/polyfill");

function asyncCountUp() {
  var n, i;
  return regeneratorRuntime.async(function asyncCountUp$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        console.log('[begin]');
        n = 0;
        context$1$0.prev = 2;
        i = 0;

      case 4:
        if (!(i < 5)) {
          context$1$0.next = 11;
          break;
        }

        context$1$0.next = 7;
        return regeneratorRuntime.awrap(countUp(n));

      case 7:
        n = context$1$0.sent;

      case 8:
        i++;
        context$1$0.next = 4;
        break;

      case 11:
        context$1$0.next = 17;
        break;

      case 13:
        context$1$0.prev = 13;
        context$1$0.t0 = context$1$0['catch'](2);

        console.log(context$1$0.t0);
        console.log('error happened!!!');

      case 17:
        console.log(n);
        console.log('[finished]');

      case 19:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this, [[2, 13]]);
}

function countUp(n) {
  console.log('countUp');
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(n + 1);
    }, 1000);
  });
}

module.exports.asyncCountUp = asyncCountUp;
