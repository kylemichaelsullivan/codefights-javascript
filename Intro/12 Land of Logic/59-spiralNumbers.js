// https://app.codesignal.com/arcade/intro/level-12/uRWu6K8E7uLi3Qtvx

function spiralNumbers(n) {
  const m = new Array(n), directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  let currentDirectionIndex = 0, currentRow = 0, currentColumn = 0, currentNum = 1, tmpRow, tmpColumn;

  for(let i = 0; i < n; i++){
    m[i] = new Array(n);
  }

  for(let i = n * n; i > 0; i--){
    m[currentRow][currentColumn] = currentNum;
    currentNum++;
    if(i > 1){
      while(true){
        tmpRow = currentRow + directions[currentDirectionIndex][0];
        tmpColumn = currentColumn + directions[currentDirectionIndex][1];
        if(tmpRow < 0 || tmpRow >= n || tmpColumn < 0 || tmpColumn >= n || m[tmpRow][tmpColumn]){
          currentDirectionIndex = (currentDirectionIndex+1) % 4;
        } else {
          currentRow = tmpRow;
          currentColumn = tmpColumn;
          break;
        }
      }
    }
  }

  return m;
}
