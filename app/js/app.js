'use strict';

import "babel/polyfill";

async function asyncCountUp() {
  console.log('[begin]');
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
  console.log('[finished]');
}

function countUp(n) {
  console.log('countUp');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(n + 1);
    }, 1000);
  })
}

module.exports.asyncCountUp = asyncCountUp;
