// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/aFF9HDm2Rsti9j5kc

function isInfiniteProcess(a, b) {
  if(a == b) return false;

  for(let i = 0; i < 20; i++){
    if(++a == --b) return false;
  }

  return true;
}
