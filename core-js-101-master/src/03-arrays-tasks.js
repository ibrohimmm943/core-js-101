/* ********************************************************************************************
 *                                                                                            *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array     *
 *                                                                                            *
 * NOTE : Please do not use loops! All tasks can be implemented using standard Array methods  *
 *                                                                                            *
 ******************************************************************************************** */


/**
 * Returns an index of the specified element in array or -1 if element is not found
 *
 * @param {array} arr
 * @param {any} value
 * @return {number}
 *
 * @example
 *    ['Ace', 10, true], 10    => 1
 *    ['Array', 'Number', 'string'], 'Date'    => -1
 *    [0, 1, 2, 3, 4, 5], 5    => 5
 */
function findElement(arr, value) {
  return arr.indexOf(value);
}


console.log(findElement(['Ace', 10, true], 10)); 
console.log(findElement(['Array', 'Number', 'string'], 'Date')); 
console.log(findElement([0, 1, 2, 3, 4, 5], 5)); 


/**
 * Generates an array of odd numbers of the specified length
 *
 * @param {number} len
 * @return {array}
 *
 * @example
 *    1 => [ 1 ]
 *    2 => [ 1, 3 ]
 *    5 => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
  return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

console.log(generateOdds(1)); 
console.log(generateOdds(2)); 
console.log(generateOdds(5)); 



/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    ['Ace', 10, true]  => ['Ace', 10, true,   'Ace', 10, true]
 *    [0, 1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5,   0, 1, 2, 3, 4, 5]
 *    [] => []
 */
function doubleArray(arr) {
  return arr.concat(arr);
}

console.log(doubleArray(['Ace', 10, true])); 
console.log(doubleArray([0, 1, 2, 3, 4, 5])); 
console.log(doubleArray([])); 



/**
 * Returns an array of positive numbers from the specified array in original order
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 2, 3, 4, 5 ] => [ 1, 2, 3, 4, 5 ]
 *    [-1, 2, -5, -4, 0] => [ 2 ]
 *    [] => []
 */
function getArrayOfPositives(arr) {
  return arr.filter(num => num > 0);
}

// Example usage:
console.log(getArrayOfPositives([0, 1, 2, 3, 4, 5])); 
console.log(getArrayOfPositives([-1, 2, -5, -4, 0])); 
console.log(getArrayOfPositives([])); 


/**
 * Returns the array with strings only in the specified array (in original order)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, 1, 'cat', 3, true, 'dog' ] => [ 'cat', 'dog' ]
 *    [ 1, 2, 3, 4, 5 ] => []
 *    [ 'cat, 'dog', 'raccoon' ] => [ 'cat', 'dog', 'raccoon' ]
 */
function getArrayOfStrings(arr) {
  return arr.filter(item => typeof item === 'string');
}

console.log(getArrayOfStrings([0, 1, 'cat', 3, true, 'dog'])); 
console.log(getArrayOfStrings([1, 2, 3, 4, 5])); 
console.log(getArrayOfStrings(['cat', 'dog', 'raccoon'])); 


/**
 * Removes falsy values from the specified array
 * Falsy values: false, null, 0, "", undefined, and NaN.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 0, false, 'cat', NaN, true, '' ] => [ 'cat', true ]
 *    [ 1, 2, 3, 4, 5, 'false' ]         => [ 1, 2, 3, 4, 5, 'false' ]
 *    [ false, 0, NaN, '', undefined ]   => [ ]
 */
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsyValues([0, false, 'cat', NaN, true, ''])); 
console.log(removeFalsyValues([1, 2, 3, 4, 5, 'false'])); 
console.log(removeFalsyValues([false, 0, NaN, '', undefined])); 


/**
 * Returns the array of uppercase strings from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ 'permanent-internship', 'glutinous-shriek', 'multiplicative-elevation' ]
 *    => [ 'PERMANENT-INTERNSHIP', 'GLUTINOUS-SHRIEK', 'MULTIPLICATIVE-ELEVATION' ],
 *    [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]  => [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]
 */
function getUpperCaseStrings(arr) {
  return arr.map(str => str.toUpperCase());
}


console.log(getUpperCaseStrings(['permanent-internship', 'glutinous-shriek', 'multiplicative-elevation'])); 
console.log(getUpperCaseStrings(['a', 'b', 'c', 'd', 'e', 'f', 'g'])); 



