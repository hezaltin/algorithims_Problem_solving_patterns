import hello from './hello';
import anagram from './solving_patterns/frequency_counter/anagrams'
import {areThereDuplicatesMP} from './solving_patterns/frequency_counter/are_there_any_duplicates';


// logs
console.log('ineeeee', anagram('awesome','awesome'));
console.log(areThereDuplicatesMP("a","b","c","c"));


document.getElementById('main').innerText = hello