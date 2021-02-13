//Implement a function called, areThereDuplicates  which accepts a variable number of arguments, and 
//checks whether there are any duplicates among the arguments passed in.  You can solve this using the 
//frequency counter pattern OR the multiple pointers pattern.

//Bonus O(nlogn)
//space - O(1)

export function areThereDuplicatesFC(...args) {
  // good luck. (supply any arguments you deem necessary.)
   let getValues = {};
    for(let item of args){
        if(!(getValues.hasOwnProperty(item))){
            getValues[item] = item;
        }else{
            return true
        }
    }
    return false;
}

export function areThereDuplicatesMP(...args) {
  // (supply any arguments you deem necessary.)
  args.sort((a,b)=> {
      if(a>b) return 1;
      if(a<b) return -1;
      return 0;
  });
  console.log(args)
  let start = 0;
  let next = 1;
  while(next< args.length){
      if(args[start]=== args[next]){
          return true
      }
      start++;
      next++;
  }
  return false;
}

areThereDuplicatesMP("a","b","c","c");



