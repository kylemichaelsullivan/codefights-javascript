// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/eC2Zxu5H5SnuKxvPT

function rangeBitCount(a, b) {
  const arr = [];
  let count = 0;

  for(let x = a; x <= b; x++){
    arr.push(x.toString(2));
  }

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] == 1) count++;
    }
  }

  return count;
}
