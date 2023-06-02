// index.test.ts
import { searchInsert } from './search_insert_position';

describe('search insert position', () => {
  const numbs = [1, 3, 5, 6] 
  test('should return the index of 2', () => {
    const result = searchInsert(numbs, 5);
    expect(result).toBe(2);
  });
  test('should return the index of 1', () => {
    const result = searchInsert(numbs, 2);
    expect(result).toBe(1);
  });
  test('should return the index of 4', () => {
    const result = searchInsert(numbs, 7);
    expect(result).toBe(4);
  });
  test('should return the index of 0', () => {
    const result = searchInsert(numbs, 0);
    expect(result).toBe(0);
  });
});
