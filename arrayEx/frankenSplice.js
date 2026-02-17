/*Implement the Slice and Splice Algorithm
In this lab, you will need to create an algorithm to merge two arrays.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

Create a frankenSplice function that accepts two arrays and an index.
Copy each element of the first array into the second array, in order, 
beginning at the given index, and return the resulting array.
The input arrays should remain the same after the function runs.*/


function frankenSplice(arr1,arr2,indx){

    let arr3= [...arr2];

    for(let i=0;i<arr1.length;i++){

        arr3.splice(indx,0,arr1[i]);
        indx++;


    }
 
    return arr3;

}
