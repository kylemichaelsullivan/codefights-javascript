// https://codefights.com/arcade/intro/level-12/sCpwzJCyBy2tDSxKW

function messageFromBinaryCode(code) {
    var result="";
    var arr=code.match(/[0-1]{1,8}/g);
    for(var i=0;i<arr.length;i++){
        result+=String.fromCharCode(parseInt(arr[i],2).toString(10));
    }
    return result;
}
