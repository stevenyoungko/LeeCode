function isPerfectSquare(num: number): boolean {
  let left = 0;
  let right = num;
  while (right > left) {
    const mid = Math.floor((left + right) / 2) || 1;
    if (mid * mid === num) return true;
    if (mid * mid > num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return false;
}
