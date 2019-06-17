// https://app.codesignal.com/arcade/intro/level-12/sCpwzJCyBy2tDSxKW

function messageFromBinaryCode(code) {
  const arr = code.match(/[0-1]{1,8}/g);
  let result = '';

  for(let i=0; i<arr.length; i++){
    result += String.fromCharCode(parseInt(arr[i],2).toString(10));
  }

  return result;
}
