// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const arr = n.toString().split('').reverse();
    if (n < 0) {
        return parseInt(arr.slice(0,-1).join('')) * -1;
    } else {
        return parseInt(arr.join(''));
    }
}

module.exports = reverseInt;
