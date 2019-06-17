// https://app.codesignal.com/arcade/intro/level-12/NJJhENpgheFRQbPRA

function digitsProduct(product) {
  if(product < 10) return (product > 0) ? product : 10;

  let r = '';

  for(let i = 9; i > 1; i--){
    while(product % i ==0){
      product /= i;
      r = String.fromCharCode('0'.charCodeAt()+i)+r;
    }
  }

  return product != 1 ? -1 : parseInt(r);
}
