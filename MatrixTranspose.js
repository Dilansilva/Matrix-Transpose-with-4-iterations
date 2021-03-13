var matrix = [ //sample matrix
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
];

const swapping = (j,i) => {
  var temp = matrix[j][i];
  matrix[j][i] = matrix[i][j];
  matrix[i][j] = temp;
}

console.log('matrix before transpose',matrix);

for(var i = 0 ; i < 2 ; i++ ){
  for(var j = 1 ; j < 3 ; j++){
    swapping(j,i);
    console.log('Iteration');
  }
  swapping(j,i);
    if(i == 1){
      swapping(j,i+1)
    }
}

console.log('matrix after transpose',matrix);
