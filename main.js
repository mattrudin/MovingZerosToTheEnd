/* Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

const moveZeros = function (arr) {
  const arrLen = arr.length;
  const arrFil = arr.filter(value => value !== 0);
  const arrFilLen = arrFil.length;
  const diff = arrLen - arrFilLen;
  for (let i = 0; i < diff; i++) {
  	arrFil.push(0);
  };
  return arrFil;
}


//ES6 style
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

// Test
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));