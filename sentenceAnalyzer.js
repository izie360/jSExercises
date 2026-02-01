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

/*It's time to count the consonants. Create a getConsonantCount function with a sentence parameter.

Inside the function, use a loop to count the number of consonants in the sentence that will be passed into the function when it is called. A consonant is any letter that is not one of the following characters: "aeiou".

Your getConsonantCount function must return a number.  */

function getConsonantCount(sentence){

    let count = 0;
    let vowels = "aeiouAEIOU";

    function consonantCheck(char){
        let charChecker = (char>="a"&&char<="z")||(char>="A"&&char<="Z");
        let vowelChecker = !(vowels.includes(char));
        return charChecker&&vowelChecker;
    }

    for(let char of sentence){

        if(consonantCheck(char)){
            count++;
        }
    }

    return count;
}
