export {};

interface Person {
  // 읽기전용 속성
  readonly name: string;
  age?: number;
}

// p1 을 Person이라고 미리 정의를 해놓고
// 리터럴로 값을 할당하고 있다.
// 이렇게 리터럴로 값을 초기화 하는 경우에는
// 인터페이스에 정의되지 않은 값이 있으면 타입에러 발생
// 에러가 발생하는 이유는 프로그래머의 실수일 확률이 높기때문.
// 타입스크립트의 편의기능이라고 생각 할 수 있음.
const p1: Person = {
  name: 'mike',
  birthday: '1997-01-01'
};

// 보통은 인터페이스에 정의되지 않은 속성값을 가지고있어도
// 할당이 가능.
// Person 안에는 birthday가 없는데.
// 하지만 p3 를 Person 타입에 입력할 수 가있음.
// 이는 p3 타입이 p2의 타입을 포함하는 더 큰 타입이기 때문.
const p2 = { name: 'mike', birthday: '1997-01-03' };
const p3: Person = p2;
