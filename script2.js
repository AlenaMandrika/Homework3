var arr = [1, 8, 2, 3];
var result = arr.reduce(function (sum, current) {
    return sum + current
} , 0);
console.log(result);


var array = [1, 8, 2, 3];
var min = array[0];
var max = array[0];
var minIndex = 0;
var maxIndex = 0;
var result_1 = array.forEach(function (item, i, array) {
    if (item > max) {
        max = item;
        maxIndex = i;
    }
    if (item < min) {
        min = item;
        minIndex = i;
    }
});
console.log(max, min, minIndex, maxIndex);



var array_1 = [1, 8, 2, 3];
array_1.splice(minIndex, 1, max);
array_1.splice(maxIndex, 1, min);
console.log(array_1);

