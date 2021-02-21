// Write a factorial using recursion and iteration
// Factorial ==> 4! => 4*3*2*1 

//1) Iteration mode;
function iterFactorial(num){
    let total = 1;
   while(num > 0){ // to kick start the loop based on condition 
      total*=num;
       num--; // help to disatisfy the condition 
   }
   return total;
}

// 2) Recursion mode
export function factorial(num){
    if(num === 1) return 1; // Base case to reach end;
    return num * factorial(num-1); // different input;
}

//iterFactorial(5);