// https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9

const findNext = (current, a) => {
  if(a.length == 0) return a;

  for(let i = 0; i < a.length; i++){
    if(differsByOneChar(current, a[i])){
      let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i+1)));
      if(remaining.length === 0) return remaining;
    }
  }

  return a;
}

const differsByOneChar = (s1, s2) => {
  let mismatches = 0;

  for(let i = 0; i < s1.length; i++){
    if(s1[i] != s2[i]) mismatches++;
    if(mismatches > 1) break;
  }

  return mismatches == 1;
}

function stringsRearrangement(a) {
  for(let i = 0; i < a.length; i++){
    let remaining = findNext(a[i], a);

    if(remaining.length == 0) return true;
  }

  return false;
}
