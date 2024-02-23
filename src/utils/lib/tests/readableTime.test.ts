import { readabletime } from '../readableTime';

describe('readabletime', () => {
  it('should return the correct time difference in years', () => {
    // Test for more than a year difference
    expect(readabletime('2019-01-01')).toBe('5 years ago');
  });

  it('should return the correct time difference in months', () => {
    // Test for more than a month difference
    expect(readabletime('2022-08-01')).toBe('1 years ago');
  });

  it('should return the correct time difference in days', () => {
    // Test for more than a day difference
    expect(readabletime('2024-02-21')).toBe('2 days ago');
  });
});
