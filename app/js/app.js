'use strict';

import "babel/polyfill";

function callbackCountUp() {
  console.log('**[begin]');
  var n = 0;

  countUpWithCallback(n, function(result1) {
    countUpWithCallback(result1, function(result2) {
      countUpWithCallback(result2, function(result3) {
        countUpWithCallback(result3, function(result4) {
          countUpWithCallback(result4, function(result5) {
            n = result5;
            console.log('**[finished] ' + n);
          });
        });
      });
    });
  });
}

function countUpWithCallback(n, callback) {
  console.log('countUp');
  setTimeout(() => {
    callback(n + 1);
  }, 1000);
}

function promiseCountUp() {
  console.log('**[begin]');
  var n = 0;

  countUp(n).then((n) => {
    return countUp(n);
  }).then((n) => {
    return countUp(n);
  }).then((n) => {
    return countUp(n);
  }).then((n) => {
    return countUp(n);
  }).then((n) => {
    console.log(n);
    console.log('**[finished] ' + n);
  });
}

async function asyncCountUp() {
  console.log('**[begin]');
  var n = 0;

  try {
    for(var i = 0; i < 5; i++) {
      n = await countUp(n);
    }
  } catch(e) {
    console.log(e);
    console.log('error happened!!!');
  }

  console.log(n);
  console.log('**[finished]');
}

function countUp(n) {
  console.log('countUp');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n + 1);
    }, 1000);
  })
}

module.exports.callbackCountUp = callbackCountUp;
module.exports.promiseCountUp = promiseCountUp;
module.exports.asyncCountUp = asyncCountUp;
