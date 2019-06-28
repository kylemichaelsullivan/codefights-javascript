// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/RcK4vupi8sFhakjnh

const gcd = (n, m) => {
  while(m){
    let temp = n;
    n = m;
    m = temp % m;
  }

  return n;
}

function countBlackCells(n, m) {
  if(n == m) return (n + 2 * (n - 1));
  if(n == 1 || m == 1) return n * m;
  return n + m - gcd(n, m) + (gcd(n, m)-1)*2;
}
