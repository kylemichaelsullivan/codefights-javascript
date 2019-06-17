// https://app.codesignal.com/arcade/intro/level-6/mCkmbxdMsMTjBc3Bm

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  inputArray.forEach((elem,i)=>{
    if(elem == elemToReplace) inputArray[i] = substitutionElem;
  });

  return inputArray;
}
