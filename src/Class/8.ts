export {};

// 타입스크립트에서 클래스를 작성하는 방법
class Person {
  // public age: number; //멤버변수

  // constructor 매개변수에 접근범위나 readonly등을 사용하게 되면 자동으로 멤버변수로 등록된다.
  constructor(public name: string, public age: number) {
    this.age = age;
  }
}

const person = new Person('김지넌', 22);
console.log(person.name, person.age); // private일때는 에러발생
