// Helper method recursion  pattern
// Clean and readable


export function getOddNumbers(nums){
    let result = [];

    function helper(num){
        if(num.length === 0 ){
            return;
        }
        if(num[0] % 2 !==0){
            result.push(num[0])
        }
         helper(num.slice(1))
    }

    helper(nums);
    return result;
}


//getOddNumbers([1,2,3,4,5,6,7])


//Pure Recurssion


export function getOddNumbersPure(nums){
    let result = [];

        if(nums.length === 0 ){
            return result;
        }
        if(nums[0] % 2 !==0){
            result.push(nums[0])
        }
    return result.concat(getOddNumbersPure(nums.slice(1)));
}

//getOddNumbersPure([1,2,3,4,5,6,7])