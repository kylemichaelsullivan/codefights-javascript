// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/9nSj6DgqLDsBePJha

function secondRightmostZeroBit(n) {
  const arr = ('' + n.toString(2)).split('');
  let count = 0;
  let position = 0;

  for(let i = arr.length; i > 0; i--, position++){
    if(arr[i] == 0) ++count;
    if(count > 1) return 2**(--position);
  }
}
