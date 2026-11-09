/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const symbolCounter = new Map();

    for(const symbol of s) {
        const counter = symbolCounter.get(symbol) || 0;
        symbolCounter.set(symbol, counter + 1);
    }

    for(const symbol of t) {
        if(!symbolCounter.has(symbol)) {
            return false;
        } else {
            const counter = symbolCounter.get(symbol);
            symbolCounter.set(symbol, counter - 1);
            if(counter === 1) {
                symbolCounter.delete(symbol);
            }
        }
    }

    return symbolCounter.size === 0;    
};