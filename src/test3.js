// tslint:disable:object-literal-sort-keys
// tslint:disable:no-console

var async1 = function(param, callback) { callback(param*2); }
var async2 = function(param, callback) { callback(param*3); }
var async3 = function(param, callback) { callback(param*4); }
 
var start = 1;

// callback 지옥 해결 promise
async1(start, result1 => {
    console.log('async1 (start  )=> ' + start);
    console.log('async1 (result1)=> ' + result1);
    async2(result1, result2 => {
        console.log('async1 (result1)=> ' + result1);
        console.log('async2 (result2)=> ' + result2);
        async3(result2, result3 => {
            console.log('async1 (result1)=> ' + result1);
            console.log('async2 (result2)=> ' + result2);
            console.log('async3 (result3)=> ' + result3);
            console.log(result3); // 24
        });
    });
});


function fasync1 (param) {
    return new Promise(function(resolve, reject) {
        console.log('before fasync1');
        resolve(param*2);
        console.log('end fasync1');
    });
}
function fasync2 (param) {
    return new Promise(function(resolve, reject) {
        console.log('before fasync2');
        resolve(param*3);
        console.log('end fasync2');
    });
}
function fasync3 (param) {
    return new Promise(function(resolve, reject) {
        console.log('before fasync3');
        resolve(param*4);
        console.log('end fasync3');
    });
}
 
var start = 1;
fasync1(start)
    .then(fasync2)
    .then(fasync3)
    .then(result => {
        console.log(result); // 24
    });