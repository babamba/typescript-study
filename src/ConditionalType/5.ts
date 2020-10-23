export {};

// 입력된 T라는 타입이 어떤값의 배열이면
// 그 배열의 아이템(타입)을 사용하겠다 라는 의미.
// 만약에 배열이 아니라면 밑으로 조건을 찾아감

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? // 함수에 할당 가능한 타입이라면 함수의 반환 타입을 사용하겠다.
    U
  : T extends Promise<infer U>
  ? // Promise에 할당가능한 타입이라면 이 Promise의 값인 U 를 사용하겠다 .
    U
  : T; // 그 어느것도 조건이 맞지않는다면 T 자신을 사용한다.

type T0 = Unpacked<string>;
type T1 = Unpacked<string[]>;

type T2 = Unpacked<() => string>;
type T3 = Unpacked<Promise<string>>;
type T4 = Unpacked<Promise<string>[]>;
type T5 = Unpacked<Unpacked<Promise<string[]>>>;