/**
 * Returns the array of string lengths from the specified string array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [ '', 'a', 'bc', 'def', 'ghij' ]  => [ 0, 1, 2, 3, 4 ]
 *    [ 'angular', 'react', 'ember' ] => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
  return arr.map(str => str.length);
}

console.log(getStringsLength(['', 'a', 'bc', 'def', 'ghij'])); 
console.log(getStringsLength(['angular', 'react', 'ember'])); 


/**
 * Inserts the item into specified array at specified index
 *
 * @param {array} arr
 * @param {any} item
 * @param {number} index
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2, 1  => [ 1, 2, 3, 4, 5 ]
 *    [ 1, 'b', 'c'], 'x', 0  => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

console.log(insertItem([1, 3, 4, 5], 2, 1)); 
console.log(insertItem([1, 'b', 'c'], 'x', 0)); 


/**
 * Returns the n first items of the specified array
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2 => [ 1, 3 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'a', 'b', 'c' ]
 */
function getHead(arr, n) {
  return arr.slice(0, n);
}

console.log(getHead([1, 3, 4, 5], 2)); 
console.log(getHead(['a', 'b', 'c', 'd'], 3)); 



/**
 * Returns the n last items of the specified array
 *
 * @param {array} arr
 * @param {number} n
 *
 * @example
 *    [ 1, 3, 4, 5 ], 2  => [ 4, 5 ]
 *    [ 'a', 'b', 'c', 'd'], 3  => [ 'b', 'c', 'd' ]
 */
function getTail(arr, n) {
  return arr.slice(-n);
}

console.log(getTail([1, 3, 4, 5], 2)); 
console.log(getTail(['a', 'b', 'c', 'd'], 3)); 



/**
 * Returns CSV representation of two-dimensional numeric array.
 * https://en.wikipedia.org/wiki/Comma-separated_values
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [
 *       [  0, 1, 2, 3, 4 ],
 *       [ 10,11,12,13,14 ],
 *       [ 20,21,22,23,24 ],
 *       [ 30,31,32,33,34 ]
 *    ]
 *           =>
 *     '0,1,2,3,4\n'
 *    +'10,11,12,13,14\n'
 *    +'20,21,22,23,24\n'
 *    +'30,31,32,33,34'
 */
function toCsvText(arr) {
  return arr.map(row => row.join(',')).join('\n');
}

const input = [
  [0, 1, 2, 3, 4],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34]
];

console.log(toCsvText(input));



/**
 * Transforms the numeric array into the according array of squares:
 *   f(x) = x * x
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 0, 1, 2, 3, 4, 5 ] => [ 0, 1, 4, 9, 16, 25 ]
 *   [ 10, 100, -1 ]      => [ 100, 10000, 1 ]
 */
function toArrayOfSquares(arr) {
  return arr.map(num => num * num);
}

console.log(toArrayOfSquares([0, 1, 2, 3, 4, 5]));
console.log(toArrayOfSquares([10, 100, -1])); 



/**
 * Transforms the numeric array to the according moving sum array:
 *     f[n] = x[0] + x[1] + x[2] +...+ x[n]
 *  or f[n] = f[n-1] + x[n]
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 *   [ 1, 1, 1, 1, 1 ]        => [ 1, 2, 3, 4, 5 ]
 *   [ 10, -10, 10, -10, 10 ] => [ 10, 0, 10, 0, 10 ]
 *   [ 0, 0, 0, 0, 0]         => [ 0, 0, 0, 0, 0]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]
 */
function getMovingSum(arr) {
  const result = [];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }
  
  return result;
}

