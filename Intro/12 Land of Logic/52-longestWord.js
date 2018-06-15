// https://codefights.com/arcade/intro/level-12/s9qvXv4yTaWg8g4ma

function longestWord(text) {
    text=text.match(/[a-z]+/gi);
    var longest="";
    for(let i=0;i<text.length;i++){
        if(longest.length<text[i].length){
            longest=text[i];
        }
    }
    return longest;
}
