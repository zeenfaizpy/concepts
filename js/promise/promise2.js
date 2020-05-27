// Promise always resolve only one time

var promise21 = new Promise((resolve, reject) => {
    resolve(1)
    setTimeout(() => resolve(2), 1000);
})

promise21.then(console.log);

var promise22 = new Promise((resolve, reject) => {
    resolve(1)
    setTimeout(() => console.log(2), 1000);
})

promise22.then(console.log);