var HourlyGlass = /** @class */ (function () {
    function HourlyGlass(matrix) {
        this.matrix = [];
        this.matrix = matrix;
    }
    HourlyGlass.prototype.sumArray = function () {
        var max = -Infinity;
        for (var i = 0; i <= 3; i++) {
            for (var j = 0; j <= 3; j++) {
                var sum = this.matrix[i][j] + this.matrix[i][j + 1] + this.matrix[i][j + 2] +
                    this.matrix[i + 1][j + 1];
                this.matrix[i + 2][j] + this.matrix[i + 2][j + 1] + this.matrix[i + 2][j + 2];
                if (sum > max) {
                    max = sum;
                }
            }
        }
        return max;
    };
    return HourlyGlass;
}());
var matrix = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
];
var arry = new HourlyGlass(matrix);
console.log(arry);
console.log(arry.sumArray());
