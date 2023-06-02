// index.test.ts
import { add } from './index';

describe('add function', () => {
  test('should return the sum of two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });
});
