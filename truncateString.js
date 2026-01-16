function truncateString(str,num){

  let strL = str.length;

  if(strL>num){

    let tStr =str.slice(0,num);
    let ntStr= tStr +"...";
    return ntStr;
  }else{
    return str;
  }

}

/*
You should have a function truncateString that accepts two arguments, the first one a string, the second one a number.
If the length of the string is more than the given number, the string should be truncated to reduce the length so that it is equal the given number, and ... should be appended at the end of the truncated string.
If the length of the string is equal to or lower than the given number, the string should be returned unchanged.

*/
