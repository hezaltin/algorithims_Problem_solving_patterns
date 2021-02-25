import hello from './hello';
import anagram from './solving_patterns/frequency_counter/anagrams'
import {areThereDuplicatesMP} from './solving_patterns/frequency_counter/are_there_any_duplicates';
import {sameFrequency} from './solving_patterns/frequency_counter/same_frequency'
import {isSubsequence} from './solving_patterns/multiple_pointer/IsSubSequence';
import {averagePair} from './solving_patterns/multiple_pointer/averagePair';
import {maxSubarraySum} from './solving_patterns/sliding_window/maxSubArraySum';
import {countDown} from './solving_patterns/recursion/counDown';
import {factorial} from './solving_patterns/recursion/factorial'
import {getOddNumbers} from './solving_patterns/recursion/getOddNumbers'


// logs
console.log('anagram', anagram('awesome','awesome'));
console.log('areThereDuplicatesMP', areThereDuplicatesMP("a","b","c","c"));
console.log('sameFrequency', sameFrequency(3589578,5879385));
console.log('subSequence==>', isSubsequence('abc', 'acb'));
console.log('averagePair==>', averagePair([1,2,3],2.5));
console.log('maxSubarraySum',maxSubarraySum([-3,4,0,-2,6,-1],2));
console.log('Recursion-countdown', countDown(3))
console.log('Recursion-factorial', factorial(5))
console.log('Recursion-getOddNumbers', getOddNumbers(5))

document.getElementById('main').innerText = hello