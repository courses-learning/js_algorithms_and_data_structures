// recursive fibonacci function
function fib(n) {
    if (n <= 2) return 1;
    return result = fib(n-1) + fib(n-2);
}

// dynamic programming version that stores work done
function dynamicFib(n, memo=[0,1,1]) {
    if (memo[n]) return memo[n];
    let result = dynamicFib(n-1, memo) + dynamicFib(n-2, memo);
    memo[n] = result;
    return result;
}


