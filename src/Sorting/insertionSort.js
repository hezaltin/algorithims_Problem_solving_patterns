//Pesudo Code
// Start by picking the second element in the array
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion 
//    (i.e. the left side) to place the element in the correct place.
// Repeat until the array is sorted.
//(Totally Random unSorted Data) BigO = O(N^2)

export function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        console.log(j)
        arr[j + 1] = currentVal;
        console.log(arr)
    }
    return arr;
}

function insertionSortNaive(arr) {
    for (let i = 1; i < arr.length; i++) {
        console.log(i)
        if (arr[i] < arr[i - 1]) {
            for (let j = i; j >= 0; j--) {
                console.log(arr)
                if (arr[j] < arr[j - 1]) {
                    let temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;

                } else {
                    break;
                }
            }
        }
    }
    return arr;
}


console.log(insertionSort([9, 7, 3, 5, 9, 2, 4]));