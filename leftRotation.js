var LeftRotation = /** @class */ (function () {
    function LeftRotation(rotateArray) {
        this.rotateArray = rotateArray;
    }
    LeftRotation.prototype.rotateLeft = function (d) {
        var result = [];
        var n = this.rotateArray.length;
        for (var i = 0; i < n; i++) {
            var lastNo = (i + d) % n;
            result.push(this.rotateArray[lastNo]);
        }
        return result;
    };
    return LeftRotation;
}());
var myArray = new LeftRotation([1, 2, 3, 4, 5]);
console.log(myArray.rotateLeft(2));
