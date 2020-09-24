export {};

function getIsValidEnumValue(enumObject: any, value: number | string) {
  return Object.keys(enumObject)
    .filter(key => isNaN(Number(key)))
    .some(key => enumObject[key] === value);
}

enum Some {
  Key1 = 1
}

// 위의 필터의 경우 양방향맵핑을 지워주는 역할
// Some['Key1'] = 1;
// Some[1] = 'Key1';
