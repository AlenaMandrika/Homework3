Array.prototype.MyForEach = function (fun) {
    for (var i = 0; i < this.length; i++) {
        fun (this[i], i, this)
    }
};
var arr = [1, 6, 9, 4, 9];
arr.MyForEach(function (item, i, arr) {
    console.log(item, i, arr);
});

Array.prototype.MyMap = function (fun) {
    var newResult = [];
    for (var i = 0; i < this.length; i++) {
        newResult.push(fun (this[i], i, this))
    }
    return newResult;
};
var arr2 = [1, 6, 9, 4, 9];
var newArr = arr2.MyMap(function (item, i, arr) {
    return item*2
});
console.log(newArr);


Array.prototype.MySort = function (fun) {
    fun = fun || function sort (a, b) {
        if (a === b) {
            return 0
        } else if (a > b) {
            return 1
        } else {
            return -1
        }
    };
    var num;
    var length = this.length;
    for (var i = 0; i < length - 1; i++) {
        for (var j = i + 1; j < length; j++) {
            if (fun(this[i], this[j]) === 1 && i >= 0) {
                num = this[j];
                this[j] = this[i];
                this[i] = num
            }
        }
    }
    return this
};

var test = [3, 5, 3, 21, 6, 8, 0];
var res = test.MySort(function (a, b) {
    console.log(a, b, b-a);
    return b-a
});
test.MySort();

