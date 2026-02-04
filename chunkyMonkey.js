function chunkArrayInGroups(arr,num){

  let twoDimArray=[];

  let numStep=Math.ceil(arr.length/num);

  

  let count=0;

  for(let i=0;i<numStep;i++){

    //let nArray;
   if(count<arr.length){
    
      for(let j=0;j<num;j++){

        //nArray[j]=arr[count];
        twoDimArray[i][j]= arr[count];
        count++;
      
    }
   }
    

  }

 return twoDimArray;

}
