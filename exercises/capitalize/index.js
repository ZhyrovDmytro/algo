// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const arr = str.split(' ');
    const f = [];

    for(let item of arr) {
        const upper = item.charAt(0).toUpperCase() + item.slice(1);
        f.push(upper);
    }

    return f.join(' ');
}

module.exports = capitalize;
