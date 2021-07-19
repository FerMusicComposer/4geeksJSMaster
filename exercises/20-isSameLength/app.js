// Write your function here
function isSameLength(word1, word2) {
    let count1 = 0;
    let count2 = 0;

    for (let index1 = 0; index1 <= word1.length; index1++) {
        count1++
    }
    for (let index2 = 0; index2 <= word2.length; index2++) {
        count2++
    }
    
    if (count1 === count2) return true;
    else return false;
}

console.log(isSameLength('heenloooo', 'hello'));