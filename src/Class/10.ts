export {};
// getter 와 setter 사용법
class Person {
  static adultAge = 20; // 이런 정적 멤버변수는 각 객체와는 상관없이 고정된 값이다.
  constructor(public name: string, public age: number) {}
  sayHello() {
    console.log(`안녕하세요 저는 ${this.name} 입니다`);
    // 그래서 정적멤버변수를 사용할때는 클래스명에 점을 찍어서 접근 및 사용가능
    // age 는 일반적인 멤버 변수기 때문에 객체를 통해서 접근가능 this.age
    console.log(Person.getIsAdult(this.age) ? '저는 성인이 아닙니다' : '저는 성인입니다');
  }

  static getIsAdult(age: number) {
    return Person.adultAge <= age;
  }
}

const person = new Person('김지넌', 24);
person.sayHello();
console.log(`성인 판단 기준나이 : ${Person.adultAge}`);
