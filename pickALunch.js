const lunches = [];

function addLunchToEnd (arr,str){
    arr.push(str);
    console.log(`${str} added to the end of the lunch menu.`);
    return arr;

}

funcion addLunchtoStart(arr,str){
    arr.unshift(str);
    console.log(`${str} added to the start of the lunch menu.`);
    return arr;

}

function removeLastLunch(arr){
    if(arr.length ===0){
        console.log(`No lunches to remove.`);


    }else{

        let rItem = arr.pop();
        console.log(`${rItem} removed from the end of the lunch menu.`);
        return arr;

    }
