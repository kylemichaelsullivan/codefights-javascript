// https://codefights.com/arcade/intro/level-5/ZMR5n7vJbexnLrgaM

function minesweeper(matrix) {
    var mines=[];
    for(let x=0;x<matrix.length;x++){
        mines.push([]);
        for(let y=0;y<matrix[x].length;y++){
            mines[x][y]=0;
            //above
            if(matrix[x][y-1])mines[x][y]++;

            //below
            if(matrix[x][y+1]!=undefined){
                if(matrix[x][y+1])mines[x][y]++;
            }
            
            //left
            if(matrix[x-1]!=undefined){
                if(matrix[x-1][y])mines[x][y]++;
            }
            
            //right
            if(matrix[x+1]!=undefined){
               if(matrix[x+1][y])mines[x][y]++;
            }
            
            if(matrix[x+1]!=undefined){
                //down right
                if(matrix[x+1][y+1])mines[x][y]++;
    
                //down left
                if(matrix[x+1][y-1])mines[x][y]++;
            }
            
            if(matrix[x-1]!=undefined){
                //top right
                if(matrix[x-1][y+1])mines[x][y]++;
            
                //top left
                if(matrix[x-1][y-1])mines[x][y]++;
            }

        }
    }
    return mines;
}
