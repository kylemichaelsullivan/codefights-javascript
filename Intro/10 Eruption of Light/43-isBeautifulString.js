// https://app.codesignal.com/arcade/intro/level-10/PHSQhLEw3K2CmhhXE

function isBeautifulString(inputString) {
  const array = new Array(26).fill(0);
  //ASCII: a=97,z=122

  for(let i = 0; i < inputString.length; i++){
    array[inputString[i].charCodeAt()-97]++;
  }

  for(let i = 1; i < array.length; i++){
    if(array[i]>array[i-1]) return false;
  }

  return true;
}
