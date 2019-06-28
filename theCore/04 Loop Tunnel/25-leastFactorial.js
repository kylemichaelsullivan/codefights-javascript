// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/7BFPq6TpsNjzgcpXy

const factorial = n => {
  return n ? n * factorial(n - 1) : 1;
}

function leastFactorial(n) {
  for(let i = 0; i < n; i++){
    if(factorial(i) >= n) return factorial(i);
  }
}
