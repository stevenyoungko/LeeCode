function guess(n: number): number {
  return 0;
}
// -1 if num is higher than the picked number
// if num is lower than the picked number
// otherwise return 0

function guessNumber(n: number): number {
  let left = 0;
  let right = n;
  while (right > left) {
    const mid = Math.floor((left + right) / 2) || 1;
    if (guess(mid) === 0) {
      return mid;
    }
    if (guess(mid) === -1) {
      right = mid;
    }
    if (guess(mid) === 1) {
      left = mid + 1;
    }
  }
  return left;
}
