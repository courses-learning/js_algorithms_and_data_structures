function pivot(arr, start=0, end=arr.length-1) {
    let pivotVal = arr[start];
    let swapIdx = start;
    for (let i=start+1; i<arr.length; i++) {
        if (arr[i] < pivotVal) {
            swapIdx ++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function swap(arr, lowest, currentIter) {
    let temp = arr[currentIter];
    arr[currentIter] = arr[lowest];
    arr[lowest] = temp;
    return arr;
}

function quickSort(arr, left=0, right=arr.length-1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex-1);
        // right
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
    
}
console.log(quickSort([9,44,45,43,1,4,5,7,10,14]))