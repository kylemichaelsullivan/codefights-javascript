// https://app.codesignal.com/arcade/intro/level-3/3o6QFqgYSontKsyk4

function reverseInParentheses(s) {
  if(s.includes('(')){
    return reverseInParentheses(reverseRecur(s));
  }
  return s;
}

function reverseRecur(s){
  const regex = /\(([^()]*)\)/i;
  const substr = regex.exec(s)[1].split('').reverse().join('');
  return s.replace(regex,substr);
}
