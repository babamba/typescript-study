export {};

type Overwrite<T, U> = { [P in Exclude<keyof T, keyof U>]: T[P] } & U;

interface Person {
  name: string;
  age: number;
}

// 겹치는게 있다면 그것을 T에서 제거후 객체타입을 새로만들어주고 U와 교집합해준다.
type T1 = Overwrite<Person, { age: string; nation: string }>;

const p: T1 = {
  name: "mike",
  age: "23",
  nation: "korea",
};
