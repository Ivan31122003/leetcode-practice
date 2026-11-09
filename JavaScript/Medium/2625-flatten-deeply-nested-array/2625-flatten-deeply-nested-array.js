/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n === 0) {
        return arr;
    }
    const result = [];
    for(const el of arr) {
        if(Array.isArray(el)) {
            result.push(...flat(el, n - 1));
        } else {
            result.push(el);
        }
    }

    return result;
};