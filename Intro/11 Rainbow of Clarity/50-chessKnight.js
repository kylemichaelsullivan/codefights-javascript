// https://app.codesignal.com/arcade/intro/level-11/pwRLrkrNpnsbgMndb

function chessKnight(cell) {
  const r = [2, 3, 4, 6, 8];

  const c1 = Math.min(cell.charCodeAt(0) - 97, 104 - cell.charCodeAt(0));
  const c2 = Math.min(cell.charCodeAt(1) - 49, 56 - cell.charCodeAt(1));

  return r[Math.min(c1, 2) + Math.min(c2, 2)];
}
