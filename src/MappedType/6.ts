export {};

interface Person {
  name: string;
  age: number;
  language: string;
}
//Record 기존 타입스크립트에 내장되어 있음.
type Record<K extends string, T> = { [P in K]: T };
type T1 = Record<"p1" | "p2", Person>;
type T2 = Record<"n1" | "n2", number>;
