function intersect(numbs1: number[], numbs2: number[]): number[] {
  const map: { [key: number]: number } = {};
  const res = [];
  for (const num of numbs1) {
    map[num] = (map[num] || 0) + 1;
  }
  for (const num of numbs2) {
    if (map[num]) {
      res.push(num);
      map[num] -= 1;
    }
  }
  return res;
}
