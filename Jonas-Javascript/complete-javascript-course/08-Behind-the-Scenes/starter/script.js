'use strict';

const friend = {
    year: 21
}

const copyObj = Object.assign({}, friend);

copyObj.year = 35;

console.log('Object original data: ', friend)
console.log('Object copy data: ', copyObj)



