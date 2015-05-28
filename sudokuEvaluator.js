var boxes = [];
var resultBoxes;
var rows = [];
var resultRows;
var columns = [];
var resultColumns;
var nine = ['1','2','3','4','5','6','7','8','9'];
var resultSudoku;
var resultSudokuyo;

function checkColumns(sudokuName) {
    for (var k = 0; k < 9; k++) {
        for (var i = k; i < 81; i=i+9) {
           columns.push((sudokuName[i]));
        }
        for (var j = 0; j < 9; j++) {
            if (nine.indexOf(columns[j]) !== -1) {
                nine.splice(nine.indexOf(columns[j]), 1);
            }
       }
       if (nine.length !== 0) {
            resultColumns = 'fail';
            return resultColumns;
       }
       nine = ['1','2','3','4','5','6','7','8','9'];
       columns = [];
    }
}

function checkRows(sudokuName) {
    for (var i = 0; i < 81; i=i+9) {
        for (var k = i; k < i+9; k++) {
           rows.push((sudokuName[k]));
        }
        for (var j = 0; j < 9; j++) {
            if (nine.indexOf(rows[j]) !== -1) {
                nine.splice(nine.indexOf(rows[j]), 1);
            }
       }
       if (nine.length !== 0) {
            resultRows = 'fail';
            return resultRows;
       }
       nine = ['1','2','3','4','5','6','7','8','9'];
       rows = [];
    }
}

function checkBoxes(sudokuName) {
    for (var k = 0; k < 81; k = k + 27) {
        for (var i = k; i < k + 9; i=i+3) {
            boxes.push(sudokuName[i]);boxes.push(sudokuName[i+1]);boxes.push(sudokuName[i+2]);boxes.push(sudokuName[i+9]);boxes.push(sudokuName[i+10]);boxes.push(sudokuName[i+11]);boxes.push(sudokuName[i+18]);boxes.push(sudokuName[i+19]);boxes.push(sudokuName[i+20]);
            for (var j = 0; j < 9; j++) {
                if (nine.indexOf(boxes[j]) !== -1) {
                nine.splice(nine.indexOf(boxes[j]), 1);
                }
            }
            if (nine.length !== 0) {
                resultBoxes = 'fail';
                return resultBoxes;
            }
            nine = ['1','2','3','4','5','6','7','8','9'];
            boxes = [];
        }
    }
}

function checkSudoku(sudokuName) {
  checkColumns(sudokuName);
  checkRows(sudokuName);
  checkBoxes(sudokuName);
  if (resultBoxes === 'fail') {
    resultSudoku = 'fail';
    return resultSudoku;
  } else if (resultRows === 'fail') {
    resultSudoku = 'fail';
    return resultSudoku;
  } else if (resultColumns === 'fail') {
    resultSudoku = 'fail';
    return resultSudoku;
  } else {
    resultSudoku = 'success';
    return resultSudoku;
  }
}
