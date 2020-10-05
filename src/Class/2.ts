export {};

// 타입스크립트에서 클래스를 작성하는 방법
class Person {
  // 클래스의 멤버 변수와 메서드는 접근범위를 설정할 수 있다.
  // public 은 외부에도 노출하면서 상속받는쪽에도 노출
  // private 외부 노출 X 상속받는쪽 노출 X
  // protected는 외부 노출 X 상속받는 쪽 노출 O

  // private name: string; //멤버변수
  // #name: string; //멤버변수 // #으로 private
  // protected name: string; //멤버변수
  // private readonly name: string; //읽기전용 변수 constructor에서는 변경가능
  name: string; //멤버변수

  //생성자
  //protected constructor(name: string) { // 생성자에 접근범위를 설정함으로써 인스턴스생성을 막고 상속용으로만 사용 할 수도 있다.
  constructor(name: string) {
    // 멤버변수를 초기화
    this.name = name;
  }

  //메서드
  sayHello() {
    console.log(`안녕하세요. 제 이름은 ${this.name} 이고`);
  }
}

class Programmer extends Person {
  // 자식요소에서 생성자를 선언할 때는 반드시 super를 호출해줘야 한다.
  // super를 호출해주면 부모 클래스의 생성자가 호출된다.
  // 선언하지 않으면 에러발생
  constructor(name: string) {
    super(name);
  }
  sayHello() {
    this.name;
    // 부모클래스에 sayHello 메서드가 있는데
    // 같은 이름으로 자식클래스에서도 sayHello를 작성을했다.
    // Programmer의 sayHello를 호출했을때 부모의 메서드가 아닌 자식(Programmer)의 sayHello를 호출한다.
    // 자바의 오버라이딩과 같은 개념.
    super.sayHello(); // 이건 부모의 메서드 호출
    console.log('저는 프로그래머 입니다.');
  }
}

class Doctor extends Person {
  constructor(name: string) {
    super(name);
  }
  sayHello() {
    super.sayHello();
    console.log('저는 의사 입니다.');
  }
}

const programmer = new Programmer('김지넌');
programmer.sayHello();
//console.log(programmer.name); // private일때는 에러발생
