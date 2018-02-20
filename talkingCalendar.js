var talkingCalendar = function(date) {

  //date input is formatted yyyy/mm/dd (why???)
  date = date.split("/").map(Number);

  var monthNames = ["Zero", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var dateSuffix = "th";

  if(date[2] == 1 || date[2] == 21 || date[2] == 31) dateSuffix = "st";
  else if(date[2] == 2 || date[2] == 22) dateSuffix = "nd";
  else if(date[2] == 3 || date[2] == 23) dateSuffix = "rd";

  return monthNames[date[1]] + " " + date[2] + dateSuffix + ", " + date[0];

  }

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/08/21"));
console.log(talkingCalendar("1987/08/13"));
console.log(talkingCalendar("1987/08/03"));