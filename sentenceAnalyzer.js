/* In this workshop, you will build a sentence analyzer that will take a sentence and get the count for the number of words, vowels, consonants, and punctuation marks.

To begin, create a getVowelCount function with a parameter called sentence. Your function should return the total number of vowels in a sentence.  */

function getVowelCount(sentence){

  let vowelString = "aeiouAEIOU";
  
    let charCount= 0;
  for(let char of sentence){
    if(vowelString.includes(char)){
      charCount++;
    }

  }

  return charCount;
}
