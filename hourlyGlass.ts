class HourlyGlass{
    matrix: number[][] =[]

    constructor(matrix:number[][]){
        this.matrix = matrix
    }

    sumArray(){

        let max = -Infinity;

        for(let i = 0; i <= 3; i++){

            for(let j = 0; j<=3; j++){

                const sum = this.matrix[i][j] + this.matrix[i][j+1] + this.matrix[i][j+2] +
                                  this.matrix[i+1][j+1]
                            this.matrix[i+2][j] + this.matrix[i+2][j+1] + this.matrix[i+2][j+2];

                            if (sum > max){
                                max = sum;
                            }
            }
    }
    return max;
    }

    hourlyGlass(){
      for(let k = 0; k<=3; k++){
         for(let l = 0; l<=3; l++){
            
         }
      }
    }
} 

const matrix = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];
const arry = new HourlyGlass(matrix);
console.log(arry)
console.log(arry.sumArray())