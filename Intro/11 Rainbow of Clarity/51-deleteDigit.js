// https://codefights.com/arcade/intro/level-11/vpfeqDwGZSzYNm2uX

function deleteDigit(n) {
    var m=0;
    for(let d=1;d<=n;d*=10){
        let t=n%d+(Math.floor(Math.floor(n/d)/10)*d)
        m=Math.max(m,t);
    }
    return m;
}
