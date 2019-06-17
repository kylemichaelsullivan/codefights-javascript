// https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9

function alternatingSums(a) {
  let odd = 0, even = 0;

  a.forEach((element,index)=>{
    if(index % 2 == 0) odd += element;
    else even += element;
  })
  return [odd,even];
}
