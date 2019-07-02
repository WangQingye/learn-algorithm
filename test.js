function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (promises.length == 0) {
            resolve([])
        } else {
            let result = [];
            let index = 0;
            for (let i = 0; i < promises.length; i++) {
                Promise.resolve(promises[i]).then(data => {
                    result.push(data);
                    if (++index === promises.length) {
                        resolve(result);
                    }
                }, err => {
                    reject(err);
                });

            }
        }
    })
}