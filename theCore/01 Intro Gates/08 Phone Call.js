// https://app.codesignal.com/arcade/code-arcade/intro-gates/mZAucMXhNMmT7JWta

function phoneCall(min1, min2_10, min11, s) {
  let mins = 0;

	if (s < min1) return mins;
  else mins++;

	for (; mins < 10; mins++) {
		if (s < min1 + min2_10 * mins) {
			return mins;
		}
	}

  return mins + Math.floor((s - (min2_10 * 9) - min1) / min11);
}
