// https://app.codesignal.com/arcade/intro/level-9/AACpNbZANCkhHWNs3

function longestDigitsPrefix(inputString) {
  const result = inputString.match(/^\d+/);
  return result == null ? '' : String(result);
}
