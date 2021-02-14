import hello from './hello';
import anagram from './solving_patterns/frequency_counter/anagrams'
import {areThereDuplicatesMP} from './solving_patterns/frequency_counter/are_there_any_duplicates';
import {sameFrequency} from './solving_patterns/frequency_counter/same_frequency'


// logs
console.log('anagram', anagram('awesome','awesome'));
console.log('areThereDuplicatesMP', areThereDuplicatesMP("a","b","c","c"));
console.log('sameFrequency', sameFrequency(3589578,5879385));

document.getElementById('main').innerText = hello