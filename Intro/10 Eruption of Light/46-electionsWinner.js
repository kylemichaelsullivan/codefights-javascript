// https://app.codesignal.com/arcade/intro/level-10/8RiRRM3yvbuAd3MNg

function electionsWinners(votes, k) {
  const m = Math.max(...votes);

  if(k==0) return votes.filter(v=>{return v==m}).length == 1 ? 1 : 0;

  return votes.filter(v=>{return(v+k)>m}).length;
}
