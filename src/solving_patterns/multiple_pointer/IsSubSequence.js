//Write a function called  isSubsequence
// which takes in two strings and checks whether the characters in the first string form a subsequence of the 
//characters in the second string. In other words, the function should check whether the characters in the first string 
//appear somewhere in the second string, without their order changing.


export function isSubsequence(s1, s2) {
    let start = 0;
    let end = 0;
    while(end < s2.length){
        console.log(end)
       if(s1[start] === s2[end]){
           start++;
           if(start === s1.length) return true;
       }
       else{
          end++; 
       }
    }
    return false
}
//reduce = space Complexity O(N) but not O(1)
export function modernSubSequence(s1,s2){
    const reducedValue = (s2.split('')||[]).reduce((all,item,index)=>{
        console.log(item)
        if(item === s1[all.start]) all.start++
        if(all.start===s1.length)  all.returnValue = true;
        return all;
    },{start:0,returnValue:false})
    return reducedValue;
}
//modernSubSequence('abc', 'acb');

//isSubsequence('abc', 'acb');

