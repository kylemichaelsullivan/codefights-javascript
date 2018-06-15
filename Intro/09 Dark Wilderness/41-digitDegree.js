// https://codefights.com/arcade/intro/level-9/hoLtYWbjdrD2PF6yo

function digitDegree(n) {
    let count=0;
    if(n<10){
        return count;
    }else{
        while(true){
            count++;
            n=n.toString().split("").reduce((a,b)=>{
                return parseInt(a)+parseInt(b);
            });
            if(n<10)break;
        }
    }
    return count;
}
