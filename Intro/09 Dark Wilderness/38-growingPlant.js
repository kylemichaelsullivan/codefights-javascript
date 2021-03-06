// https://app.codesignal.com/arcade/intro/level-9/xHvruDnQCx7mYom3T

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height=0, day=1;

  while(height < desiredHeight){
    height += upSpeed;
    if(height >= desiredHeight) break;
    height -= downSpeed;
    day++;
  }

  return day;
}
