function printInput(n, k, a){
    console.log(n + " " + k);
    var buffer = "";
    for(var i = 0; i < a.length; i++){
        buffer += a[i] + " ";
    }
    console.log(buffer.slice(0,-1)); //slice to remove trailing space;
}
console.log(5);
    printInput(4, 3, [-1, 0, 4, 2]);
    printInput(5, 2, [0, -1, 2, 1, 4]);
    printInput(7, 6, [2, 0, -1, 1 , 1 , 1, 1]);
    printInput(3, 1, [-1, 0, 4]);
    printInput(6, 4, [0, -1, 1, 4, 5, 6]);


