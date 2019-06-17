// https://app.codesignal.com/arcade/intro/level-6/PWLT8GBrv9xXy4Dui

function alphabeticShift(inputString, shift = 1) {
  let output = '';

  for(let i = 0; i < inputString.length; i++){
    output += String.fromCharCode(((inputString.charCodeAt(i) - 97 + shift) % 26 ) + 97);
  }

  return output;
}
