// https://app.codesignal.com/arcade/code-arcade/intro-gates/wAGdN6FMPkx7WBq66

function addTwoDigits(n) {
  const array = ('' + n).split('');

  let sum = 0;

  for(let i = 0; i < array.length; i++){
    sum += parseInt(array[i]);
  }

  return sum;
}
