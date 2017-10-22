Array.prototype.MyForEach = function (fun) {
    for (var i = 0; i < this.length; i++) {
        fun (this[i], i, this)
    }
};
var arr = [1, 6, 9, 4, 9];
arr.MyForEach(function (item, i, arr) {
    console.log(item, i, arr);
});
