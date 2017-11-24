function lastIndexOf(array, value){
  for(var i = array.length; i > 0; i--){
    if(array[i - 1] === value)
      return i - 1;
  }
  return -1;
}
