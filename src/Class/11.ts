export {};

// abstract 를 통해서 추상 클래스를 정의할 수 있다.
abstract class Person {
  constructor(public name: string) {}
  sayHello() {
    console.log(`안녕하세요. 저는 ${this.name} 입니다`);
  }
  abstract sayHello2(): void;
}

// 자바와 동일하게 Person에 있는 멤버변수나 메서드에 사용 가능.
class Programmer extends Person {
  sayHello() {
    super.sayHello();
    console.log('저는 프로그래머 입니다.');
  }
  // 상속받는 쪽에서는 추상메서드를 반드시 정의해야 한다.
  sayHello2() {
    console.log('반가워요 저는 프로그래머 입니다.');
  }
}

//const person1 = new Person('바보'); // 추상클래스는 인스턴스를 만들 수 없다.
const programmer = new Programmer('김지눤');

programmer.sayHello();
programmer.sayHello2();
