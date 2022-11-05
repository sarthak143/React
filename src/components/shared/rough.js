//let myPromiseAll
let Mypromiseall = (promises) => {
    let responses = [];
    let errorResp = [];
    return new Promise((resolve, reject) => {
        /** Loop over promises array **/
        promises.forEach(async (singlePromise, i) => {
            try {
                /** wait for resolving 1 promise **/
                let res = await singlePromise;
                responses.push(res);
                if (i == promises.length - 1) {
                    if (errorResp.length > 0) {
                        reject(errorResp);
                    } else {
                        // resolve(esponses)
                        // To know our cutom promise function returning result
                        resolve("custom promise" + responses);
                    }
                }
            } catch (err) {
                errorResp.push(err);
                reject(err);
            }
        });
    });
};

let p1 = Promise.resolve("Promise1");

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2");
    }, 1000);
});

Mypromiseall([p1, p2]).then(
    (res) => {
        console.log("Response => ", res);

    },
    (err) => {
        console.log("error =>", err);
    }
);
