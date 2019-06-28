// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/LAKReA3CR9EwkZGSz

function candles(candlesNumber, makeNew) {
  let remain = 0, count = 0;

  while (candlesNumber > 0) {
    let tmp = candlesNumber + remain;
    count += candlesNumber;

    candlesNumber = Math.floor(tmp / makeNew);
    remain = tmp % makeNew;
  }

  return count;
}
