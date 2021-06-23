import hello from './hello';

// Algorithm Patterns - Frequency Counter, Multiple Pointer, Sliding Window, Divide and Conquer
import anagram from './solving_patterns/frequency_counter/anagrams'
import {areThereDuplicatesMP} from './solving_patterns/frequency_counter/are_there_any_duplicates';
import {sameFrequency} from './solving_patterns/frequency_counter/same_frequency'
import {isSubsequence} from './solving_patterns/multiple_pointer/IsSubSequence';
import {averagePair} from './solving_patterns/multiple_pointer/averagePair';
import {maxSubarraySum} from './solving_patterns/sliding_window/maxSubArraySum';

// Algorithm Patterns - Recursion
import {countDown} from './solving_patterns/recursion/counDown';
import {factorial} from './solving_patterns/recursion/factorial'
import {getOddNumbers} from './solving_patterns/recursion/getOddNumbers'
import {power} from './solving_patterns/recursion/getPower'
import {sumRange} from './solving_patterns/recursion/sumRange'

// Algorithm Patterns - Sorting  
import {bubbleSort} from './Sorting/bubbleSort';
import {insertionSort} from './Sorting/insertionSort';
import {selectionSortEs6} from './Sorting/selectionSort';

// Logs [ Algorithm Patterns - Frequency Counter, Multiple Pointer, Sliding Window, Divide and Conquer  ]
console.log('anagram', anagram('awesome','awesome'));
console.log('areThereDuplicatesMP', areThereDuplicatesMP("a","b","c","c"));
console.log('sameFrequency', sameFrequency(3589578,5879385));
console.log('subSequence==>', isSubsequence('abc', 'acb'));
console.log('averagePair==>', averagePair([1,2,3],2.5));
console.log('maxSubarraySum',maxSubarraySum([-3,4,0,-2,6,-1],2));

// Logs [ Algorithm Patterns - Recursion  ]
console.log('Recursion-countdown', countDown(3))
console.log('Recursion-factorial', factorial(5))
console.log('Recursion-getOddNumbers', getOddNumbers(5))
console.log('Recursion-getPower', power(2,4))
console.log('Recursion-sumRange', sumRange(4))

// Logs [ Algorithm Patterns - Sorting  ]
console.log('[ Bubble Sort Reverse ]',bubbleSort([8,2,3,4,6,7,9]));
console.log('[ Insertion Sort ]',insertionSort([9,7,3,5,9,2,4]));
console.log('[ Selection Sort ]', selectionSortEs6([10, 9, 3, 11, 5, 8, 2, 7, 4]));


document.getElementById('main').innerText = hello