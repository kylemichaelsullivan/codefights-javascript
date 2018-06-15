// https://codefights.com/arcade/intro/level-12/ywMyCTspqGXPWRZx5

function validTime(time) {
    time=time.split(":");
    var h=time[0],m=time[1];
    
    if(h>=0&&h<24&&m>=0&&m<60)return true;
    return false;
}
