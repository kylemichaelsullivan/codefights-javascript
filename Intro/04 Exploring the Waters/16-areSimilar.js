// https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

function areSimilar(a, b) {
  if(a.toString() == b.toString()) return true;

  let arr0 = [], arr1 = [];

  for(let i = 0; i<a.length; i++){
    if(a[i] != b[i]){
      arr0.push(a[i]);
      arr1.push(b[i]);
    }
  }

  arr1 = arr1.reverse();

  return arr0.length == 2 && (arr0.toString() == arr1.toString());
}
