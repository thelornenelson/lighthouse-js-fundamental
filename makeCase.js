var makeCase = function(input, styles){
  var cases = { camel: camelCase, pascal: pascalCase, snake: snakeCase, kebab: kebabCase, title: titleCase, vowel: vowelCase,
    consonant: consonantCase, upper: upperCase, lower: lowerCase }; // this is a bit repetitive but less messy than defining all the functions here

  if((typeof styles) == "string"){
    return cases[styles](input);
  }
  else { //assume that if styles isn't a string then it's an array.

    styles.sort(function(a, b){
      var precedence = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"];
      return precedence.indexOf(a) - precedence.indexOf(b);
    });

    for(var i = 0; i < styles.length; i++){
      input = cases[styles[i]](input);
    }
    return input;
  }

}

var camelCase = function(input) {
   return input.replace(/ \w/g, function(x) { return x.charAt(1).toUpperCase(); }); //not sure how best to format a function in this case
};

var pascalCase = function(input) {
   return input.replace(/\b\w/g, function(x) { return x.toUpperCase(); }).replace(/ /g, "");
};

var snakeCase = function(input) {
   return input.replace(/ /g, "_");
};

var kebabCase = function(input) {
   return input.replace(/ /g, "-");
};

var titleCase = function(input) {
   return input.replace(/\b\w/g, function(x) { return x.toUpperCase(); });
};

var vowelCase = function(input) {
   return input.replace(/[aeiou]/g, function(x) { return x.toUpperCase(); });
};

var consonantCase = function(input) {
   return input.replace(/[^aeiou]/g, function(x) { return x.toUpperCase(); });
};

var upperCase = function(input) {
   return input.toUpperCase();
};

var lowerCase = function(input) {
   return input.toLowerCase();
};

console.log(makeCase("this is a string", "camel") === "thisIsAString");
console.log(makeCase("this is a string", "pascal") === "ThisIsAString");
console.log(makeCase("this is a string", "snake") === "this_is_a_string");
console.log(makeCase("this is a string", "kebab") === "this-is-a-string");
console.log(makeCase("this is a string", "title") === "This Is A String");
console.log(makeCase("this is a string", "vowel") === "thIs Is A strIng");
console.log(makeCase("this is a string", "consonant") === "THiS iS a STRiNG");
console.log(makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING");