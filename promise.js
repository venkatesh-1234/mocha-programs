function first(value){
    return value+2;
}
function second(value){
    return value+2;
}
function three(value){
    return value+2;
}
var promise = new Promise (function(resolve,reject){
    resolve(2)
});
 promise.then(first).then(second).then(three).then(function(responce){
    console.log(responce);
})