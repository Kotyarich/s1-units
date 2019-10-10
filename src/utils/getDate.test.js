import React from 'react'
import {getDate} from './getDate.js';

describe('getDate function', () => {
  it('timestamp is ISO 8601 Extended', () => {
    const timestamp = '2012-09-09T22:43:32.001+03:00';
    const result = getDate(timestamp);
    expect(result).toBe(`9 сентября, вс, 2012 год`);
  });

  it('YYYY-MM-DD timestamp', () => {
    const timestamp = '2012-09-09';
    const result = getDate(timestamp);
    expect(result).toEqual(`9 сентября, вс, 2012 год`);
  })
});

