// Write your function here
function computeAverageLengthOfWords(word1, word2){
    let count1 = 0;
    let count2 = 0;
    let averageLenght = 0;

    for (let letter of word1){
        count1++;
    }
    for (let letter of word2){
        count2++;
    }

    averageLenght = (count1 + count2) / 2;

    return averageLenght;
}

console.log(computeAverageLengthOfWords('canister', 'plattipus'));