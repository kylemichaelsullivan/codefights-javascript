// https://codefights.com/arcade/intro/level-8/8N7p3MqzGQg5vFJfZ

function differentSymbolsNaive(s) {
    var arr=[];
    s=s.split("");
    s.forEach((elem)=>{
        if(arr.includes(elem)==false){
            arr.push(elem);
        }
    })
    
    return arr.length;
}
