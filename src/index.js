
exports.min = function min (array) {
  if(arguments.length === 0 || array.length == 0) {return 0;}
  let min = array[0];
 for(let i = 1;i<array.length;i++){
   if(min>array[i]) min=array[i];
 }

  return min;
}

exports.max = function max (array) {
  if(arguments.length === 0 || array.length == 0) {return 0;}
  let max = array[0];
  for(let i = 1;i<array.length;i++){
    if(max<array[i]) max=array[i];
  }
 
   return max;
}

exports.avg = function avg (array) {
  if(arguments.length === 0 ) {return 0;}
  if(array.length === 0) return 0;
  let sum = 0.0;
  for(let i = 0;i<array.length;i++){
    sum+=array[i];
  }
  sum/=array.length;
  return sum;
}
