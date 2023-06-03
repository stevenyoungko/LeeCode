function intersection(numbs1: number[], numbs2: number[]): number[] {
  const set1 = new Set(numbs1);
  const set2 = new Set(numbs2);
  const res = [];
  for (const num of set1) {
    if (set2.has(num)) {
      res.push(num);
    }
  }
  return res;
}

function intersection2(numbs1: number[], numbs2: number[]): number[] {
  numbs1.sort((a, b) => a - b);
  const res: number[] = [];
  for (const num of numbs2) {
    if (!res.includes(num) && binarySearch(numbs1, num)) {
      res.push(num);
    }
  }
  return res;
}

function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return true; // 找到目標元素
    }
    if (target > arr[mid]) {
      left = mid + 1; // 目標元素在右半部分
    } else {
      right = mid - 1; // 目標元素在左半部分
    }
  }
  return false; // 沒有找到目標元素
}
