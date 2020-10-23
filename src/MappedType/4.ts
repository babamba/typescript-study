export {};

interface Person {
  name: string;
  age: number;
}

// mapped 타입은 일종의 유틸리티 타입이라고 보면된다

type T1 = Person['name'];
// Person['name'] 이부분은 이렇게 어떤 인터페이스에 속성이름을 적어주면
// 그 속성의 값의 타입을 의미한다.
// [P in keyof T]: T[P] 값의 타입을 변화시키지 않겠다는것

type ReadOnly<T> = { readonly [P in keyof T]: T[P] }; // readonly 속성 넣어주기
type Partial<T> = { [P in keyof T]?: T[P] }; // 선택속성으로 만들기

//ReadOnly 와 Partial은 기존 타입스크립트에 내장되어 있음.

type T2 = ReadOnly<Person>;
type T3 = Partial<Person>;
