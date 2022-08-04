import {countStringsWithDuplicates} from "./index.js";

test('string with no duplicates should return 0', () => {
  const input = ['a', 'b', 'c'];
  expect(countStringsWithDuplicates(input)).toBe(0);
})

test('strings with duplicates should return the exact number of duplicates', () => {
  const cases = [
    {input: ["a", "b", "c"], output: 0},
    {input: ["a", "b", "cc"], output: 1},
    {input: ["ABC", "deef", "hi", "mnmn"], output: 2},
    {input: ["AABBCCDDDDD", "123", "xyz", "qwertt"], output: 2},
    {input: ["123a", "1233", "11", "tttttxxxxxzzzzz"], output: 3},
  ];

  cases.forEach(({input, output}) => {
    expect(countStringsWithDuplicates(input)).toBe(output);
  })
})