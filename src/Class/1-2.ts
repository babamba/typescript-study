export {};

// 클래스 상속을 이용한 코드
class Person {
  sayHello() {
    console.log('안녕하세요.');
  }
}

// 자바와 동일하게 Person에 있는 멤버변수나 메서드에 사용 가능.
class Programmer extends Person {
  fixBug() {
    console.log('버그수정 완료');
  }
}

const programmer = new Programmer();

programmer.fixBug();
programmer.sayHello();
