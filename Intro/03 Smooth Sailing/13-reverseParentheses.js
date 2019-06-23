// https://app.codesignal.com/arcade/intro/level-3/3o6QFqgYSontKsyk4

const reverseInParentheses = s => {
  return s.includes('(') ? reverseInParentheses(reverseRecur(s)) : s;
}

function reverseRecur(s){
  const regex = /\(([^()]*)\)/i;
  const substr = regex.exec(s)[1].split('').reverse().join('');
  return s.replace(regex,substr);
}
