// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/scG8AFsPuqQGx8Qjf

function appleBoxes(k) {
  let yellow = 0, red = 0;

  for(let i = 0; i <= k; i++){
    (i % 2 == 1) ? yellow += i ** 2 : red += i ** 2;
  }

  return red - yellow;
}
