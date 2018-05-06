// https://codefights.com/arcade/intro/level-4/Xfeo7r9SBSpo3Wico

function palindromeRearranging(inputString) {
    var array=inputString.split("");
    var obj={};
    
    for(let i=0;i<array.length;i++){
        if(!obj.hasOwnProperty(array[i]))obj[array[i]]=1;
        else obj[array[i]]++;
    }
    var odds=0;
    for(val in obj){
        if(obj[val]%2!=0)odds++;
    }
    return odds>1?false:true;
}
