// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/jZ4ZSiGohzFTeg4yb

function willYou(young, beautiful, loved) {
  if(young && beautiful && !loved) return true;
  if(loved && (!young || !beautiful)) return true;
  return false;
}
