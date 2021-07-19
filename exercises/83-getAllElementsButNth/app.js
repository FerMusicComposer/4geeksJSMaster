// Write your function here
let input = [3, 4, 1, 5, 56, 23, 11, 6, 78, 32, 24];

function getAllElementsButNth(array, index) {
    let output = [];

    for (element of array) {
        output.push(element)
    }

    output.splice(index, 1);

    return output;
}

console.log(getAllElementsButNth(input, 5));
console.log(input);