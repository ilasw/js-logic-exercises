/*
* Write some code that, giving an array of strings,
* returns the counter of those items where at least a char is repeated
* */

/**
 * It takes an array of strings, and returns the number of strings that have duplicate characters
 * @param input - an array of strings
 * @returns The number of strings that have duplicate characters.
 */
export const countStringsWithDuplicates = function (input) {
  return input.reduce((acc, string) => {
    if (string.length < 2) return acc;

    const uniqueCharacters = Array.from(new Set([...string]));
    const hasDuplicate = (uniqueCharacters.length < string.length);

    return acc + Number(hasDuplicate);
  }, 0);
}
