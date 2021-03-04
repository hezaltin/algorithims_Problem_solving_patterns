// pseudocode
// start looping from with a variable called i the end of the array towards the begining
// start an inner loop with a variable called j from the begining untill i-1;
// if array[j] is greater than array[j+1], swap those two and retur the sorted array

//Bubble Sort worst case is O(n2) best case is O(N)
// further enhancing this we have to use the boolean
// this one is usefull for most of the element is already sorted,
// if we know most of the element has already sorted then we can use the noSwap boolean gives this as O(N)
export function bubbleSort(arr){
    let noSwap;
    for(let i=arr.length; i>0; i--){
        console.log('I am I=>',i);
        noSwap = true;
        for(let j=0; j< i-1;j++){
            console.log('I am J=>',arr,j,arr[j],arr[j+1])
           if(arr[j]>arr[j+1]){
               let temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
               noSwap = false;
           }
        }
        if(noSwap) break;
    }
    return arr;
}

//Using Es6 syntax
function bubbleSortEs6Swap(arr){
    const swapFunc = (arr,idx1,idx2) => {
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
    }
    for(let i=arr.length; i>0; i--){
        console.log('I am I=>',i)
        for(let j=0; j< i-1;j++){
            console.log('I am J=>',arr,j,arr[j],arr[j+1])
           if(arr[j]>arr[j+1]){
               swapFunc(arr,arr[j],arr[j+1]);
           }
        }
    }
    return arr;
}



//Naive solution O(n2)
function bubbleSortStaright(arr){
    for(let i=0; i<arr.length; i++){
        console.log('I am I=>',i)
        for(let j=0; j< arr.length;j++){
            console.log('I am J=>',j,arr[j],arr[j+1],arr)
           if(arr[j]>arr[j+1]){
               let temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
           }
        }
    }
    return arr;
}



