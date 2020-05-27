// This explains order of execution inside promise

var promise = new Promise((resolve, reject) => {
    resolve("b")
    resolve(setTimeout(()=> test(), 0));
    function test(){
        console.log("c");
        console.log("d");
    }
    console.log("a");
})

promise.then(console.log).catch(console.log);
