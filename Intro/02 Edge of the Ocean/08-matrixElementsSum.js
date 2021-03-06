// https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr

function matrixElementsSum(matrix) {
  const bannedIndex = [];
  let total = 0;

  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] == 0) bannedIndex.push(j);
      else if(bannedIndex.indexOf(j) == -1) total += matrix[i][j];
    }
  }

  return total;
}
