export function searchInsert(numbs: number[], target: number): number {
  let left = 0
  let right = numbs.length - 1
  while (right >= left) {
    const mid = Math.floor((right + left) / 2)
    if (numbs[mid] === target) {
      return mid 
    }
    if (target > numbs[mid]) {
      left = mid + 1
    } else {
      right = mid - 1 // 如果沒找到相等的值，返回應該插入的位置
    }
  }
  return left
};