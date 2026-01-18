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
        return arr;

    }else{

        let rItem = arr.pop();
        console.log(`${rItem} removed from the end of the lunch menu.`);
        return arr;

    }

}

function removeFirstLunch(arr){

    if(arr.length===0){
        console.log(`No lunches to remove.`);
        return arr;
    }else{
        let rItem = arr.shift();
        console.log(`${rItem} removed from the start of the lunch menu.`);
        return arr;
    }
}

function getRandomLunch(arr){

    if(arr.length===0){
        console.log(`No lunches available.`);
        //return arr;
    }else{
        let randomN = Math.floor(Math.random()*arr.length);
        let randomI = arr[randomN];
        console.log(`Randomly selected lunch: ${randomI}`);
    }

}

function showLunchMenu(arr){
    if(arr.length===0){
        console.log(`The menue is empty.`);
        //return arr;
    }else{
        let str = arr.join( ,);
        let displayText = "Menu items: "+ str;
        console.log(displayText);

    }

}
