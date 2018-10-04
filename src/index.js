module.exports = function solveSudoku(matrix) {

  for (let i = 0; i < matrix.length ; i++) {
    for (let j = 0; j < matrix.length; j++)  {
      if (matrix[i][j] == 0) {
        matrix[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];              
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++)  {
      for (let a = 0; a < matrix[i][j].length; a++) {
        for (let b = 0; b < matrix.length; b++) {
          if (matrix[i][b] == matrix[i][j][a]) {
            matrix[i][j].splice(a, 1);
            b--;
          }
        }
      }          
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++)  {
      for (let a = 0; a < matrix[i][j].length; a++) {
        for (let b = 0; b < 9; b++) {
          if (matrix[b][j] == matrix[i][j][a]) {
            matrix[i][j].splice(a, 1);
            b--;
          }
        }
      }          
    }
  }

  return matrix;
}
