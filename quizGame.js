/*  Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create an array named questions.
The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
The category key should have the value of a string representing a question category.
The question key should have the value of a string representing a question.
The choices key should have the value of an array containing three strings, which are alternative answers to the question.
The answer key should have the value of a string, representing the correct answer to the question. Also, the value of answer should be included in the choices array.
You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
You should have a function named getResults that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.
   */

let questions = [
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["3", "4", "5"],
    answer: "4"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris"],
    answer: "Paris"
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
    answer: "George Washington"
  },
  {
    category: "Programming",
    question: "Which language runs in the browser?",
    choices: ["Python", "Java", "JavaScript"],
    answer: "JavaScript"
  }
];
/*You should have a function named getRandomQuestion
 that takes an array of questions as a parameter and returns a random question object from the array.*/
function getRandomQuestion (questions){
  let lngth = questions.length;
  let randomC = Math.floor(Math.random()*lngth);
  return questions[randomC];
}

/*You should have a function named getRandomComputerChoice that takes 
the array of the available choices as a parameter, and returns a random answer to the selected question. */

function getRandomComputerChoice (arrAvailChoices){
  let lngth = arrAvailChoices.length;
  let randomC = Math.floor(Math.random()*lngth);
  return arrAvailChoices[randomC];
}

/* You should have a function named getResults that takes the question object 
as the first parameter and the computer's choice as the second parameter. 
The function should return The computer's choice is correct! 
if the answer is correct. Otherwise, it returns The computer's choice is wrong. 
The correct answer is: <correct-answer>, where <correct-answer>
 is the value of the correct answer to the chosen question. 
 
 {
    category: "Programming",
    question: "Which language runs in the browser?",
    choices: ["Python", "Java", "JavaScript"],
    answer: "JavaScript"
  }

  */

 function getResults(qObj,cChoice){
    let qAns = qObj.answer;

    if(cChoice===qAns){
      return "The computer's choice is correct!"
    }else{

      return `The computer's choice is wrong. The correct answer is: ${qAns}`;
    }


 }
