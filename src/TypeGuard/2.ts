export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

function print(value: Person | Product) {
  console.log(value.name);
  if (value instanceof Person) {
    // class의 경우에는 instanceof 라는 키워드사용가능(객체검사)
    console.log(value);
  } else {
    console.log(value.price);
  }
}
// 타입가드로 인해 자동으로 분기문에서 타입을 체크
