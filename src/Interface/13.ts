export {};

// 여러개의 인터페이스를 확장 할 수 있다.

interface Person {
  name: string;
  age: number;
}

interface Product {
  name: string;
  price: number;
}

// & 기호는 교차타입이다.(집합에서 교집합)
// 교차타입을 interfacef 에서 이용하면 여러 인터페이스를 하나로 합칠 수 있다.

type PP = Person & Product;

// Person과 Product를 모든 속성값을 포함.
// 타입이 가질수 있는 값의 집합에 대한 교집합이다.
const pp: PP = {
  name: 'a',
  age: 23,
  price: 1000
};
