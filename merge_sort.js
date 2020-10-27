function merge(arr1, arr2) {
    let arr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] < arr2[j] || j === arr2.length) {
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
    return arr;
}

console.log(mergeSort([44,45,43,1,4,5,7,10,14,15,16,17,18,19,56,33,109]))