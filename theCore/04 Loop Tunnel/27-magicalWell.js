// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/LbuWRHnMoJH9SAo4o

function magicalWell(a, b, n) {
  let money = 0;

  for(let i = 0; i < n; i++){
    money += a++ * b++;
  }

  return money;
}
