// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {};
    let max = 0;
    let val = '';

    for(let i of str ) {
        if(!chars[i]) {
            chars[i] = 1
        } else {
            chars[i]++
        }
    }
    //
    // const biggest = Object.values(chars).sort((a, b)=> a - b);
    // return Object.keys(chars).find(key => chars[key] === biggest[biggest.length-1]);


    for (let j in chars) {
        if(chars[j] > max) {
            max = chars[j];
            val = j;
        }
    }
    return val
}

module.exports = maxChar;
