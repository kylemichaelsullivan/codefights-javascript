// https://codefights.com/arcade/intro/level-9/6M57rMTFB9MeDeSWo/solutions

function bishopAndPawn(bishop, pawn) {
    let bishopX=bishop[0].charCodeAt();
    let bishopY=parseInt(bishop[1]);
    
    let pawnX=pawn[0].charCodeAt();
    let pawnY=parseInt(pawn[1]);
    
    if(bishopX+bishopY===pawnX+pawnY||bishopX+pawnY===pawnX+bishopY){
        return true;
    }
    return false;
}
