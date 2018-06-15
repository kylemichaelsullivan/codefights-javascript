// https://codefights.com/arcade/intro/level-6/6cmcmszJQr6GQzRwW

function evenDigitsOnly(n) {
    n=n.toString().split("");
    for(let i=0;i<n.length;i++){
        if(n[i]%2!=0)return false;
    }
    return true;
}
