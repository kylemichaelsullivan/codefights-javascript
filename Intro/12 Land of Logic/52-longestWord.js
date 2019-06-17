// https://app.codesignal.com/arcade/intro/level-12/s9qvXv4yTaWg8g4ma

function longestWord(text) {
  text = text.match(/[a-z]+/gi);
  let longest = text[0];

  for(let i = 1; i < text.length; i++){
    if(longest.length < text[i].length) longest = text[i];
  }

  return longest;
}