console.log(getMovingSum([1, 1, 1, 1, 1])); 
console.log(getMovingSum([10, -10, 10, -10, 10])); 
console.log(getMovingSum([0, 0, 0, 0, 0])); 
console.log(getMovingSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 


/**
 * Returns every second item from the specified array:
 *
 * @param {array} arr
 * @return {array}
 *
 * Example :
 * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
 * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
 * [ "a" ] => []
 */
function getSecondItems(arr) {
  return arr.filter((item, index) => index % 2 !== 0);
}

console.log(getSecondItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(getSecondItems(['a', 'b', 'c', null])); 
console.log(getSecondItems(['a']));



/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example :
 *  [] => []
 *  [ 1 ] => [ 1 ]
 *  [ 'a', 'b' ] => [ 'a', 'b','b' ]
 *  [ 'a', 'b', 'c', null ] => [ 'a', 'b','b', 'c','c','c',  null,null,null,null ]
 *  [ 1,2,3,4,5 ] => [ 1, 2,2, 3,3,3, 4,4,4,4, 5,5,5,5,5 ]
 */
function propagateItemsByPositionIndex(arr) {
  const result = [];
  
  arr.forEach((item, index) => {
    result.push(...Array(index + 1).fill(item));
  });
  
  return result;
}

console.log(propagateItemsByPositionIndex([])); 
console.log(propagateItemsByPositionIndex([1])); 
console.log(propagateItemsByPositionIndex(['a', 'b'])); 
console.log(propagateItemsByPositionIndex(['a', 'b', 'c', null])); 
console.log(propagateItemsByPositionIndex([1, 2, 3, 4, 5])); 



/**
 * Returns the 3 largest numbers from the specified array
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 1, 2 ] => [ 2, 1 ]
 *   [ 1, 2, 3 ] => [ 3, 2, 1 ]
 *   [ 1,2,3,4,5,6,7,8,9,10 ] => [ 10, 9, 8 ]
 *   [ 10, 10, 10, 10 ] => [ 10, 10, 10 ]
 */
function get3TopItems(arr) {
  const uniqueSorted = Array.from(new Set(arr)).sort((a, b) => b - a);
  return uniqueSorted.slice(0, 3);
}


console.log(get3TopItems([]));
console.log(get3TopItems([1, 2])); 
console.log(get3TopItems([1, 2, 3])); 
console.log(get3TopItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(get3TopItems([10, 10, 10, 10])); 



/**
 * Returns the number of positive numbers from specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [ ]          => 0
 *   [ -1, 0, 1 ] => 1
 *   [ 1, 2, 3]   => 3
 *   [ null, 1, 'elephant' ] => 1
 *   [ 1, '2' ] => 1
 */
function getPositivesCount(arr) {
  return arr.filter(item => typeof item === 'number' && item > 0).length;
}

console.log(getPositivesCount([])); 
console.log(getPositivesCount([-1, 0, 1])); 
console.log(getPositivesCount([1, 2, 3])); 
console.log(getPositivesCount([null, 1, 'elephant'])); 
console.log(getPositivesCount([1, '2'])); 


/**
 * Sorts digit names
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [] => []
 *   [ 'nine','one' ]                 => [ 'one', 'nine' ]
 *   [ 'one','two','three' ]          => [ 'one','two', 'three' ]
 *   [ 'nine','eight','nine','eight'] => [ 'eight','eight','nine','nine']
 *   [ 'one','one','one','zero' ]     => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
  const digitNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  return arr.sort((a, b) => digitNames.indexOf(a) - digitNames.indexOf(b));
}

console.log(sortDigitNamesByNumericOrder([])); 
console.log(sortDigitNamesByNumericOrder(['nine', 'one']));
console.log(sortDigitNamesByNumericOrder(['one', 'two', 'three'])); 
console.log(sortDigitNamesByNumericOrder(['nine', 'eight', 'nine', 'eight'])); 
console.log(sortDigitNamesByNumericOrder(['one', 'one', 'one', 'zero'])); 


/**
 * Returns the sum of all items in the specified array of numbers
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *   [] => 0
 *   [ 1, 2, 3 ]           => 6
 *   [ -1, 1, -1, 1 ]      => 0
 *   [ 1, 10, 100, 1000 ]  => 1111
 */
function getItemsSum(arr) {
  return arr.reduce((sum, item) => sum + item, 0);
}

console.log(getItemsSum([])); 
console.log(getItemsSum([1, 2, 3])); 
console.log(getItemsSum([-1, 1, -1, 1])); 
console.log(getItemsSum([1, 10, 100, 1000])); 


/**
 * Returns the number of all falsy value in the specified array
 *
 * @param {array} arr
 * @return {number}
 *
 * @example
 *  [] => 0
 *  [ 1, '', 3 ] => 1
 *  [ -1, 'false', null, 0 ] => 2
 *  [ null, undefined, NaN, false, 0, '' ]  => 6
 */
function getFalsyValuesCount(arr) {
  return arr.filter(item => !item).length;
}

console.log(getFalsyValuesCount([])); 
console.log(getFalsyValuesCount([1, '', 3])); 
console.log(getFalsyValuesCount([-1, 'false', null, 0])); 
console.log(getFalsyValuesCount([null, undefined, NaN, false, 0, ''])); 


/**
 * Returns a number of all occurrences of the specified item in an array
 *
 * @param {array} arr
 * @param {any} item
 * @return {number}
 *
 * @example
 *    [ 0, 0, 1, 1, 1, 2 ], 1 => 3
 *    [ 1, 2, 3, 4, 5 ], 0 => 0
 *    [ 'a','b','c','c' ], 'c'=> 2
 *    [ null, undefined, null ], null => 2
 *    [ true, 0, 1, 'true' ], true => 1
 */
function findAllOccurrences(arr, item) {
  return arr.filter(el => el === item).length;
}

console.log(findAllOccurrences([0, 0, 1, 1, 1, 2], 1)); 
console.log(findAllOccurrences([1, 2, 3, 4, 5], 0)); 
console.log(findAllOccurrences(['a', 'b', 'c', 'c'], 'c')); 
console.log(findAllOccurrences([null, undefined, null], null)); 
console.log(findAllOccurrences([true, 0, 1, 'true'], true)); 


/**
 * Concatenates all elements from specified array into single string with ',' delimiter
 *
 * @param {array} arr
 * @return {string}
 *
 * @example
 *    [0, false, 'cat', NaN, true, '']  => '0,false,cat,NaN,true,'
 *    [1, 2, 3, 4, 5]                   => '1,2,3,4,5'
 *    ['rock', 'paper', 'scissors']     => 'rock,paper,scissors'
 */
function toStringList(arr) {
  return arr.join(',');
}

// Example usage:
console.log(toStringList([0, false, 'cat', NaN, true, '']));
console.log(toStringList([1, 2, 3, 4, 5])); 
console.log(toStringList(['rock', 'paper', 'scissors'])); 



/**
 * Sorts the specified array by country name first and city name
 * (if countries are equal) in ascending order.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *    [
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Saint Petersburg' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Belarus', city: 'Brest' }
 *    ]
 *                      =>
 *    [
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland',  city: 'Krakow' },
 *      { country: 'Poland',  city: 'Warsaw' },
 *      { country: 'Russia',  city: 'Moscow' },
 *      { country: 'Russia',  city: 'Saint Petersburg' }
 *    ]
 */
function sortCitiesArray(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Creates an identity matrix of the specified size
 *
 * @param {number} n
 * @return {array}
 *
 * @example
 *     1  => [[1]]
 *
 *     2 => [[1,0],
 *           [0,1]]
 *
 *          [[1,0,0,0,0],
 *           [0,1,0,0,0],
 *     5 =>  [0,0,1,0,0],
 *           [0,0,0,1,0],
 *           [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
  const matrix = new Array(n);
  
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n).fill(0); 
    matrix[i][i] = 1;
  }

  return matrix;
}

console.log(getIdentityMatrix(1)); 

console.log(getIdentityMatrix(2)); 

console.log(getIdentityMatrix(5)); 


/**
 * Creates an array of integers from the specified start to end (inclusive)
 *
 * @param {number} start
 * @param {number} end
 * @return {array}
 *
 * @example
 *     1, 5  => [ 1, 2, 3, 4, 5 ]
 *    -2, 2  => [ -2, -1, 0, 1, 2 ]
 *     0, 100 => [ 0, 1, 2, ..., 100 ]
 *     3, 3   => [ 3 ]
 */
function getIntervalArray(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    result.push(i); 
  }
  
  return result; 
}

console.log(getIntervalArray(1, 5));  
console.log(getIntervalArray(-2, 2));  
console.log(getIntervalArray(0, 100)); 
console.log(getIntervalArray(3, 3));   


/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 3, 2, 1 ] => [ 1, 2, 3 ]
 *   [ 'a', 'a', 'a', 'a' ]  => [ 'a' ]
 *   [ 1, 1, 2, 2, 3, 3, 4, 4] => [ 1, 2, 3, 4]
 */
function distinct(arr) {
  const uniqueValues = new Set(arr);
  
  return [...uniqueValues];
}


console.log(distinct([1, 2, 3, 3, 2, 1])); 
console.log(distinct(['a', 'a', 'a', 'a'])); 
console.log(distinct([1, 1, 2, 2, 3, 3, 4, 4])); 


/**
 * Groups elements of the specified array by key.
 * Returns multimap of keys extracted from array elements via keySelector callback
 * and values extracted via valueSelector callback.
 * See: https://en.wikipedia.org/wiki/Multimap
 *
 * @param {array} array
 * @param {Function} keySelector
 * @param {Function} valueSelector
 * @return {Map}
 *
 * @example
 *   group([
 *      { country: 'Belarus', city: 'Brest' },
 *      { country: 'Russia', city: 'Omsk' },
 *      { country: 'Russia', city: 'Samara' },
 *      { country: 'Belarus', city: 'Grodno' },
 *      { country: 'Belarus', city: 'Minsk' },
 *      { country: 'Poland', city: 'Lodz' }
 *     ],
 *     item => item.country,
 *     item => item.city
 *   )
 *            =>
 *   Map {
 *    "Belarus" => ["Brest", "Grodno", "Minsk"],
 *    "Russia" => ["Omsk", "Samara"],
 *    "Poland" => ["Lodz"]
 *   }
 */
function group(/* array, keySelector, valueSelector */) {
  throw new Error('Not implemented');
}


/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {array} arr
 * @param {Function} childrenSelector, a transform function to apply to each element
 *                                     that returns an array of children
 * @return {array}
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], (x) => x     =>   [ 1, 2, 3, 4, 5, 6 ]
 *   ['one','two','three'], (x) => x.split('')  =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(/* arr, childrenSelector */) {
  throw new Error('Not implemented');
}


