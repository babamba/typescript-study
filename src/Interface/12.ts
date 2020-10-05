export {};

// 여러개의 인터페이스를 확장 할 수 있다.

interface Person {
  name: string;
  age: number;
}

interface Programmer {
  favLanguage: string;
}

interface Korean extends Person, Programmer {
  isLiveInSeoul: boolean;
}

// interface Korean {
//   name: string;
//   age: number;
//   favLanguage: string;
//   isLiveInSeoul: boolean;
// }
