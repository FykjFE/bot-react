import React from 'react';
import { SET_USER_STATUS } from '../../constants/user';
import { login } from '../user';

describe('测试store---用户', () => {
  it('测试store---用户', () => {
    const expected = {
      type: SET_USER_STATUS,
      payload: { isLogin: true },
    };
    expect(login()).toEqual(expected);
  });
});
