export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !startString) return '';
  const res = [...set].reduce((string, currentWord) => {
    if (currentWord.startsWith(startString)) {
      return string + (string ? '-' : '') + currentWord.slice(startString.length);
    }
    return string;
  }, '');
  return res;
}
