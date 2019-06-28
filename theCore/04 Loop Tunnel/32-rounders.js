// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/H5PP5MXvYvWXxTytH

function rounders(n) {
  const rra = n.toString().split('').reverse();

  for(let i = 0; i < rra.length; i++){
    let temp = rra[i];

    if(temp >= 5 && i != rra.length - 1){
      rra[i] = 0;
      rra[i + 1]++;
    } else if(i != rra.length - 1){
      rra[i] = 0;
    }
  }

  return parseInt(rra.reverse().join(''));
}
