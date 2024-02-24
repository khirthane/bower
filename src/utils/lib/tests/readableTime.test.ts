import { readabletime } from '../readableTime';

describe('readable time', () => {
  it('should return correct time for seconds', () => {
    const currentDate = new Date();
    const dateString = new Date(currentDate.getTime() - 7000).toISOString();
    expect(readabletime(dateString)).toEqual('7 seconds ago');
  });

  it('should return correct time for minutes', () => {
    const currentDate = new Date();
    const dateString = new Date(currentDate.getTime() - 900000).toISOString();
    expect(readabletime(dateString)).toEqual('15 minutes ago');
  });

  it('should return correct time for hours', () => {
    const currentDate = new Date();
    const dateString = new Date(currentDate.getTime() - 43200000).toISOString();
    expect(readabletime(dateString)).toEqual('12 hours ago');
  });

  it('should return correct time for days', () => {
    const currentDate = new Date();
    const dateString = new Date(currentDate.getTime() - 172800000).toISOString();
    expect(readabletime(dateString)).toEqual('2 days ago');
  });

  it('should return correct time for months', () => {
    const currentDate = new Date();
    const dateString = new Date(currentDate.getTime() - 5184000000).toISOString();
    expect(readabletime(dateString)).toEqual('2 months ago');
  });
});
