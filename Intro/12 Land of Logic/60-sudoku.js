// https://codefights.com/arcade/intro/level-12/tQgasP8b62JBeirMS

function sudoku(grid) {
  var checkBlock=function(block){
    var sample="123456789";
    block.sort();
    if(block.join("")==sample){
      return true;
    }
    return false;
  }

  var subgrids=[];

  for(let i=0;i<3;i++){
    subgrids.push([]);
    for(let j=0;j<3;j++){
      subgrids[i].push([]);
    }
  }

  for(let i=0;i<9;i++){
    var horizontal=[];
    var vertical=[];
    for(let j=0;j<9;j++){
      horizontal.push(grid[i][j]);
      vertical.push(grid[j][i]);
      subgrids[Math.floor(i/3)][Math.floor(j/3)].push(grid[i][j]);
    }
    if(!checkBlock(horizontal)){
      return false;
    }
    if(!checkBlock(vertical)){
      return false;
    }
  }

  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      if(!checkBlock(subgrids[i][j]))
        return false;
      }
    }
  return true;
}
