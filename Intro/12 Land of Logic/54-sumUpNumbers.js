// https://app.codesignal.com/arcade/intro/level-12/YqZwMJguZBY7Hz84T

function sumUpNumbers(inputString) {
  const s = inputString.split(/[^0-9]+/);
  const t = s.map(n => {return n != '' ? parseInt(n) : 0});

  return t.reduce((a,b) => {return a + b});
}
