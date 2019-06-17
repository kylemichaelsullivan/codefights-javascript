// https://app.codesignal.com/arcade/intro/level-8/8N7p3MqzGQg5vFJfZ

function differentSymbolsNaive(s) {
  s = s.split('');
  const arr=[];

  s.forEach((elem)=>{
    if(arr.includes(elem)==false) arr.push(elem);
  });

  return arr.length;
}
