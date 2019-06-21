// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/r9azLYp2BDZPyzaG2

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  if(weight1 > maxW && weight2 > maxW) return 0;
  else if(weight1 + weight2 <= maxW) return value1 + value2;
  else if(weight1 > maxW) return value2;
  else if(weight2 > maxW) return value1;
  else if(value1 < value2) return value2;
  else return value1;
}
