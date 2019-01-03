import { Record } from 'immutable';

// tslint:disable:no-console
const Person = Record({
  name: '홍길동',
  age: 1
});


let person = Person();

console.log(person); 
// ▶Object {name: "홍길동", age: 1 }

console.log(person.name, person.age);
// "홍길동" 1

person = person.set('name', '김민준');
console.log(person.name); // 김민준


// 이건 오류 납니다: person.name = '철수';

// Record 에서 사전 준비해주지 않은 값을 넣어도 오류납니다.
// person = person.set('job', 5);


// 값을 따로 지정해줄수도 있습니다.
person = Person({
  age: 10,
  name: '영희'
});

const { name, age } = person; // 비구조화 할당도 문제없죠.
console.log(name, age); // "영희" 10

// 재생성 할 일이 없다면 이렇게 해도 됩니다.
const dog = Record({
  name: '멍멍이',
  age: 1
})()

console.log(dog.name); // 멍멍이

// 이런것도 가능하죠.
const nested = Record({
  foo: Record({
    bar: true
  })()
})();

console.log(nested.foo.bar); // true

// Map 다루듯이 똑같이 쓰면 됩니다.
const nextNested = nested.setIn(['foo', 'bar'], false);
console.log(nextNested);

let recordTestDummy=() => {
  console.log('recordTestDummy')
};

export default recordTestDummy;

