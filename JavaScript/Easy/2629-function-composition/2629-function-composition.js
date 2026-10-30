/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let currArg = x;
        for(const fn of functions.toReversed()) {
            currArg = fn(currArg);
        }
        return currArg;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */