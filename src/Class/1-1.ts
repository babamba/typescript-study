export {};

// 타입스크립트에서 클래스를 작성하는 방법
class Person {
  name: string; //멤버변수
  age: number = 0; //멤버변수

  //생성자
  constructor(name: string, age: number) {
    // 멤버변수를 초기화
    this.name = name;
    this.age = age;
  }

  //메서드
  sayHello() {
    console.log('안녕하세요.');
  }
}
