'use strict'

function printForecast(arr){
    let temp = "";
    for (let i = 0; i < arr.length; i++){
        temp += `... ${arr[i]}°C in ${i + 1} days `
    }
    return temp;
    
    
}
console.log(printForecast([12, 5, -5, 0, 4]))
