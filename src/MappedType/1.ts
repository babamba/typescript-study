export {};

// mapped type

// 맵드타입은 이러한 인터페이스를 optional(선택속성)로 바꾸거나 readonly로 바꾸는 일을 할수가 있다.
interface Person {
  name: string;
  age: number;
}

interface PersonOptional {
  name?: string;
  age?: number;
}

interface PersonReadOnly {
  readonly name: string;
  readonly age: number;
}
