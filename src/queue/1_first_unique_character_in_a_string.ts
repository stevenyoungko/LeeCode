function firstUniqChar(s: string): number {
  const strMap: { [key: string]: number } = {};
  const strArr = s.split("");
  for (const s of strArr) {
    strMap[s] = strMap[s] ? strMap[s] + 1 : 1;
  }
  for (const item in strMap) {
    if (strMap[item] === 1) {
      return strArr.findIndex((e) => e === item);
    }
  }
  return -1;
}
