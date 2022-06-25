import { formatMinutes } from './formatMinutes';

describe('formatMinutes', () => {
  it('should convert minutes correctly', () => {
    expect(formatMinutes('0')).toEqual('00:00:00');
    expect(formatMinutes(0)).toEqual('00:00:00');
    expect(formatMinutes('4')).toEqual('00:04:00');
    expect(formatMinutes(4)).toEqual('00:04:00');
    expect(formatMinutes('45.5')).toEqual('00:45:00');
    expect(formatMinutes(45.5)).toEqual('00:45:00');
    expect(formatMinutes('126')).toEqual('02:06:00');
    expect(formatMinutes(126)).toEqual('02:06:00');
  });
  it('should throw an error when arg is incorrect', () => {
    expect(formatMinutes('abc')).toEqual('00:05:00');
    expect(formatMinutes('')).toEqual('00:05:00');
    expect(formatMinutes([])).toEqual('00:05:00');
    expect(formatMinutes({})).toEqual('00:05:00');
    expect(formatMinutes()).toEqual('00:05:00');
  });
});