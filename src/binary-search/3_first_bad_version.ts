var solution = function (isBadVersion: any) {
  return function (n: number): number {
    for (let i = 0; i <= n; i++) {
      if (isBadVersion(i)) {
        return i;
      }
    }
    return 0;
  };
};

var solution2 = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 0;
    let right = n;
    while (right > left) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
