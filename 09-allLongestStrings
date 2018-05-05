// https://codefights.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

function allLongestStrings(inputArray) {
    var longest=inputArray[0].length;
    for(let i=1;i<inputArray.length;i++){
        if(longest<inputArray[i].length){
           longest=inputArray[i].length;
        }
    }
    
    inputArray=inputArray.filter((element)=>{
        return element.length==longest;
    });
    
    return inputArray;
}
