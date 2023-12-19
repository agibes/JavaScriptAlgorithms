import * as algorithms from "../algorithms/index.js";

export const testAlgorithm = (id) => {

  var handler = {
    vowels: algorithms.vowels,
    stringReversal: algorithms.stringReversal,
    twoSum: algorithms.twoSum,
    anagrams: algorithms.anagrams,
    arrayChunking: algorithms.arrayChunking,
    caesarCipher: algorithms.caesarCipher,
    fibonacciNumber: algorithms.fibonacciNumber,
    capitalization: algorithms.capitalization,
    fizzBuzz: algorithms.fizzBuzz,
    integerReversal: algorithms.integerReversal,
    meanMedianMode: algorithms.meanMedianMode,
    memoizedFibonacci: algorithms.memoizedFibonacci,
    mostCommonCharacter: algorithms.mostCommonCharacter,
    palindromeChecker: algorithms.palindromeChecker,
    queues: algorithms.queues,
    ransomNote: algorithms.ransomNote,
    reverseArray: algorithms.reverseArray,
    reverseWords: algorithms.reverseWords,
    sieveOfEratosthenes: algorithms.sieveOfEratosthenes
  };

  handler[id]();

}

