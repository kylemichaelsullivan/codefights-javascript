// https://codefights.com/arcade/intro/level-8/Rqvw3daffNE7sT7d5

function arrayMaxConsecutiveSum(inputArray, k) {
    var sum=0,max=0;
    for(let i=0;i<inputArray.length;i++){
        sum+=inputArray[i];
        if(i>=k)sum-=inputArray[i-k];
        if(sum>max)max=sum;
    }
    return max;
}
