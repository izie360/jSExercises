/* Implement the Chunky Monkey Algorithm
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Write a function named chunkArrayInGroups that takes an array as first argument and a number as second argument. 
The function should split the array into smaller arrays of length equal 
to the second argument and returns them as a two-dimensional array.   */

function chunkArrayInGroups(arr,num){

  let twoDimArray=[];

 let numStep=Math.ceil(arr.length/num);
 

  let count=0;

  for(let i=0;i<numStep;i++){

    //let nArray;
   
     twoDimArray[i]=[];
      for(let j=0;j<num&&count<arr.length;j++){

        //nArray[j]=arr[count];
        twoDimArray[i][j]= arr[count];
        count++;
      
    
   }
    

  }

 return twoDimArray;

}
