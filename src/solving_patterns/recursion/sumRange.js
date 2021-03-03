// Write a function to return the Sum
// Key for recursive, Base case and different input

export function sumRange(num){
    if(num===1) return 1;
    return num + sumRange(num-1)
}

//sumRange(4);

//Execution or operation
    // 1st trail input is 4
        //return 4 + SumRange(3) => 6 + 4 = 10;
    // 2nd trail input is 3
        //return  3 + SumRange(2) => 3 + 3 = 6;
    // 3rd trail input is 2
        // return  2 + SumRange(1) => 2 + 1 = 3;
    // 4th trail input is 1
        // return 1;

// Call stack will get pushed for all the operation and popped out one by one in reverse cascade order once the base condition statisfy