/* Build a Longest Word Finder App
In this lab, you will build a function that returns the length of the longest word in the provided sentence.

For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function named findLongestWordLength that takes a string as an argument.
The function should return the length of the longest word in the string. */



function findLongestWordLength(sentence){
  let wordS = sentence.trim();
  let wordArray = wordS.split(" ");
  //let currentItem = wordArray[0];
  
  let count =1;
  let longestW= wordArray[0];
  while(count<wordArray.length){
    
    if(longestW.length< wordArray[count].length){
        longestW = wordArray[count];
    }


    count++
  }

  return longestW.length;

}
