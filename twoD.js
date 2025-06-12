var DynamicArray = /** @class */ (function () {
    function DynamicArray(n, queries) {
        this.n = n;
        this.queries = queries;
        this.bucket = [];
        for (var i = 0; i < n; i++) {
            this.bucket.push([]);
        }
        this.lastAnswer = 0;
        this.results = [];
        this.queries = queries;
    }
    DynamicArray.prototype.runQuery = function () {
        for (var _i = 0, _a = this.queries; _i < _a.length; _i++) {
            var query = _a[_i];
            var type = query[0], x = query[1], y = query[2];
            var index = (x ^ this.lastAnswer) % this.n;
            if (type === 1) {
                // Type 1: Append y to the selected bucket
                this.bucket[index].push(y);
            }
            else if (type === 2) {
                var size = this.bucket[index].length;
                var value = this.bucket[index][y % size];
                this.lastAnswer = value;
                this.results.push(value);
            }
        }
        return this.results;
    };
    return DynamicArray;
}());
var queries = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1]
];
var dynArray = new DynamicArray(2, queries);
console.log(dynArray.runQuery());
