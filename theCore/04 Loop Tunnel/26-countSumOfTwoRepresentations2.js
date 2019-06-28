// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/hBw5BJiZ4LmXcy92u

function countSumOfTwoRepresentations2(n, l, r) {
  let result = 0;

  for (let i = l; i <= r; i++) {
    const x = n - i;

    if (x >= l && x <= r && x >= i) result++;
  }

  return result;
}
