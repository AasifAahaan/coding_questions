const findLongestWords = (sentence) => {
    const words = sentence.split(' ')
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest
}

console.log(findLongestWords("The Tracing Objects are used for a set of categories to enable and disable the tracing")) // categories


// with reverse method... 
const isPalindrome = (string) => {
    const palindromeString = string.split('').reverse().join('');
    return string === palindromeString;
}

console.log(isPalindrome("Hello")) // false
console.log(isPalindrome("MAM")) // true

// without reverse method... 
const isPalindromeString = (string) => {
    let start = 0;
    let end = string.length - 1;

    while (start < end) {
        if (string[start] !== string[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true
}

console.log("WITHOUT REVERSE METHOD...", isPalindromeString("MAM")) // true
console.log("WITHOUT REVERSE METHOD...", isPalindromeString("AasifAahaan")) // false

// remove dupicate Elements from an array using Set method 
const removeDuplicateElement = (element) => {
    return [... new Set(element)]
}

console.log("LINE NO 48", removeDuplicateElement([1, 2, 2, 3, 3, 3, 4, 4, 5, 5])) // 1, 2, 3, 4, 5


// remove dupicate Elements from an array without using Set method 

const removeDuplicateElementFromArray = (element) => {
    let uniqueElements = [];

    for (i = 0; i < element.length; i++) {
        if (!uniqueElements.includes(element[i])) {
            uniqueElements.push(element[i]);
        }
    }
    return uniqueElements;
}

console.log("LINE NO 64", removeDuplicateElementFromArray([1, 2, 2, 3, 3, 3, 4, 4, 5, 5])) // 1, 2, 3, 4, 5

// reverse string without reverse method

const reverseString = (string) => {
    let reverseStr = '';
    for (i = string.length - 1; i >= 0; i--) {
        // console.log(string[i])
        // reverseStr = reverseStr + string[i]
        reverseStr += string[i]
    }
    return reverseStr;
}

console.log("LINE NO 78", reverseString("Aasif")) // fisaA

// reverse string with reverse method

console.log("LINE NO 82", "Aasif".split('').reverse().join('')) // fisaA

// find the max count of consecutive 1's in an array...
const findConsecutiveNumber = (numbers) => {
    let maxCount = 0, count = 0;
    for (let num of numbers) {
        if (num === 1) {
            count++;
            maxCount = Math.max(maxCount, count)
        }
        else {
            count = 0;
        }
    }
    return maxCount;
}


console.log(findConsecutiveNumber([1, 1, 0, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // 9

// Merge two array and sort them... with sort method

const mergeAndSort = (arr1, arr2) => {
    return arr1.concat(arr2).sort((a, b) => a - b)
}

console.log("LINE NO 108", mergeAndSort([0, 3, 5, 7], [9, 4, 6, 1]))


// without sort method... 

const mergeAndSortArray = (arr1, arr2) => {
    const merge = arr1.concat(arr2);
    let n = merge.length;

    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (merge[j] > merge[j + 1]) {
                let temp = merge[j + 1];
                merge[j + 1] = merge[j]
                temp = merge[j + 1]
            }
        }
    }
    return merge
}

console.log("LINE NO 128", mergeAndSortArray([0, 3, 5, 7], [9, 4, 6, 1]))

// check if every value in arr1 has its crossponding squared value in arr2 

function checkSquared(arr1, arr2) {
    const arr1Squared = arr1.map((num) => num * num);
    arr1Squared.sort((a, b) => a - b)
    arr2.sort((a, b) => a - b)
    return JSON.stringify(arr1Squared) === JSON.stringify(arr2)
}

console.log(checkSquared([1, 2, 3, 4], [1, 4, 9, 16])) // true
console.log(checkSquared([1, 2, 3, 4], [1, 4, 9, 15])) // false


// get unique object from an array... 

function getUniqueObject(input) {
    let uniqueObject = [];
    let map = new Map();

    input.forEach(element => {
        if (!map.has(element.name)) { // check propert through has method.... 
            uniqueObject.push(map.set(element.name, true)) // push unique object into an array... 
        }
    });

    return uniqueObject
}

const input = [
    { name: "sai" },
    { name: "Nang" },
    { name: "sai" },
    { name: "Nang" },
    { name: "11111" }
];

console.log(getUniqueObject(input))

// [
//   { name: "sai" },
//   { name: "Nang" },
//   { name: "11111" }
// ]


// isAnagram
function isAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }

    let frequentlyCounter1 = {}
    let frequentlyCounter2 = {}

    for (let char of string1) {
        frequentlyCounter1[char] = (frequentlyCounter1[char] || 0) + 1;
    }

    for (let char of string2) {
        frequentlyCounter2[char] = (frequentlyCounter2[char] || 0) + 1;
    }

    for (let key in frequentlyCounter1) {
        if (frequentlyCounter1[key] !== frequentlyCounter2[key]) {
            return false;
        }
    }

    return true;
}

console.log("LINE NO 194 TO 202", isAnagram("listen", "silent")) // true
console.log("LINE NO 194 TO 196", isAnagram("hello", "bye")) // false
console.log("LINE NO 194 TO 204", isAnagram("hello", "olleh")) // true

function isAnagram1(string1, string2) {
    return string1.split('').sort().join('') === string2.split('').sort().join('')
}

console.log("LINE NO 202 TO 210", isAnagram1("listen", "silent")) // true
console.log("LINE NO 202 TO 204", isAnagram1("hello", "bye")) // false
console.log("LINE NO 202 TO 212", isAnagram1("hello", "olleh")) // true

// find max number of an Array...

function findMaxNumber(number) {

    // step 1
    const foundMaxNumber = Math.max(...number)
    console.log("Found Max Number", { foundMaxNumber }) // 100

    // step 2
    let max = number[0]
    for (i = 0; i <= number.length; i++) {
        if (number[i] > max) {
            max = number[i]
        }
    }
    return max;
}

console.log(findMaxNumber([1, 2, 3, 90, 100, 4])) // 100

// prime number
function findPrimeNumber(number) {
    if (number <= 2) return false;
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
console.log(findPrimeNumber(6))

// prime 1 to 100...
function isPrimeNumber(num) {
    if (num <= 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}

function printPrimes(n) {
    for (i = 1; i <= n; i++) {
        if (isPrimeNumber(i)) {
            console.log("Prime numbers are : ", i)
        }
    }
}

printPrimes(100)


// findLargestInNestedArray 
function findLargestInNestedArray(makeSingleArray) {

    // step 1
    // console.log(Math.max(...arrayNumbers.flat(Infinity)))

    // step 2
    // const makeSingleArray = arrayNumbers.flat(Infinity)

    let max = makeSingleArray[0]
    let maxCount = max[0]
    for (i = 0; i <= makeSingleArray.length; i++) {
        if (makeSingleArray[i] > max) {
            max = makeSingleArray[i]

            for (i = 0; i <= max.length; i++) {
                if (max[i] > maxCount) {
                    maxCount = max[i]
                }
            }
        }
    }


    return maxCount;
}

console.log(findLargestInNestedArray([[3, 4, 58], [709, 8, 9], [10, 11], [111, 2]])) // 709

function findOccurrence(string) {
    let str = {};
    for (let char of string) {
        str[char] = str[char] ? str[char] + 1 : 1
    }
    return str;
}

console.log(findOccurrence("hello")) // { h: 1, e: 1, l: 2, o: 1 }

// bubbleSortAscending
const bubbleSortAscending = (arr) => {
    let length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr;
}


console.log(bubbleSortAscending([90, 64, 34, 25, 22, 12, 11])) // [11, 12, 22, 25, 34, 64, 90 ]

// bubbleSortDescending
const bubbleSortDescending = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (j = 0; j < n - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr;
}

console.log(bubbleSortDescending([90, 64, 11, 34, 25, 22, 12,])) // [ 90, 64, 34, 25, 22, 12, 11 ]

// find number of vowels and vowelsChar.... 
const checkVowels = (string) => {
    const vowels = "aeiouAEIOU";
    let vowelsChar = [];
    let count = 0;

    for (let char of string) {
        if (vowels.includes(char)) {
            vowelsChar.push(char)
            count++
        }
    }
    return { count, vowelsChar };
}

console.log(checkVowels("Hello")) // { count: 2, vowelsChar: [ 'e', 'o' ] }


const sumEvenNumbers = (numbers) => {
    return numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0)
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])) // 12

// Find second largest number of an array without using sort() and set() ... 
function secondLargestNumber(arr) {
    let uniqueElements = [];

    for (i = 0; i < arr.length; i++) {
        if (!uniqueElements.includes(arr[i])) {
            uniqueElements.push(arr[i])
        }
    }

    for (let i = 0; i < uniqueElements.length - 1; i++) {
        for (let j = i + 1; j < uniqueElements.length; j++) {
            if (uniqueElements[i] < uniqueElements[j]) {
                let temp = uniqueElements[i];
                uniqueElements[i] = uniqueElements[j];
                uniqueElements[j] = temp;
            }
        }
    }
    return uniqueElements.length > 1 ? uniqueElements[1] : null;
}

console.log("WITHOUT SORT & SET METHOD -- ", secondLargestNumber([2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8, 11])) // 8


// Find missing element of an array... 

function findMissingElement(arr) {
    const num = arr.length + 1
    const expectedNum = (num * (num + 1)) / 2;
    const value = arr.reduce((a, b) => a + b, 0)
    return expectedNum - value
}

console.log(findMissingElement([1, 2, 3, 5])) // 4

function sumDigits(n) {
    return n.toString().split('').reduce((a, b) => Number(a) + Number(b), 0)
}

console.log("SUM OF DIGITS....", sumDigits(555)) // 15

// reverseCompleteSentence... 
function reverseCompleteSentence(sentence) {
    const word = sentence.split('')
    let reversedSentence = "";
    console.log({ word })

    for (let i = word.length - 1; i >= 0; i--) {
        reversedSentence += word[i]
        // if (i !== 0) reversedSentence += ' ';
    }

    return reversedSentence
}

console.log(reverseCompleteSentence("Hello I am Aasif Alvi from Ghaziabad")) // dabaizahG morf ivlA fisaA ma I olleH

// reverse words ... 
function reverseWords(sentence) {
    const word = sentence.split(' ')
    let reversedSentence = "";
    console.log({ word })

    for (let i = word.length - 1; i >= 0; i--) {
        reversedSentence += word[i]
        if (i !== 0) reversedSentence += ' ';
    }

    return reversedSentence
}

console.log(reverseWords("Hello I am Aasif Alvi from Ghaziabad")) // Ghaziabad from Alvi Aasif am I Hello


// Array insertion ... 

function arrayIntersection(arr1, arr2) {
    let uniqueElements = [];
    for (i = 0; i < arr1.length; i++) {
        if (!uniqueElements.includes(arr1[i])) {
            uniqueElements.push(arr1[i])
        }
    }
    console.log({ uniqueElements })
    const unique = new Set(uniqueElements)
    return arr2.filter(item => unique.has(item))
}

console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6]))