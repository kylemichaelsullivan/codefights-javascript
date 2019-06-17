// https://app.codesignal.com/arcade/intro/level-9/r9azLYp2BDZPyzaG2

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if(weight1 + weight2 <= maxW){
    // carry both
    return value1 + value2;
  } else {
    // only carry one
    if(weight1 <= maxW && weight2 <= maxW){
      // both <= maxW
      return value1 < value2 ? value2 : value1;
    } else if(weight1 <= maxW){
      // only first <= maxW
      return value1;
    } else if(weight2 <= maxW){
      // only second <= maxW
      return value2;
    }
  }

  // both > maxW
  return 0;
}
