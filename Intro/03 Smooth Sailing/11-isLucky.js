// https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ

function isLucky(n) {
  n = n.toString();
  const half = n.length / 2;

  const firstHalf = n.substring(0, half).split('').reduce((a,b)=>{
    return parseInt(a) + parseInt(b);
  });

  const secondHalf = n.substring(half,).split('').reduce((a,b)=>{
    return parseInt(a) + parseInt(b);
  });

  return firstHalf == secondHalf;
}
