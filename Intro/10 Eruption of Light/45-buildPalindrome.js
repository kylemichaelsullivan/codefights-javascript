// https://codefights.com/arcade/intro/level-10/ppZ9zSufpjyzAsSEx

function checkPalindrome(st) {
    for(let i=0;i<st.length/2;i++){
        if(st[i]!=st[st.length-1-i]){
            return false;
        }
    }
    return true;
}

function buildPalindrome(st) {
    var r=st.split("").reverse().join("");
    if(checkPalindrome(st)){
        return st;
    }
    for(let i=0;i<st.length;i++){
        if(checkPalindrome(st+r.substring(r.length-1-i))){
            return st+r.substring(r.length-1-i);
        }
    }
    return st+r.substring(1);
}