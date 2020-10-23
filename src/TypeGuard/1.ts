export {};

function print(value: number | string) {
  if (typeof value === "number") {
    // console.log((value as number).toFixed(2));
    console.log(value.toFixed(2));
    // as 의 경우 값의 타입을 개발자가 확신하는 경우에 타입을 적어줌으로써
    // 오른쪽에 있는 타입을 강제하는 기능 (타입단언)
    // 정말 어쩔수없을때만 적어야함.
  } else {
    //console.log((value as string).trim);
    console.log(value.trim);
    // 이렇게 값의 영역에서 사용한 코드를 분석해서
    // 이 안에 있는 value의 타입의 범위를 좁혀주는 이러한 기능이 타입가드
  }
}
