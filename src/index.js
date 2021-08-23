
exports.min = function min (array) {
  
  if ((typeof array === 'undefined')  || array.length === 0) {
    return 0;
  }
  return Math.min(...array);
} 


exports.max = function max (array) {
 
  if ((typeof array === 'undefined')  || array.length === 0) {
    return 0;
  }
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if ((typeof array === 'undefined')  || array.length === 0) {
    return 0;
  }

  let sum = 0;
  let avgArr = array [0];
 for (let i = 0; i < array.length; i++) {
    sum += parseInt( array[i]);
  avgArr = sum/array.length;
 } return avgArr;
} 


