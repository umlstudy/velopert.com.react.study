// tslint:disable:no-console
const arr = [1, 2, 3, 4, 5];

// concat
const arr2 = arr.slice(0, 2).concat(arr.slice(3, 5)) // [1, 2, 4, 5]
console.log(arr2);

// 전개연산자
const arr3 = [...arr.slice(0, 2), ...arr.slice(3, 5)];
console.log(arr3);

// 필터
const arr4 = arr.filter(num => num !== 3); // [1, 2, 4, 5]
console.log(arr4);

// 데이터의 불변성을 지키며 수정하기.
const array = [{
        id: 0,
        text: 'hello',
        tag: 'a'
    },
    {
        id: 1,
        text: 'world',
        tag: 'b'
    },
    {
        id: 2,
        text: 'bye',
        tag: 'c'
    }
];

const modifiedArray = array.map(item => item.id === 1 ?
        ({ ...item,
            text: 'Korea'
        }) // id 가 일치하면 새 객체를 만들고, 기존의 내용을 집어넣고 원하는 값 덮어쓰기
        :
        item // 바꿀 필요 없는것들은 그냥 기존 값 사용
);

console.log(array);
console.log(modifiedArray);
