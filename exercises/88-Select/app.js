// Write your function here
const array = ['a', 'c', 'e'];
const object = {
    a: 1,
    b: 2,
    c: 3,
    h: 8
    
}

function select(array, object) {
    let arrayCopy = [...array];
    let objectCopy = {...object}
    let output = {};

    arrayCopy.forEach((item) => {
        if (Object.keys(object).includes(item)) {
            output[item] = objectCopy[item];
        }
    })

    return output;
}

console.log(select(array, object));












/*function select(array, object) {
    let arrayCopy = [...array];
    let objectCopy = {...object}
    let output = {};
    
    for (index of arrayCopy){
        if (arrayCopy[index] !== Object.keys(object))
        output[index] = objectCopy[index];
    }  
    
    
    return output;
}*/

//console.log(array.includes(Object.keys(object)[0]));
//console.log(Object.keys(object)[0]);