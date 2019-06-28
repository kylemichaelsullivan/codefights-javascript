// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/KLbRMcWhaZi3dvYH5

const roundness = num => {
  let trailers = 0;

  while(num % 10 == 0){
    [trailers, num] = [trailers + 1, num / 10]
  }

  return trailers;
}

function increaseNumberRoundness(n) {
  const str = n.toString();
  const len = str.length;
  const baseRoundness = roundness(n);

  for(let i = 0; i < len; i++){
    for(let j = i + 1; j < len; j++){
      const arr = [...str];
      [arr[i], arr[j]] = [arr[j], arr[i]];
      const num = parseInt(arr.join(''));
      if(roundness(num) > baseRoundness) return true;
    }
  }

  return false;
}
