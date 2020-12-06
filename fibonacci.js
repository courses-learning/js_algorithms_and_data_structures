// recursive fibonacci function
function fib(n) {
    if (n <= 2) return 1;
    return result = fib(n-1) + fib(n-2);
}

// dynamic programming version that stores work done. O(n)
function dynamicFib(n, memo=[0,1,1]) {
    if (memo[n]) return memo[n];
    let result = dynamicFib(n-1, memo) + dynamicFib(n-2, memo);
    memo[n] = result;
    return result;
}

// tabular - better on space. Build up. O(n)
function tabularFib(n) {
    let seq = [0,1,1];
    if (seq[n]) return seq[n];
    for (let i = 3; i<= n; i++) {
        seq[i] = seq[i-1] + seq[i-2];
    }
    return seq[n];
}


