function calculateNumber(type, a, b) {
  const aRnd = Math.round(a);
  const bRnd = Math.round(b);
  if (type === 'SUM') {
    return aRnd + bRnd;
  } if (type === 'SUBTRACT') {
    return aRnd - bRnd;
  } if (type === 'DIVIDE') {
    if (bRnd === 0) {
      return 'Error';
    }
    return aRnd / bRnd;
  }
  throw new Error('Invalid operation type');
}

module.exports = calculateNumber;
