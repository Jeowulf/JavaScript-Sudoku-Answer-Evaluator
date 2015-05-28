# JavaScript-Sudoku-Answer-Evaluator
Uses JavaScript to evaluate whether or not a finished Sudoku puzzle has violations

This Evaluator is designed to be used in conjunction with one array consisting of all 81 numbers in the Sudoku puzzle, for example:

var sudoku = ['2','7','5','1','9','8','3','6','4',
            '1','4','3','5','7','6','9','2','8',
            '8','9','6','2','4','3','1','7','5',
            '3','2','8','4','6','1','7','5','9',
            '4','5','7','9','8','2','6','1','3',
            '6','1','9','7','3','5','4','8','2',
            '7','8','1','3','2','4','5','9','6',
            '5','3','2','6','1','9','8','4','7',
            '9','6','4','8','5','7','2','3','1'];
            
If you have the information stored in nine separate arrays simply use the array.concat() method to combine into one array.

Then simply apply the code to test for violations.



