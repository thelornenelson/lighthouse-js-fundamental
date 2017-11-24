function range(start, end, step){
 if(start == undefined || end == undefined || step == undefined || start > end || step < 0)
    return [];
  else {
    var range = [];    
    for(var i = start; i  <= end; i += step){
      range.push(i);    
    }//for
    return range;
  }//else
}//range

console.log(range(0,10,2));
console.log(range(10,30,5));
console.log(range(-5,2,3));
