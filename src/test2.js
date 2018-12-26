// tslint:disable:no-console
const arr = [1, 2, 3, 4, 5];

// concat
const arr2 = arr.slice(0,2).concat(arr.slice(3,5)) // [1, 2, 4, 5]
console.log(arr2);

// 전개연산자
const arr3 = [ ...arr.slice(0,2), ...arr.slice(3,5) ];
console.log(arr3);

// 필터
const arr4= arr.filter(num => num !== 3); // [1, 2, 4, 5]
console.log(arr4);

