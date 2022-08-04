/*
* You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment,
so you decided to take the opportunity to go for a short walk.

The city provides its citizens with a Walk Generating App on their phones
-- every time you press the button it sends you an array of one-letter strings
representing directions to walk (eg. ['n', 's', 'w', 'e']).
You always walk only a single block for each letter (direction) and
you know it takes you one minute to traverse one city block,
so create a function that will return true if the walk the app gives
you will take you exactly ten minutes (you don't want to be early or late!)
and will, of course, return you to your starting point.
Return false otherwise.

Note: you will always receive a valid array containing a random assortment
of direction letters ('n', 's', 'e', or 'w' only).
It will never give you an empty array
(that's not a walk, that's standing still!).
* */

/**
 * > This function takes a path and a number of minutes and returns a boolean indicating whether or not the path can be
 * walked in the given number of minutes
 * @param [path] - an array of strings that are either 'n', 's', 'e', or 'w', representing the path you walked
 * @param [minutes=10] - The number of minutes it takes to walk to the destination.
 */
export const walkChecker = function (path = [], minutes = 10) {
  const dictionary = {
    n: {axe: 'y', value: 1},
    s: {axe: 'y', value: -1},
    e: {axe: 'x', value: 1},
    w: {axe: 'x', value: -1},
  };
  const supportedDirections = Object.keys(dictionary);

  if (path.length !== minutes) {
    throw new Error('The input path is not matching your expected time');
  }

  if (!path.every((direction) => supportedDirections.includes(direction))) {
    throw new Error('The input has not supported direction');
  }

  const finalPosition = path.reduce((acc, direction) => {
    const {axe, value} = dictionary[direction];
    return {...acc, [axe]: acc[axe] + value};
  }, {x: 0, y: 0})

  return finalPosition.x === 0 && finalPosition.y === 0;
}
