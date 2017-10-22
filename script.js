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