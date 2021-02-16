// Write a function called averagePair.
// Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
//concept of multiple pointer==> two pointer/ varible in direction(start->end;middle;end->start; meeting into the middle)

//[1,3,3,5,6,7,10,12,19], 8
//condition multiple pointer => generate a pair => start, end
//condition if(value<avg) end--;
export function averagePair(arr,avg){
    let start =0;
    let end = arr.length - 1;

    if((arr.length)==0) return false;
    while(start<end){
        let avgVlue = (arr[start] + arr[end])/2;
        if(avgVlue == avg){
            return true
        }
        else if(avgVlue> avg){
            end--
        }
        else{
            start++;   
        }
    }
    return false;
}






//averagePair([1,2,3],2.5)