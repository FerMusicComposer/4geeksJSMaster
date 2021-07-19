// Write your function here
let obj = {
    key: [3, 4, 5, 8],
    key2: [2, 3, 4, 5],
    key3: 'hola'
}

function getAverageOfElementsAtProperty(obj, key){
    let sum = 0;
    let average = 0;

    for (let element in obj){
        key = obj[element];   
    }

    if (key === undefined || key.length  === 0 || !Array.isArray(key)){
        return 0;
    } 

    for (let index = 0; index < key.length; index++){
        sum += key[index]
    }

    average = sum / key.length;

    return average;
}

console.log(getAverageOfElementsAtProperty(obj, 'key3'));