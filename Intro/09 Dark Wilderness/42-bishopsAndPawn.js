// https://app.codesignal.com/arcade/intro/level-9/6M57rMTFB9MeDeSWo

function bishopAndPawn(bishop, pawn) {
  let bishopX = bishop[0].charCodeAt();
  let bishopY = parseInt(bishop[1]);

  let pawnX = pawn[0].charCodeAt();
  let pawnY = parseInt(pawn[1]);

  return bishopX + bishopY == pawnX + pawnY || bishopX + pawnY == pawnX +bishopY;
}
