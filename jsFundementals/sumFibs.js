function sumFibs(num){
let fibArr = [0,1];
let sum =0;
   while(true){
    let next = fibArr[fibArr.length-2]+fibArr[fibArr.length-1];
    if(next>num){break;}

    fibArr.push(next);


   }

    for(let i=0;i<fibArr.length;i++){
        let oddN = (fibArr[i]%2)!=0;
        if(oddN){
            sum = sum + fibArr[i];
        }
    }

    return sum;
}