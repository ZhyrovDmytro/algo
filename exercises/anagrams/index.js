// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//
//   OBJ solution
//
//
// function anagrams(stringA, stringB) {
//     const adopted1 = objMap(stringA);
//     const adopted2 = objMap(stringB);
//
//     if (Object.keys(adopted1).length !== Object.keys(adopted2).length) {
//         return false;
//     }
//
//     for (let char in adopted1) {
//         if (adopted1[char] !== adopted2[char]) {
//             return false
//         }
//     }
//
//     return true
// }
//
// function objMap(str) {
//     const charMap = {};
//
//     for(let char of str.replace(/[^\w}/]/g, "").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//
//     return charMap;
// }

//
// arrray sortsolution
//

function anagrams(strA, strB) {
    return toSortedStr(strA) === toSortedStr(strB);
}

function toSortedStr(str) {
    return str.replace(/[^\w}/]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
