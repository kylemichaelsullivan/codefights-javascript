// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/e3zfPNTwTa9qTQzcX

function mirrorBits(a) {
  const arr = a.toString(2).split('');
  let z = '';

  for(let i = arr.length - 1; i >= 0; i--){
    z += arr[i];
  }

  return parseInt(z, 2);
}
