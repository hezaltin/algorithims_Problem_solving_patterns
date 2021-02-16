import hello from './hello';
import anagram from './solving_patterns/frequency_counter/anagrams'
import {areThereDuplicatesMP} from './solving_patterns/frequency_counter/are_there_any_duplicates';
import {sameFrequency} from './solving_patterns/frequency_counter/same_frequency'
import {isSubsequence} from './solving_patterns/multiple_pointer/IsSubSequence';
import {averagePair} from './solving_patterns/multiple_pointer/averagePair'

// logs
console.log('anagram', anagram('awesome','awesome'));
console.log('areThereDuplicatesMP', areThereDuplicatesMP("a","b","c","c"));
console.log('sameFrequency', sameFrequency(3589578,5879385));
console.log('subSequence==>', isSubsequence('abc', 'acb'));
console.log('averagePair==>', averagePair([1,2,3],2.5));

document.getElementById('main').innerText = hello