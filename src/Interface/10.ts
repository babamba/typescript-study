export {};

// 인터페이스는 클래스로 구현 될 수 있다.(자바처럼)

interface Person {
  name: string;
  age: number;
  isYoungThan(age: number): boolean;
}

// 인터페이스를 implements라는 키워드를 통해서 클래스를 만드는데.
// 인터페이스에서 정의된 세가지 속성을 클래스에서도 구현하고 있다.
// 인터페이스에서 정의한 이러한 속성을 정의하지않으면 에러발생.

class SomePerson implements Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  isYoungThan(age: number) {
    return this.age < age;
  }
}
