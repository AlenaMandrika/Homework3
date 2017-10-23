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


Array.prototype.MySort = function (arr) {
    var length = this.length;
    for (var i = 0; i < length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < length; j++) {
            if (this[j] < this[min]) {
                min = j;
            }
            var t = this[min];
            this[min] = this[i];
            this[i] = t;
        }
    }
    return arr
};
var arr3 = [1, 6, 9, 4, 9, -6, 5, -3];
arr3.MySort(function (arr) {
    if (a > b) {
        return 1
    }
    if (a < b) {
        return -1
    }
});
console.log(arr3);

var arr4 = ['h', 't', 'k', 's', 'a'];
arr4.MySort();
console.log(arr4);