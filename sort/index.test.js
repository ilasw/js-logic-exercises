import {mergeSort} from "./index.js";

test('merge sort should order a number array', () => {
  const input = [1, 4, 2, 8, 5, 7];
  const result = mergeSort(input);

  expect(result).toEqual([1, 2, 4, 5, 7, 8]);
})