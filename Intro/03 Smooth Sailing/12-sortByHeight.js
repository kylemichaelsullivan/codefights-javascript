// https://codefights.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

function sortByHeight(a) {
    var array=a.filter((element)=>{
        if(element!=-1)return element;
    }).sort((a,b)=>{
        return a-b;
    })
    
    var index=0;
    for(let i=0;i<a.length;i++){
        if(a[i]!=-1){
            a[i]=array[index];
            index++;
        }
    }
    
    return a;
}