// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/dShYZZT4WmvpmfpgB

function swapAdjacentBits(n) {
  const arr0 = ('' + n.toString(2)).split('');
  const arr1 = [];

  if(arr0.length % 2 != 0) arr0.unshift('0');

  for(let i = 0; i < arr0.length; i++){
    let f = arr0[i];
    let s = arr0[++i];

    arr1.push(s, f);
  }

  return parseInt(arr1.join(''), 2);
}
