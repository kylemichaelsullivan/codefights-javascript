// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/9nSj6DgqLDsBePJha

function secondRightmostZeroBit(n) {
  return ~(k = n | n + 1) & k + 1;
}
