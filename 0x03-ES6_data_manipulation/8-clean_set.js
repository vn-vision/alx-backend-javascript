// This code implements a function that takes a set of strings and a string as arguments.
// It returns a string that contains all the strings from the set that start with the given string.
// The strings are separated by a hyphen with the given string removed from the start of each string

// export default function cleanSet(set, startString) {
//   if (typeof startString !== 'string' || !startString) return '';
//   const res = [...set].reduce((string, currentWord) => {
//     if (currentWord.startsWith(startString)) {
//       return string + (string ? '-' : '') + currentWord.slice(startString.length);
//     }
//     return string;
//   }, '');
//   return res;
// }

// this is an alternative solution, the first one is more efficient.
// this is more readable and easier to understand.
export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString || startString.length === 0) return '';
  const res = [...set].filter((word) => (word ? word.startsWith(startString) : ''));
  return res.map((word) => (word ? word.slice(startString.length) : '')).join('-');
}
