function isFive(num) {
  return num === 5 ? true : false
}

function isOdd(number) {
  if (typeof number !== "number") throw Error();
  return number % 2 === 0 ? false : true;
}

function myRange(min, max, step = 1) {
  let newArr = [];
  for (let i = min; i <= max; i+= step) {
    newArr.push(i);
  }
  return newArr;
}


module.exports = { isFive, isOdd, myRange };
