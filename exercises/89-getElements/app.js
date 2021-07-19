// Write your function here
let object = {
    key1: [1000, 10, 50, 10],
    key2: [],
    key3: [3, 45, 5],
    
  };

function getElementsThatEqual10AtProperty(obj, key) {
    let output;
 
    for (key in obj) {
        //console.log(`${key}: ${obj[key]}`);
        let objKey = obj[key];
        //console.log(objKey);
        objKey.forEach((item) => {
            console.log(item);
            /*if (item !== 10) {
                output = [];
            } else {
                output.push(item);
            }*/
        })        
    }

    return output;
}

console.log(getElementsThatEqual10AtProperty(object, 'key1'));