function pyramid(str,rowN,bool){

    let widestWidth = 2*rowN -1;
    let arrayRows = [];

if(!bool){
    for(let i=0;i<rowN;i++){

        let charsN = (2*i)+1;
        let numSpaces = (widestWidth-charsN)/2;
        let spaces = " ".repeat(numSpaces);
        let row = spaces+ str.repeat(charsN);
        arrayRows.push(row);
    
    }

  


}else {

    for(let i=rowN-1;i>=0;i--){

        let charsN = (2*i)+1;
        let numSpaces = (widestWidth-charsN)/2;
        let spaces = " ".repeat(numSpaces);
        let row = spaces+ str.repeat(charsN);
        arrayRows.push(row);
    
    }

   //let strReturn = "\n"+arrayRows.join("\n")+"\n";

    //return strReturn;

}

let strReturn = "\n"+arrayRows.join("\n")+"\n";

    return strReturn;


}
