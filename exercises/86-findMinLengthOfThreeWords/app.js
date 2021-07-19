// Write your function here

function findMinLengthOfThreeWords(word1, word2, word3) {
    let words = [word1, word2, word3]
    let shortestWordLength = 0;

    for (let index = 0; index < words.length; index++){
        if (words[0].length < words[1].length && words[0].length < words[2].length){
            shortestWordLength = words[0].length;
        } else if (words[1].length < words[0].length && words[1].length < words[2].length) {
            shortestWordLength = words[1].length;
        } else if (words[2].length < words[0].length && words[2].length < words[1].length) {
            shortestWordLength = words[2].length;
        }
    }
    console.log(words);
    return shortestWordLength;
}

console.log(findMinLengthOfThreeWords('cffffffffffffeefefefefefefefe', 'heeeeeeeeeeeeeei', 'Lololololo'));