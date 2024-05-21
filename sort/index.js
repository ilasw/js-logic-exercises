export const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const midIndex = Math.floor(array.length / 2);
  const leftBranch = mergeSort(array.slice(0, midIndex));
  const rightBranch = mergeSort(array.slice(midIndex));

  return merge(mergeSort(leftBranch), mergeSort(rightBranch));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    const firstLeft = left[0];
    const firstRight = right[0];
    const greater = firstLeft <= firstRight ? left : right;
    result.push(greater.shift());
  }

  return [...result, ...left, ...right];
}