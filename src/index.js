exports.min = function min (array) {
  if (!array || !array.length) {
    return 0;
  }
  let minNumber = Math.min(...array);
  return minNumber;
}

exports.max = function max (array) {
  if (!array || !array.length) {
    return 0;
  }
  let maxNumber = Math.max(...array);
  return maxNumber;
}

exports.avg = function avg (array) {
  if (!array || !array.length) {
    return 0;
  }
  let sum = array.reduce((acc, num) => acc + num, 0);
  let avgNumber = sum / array.length;
  return avgNumber;
}
