// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/J7PQDxpWqhx7HrvBZ

function metroCard(lastNumberOfDays) {
  const months = [
    /*Jan*/ 31,
    /*Feb*/ 28,
    /*Mar*/ 31,
    /*Apr*/ 30,
    /*May*/ 31,
    /*Jun*/ 30,
    /*Jul*/ 31,
    /*Aug*/ 31,
    /*Sep*/ 30,
    /*Oct*/ 31,
    /*Nov*/ 30,
    /*Dec*/ 31
  ];

  switch(lastNumberOfDays){
    case 28: return [31];
    case 30: return [31];
    case 31: return [28, 30, 31];
  }
}
