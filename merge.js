function concat(array1, array2){
  for(var i = 0; i < array2.length; i++){
    array1.push(array2[i]);
  }
  return array1;
}

function merge(array1, array2){
  array1 = concat(array1, array2);
  //this uses a bubblesort for curiosity's sake
  for(var i = 0; i < array1.length - 1; i++){
    for(var j = 0; j < array1.length - i - 1; j++){
      if(array1[j] > array1[j + 1]){
        var temp = array1[j];
        array1[j] = array1[j + 1];
        array1[j + 1] = temp;
      }
    }
  }
  return array1;
  //Simpler way would be to use built in JS sorting method with a comparison fuction
  //return array1.sort(function(a, b){return a-b});
}

console.log(merge([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(merge([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(merge([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(merge([ 5, 10 ], []), "=?", [ 5, 10 ]);