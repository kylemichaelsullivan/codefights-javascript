// https://app.codesignal.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW

function evenDigitsOnly(n) {
  return (n + '').split('').every(x => x % 2 == 0);
}
