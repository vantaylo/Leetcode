/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const results = new Array(arr.length);

    for (let i in arr){
        results[i] = fn(arr[i], Number([i]));
    }

    return results;
};
