// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/b5z4P2r2CGCtf8HCR

function killKthBit(n, k) {
  return n & ~(1 << (k - 1)) ;
}
