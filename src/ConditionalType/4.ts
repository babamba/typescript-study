export {};

// 내장타입  ReturnType

// T 가 함수일때 T함수의 반환타입을 뽑아준다.
// T 라는것이 함수에 할당가능한 타입이면 R을 사용하겠다. (함수반환타입)
// infer = 타입추론을 위해 사용. 함수의 반환타입을 R이라는 변수에 담을 수 있다.
// infer 는 조건부 타입을 정의할 떄, extends 키워드 뒤에서 사용됨.
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

type T1 = ReturnType<() => string>;

function f1(s: string): number {
  return s.length;
}

type T2 = ReturnType<typeof f1>;
