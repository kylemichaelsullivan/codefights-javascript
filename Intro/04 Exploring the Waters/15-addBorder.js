// https://app.codesignal.com/arcade/intro/level-4/ZCD7NQnED724bJtjN

function addBorder(picture) {
  let len = picture[0].length+2;
  let wall = '';

  for(let i = 0; i < len; i++){
    wall = wall.concat('*');
  }

  picture.unshift(wall);
  picture.push(wall);

  for(let j = 1; j < picture.length-1; j++){
    picture[j] = `*${picture[j]}*`;
  }

  return picture;
}
