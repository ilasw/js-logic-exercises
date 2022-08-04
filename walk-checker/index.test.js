import {walkChecker} from "./index.js";

describe('function check errors', () => {

  it('should throw error for non matching time/path length', () => {
    const input = ['n', 's', 'e', 'w'];
    expect(() => walkChecker(input)).toThrow();
  })

  it('should throw error for not supported direction', () => {
    const input = ['n', 's', 'e', 'k'];
    expect(() => walkChecker(input)).toThrow();
  })
})


test('function return true if occurrence of n/s and e/w are equal', () => {
  const cases = [
    {
      input: ['n', 's', 'e', 'w', 'n', 's', 'e', 'w', "e", 'n'],
      output: false
    },
    {
      input: ['n', 'e', 's', 'w', "w", "w", "s", 'e', 'e', 'n'],
      output: true
    }
  ];

  cases.forEach(({input, output}) => {
    expect(walkChecker(input)).toBe(output);
  })
})