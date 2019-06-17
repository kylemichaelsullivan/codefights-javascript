// https://app.codesignal.com/arcade/intro/level-7/vExYvcGnFsEYSt8nQ

function circleOfNumbers(n, firstNumber) {
  const arr = [];
  const half = n / 2;

  for(let i = 0; i < n; i++){
    arr.push(i);
  }

  return firstNumber < half ? arr[firstNumber+half] : arr[firstNumber-half];
}
