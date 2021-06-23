//Selection Sort Pseudocode

// store the first element as the smallest value you have seen so far.
//compare this item to the next item in the array until you find a smallest number
// if a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
//if the minimum is not the value(index) you initially began with, swap the two values
// Repeat this next element until the array sorted




function selectionSort(arr) {
    let minIndex;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            let temp = arr[i]
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}


export function selectionSortEs6(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    let minIndex;
    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (i !== minIndex) {
            swap(arr, i, minIndex);
        }
    }
    return arr;
}

console.log(selectionSortEs6([10, 9, 3, 11, 5, 8, 2, 7, 4]));