/**
 * Returns an element from the multidimensional array by the specified indexes.
 *
 * @param {array} arr
 * @param {array} indexes
 * @return {any} element from array
 *
 * @example
 *   [[1, 2], [3, 4], [5, 6]], [0,0]  => 1        (arr[0][0])
 *   ['one','two','three'], [2]       => 'three'  (arr[2])
 *   [[[ 1, 2, 3]]], [ 0, 0, 1 ]      => 2        (arr[0][0][1])
 */
function getElementByIndexes(arr, indexes) {
  let element = arr;

  for (const index of indexes) {
    element = element[index];
  }

  return element;
}

console.log(getElementByIndexes([[1, 2], [3, 4], [5, 6]], [0, 0])); 
console.log(getElementByIndexes(['one', 'two', 'three'], [2])); 
console.log(getElementByIndexes([[[1, 2, 3]]], [0, 0, 1])); 



/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position.
 *
 *
 * @param {array} arr
 * @return {array}
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   [ 1, 2 ]  => [ 2, 1 ]
 *   [ 1, 2, 3, 4, 5, 6, 7, 8 ]   =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *
 */
function swapHeadAndTail(arr) {
  const length = arr.length;
  const mid = Math.floor(length / 2); 
  
  if (length < 2) return arr;

  if (length % 2 === 0) {
    return arr.slice(mid).concat(arr.slice(0, mid));
  } else {
    return arr.slice(mid + 1).concat(arr[mid], arr.slice(0, mid));
  }
}


console.log(swapHeadAndTail([1, 2, 3, 4, 5])); 
console.log(swapHeadAndTail([1, 2])); 
console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8])); 
console.log(swapHeadAndTail([1, 2, 3])); 



module.exports = {
  findElement,
  generateOdds,
  doubleArray,
  getArrayOfPositives,
  getArrayOfStrings,
  removeFalsyValues,
  getUpperCaseStrings,
  getStringsLength,
  insertItem,
  getHead,
  getTail,
  toCsvText,
  toStringList,
  toArrayOfSquares,
  getMovingSum,
  getSecondItems,
  propagateItemsByPositionIndex,
  get3TopItems,
  getPositivesCount,
  sortDigitNamesByNumericOrder,
  getItemsSum,
  getFalsyValuesCount,
  findAllOccurrences,
  sortCitiesArray,
  getIdentityMatrix,
  getIntervalArray,
  distinct,
  group,
  selectMany,
  getElementByIndexes,
  swapHeadAndTail,
};
