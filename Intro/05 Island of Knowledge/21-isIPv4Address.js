// https://codefights.com/arcade/intro/level-5/veW5xJednTy4qcjso

function isIPv4Address(inputString) {
    var arr=inputString.split(".");
    if(arr.length-1!=3)return false;
    var output=arr.filter(val=>{
        return val!=""&&0<=val&&256>val;
    })
    return output.length==4;
}

// Alternative: Regex Only
function isIPv4Regex(inputstring) {
    return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(inputString);
}