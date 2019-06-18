// https://app.codesignal.com/arcade/code-arcade/intro-gates/HEsmEacHr2s9wahjr

function maxMultiple(divisor, bound) {
  for(let i = bound; i > 0; i--) {
    if(i % divisor == 0) return i;
  }
}
