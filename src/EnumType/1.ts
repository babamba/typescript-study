export {};

// Fruit 라는 enum 을 선언하고 이 안에 있는 아이템들은 각각 타입 혹은 값(숫자,문자)으로 사용가능
// Enum 의 각 원소는 이름과 값이 양방향으로 맵핑이 된다.
enum Fruit {
  Apple,
  Banana = 5, // 입력안 할시에는 기본적으로 0이 붙는다.
  Orange
}

const v1: Fruit = Fruit.Apple;
const v2: Fruit.Apple | Fruit.Banana = Fruit.Banana;

console.log(Fruit.Apple, Fruit.Banana, Fruit.Orange);
