// https://app.codesignal.com/arcade/intro/level-7/PTWhv2oWqd6p4AHB9

X=(a,b,s,i)=>i==b.length ? s:X(a,b,s+(a[i]!=b[i]),i+1);

stringsRearrangement=A=>{
  // Build matrix to contain deltas
  M=A.map(a=>(N=[],A.map((b,c)=>X(a,b,0,C=0)==1&&N.push(c)),N));
  e=-1;

  // DFS from endpoint (if there is one) must eventually reach all nodes from this point
  w=(n,L)=>L==A.length||M[n].some(c=>!M[c].L&&w(c,L+1),M[n].L=L)||(M[n].L=0);

  // Check for fully connected graph every node has neighbors and no more than two leaf nodes
  return M.every((v,i)=>(b=(l=v.length)==1,b&&(e=i),C+=b,l))&&C<=2&&(e<0||w(e,1));
}
