// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/xzeZqCQjpfDJuN72S

function additionWithoutCarrying(param1, param2) {
  const p1 = ('' + param1).split('');
  const p2 = ('' + param2).split('');

  let sum = 0;

  for(let i = 0; i < Math.max(p1.length, p2.length); i++){
    const s1 = (i < p1.length) ? parseInt(p1[p1.length -1 - i]) : 0;
    const s2 = (i < p2.length) ? parseInt(p2[p2.length -1 - i]) : 0;
    const total = (s1 + s2) % 10;

    sum += total * 10 ** i;
  }

  return sum;
}
