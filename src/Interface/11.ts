export {};

// 인터페이스를 이용해서 새로운 인터페이스를 만들 수 있다.

interface Person {
  name: string;
  age: number;
}

interface Korean extends Person {
  isLiveInSeoul: boolean;
}
// 아래와 같은 인터펭시를 만든 것과 똑같다.

// interface Korean {
//   name: string;
//   age: number;
//   isLiveInSeoul: boolean;
// }
