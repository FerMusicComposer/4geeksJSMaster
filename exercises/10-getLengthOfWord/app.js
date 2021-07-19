function getLengthOfWord(word) {
  // your code here
  let count = 0;

  for (let letter of word){
    count++;
  }

  return count;
}

console.log(getLengthOfWord('supercalifragilisticuespialidosus'));