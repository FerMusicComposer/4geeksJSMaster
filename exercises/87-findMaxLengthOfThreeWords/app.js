// Write your function here
function findMaxLengthOfThreeWords(word1, word2, word3) {
    let words = [word1, word2, word3]
    let longestWordLength = 0;

    for (let index = 0; index < words.length; index++){
        if (words[0].length > words[1].length && words[0].length > words[2].length){
            longestWordLength = words[0].length;
        } else if (words[1].length > words[0].length && words[1].length > words[2].length) {
            longestWordLength = words[1].length;
        } else if (words[2].length > words[0].length && words[2].length > words[1].length) {
            longestWordLength = words[2].length;
        }
    }
    console.log(words);
    return longestWordLength;
}

console.log(findMaxLengthOfThreeWords('cffffffffffffeefefefefefefefe', 'heeeeeeeeeeeeeei', 'Lololololo'));