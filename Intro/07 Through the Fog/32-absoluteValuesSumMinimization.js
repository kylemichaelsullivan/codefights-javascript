// https://app.codesignal.com/arcade/intro/level-7/ZFnQkq9RmMiyE6qtq

function absoluteValuesSumMinimization(a) {
  const aL = a.length / 2;
  return a.length % 2 == 0 ? a[aL-1] : a[Math.floor(aL)];
}
