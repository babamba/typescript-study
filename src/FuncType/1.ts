export {};

function getText(name: string, age: number): string {
  // 파라미터에 맞는 메서드로 안내
  const nameText = name.substr(0, 10);
  const ageText = age >= 35 ? 'senior' : ' junior';
  return `name ${nameText}, age ${ageText}`;
}

const v1: string = getText('mike', 23);
// const v2: string = getText('mike', '23'); // age가 number 이기때문에 에러
// const v3: number = getText('mike', 23); // 리턴타입이 string 이기 때문에 에러
