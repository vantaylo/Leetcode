/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let results = [];
    let index = 0;

    while (index < arr.length) {
        let subArr = arr.slice(index, index += size);
        results.push(subArr);
    }

    return results;
};
