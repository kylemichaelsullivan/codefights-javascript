// https://codefights.com/arcade/intro/level-12/sqZ9qDTFHXBNrQeLC

function fileNaming(names) {
    var newArr=[];
    for(let i=0;i<names.length;i++){
        let count = 0;
        let tmp = names[i];
        if(newArr.indexOf(names[i])>-1){
            while(newArr.indexOf(names[i])>-1){
                count++;
                names[i]=tmp+"("+count+")";
            }
        }
        newArr.push(names[i]);
    }
    return newArr;
}
