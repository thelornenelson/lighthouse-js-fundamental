var calculateChange = function(total, cash) {
  var change = [{name: 'twentyDollar', value: 2000, qty: 0},
{name: 'tenDollar', value: 1000, qty: 0},
{name: 'fiveDollar', value: 500, qty: 0},
{name: 'twoDollar', value: 200, qty: 0},
{name: 'dollar', value: 100, qty: 0},
{name: 'quarter', value: 25, qty: 0},
{name: 'dime', value: 10, qty: 0},
{name: 'nickel', value: 5, qty: 0},
{name: 'penny', value: 1, qty: 0}];

 var changeOwed = cash - total;
 var output = {};

for(var i = 0; i < change.length; i++){
 if(change[i].value < changeOwed){
 var remainder = changeOwed % change[i].value;
 change[i].qty = (changeOwed - remainder) / change[i].value;
 changeOwed -= change[i].value * change[i].qty;
 output[change[i].name] = change[i].qty;
 } 
}

return output;
  
};

 console.log(calculateChange(1787, 2000));
 console.log(calculateChange(2623, 4000));
 console.log(calculateChange(501, 1000));
