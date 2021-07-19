// Write your function here
function isOddLength(word){
    let count = 0;

    for (let letter of word) {
        count++;
    }

    if (count % 2 !== 0) return true;
    else return false;
}

console.log(isOddLength('hello'));