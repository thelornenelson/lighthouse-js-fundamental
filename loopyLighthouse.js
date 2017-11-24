function loopyLighthouse(start, end){
  var output = "";
  for(var i = start; i <= end; i++){
    output = "";
    if(!(i % 3)) output += "Loopy";
    if(!(i % 4)) output += "Lighthouse";
    console.log(output || i);
  }
}

loopyLighthouse(100, 200);
