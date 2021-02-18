// Write a function count down to print the numbers with recursively
// Key : Base case and different input

export function countDown(num){
    //Base Case
        if(num<=0){
            console.log('All Done!!')
            return;
        }
    console.log(num);
    //Different input
    num--; // reduced num 1 to given the different input
    countDown(num);
}

//countDown(3);