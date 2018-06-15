// https://codefights.com/arcade/intro/level-3/3o6QFqgYSontKsyk4

function reverseParentheses(s) {
    if(s.includes("(")){
        return reverseParentheses(reverseRecur(s));
    }
    return s;
}

function reverseRecur(s){
    var regex=/\(([^()]*)\)/i;
    var substr=regex.exec(s)[1];
    substr=substr.split("").reverse().join("");
    return s.replace(regex,substr);
}