function hasValuesFromArray(set, array) {
  const newSet = new Set(set);
  array.forEach((value) => {
    newSet.add(value);
  });
  console.log('New Set: ', newSet, 'Set: ', set);
  return newSet.size === set.size;
}
export default hasValuesFromArray;
