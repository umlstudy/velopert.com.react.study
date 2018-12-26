// tslint:disable:no-console
function printLater(num, fn) {
  setTimeout(
      function() { console.log(num); if (!!fn ) { fn();} },
      1000
  );
}

printLater(1, function() {
  printLater(2, function() {
      printLater(3, function() {
          printLater(4);
      })
  })
})

function printLater2(num) {
  return new Promise( // 새 Promise 를 만들어서 리턴함
      resolve => {
          setTimeout( // 1초뒤 실행하도록 설정
              () => {
                  console.log(num);
                  resolve(); // promise 가 끝났음을 알림
              },
              1000
          )
      }
  )
}


printLater2(100)
.then(() => printLater2(101))
.then(() => printLater2(102))
.then(() => printLater2(103))
.then(() => printLater2(104))
.then(() => printLater2(105))

// ------
function foo() {
    //var a = 'hello';
    if (true) {
      var a = 'bye';
      console.log('in if block ' + a); // bye
    }
    console.log('out if block ' + a); // bye
}
// -- error
//console.log('out function ' +  a); // bye

foo();
