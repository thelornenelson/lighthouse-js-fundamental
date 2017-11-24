function calculateRectangleArea(length, width){
  if(length < 0 || width < 0)
    return undefined;
  else return length * width;
}

function calculateTriangleArea(base, height){
  if(base < 0 || height < 0)
    return undefined;
  else return base * height * 0.5;
}

function calculateCircleArea(radius){
  if(radius < 0)
    return undefined;
  else return math.PI * math.pow(radius, 2);
}
