// ----- how to create a promise ----- //

// promise1 //
const promise1 = new Promise((resolve, reject) => {
    let completedPromise = true;
    if (completedPromise) {
        resolve(`Complete promise 1 <br>`);
    } else {
        reject(`Not completed promise 1 <br>`);
    }
});
// promise2 //
const promise2 = new Promise((resolve, reject) => {
    resolve(`Completed promise 2 <br>`);
});


// ----- how to use a promise ----- //

// promise1 //
// promise1
//     .then((res) => {
//         document.write(`${res}`);
//     })
//     .catch((error) => {
//         document.write(`${error}`);
//     });
// promise2 //
// promise2.then((res) => {
//     document.write(`${res}`);
// });


// ----- how to run multiple promise - all() ----- //

Promise.all([promise1, promise2])
.then(([res1, res2]) => document.write(res1, res2)); // destructure in promise


// ----- race() ----- //

const promise3 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve ("This is promise 3");
    }, 2000);
});
const promise4 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve ("This is promise 4");
    }, 1000);
});

Promise.race([promise3, promise4]).then((response) => document.write(response));


// ----- promise chaining ----- //
// promise chaining in next file index1.js ...