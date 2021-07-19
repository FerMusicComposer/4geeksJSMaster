// Write your function here
let input = [2, 4, 5, 25, 63];

function addToFrontOfNew(array, element){
    let output = [];

    for (let index of array){
        output.push(index);
    }

    output.unshift(element);

    return output;
}

console.log(addToFrontOfNew(input, 0));
console.log(input);
