// Write your function here
let input = [2, 4, 5, 25, 63];

function addToBackOfNew(array, element){
    let output = [];

    for (let index of array){
        output.push(index);
    }

    output.push(element);

    return output;
}

console.log(addToBackOfNew(input, 0));
console.log(input);