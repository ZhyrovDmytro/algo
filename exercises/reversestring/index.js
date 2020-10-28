// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reverse().join('');

    // let newArr = '';
    // for (let i of str) {
    //     newArr = i + newArr;
    // }
    // return newArr;

    return  str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
