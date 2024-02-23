import { readableClount } from '../readableCount';

describe('readableClount', () => {
  it('should return the number as a string if less than 1000', () => {
    expect(readableClount(500)).toBe('500');
  });

  it('should format numbers greater than or equal to 1000 as "x.xk"', () => {
    expect(readableClount(1000)).toBe('1.0k');
    expect(readableClount(9999)).toBe('10.0k');
    expect(readableClount(123456)).toBe('123.5k');
  });

  it('should format numbers greater than 1000000 as "x.xm"', () => {
    expect(readableClount(1000000)).toBe('1.0m');
    expect(readableClount(10000000)).toBe('10.0m');
    expect(readableClount(12345678)).toBe('12.3m');
  });
});
