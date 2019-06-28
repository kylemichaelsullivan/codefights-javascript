// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/8rqs3BLpdKePhouQM

function lineUp(commands) {
  let sum = 0, count = 0;

  for(let i = 0; i < commands.length; i++){
    switch (commands[i]){
      case 'L':
        sum--;
        break;

      case 'R':
        sum++;
        break;

      case 'A':
        sum += 2;
        break;
    }

    if(sum % 2 == 0) count++;
  }

  return count;
}
