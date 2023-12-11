export default function findUnique(arr) {
  let resultValues = [];
  const countMap = {};
  for (const num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for (const num in countMap) {
    if (countMap[num] === 1) {
      resultValues.push(num);
    }
  }
  return resultValues;
}