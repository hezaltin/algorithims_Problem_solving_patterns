// Give two strings, write a function to determine if the second string is an anagram of first
// An Anagram is a word,phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman
//

// function anagram(str1,str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let anagramStringObj1 = {};
//     let anagramStringObj2 = {};

//     for(let inp1 of str1){
//      anagramStringObj1[inp1] = ++anagramStringObj1[inp1] || 1;
//     }
//     for(let inp2 of str2){
//       anagramStringObj2[inp2] = ++anagramStringObj2[inp2] || 1;
//     }
//     console.log(anagramStringObj1)
//     console.log(anagramStringObj2)
//     for(let input in anagramStringObj1){
//         if(!(input in anagramStringObj2)){
//             return false;
//         }
//         if(anagramStringObj1[input]!== anagramStringObj2[input]){
//             return false
//         }
//     }
//     return true;
// }

// anagram('awesome','awesoms')

//ex => {a:1,w:1,e:2,s:1,o:1,m:1};
// => {a:0,w:0,e:1,s:0,m:0}


function anagram(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let anagramStringObj1 = {};
    for(let inp1 of str1){
     anagramStringObj1[inp1] = ++anagramStringObj1[inp1] || 1;
    }
    console.log(anagramStringObj1)
    for(let inp2 of str2){
      if(!anagramStringObj1[inp2]){
          return false
      }else{
          anagramStringObj1[inp2] -= 1;
      }
    }
    
    return true;
}

anagram('awesome','awesome')


export default anagram

