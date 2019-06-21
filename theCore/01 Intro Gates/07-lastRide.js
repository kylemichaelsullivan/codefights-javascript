// https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L

function lateRide(n) {
  const h = ('' + Math.floor(n/60)).split('');
  const m = ('' + n % 60).split('');
  const t = h.concat(m);

  let sum = 0;

  for(let i = 0; i < t.length; i++){
    sum += parseInt(t[i]);
  }

  return sum;
}
