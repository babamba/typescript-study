export {};

enum Fruit {
  Apple,
  Banana = 5,
  Orange
}

console.log(Fruit.Banana);
console.log(Fruit['Banana']); // 위와 아래는 똑같은 코드다
console.log(Fruit[5]);
