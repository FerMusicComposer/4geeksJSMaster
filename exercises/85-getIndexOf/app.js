// Write your function here

function getIndexOf(character, string) {;
    
    for (index =0; index < string.length; index++){
        if (string[index] === character){
            return index;
        }
    }
    return -1; 
}

console.log(getIndexOf('h', 'string'));