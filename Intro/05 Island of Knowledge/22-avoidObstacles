// https://codefights.com/arcade/intro/level-5/XC9Q2DhRRKQrfLhb5

function avoidObstacles(inputArray) {
    inputArray=inputArray.sort();
    var lastArrVal=inputArray[inputArray.length-1];
    
    for(let i=1;i<=lastArrVal+1;i++){
        if(inputArray.every((element)=>{
            return element%i!=0;
        })){
            return i;
        }
    }
}
