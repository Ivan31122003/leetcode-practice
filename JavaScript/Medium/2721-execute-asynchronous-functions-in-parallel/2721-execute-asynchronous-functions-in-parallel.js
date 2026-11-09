/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    const result = [];
    let completed = 0;

    return new Promise((resolve, reject) => {
        if (functions.length === 0) {
            resolve(results);
            return;
        }
        for(let i = 0; i < functions.length; ++i) {
            Promise.resolve(functions[i]()).
                then(value => {
                    ++completed;
                    result[i] = value;

                    if(completed === functions.length) resolve(result);
                })
                .catch(reject)
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */