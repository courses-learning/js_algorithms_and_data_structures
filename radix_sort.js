function radixSort(arr) {
    let largestDigits = mostDigits(arr);
    let arrLength = arr.length;
    for (let i=0; i<largestDigits; i++) {
        // let bins = Array.from({length: 10, () => []}); THIS WOULD DO THE SAME
        let bins = blankBins();
        for (j=0; j<arrLength; j++) {
            let num = getDigit(arr[j], i)
            if (!isNaN(num)) {
                // push to appropriate
                bins[num].push(arr[j]);
            } else {
                // push to 0 bin
                bins[0].push(arr[j]);
            }
        }
        arr = combineBins(bins);
    }
    return arr;
}

function blankBins(base=10) {
    let bins = [];
    for (let i=0; i<base; i++) {
        bins.push([]);
    }
    return bins;
}

function combineBins(bins) {
    // return [].concat(...bins); THIS WOULD DO THE SAME
    return(Array.prototype.concat.apply([], bins));
}

function getDigit(num, place) {
    // handle if num not an int or -ve and turn to str
    let str = Math.floor(Math.abs(num)).toString();
    // return requested place from counting back e.g. 103[0] = 3
    return (parseInt(str[str.length - (1 + place)]));
}

function digitCount(num) {
    let str = Math.floor(Math.abs(num)).toString();
    return str.length;
}

function mostDigits(arr) {
    return Math.max(...arr.map(digitCount));
}

console.log(radixSort([9,22,56,123,456,999,1234567,89,44,45,43,1,4,5,7,10,14,10000]));