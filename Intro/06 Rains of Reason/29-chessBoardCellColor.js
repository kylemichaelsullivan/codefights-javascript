// https://codefights.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi

function chessBoardCellColor(cell1, cell2) {
    var total1=cell1.charCodeAt(0)+parseInt(cell1[1]);
    var total2=cell2.charCodeAt(0)+parseInt(cell2[1]);
 
    return total1%2==total2%2;
}
