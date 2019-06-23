// https://app.codesignal.com/arcade/intro/level-8/3AgqcKrxbwFhd3Z3R

function extractEachKth(inputArray, k) {
  const output=[];

  for(let i = 0; i < inputArray.length; i++){
    if(i % k != k - 1) output.push(inputArray[i]);
  }

  return output;
}
