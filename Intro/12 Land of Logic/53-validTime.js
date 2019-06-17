// https://app.codesignal.com/arcade/intro/level-12/ywMyCTspqGXPWRZx5

function validTime(time) {
  time = time.split(':');
  const h = time[0], m = time[1];

  return (h >= 0 && h < 24) && (m >= 0 && m <60);
}
