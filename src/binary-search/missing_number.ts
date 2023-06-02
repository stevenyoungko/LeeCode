function missingNumber(numbs: number[]): number {
  for (let i = 0; i <= numbs.length; i++) {
    if (!numbs.includes(i)) {
      return i;
    }
  }
  return numbs.length;
}

function missingNumber2(numbs: number[]): number {
  const sortNumbs = numbs.sort((a, b) => a - b);
  let left = 0;
  let right = sortNumbs.length;
  while (right > left) {
    const mid = Math.floor((left + right) / 2);
    if (sortNumbs[mid] > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
