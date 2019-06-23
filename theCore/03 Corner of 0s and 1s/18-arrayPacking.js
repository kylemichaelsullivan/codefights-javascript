// https://app.codesignal.com/arcade/code-arcade/corner-of-0s-and-1s/KeMqde6oqfF5wBXxf

function arrayPacking(a) {
  let output = '';

  for(let i = a.length - 1; i >= 0; i--){
    let b = a[i].toString(2);
    while(b.length < 8) b = '0' + b;
    output += b;
  }

  return parseInt(output, 2);
}
