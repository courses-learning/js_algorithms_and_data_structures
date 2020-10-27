function selectionSort(arr) {
    for (let i=0; i<arr.length; i++) {
        let lowest = i;
        for (let j=i+1; j<arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (lowest !== i) {
            arr = swap(arr, lowest, i)
        }
    }
    return arr;
}

function bubbleSort(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if (arr[j] > arr[j+1]) swap(arr, j+1, j)
        }
    }
    return arr;
}

function swap(arr, lowest, currentIter) {
    let temp = arr[currentIter];
    arr[currentIter] = arr[lowest];
    arr[lowest] = temp;
    return arr;
}

console.log(bubbleSort([22,12,34,56,2,43,21,10,8]))
        

  