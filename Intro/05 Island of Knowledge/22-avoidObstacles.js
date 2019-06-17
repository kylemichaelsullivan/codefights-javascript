// https://app.codesignal.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5

function avoidObstacles(arr) {
  for(let n = 1; ; n++){
    if(arr.every(x => x % n)) return n
  }
}
