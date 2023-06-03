export function searchInsert(numbs: number[], target: number): number {
  let left = 0;
  let right = numbs.length - 1;
  while (right >= left) {
    const mid = Math.floor((right + left) / 2);
    if (numbs[mid] === target) {
      return mid; // 直接返回中間位置的索引值
    }
    if (target > numbs[mid]) {
      left = mid + 1; // 將左邊界移動到中間位置的右邊一個位置
    } else {
      right = mid - 1; // 將右邊界移動到中間位置的左邊一個位置
    }
  }
  return left; // 返回應該插入的位置
}
