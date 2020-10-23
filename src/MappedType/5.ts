export {};

type Pick<T, K extends keyof T> = { [P in K]: T[P] };

//Pick 기존 타입스크립트에 내장되어 있음.
interface Person {
  name: string;
  age: number;
  language: string;
}

type T1 = Pick<Person, "language" | "name">;
