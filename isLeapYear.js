let year=1900;

function isLeapYear(year){

let hCheck = (year%100===0)&&!(year%400===0);

if(hCheck){
  return year + " is not a leap year.";
}else if(year%4===0){
  return year + " is a leap year.";
}else{
  return year + " is not a leap year";
}


}

let result = isLeapYear(year);
console.log(result);
