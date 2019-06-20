// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/7jaup9HprdJno2diw

function tennisSet(score1, score2) {
  if((0 <= score1 && score1 <= 10) && (0 <= score2 && score2 <= 10)) {
    if((score1 == 5 || score1 == 6) && score2 == 7 || (score2 == 5 || score2 == 6) && score1 == 7 || score1 < 5 && score2 == 6 || score2 < 5 && score1 == 6) return true;
    else return false;
  }
}
