//Sliding Window - maxSubarraySum
//Given an array of integers and a number, write a function called maxSubarraySum
//, which finds the maximum sum of a subarray with the length of the number passed to the function. 
//Note that a subarray must consist of consecutive
// elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
//Time Complexity  O(N) & Sapce complexity O(1);

export function maxSubarraySum(arr,num){
    if(arr.length < num) return null;
    let tempSum = 0;
    let maxSum  = 0;
    for(let i=0; i<num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let j= num; j<arr.length; j++){
        tempSum = tempSum - arr[j-num] + arr[j];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}

//maxSubarraySum([1,4,2,10,23,3,1,0,20],4)
//maxSubarraySum([-3,4,0,-2,6,-1],2)