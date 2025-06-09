var OneDarray = /** @class */ (function () {
    function OneDarray(arrayOne) {
        this.array = arrayOne;
    }
    OneDarray.prototype.reverseArray = function (callback) {
        var i;
        for (var i_1 = this.array.length - 1; i_1 >= 0; i_1--) {
            console.log(callback(this.array[i_1], i_1, []));
        }
    };
    return OneDarray;
}());
var arr = new OneDarray([5, 4, 3, 2, 1]);
arr.reverseArray(function (value, index, array) {
    console.log("".concat(value, ", ").concat(index, ", ").concat(array));
});
console.log(arr);
console.log(arr.array);
